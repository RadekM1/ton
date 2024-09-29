
export function PriceRange(input) {

    let rows = input
    let i = 0
    let range = []
    let min
    let max
  
    rows.forEach(element => {
        let temp = element.price

        if(i === 0){
            min = temp;
            max = temp;
        } else{
            min = temp > min ? min : temp;
            max = temp > max ? temp : max;
        }
        range[0] = min;
        range[1] = max;
        i++
    });

  return range;
  
  }
