const form = document.getElementById("expenseForm");
const expenseName = document.getElementById("expenseName");
const amount = document.getElementById("amount");
const category = document.getElementById("category");

const expenseList = document.getElementById("expenseList");
const totalAmount = document.getElementById("totalAmount");

const expenses = [];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = expenseName.value.trim();
  const expenseAmount = Number(amount.value);
  const expenseCategory = category.value;

  // Validation
  if (name === "" || expenseAmount <= 0) {
    alert("Please enter valid expense details");
    return;
  }

  // Create expense object
  const expense = {
    name,
    amount: expenseAmount,
    category: expenseCategory
  };

  // Store expense
  expenses.push(expense);

  // Display expense
  displayExpense(expense);

  // Update total
  updateTotal();

  // Clear inputs
  expenseName.value = "";
  amount.value = "";
});

function displayExpense(expense) {
  const li = document.createElement("li");

  li.textContent =
    `${expense.name} - ₹${expense.amount} (${expense.category})`;

  expenseList.appendChild(li);
}

function updateTotal() {
  const total = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  totalAmount.textContent = total;
}