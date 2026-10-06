export type NavLink = { label: string; href: string };
export type NavGroup = { label: string; href?: string; columns?: { heading: string; links: NavLink[] }[]; links?: NavLink[] };

export const nav: NavGroup[] = [
  {
    label: "Hizmetler",
    columns: [
      {
        heading: "Etkinlik türleri",
        links: [
          { label: "Kurumsal Etkinlik Organizasyonu", href: "/kurumsal-etkinlik-organizasyonu" },
          { label: "Team Building", href: "/team-building" },
          { label: "Şirket Motivasyon Etkinlikleri", href: "/sirket-motivasyon-etkinlikleri" },
          { label: "Incentive Organizasyonu", href: "/incentive-organizasyonu" },
          { label: "Corporate Retreat", href: "/corporate-retreat" },
          { label: "Gala Organizasyonu", href: "/gala-organizasyonu" },
          { label: "Bayi Toplantısı", href: "/bayi-toplantisi-organizasyonu" },
          { label: "Lansman Organizasyonu", href: "/lansman-organizasyonu" },
          { label: "Kongre & Konferans", href: "/kongre-konferans-organizasyonu" },
        ],
      },
      {
        heading: "Saha & operasyon",
        links: [
          { label: "Kurumsal Outdoor Aktiviteler", href: "/kurumsal-outdoor-aktiviteler" },
          { label: "Etkinlik Personeli", href: "/etkinlik-personeli" },
          { label: "Etkinlik Mekanları", href: "/kurumsal-etkinlik-mekanlari" },
        ],
      },
    ],
  },
  {
    label: "Antalya",
    links: [
      { label: "Antalya Kurumsal Etkinlik", href: "/antalya/kurumsal-etkinlik" },
      { label: "Antalya Team Building", href: "/antalya/team-building" },
      { label: "Antalya Incentive", href: "/antalya/incentive" },
      { label: "Antalya Corporate Retreat", href: "/antalya/corporate-retreat" },
      { label: "Antalya Outdoor Aktiviteler", href: "/antalya/kurumsal-outdoor-aktiviteler" },
      { label: "Antalya Etkinlik Mekanları", href: "/antalya/kurumsal-etkinlik-mekanlari" },
      { label: "Antalya Event Staff", href: "/antalya/event-staff" },
    ],
  },
  {
    label: "Belek",
    links: [
      { label: "Belek Kurumsal Etkinlik", href: "/belek/kurumsal-etkinlik" },
      { label: "Belek Team Building", href: "/belek/team-building" },
      { label: "Belek Incentive", href: "/belek/incentive" },
      { label: "Belek Corporate Retreat", href: "/belek/corporate-retreat" },
      { label: "Belek Etkinlik Mekanları", href: "/belek/kurumsal-etkinlik-mekanlari" },
      { label: "Belek Gala Organizasyonu", href: "/belek/gala-organizasyonu" },
    ],
  },
  {
    label: "Mekân & Oteller",
    links: [
      { label: "Antalya Kurumsal Etkinlik Mekânları", href: "/rehberler/antalya-kurumsal-etkinlik-mekanlari" },
      { label: "Belek Kurumsal Etkinlik Mekânları", href: "/rehberler/belek-kurumsal-etkinlik-mekanlari" },
      { label: "Antalya Kongre Otelleri", href: "/rehberler/antalya-kongre-otelleri" },
      { label: "Belek Kongre Otelleri", href: "/rehberler/belek-kongre-otelleri" },
      { label: "Bayi Toplantısı Otelleri", href: "/rehberler/antalya-bayi-toplantisi-otelleri" },
      { label: "Gala Mekânları", href: "/rehberler/antalya-gala-mekanlari" },
      { label: "500 Kişilik Etkinlik Mekânları", href: "/rehberler/500-kisilik-etkinlik-mekanlari-antalya" },
      { label: "1.000 Kişilik Kongre Otelleri", href: "/rehberler/1000-kisilik-kongre-otelleri-antalya" },
      { label: "Antalya MICE Rehberi", href: "/rehberler/antalya-mice-rehberi" },
    ],
  },
  { label: "Rehberler", href: "/rehberler" },
];

export const footerNav = {
  hizmetler: nav[0].columns!.flatMap((c) => c.links),
  antalya: nav[1].links!,
  belek: nav[2].links!,
  rehberler: [
    { label: "Antalya Kongre Otelleri", href: "/rehberler/antalya-kongre-otelleri" },
    { label: "Belek Kongre Otelleri", href: "/rehberler/belek-kongre-otelleri" },
    { label: "Antalya MICE Rehberi", href: "/rehberler/antalya-mice-rehberi" },
    { label: "Antalya mı, Belek mi?", href: "/rehberler/antalya-mi-belek-mi" },
    { label: "Team Building Fikirleri", href: "/rehberler/team-building-fikirleri" },
    { label: "Tüm rehberler", href: "/rehberler" },
  ],
};
