const fullName = document.querySelector('.name');
const email = document.querySelector('.email');
const phone = document.querySelector('.phone');
const address = document.querySelector('.address');
const services = document.querySelector('.services');

document.querySelector(".Submit").addEventListener("click", () => {
  let newName = document.createElement('div');
  document.querySelector(".result").appendChild(newName);
  newName.className = 'fullName';
  document.querySelector('.fullName').textContent = `${fullName.value}`;

  let newEmail = document.createElement('div');
  document.querySelector(".result").appendChild(newEmail);
  newEmail.className = 'newEmail';
  document.querySelector('.newEmail').textContent = `${email.value}`;

  let newPhone = document.createElement('div');
  document.querySelector(".result").appendChild(newPhone);
  newPhone.className = 'newPhone';
  document.querySelector('.newPhone').textContent = `${phone.value}`;

  let newAddress = document.createElement('div');
  document.querySelector(".result").appendChild(newAddress);
  newAddress.className = 'newAddress';
  document.querySelector('.newAddress').textContent = `${address.value}`;

  let newServices = document.createElement('div');
  document.querySelector(".result").appendChild(newServices);
  newServices.className = 'newServices';
  document.querySelector('.newServices').textContent = `${services.value}`;

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