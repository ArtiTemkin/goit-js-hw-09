import Notiflix from 'notiflix';

const form = document.querySelector('form');

form.addEventListener('submit', onSubmit);

function createPromise(position, delay) {
  return new Promise((success, failure) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        success({ position, delay });
      } else {
        failure({ position, delay });
      }
    }, delay);
  });
}

function onSubmit(event) {
  event.preventDefault();

  const delayValue = Number(form.elements['delay'].value);
  const stepValue = Number(form.elements['step'].value);
  const amountValue = Number(form.elements['amount'].value);

  let intervalDelay = delayValue;

  for (let i = 1; i <= amountValue; i += 1) {
    createPromise(i, intervalDelay)
      .then(({ position, delay }) => {
        resolve({ position, delay });
      })
      .catch(({ position, delay }) => {
        reject({ position, delay });
      });

    intervalDelay += stepValue;
  }
}

function resolve(timer) {
  Notiflix.Notify.success(
    `✅ Fulfilled promise ${timer.position} in ${timer.delay}ms`
  );
}

function reject(timer) {
  Notiflix.Notify.failure(
    `❌ Rejected promise ${timer.position} in ${timer.delay}ms`
  );
}
