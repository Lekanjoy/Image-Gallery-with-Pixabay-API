import { useState, useEffect, lazy, Suspense } from "react";
import SearchBar from "./components/SearchBar";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSearching, setIsSearching] = useState("Search");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "Light");

  // Toggling Theme
  function toggleTheme() {
    if (theme === "Light") {
      setTheme("Dark");
    } else {
      setTheme("Light");
    }
  }

  // Change Search Button text when clicked
  const changeSearchText = () => {
    setIsSearching("Searching . . .");
  };

  // Keeping User-Selected Theme Persistent even after reload
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Fetching and setting data to local state
  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=29823046-51559e52da049c5cf00410dc8&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
        setIsSearching("Search");
      })
      .catch((err) => console.error(err));
  }, [term]);

  // Lazy Loading the Image
  const Image = lazy(() => import("./components/Image"));

  return (
    <div className={`App ${theme} w-full h-full py-8 px-10 border-0 relative `}>
      <div className="w-full flex items-center gap-x-5 justify-center">
        <SearchBar
          isSearching={isSearching}
          changeSearchText={changeSearchText}
          searchTerm={(text) => setTerm(text)}
        />
        <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
      </div>

      {/* Check if Search term brings no result */}
      {!isLoading && images.length === 0 && (
        <h1 className="flex justify-center text-2xl relative top-1/2 font-semibold items-center w-full h-[85vh]">
          No Images Found ! ! !
        </h1>
      )}

      <div
        className="  h-full w-full flex flex-col justify-center items-center 
        md:grid md:grid-cols-3 md:gap-x-4 md:place-items-center lg:grid-cols-4"
      >
        {images.map((img) => {
          return (
            <Suspense
              key={img.id}
              fallback={
                <h1 className=" flex justify-center text-2xl relative top-1/2 font-semibold items-center w-full h-[85vh]">
                  LOADING . . .
                </h1>
              }
            >
              <Image images={img} theme={theme} />
            </Suspense>
          );
        })}
      </div>
    </div>
  );
}

export default App;
