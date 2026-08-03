import Link from "next/link";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  basePath?: string;
};

// Theme-consistent pagination. Renders nothing when there is a single page, so
// the /blog index is visually unchanged until the post count grows past one page.
export default function Pagination({
  currentPage,
  totalPages,
  basePath = "/blog",
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  const hrefFor = (page: number) =>
    page <= 1 ? basePath : `${basePath}?page=${page}`;

  const baseItem =
    "inline-flex h-11 min-w-11 items-center justify-center rounded-full px-4 text-[15px] font-manrope-bold transition-colors duration-200";
  const inactiveItem = `${baseItem} border border-[#E5E5E5] bg-white text-[#404040] hover:bg-[#F6F6F6]`;

  return (
    <nav
      aria-label="Blog pagination"
      className="mt-12 flex flex-wrap items-center justify-center gap-2 md:mt-14"
    >
      {currentPage > 1 ? (
        <Link href={hrefFor(currentPage - 1)} rel="prev" className={inactiveItem}>
          ← Prev
        </Link>
      ) : null}

      {pages.map((page) =>
        page === currentPage ? (
          <span
            key={page}
            aria-current="page"
            className={`${baseItem} bg-[#111111] text-white`}
          >
            {page}
          </span>
        ) : (
          <Link key={page} href={hrefFor(page)} className={inactiveItem}>
            {page}
          </Link>
        ),
      )}

      {currentPage < totalPages ? (
        <Link href={hrefFor(currentPage + 1)} rel="next" className={inactiveItem}>
          Next →
        </Link>
      ) : null}
    </nav>
  );
}
