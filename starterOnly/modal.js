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


console.log(modalBtnClose);

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

// --------------FORM Validate--------------

const birthdate = document.getElementById("birthdate");
const newsletter = document.getElementById("checkbox2");


function validate(){
  if (validate_prenom_nom() && validate_email() && validate_nombre_concours() && validate_localisation() && validate_cgu()){
    //Affiche la modal de confirmation
    console.log("verfication done")
    confirmModal();
    alert("verfication done");
    confirmModal();
    return true;
  } else {
    // alert('Une erreur est survenue');
  }
}

function showErrors(raison, error_name){
  document.getElementById(`${error_name}`).innerHTML = `${raison}`;
}


const confirm_modal = document.getElementById("confirm-modal");
function confirmModal() {
  confirm_modal.style.display = "block";
}


const prenom = document.getElementById("first");
const nom = document.getElementById("last");

prenom.addEventListener("input", (e) => {
  validate_prenom_nom();
  console.log(prenom.value);
});

function validate_prenom_nom(){
  //Vérifie si nom et prénom ont plus de 2 caractères
  if( prenom.value.length >= 2 && nom.value.length >= 2){
    return true;
  } else {
    console.log("Caractère insuffisant")
    showErrors("Caractère insuffisant", 'errors_name');
    // alert("Veuillez renseigner un prénom et un nom valide");
    return false;
  }
}


const email = document.getElementById("email");
function validate_email(){
  //Vérifie si l'email est valide et existante
  if (email.value.toLowerCase().match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)){
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
    return true;
  } else {
    // alert("Veuillez sélectionner une ville");
    showErrors('Veuillez sélectionner une ville', 'errors_location');
    return false;
  }
}


const cgu = document.getElementById("checkbox1");
function validate_cgu(){
  //Vérifie si les CGU sont cochées
  if(cgu.checked){
    return true;
  } else {
    // alert("Veuillez accepter les CGU");
    showErrors('Veuillez accepter les CGU', 'errors_cgu');
    return false;
  }
}
