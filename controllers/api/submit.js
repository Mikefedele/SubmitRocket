

const grid = new Grid({

  columns: [
    {
    data: (row) => row.Fact.product.name,
    name: 'Products'
  },

  //*NO this would prob populate cells w month names 
    {
      data: (row) => row.Period.name[(i)++],
      // periodName.findAll(),
      name: 'Month'
  },
 
  {
    data: (row) => row.Fact.units,
    // periodName.findAll(),
    name: 'Month'
},

  ]
});
