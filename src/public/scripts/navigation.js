"use strict";

window.addEventListener("load", function() {

  // **** Open/close the side menu ****

  var modal = document.getElementById('modal');
  var openModal = document.getElementById('openModal');
  var closeModal = document.getElementById('closeModal');

  openModal.addEventListener('click', function() {
    modal.classList.toggle('active', true);
    closeModal.classList.toggle('visible', true);
    closeModal.classList.toggle('not-visible', false);
    document.body.classList.toggle('no-scroll', true);
  });
  closeModal.addEventListener('click', function() {
    modal.classList.toggle('active', false);
    closeModal.classList.toggle('visible', false);
    closeModal.classList.toggle('not-visible', true);
    document.body.classList.toggle('no-scroll', false);
  });

  // **** Scroll to sections (Desktop) ****

  var productosButton = document.getElementById('productosButton');
  var productosSection = document.getElementById('productosSection');
  productosButton.addEventListener('click', function() {
    productosSection.scrollIntoView({behavior: 'smooth'});
  });

  var sucursalesButton = document.getElementById('sucursalesButton');
  var sucursalesSection = document.getElementById('sucursalesSection');
  sucursalesButton.addEventListener('click', function() {
    sucursalesSection.scrollIntoView({behavior: 'smooth'});
  });

  var contactoButton = document.getElementById('contactoButton');
  var contactoSection = document.getElementById('contactoSection');
  contactoButton.addEventListener('click', function() {
    contactoSection.scrollIntoView({behavior: 'smooth'});
  });

  // **** Scroll to sections (Mobile/Tablet) ****

  var productosButton2 = document.getElementById('productosButton2');
  var productosSection = document.getElementById('productosSection');
  productosButton2.addEventListener('click', function() {
    productosSection.scrollIntoView({behavior: 'smooth'});
    modal.classList.toggle('active', false);
    closeModal.classList.toggle('visible', false);
    closeModal.classList.toggle('not-visible', true);
    document.body.classList.toggle('no-scroll', false);
  });

  var sucursalesButton2 = document.getElementById('sucursalesButton2');
  var sucursalesSection = document.getElementById('sucursalesSection');
  sucursalesButton2.addEventListener('click', function() {
    sucursalesSection.scrollIntoView({behavior: 'smooth'});
    modal.classList.toggle('active', false);
    closeModal.classList.toggle('visible', false);
    closeModal.classList.toggle('not-visible', true);
    document.body.classList.toggle('no-scroll', false);
  });

  var contactoButton2 = document.getElementById('contactoButton2');
  var contactoSection = document.getElementById('contactoSection');
  contactoButton2.addEventListener('click', function() {
    contactoSection.scrollIntoView({behavior: 'smooth'});
    modal.classList.toggle('active', false);
    closeModal.classList.toggle('visible', false);
    closeModal.classList.toggle('not-visible', true);
    document.body.classList.toggle('no-scroll', false);
  });

});
