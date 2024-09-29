import { FetchAndConvertXml } from './functions/fetchAndConvertXml';
import { JsonFileFromXmlSimplified } from './functions/jsonFileFromXmlSimplified';
import { JoinedInputsForTable } from './functions/joinedInputsForTable';
import ProductTable from '@/components/productsTable';
import { Categories } from './functions/categories';
import { PriceRange } from './functions/priceRange';



export default async function  HomePage() {

  const apiImport = await fetch('https://ton-config-api.epk-tech.com/v1/lists/products', {next: {revalidate: 60} }) // přes server komponentu Next.js lze získat data z API přímo a jednoduše, přes API lze nastavit impuls pro aktualizaci statických dat bez čekání na konec časového intervalu (například po změně v databázi)
  const xmlImport = await FetchAndConvertXml('https://www.ton.eu/exports/reseller_feed_en.xml', {next: {revalidate : 60}}); // funkce převádějící XML na JSON přes nainstalovanou knihovu

  const dataFromApi = await apiImport.json();
  const preparedDataFromXml = await JsonFileFromXmlSimplified(xmlImport) // funkce čistící JSON z XML do stejné struktury jako data z API před spojením dat + dodatečné kontroly + přetypování proměnných (je předrendrováno staticky na serveru takže si můžu dovolit kontroly navíc)
  const rows = await JoinedInputsForTable(preparedDataFromXml,dataFromApi) // příprava dat pro tabulky (spojení importů do jednoho javascript objektu)
  const categories = Categories(rows) // příprava dat na serveru před navštívením prvního uživatele aby byla doručena statická data rychle
  const priceRange = PriceRange(rows) // příprava dat na serveru před navštívením prvního uživatele aby byla doručena statická data rychle

  return (
    <>
      <ProductTable inputRows = {rows} categories = {categories} priceRange = {priceRange} />
    </>
  );
}
