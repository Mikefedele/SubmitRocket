

const submitSales = async (event) => {
  event.preventDefault();
  console.log('click');
  const product_id = document.querySelector('#product').value;

  const period_name = document.querySelector('#period').value;
  const units = document.querySelector('#units').value;
  console.log(product_id);
  console.log(period_name);
  console.log(units);

  // const user_id = req.session.user_id;


  // epochPeriod =

  //FACT LOOKS LIKE THIS:
  // {
  //   "trans_date" : 1650947783,
  //   "period_id" : 1,
  //   "product_id" : 3,
  //   "user_id" : 2,
  //   "units" : 5
  // },


  // const response = await fetch('/api/submit', {
  //   method: 'PUT',
  //   body: JSON.stringify({ product_id, period_name, units }),
  //   headers: { 'Content-Type': 'application/json' },
  // });

  // if (response.ok) {
  //   response.JSON;
  // } else {
  //   alert(response.statusText);
  // }

clearForm()
};
const submitButton = document.getElementById('submitBtn');
console.log('HELLO');
console.log(submitButton);
// document
// .querySelector('.submit')
submitButton.addEventListener('click', submitSales);

const dashBtn = document.getElementById('dashBtn')
function goDash() {
  document.location.replace('/api/dashboard');

};

dashBtn.addEventListener('click', goDash);

function goDash() {
  document.location.replace('/api/dashboard');

};


const clearForm = () => {
  document.getElementById('product').value = '';
  document.getElementById('period').value = '';
  document.getElementById('units').value = '';
};
// clearForm();