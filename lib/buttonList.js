const ButtonList = [
  {
    text: "0",
    class: "zero",
    type: "number",
    scheme: "facebook",
    func: function (inputRef) {
      console.log(inputRef);
    },
  },
  {
    text: "1",
    class: "number",
    type: "number",
    scheme: "facebook",
    func: function (inputRef) {
      alert(inputRef);
    },
  },
  {
    text: "X",
    class: "func",
    type: "function",
    scheme: "yellow",
    func: function (inputRef) {
      alert("Its a function");
    },
  },
  {
    text: "AC",
    class: "misc",
    type: "misc",
    scheme: "cyan",
    func: function (inputRef) {
      alert("Its a function");
    },
  },
];

export default ButtonList;
