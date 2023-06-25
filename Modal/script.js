const modale = document.querySelector(".modal");
const overlaye = document.querySelector(".overlay");

//   Modal open function
const openModal = () => {
  console.log("Modal is Open");
  modale.classList.add("active");
  overlaye.classList.add("overlayactive");
};

// Modal close function
const closeModal = () => {
  modale.classList.remove("active");
  overlaye.classList.remove("overlayactive");
};