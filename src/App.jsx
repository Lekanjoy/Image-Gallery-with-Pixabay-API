import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import Image from "./components/Image";

function App() {
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState("cats");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=29823046-51559e52da049c5cf00410dc8&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => setImages(data.hits))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App bg-teal-50 h-full w-full flex flex-col justify-center items-center py-8 md:grid md:grid-cols-3 md:place-items-center">
      {images.map((img) => {
        return <Image key={img.id} images={img}/>;
      })}
    </div>
  );
}

export default App;
