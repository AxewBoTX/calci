const handleButtonClick = (setInput, value) => {
  setInput((prevInput) => prevInput + value);
};
const handleClear = (setInput) => {
  setInput("");
};
const handleCalculate = (setInput, input) => {};

const ButtonList = [
  //First Layer
  [
    {
      text: "AC",
      class: "misc",
      type: "misc",
      scheme: "red",
      func: function (setInput) {
        handleClear(setInput);
      },
    },
    {
      text: "^",
      class: "misc",
      type: "misc",
      scheme: "red",
      func: function (setInput) {
        handleButtonClick(setInput, "^");
      },
    },
    {
      text: "√",
      class: "misc",
      type: "misc",
      scheme: "red",
      func: function (setInput) {
        handleButtonClick(setInput, "√");
      },
    },
    {
      text: "/",
      class: "func",
      type: "function",
      scheme: "yellow",
      func: function (setInput) {
        handleButtonClick(setInput, "/");
      },
    },
  ],
  //Second Layer
  [
    {
      text: "7",
      class: "number",
      type: "number",
      scheme: "facebook",
      func: function (setInput) {
        handleButtonClick(setInput, "7");
      },
    },
    {
      text: "8",
      class: "number",
      type: "number",
      scheme: "facebook",
      func: function (setInput) {
        handleButtonClick(setInput, "8");
      },
    },
    {
      text: "9",
      class: "number",
      type: "number",
      scheme: "facebook",
      func: function (setInput) {
        handleButtonClick(setInput, "9");
      },
    },
    {
      text: "*",
      class: "func",
      type: "function",
      scheme: "yellow",
      func: function (setInput) {
        handleButtonClick(setInput, "*");
      },
    },
  ],
  //Third Layer
  [
    {
      text: "4",
      class: "number",
      type: "number",
      scheme: "facebook",
      func: function (setInput) {
        handleButtonClick(setInput, "4");
      },
    },
    {
      text: "5",
      class: "number",
      type: "number",
      scheme: "facebook",
      func: function (setInput) {
        handleButtonClick(setInput, "5");
      },
    },
    {
      text: "6",
      class: "number",
      type: "number",
      scheme: "facebook",
      func: function (setInput) {
        handleButtonClick(setInput, "6");
      },
    },
    {
      text: "-",
      class: "func",
      type: "function",
      scheme: "yellow",
      func: function (setInput) {
        handleButtonClick(setInput, "-");
      },
    },
  ],
  //Fourth Layer
  [
    {
      text: "1",
      class: "number",
      type: "number",
      scheme: "facebook",
      func: function (setInput) {
        handleButtonClick(setInput, "1");
      },
    },
    {
      text: "2",
      class: "number",
      type: "number",
      scheme: "facebook",
      func: function (setInput) {
        handleButtonClick(setInput, "2");
      },
    },
    {
      text: "3",
      class: "number",
      type: "number",
      scheme: "facebook",
      func: function (setInput) {
        handleButtonClick(setInput, "3");
      },
    },
    {
      text: "+",
      class: "func",
      type: "function",
      scheme: "yellow",
      func: function (setInput) {
        handleButtonClick(setInput, "+");
      },
    },
  ],
  //Fifth Layer
  [
    {
      text: "0",
      class: "zero",
      type: "number",
      scheme: "facebook",
      func: function (setInput) {
        handleButtonClick(setInput, "0");
      },
    },
    {
      text: ".",
      class: "number",
      type: "number",
      scheme: "facebook",
      func: function (setInput) {
        handleButtonClick(setInput, ".");
      },
    },
    {
      text: "=",
      class: "func",
      type: "function",
      scheme: "yellow",
      func: function (setInput, input) {
        handleCalculate(setInput, input);
      },
    },
  ],
];

export default ButtonList;
