window.onload = function (){
    let nameInput = document.getElementById("getName");
    let ageInput = document.getElementById("getAge");
    let okButton = document.getElementById("submitButton");
    let checkbox = document.getElementById("bgCheckbox");
// or let checkbox = document.querySelector(".Form-right input[type='checkbox']");

okButton.disabled = true; //disabling button

/* checkbox.addEventListener("change", function() {
    console.log("Checkbox state changed:", this.checked);
    if (this.checked) {
        document.body.style.backgroundColor = "#add8e6";
    } else {
        document.body.style.backgroundColor = "";
    }
});   */
 
//##############################################################
checkbox.addEventListener("change", function() { //if change -> do this
    if (checkbox.checked) {
        document.body.style.backgroundColor = "#add8e6"; //change color to blue
    } else {
        document.body.style.backgroundColor = ""; //default
    }
});  
//##############################################################

function checkInputs() {
    okButton.disabled = !(nameInput.value.trim() && ageInput.value.trim()); //checking inputs
}

okButton.addEventListener("click", function() { //if clicked
    let age = parseInt(ageInput.value);
    let underButtonMSG = document.getElementById("gotAge");
    underButtonMSG.textContent = ""; 
        
    if (age < 18) {
        underButtonMSG.textContent = "تو زیر 18 هستی";
        underButtonMSG.style.color = "black";
    } else {
        alert("تو بالای 18 هستی");
    }
});

nameInput.addEventListener("input", checkInputs);
ageInput.addEventListener("input", checkInputs);
};