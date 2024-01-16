const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
let localStorageObj = {
  email: '',
  message: '',
};

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
    e.target.elements.email.value !== '' &&
    e.target.elements.message.value !== ''
  ) {
    console.log(localStorage.getItem(localStorageKey));
    localStorage.removeItem(localStorageKey);
    form.reset();
  } else {
    alert('Не всі поля заповнені');
  }
});
