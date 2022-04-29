const dashBtn = document.getElementById('dashboard')

dashBtn.addEventListener('click', goDash);

function goDash() {
  document.location.replace('/api/dashboard');

};

const subBtn = document.getElementById('submitButton')
function goSub() {
  document.location.replace('/api/submit');

};
subBtn.addEventListener('click', goSub);
