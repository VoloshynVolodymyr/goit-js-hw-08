import throttle from 'lodash.throttle';
const FEED_BACK_FORM_STATE_KEY = "feedback-form-state";
const formEl = document.querySelector(".feedback-form");
const emailEl = document.querySelector("input[type='email']");
const messageEl = document.querySelector("textarea[name='message']");

formEl.addEventListener("input", throttle(setToLocalStorage, 500));
formEl.addEventListener("submit", handleSubmit);

formInitialization()
let storageObject = {};
function setToLocalStorage (event) {

    storageObject.email = emailEl.value;
storageObject.message = messageEl.value;
localStorage.setItem(FEED_BACK_FORM_STATE_KEY, JSON.stringify(storageObject));
}

function formInitialization() {
    let storageObject = {};
    storageObject = JSON.parse(localStorage.getItem(FEED_BACK_FORM_STATE_KEY)) || "";
    emailEl.value = storageObject.email || "";
    messageEl.value = storageObject.message || "";
}

function handleSubmit (event) {
    event.preventDefault();
    let storageObject = {};
    storageObject = JSON.parse(localStorage.getItem(FEED_BACK_FORM_STATE_KEY));
    if (storageObject) {
    console.log(storageObject.email, storageObject.message);
    localStorage.removeItem(FEED_BACK_FORM_STATE_KEY);
    emailEl.value = "";
    messageEl.value = "";
    }
}