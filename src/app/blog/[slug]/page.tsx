import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return [];
}

export default async function BlogSlug() {
  // Blog disabled; surface 404 to prevent build/use.
  notFound();
}
