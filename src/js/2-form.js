const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
let localStorageObj = {};

const localSettings = JSON.parse(localStorage.getItem(localStorageKey));
if (localSettings !== null) {
  form.elements.email.value = localSettings.email;
  form.elements.message.value = localSettings.message;
}

form.addEventListener('input', e => {
  localStorageObj.email = e.currentTarget.elements.email.value.trim();
  localStorageObj.message = e.currentTarget.elements.message.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(localStorageObj));
});

form.addEventListener('submit', e => {
  e.preventDefault();
  if (
    e.target.elements.email.value.trim() !== '' &&
    e.target.elements.message.value.trim() !== ''
  ) {
    console.log(localStorageObj);
    localStorage.removeItem(localStorageKey);
    form.reset();
  } else {
    alert('Не всі поля заповнені');
  }
});
