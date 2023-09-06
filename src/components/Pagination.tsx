import { Dispatch, SetStateAction } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Button from "@/src/components/Button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export default function Pagination({ currentPage, totalPages, setCurrentPage }: PaginationProps) {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePageChange = (page: number) => {
    if (page !== currentPage && page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const RenderPageLinks = () => {
    const maxVisiblePages = 4;
    const firstPage = 1;
    const startPage = Math.max(currentPage - 2, 1);
    const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

    const pageLinks = Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index
    );

    return (
      <div className=" flex gap-3">
        {currentPage >= 5 && (
          <Button
            variant={`${firstPage !== currentPage ? "secondary" : "primary"}`}
            onClick={() => handlePageChange(firstPage)}
            className=" px-2 py-0"
          >
            {firstPage}
          </Button>
        )}
        {pageLinks.map((page) => (
          <Button
            key={page}
            onClick={() => handlePageChange(page)}
            variant={`${page !== currentPage ? "secondary" : "primary"}`}
            className=" px-2 py-0"
          >
            {page}
          </Button>
        ))}
      </div>
    );
  };

  return (
    <div className=" flex gap-2 items-center">
      <BiChevronLeft
        className={`${isFirstPage ? "text-gray-400 " : "text-blue-500 cursor-pointer"} text-3xl`}
        onClick={() => handlePageChange(currentPage - 1)}
      />
      <RenderPageLinks />
      <BiChevronRight
        className={`${isLastPage ? "text-gray-400" : "text-blue-500 cursor-pointer"} text-3xl`}
        onClick={() => handlePageChange(currentPage + 1)}
      />
    </div>
  );
}
