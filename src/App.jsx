import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import Image from "./components/Image";
import ThemeToggle from './components/ThemeToggle'


function App() {
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true)
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "Light");

  function toggleTheme(){
    if (theme === "Light") {
      setTheme("Dark");
    } else {
      setTheme("Light");
    }
  };

    useEffect(() => {
      localStorage.setItem("theme", theme);
    }, [theme]);


  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=29823046-51559e52da049c5cf00410dc8&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, [term]);


  return (
    <div className={`App ${theme} w-full h-full py-8 px-10 border-0 relative`}>
      <div className="w-full flex items-center gap-x-8  md:justify-center">
        <SearchBar searchTerm={(text) => setTerm(text)} />
        <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
      </div>

      {/* Check if Search term brings no result */}
      {!isLoading && images.length === 0 && (
        <h1 className="flex justify-center text-2xl relative top-1/2 font-semibold items-center w-full h-[70vh]">
          No Images Found ! ! !
        </h1>
      )}

      {isLoading === false ? (
        <div className="  h-full w-full flex flex-col justify-center items-center md:grid md:grid-cols-4 md:place-items-center">
          {images.map((img) => {
            return <Image key={img.id} images={img} theme={theme} />;
          })}
        </div>
      ) : (
        <h1 className="flex justify-center text-2xl relative top-1/2 font-semibold items-center w-full h-[80vh]">
          LOADING . . .{" "}
        </h1>
      )}
    </div>
  );
}

export default App;

