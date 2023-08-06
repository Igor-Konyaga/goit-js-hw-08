import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

const KEY_STORAGE = 'feedback-form-state';

const dataForm = {};

formEl.addEventListener('input', throttle(handleFormInput, 500));

const currentStorage = JSON.parse(localStorage.getItem(KEY_STORAGE));


function handleFormInput(e) {
	dataForm[e.target.name] = e.target.value.trim();
	localStorage.setItem(KEY_STORAGE, JSON.stringify(dataForm));

};


formEl.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(e) {
	e.preventDefault();
	
	if (currentStorage) {
	  formEl.email.value = currentStorage.email || '';
	  formEl.message.value = currentStorage.message || '';
	};

  const emailValue = e.target.elements.email.value;
  const messageValue = e.target.elements.message.value;

  if (!emailValue || !messageValue) {
	 alert('Не усі поля заповнені!!!')
  }

  console.log(currentStorage);
  formEl.reset();
  localStorage.removeItem(KEY_STORAGE);
}
