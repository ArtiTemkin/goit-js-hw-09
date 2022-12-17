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

  const promise = new Promise((success, failure) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        success({ position, delay })
      } else {
        failure({ position, delay })
      }
    }, delay)
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
  })
  .finally(() => {
           let intervalPosition = 2;
           let startDelay = Number(delayInput.value)
           let intervalDelay = Number(stepInput.value) + startDelay
           let intervalID = setInterval(() => {
              const shouldResolve = Math.random() > 0.3;
              if (shouldResolve) {
                resolve({position: intervalPosition , delay:intervalDelay})
              } else {
                reject({position:intervalPosition, delay:intervalDelay })
              }
              intervalDelay = intervalDelay + Number(stepInput.value)
              if (intervalPosition++ >= amountInput.value) {
                window.clearInterval(intervalID)
              }
            }, Number(stepInput.value))
        })
}

function resolve(timer) {
  Notiflix.Notify.success(`✅ Fulfilled promise ${timer.position} in ${timer.delay}ms`);
}

function reject(timer) {
  Notiflix.Notify.failure(`❌ Rejected promise ${timer.position} in ${timer.delay}ms`);
}
