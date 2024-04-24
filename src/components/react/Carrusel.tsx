"use client";
import type { ISlider } from "@/types/slider.interface";
import { useEffect, useState } from "react";

interface IProps {
  images: ISlider[];
  autoPlay?: boolean;
}

export default function Carrusel({ images, autoPlay = true }: IProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [isLoaded, setIsLoaded] = useState(false);
 

  const selectNewImage = (index: number, images: ISlider[], isNext = true) => {
    setIsLoaded(false);
    const condition = isNext
    ? selectedIndex < images.length - 1
    : selectedIndex > 0;
    const nextIndex = isNext
    ? condition
    ? selectedIndex + 1
    : 0
    : condition
    ? selectedIndex - 1
    : images.length - 1;
    setSelectedIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
    const event = new CustomEvent("changeTextColor", { detail: images[nextIndex].color });
    document.dispatchEvent(event);
  };
  const previous = () => {
    selectNewImage(selectedIndex, images, false);
  };

  const next = () => {
    selectNewImage(selectedIndex, images);
  };

  //auto play images
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(interval);
  }, [selectedIndex]);

  return (
    <section
      className={
        "carrusel-section absolute flex justify-center items-center w-full h-screen bg-cover bg-center bg-no-repeat bg-fixed  overflow-hidden"
      }
      style={{
        backgroundImage: `url(${selectedImage.background}) `,
      }}
      data-header-color={selectedImage.color}
    >
      {/* Buttons */}
      <section className="max-w-screen-2xl z-10">
        <button
          onClick={previous}
          className="fixed top-32 right-12 lg:right-28 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 hover:bg-opacity-70 "
        >
          {/* icono */}
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m15 19-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={next}
          className="fixed right-0 top-32 lg:right-16 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 hover:bg-opacity-70 "
        >
          {/* icono */}
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m9 5 7 7-7 7"
            />
          </svg>
        </button>
      </section>
      {/* Images complement */}
      <section
        className={
          "grid grid-cols-3 grid-rows-3 w-full h-full max-w-screen-2xl max-h-screen p-10 items-center "
        }
      >
        <article
          className={`row-start-${selectedImage.row} col-start-${selectedImage.col} row-span-${selectedImage.span}`}
        >
          <img
            src={selectedImage.complement}
            alt={selectedImage.alt}
            className={`w-full h-full object-cover object-center transition-opacity duration-700 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setIsLoaded(true)}
          />
        </article>
      </section>
    </section>
  );
}
