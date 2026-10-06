import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";
import { homeMeta } from "@/content/tr/home";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({ title: homeMeta.title, description: homeMeta.description, path: "/" });

export default function Page() {
  return <HomePage />;
}
