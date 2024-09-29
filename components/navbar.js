'use client'
import TableInteractionMenuSm from "./tableInteractionMenuSm";
import { useState } from "react";

export default function Navbar({filteredPrice, setFilteredPrice, priceRange, stockChecked, setStockChecked, searchField, setSearchField, selectedCat, setSelectedCat,
  labelCat, handleReset }) {
  const [isToggleOpen, setIsToggleOpen] = useState(false)

  const handleCloseMenu = () => {
    setIsToggleOpen(false);
  };

  return (
    <>
      {isToggleOpen && (
        <div
          className="fixed inset-0 z-10 bg-black/50"
          onClick={handleCloseMenu}
          aria-hidden="true"
        ></div>
      )}
      <header className="border-b-1 sticky top-0 lg:hidden z-20 w-full border-b border-slate-200 bg-white shadow-lg shadow-slate-700/5 after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
        <div className="sticky mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[50px] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            <div className="flex flex-row items-center">
              <div>
              <svg width="78" height="30" viewBox="0 0 78 36" xmlns="http://www.w3.org/2000/svg">
                              <title>Ton - Vaše židle a stoly již 160 let</title>
                              <path fill="dark:white black" d="M35.3389 9.81641C27.7826 9.81641 21.6943 15.6576 21.6943 22.9073C21.6943 27.5368 24.2635 31.6639 28.1496 33.9838L31.1937 29.3026C28.9376 27.9459 27.4155 25.5794 27.4155 22.9073C27.4155 18.7284 30.9832 15.3573 35.3389 15.3573C39.6945 15.3573 43.2622 18.7284 43.2622 22.9073C43.2622 27.0863 39.6945 30.4574 35.3389 30.4574C33.7628 30.4574 32.4513 31.7157 32.4513 33.2278C32.4513 34.7399 33.7628 35.9982 35.3389 35.9982C42.8952 35.9982 48.978 30.0586 48.978 22.9125C48.978 15.7664 42.8898 9.82158 35.3389 9.82158"></path>
                              <path fill="dark:white black" d="M68.3193 9.16406C64.5502 9.16406 61.5936 11.1066 59.8584 13.8681V9.57356H54.3018V35.3459H59.8584V24.0426C59.8584 17.8581 62.4586 14.1726 66.7886 14.1726C70.0492 14.1726 72.036 16.4248 72.036 19.6431V35.3406H77.5927V18.3726C77.5927 12.7971 73.7711 9.16931 68.3193 9.16931"></path>
                              <path fill="dark:white black" d="M25.6877 5.15108V0H0.400391V5.15108H10.0319V35.3455H16.0562V5.15108H25.6877Z"></path>
                          </svg>
              </div>
              <div className="ml-3">
                  katalog produktů
              </div>
            </div>
            <div className="ml-auto">
              <button
                className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${
                  isToggleOpen
                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                    : ""
                }
              `}
                onClick={() => setIsToggleOpen(!isToggleOpen)}
                aria-expanded={isToggleOpen ? "true" : "false"}
                aria-label="Toggle navigation"
              >
                <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                  <span
                    aria-hidden="true"
                    className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                  ></span>
                  <span
                    aria-hidden="true"
                    className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                  ></span>
                  <span
                    aria-hidden="true"
                    className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                  ></span>
                </div>
              </button>
            </div>

            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute right-0 top-[50px] z-20 w-2/3 justify-center overflow-hidden  overflow-y-auto overscroll-contain mr-1 mt-1 font-medium transition-[opacity,visibility] duration-300 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
                <TableInteractionMenuSm 
                  setStockChecked={setStockChecked} stockChecked={stockChecked} 
                  filteredPrice={filteredPrice}setFilteredPrice={setFilteredPrice} priceRange={priceRange} 
                  searchfield = {searchField} setSearchField ={setSearchField}
                  selectedCat = {selectedCat} handleReset={handleReset} setSelectedCat ={setSelectedCat} labelCat={labelCat}
                />
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
