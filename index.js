// Import stylesheets
import './style.css';

// Write Javascript code!

//1
// const strLength = (name, cbFunction) => {
//   cbFunction(name.length);
// };

// const printName = (nameLength) =>
//   console.log(`omg my name is ${nameLength} chars long!!!`);

// strLength('hinanshi', printName);

//2
// const willThanosKillMe = (name, noKill, kill) => {
//   if (name.length % 2 === 0) {
//     noKill();
//   } else {
//     kill();
//   }
// };

// const noKill = () => console.log('Yay! I am Alive!');

// const kill = () =>
//   console.log('Give my bose speakers and apple headphones to my sister');

// willThanosKillMe('hinanshi', noKill, kill);

//3
// const myGreeting = () => {
//   console.log('henlo jhonu');
// };
// console.log('henlo jhonu 1');
// const myTimeout = setTimeout(myGreeting, 0);

//setTimeout(fn, 0) is used when one needs to do calculation when the callstack is empty. Therefore here, there is no blocking of render.
