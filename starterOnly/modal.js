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

// --------------FORM Validation--------------

function validate(){
  if (validate_input() === true){
    console.log("verification done");
    //Ferme la modal d'inscription
    closeModal();
    //Affiche la modal de confirmation
    confirmModal();
    return false;
  } else {
    return false;
  }
}

function validate_input(){
  validate_prenom();
  validate_nom();
  validate_email();
  validate_nombre_concours();
  validate_localisation();
  validate_cgu();
  if (validate_prenom() && validate_nom() && validate_email() && validate_nombre_concours() && validate_localisation() && validate_cgu()){
    console.log("OOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKKO");
    return true;
  }

  // validate_prenom() && validate_nom() &&
}


//function qui affiche les erreurs
function showErrors(raison, error_name){
  document.getElementById(`${error_name}`).innerHTML = `${raison}`;
}

//function qui cache les erreurs
function hideErrors(error_name){
  document.getElementById(`${error_name}`).innerHTML = '';
}

//Function qui affiche la modal de confirmation
function confirmModal() {
  confirm_modal.style.display = "block";
  confirm_modal.classList.add('display-confirm-modal');
  confirm_modal.removeAttribute('id');
  confirm_modal_close.addEventListener("click", (e)=>{
    closeModalConfirmation();
    location.reload();
    return true;
  });
}

//DOM Elements Nom et Prénom
const prenom = document.getElementById("first");
//Function qui vérifie le nom et le prénom
function validate_prenom(){
  //Vérifie si nom et prénom ont plus de 2 caractères
  if(prenom.value.match(/^[a-zA-Z ]+$/) && prenom.value.length >= 2){
    hideErrors('errors_name');
    return true;
  } else {
    showErrors("Veuillez renseigner un prénom valide", 'errors_first_name');
    return false;
  }
}

const nom = document.getElementById("last");
function validate_nom(){
  //Vérifie si nom et prénom ont plus de 2 caractères
  if(nom.value.match(/^[a-zA-Z ]+$/) && nom.value.length >= 2){
    hideErrors('errors_name');
    return true;
  } else {
    showErrors("Veuillez renseigner un nom valide", 'errors_second_name');
    return false;
  }
}

//DOM Element Email
const email = document.getElementById("email");
//Function qui vérifie l'email
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

//DOM Element Nombre de concours
const quantity = document.getElementById("quantity");
//Function qui vérifie le nombre de concours
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

//DOM Elements Localisation
const location_un = document.getElementById("location1");
const location_deux = document.getElementById("location2");
const location_trois = document.getElementById("location3");
const location_quatre = document.getElementById("location4");
const location_cinq = document.getElementById("location5");
const location_six = document.getElementById("location6");
const array_loc = [location_un, location_deux, location_trois, location_quatre, location_cinq, location_six];
//Function qui vérifie la localisation
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

//DOM Element CGU
const cgu = document.getElementById("checkbox1");

// Vérifie si le champ "CGU" est coché
// Si oui, continue le traitement
// Si non, affiche un message d'erreur
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
