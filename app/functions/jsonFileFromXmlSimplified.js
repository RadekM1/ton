
export async function JsonFileFromXmlSimplified(jsonFromXml) {
  
  const temp = jsonFromXml[0];



  const preparedData = temp.channel[0].item.map(product => ({

    id: product['g:id'][0],
    title:product['g:title'][0],
    description: product['g:description'][0],
    availability: product['g:availability'][0] === 'available for order' ? true : false,
    condition: product['g:condition'][0],
    price: parseFloat(product['g:price'][0]) ,
    currencyEurCheck:  (product['g:price'][0]).includes('EUR') ? true : false,
    link: product['g:link'][0],
    brand: product['g:brand'][0],
    image_link: product['g:image_link'] ? product['g:image_link'][0] : null,
    gtin: product['g:gtin'][0],
    item_group_id: product['g:item_group_id'][0]

  }));

return preparedData;

}
