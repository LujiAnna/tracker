// save data to local storage - store expense entered

// Obtain entry DOM points
const inputItem = document.getElementById('item');
const inputCost = document.getElementById('cost');
const inputCategory = document.getElementById('category');
const inputType = document.getElementById('paymentMethod');
const btnSave = document.getElementById('btnSave');

let expenses = [];

// Retrieve stored strings from the local storage as an object
let init = () => {
// First retrieve the previous item in strings into an object that browser can use, so can save/store new as whole as an expenses
 expenses = JSON.parse(localStorage.getItem('expenses'));
 console.log('inside init: ', expenses);
 if(expenses == null || expenses == '') {
   expenses = [];
 } else {
  displayExpenseHistory();
 }
}

console.log('expenses after get: ', expenses)

// 1. SAVE : Create and Read and Store/Save in local storage
let save = () => {
  let item = inputItem.value;
  // console.log(item);
  let cost = inputCost.value;
  let category = inputCategory.value;
  let type = inputType.value;
  // store date in current time of saving input
  let date = Date.now();
  // make expense object (read more)
  let myExpense = {
    item: item,
    cost: cost,
    category: category,
    type: type,
    date: date
  };
  console.log(myExpense);
  // push object made into the expenses array
  if(myExpense.item != '') {
    expenses.push(myExpense);
  } else {
    alert('Please enter an Item name');
  }
  console.log(expenses);
  // Local storage https://developer.mozilla.org/en-US/docs/Web/API/Storage
  // re-store the entire array, we cant modify it 
  storeExpense();
  // clear fields
  clearInterface();
}

let storeExpense = () => {
  // can only store object as string or text inside a local storage
  localStorage.setItem('expenses', JSON.stringify(expenses));
}

let clearInterface = () => {
  inputItem.value = '';
  inputCost.value = '';
  // inputCategory.value = '';
  // inputType.value = '';
}

// TODO: Display the expense history in the table rows 
let displayExpenseHistory = () => {
  // get table element
  const currentDiv = document.getElementById("historyTable");
console.log('start here!!!');
  // expenses.forEach((i) => {
  //   // create a new tr element as an array
  //   // let expense = []; 
  //   let expense = {};
  //   expenses[i] = document.createElement('tr');
  //   expense = document.createElement('td');
    
    
  //   // assign value
  //   const date = document.createTextNode(expenses[i].expense.date);
  //   const item = document.createTextNode(expenses[i].expense.item);
  //   const cost = document.createTextNode(expenses[i].expense.cost);
    
  //    // add the text node to the newly created tr
  //    expense[i].expenseObj.appendChild(date);
  //    expense[i].expenseObj.appendChild(item);
  //    expense[i].expenseObj.appendChild(cost);
    
    
  //     // add the newly created element and its content into the DOM
  //     document.body.insertBefore(expense[i], currentDiv);
  //   });

}

// Retrieving data from local storage before assigning to it a new expense

init();

// Event trigger
btnSave.addEventListener('click', save);


