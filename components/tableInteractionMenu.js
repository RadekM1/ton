'use client'

import SearchField from "./searchField"
import RangeSlider from "./rangeSlider"
import CheckBox from "./checkBox"
import { MdOutlineFileDownload } from "react-icons/md";
import { FaFileCsv } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { BsFiletypeXlsx } from "react-icons/bs";
import CategorySelectBtn from "./categorySelectBtn";
import ResetBtn from "./resetBtn";
import { useState } from "react";


export default function TableInteractionMenu ({
    filteredPrice, setFilteredPrice, priceRange, 
    setStockChecked, stockChecked, searchField, 
    setSearchField, selectedCat, setSelectedCat,
    labelCat, handleReset
    }) {
    
    

    return (
        <div className=" lg:w-2/5 xl:w-1/5 sticky top-4 hidden lg:block  bg-white shadow-lg mx-5 rounded-2xl ">
            <div className="  clear-start w-full align-top flex flex-col m-5   overflow-auto">
                <div className="flex flex-rowmr-10 justify-end  pb-2">
                    <div>
                        <svg width="78" height="36" viewBox="0 0 78 36" xmlns="http://www.w3.org/2000/svg">
                            <title>Ton - Vaše židle a stoly již 160 let</title>
                            <path fill="dark:white black" d="M35.3389 9.81641C27.7826 9.81641 21.6943 15.6576 21.6943 22.9073C21.6943 27.5368 24.2635 31.6639 28.1496 33.9838L31.1937 29.3026C28.9376 27.9459 27.4155 25.5794 27.4155 22.9073C27.4155 18.7284 30.9832 15.3573 35.3389 15.3573C39.6945 15.3573 43.2622 18.7284 43.2622 22.9073C43.2622 27.0863 39.6945 30.4574 35.3389 30.4574C33.7628 30.4574 32.4513 31.7157 32.4513 33.2278C32.4513 34.7399 33.7628 35.9982 35.3389 35.9982C42.8952 35.9982 48.978 30.0586 48.978 22.9125C48.978 15.7664 42.8898 9.82158 35.3389 9.82158"></path>
                            <path fill="dark:white black" d="M68.3193 9.16406C64.5502 9.16406 61.5936 11.1066 59.8584 13.8681V9.57356H54.3018V35.3459H59.8584V24.0426C59.8584 17.8581 62.4586 14.1726 66.7886 14.1726C70.0492 14.1726 72.036 16.4248 72.036 19.6431V35.3406H77.5927V18.3726C77.5927 12.7971 73.7711 9.16931 68.3193 9.16931"></path>
                            <path fill="dark:white black" d="M25.6877 5.15108V0H0.400391V5.15108H10.0319V35.3455H16.0562V5.15108H25.6877Z"></path>
                        </svg>
                    </div>  
                    <div className="text-gray-600 font-bold ml-5 flex-grow self-center ">
                        katalog produktů
                    </div>
                </div>
                <div className="flex flex-col mt-3 items-center rounded-xl border-[1px] border-gray-300 mr-10">
                <div className="my-3 ml-2  mb-1 text-gray-600">
                        <p>filtrování produktů</p>
                    </div > 
                    <div className="my-3 ml-2">
                        <SearchField searchField = {searchField} setSearchField ={setSearchField} />
                    </div > 
                    <div className=" my-3 ml-2">
                        
                        <RangeSlider filteredPrice={filteredPrice}setFilteredPrice={setFilteredPrice} priceRange={priceRange} />
                    </div>
                    <div className=" my-3 ml-2">
                        <CategorySelectBtn labelCat ={labelCat} selectedCat ={selectedCat} setSelectedCat ={setSelectedCat} />
                    </div>
                    <div className="my-3 ml-2 flex-shrink">
                        <CheckBox setStockChecked={setStockChecked} stockChecked={stockChecked} />
                    </div>
                    <div className="my-3 ml-2 flex-shrink">
                        <ResetBtn handleReset={handleReset} />
                    </div>
                </div>
                        
                <div className="flex flex-col mt-3 text-gray-600 rounded-xl border-[1px] p-2 border-gray-300 mr-10">
                    <div className="flex flex-row mb-5 ">
                        <p className="flex-grow">export dat</p> 
                        <MdOutlineFileDownload className="self-center text-gray-600 " />
                    </div>
                    <div className="flex flex-grow justify-evenly items-center">
                        <div className="w-1/3 flex justify-center text-gray-500 hover:text-gray-800">
                            <FaFileCsv className="w-8 h-8" />
                        </div>
                        <div className="w-1/3 flex justify-center text-gray-500 hover:text-gray-800">
                            <FaFilePdf className="w-8 h-8"/>
                        </div>
                        <div className="w-1/3 flex justify-center text-gray-500 hover:text-gray-800">
                            <BsFiletypeXlsx className="w-8 h-8" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}