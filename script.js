// // function countSting(str, letter) {
// //   let count = 0;

// //   strArray = [...str];
// //   strArray.forEach(l => {
// //     if (l === letter) {
// //       count += 1;
// //     }
// //   });
// //   return count;
// // }

// // const string = prompt('Enter a String');
// // const latterToCheck = prompt('Enter a letter to check');

// // const result = countSting(string, latterToCheck);
// // console.log(result);

// const array = [];
// for (let i = 0; i <= 10; i++) {
//   array.push(i);
// }

// console.log(array);

// function createBtn() {
//   const body = document.querySelector('body');
//   const div = document.createElement('div');
//   div.classList.add('box');
//   const btn = document.createElement('btn');
//   btn.innerText = 'Click';
//   btn.classList.add('btn');
//   div.append(btn);
//   body.append(div);
// }
// const lang = ['hebrow', 'english', 'german', 'arabic'];

// function makelist(array) {
//   const body = document.querySelector('body');
//   array.map(lang => {
//     let li = document.createElement('div');

//     const h2 = document.createElement('h2');
//     h2.innerHTML = lang;

//     body.append(li);
//     li.append(h2);
//   });
// }

// const breeds = ['beagle', 'pug', 'corgi', 'labrador'];

// function makeSelectBox(array) {
//   const body = document.querySelector('body');
//   const select = document.createElement('select');
//   array.map(breed => {
//     const option = document.createElement('option');
//     option.value = breed;
//     option.innerText = breed;
//     select.append(option);
//   });
//   body.append(select);
// }

// async function getBreedList() {
//   const response = await fetch('https://dog.ceo/api/breeds/list/all');
//   const data = await response.json();

//   const breeds = Object.entries(data.message).map(([key, value]) => {
//     return key;
//   });

//   function makeSelectBox(array) {
//     const body = document.querySelector('body');
//     const select = document.createElement('select');
//     select.classList.add('select');
//     array.map(breed => {
//       const option = document.createElement('option');
//       option.value = breed;
//       option.innerText = breed[0].toUpperCase() + breed.slice(1).toLowerCase();
//       select.append(option);
//     });
//     body.append(select);
//   }

//   makeSelectBox(breeds);
// }

// getBreedList();
