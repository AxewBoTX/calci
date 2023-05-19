const ButtonList = [
  //First Layer
  [
    {
      text: "AC",
      class: "misc",
      type: "misc",
      scheme: "red",
      func: function (inputRef) {
        alert("You Pressed AC");
      },
    },
    {
      text: "^",
      class: "misc",
      type: "misc",
      scheme: "red",
      func: function (inputRef) {
        alert("You Presssed Square");
      },
    },
    {
      text: "√",
      class: "misc",
      type: "misc",
      scheme: "red",
      func: function (inputRef) {
        alert("You Pressed Square Root");
      },
    },
    {
      text: "÷",
      class: "func",
      type: "function",
      scheme: "yellow",
      func: function (inputRef) {
        alert("You Pressed Devide");
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
      func: function (inputRef) {
        alert("You Pressed 7");
      },
    },
    {
      text: "8",
      class: "number",
      type: "number",
      scheme: "facebook",
      func: function (inputRef) {
        alert("You Pressed 8");
      },
    },
    {
      text: "9",
      class: "number",
      type: "number",
      scheme: "facebook",
      func: function (inputRef) {
        alert("You Pressed 9");
      },
    },
    {
      text: "×",
      class: "func",
      type: "function",
      scheme: "yellow",
      func: function (inputRef) {
        alert("You Pressed Multiply");
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
      func: function (inputRef) {
        alert("You Pressed 4");
      },
    },
    {
      text: "5",
      class: "number",
      type: "number",
      scheme: "facebook",
      func: function (inputRef) {
        alert("You Pressed 5");
      },
    },
    {
      text: "6",
      class: "number",
      type: "number",
      scheme: "facebook",
      func: function (inputRef) {
        alert("You Pressed 6");
      },
    },
    {
      text: "-",
      class: "func",
      type: "function",
      scheme: "yellow",
      func: function (inputRef) {
        alert("You Pressed Minus");
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
      func: function (inputRef) {
        alert("You Pressed 1");
      },
    },
    {
      text: "2",
      class: "number",
      type: "number",
      scheme: "facebook",
      func: function (inputRef) {
        alert("You Pressed 2");
      },
    },
    {
      text: "3",
      class: "number",
      type: "number",
      scheme: "facebook",
      func: function (inputRef) {
        alert("You Pressed 3");
      },
    },
    {
      text: "+",
      class: "func",
      type: "function",
      scheme: "yellow",
      func: function (inputRef) {
        alert("You Pressed Plus");
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
      func: function (inputRef) {
        alert("You Pressed Zero");
      },
    },
    {
      text: ".",
      class: "number",
      type: "number",
      scheme: "facebook",
      func: function (inputRef) {
        alert("You Pressed Dot");
      },
    },
    {
      text: "+",
      class: "func",
      type: "function",
      scheme: "yellow",
      func: function (inputRef) {
        alert("You Pressed Equals");
      },
    },
  ],
];

export default ButtonList;
