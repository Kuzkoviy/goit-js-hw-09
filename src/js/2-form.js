const feedbackForm = document.querySelector('.feedback-form');
const feedbackFormEmail = feedbackForm.elements.email,
    feedbackFormMessage = feedbackForm.elements.message;

const localStorageKey = 'feedback-form-state';

let formData = {
    email: '',
    message: '',
};


setFromLocal();


feedbackForm.addEventListener('input', () => {
    formData = {
        email: feedbackFormEmail.value,
        message: feedbackFormMessage.value,
    };

    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

feedbackForm.addEventListener('submit', event => {
    event.preventDefault();

    if((feedbackFormEmail.value.trim() !==  null || feedbackFormMessage.value.trim() !== null)) {
        formData = {
            email: '',
            message: '',
        };
        console.log(JSON.parse(localStorage.getItem(localStorageKey)));
        localStorage.removeItem(localStorageKey);
        feedbackForm.reset();
        }
});

function setFromLocal() {
    const savedFormData = localStorage.getItem(localStorageKey);
    if(!savedFormData) return;

    formData = JSON.parse(savedFormData);
    feedbackFormEmail.value = formData.email;
    feedbackFormMessage.value = formData.message;
}

