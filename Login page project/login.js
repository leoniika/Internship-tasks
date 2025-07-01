window.onload = function () {
    const loginPageEl = document.querySelector(".Loginpage");
    const createAccPageEl = document.querySelector(".CreateAccPage");
    const profilePageEl = document.querySelector(".profile");

    const loginBtn = document.querySelector(".Loginpage #priorityBtn");
    const createAccBtn = document.querySelector(".Loginpage #secendaryBtn");

    const userName = document.getElementById("getName");
    const password = document.getElementById("getPass");

    const inputs = document.querySelectorAll("input");

/------------------------------------------- hide all -------------------------------------------/

    function hideAllPages() {
        loginPageEl.style.display = "none";
        createAccPageEl.style.display = "none";
        profilePageEl.style.display = "none";
    }

/------------------------------------------ Login page ------------------------------------------/

    function loginPage() {
        hideAllPages();
        loginPageEl.style.display = "block";

        loginBtn.disabled = true;
        loginBtn.style.cursor = "wait";

        function checkInputs() {
        if (userName.value.trim() === "" || password.value.trim() === "") {
            loginBtn.disabled = true;
            loginBtn.style.cursor = "wait";
        } else {
            loginBtn.disabled = false;
            loginBtn.style.cursor = "pointer";
        }
        }
        userName.addEventListener("input", checkInputs);
        password.addEventListener("input", checkInputs);

        loginBtn.onclick = () => {
        hideAllPages();
        profilePage();
            inputs.forEach(input => {
                input.value = "";
            });
        };

        createAccBtn.onclick = () => {
        createAccountPage();
            inputs.forEach(input => {
                input.value = "";
            });
        };
    }

/---------------------------------------- Create account page ----------------------------------------/

    function createAccountPage() {
        hideAllPages();
        createAccPageEl.style.display = "block";

        const newName = document.getElementById("getNName");
        const phoneNumber = document.getElementById("getNumber");
        const newPass = document.getElementById("getNPass");
        const newPass2 = document.getElementById("getNPass2");
        const crossIcon = document.getElementsByClassName("crossIcon");

        const submitBtn = document.querySelector(".CreateAccPage #priorityBtn");
        const backBtn = document.querySelector(".CreateAccPage #secendaryBtn");

        const missMatch = document.querySelectorAll(".inputs");
        const note = document.querySelector(".note");

        const inputs = document.querySelectorAll("input");

        newPass.onclick = () => {
            note.style.display = "block";
            newPass.addEventListener("input", () => {
                const value = newPass.value;
                const checkboxUpper = document.getElementById("upper");
                const checkboxLower = document.getElementById("lower");
                const checkboxSymbol = document.getElementById("symbol");
                const checkboxNumber = document.getElementById("number"); 
                
                const iconUpper = document.querySelector("#check-upper .icon");
                const iconLower = document.querySelector("#check-lower .icon");
                const iconSymbol = document.querySelector("#check-symbol .icon");
                const iconNumber = document.querySelector("#check-number .icon");

                checkboxUpper.checked = /[A-Z]/.test(value);
                checkboxLower.checked = /[a-z]/.test(value);
                checkboxSymbol.checked = /[^A-Za-z0-9]/.test(value);
                checkboxNumber.checked = /[0-9]/.test(value); 
             })
        };

        for (let i = 0; i < crossIcon.length; i++) {
            crossIcon[i].style.display = "none";
        }

        submitBtn.onclick = () => {
            const pass1 = newPass.value.trim();
            const pass2 = newPass2.value.trim();

            if (pass1 === "" || pass2 === "") {
                alert("Fill in both password fields");
            } 

            if (phoneNumber.value.trim().length !== 11){
                phoneNumber.style.border = "4px solid #FB575A82";
                document.getElementById("cossPic3").style.display = "block";
                alert("Phone number is incorrect");
            }
            
            if (pass1 !== pass2) {
                newPass.style.border = "4px solid #FB575A82";
                newPass2.style.border = "4px solid #FB575A82";
                document.getElementById("cossPic1").style.display = "block";
                document.getElementById("cossPic2").style.display = "block";
                alert("Miss-match");
                inputs.forEach(input => {
                    input.value = "";
                });

            if ((pass1 === pass2) && (pass1 !== "" || pass2 !== "") && (phoneNumber.value.trim().length === 11)) {
                alert("Account created");
                loginPage();
                inputs.forEach(input => {
                    input.value = "";
                });
            };};
        };
        backBtn.onclick = () => {
            hideAllPages();
            loginPage();
        };

        note.style.display = "none";
        document.getElementById("cossPic3").style.display = "none";
        phoneNumber.style.border = "2px solid #0e58cd36";
        newPass.style.border = "2px solid #0e58cd36";
        newPass2.style.border = "2px solid #0e58cd36";
        for (let i = 0; i < crossIcon.length; i++) {
        crossIcon[i].style.display = "none";
        }
    }
/------------------------------------------ profile page ------------------------------------------/
    function profilePage() {
        hideAllPages();
        profilePageEl.style.display = "block"; //need DB
  }

  //ُStart
  loginPage();
};
