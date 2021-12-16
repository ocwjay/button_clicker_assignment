function removeAddDefinitionButton() {
    document.getElementById("addDefinitionButton").remove();
}

function loginButtonChange(element) {
    if(element.innerText == "login") {
        element.innerText = "Logout";
    }
    else {
        element.innerText = "Login";
    }
}

function likeNinja() {
    alert("Ninja was liked");
}