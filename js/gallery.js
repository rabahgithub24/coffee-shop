// Function to open the modal and display the clicked image
function openModal(imgElement) {
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modal-image');

  // Set the modal image source to the clicked image's source
  modalImage.src = imgElement.src;

  // Display the modal
  modal.style.display = 'flex';
}

// Function to close the modal when clicked anywhere outside the image
function closeModal() {
  const modal = document.getElementById('modal');

  // Hide the modal
  modal.style.display = 'none';
}
