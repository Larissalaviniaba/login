let button_email = document.querySelector(".button__email");
let button_number = document.querySelector(".button__number");
let form_login = document.querySelector(".form__login");
let form_send_Otp = document.querySelector(".form__send-otp");

function button_selected(button1, button2, form1, form2) {
    button2.classList.add("button__selected");
    button1.classList.remove("button__selected");
  
    form1.classList.add("hidden");
    form2.classList.remove("hidden");
  
    button2.style.border = " 1px solid var(--purple0)";
    button1.style.border = " 1px solid var(--black)";
}

button_number.addEventListener("click", () => {
  button_selected(button_email, button_number, form_login, form_send_Otp);
});

button_email.addEventListener("click", () => {
  button_selected(button_number, button_email, form_send_Otp, form_login);
});


