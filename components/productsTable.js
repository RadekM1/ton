'use client';
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { FaLink, FaCheck } from "react-icons/fa6";
import { columnsNamesMainList, columnsNamesSecondaryList } from "@/library/tableAttributes";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { VscError } from "react-icons/vsc";
import IconButton from '@mui/material/IconButton';
import { CgArrowDown } from "react-icons/cg";
import Pagination from '@mui/material/Pagination';
import HandlePagination from "@/app/functions/handlePagination";
import {handleChangePaginat} from "@/app/functions/handleChangePaginat";

export default function ProductTable({ inputRows }) {

    const [rows, setRows] = useState(inputRows)
    const [secondActive, setSecondActive] = useState(null)
    const [sortingColumn, setsortingColumn] = useState(null)
    const [sortingOrder, setSortingOrder] = useState('asc')
    const [rowsPerPage, setRowsPerPage] = useState(20)
    const [paginationNum, setpaginationNum] = useState(50)
    const [currentPage, setCurrentPage] = useState(1)

    const handleClickSecondary = (id) => {
      secondActive === id ? setSecondActive(null) : setSecondActive(id)
    }

    /*

    onClick={column.sorting === true ? () => { handleSorting(column.key) } : undefined}

    const handleSorting = (key) => {

      if(sortingColumn === key){
        let temp = ((sortingColumn === key) && (sortingOrder === 'asc')) ? 'desc' : 'asc';
        setSortingOrder(temp)
      }
      else{
        setsortingColumn(key);
        setSortingOrder('asc')
      }
    }

    const handlePaginationSlice = () => {
      const firstPag = rows.slice(0,50);
    setRows(firstPag)
    console.log('fire test')
    }
*/

console.log(currentPage)


  return (
    <div className="flex flex-col items-center px-1 ">
      <div className="mt-20">

      <button onClick={()=>HandlePagination(20, rows.length,setpaginationNum )} className="border bg-gray-300 hover:bg-gray-200 m-2 p-3 rounded-full">první paggination</button>


      </div>
      <div className="md:w-2/3 flex-grow md:border bg-white md:border-gray-300 rounded-xl md:p-2 md:m-2 mt-4 w-full shadow-[0_10px_25px_rgba(0,0,0,0.1),0_10px_50px_rgba(0,0,0,0.2)] border-gradient-to-r from-blue-400 via-purple-500 to-pink-500"> 
        <table className="min-w-full text-xs relative md:text-start md:text-sm bg-white text-gray-500 dark:text-gray-400">
          <thead className="text-xs  md:text-sm rounded-xl border-gray-300 text-gray-700  bg-white dark:bg-gray-700 dark:text-gray-400">
            <tr className="bg-white clear-start align-top  overflow-auto ">
            {columnsNamesMainList.map((column) => {
              return (
                <th
                  key={column.key}
                  
                  scope="col"
                  className={`sticky -top-1 bg-slate-700 pl-1  ${column.sorting === true ? 'hover:cursor-pointer hover:bg-slate-500 dark:hover:bg-gray-600' : ''} text-white text-start md:mx-2 z-10 border-[1px] border-transparent dark:bg-gray-700 pr-4 py-2 w-auto md:text-sm text-xs`}
                >
                  {column.label}
                  {column.sorting === true && 
                  <CgArrowDown 
                    className={`
                    ${(column.key === sortingColumn) && (sortingOrder === 'asc') ?  'text-green-400 rotate-180' : '' } 
                    ${(column.key === sortingColumn) && (sortingOrder === 'desc') ? 'text-red-400 rotate-0' : '' } 
                  text-gray-400 w-5 h-5`} 
                  />}
                </th>
              );
            })}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
                <React.Fragment key={row.id} >
                    <tr className=" text-xs md:text-sm border-b dark:bg-gray-800  hover:bg-gray-50 dark:hover:bg-gray-600">
                        {columnsNamesMainList.map((column) => {
                          let cellContent;
                          switch (column.key) {
                              case 'image_link': 
                                  cellContent = 
                                  row[column.key] !== null ? (<Image src={row[column.key]} alt="" priority width={60} height={60} />) : null; 
                                  break;
                              case 'link': 
                                  cellContent = 
                                  (<a href={row.link} target="_blank" rel="noopener noreferrer"> <FaLink className="text-gray w-5 h-5 " /> </a>); 
                                  break;
                              case 'price': 
                                  cellContent = 
                                  (` ${row[column.key]} €`) ; 
                                  break;
                              case 'details': 
                                  cellContent = 
                                  <IconButton >
                                    <IoArrowDownCircleOutline  onClick={()=>handleClickSecondary(row.id)} id={row.id} className={`w-6 h-6 text-gray transform transition ease-in-out duration-500 ${row.id === secondActive ? 'rotate-180 ' : 'rotate-0'}`} /> 
                                  </IconButton>; 
                                  break;
                              case 'availability': 
                                  cellContent = 
                                  row[column.key] === true ? <FaCheck className="text-green-600"/> : <VscError className="text-red-600" />;
                                  break;
                              default: cellContent = 
                                  row[column.key]; 
                                  break;
                              }
                        return (
                            <td key={column.key} className="py-2 md:mx-2 md:px-2 border-[1px] text-xs md:text-sm max-w border-gray-300 whitespace-normal">
                            {cellContent}
                            </td>
                        );
                        })}
                    </tr>
                        {columnsNamesSecondaryList.map((column) => {
                              return (
                                <tr key={column.key} className={` border-y-[1px] m-4 overflow-hidden bg-slate-50 ${row.id === secondActive ? '' : 'hidden '}`}>
                                    <td colSpan={7} >
                                        <span className="font-bold text-xs md:text-sm">{column.key} : </span><span className="font-thin text-xs md:text-sm">{row[column.key]}</span>
                                    </td>
                                </tr>
                              )
                            })} 
                            
                </React.Fragment>
            ))}  
          </tbody>
        </table>
        <div className="flex w-full justify-end">
          <Pagination 
            count={paginationNum} 
            page={currentPage}
            className="mt-2" 
            id="prepinani-pagination"
            onChange={(event, value)=>handleChangePaginat(event, value, setCurrentPage)} 
          />
            
        </div>
        
      </div>
    </div>
  );
}
