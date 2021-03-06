// OK action
const getInputData = () => {
  let hoursValue = document.getElementById("hours_selector").value;
  let breedValue = document.getElementById("breed-selector").value;

  if (hoursValue == "" || breedValue == "") {
    showErrorAlert()
    console.log("Empty fields")
  } else if (hoursValue > 24 || hoursValue <= 0){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'La hora es incorrecta',
      timer: 2500,
      showConfirmButton: false
    })
  } else {
      showConfirmAlert()
      console.log("Hours:", hoursValue);
      console.log("Breed selected:", breedValue) 

      // let button = document.getElementById("submit-button");
      // if (button.value == "OK"){
      //     button.value = "Running...";
      // }
  }
}

// Cancel action
const cancelScript = () => {
  console.log("Script stopped");
  let button = document.getElementById("submit-button");
  if (button.value != "OK") {
      button.value = "OK";        
  }
  // Clear hours field
  let hoursValue = document.getElementById("hours_selector");
  hoursValue.value = "";
  // Clear breed field
  let breedValue = document.getElementById("breed-selector");
  breedValue.value = "";
}

const showErrorAlert = () =>{
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Un campo está vacio',
    timer: 2500,
    showConfirmButton: false
  })
}

const showConfirmAlert = () => {
  Swal.fire({
    title: '¿Quieres guardar la configuración?',
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: `Guardar`,
    denyButtonText: `Cancelar`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire({
        icon: 'success',
        text: 'Configuración guardada',
        timer: 2000,
        showConfirmButton: false
      })
    } else if (result.isDenied) {
      Swal.fire({
        icon: 'error',
        text: 'No se guardó la configuración',
        timer: 2000,
        showConfirmButton: false
      })
    }
  })
}