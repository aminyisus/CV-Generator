const inputName = document.getElementById("name");
const inputPhone = document.getElementById("phone");
const inputAddress = document.getElementById("address");
const inputEmail = document.getElementById("email");
const inputResumen = document.getElementById("resumen");
const inputIdiomas = document.getElementById("idiomas");
const inputEmpleos = document.getElementById("empleos");
const inputEducacion = document.getElementById("educacion");
const inputSkills = document.getElementById("skills");
const inputCertificaciones = document.getElementById("certificaciones");

function CreateCurriculum() {
  if (Validate()) {
    const valueName = inputName.value;
    const valuePhone = inputPhone.value;
    const valueAddress = inputAddress.value;
    const valueEmail = inputEmail.value;
    const valueResumen = inputResumen.value;
    const valueIdiomas = inputIdiomas.value;
    const valueEmpleos = inputEmpleos.value;
    const valueEducacion = inputEducacion.value;
    const valueSkills = inputSkills.value;
    const valueCertificaciones = inputCertificaciones.value;

    const mainContainer = document.getElementById("contact-container");

    

    const divCol = document.createElement("div");
    divCol.setAttribute("class", "col-4");

    const divCard1 = document.createElement("div");
    divCard1.setAttribute("class", "card");

    const divCard2 = document.createElement("div");
    divCard2.setAttribute("class", "card-header bg-primary text-white");


    const h5 = document.createElement("h5");
    h5.setAttribute("class", "text-center fw-bold");
    h5.innerText = "CV - " + valueName;


    const divCardBody = document.createElement("div");
    divCardBody.setAttribute("class", "card-body");

    const ul = document.createElement("ul");
    ul.setAttribute("class", "list-group list-group-flush");

    const liNombre = document.createElement("h5");
    liNombre.setAttribute("class", "mb-4 fw-bold");
    liNombre.innerText = "Nombre:";

    const vaNombre = document.createElement("h6");
    vaNombre.setAttribute("class", "mb-4");
    vaNombre.innerText = valueName;

    const liDireccion = document.createElement("h5");
    liDireccion.setAttribute("class", "mb-4 fw-bold");
    liDireccion.innerText = "Direccion:";

    const vaAddress = document.createElement("h6");
    vaAddress.setAttribute("class", "mb-4");
    vaAddress.innerText = valueAddress;

    const liCorreo = document.createElement("h5");
    liCorreo.setAttribute("class", "mb-4 fw-bold");
    liCorreo.innerText = "Correo:";

    const vaEmail = document.createElement("h6");
    vaEmail.setAttribute("class", "mb-4");
    vaEmail.innerText = valueEmail;

    const liTelefono = document.createElement("h5");
    liTelefono.setAttribute("class", "mb-4 fw-bold");
    liTelefono.innerText = "Telefono:";

    const vaPhone = document.createElement("h6");
    vaPhone.setAttribute("class", "mb-4");
    vaPhone.innerText = valuePhone;

    const liResumen = document.createElement("h5");
    liResumen.setAttribute("class", "mb-4 fw-bold");
    liResumen.innerText = "Resumen:";

    const vaResumen = document.createElement("h6");
    vaResumen.setAttribute("class", "mb-4");
    vaResumen.innerText = valueResumen;

    const liIdiomas = document.createElement("h5");
    liIdiomas.setAttribute("class", "mb-4 fw-bold");
    liIdiomas.innerText = "Idiomas:";

    const vaIdiomas = document.createElement("h6");
    vaIdiomas.setAttribute("class", "mb-4");
    vaIdiomas.innerText = valueIdiomas;

    const liEmpleos = document.createElement("h5");
    liEmpleos.setAttribute("class", "mb-4 fw-bold");
    liEmpleos.innerText = "Empleos:";

    const vaEmpleos = document.createElement("h6");
    vaEmpleos.setAttribute("class", "mb-4");
    vaEmpleos.innerText = valueEmpleos;

    const liEducacion = document.createElement("h5");
    liEducacion.setAttribute("class", "mb-4 fw-bold");
    liEducacion.innerText = "Educacion:";

    const vaEducacion = document.createElement("h6");
    vaEducacion.setAttribute("class", "mb-4");
    vaEducacion.innerText = valueEducacion;

    const liSkills = document.createElement("h5");
    liSkills.setAttribute("class", "mb-4 fw-bold");
    liSkills.innerText = "Skills:";

    const vaSkills = document.createElement("h6");
    vaSkills.setAttribute("class", "mb-4");
    vaSkills.innerText = valueSkills;

    const liCertificaciones = document.createElement("h5");
    liCertificaciones.setAttribute("class", "mb-4 fw-bold");
    liCertificaciones.innerText = "Certificaciones:";

    const vaCertificaciones = document.createElement("h6");
    vaCertificaciones.setAttribute("class", "mb-4 fw-bold");
    vaCertificaciones.innerText = valueCertificaciones;


    const btnDelete = document.createElement("button");
    btnDelete.setAttribute("class", "btn btn-danger float-end");
    btnDelete.innerText = "Eliminar";
    btnDelete.addEventListener("click", function () {
      if (confirm("Estas seguro que deseas eliminar este contacto?")) {
        mainContainer.removeChild(divCol);
      }
    })

    

    divCol.appendChild(divCard1);
    divCard1.appendChild(divCard2);
    divCard2.appendChild(h5);
    divCard1.appendChild(divCardBody);
    divCardBody.appendChild(ul);
    divCardBody.appendChild(btnDelete);
    ul.appendChild(liNombre);
    ul.appendChild(vaNombre);
    ul.appendChild(liDireccion);
    ul.appendChild(vaAddress);
    ul.appendChild(liCorreo);
    ul.appendChild(vaEmail);
    ul.appendChild(liTelefono);
    ul.appendChild(vaPhone);
    ul.appendChild(liResumen);
    ul.appendChild(vaResumen);
    ul.appendChild(liIdiomas);
    ul.appendChild(vaIdiomas);
    ul.appendChild(liEmpleos);
    ul.appendChild(vaEmpleos);
    ul.appendChild(liEducacion);
    ul.appendChild(vaEducacion);
    ul.appendChild(liSkills);
    ul.appendChild(vaSkills);
    ul.appendChild(liCertificaciones);
    ul.appendChild(vaCertificaciones);


    mainContainer.appendChild(divCol);

    Clear();

  } else {
    alert("Debe completar toda la info");
  }
}

function Clear() {
  inputName.value = "";
  inputName.classList.remove("input-error");
  inputName.classList.remove("input-success");
  

  inputPhone.value = "";
  inputPhone.classList.remove("input-error");
  inputPhone.classList.remove("input-success");


  inputAddress.value = "";
  inputAddress.classList.remove("input-error");
  inputAddress.classList.remove("input-success");

  inputEmail.value = "";
  inputEmail.classList.remove("input-error");
  inputEmail.classList.remove("input-success");

  inputResumen.value = "";
  inputResumen.classList.remove("input-error");
  inputResumen.classList.remove("input-success");

  inputIdiomas.value = "";
  inputIdiomas.classList.remove("input-error");
  inputIdiomas.classList.remove("input-success");

  inputEmpleos.value = "";
  inputEmpleos.classList.remove("input-error");
  inputEmpleos.classList.remove("input-success");

  inputEducacion.value = "";
  inputEducacion.classList.remove("input-error");
  inputEducacion.classList.remove("input-success");

  inputSkills.value = "";
  inputSkills.classList.remove("input-error");
  inputSkills.classList.remove("input-success");

  inputCertificaciones.value = "";
  inputCertificaciones.classList.remove("input-error");
  inputCertificaciones.classList.remove("input-success");
}

function Validate() {
  let isValid = true;

  const valueName = inputName.value;
  const valuePhone = inputPhone.value;
  const valueAddress = inputAddress.value;
  const valueEmail = inputEmail.value;
  const valueResumen = inputResumen.value;
  const valueIdiomas = inputIdiomas.value;
  const valueEmpleos = inputEmpleos.value;
  const valueEducacion = inputEducacion.value;
  const valueSkills = inputSkills.value;
  const valueCertificaciones = inputCertificaciones.value;

  if (valueName == "" || valueName == null || valueName == undefined) {
    isValid = false;
    inputName.classList.add("input-error");
    inputName.classList.remove("input-success");
  } else {
    inputName.classList.add("input-success");
    inputName.classList.remove("input-error");
  }

  if (valuePhone == "" || valuePhone == null || valuePhone == undefined) {
    isValid = false;
    inputPhone.classList.add("input-error");
    inputPhone.classList.remove("input-success");
  } else {
    inputPhone.classList.add("input-success");
    inputPhone.classList.remove("input-error");
  }


  if (valueAddress == "" || valueAddress == null || valueAddress == undefined) {
    isValid = false;
    inputAddress.classList.add("input-error");
    inputAddress.classList.remove("input-success");
  } else {
    inputAddress.classList.add("input-success");
    inputAddress.classList.remove("input-error");
  }

  if (valueEmail == "" || valueEmail == null || valueEmail == undefined) {
    isValid = false;
    inputEmail.classList.add("input-error");
    inputEmail.classList.remove("input-success");
  } else {
    inputEmail.classList.add("input-success");
    inputEmail.classList.remove("input-error");
  }

  if (valueResumen == "" || valueResumen == null || valueResumen == undefined) {
    isValid = false;
    inputResumen.classList.add("input-error");
    inputResumen.classList.remove("input-success");
  } else {
    inputResumen.classList.add("input-success");
    inputResumen.classList.remove("input-error");
  }

  if (valueIdiomas == "" || valueIdiomas == null || valueIdiomas == undefined) {
    isValid = false;
    inputIdiomas.classList.add("input-error");
    inputIdiomas.classList.remove("input-success");
  } else {
    inputIdiomas.classList.add("input-success");
    inputIdiomas.classList.remove("input-error");
  }

  if (valueEmpleos == "" || valueEmpleos == null || valueEmpleos == undefined) {
    isValid = false;
    inputEmpleos.classList.add("input-error");
    inputEmpleos.classList.remove("input-success");
  } else {
    inputEmpleos.classList.add("input-success");
    inputEmpleos.classList.remove("input-error");
  }

  if (valueEducacion == "" || valueEducacion == null || valueEducacion == undefined) {
    isValid = false;
    inputEducacion.classList.add("input-error");
    inputEducacion.classList.remove("input-success");
  } else {
    inputEducacion.classList.add("input-success");
    inputEducacion.classList.remove("input-error");
  }

  if (valueSkills == "" || valueSkills == null || valueSkills == undefined) {
    isValid = false;
    inputSkills.classList.add("input-error");
    inputSkills.classList.remove("input-success");
  } else {
    inputSkills.classList.add("input-success");
    inputSkills.classList.remove("input-error");
  }

  if (valueCertificaciones == "" || valueCertificaciones == null || valueCertificaciones == undefined) {
    isValid = false;
    inputCertificaciones.classList.add("input-error");
    inputCertificaciones.classList.remove("input-success");
  } else {
    inputCertificaciones.classList.add("input-success");
    inputCertificaciones.classList.remove("input-error");
  }

  return isValid;
}
