// select elements
const portionBtns = document.querySelectorAll(".portion-btn");
const itemQuantities = document.querySelectorAll(".item-quantity");
const displayPortion = document.querySelector(".portion-number");
const sendBtn = document.querySelector(".send-btn");
const historyContainer = document.querySelector(".history-container");
const reviewInputField = document.querySelector(".review-input-field");

// Variables
portionValue = Number(displayPortion.textContent);

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
    updateQuantity("-");
    portionValue -= 1;
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

function createElement(selector) {
  return document.createElement(selector);
}

function assignValue(element, value) {
  element.innerHTML = value;
}

function addComment(text) {
  const line = createElement("hr");
  const username = createElement("h3");
  const comment = createElement("p");

  assignValue(username, "Unknown");
  assignValue(comment, text);

  // add new elements to history container
  historyContainer.prepend(line, username, comment);
}

sendBtn.addEventListener("click", function () {
  const text = reviewInputField.value;
  if (text.trim() !== "") {
    addComment(text);
  }
});
