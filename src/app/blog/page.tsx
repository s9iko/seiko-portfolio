import { notFound } from "next/navigation";

export default function Blog() {
  // Blog disabled; surface 404 to prevent build/use.
  notFound();
}
