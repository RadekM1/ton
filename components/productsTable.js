'use client';

import React, { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";
import { FaLink, FaCheck } from "react-icons/fa6";
import { columnsNamesMainList, columnsNamesSecondaryList } from "@/library/tableAttributes";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { VscError } from "react-icons/vsc";
import IconButton from '@mui/material/IconButton';
import { RiArrowDropDownLine } from "react-icons/ri";
import Pagination from '@mui/material/Pagination';
import {handleChangePaginat} from "@/app/functions/handleChangePaginat";
import PaginationHowManyRowsBtn from "./paginationHowManyRowsBtn";
import { ArraySort } from '@/app/functions/arraySort';
import TableInteractionMenu from "./tableInteractionMenu";
import Navbar from './navbar';
import { handleClickSecondary } from "@/app/functions/handleClickSecondary";
import { DownloadXls } from "@/app/functions/downloadXls";
import { DownloadCsv } from "@/app/functions/downloadCsv";

export default function ProductTable({ inputRows, categories, priceRange }) {

const [rows, setRows] = useState(inputRows)
const [secondActive, setSecondActive] = useState(null)
const [sortingColumn, setsortingColumn] = useState(null)
const [sortingOrder, setSortingOrder] = useState('asc')
const [rowsPerPage, setRowsPerPage] = useState(20)
const [currentPage, setCurrentPage] = useState(1)
const [filteredPrice, setFilteredPrice] = useState([priceRange[0], priceRange[1]]);
const [stockChecked, setStockChecked] = useState('checked')
const [searchField, setSearchField] = useState('')
const [selectedCat, setSelectedCat] = useState(categories)
const [filteredRows, setFilteredRows] = useState(rows)

    

useEffect(() => {
  const filter = rows.filter((row) => { 
    let keys = Object.keys(row);
      let fulltextTrue =  keys.some((key)=>{
        return String(row[key]).toLowerCase().includes(String(searchField.toLowerCase()));;
      })
      let onStockTrue = row.availability === true ||  stockChecked === false;
      let selectedTrue = selectedCat.some((select)=>row.product_type.includes(select));
      let priceRangeTrue = (parseFloat(row.price) >= parseFloat(filteredPrice[0])) && (parseFloat(row.price) <= parseFloat(filteredPrice[1]));
      return fulltextTrue && onStockTrue && selectedTrue && priceRangeTrue
    });
  setFilteredRows(filter)}, [stockChecked, selectedCat, filteredPrice, searchField ])
    
    
const handleChange = (event) => {
  setSearchField(event.target.value);
};

const HandleReset = () => {
  setSearchField(''); 
  setStockChecked('checked');
  setSelectedCat(categories);
  setFilteredPrice([priceRange[0], priceRange[1]]);
  setFilteredRows(rows); 
};

const labelCat = categories

const handleSorting = (key) => {
  if (sortingColumn === key) {
    const newOrder = sortingOrder === 'asc' ? 'desc' : 'asc'; 
    setSortingOrder(newOrder);
    ArraySort(filteredRows, key, newOrder, setFilteredRows);
  } else {
    setsortingColumn(key);
    setSortingOrder('asc'); 
    ArraySort(filteredRows, key, 'asc', setFilteredRows); 
  }
};

const startIndex = (currentPage - 1) * rowsPerPage
const paginatedRows = filteredRows.slice(startIndex, startIndex + rowsPerPage)
  


const handleClickDownload = (name,  ) => {
  switch(name){
    case 'xlsx-btn' : DownloadXls(filteredRows);break;
    case 'scv-btn' : DownloadCsv(filteredRows);break;
    default: break;
  }
};

return (
  
  <div className="flex lg:flex-row flex-col items-start md:items-start  lg:mr-10 lg:mt-10 lg:px-1 ">

    <Navbar 
      filteredPrice={filteredPrice} setFilteredPrice={setFilteredPrice} priceRange={priceRange} 
      setStockChecked={setStockChecked} stockChecked={stockChecked} 
      searchField = {searchField} setSearchField ={setSearchField} handleChange={handleChange}
      selectedCat = {selectedCat} handleReset={HandleReset} setSelectedCat ={setSelectedCat} labelCat={labelCat} handleClick={handleClickDownload}
    />
    
    {/* nahoře je řešení interakce s tabulkou pro mobilní zařízení (příliš mnoho změn aby bylo efektivní mít pouze jednu komponentu, mění se viditelnost dle @media ascreen) */}
    
    <TableInteractionMenu 
      filteredPrice={filteredPrice}  setFilteredPrice={setFilteredPrice} priceRange={priceRange} 
      setStockChecked={setStockChecked} stockChecked={stockChecked} 
      searchField = {searchField} setSearchField ={setSearchField} handleChange={handleChange}
      selectedCat = {selectedCat} handleReset={HandleReset} setSelectedCat ={setSelectedCat} labelCat={labelCat} handleClick={handleClickDownload}
    />
    
    {/* tělo tabulky */}
    
    <div className="lg:w-2/3 flex-grow md:border bg-white md:border-gray-300 rounded-xl md:p-2 lg:m-2 mt-4 w-full shadow-[0_10px_25px_rgba(0,0,0,0.1),0_10px_50px_rgba(0,0,0,0.2)] border-gradient-to-r from-gray-200 to-gray-500"> 
      <table className="min-w-full text-xs relative md:text-start md:text-sm bg-white text-gray-500">
        <thead className="text-xs  md:text-sm rounded-xl border-gray-300 text-gray-700  bg-white">
          <tr className="bg-white clear-start align-top  overflow-auto  ">
          {columnsNamesMainList.map((column) => {
            return (
              <th
                key={column.key}
                onClick={column.sorting === true ? () => { handleSorting(column.key) } : undefined}
                scope="col"
                className={`sticky top-12 lg:-top-1 bg-slate-700 pl-1   ${column.sorting === true ? 'hover:cursor-pointer hover:bg-slate-500 ' : ''} text-white text-start md:mx-2 z-10 border-[1px] border-transparent  pr-4 py-2 w-auto md:text-sm text-xs`}
              >
                {column.label}
                {column.sorting === true && 
                <RiArrowDropDownLine 
                  className={`
                  ${(column.key === sortingColumn) && (sortingOrder === 'asc') ?  'text-green-400 rotate-180' : '' } 
                  ${(column.key === sortingColumn) && (sortingOrder === 'desc') ? 'text-red-400 rotate-0' : '' } 
                text-gray-400 w-8 h-8 font-bold`} 
                />}
              </th>
            );
          })}
          </tr>
        </thead>
        <tbody>
          {paginatedRows.map((row) => (
              <React.Fragment key={row.id} >
                  <tr className=" text-xs md:text-sm border-b   hover:bg-gray-50 ">
                      {columnsNamesMainList.map((column) => {
                        let cellContent;
                        switch (column.key) {
                            case 'image_link': 
                                cellContent = 
                                row[column.key] !== null ? (<Image src={row[column.key]} alt="produkt" priority width={60} height={60} />) : null; 
                                break;
                            case 'link': 
                                cellContent = 
                                (<a href={row.link} target="_blank" className="flex justify-center" rel="noopener noreferrer"> <FaLink className="text-gray w-5 h-5 " /> </a>); 
                                break;
                            case 'price': 
                                cellContent = 
                                (` ${row[column.key]} €`) ; 
                                break;
                            case 'details': 
                                cellContent = 
                                <IconButton >
                                  <IoArrowDownCircleOutline  onClick={()=>handleClickSecondary(row.id, setSecondActive, secondActive)} id={row.id} className={`w-6 h-6 text-gray  transform transition ease-in-out duration-500 ${row.id === secondActive ? 'rotate-180 ' : 'rotate-0'}`} /> 
                                </IconButton>; 
                                break;
                            case 'availability': 
                                cellContent = 
                                row[column.key] === true ? <FaCheck className="text-green-600 text-center ml-3"/> : <VscError className="text-red-600" />;
                                break;
                            default: cellContent = 
                                row[column.key]; 
                                break;
                            }
                      return (
                          <td key={column.key} className="py-2 md:mx-2 md:px-2 border-[1px] text-gray-800 text-xs md:text-sm max-w border-gray-300 whitespace-normal">
                          {cellContent}
                          </td>
                      );
                      })}
                  </tr>
                      {columnsNamesSecondaryList.map((column) => {
                            return (
                              <tr key={column.key} className={` border-y-[1px] m-4 overflow-hidden text-gray-800 bg-slate-50 ${row.id === secondActive ? '' : 'hidden '}`}>
                                  <td colSpan={7} >
                                      <span className="font-bold text-xs text-gray-800 md:text-sm">{column.key} : </span><span  className="font-thin text-gray-800 text-xs md:text-sm">{row[column.key]}</span>
                                  </td>
                              </tr>
                            )
                          })} 
              </React.Fragment>
          ))}  
        </tbody>
      </table>
      <div className="flex-col flex">
        <div className="flex w-full gap-3 md:justify-between mt-4 flex-col-reverse md:flex-row">
          <PaginationHowManyRowsBtn rowsPerPage={rowsPerPage} setRowsPerPage={setRowsPerPage} />
          <Pagination 
            count={Math.ceil(filteredRows.length / rowsPerPage)} 
            page={currentPage}
            id="prepinani-pagination"
            width='120'
            onChange={(event, value)=>handleChangePaginat(event, value, setCurrentPage)} 
          />
        </div>
        <div className="flex justify-end">
          <span className="text-gray-600 items-center text-sm mt-4 m-2 md:mr-6">zobrazeno celkem {filteredRows.length} produktů.</span>
        </div>
      </div>
    </div>
  </div>
  );
}
