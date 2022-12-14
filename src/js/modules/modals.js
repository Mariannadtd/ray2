const modals = () => {
  function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
    const trigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          close = document.querySelector(closeSelector),
          windows = document.querySelectorAll('[data-modal]'),
          scroll = calcScroll();

    trigger.forEach(item => {
      item.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }

        windows.forEach(item => {
          item.style.display = 'none';
        });

        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${scroll}px`;
      });
    });

    close.addEventListener('click', () => {
      windows.forEach(item => {
        item.style.display = 'none';
      });

      modal.style.display = "none";
      document.body.style.overflow = "";
      document.body.style.marginRight = `0px`;
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal && closeClickOverlay) {
        windows.forEach(item => {
            item.style.display = 'none';
        });

        modal.style.display = "none";
        document.body.style.overflow = ""; 
        document.body.style.marginRight = `0px`;
      }
    });
  }

  function calcScroll() {
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
  }

  bindModal('.popup-book__btn', '.popup-book', '.popup-book .popup_close');
  bindModal('.popup-connect__btn', '.popup-connect', '.popup-connect .popup_close');
};

export default modals;