let newElement = document.createElement("p")
newElement.innerText = "It is NOT paris"

let parentElement = document.querySelector("body")
parentElement.appendChild(newElement)

let button = document.querySelector("button")
let input = document.querySelector("input")
let list = document.querySelector("ul") 

button.addEventListener("click", function() {
    let text = input.value
    if(text === "") return
    
    let listItem = document.createElement("li")
    listItem.innerText = text

    list.appendChild(listItem)
    input.value = ""

})

let cruelty_btn = document.querySelector("#cruelty-btn");

let texts = [
    "Hey",
    "it's",
    "me",
    "it's",
    "cruelty",
    "I",
    "cant",
    "do",
    "nathan",
    "muhahahaha >:)"
];

let clickCount = 0;

cruelty_btn.addEventListener("click", function() {
    clickCount++;

    let newElement = document.createElement("p");
    newElement.innerText = texts[clickCount - 1];

    let msgGroup = document.querySelector("#msg-group")
    msgGroup.appendChild(newElement);

    if (clickCount === 11) {
        msgGroup.innerHTML = "";
        clickCount = 0;
    }
});




