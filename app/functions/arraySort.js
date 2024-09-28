
export default function ArraySort(array, attribute, order) { 
  return array.sort((a, b) => {
    if (a[attribute] > b[attribute]) {
      return order === 'asc' ? 1 : -1;
    } else if (a[attribute] < b[attribute]) {
      return order === 'asc' ? -1 : 1;
    } else {
      return 0;
    }
  });
}
