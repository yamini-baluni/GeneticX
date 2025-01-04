const file = document.querySelector("#file-input");
const submitBtn = document.querySelector("#form-btn");
const formName = document.querySelector("#name-input");
const email = document.querySelector("#email-input")

function containsOnlyAlphabets(str) {
    const regex = /^[A-Za-z]+$/;
    return regex.test(str);
}


submitBtn.onclick = (event) => {
    event.preventDefault;
    if ((file.value).slice(-5, (file.value.length)) != 'fasta') {
        alert("Please enter .fasta File");
    }
    if (containsOnlyAlphabets(formName.value) == false) {
        alert("Please enter a valid Name");
    }
    if (not("@" in email.value && ".com" in email.value)) {
        alert("Enter a valid email address");
    }
}
