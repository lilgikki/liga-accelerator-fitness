const buttonsSubs = [document.getElementById('subs-button-1'), document.getElementById('subs-button-6'), document.getElementById('subs-button-12')];
const listSubs = [document.getElementById('subs-list-1'), document.getElementById('subs-list-6'), document.getElementById('subs-list-12')];

const changeTab = () => {
  if (buttonsSubs[0] && listSubs[0]) {
    buttonsSubs[0].addEventListener('click', () => {
      buttonsSubs[0].classList.add('subs__button--active');
      listSubs[0].classList.add('subs__list--active');

      if (buttonsSubs[1].classList.contains('subs__button--active')) {
        buttonsSubs[1].classList.remove('subs__button--active');
        listSubs[1].classList.remove('subs__list--active');
      }

      if (buttonsSubs[2].classList.contains('subs__button--active')) {
        buttonsSubs[2].classList.remove('subs__button--active');
        listSubs[2].classList.remove('subs__list--active');
      }
    });
  }

  if (buttonsSubs[1] && listSubs[1]) {
    buttonsSubs[1].addEventListener('click', () => {
      buttonsSubs[1].classList.add('subs__button--active');
      listSubs[1].classList.add('subs__list--active');

      if (buttonsSubs[0].classList.contains('subs__button--active')) {
        buttonsSubs[0].classList.remove('subs__button--active');
        listSubs[0].classList.remove('subs__list--active');
      }

      if (buttonsSubs[2].classList.contains('subs__button--active')) {
        buttonsSubs[2].classList.remove('subs__button--active');
        listSubs[2].classList.remove('subs__list--active');
      }
    });
  }

  if (buttonsSubs[2] && listSubs[2]) {
    buttonsSubs[2].addEventListener('click', () => {
      buttonsSubs[2].classList.add('subs__button--active');
      listSubs[2].classList.add('subs__list--active');

      if (buttonsSubs[0].classList.contains('subs__button--active')) {
        buttonsSubs[0].classList.remove('subs__button--active');
        listSubs[0].classList.remove('subs__list--active');
      }

      if (buttonsSubs[1].classList.contains('subs__button--active')) {
        buttonsSubs[1].classList.remove('subs__button--active');
        listSubs[1].classList.remove('subs__list--active');
      }
    });
  }
};

export {changeTab};
