console.log('Hello');

const createTable = async () => {
  const response = await fetch('/api/fact')
  const factData = await response.json();
  const periodResponse = await fetch('/api/period')
  const periodData = await periodResponse.json();
const periodDates = periodData.map((date)=>date.name)

console.log(periodDates);
    const grid = new gridjs.Grid({
      // columns:  periodData ,
      columns: [
        'Sort',
        'Jan 2022',
        'Feb 2022',
        'March 2022',
        'Apr 2022',
        'May 2022',
        'June 2022',
        'Jul 2022',
        'Aug 2022',
        'Sep 2022',
        'Oct 2022',
        'Nov 2022',
        'Dec 2022', 
      ],
      data: [
        ['Adventurefuls', 15, '', 5, 7, '', '',], 
        ["Caramel Chocolate Chip", 18, 6, 10, '', '', '', '','', ''],
        // ["Caramel de Lites", 3, 12, 10, '', '', '', '','', ''],
        ["Do-si-dos", 15, '', 10, 4, '', '', '','', ''],
        ["Samoas", 25, '', 10, 8, '', '', '','', ''],
        ["Tagalongs", 12, 14, 10, '', '', '', '','', ''],
      ],
      sort: true,
      search: {
enabled: true
      }
        // factData
    
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
