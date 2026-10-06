import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageTemplate } from "@/components/PageTemplate";
import { getPage, servicePages } from "@/content/tr/registry";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return servicePages.map((p) => ({ slug: p.path.slice(1) }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage(`/${slug}`);
  if (!page) return {};
  return buildMetadata({ title: page.metaTitle, description: page.metaDescription, path: page.path });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const page = getPage(`/${slug}`);
  if (!page) notFound();
  return <PageTemplate page={page} />;
}
