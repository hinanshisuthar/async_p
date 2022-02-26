// Import stylesheets
import './style.css';

// Write Javascript code!

//1
const strLength = (name, cbFunction) => {
  cbFunction(name.length);
};

const printName = (nameLength) =>
  console.log(`omg my name is ${nameLength} chars long!!!`);

strLength('arpan', printName);
