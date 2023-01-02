function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalBtnClose = document.querySelector(".close");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalBtnClose.addEventListener("click", closeModal);


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function closeModal() {
  modalbg.style.display = "none";
}

const confirm_modal = document.getElementById("confirm-modal");
const confirm_modal_close = document.getElementById("confirm-modal-close");
function closeModalConfirmation() {
  confirm_modal.style.display = "none";
}

// --------------FORM Validate--------------


function validate(){
  if (validate_prenom_nom() && validate_email() && validate_nombre_concours() && validate_localisation() && validate_cgu()){
    //Affiche la modal de confirmation
    console.log("verfication done");
    closeModal();
    confirmModal();
    return false;
  } else {
    // alert('Une erreur est survenue');
    return false;
  }
}

function showErrors(raison, error_name){
  document.getElementById(`${error_name}`).innerHTML = `${raison}`;
}

function hideErrors(error_name){
  document.getElementById(`${error_name}`).innerHTML = '';
}


function confirmModal() {
  confirm_modal.style.display = "block";
  confirm_modal_close.addEventListener("click", (e)=>{
    closeModalConfirmation();
    location.reload();
    return true;
  });
}


const prenom = document.getElementById("first");
const nom = document.getElementById("last");

function validate_prenom_nom(){
  //Vérifie si nom et prénom ont plus de 2 caractères
  if( prenom.value.length >= 2 && nom.value.length >= 2){
    hideErrors('errors_name');
    return true;
  } else {
    showErrors("Veuillez entrer 2 caractères ou plus pour le champ du nom.", 'errors_name');
    return false;
  }
}


const email = document.getElementById("email");
function validate_email(){
  //Vérifie si l'email est valide et existante
  if (email.value.toLowerCase().match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)){
    hideErrors('errors_email');
    return true;
  } else {
    showErrors("Veuillez renseigner un email valide", 'errors_email');
    return false;
  }
}


const quantity = document.getElementById("quantity");
function validate_nombre_concours(){
  const uo = quantity.value;
  const verifye = parseInt(uo);
  // Vérifie si le nombre de concours est valide (int)
  if(Number.isInteger(verifye) && 0 < verifye && verifye < 1000){
    hideErrors('errors_quantity');
    return true;
  } else {
    showErrors("Veuillez renseigner un nombre valide", 'errors_quantity');
    return false;
  }
}


const location_un = document.getElementById("location1");
const location_deux = document.getElementById("location2");
const location_trois = document.getElementById("location3");
const location_quatre = document.getElementById("location4");
const location_cinq = document.getElementById("location5");
const location_six = document.getElementById("location6");
const array_loc = [location_un, location_deux, location_trois, location_quatre, location_cinq, location_six];
function validate_localisation(){
  //Vérifie si au moins une ville est sélectionnée
  let number_checked = 0;
  array_loc.forEach(element => {
    if(element.checked){
      number_checked++;
      return true;
    }
  });
  if(number_checked == 1){
    hideErrors('errors_location');
    return true;
  } else {
    //Affiche une erreur
    showErrors('Vous devez choisir une ville', 'errors_location');
    return false;
  }
}


const cgu = document.getElementById("checkbox1");
function validate_cgu(){
  //Vérifie si les CGU sont cochées
  if(cgu.checked){
    hideErrors('errors_cgu');
    return true;
  } else {
    // alert("Veuillez accepter les CGU");
    showErrors('Vous devez vérifier que vous acceptez les termes et conditions.', 'errors_cgu');
    return false;
  }
}
