const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
let el = document.getElementById("close-button");

button.addEventListener("click", () => {
    if (input.value !== "") {
        displayList(input.value);
        chaptersArray.push(input.value);

        setChapterList();
        input.value = "";
        input.focus();

        const li = document.createElement("li");
        const deleteButton = document.createElement("button");
        
        li.innerHTML = input.value;
        deleteButton.textContent = "❌";
       
        li.appendChild(deleteButton);
        list.appendChild(li);

        deleteButton.addEventListener("click", () => {
            list.removeChild(li);
            input.focus();
        });

        input.focus();
        input.value = "";
    }
    
    else {
        window.alert("Please enter a Book and a Chapter");
    };
});

console.log(el.ariaLabel); // "Close"
el.ariaLabel = "Close dialog";
console.log(el.ariaLabel); // "Close dialog"

const chaptersArray = getChaptersList() || [];

chaptersArray.froEach(chapter => {
    displayList(chapter);
});

function displayList(item) {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    
    li.innerHTML = input.value;
    deleteButton.textContent = "❌";
   
    li.appendChild(deleteButton);
    list.appendChild(li);

    deleteButton.addEventListener("click", () => {
        list.removeChild(li);
        deleteChapter(li.innerHTML);
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem("list", JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("list"));
}
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length -1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}

