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
  { label: "Rehberler", href: "/rehberler" },
];

export const footerNav = {
  hizmetler: nav[0].columns!.flatMap((c) => c.links),
  antalya: nav[1].links!,
  belek: nav[2].links!,
  rehberler: [
    { label: "Kurumsal Etkinlik Fikirleri", href: "/rehberler/kurumsal-etkinlik-fikirleri" },
    { label: "Team Building Fikirleri", href: "/rehberler/team-building-fikirleri" },
    { label: "Şirket Etkinliği Nasıl Planlanır?", href: "/rehberler/sirket-etkinligi-nasil-planlanir" },
    { label: "Antalya mı, Belek mi?", href: "/rehberler/antalya-mi-belek-mi" },
    { label: "Tüm rehberler", href: "/rehberler" },
  ],
};
