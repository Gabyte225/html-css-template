const fullName = document.querySelector('.name');
const email = document.querySelector('.email');
const phone = document.querySelector('.phone');
const address = document.querySelector('.address');
const services = document.querySelector('.services');

let content = document.querySelector(".result");

document.querySelector(".Submit").addEventListener("click", () => {
  content.innerHTML = `${fullName.value} </br> ${email.value} </br> ${phone.value} </br> ${address.value} </br> ${services.value}`;
  localStorage.setItem('fullName', fullName.value);
  localStorage.setItem('email', email.value);
  localStorage.setItem('phone', phone.value);
  localStorage.setItem('address', address.value);
  localStorage.setItem('services', services.value);
});

  let getName = localStorage.getItem('fullName');
  fullName.value = getName;
  let getEmail = localStorage.getItem('email');
  email.value = getEmail;
  let getPhone = localStorage.getItem('phone');
  phone.value = getPhone;
  let getAddress = localStorage.getItem('address');
  address.value = getAddress;
  let getServices = localStorage.getItem('services');
  services.value = getServices;