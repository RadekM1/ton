import { FetchAndConvertXml } from './functions/fetchAndConvertXml';
import { JsonFileFromXmlSimplified } from './functions/jsonFileFromXmlSimplified';
import { JoinedInputsForTable } from './functions/joinedInputsForTable';
import ProductTable from '@/components/productsTable';



export default async function HomePage() {

  const apiImport = await fetch('https://ton-config-api.epk-tech.com/v1/lists/products') // přes server komponentu Next.js lze získat data z API přímo a jednoduše, přes API lze nastavit impuls pro aktualizaci statických dat (například po změně v databázi)
  const xmlImport = await FetchAndConvertXml('https://www.ton.eu/exports/reseller_feed_en.xml'); // funkce převádějící XML na JSON přes nainstalovanou knihovu

  const dataFromApi = await apiImport.json();
  const preparedDataFromXml = await JsonFileFromXmlSimplified(xmlImport) // funkce čistící JSON z XML do stejné struktury jako data z API před spojením dat + dodatečné kontroly + přetypování proměnných (je předrendrováno staticky na serveru takže si můžu dovolit kontroly navíc)
  const rows = await JoinedInputsForTable(preparedDataFromXml,dataFromApi) // příprava dat pro tabulky (spojení importů do jednoho javascript objektu)

  return (
    <>
      <ProductTable inputRows = {rows}/>
    </>
  );
}
