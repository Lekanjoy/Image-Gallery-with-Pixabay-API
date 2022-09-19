import { useState } from "react";

function SearchBar({ searchTerm, isSearching, changeSearchText }) {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();
    if (text === "") {
      alert("Search Field Empty");
      return;
    } else {
      searchTerm(text);
      changeSearchText();
    }
  }

  return (
    <form
      onSubmit={handleSearch}
      className="mb-8   text-center flex justif gap-x-3 relative"
    >
      <div className="relative">
        <input
          onChange={handleChange}
          type="search"
          placeholder="Search for Photo "
          className="py-3 px-6 w-full  rounded-md text-black border shadow-md outline-none md:w-96"
        />
        <button
          type="submit"
          className="btn-primary absolute right-1 top-[5px]"
        >
          {isSearching}
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
