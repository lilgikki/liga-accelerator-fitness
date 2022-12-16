/* eslint-disable new-cap */
import IMask from 'imask';

const feedbackForm = document.getElementById('feedback-form');
const feedbacklTel = document.getElementById('tel');
const feedbackName = document.getElementById('name');

const maskOptions = {
  mask: '+{7}(000)000-00-00',
};

const getMask = () => {
  if (feedbacklTel) {
    IMask(feedbacklTel, maskOptions);
  }
};

const submitForm = (name, tel) => {
  localStorage.setItem('username', name);
  localStorage.setItem('phone', tel);
};

const submitFormBooking = () => {
  if (feedbackForm) {
    feedbackForm.addEventListener('submit', (evt) => {
      if (!feedbackName.value || !feedbacklTel.value) {
        evt.preventDefault();
      } else {
        evt.preventDefault();
        submitForm(feedbackName.value, feedbacklTel.value);
        feedbackForm.reset();
      }
    }
    );
  }
};

export {getMask, submitFormBooking};
