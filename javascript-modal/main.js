const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalDialog = document.getElementById('modalDialog');

function openModal() {
  modalBackdrop.style.display = 'block';
  modalDialog.style.display = 'block';
}

function closeModal() {
  modalBackdrop.style.display = 'none';
  modalDialog.style.display = 'none';
}

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
