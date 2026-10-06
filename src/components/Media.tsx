import Image from "next/image";
import { Scene } from "./art/Scene";
import { getSlot } from "@/content/tr/images";

type Props = {
  slot: string;
  /** `sizes` değeri LCP ve responsive performans için kritik; kullanıldığı kolon genişliğine göre verin. */
  sizes?: string;
  priority?: boolean;
  className?: string;
  /** Üstü kemerli (arch) kırpma — markaya özgü görsel motif */
  arch?: boolean;
  ratio?: "16/10" | "4/5" | "1/1" | "3/2" | "21/9" | "4/3";
};

/**
 * Görsel yuvası. `images.ts` içinde `src` tanımlıysa next/image (AVIF/WebP, responsive, lazy; `priority` ise preload),
 * tanımlı değilse markaya özgü SVG sahne gösterir. Böylece fotoğraf eklemek yalnızca bir manifest satırıdır.
 */
export function Media({ slot, sizes = "100vw", priority = false, className = "", arch = false, ratio = "16/10" }: Props) {
  const s = getSlot(slot);
  const cls = ["media", arch ? "media--arch" : "", className].filter(Boolean).join(" ");
  const style = { aspectRatio: ratio.replace("/", " / ") };
  if (s.src && s.width && s.height) {
    return (
      <div className={cls} style={style}>
        <Image
          src={s.src}
          alt={s.alt}
          width={s.width}
          height={s.height}
          sizes={sizes}
          priority={priority}
          fetchPriority={priority ? "high" : undefined}
          className="media__img"
        />
      </div>
    );
  }
  return (
    <div className={cls} style={style} aria-hidden="true">
      <Scene kind={s.scene} className="media__scene" />
    </div>
  );
}
