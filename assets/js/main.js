

const ageInput = document.body.querySelector("form input:nth-of-type(1");
const result = document.body.querySelector("p");


function checkAge() {
    event.preventDefault();
    result.textContent = ageInput.value <18 ? "Minderjährig" : "Volljährig";
}