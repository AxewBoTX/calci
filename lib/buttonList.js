const ButtonList = [
  {
    text: "0",
    type: "number",
    func: function (inputRef) {
      console.log(inputRef);
    },
  },
  {
    text: "1",
    type: "number",
    func: function (inputRef) {
      alert(inputRef);
    },
  },
];

export default ButtonList;
