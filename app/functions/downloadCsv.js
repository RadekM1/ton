import { unparse } from "papaparse";


export const DownloadCsv = (filteredRows) => {

  const csv = unparse(filteredRows)

  const blob = new Blob([csv], {type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", "katalog-produktů.csv");

  link.click();

  };
    
export default DownloadCsv;
  