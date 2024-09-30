import * as XLSX from 'xlsx/xlsx.mjs';


export const DownloadXls = (filteredRows) => {

    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(filteredRows);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');
    XLSX.writeFile(workbook, 'data.xlsx');
  };
    
export default DownloadXls;
  