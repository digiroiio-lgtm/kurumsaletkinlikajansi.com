import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideTemplate } from "@/components/GuideTemplate";
import { getGuide, guides, guidePath } from "@/content/tr/registry";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) return {};
  return buildMetadata({
    title: g.metaTitle,
    description: g.metaDescription,
    path: guidePath(g.slug),
    type: "article",
    publishedTime: g.published,
    modifiedTime: "2026-10-06",
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) notFound();
  return <GuideTemplate guide={g} />;
}
