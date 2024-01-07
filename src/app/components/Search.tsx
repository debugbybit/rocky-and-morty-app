import React, { ChangeEvent } from "react";

interface SearchProps {
  setSearch: (value: string) => void;
  updatePageNumber: (pageNumber: number) => void;
}

const Search: React.FC<SearchProps> = ({ setSearch, updatePageNumber }) => {
  const searchBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    updatePageNumber(1);
    setSearch(e.target.value);
  };

  return (
    <form className="flex flex-col items-center sm:flex-row sm:items-end justify-center gap-4 mb-5 pt-5">
      <input
        onChange={handleInputChange}
        placeholder="Search for characters"
        className="w-full sm:w-80 border-2 border-blue-500 rounded-md shadow-md p-2 focus:outline-none mb-3 sm:mb-0"
        type="text"
      />
      <button
        onClick={searchBtn}
        className="btn bg-blue-500 text-white text-base font-medium rounded-md px-4 py-2 shadow-md hover:bg-blue-600 transition-all duration-300 focus:outline-none focus:ring focus:border-blue-300"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
