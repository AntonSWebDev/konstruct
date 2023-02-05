import * as isWebp from './modules/isWebp.js';
import * as ibg from './modules/ibg.js';
import * as anchors from './modules/anchors.js';
import * as useDynamicAdapt from './modules/dynamicAdapt.js';

// import jBox from 'jbox';

isWebp.isWebp(); // Проверка поддержки webp и добавление класса _webp или _no-webp для HTML
ibg.ibg(); // Фоновое изображение
anchors.anchors(); // Плавный скролл
useDynamicAdapt.useDynamicAdapt(); // Динамический адаптив

// Menu

const menuBtn = document.querySelector('.burger-btn');
const menuBtnClose = document.querySelector('.burger-btn--close');
const menu = document.querySelector('.nav__list');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');
const links = document.querySelectorAll('.nav__link');

menuBtn.addEventListener('click', function () {
  body.classList.add('lock');
  menu.classList.add('active');
  menuBtn.classList.add('active');
  overlay.classList.add('active');
});

overlay.addEventListener('click', function () {
  body.classList.remove('lock');
  menu.classList.remove('active');
  menuBtn.classList.remove('active');
  overlay.classList.remove('active');
});

menuBtnClose.addEventListener('click', function () {
  body.classList.remove('lock');
  menu.classList.remove('active');
  menuBtn.classList.remove('active');
  overlay.classList.remove('active');
});

links.forEach(function (i) {
  i.addEventListener('click', function () {
    body.classList.remove('lock');
    menu.classList.remove('active');
    menuBtn.classList.remove('active');
    overlay.classList.remove('active');
  });
});


const allModals = document.querySelectorAll('[data-modal]');
const modalButtons = document.querySelectorAll('[data-modal-button]');
const modalCloseBtn = document.querySelectorAll('[data-modal-close]');

modalButtons.forEach(function (i) {
  i.addEventListener("click", function (e) {
    e.preventDefault();
    body.classList.add('lock')
    const modalId = this.dataset.modalButton;
    const modal = document.querySelector('#' + modalId);
    modal.classList.remove('visibility-hidden');
    overlay.classList.add('active');
    const modalWindow = modal.querySelector('.modal__window');
    modalWindow.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  });
});

modalCloseBtn.forEach(function (i) {
  i.addEventListener("click", function (e) {
    body.classList.remove('lock')
    e.preventDefault();
    const modal = this.closest('[data-modal]');
    modal.classList.add('visibility-hidden');
    overlay.classList.remove('active');
  });
});

overlay.addEventListener("click", function () {
  body.classList.remove('lock')
  allModals.forEach(function (i) {
    i.classList.add('visibility-hidden');
  })
});