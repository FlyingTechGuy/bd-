function addUserWindow() {
    document.getElementById('addUserWindow').classList.toggle("show");
}

function saveUser(x) {
    if (localStorage.getItem("bd-users") == null || localStorage.getItem("bd-users") == "") {
        localStorage.setItem("bd-users", x);
    } else {
        localStorage.setItem("bd-users", localStorage.getItem("bd-users") + "|" + x);
    }
}

function addUser() {
    const container = document.getElementById('usersCont');
    const username = document.getElementById('username');
    if (username.value == "") {
        alert("Please enter a valid username!");
        return;
    }
    addUserWindow();
    let usernameText = username.value;
    let usernameTextList = usernameText.split(" ");
    let usernameLogo = "";
    if (usernameTextList.length == 1) {
        usernameLogo = usernameTextList[0].slice(0,1).toUpperCase();
    } else {
        usernameLogo = usernameTextList[0].slice(0,1).toUpperCase() + usernameTextList[1].slice(0,1).toUpperCase();
    }
    container.innerHTML += `
    <div class="addBox">
        <i class="fa-solid fa-trash-can" onclick="deleteUser('${usernameText}')"></i>
        <i class="fa-solid fa-pen-to-square" onclick="editUser('${usernameText}')"></i>
        <div class="roundUser" onclick="selectUser('${usernameText}')">
            <p class="roundUserTxt">${usernameLogo}</p>
        </div>
        <p class="addTxt">${usernameText}</p>
    </div>`;
    username.value = "";
    if (document.getElementsByClassName("addBox").length == 5) {
        document.getElementById("addBox").style.display = "none";
    } else {
        document.getElementById("addBox").style.display = "flex";
    }
    saveUser(usernameText);
}

function addUserStart(usernameText) {
    const container = document.getElementById('usersCont');
    let usernameTextList = usernameText.split(" ");
    let usernameLogo = "";
    if (usernameTextList.length == 1) {
        usernameLogo = usernameTextList[0].slice(0,1).toUpperCase();
    } else {
        usernameLogo = usernameTextList[0].slice(0,1).toUpperCase() + usernameTextList[1].slice(0,1).toUpperCase();
    }
    container.innerHTML += `
    <div class="addBox">
        <i class="fa-solid fa-trash-can" onclick="deleteUser('${usernameText}')"></i>
        <i class="fa-solid fa-pen-to-square" onclick="editUser('${usernameText}')"></i>
        <div class="roundUser" onclick="selectUser('${usernameText}')">
            <p class="roundUserTxt">${usernameLogo}</p>
        </div>
        <p class="addTxt">${usernameText}</p>
    </div>`;
}

function start() {
    let users = localStorage.getItem("bd-users");
    if (users == null || users == "") {
        return;
    }
    let usersList = users.split("|");
    for (let i = 0; i < usersList.length; i++) {
        addUserStart(usersList[i]);
    }
    if (document.getElementsByClassName("addBox").length == 5) {
        document.getElementById("addBox").style.display = "none";
    } else {
        document.getElementById("addBox").style.display = "flex";
    }
}
start();

function deleteUser(x) {
    if (confirm(`Are you sure you want to remove the user: ${x}`)) {
        const container = document.getElementById('usersCont');
        let users = localStorage.getItem("bd-users");
        if (users == null) {
            return;
        }
        let usersList = users.split("|");
        for (let i = 0; i < usersList.length; i++) {
            if (usersList[i] == x) {
                usersList.splice(i,1);
            }
        }
        let nUsers = "";
        for (let i = 0; i < usersList.length-1; i++) {
            nUsers+=usersList[i] + "|";
        }
        if (usersList.length > 0) {
            nUsers+=usersList[usersList.length-1];
        }
        localStorage.setItem("bd-users", nUsers);
        localStorage.removeItem(`bd-list-${x}`);
        container.innerHTML = `
        <div class="addBox" id="addBox" onclick="addUserWindow()">
            <div class="roundPlus">
                <i class="fa-solid fa-plus"></i>
            </div>
            <p class="addTxt">Add Profile</p>
        </div>`;
        start();
    }
}

function editUser(x) {
    let nUsername = prompt("Enter new username:");
    if (nUsername === null) {
        return;
    }
    while (nUsername == "") {
        nUsername = prompt("Enter new username:");
    }
    const container = document.getElementById('usersCont');
    let users = localStorage.getItem("bd-users");
    if (users == null || users == "") {
        return;
    }
    let usersList = users.split("|");
    for (let i = 0; i < usersList.length; i++) {
        if (usersList[i] == x) {
            usersList[i] = nUsername;
        }
    }
    let nUsers = "";
    for (let i = 0; i < usersList.length-1; i++) {
        nUsers+=usersList[i] + "|";
    }
    if (usersList.length > 0) {
        nUsers+=usersList[usersList.length-1];
    }
    localStorage.setItem("bd-users", nUsers);
    localStorage.setItem(`bd-list-${nUsername}`, localStorage.getItem(`bd-list-${x}`));
    localStorage.removeItem(`bd-list-${x}`);
    container.innerHTML = `
    <div class="addBox" id="addBox" onclick="addUserWindow()">
        <div class="roundPlus">
            <i class="fa-solid fa-plus"></i>
        </div>
        <p class="addTxt">Add Profile</p>
    </div>`;
    start();
}

function selectUser(x) {
    localStorage.setItem("bd-user", x);
    window.location.replace("../");
}