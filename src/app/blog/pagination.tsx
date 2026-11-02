import Link from "next/link";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  basePath?: string;
};

// Pill pagination in the Anti style: white pills on the grey band, the current page a gold pill (like the active
// topic pill). Renders nothing when there is a single page. Labels, links and rel attributes unchanged.
export default function Pagination({
  currentPage,
  totalPages,
  basePath = "/blog",
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  const hrefFor = (page: number) =>
    page <= 1 ? basePath : `${basePath}?page=${page}`;

  const pill =
    "inline-flex h-11 min-w-11 items-center justify-center rounded-full text-[15px] font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e2b04a]";
  const baseItem = `${pill} px-4`;
  const plain = "bg-white text-[#475467] shadow-[0_1px_2px_rgba(16,24,40,0.06)] hover:text-[#101828]";
  const inactiveItem = `${baseItem} ${plain}`;
  const stepItem = `${pill} px-5 ${plain}`;

  return (
    <nav
      aria-label="Blog pagination"
      className="mt-12 flex flex-wrap items-center justify-center gap-2 md:mt-14"
    >
      {currentPage > 1 ? (
        <Link href={hrefFor(currentPage - 1)} rel="prev" className={stepItem}>
          ← Prev
        </Link>
      ) : null}

      {pages.map((page) =>
        page === currentPage ? (
          <span
            key={page}
            aria-current="page"
            className={`${baseItem} bg-[#e2b04a] text-[#0d1922]`}
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
        <Link href={hrefFor(currentPage + 1)} rel="next" className={stepItem}>
          Next →
        </Link>
      ) : null}
    </nav>
  );
}
