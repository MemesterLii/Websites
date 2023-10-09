const nameInput = document.querySelector("#name-input-field");
const submit = document.querySelector("#name-input-button");
let userList = document.querySelector("#users");
const remove = document.querySelector("#name-remove-button");
const positionInput = document.querySelector("#specific-user-field");
const removeSpecific = document.querySelector("#remove-specific-button");

submit.addEventListener("click", OnSubmit);
remove.addEventListener("click", OnRemove);
removeSpecific.addEventListener("click", OnSpecificRemove);

LoadUserList();

function OnSubmit() {
    if (nameInput.value.trim().length !== 0) {
        const user = document.createElement("li");
        user.appendChild(document.createTextNode(`${nameInput.value}`));
        userList.appendChild(user);
    }
    nameInput.value = "";
    SaveUserList();
}

function OnRemove() {
    if (userList.childElementCount > 0) {
        userList.firstElementChild.remove();
    }
    localStorage.setItem("savedList", JSON.stringify(userList));
    SaveUserList();
}

function OnSpecificRemove() {
    if (Number(positionInput.value) > 0 && userList.childElementCount >= Number(positionInput.value)) {
        userList.children[Number(positionInput.value) - 1].remove();
    }
    positionInput.value = "";
    SaveUserList();
}

function SaveUserList(){
    for(let i = 0; i < userList.childElementCount-1; i++){
        localStorage.setItem(`savedItem${i}`, JSON.stringify(userList.children[i]));
    }
    console.log(localStorage);
}

function LoadUserList(){
    for(let i = 0; i < userList.childElementCount-1; i++){
        userList.children[i] = JSON.parse(localStorage.getItem(`savedItem${i}`));
    }
    console.log(localStorage);
    console.log(userList);
}