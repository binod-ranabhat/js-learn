//select each input type
const buttons = document.querySelectorAll("input");

//looping through each button
let clickedValue = "";
buttons.forEach((btn) => {
  // to append what we type in variable
  btn.addEventListener("click", (e) => {
    //detect functional buttons
    if (btn.getAttributeNode("value").value === "=") {
      return evaluatedResult();
    }
    if (btn.getAttributeNode("value").value === "AC") {
      return resetDisplay();
    }
    if (btn.getAttributeNode("value").value === "C") {
      clickedValue = clickedValue.slice(0, -1);
      return display(clickedValue);
    }

    // const val = btn.getAttributeNode("value").value;
    clickedValue += btn.getAttributeNode("value").value; // appending the value in clicked val

    //calling a display function
    display(clickedValue);
  });
});

//display in screen
const display = (toDisplay) => {
  const resultDiv = document.getElementById("result");
  resultDiv.innerText = toDisplay || 0.0;
};

//for total
const evaluatedResult = () => {
  const evaluatedResult = eval(clickedValue);
  clickedValue = ""; // clearing the value
  display(evaluatedResult); // passing the evaluated value in display function
};

//reset display
const resetDisplay = () => {
  display("0.00");
  clickedValue = ""; // clearing the value
};
