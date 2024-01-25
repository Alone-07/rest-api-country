import data from './data.json';


function regionSeparator(regionName) {
  return data.filter(({ region }) => region == regionName);
}

const Asia = regionSeparator('Asia');
const Africa = regionSeparator('Africa');
const America = regionSeparator("America");
const Europe = regionSeparator("Europe");
const Oceania = regionSeparator("Oceania");


function filterByRegion(regionName) {
  switch (regionName) {
    case 'Asia':
      return Asia;
    case 'Africa':
      return Africa;
    case 'America':
      return America;
    case 'Europe':
      return Europe;
    case 'Oceania':
      return Oceania;
  }
}
export { Asia, Africa, America, Europe, Oceania, filterByRegion, data }
