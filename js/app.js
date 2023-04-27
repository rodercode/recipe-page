// select elements
const portionBtns = document.querySelectorAll(".portion-btn");
const itemQuantities = document.querySelectorAll(".item-quantity");
const displayPortion = document.querySelector(".portion-number");
const sendBtn = document.querySelector(".send-btn");
const historyContainer = document.querySelector(".history-container");
const reviewInputField = document.querySelector(".review-input-field");
const commentNumber = document.querySelector(".comment-number");

// Variables
portionValue = Number(displayPortion.textContent);
let amountOfComments = Number(commentNumber.textContent);

// * Food Portion Feature

// Handle plus and minus button
portionBtns.forEach((btn) => {
  btn.addEventListener("click", changePortion);
});

// Change portion based on button
function changePortion(e) {
  btnId = e.target.id;

  // Increase portion by one
  if (btnId == "plus-icon" || btnId == "increase-btn") {
    updateQuantity("+");
    portionValue += 1;
  }
  // Decrease portion by one
  else if (btnId == "minus-icon" || btnId == "decrease-btn") {
    if (portionValue > 1) {
      updateQuantity("-");
      portionValue -= 1;
    }
  }
  displayPortion.textContent = portionValue;
}

// Update food portion quantity
function updateQuantity(operator) {
  itemQuantities.forEach((itemQuantities) => {
    currentValue = Number(itemQuantities.textContent);
    const growth = currentValue / portionValue;
    let result;

    // Increase portion by one
    if (operator === "+") {
      result = (currentValue + growth).toFixed(2);
    }
    // Decrease portion by one
    else if (operator === "-") {
      result = (currentValue - growth).toFixed(2);
    }
    itemQuantities.textContent = result;
  });
}

// * Add Comment Feature

const createEl = (selector) => document.createElement(selector);

function assignValue(element, value) {
  element.innerHTML = value;
}

function cleanField() {

  
}

function addComment(text) {
  const line = createEl("hr");
  const username = createEl("h3");
  const comment = createEl("p");

  assignValue(username, "Unknown");
  assignValue(comment, text);

  // add new elements to history container
  historyContainer.prepend(line, username, comment);
}

sendBtn.addEventListener("click", function () {
  const text = reviewInputField.value;
  if (text.trim() !== "") {
    addComment(text);
    amountOfComments++;
    commentNumber.textContent = amountOfComments;
    reviewInputField.value = "";
  }
});
