import xml2js from 'xml2js';

export async function FetchAndConvertXml(xmlInput) {
  const parser = new xml2js.Parser();

  try {
   
    const response = await fetch(xmlInput); 
    const xmlData = await response.text();

    const jsonData = await parser.parseStringPromise(xmlData);

    const newJsonArray = Object.values(jsonData);

    return newJsonArray;
  } catch (error) {
    console.error('Chyba při načítání nebo převodu XML:', error);
    return null;
  }
}
