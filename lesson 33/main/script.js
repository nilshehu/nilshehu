function validation() {
    const nameInput = document.getElementById("name");
    const ageInput = document.getElementById("age");
    const cityInput = document.getElementById("city");
    const nameError = document.getElementById("nameError");
    const ageError = document.getElementById("ageError");
    const cityError = document.getElementById("cityError");
    let valid = true;



    var valid_name_regex = /^[a-zA-Z]+$/;
    if (!nameInput.value.match(valid_name_regex)) {
        nameError.style.display = "inline";
        nameInput.style.borderColor = "red";
        valid = false;
    } else {
        nameError.style.display = "none";
        nameInput.style.borderColor = "black";
    }



    var valid_age_regex = /^[0-9]+$/;
    if (!ageInput.value.match(valid_age_regex)) {
        ageError.style.display = "inline";
        ageInput.style.borderColor = "red";
        valid = false;
    } else {
        ageError.style.display = "none";
        ageInput.style.borderColor = "black";
    }



    if (cityInput.value === "") {
        cityError.style.display = "inline";
        cityInput.style.borderColor = "red";
        valid = false;
    } else {
        cityError.style.display = "none";
        cityInput.style.borderColor = "black";
    }

    return valid;
}

