let contacts = [];
let searchValue = "";
function persistData() {
  window.localStorage.setItem("contacts", JSON.stringify(contacts));
}
function render() {
  const contactsId = "contacts-list";
  const contactsList =
    document.querySelector(`#${contactsId}`) || document.createElement("ul");
  contactsList.innerHTML = null;
  contactsList.id = contactsId;
  contacts
    .filter((singleContact) => {
      return (
        singleContact.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        singleContact.phone.includes(searchValue)
      );
    })
    .forEach((singleContact, index) => {
      const contactEl = document.createElement("li");
      const nameEl = document.createElement(
        singleContact.isInEdit ? "input" : "p"
      );
      const phoneEl = document.createElement(
        singleContact.isInEdit ? "input" : "a"
      );
      const deleteBtn = document.createElement("button");
      const favoriteBtn = document.createElement("button");
      const editBtn = document.createElement("button");
      const separatorEl = document.createElement("hr");
      contactEl.className = singleContact.isFavorite ? "favorite" : "";
      phoneEl.href = `tel:${singleContact.phone}`;
      deleteBtn.textContent = "🚮";
      favoriteBtn.textContent = singleContact.isFavorite
        ? "Remove Favorite"
        : "Add Favorite";
      editBtn.textContent = singleContact.isInEdit ? "Save" : "Edit";
      if (singleContact.isInEdit) {
        nameEl.type = "text";
        phoneEl.type = "tel";
        nameEl.value = singleContact.name;
        phoneEl.value = singleContact.phone;
      } else {
        nameEl.textContent = singleContact.name;
        phoneEl.textContent = singleContact.phone;
      }
      deleteBtn.addEventListener("click", () => {
        contacts.splice(index, 1);
        persistData();
        render();
      });
      favoriteBtn.addEventListener("click", () => {
        contacts[index].isFavorite = !contacts[index].isFavorite;
        persistData();
        render();
      });
      editBtn.addEventListener("click", () => {
        if (singleContact.isInEdit) {
          contacts[index].name = nameEl.value;
          contacts[index].phone = phoneEl.value;
        }
        contacts[index].isInEdit = !contacts[index].isInEdit;
        persistData();
        render();
      });
      contactEl.append(
        nameEl,
        phoneEl,
        deleteBtn,
        favoriteBtn,
        editBtn,
        separatorEl
      );
      contactsList.append(contactEl);
    });
  document.querySelector("#app").append(contactsList);
}
document.querySelector("#search").addEventListener("input", (e) => {
  searchValue = e.target.value;
  render();
});
document.querySelector("#new-address").addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const newContact = Object.assign(Object.fromEntries(formData), {
    isFavorite: false,
    isInEdit: false,
  });
  contacts = contacts.concat(newContact);
  e.target.reset();
  persistData();
  render();
});
window.addEventListener("DOMContentLoaded", () => {
  const persistedContacts = window.localStorage.getItem("contacts");
  if (persistedContacts) {
    contacts = JSON.parse(persistedContacts);
    render();
  }
});
