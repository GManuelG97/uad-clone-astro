"use client";

import type { IRoute } from "@/types/routers.interface";
import { useState } from "react";

export function MenuMovil({ routers }: { routers: IRoute[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between max-w-screen-xl  mx-auto ">
        <div className="flex items-center space-x-3">
          <a href="/">
          <img
            src="/img/svg/pasted-svg-1051691x212.svg"
            alt="logo"
            className="max-w-80 hover:opacity-65 transition ease-in-out delay-300"
          />
          </a>
        </div>
        <article className="flex items-center space-x-4">
          <button
            className={isOpen ? "hidden" : ""}
            onClick={() => setIsOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <button
            className={!isOpen ? `hidden` : ``}
            onClick={() => setIsOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </article>
      </nav>
      <section className="bg-white max-w-full max-h-max  ">
        <article className={!isOpen ? "hidden" : ""}>
          <div>
            <ul className="flex flex-col items-start justify-end space-x-4 text-gray-600 ">
              {routers.map((item: IRoute, index: any) => (
                <li className="hover:text-red-600 group " key={index}>
                  <button className="flex items-start justify-start w-full py-2 px-2 transition ease-in-out delay-250">
                    {item.name}
                    {item.subRoute && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={
                          "group-hover:rotate-180 h-6 w-6 ml-2  "
                        }
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </button>
                  {item.subRoute && (
                    <ul className="bg-white hidden group-hover:block z-10  ">
                      {item.subRoute.map((subItem: any, index: any) => (
                        <li
                          className="text-gray-600 hover:text-red-600 px-6 py-2"
                          key={index}
                        >
                          <a href={subItem.url}>{subItem.name}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </section>
    </>
  );
}
