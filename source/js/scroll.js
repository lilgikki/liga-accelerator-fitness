const buttonBuy = document.getElementById('buy-sub');
const blockSubs = document.getElementById('subs');

const scroll = (block) => {
  block.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

const scrollToSubs = () => {
  if (buttonBuy && blockSubs) {
    buttonBuy.addEventListener('click', (e) => {
      e.preventDefault();
      scroll(blockSubs);
    });
  }
};

export {scrollToSubs};
