export async function JoinedInputsForTable(inputFromXml, inputFromApi) {
  const dataFromXml = inputFromXml;
  const dataFromApi = inputFromApi.products;


  const rows = dataFromXml.map((xmlItem) => {

    const apiItem = dataFromApi.find((apiItem) => xmlItem.id === apiItem.product_code);
    const row = apiItem ? { ...xmlItem, ...apiItem } : { ...xmlItem, error: 'join error' };
    
    return row;
  });

  return rows; 
}
