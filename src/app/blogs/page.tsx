import { permanentRedirect } from "next/navigation";

export default function LegacyBlogsIndexPage() {
  permanentRedirect("/blog");
}
