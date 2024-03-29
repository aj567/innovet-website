// Form to google sheet

const form = document.querySelector("#form");
const submitButton = document.querySelector("#submit");
const scriptURL =
    "https://script.google.com/macros/s/AKfycbyNw5QUhaPb7ZLew-uY3Im2jLw_DwV1TvOYhhCFEw4mtLuqQCnake1zSJjDLCEkQ4ZftA/exec";

form.addEventListener("submit", (e) => {
    submitButton.disabled = true;
    e.preventDefault();
    let requestBody = new FormData(form);
    fetch(scriptURL, { method: "POST", body: requestBody })
        .then((response) => {
            alert(
                "Thank you for showing your interest. A member of our team will get in touch with you soon",
                response,
            );
            submitButton.disabled = false;
        })
        .catch((error) => {
            alert(
                "We are currently facing some issues. Kindly try after some time.",
                error.message,
            );
            submitButton.disabled = false;
        });
});
