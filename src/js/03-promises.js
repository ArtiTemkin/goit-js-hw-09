// Достучаться до полей ввода
// Повесить слушателся на Сабмит
// 
import Notiflix from 'notiflix';

const form = document.querySelector('form')
const delayInput = form.querySelector('input[name="delay"]')
const stepInput = document.querySelector('input[name="step"]');
const amountInput = document.querySelector('input[name="amount"]')



form.addEventListener('submit', onSubmit)


function createPromise(a, delay) {
  let position = a

  const promise = new Promise((succes, failure) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        succes({ position, delay })
        
      } else {
        failure({ position, delay })
      }
    }, delay).then(() => {
         let intervalID = setInterval(() => {
      console.log(
        'kjh'
      )
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay })
      } else {
        reject({ position, delay })
      }
      if (position++ >= amountInput.value) {
        window.clearInterval(intervalID)
      }
    }, Number(stepInput.value))
    })
   });

  return promise

}  

function onSubmit(event) {
  event.preventDefault()
  createPromise(1, delayInput.value)
    .then(({position, delay}) => {
      resolve({ position, delay })
  })
  .catch(({ position, delay }) => {
    reject({ position, delay })
  });
}


function createFirstDelay(success) {
  console.log(delayInput.value)
  

  promise.then(()=>success)
}

function createIterableNotification(position,delay) {
  console.log("jbjbj")
  
    let timerStartValue = Number(delayInput.value);

    let intervalID = setInterval(() => {
      notify(position++, timerStartValue += Number(delay))
      if (position === Number(amountInput.value))
        window.clearInterval(intervalID)
    })
}

function notify(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  shouldResolve ? resolve (position,delay) : reject (position,delay)
}

function resolve(timer) {
  Notiflix.Notify.success(`✅ Fulfilled promise ${timer.position} in ${timer.delay}ms`);
}

function reject(timer) {
  Notiflix.Notify.failure(`❌ Rejected promise ${timer.position} in ${timer.delay}ms`);
}
