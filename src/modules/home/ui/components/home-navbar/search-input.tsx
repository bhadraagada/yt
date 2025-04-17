import { SearchIcon } from "lucide-react";

export const SearchInput = () => {
  return (
    // TODO: add search functionality
    <form className="flex w-full">
      <div className="flex items-center w-full border border-gray-300 rounded-full overflow-hidden shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 bg-white">
        <input
          type="text"
          placeholder="Search..."
          className="flex-grow bg-transparent py-2 pl-4 pr-2 outline-none sm:text-sm"
        />
        {/* TODO: remove search button */}
        <button
          type="submit"
          className="self-stretch px-4 bg-gray-100 border-l border-gray-300 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
          title="Search"
        >
          <SearchIcon className="size-5 opacity-80" />
        </button>
      </div>
    </form>
  );
};
