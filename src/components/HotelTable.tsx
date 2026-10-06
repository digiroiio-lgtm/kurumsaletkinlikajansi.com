import Link from "next/link";
import type { HotelBlock } from "@/content/types";
import { hallRows, LAYOUT_LABEL, REGION_LABEL, fmt, hotelIndexable, maxCap } from "@/lib/hotels";

/**
 * Veriden üretilen otel/salon tablosu. Yalnızca doğrulanmış ve kaynaklı satırlar gösterilir;
 * kaynak linki her satırda yer alır (docs/HOTEL-DATA.md).
 */
export function HotelTable({ block, label }: { block: HotelBlock; label: string }) {
  const rows = hallRows(block.filter);
  if (!rows.length) return null;
  const layouts = block.layouts;

  if (block.mode === "halls") {
    return (
      <div className="hotel-block">
        <div className="table-wrap" tabIndex={0} role="region" aria-label={label}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Otel</th>
                <th scope="col">Salon</th>
                <th scope="col">Alan</th>
                {layouts.map((l) => (
                  <th key={l} scope="col">{LAYOUT_LABEL[l]}</th>
                ))}
                <th scope="col">Kaynak</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(({ hotel, hall }) => (
                <tr key={`${hotel.id}-${hall.name}`}>
                  <th scope="row">
                    {hotelIndexable(hotel) ? <Link href={`/rehberler/${hotel.slug}`}>{hotel.name}</Link> : hotel.name}
                    <span className="hotel-region">{REGION_LABEL[hotel.region]}</span>
                  </th>
                  <td data-label="Salon">{hall.name}</td>
                  <td data-label="Alan">{hall.areaM2 ? `${fmt(hall.areaM2)} m²` : "—"}</td>
                  {layouts.map((l) => (
                    <td key={l} data-label={LAYOUT_LABEL[l]}>{hall.capacity?.[l] ? fmt(hall.capacity[l]!) : "—"}</td>
                  ))}
                  <td data-label="Kaynak">
                    <a href={hall.source!.url} target="_blank" rel={hall.source!.type === "trade-listing" ? "noopener nofollow" : "noopener"} className="textlink">
                      {hall.source!.type === "official" ? "Otel" : "MICE listesi"}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="table-note">{block.caption ?? DEFAULT_CAPTION}</p>
      </div>
    );
  }

  // mode === "hotels": otel başına en büyük doğrulanmış salon
  const byHotel = new Map<string, (typeof rows)[number]>();
  for (const r of rows) if (!byHotel.has(r.hotel.id) || maxCap(r.hall, layouts) > maxCap(byHotel.get(r.hotel.id)!.hall, layouts)) byHotel.set(r.hotel.id, r);
  const list = [...byHotel.values()].sort((a, b) => maxCap(b.hall, layouts) - maxCap(a.hall, layouts));
  return (
    <div className="hotel-block">
      <div className="table-wrap" tabIndex={0} role="region" aria-label={label}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Otel</th>
              <th scope="col">Bölge</th>
              <th scope="col">Öne çıkan salon</th>
              <th scope="col">Alan</th>
              {layouts.map((l) => (
                <th key={l} scope="col">{LAYOUT_LABEL[l]}</th>
              ))}
              <th scope="col">Kaynak</th>
            </tr>
          </thead>
          <tbody>
            {list.map(({ hotel, hall }) => (
              <tr key={hotel.id}>
                <th scope="row">{hotelIndexable(hotel) ? <Link href={`/rehberler/${hotel.slug}`}>{hotel.name}</Link> : hotel.name}</th>
                <td data-label="Bölge">{REGION_LABEL[hotel.region]}</td>
                <td data-label="Öne çıkan salon">{hall.name}</td>
                <td data-label="Alan">{hall.areaM2 ? `${fmt(hall.areaM2)} m²` : "—"}</td>
                {layouts.map((l) => (
                  <td key={l} data-label={LAYOUT_LABEL[l]}>{hall.capacity?.[l] ? fmt(hall.capacity[l]!) : "—"}</td>
                ))}
                <td data-label="Kaynak">
                  <a href={hall.source!.url} target="_blank" rel={hall.source!.type === "trade-listing" ? "noopener nofollow" : "noopener"} className="textlink">
                    {hall.source!.type === "official" ? "Otel" : "MICE listesi"}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="table-note">{block.caption ?? DEFAULT_CAPTION}</p>
    </div>
  );
}

export const DEFAULT_CAPTION =
  "Kapasiteler düzene göre değişir: aynı salon tiyatro düzeninde en yüksek, banket düzeninde daha düşük kişi sayısını taşır; karşılaştırmayı aynı düzenden yapın. Veriler tesislerin ve MICE rehber listelerinin yayımladığı bilgilere dayanır (derleme: 6 Ekim 2026); kaynağı doğrulanamayan rakamlar yayınlanmaz. Her düzen için güncel kapasite teklif öncesi otel satış ekibiyle yazılı teyit edilmelidir.";
