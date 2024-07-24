import React, { useState, useEffect } from "react";
import LoadingSpinner from "./common/Loader";
import { Link } from "react-router-dom";

interface SliderProps {
  image: string;
  id: string;
}

const Slider: React.FC<SliderProps> = ({ image, id }) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [showImage, setShowImage] = useState<boolean>(false);

  const handleImageLoad = () => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  };

  useEffect(() => {
    if (loaded) {
      setShowImage(true);
    }
  }, [loaded]);

  return (
    <div className="flex-shrink-0 p-2">
      <div className="relative cursor-pointer">
        {!showImage && <LoadingSpinner />}
        <Link to={`/product/${id}`}>
          <img
            src={image}
            alt="Slider image"
            className={`h-40 w-full object-cover ${showImage ? "opacity-100" : "opacity-0"}`}
            onLoad={handleImageLoad}
            style={{ transition: "opacity 0.3s ease-in-out" }}
          />
        </Link>
      </div>
    </div>
  );
};

export default Slider;
