import { useState } from "react";

function SearchBar({searchTerm}) {

    const [text, setText] = useState('');

  function handleChange(e) {
    // console.log(e.target.value);
    setText(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();
    searchTerm(text)
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
            className="py-3 px-6 w-[250px] rounded-md text-black border shadow-md outline-none md:w-96"
          />
          <button
            type="submit"
            className="btn-primary absolute right-1 top-[5px]"
          >
            Search
          </button>
      </div>
    </form>
  );
}

export default SearchBar;
