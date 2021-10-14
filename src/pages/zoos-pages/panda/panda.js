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

//----------------------- Side panel------------------------------

const btnPanelOpen = document.querySelector('.panel_right-arrows');
const sidePanel = document.querySelector('.side_panel');
const sidePanelText = document.querySelectorAll('.animal_section__text');
const liveIconWrapper = document.querySelector('.live_icon-wrapper');
const sidePanelAnimals = document.querySelectorAll('.animal_section');
const sidePanelDownBtn = document.querySelector('.side_panel__bottom_button');
const iconCircle = document.querySelectorAll('.icon_circle');
const animalIcon = document.querySelectorAll('.animal_icon');
const iconCircleActive = document.querySelector('.icon_circle_active');
const animalIconActive = document.querySelector('.animal_icon_active')

btnPanelOpen.addEventListener('click', () => {
  sidePanel.classList.toggle('side_panel__open');
  btnPanelOpen.classList.toggle('panel_right-arrows_scale');
  sidePanelText.forEach(text => {
    text.classList.toggle('display-none');
  });
  liveIconWrapper.classList.toggle('live_icon-wrapper');
  liveIconWrapper.classList.toggle('live_icon-wrapper__open');
  iconCircle.forEach(x => {
    x.classList.toggle('icon_circle__open');
  });
  animalIcon.forEach(x => {
    x.classList.toggle('animal_icon__open');
  });
  iconCircleActive.classList.toggle('icon_circle_active__open');
  animalIconActive.classList.toggle('animal_icon_active__open');
});

for (let i = 0; i < sidePanelAnimals.length; i++) {
  sidePanelAnimals[i].style.order = i;
}

sidePanelDownBtn.addEventListener('click', () => {
  sidePanelAnimals.forEach(animal => {
    animal.style.order = Number(animal.style.order) - 1;
    if (animal.style.order === '-1') {
      animal.style.order = 7;
    }
  });
});

//--------------------------Live cam carousel-----------------------
const mainCam = document.querySelector('.video_wrapper_iframe');
const otherCams = document.querySelectorAll('.cam_slider-wrapper');
const camsSliderBtnRight = document.querySelector('.slider_button-right');
const camsSliderBtnLeft = document.querySelector('.slider_button-left');

otherCams.forEach(cam => {
  cam.addEventListener('click', event => {
    let x = mainCam.src;
    mainCam.src = event.target.previousElementSibling.src;
    event.target.previousElementSibling.src = x;
  })
});

for (let i = 0; i < otherCams.length; i++) {
  otherCams[i].style.order = i;
}

camsSliderBtnRight.addEventListener('click', () => {
  otherCams.forEach(cam => {
    cam.style.order = Number(cam.style.order) - 1;
    if (cam.style.order === '-1') {
      cam.style.order = 6;
    }
  });
});

camsSliderBtnLeft.addEventListener('click', () => {
  otherCams.forEach(cam => {
    cam.style.order = Number(cam.style.order) + 1;
    if (cam.style.order === '7') {
      cam.style.order = 0;
    }
  });
});