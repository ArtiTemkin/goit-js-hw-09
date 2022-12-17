import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';


const btnStartRef = document.querySelector('[data-start]');
btnStartRef.setAttribute('disabled', false);

const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');
// console.log(days);
let pickedDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    pickedDate = selectedDates[0].getTime();
    console.log(pickedDate);
    if (pickedDate < Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      btnStartRef.setAttribute('disabled', true);
    } else {
      btnStartRef.toggleAttribute('disabled');
    }
    btnStartRef.addEventListener('click', onBtnStart);
  },
};

flatpickr('#datetime-picker', options);

function onBtnStart() {
  // event.preventDefault();
  btnStartRef.setAttribute('disabled', false);
  let intervalId = setInterval(() => {
    const delta = pickedDate - Date.now();

    console.log(delta);

    if (delta < 1000) {
      clearInterval(intervalId);
    }

      const data = convertMs(delta);
      
      
    // console.log(data);
    days.textContent = addLeadingZero(data.days);
    hours.textContent = addLeadingZero(data.hours);
    minutes.textContent = addLeadingZero(data.minutes);
    seconds.textContent = addLeadingZero(data.seconds);
      
    
  }, 1000);
}

function convertMs(delta) {
  const days = Math.floor(delta / 1000 / 60 / 60 / 24);
  const hours = Math.floor(delta / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(delta / 1000 / 60) % 60;
  const seconds = Math.floor(delta / 1000) % 60;
  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}




// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";
// import Notiflix from 'notiflix';

// const selectedDates = document.querySelector('#datetime-picker')
// const btnStart = document.querySelector('[data-start]')


// const days = document.querySelector('[data-days]');
// const hours = document.querySelector('[data-hours]');
// const minutes = document.querySelector('[data-minutes]');
// const seconds = document.querySelector('[data-seconds]');

// btnStart.addEventListener('click', onBtnStart)

// let pickedDate = null
// let deltaTime = null

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     console.log(selectedDates[0]);
//     pickedDate = selectedDates[0].getTime();
//     console.log(pickedDate)
//     deltaTime = pickedDate - Date.now();
//     if (deltaTime <= 0) {
//         Notiflix.Notify.failure('Please choose a date in the future');
//         btnStart.disabled = true;
//         return;
//     } else {
//         btnStart.disabled = false;
//     }
//   },
// };


// function onBtnStart() {
    
    
//     let interval = setInterval(() => {
        
//         if (deltaTime < 1000) {
//                clearInterval(interval) 
//             }
//             let data = convertMs(deltaTime);
//                 days.textContent = pad(data.days);
//                 hours.textContent = pad(data.hours);
//                 minutes.textContent = pad(data.minutes);
//                 seconds.textContent = pad(data.seconds);
//             console.log(deltaTime)
//             console.log(`${data.days}:${data.hours}:${data.minutes}:${data.seconds}`)
//     }, 1000)
    
// }


// flatpickr(selectedDates, options);

// function pad(value) {
//     return String(value).padStart(2,'0')
// }

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = pad(Math.floor(ms / day));
//   // Remaining hours
//   const hours = pad(Math.floor((ms % day) / hour));
//   // Remaining minutes
//   const minutes = pad(Math.floor(((ms % day) % hour) / minute));
//   // Remaining seconds
//   const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

//   return { days, hours, minutes, seconds };
// }

// // console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// // console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// // console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}