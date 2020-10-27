const showErrorAlert = () =>{
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Un campo está vacio',
  })
}

const showConfirmAlert = () => {
  Swal.fire({
    title: '¿Quieres guardar los cambios?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: `Guardar`,
    denyButtonText: `Cancelar`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire({
        icon: 'success',
        text: 'Cambios guardados',
        timer: 2000
      })
    } else if (result.isDenied) {
      Swal.fire({
        icon: 'error',
        text: 'No se guardaron los cambios',
        timer: 2000
      })
    }
  })
}

// OK action
const getInputData = () => {
  let hoursValue = document.getElementById("hours_selector").value;
  let breedValue = document.getElementById("breed-selector").value;

  if (hoursValue == "" || breedValue == "") {
    showErrorAlert()
    console.log("Empty fields")
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