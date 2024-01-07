import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

interface PaginationProps {
  pageNumber: number;
  info: { pages?: number };
  updatePageNumber: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ pageNumber, info, updatePageNumber }) => {
  const pageChange = (data: { selected: number }) => {
    updatePageNumber(data.selected + 1);
  };

  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div className="flex justify-center my-4">
      <ReactPaginate
        containerClassName="flex space-x-4"
        pageClassName="rounded-full cursor-pointer transition-all duration-300 hover:bg-blue-500 hover:text-white flex items-center justify-center"
        previousClassName={`rounded-full cursor-pointer transition-all duration-300 ${
          pageNumber === 1 ? "bg-gray-300 text-gray-500" : "bg-blue-500 text-white"
        } px-4 py-2`}
        nextClassName={`rounded-full cursor-pointer transition-all duration-300 ${
          pageNumber === info?.pages ? "bg-gray-300 text-gray-500" : "bg-blue-500 text-white"
        } px-4 py-2`}
        activeClassName="bg-blue-500 text-white"
        pageLinkClassName="px-4 py-2 flex items-center justify-center"
        previousLabel="Prev"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        nextLabel="Next"
        pageCount={info?.pages || 0}
        onPageChange={pageChange}
      />
    </div>
  );
};

export default Pagination;
