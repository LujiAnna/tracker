// save data to local storage - store expense entered

// Obtain entry DOM points
const item = document.getElementById('item');
const cost = document.getElementById('cost');
const category = document.getElementById('category');
const type = document.getElementById('paymentMethod');
const btnSave = document.getElementById('btnSave');

let expenses = [];
let save = () => {
  let inputItem = item.value;
  // console.log(inputItem);
  let inputCost = cost.value;
  let inputCategory = category.value;
  let inputType = type.value;
  // store date in current time of saving input
  let date = Date.now();
  // make expense object
  let myExpense = {
    inputItem: inputItem,
    inputCost: inputCost,
    inputCategory: inputCategory,
    inputType: inputType,
    date: date
  };
  console.log(myExpense);
  expenses.push(myExpense);
  console.log(expenses);
  // TODO: Local storage
  // TODO: clear fields
}

// Event trigger
btnSave.addEventListener('click', save);

// TODO: Retrieving data from local storage