'use client'

import SearchField from "./searchField"
import RangeSlider from "./rangeSlider"
import CheckBox from "./checkBox"
import { MdOutlineFileDownload } from "react-icons/md";
import { FaFileCsv } from "react-icons/fa";
import { BsFiletypeXlsx } from "react-icons/bs";
import CategorySelectBtn from "./categorySelectBtn";
import ResetBtn from "./resetBtn";

export default function TableInteractionMenuSm ({filteredPrice, setFilteredPrice, priceRange, stockChecked, setStockChecked, searchField, selectedCat, setSelectedCat,
    labelCat, handleReset, handleClick, handleChange}) {
    
    return (
        <div className=" block lg:hidden p-3 lg:p-0  bg-white shadow-lg lg:mx-5 rounded-2xl ">
            <div className="  clear-start w-full   align-top flex flex-col lg:m-5   overflow-auto">
                <div className="flex flex-col mt-3 items-center rounded-xl lg:border-[1px] text-center border-gray-300 lg:mr-10">    
                    <div className="border-b-[1px] block my-2 pb-2 lg:hidden border-gray-300 ml-2">
                        <p className=" ">Vyhledávací parametry</p> 
                    </div>
                    <div className="my-5 ml-4 ">
                        <SearchField searchfield ={searchField} handleChange={handleChange} />
                    </div >
                        
                    <div className=" my-2 mt-10 ml-2">
                        <CategorySelectBtn labelCat ={labelCat} selectedCat ={selectedCat} setSelectedCat ={setSelectedCat} />
                    </div>
                    <div className=" my-2 ml-2">
                        <RangeSlider filteredPrice={filteredPrice}setFilteredPrice={setFilteredPrice} priceRange={priceRange} />
                    </div>
                    <div className="ml-2 flex-shrink">
                        <CheckBox setStockChecked={setStockChecked} stockChecked={stockChecked} />
                    </div>
                    <div className="my-3 ml-2 flex-shrink">
                        <ResetBtn handleReset={handleReset} />
                    </div>
                </div>
                <div className="flex flex-col m-1 text-gray-600 rounded-xl border-[1px] p-2 border-gray-300 lg:mr-10">
                    <div className="flex flex-row mb-5 ">
                        <p className="flex-grow">export dat</p> 
                        <MdOutlineFileDownload className="self-center" />
                    </div>
                    <div className="flex flex-grow justify-evenly items-center">
                        <button name="scv-btn" onClick={(event)=>handleClick(event.currentTarget.name)}>
                            <div  className="w-1/3justify-center text-gray-500 hover:text-gray-800">
                                <FaFileCsv  className="w-8 h-8" />
                            </div>
                        </button>
                        <button name="xlsx-btn" onClick={(event)=>handleClick(event.currentTarget.name)}>
                            <div className="w-1/3 justify-center text-gray-500 hover:text-gray-800">
                                <BsFiletypeXlsx  className="w-8 h-8" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}