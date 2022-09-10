import React from "react";

function Image({ images, theme }) {
  const tags = images.tags.split(",");
  return (
    <div
      id="image"
      className={`${theme} bg-white p-4 shadow-md ease-in duration-500 cursor-pointer w-4/5 rounded-md h-auto mb-4 hover:shadow-2xl md:shadow-md md:w-72 md:hover:scale-110`}
    >
      <img
        src={images.webformatURL}
        alt={tags[0]}
        className=" w-full h-auto  rounded-md md:h-auto"
      />
      <div className="details my-6">
        <h1 className="text-gray-400 font-medium mb-2">
          Photo by
          <span className="font-bold text-violet-600"> {images.user}</span>
        </h1>
        <p>
          <span className="font-bold">Views</span>: {images.views}
        </p>
        <p>
          <span className="font-bold">Downloads</span>: {images.downloads}
        </p>
        <p>
          <span className="font-bold">Likes</span>: {images.likes}
        </p>
      </div>
      <div className="tags flex flex-wrap gap-2 w-full">
        {tags.map((tag, index) => {
          return (
            <p
              key={index}
              className="bg-slate-100 text-gray-800 py-1 px-2 rounded-sm text-sm font-semibold whitespace-nowrap"
            >
              #{tag}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default Image;
