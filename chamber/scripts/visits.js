const lastVisted = document.querySelector(".today");
const visitCountKey = "visit-count-js";

let visitNumber = Number(localStorage.getItem(visitCountKey)) || 0;

if (visitNumber == 0) {
    lastVisted = `Welcome!  Let us know if you have any questions.`
}

if (visitNumber)