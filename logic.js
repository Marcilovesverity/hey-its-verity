let count = 0;

const button = document.getElementById("cruelty-btn");
const clickDisplay = document.getElementById("click");


button.addEventListener("click", function () {
    count++;
    clickDisplay.textContent = count;
    this.classList.add("klickad");
    
     setTimeout(function() {
        document.getElementById("cruelty-btn").classList.remove("klickad");
    }, 100);

});

