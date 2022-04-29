
// const { Grid } = require("gridjs");

// )





// const { Grid, Row } = require("gridjs");
// const { post } = require("../../controllers/homeRoutes");
// const { Product, Period, Fact } = require("../../models");

// var periodName = Fact.period.name;
// var unitsSold = Fact.units;
// var productName = Fact.product.name;

// //todo get data iterate over data 
// // GET Request
// const periodColumns = periodName.map(periods);

console.log('Hello');

// fetch('/api/fact').then((response)=> response.json()).then((data)=>{
//   console.log('hello');
// });



const createTable = async () => {
  const response = await fetch('/api/fact')
  const factData = await response.json();
  const periodResponse = await fetch('/api/period')
  const periodData = await periodResponse.json();
const periodDates = periodData.map((date)=>date.name)

console.log(periodDates);
    const grid = new gridjs.Grid({
      columns:  periodData ,
      data: [
        // factData
      ]
    }).render(document.getElementById('wrapper'));

    console.log(grid);
  }

createTable().catch(
  (err)=> console.log({err})
);
// async function table (facts, periods, products) {
//   const response = await fetch('/api/dashboard');
//   const data = await response.json(facts, periods, products);
//   console.log(data);

// };





// //* from grid.js docs
// new Grid({
//   columns:  [
//     {
//     // data: (row) => row.productName,
//     name: 'Products'
//   },

//   //*NO this would prob populate cells w month names 
//   //   {
//       // data: (row) => row.Period.name[(i)++],
//   //     // periodName.findAll(),
//   //     name: 'Month'
//   // },
 
//   {
//     data: (row) => row.Fact.units,
//     // periodName.findAll(),
//     name: 'Month'
// },

//   ]
// }).render(document.getElementById("wrapper"));



// // new gridjs.Grid({

// //   grid()

// // })

// //*Do I need to call it?
// // grid();


// //* Import server side data
// // const grid = new Grid({
// //   columns: ['Name', 'Language', 'Released At', 'Artist'],
// //   server: {
// //     url: 'https://api.scryfall.com/cards/search?q=Inspiring',
// //     then: data => data.map(card => [card.name, card.lang, card.released_at, card.artist])
// //   } 
// // });
