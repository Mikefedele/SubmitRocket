const { Grid, Row } = require("gridjs");
const { Product, Period, Fact } = require("../../models");

var periodName = Fact.period.name;
//todo get data iterate over data 
// GET Request
const periodColumns = periodName.map(periods);

//* from grid.js docs
new Grid({
  columns:  [
    {
    data: (row) => row.Fact.product.name,
    name: 'Products'
  },

  //*NO this would prob populate cells w month names 
  //   {
      // data: (row) => row.Period.name[(i)++],
  //     // periodName.findAll(),
  //     name: 'Month'
  // },
 
  {
    data: (row) => row.Fact.units,
    // periodName.findAll(),
    name: 'Month'
},

  ]
});


new gridjs.Grid({

  grid();

}).render(document.getElementById("wrapper"))


//*Do I need to call it?
// grid();


//* Import server side data
// const grid = new Grid({
//   columns: ['Name', 'Language', 'Released At', 'Artist'],
//   server: {
//     url: 'https://api.scryfall.com/cards/search?q=Inspiring',
//     then: data => data.map(card => [card.name, card.lang, card.released_at, card.artist])
//   } 
// });