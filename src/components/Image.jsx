import React from "react";

function Image({images}) {

    const tags = images.tags.split(',')
  return (
    <div className="bg-white p-4 shadow-md w-4/5 h-auto mb-4 md:shadow-xl md:w-80">
      <img src={images.webformatURL} alt={images.tags} className=" w-full h-auto md:h-auto" />
      <div className="details my-4">
        <h1 className="text-violet-600 font-medium">
          Photo by<span className="font-bold"> {images.user}</span>
        </h1>
        <p>
          <span className="font-semibold">Views</span>: {images.views}
        </p>
        <p>
          <span className="font-semibold">Downloads</span>: {images.downloads}
        </p>
        <p>
          <span className="font-semibold">Likes</span>: {images.likes}
        </p>
      </div>
      <div className="tags flex gap-x-3">
        {tags.map((tag,index) => {
            return (
              <span key={index} className="bg-slate-100 p-1 rounded-sm font-semibold whitespace-nowrap">
                #{tag}
              </span>
            );

        })}

      </div>
    </div>
  );
}

export default Image;
