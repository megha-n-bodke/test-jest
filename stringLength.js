function stringLength(string) {
  return string.length;
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

module.exports = {
  stringLength,
  reverseString,
};
