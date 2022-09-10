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
      className="mb-8  text-center flex justify-center gap-x-3 relative"
    >
      <input
        onChange={handleChange}
        type="search"
        placeholder="Search for Photo Genres"
        className="py-2 px-6 rounded-md text-black border shadow-md outline-none"
      />
      <button
        type="submit"
        className="btn-primary "
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
