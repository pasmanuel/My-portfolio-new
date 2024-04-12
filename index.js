// for hambugger
let openHam = document.querySelector('#openHam');
let closeHam = document.querySelector('#closeHam');
let navigationItems = document.querySelector('#navigationItems');

const hamburgerEvent = (navigation, close, open) => {
    navigationItems.style.display = navigation;
    closeHam.style.display = close;
    openHam.style.display = open;

   
};

openHam.addEventListener('click', () => hamburgerEvent("flex", "block", "none"));
closeHam.addEventListener('click', () => hamburgerEvent("none", "none", "block"));

// for number count on scroll
const counters = document.querySelectorAll(".marketing-info-divs p");
const container = document.querySelector(".marketing-info-divs");
let activated = false;

window.addEventListener("scroll", () => {
  if (pageYOffset > container.offsetTop - window.innerHeight + 200 && !activated) {
    counters.forEach(counter => {
      counter.innerText = 0;
      let count = 0;

      function updateCount() {
        const target = parseInt(counter.dataset.count);
        if (count < target) {
          count++;
          counter.innerText = count;
          setTimeout(updateCount, 10);
        } else {
          counter.innerText = target;
        }
      }
      updateCount();
    });
    activated = true;
  } else if (pageYOffset < container.offsetTop - window.innerHeight - 500 && activated) {
    counters.forEach(counter => {
      counter.innerText = 0;
    });
    activated = false;
  }
});




// document.addEventListener("DOMContentLoaded", function() {
//     const counters = document.querySelectorAll(".counters .number");
//     const targetValues = []; // Array to store the target values for each counter
//     let activated = false;

//     counters.forEach(counter => {
//         // Store the target value for each counter
//         const target = parseInt(counter.dataset.count);
//         targetValues.push(target);
//         counter.innerText = '0'; // Set initial text to '0'
//     });

//     window.addEventListener("scroll", () => {
//         const scrollPosition = window.scrollY;

//         if (!activated) {
//             counters.forEach((counter, index) => {
//                 const target = targetValues[index];
//                 const step = Math.ceil(target / 100); // Adjust the step value as needed

//                 if (parseInt(counter.innerText) < target) {
//                     const newValue = Math.min(parseInt(counter.innerText) + step, target); // Increment the value towards the target
//                     counter.innerText = newValue;
//                 }
//             });
//             activated = true;
//         }
//     });
// });




// document.addEventListener("DOMContentLoaded", function() {
//   const counters = document.querySelectorAll(".counters .number");
//   const targetValues = [4]; // Array to store the target values for each counter
//   let activated = false;

//   counters.forEach(counter => {
//       // Store the target value for each counter
//       const target = parseInt(counter.getAttribute('data-count'));
//       targetValues.push(target);
//       counter.innerText = '0'; // Set initial text to '0'
//   });

//   window.addEventListener("scroll", () => {
//       const scrollPosition = window.scrollY;

//       if (!activated) {
//           counters.forEach((counter, index) => {
//               const target = targetValues[index];
//               const step = Math.ceil(target / 100); // Adjust the step value as needed

//               if (parseInt(counter.innerText) < target) {
//                   const newValue = Math.min(parseInt(counter.innerText) + step, target); // Increment the value towards the target
//                   counter.innerText = newValue;
//               }
//           });
//           activated = true;
//       }
//   });
// });



// document.addEventListener("DOMContentLoaded", function() {
//   const counters = document.querySelectorAll(".counters .number");

//   window.addEventListener("scroll", () => {
//       const scrollPosition = window.scrollY;

//       counters.forEach(counter => {
//           const target = parseInt(counter.getAttribute('data-count'));
//           const start = parseInt(counter.innerText);

//           // Calculate the target value based on scroll position or any other condition
//           const targetValue = target * (scrollPosition / 1000); // Adjust the multiplier as needed

//           // Update the counter with the target value
//           counter.innerText = Math.floor(targetValue); // Optionally, use Math.round() for rounded values
//       });
//   });
// });



// for number count on scroll
// document.querySelectorAll('.number').forEach(element => {
//     const target = parseInt(element.getAttribute('data-number'));
//     const animationDuration = 1000; // in milliseconds
//     const steps = 25; // number of steps for animation
  
//     let currentNumber = 0;
//     const step = target / steps; // Calculate step based on the target number
//     const interval = animationDuration / steps;
  
//     const timer = setInterval(() => {
//       currentNumber += step;
//       if (currentNumber >= target) {
//         currentNumber = target;
//         clearInterval(timer);
//       }
//       element.innerText = Math.floor(currentNumber);
//     }, interval);
//   });
  