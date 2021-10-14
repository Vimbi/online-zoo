//------------------------- Burger menu --------------------------
const burgerButton = document.querySelector('.burger_menu');
const burgerButtonLine = document.querySelector('.burger_menu_line');
const navMenu = document.querySelector('.nav_wrapper');
const navMenuWrapper = document.querySelector('.nav-social_wrapper');

burgerButton.addEventListener('click', event => {
  burgerButtonLine.classList.toggle('burger_menu_line_active');
  navMenu.classList.toggle('nav_wrapper_open');
});

//---------------------------- Pop up ----------------------------

const donateNowButton = document.querySelector('.donate_now-button');
const footerBtnDonate = document.querySelector('.footer__donation-button');
const popup = document.querySelector('.popup');
const popupBtnClose = document.querySelector('.popup__button_close');
const coverDiv = document.querySelector('.cover-div');
const donationAmountBtns = popup.querySelectorAll('.popup__button');
const donationForm = document.querySelector('.donation-form');
const donationInput = document.querySelector('.quick-donation__input');
const quickDonateBtn = document.querySelector('.quick-donation__button');
const donationFormInputCost = document.querySelector('.donation-form__input-cost');
const divFormBtns = document.querySelector('.donation-form__buttons');
const donationFormBtns = divFormBtns.querySelectorAll('.donation-form__button');
const donationFormOtherBtn = document.querySelector('.donation-form__other-button');
const inputCvv = document.querySelector('.donation-form__input-cvv');
const inputCard = document.querySelector('.donation-form__input-card');
const selectAnimal = document.querySelector('.donation-form__select');

donateNowButton.addEventListener('click', () => {
  popup.classList.remove('display-none');
  coverDiv.classList.remove('display-none');
});

footerBtnDonate.addEventListener('click', () => {
  popup.classList.remove('display-none');
  coverDiv.classList.remove('display-none');
});

popupBtnClose.addEventListener('click', () => {
  popup.classList.add('display-none');
  coverDiv.classList.add('display-none');
});

donationAmountBtns.forEach(btn => {
  btn.addEventListener('click', (event) => {
    popup.classList.add('display-none');
    donationForm.classList.remove('display-none');
    donationFormBtns.forEach(btn => {
      if (btn.innerHTML === event.target.innerHTML) {
        btn.classList.add('donation-form__button_active');
        donationFormInputCost.value = event.target.innerHTML.slice(1);
        if(event.target.innerHTML === 'Other amount') {
          donationFormInputCost.focus();
        }
      }
    })
  });
});

coverDiv.addEventListener('click', () => {
  popup.classList.add('display-none');
  coverDiv.classList.add('display-none');
  donationForm.classList.add('display-none');
  step1.style.display = 'flex';
  step2.style.display = 'none';
  step3.style.display = 'none';
  donationFormBtns.forEach(btn => {
    btn.classList.remove('donation-form__button_active');
  });
  donationFormInputCost.value = '';
  btnComplete.disabled = true;
  btnComplete.classList.remove('donation-form__button-complete__active');
  document.querySelector('.donation-form__select-animals').options[0].selected = true;
  inputName.value = '';
  inputEmail.value = '';
  cardNumber.value = '';
  cvvNumber.value = '';
  inputMonth.options[0].selected = true;
  inputYear.options[0].selected = true;
});

const step1 = document.querySelector('.donation-form__step1');
const step2 = document.querySelector('.donation-form__step2');
const step3 = document.querySelector('.donation-form__step3');
const next1 = step1.querySelector('.donation-form_next-button');
const next2 = step2.querySelector('.donation-form_next-button');
const btnComplete = step3.querySelector('.donation-form__button-complete');
const btnBack2 = step2.querySelector('.donation-form__button-back');
const btnBack3 = step3.querySelector('.donation-form__button-back');
const inputName = document.querySelector('.donation-form__input-name');
const inputEmail = document.querySelector('.donation-form__input-email');
const cardNumber = document.querySelector('.donation-form__card-input');
const cvvNumber = document.querySelector('.donation-form__cvv-input');
const inputMonth = document.querySelector('.donation-form__select-month');
const inputYear = document.querySelector('.donation-form__content-year');

next1.addEventListener('click', () => {
  if (!donationFormInputCost.value || !selectAnimal.value) {
    alert('Вы не заполнили обязательные поля');
    return false;
  }
  step1.style.display = 'none';
  step2.style.display = 'flex';
});

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

next2.addEventListener('click', () => {
  if (!inputName.value || !inputEmail.value || !validateEmail(inputEmail.value)) {
    alert('Вы не заполнили обязательные поля');
    return false;
  }
  step2.style.display = 'none';
  step3.style.display = 'flex';
});

 btnComplete.addEventListener('click', () => {
  // if (!cardNumber.value || !cvvNumber.value || !inputMonth.value || !inputYear.value) {
  //   console.log(inputCvv.value, inputCard.value);
  //   alert('Вы не заполнили обязательные поля');
  //   return false;
  // }
  // step3.style.display = 'none';
  // step1.style.display = 'flex';
  // donationForm.classList.add('display-none');
});

cardNumber.addEventListener('input', () => {
  if (cvvNumber.value && inputMonth.value && inputYear.value) {
    btnComplete.disabled = false;
    btnComplete.classList.add('donation-form__button-complete__active');
  }
});

cvvNumber.addEventListener('input', () => {
  if (cardNumber.value && inputMonth.value && inputYear.value) {
    btnComplete.disabled = false;
    btnComplete.classList.add('donation-form__button-complete__active');
  }
});

inputMonth.addEventListener('change', () => {
  if (cardNumber.value && cvvNumber.value && inputYear.value) {
    btnComplete.disabled = false;
    btnComplete.classList.add('donation-form__button-complete__active');
  }
});

inputYear.addEventListener('change', () => {
  if (cardNumber.value && cvvNumber.value && inputMonth.value) {
    btnComplete.disabled = false;
    btnComplete.classList.add('donation-form__button-complete__active');
  }
});


btnBack2.addEventListener('click', () => {
  step1.style.display = 'flex';
  step2.style.display = 'none';
});

btnBack3.addEventListener('click', () => {
  step2.style.display = 'flex';
  step3.style.display = 'none';
});

donationInput.addEventListener('input', event => {
  if (event.target.value.length > 4) {
    event.target.value = event.target.value.slice(0, 4);
  }
});

donationFormInputCost.addEventListener('input', event => {
  if (event.target.value.length > 4) {
    event.target.value = event.target.value.slice(0, 4);
  }
});

inputCvv.addEventListener('input', event => {
  if (event.target.value.length > 3) {
    event.target.value = event.target.value.slice(0, 3);
  }
});

inputCard.addEventListener('input', event => {
  if (event.target.value.length > 16) {
    event.target.value = event.target.value.slice(0, 16);
  }
});

quickDonateBtn.addEventListener('click', () => {
  donationForm.classList.remove('display-none');
  coverDiv.classList.remove('display-none');
  switch(donationInput.value) {
    case '':
    case '10':
      donationFormBtns[0].classList.add('donation-form__button_active');
      donationFormInputCost.value = '10';
      break;
    case '20':
      donationFormBtns[1].classList.add('donation-form__button_active');
      donationFormInputCost.value = '20';
      break;
    case '30':
      donationFormBtns[2].classList.add('donation-form__button_active');
      donationFormInputCost.value = '30';
      break;
    case '50':
      donationFormBtns[3].classList.add('donation-form__button_active');
      donationFormInputCost.value = '50';
      break;
    case '80':
      donationFormBtns[4].classList.add('donation-form__button_active');
      donationFormInputCost.value = '80';
      break;
    case '100':
      donationFormBtns[5].classList.add('donation-form__button_active');
      donationFormInputCost.value = '100';
      break;
    default:
      donationFormInputCost.value = donationInput.value;
      donationFormOtherBtn.classList.add('donation-form__button_active');
      break;
  }
});

donationFormBtns.forEach(btn => {
  btn.addEventListener('click', (event) => {
    if(!event.target.classList.contains('donation-form__button_active')) {
      donationFormBtns.forEach(x => x.classList.remove('donation-form__button_active'));
      event.target.classList.add('donation-form__button_active');
      donationFormInputCost.value = event.target.innerHTML.slice(1);
    };
  });
});

donationFormInputCost.addEventListener('input', () => {
  switch(donationFormInputCost.value) {
    case '10':
      donationFormBtns.forEach(x => x.classList.remove('donation-form__button_active'));
      donationFormBtns[0].classList.add('donation-form__button_active');
      break;
    case '20':
      donationFormBtns.forEach(x => x.classList.remove('donation-form__button_active'));
      donationFormBtns[1].classList.add('donation-form__button_active');
      break;
    case '30':
      donationFormBtns.forEach(x => x.classList.remove('donation-form__button_active'));
      donationFormBtns[2].classList.add('donation-form__button_active');
      break;
    case '50':
      donationFormBtns.forEach(x => x.classList.remove('donation-form__button_active'));
      donationFormBtns[3].classList.add('donation-form__button_active');
      break;
    case '80':
      donationFormBtns.forEach(x => x.classList.remove('donation-form__button_active'));
      donationFormBtns[4].classList.add('donation-form__button_active');
      break;
    case '100':
      donationFormBtns.forEach(x => x.classList.remove('donation-form__button_active'));
      donationFormBtns[5].classList.add('donation-form__button_active');
      break;
    default:
      donationFormBtns.forEach(x => x.classList.remove('donation-form__button_active'));
      donationFormOtherBtn.classList.add('donation-form__button_active');
      break;
  }
})
//------------------------ Pets slider---------------------------------

const sliderCards = document.querySelectorAll('.pets_card');
const petsSliderLeftBtn = document.querySelector('.slider_button__left');
const petsSliderRightBtn = document.querySelector('.slider_button__right');

for (let i = 0; i < sliderCards.length; i++) {
  sliderCards[i].style.order = i + 1;
}

petsSliderRightBtn.addEventListener('click', () => {
  sliderCards.forEach(card => {
    card.style.order = Number(card.style.order) - 2;
    if(card.style.order === '-1') {
      card.style.order = 15;
    } else if (card.style.order === '0') {
      card.style.order = 16;
    }
  });
});

petsSliderLeftBtn.addEventListener('click', () => {
  sliderCards.forEach(card => {
    card.style.order = Number(card.style.order) + 2;
    if(card.style.order === '17') {
      card.style.order = 1;
    } else if (card.style.order === '18') {
      card.style.order = 2;
    }
  });
});

//---------------------------- Comments slider---------------------------------

const commentsCards = document.querySelectorAll('.comment');
const feedbackBtnLeft = document.querySelector('.feedback_button__left');
const feedbackBtnRight = document.querySelector('.feedback_button__right');

for (let i = 0; i < commentsCards.length; i++) {
  commentsCards[i].style.order = i + 1;
}

feedbackBtnRight.addEventListener('click', () => {
  delayAutoSliding();
  commentsCards.forEach(card => {
    card.style.order = Number(card.style.order) - 2;
    if(card.style.order === '-1') {
      card.style.order = 7;
    } else if (card.style.order === '0') {
      card.style.order = 8;
    }
  });
});

feedbackBtnLeft.addEventListener('click', () => {
  delayAutoSliding();
  commentsCards.forEach(card => {
    card.style.order = Number(card.style.order) + 2;
    if(card.style.order === '9') {
      card.style.order = 1;
    } else if (card.style.order === '10') {
      card.style.order = 2;
    }
  });
});

const slideFuncRight = () => {
  commentsCards.forEach(card => {
    card.style.order = Number(card.style.order) - 2;
    if(card.style.order === '-1') {
      card.style.order = 7;
    } else if (card.style.order === '0') {
      card.style.order = 8;
    }
  });
}

let autoSlideInterval = setInterval(slideFuncRight, 15000);
let autoSlideTimeout = null;

const delayAutoSliding = () => {
  clearTimeout(autoSlideTimeout);
  clearInterval(autoSlideInterval);
  autoSlideInterval = null;

  autoSlideTimeout = setTimeout(() => {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(slideFuncRight, 15000);
  }, 45000);
}

commentsCards.forEach(card => card.addEventListener('click', delayAutoSliding));