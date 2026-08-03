import { permanentRedirect } from "next/navigation";

// /blog/category has no standalone index; topic hubs live at
// /blog/category/[slug]. Send bare visits back to the blog index.
export default function BlogCategoryIndex() {
  permanentRedirect("/blog");
}
