

export function Categories(input) {
  
    let categories = []
    let rows = input
    let i = 0
  
    rows.forEach(element => {
        let temp = element.product_type
        if(i === 0){
            categories[0] = element.product_type
            i++;
        } else{
            if(!categories.includes(temp)){
                categories[i] = temp;
                i++;
            }
        }
    });

  return categories;
  
  }
