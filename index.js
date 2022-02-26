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

//4
// setTimeout(() => console.log('A'), 0)
// setTimeout(() => console.log('C'), 0)
// setTimeout(() => console.log('B'), 0)

// setTimeout(() => console.log('A'), 1000);
// setTimeout(() => console.log('B'), 400);
// setTimeout(() => console.log('C'), 1300);

// console.log('A');
// setTimeout(() => console.log('B'), 0);
// console.log('C');

//5
// const myGreeting = () => {
//   console.log('henlo jhonu');
// };
// console.log('henlo jhonu 1');
// const myTimeout = setInterval(myGreeting, 0)

// promises

const fakeFetch = (msg, shouldReject) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(`error from server: ${msg}`);
      }
      resolve(`from server: ${msg}`);
    }, 2000);
  });
};

// fakeFetch('Hinanshi is cool');
// fakeFetch('Hinanshi is sexy', true);

// fakeFetch("Hinanshi Is Hot").then(data => console.log(data));

// fakeFetch("Hinanshi Is Best").then(data => console.log(data)).catch(err => console.error(err));

// fakeFetch("Hinanshi Is Best", true).then(data => console.log(data)).catch(err => console.error(err));

//return length of  message

// const getServerResponseLength = (msg) => {
//   fakeFetch(msg).then((data) => printLength(msg));
// };

// const printLength = (nameLength) => nameLength.length;

// getServerResponseLength('hinanshi');

// const syncCallsToServer = (msg1, msg2) =>
//   fakeFetch(msg1).then((data) =>
//     fakeFetch(msg2).then((data2) => console.log(data2))
//   );

// syncCallsToServer('1', '2');
//from server: 2

// return both dataFrom1 and dataFrom2. for eg user id and orders

// const syncCallsToServer = (msg1, msg2) =>
//   fakeFetch(msg1).then((data) =>
//     fakeFetch(msg2).then((data2) => console.log({ data, data2 }))
//   );

// syncCallsToServer('1', '2');
//{data: 'from server: 1', data2: 'from server: 2'}

//async await

// async function printDataFromServer() {
//   const serverData = await anyPromiseWhichWillReturnData() // .then(data => { sksksksksksk(), sjskssks()})
//   console.log(serverData);
// }

// notice that function need an `async` keyword.

// Doing this in es6 arrow function would be

// const printDataFromServer = async () => {
// 	try {
// 		const serverData = await anyPromiseWhichWillReturnData();
// 	  console.log(serverData);
// 	} catch (err) {
// 	 console.error(err)
// 	}
// }

/**
Note: In arrow the async keyword is used before the ().
While in normal functions, it is used before the `function` keyword itself.
**/

//live eg

// const getData = async () => {
//   const data = await fakeFetch('hinanshi');
//   console.log(data);
// };

// getData();

//16 - do eg 14 with async await

// const syncCallsToServer = async (msg1, msg2) => {
//   const data1 = await fakeFetch(msg1);
//   const data2 = await fakeFetch(msg2);
//   console.log({ data1, data2 });
// };

// syncCallsToServer('1', '2');
