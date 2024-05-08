const feedbackForm = document.querySelector('.feedback-form');
const feedbackFormEmail = feedbackForm.elements.email,
    feedbackFormMessage = feedbackForm.elements.message;

const localStorageKey = 'feedback-form-state';
const savedFormData = localStorage.getItem(localStorageKey);


if(savedFormData) {
    const valueFormData = JSON.parse(savedFormData);
    feedbackForm.email = valueFormData.email.trim();
    feedbackForm.message = valueFormData.message.trim();
};

feedbackForm.addEventListener('input', () => {
    const formData = {
        email: feedbackForm.email,
        message: feedbackForm.message,

    };

    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

feedbackForm.addEventListener('sumbit', event => {
    event.preventDefault();

    if((feedbackFormEmail.value.trim() && feedbackFormMessage.value.trim())) {
    console.log(JSON.parse(localStorage.getItem(localStorageKey)));
    localStorage.removeItem(localStorageKey);
    feedbackForm.reset();
    }
});



