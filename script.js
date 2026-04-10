// ====================== \\
// -=- Intro Sequence -=- \\
// ====================== \\

window.addEventListener('DOMContentLoaded', async () => {
});

document.getElementById("bttBtn").addEventListener("click", function() {
    document.getElementById("appScreen").scrollTo(0, 0);
});

document.getElementById("appScreenNavLink1").addEventListener("click", function() {
    document.getElementById("appScreen").scrollTo(0, 782);
});

document.getElementById("appScreenNavLink2").addEventListener("click", function() {
    document.getElementById("appScreen").scrollTo(0, 1242);
});

document.getElementById("appScreenNavLink3").addEventListener("click", function() {
    document.getElementById("appScreen").scrollTo(0, 1702);
});

document.getElementById("appScreenNavLink4").addEventListener("click", function() {
    document.getElementById("appScreen").scrollTo(0, 2162);
});

// ====================== \\
// -=- Profile Screen -=- \\
// ====================== \\

let addUserWindowCheck = 0;
function addUserWindow() {
    document.getElementById('addProfileCont').classList.toggle("show");
    const username = document.getElementById('username');
    const usernameImg = document.getElementById('profileImg');
    addUserWindowCheck++;
    if (addUserWindowCheck%2==1) {
        username.value = "";
        usernameImg.value = "-1";
    }
}

function saveUser(x,y) {
    if (localStorage.getItem("bd-users") == null || localStorage.getItem("bd-users") == "") {
        localStorage.setItem("bd-users", `${x}~${y}`);
    } else {
        localStorage.setItem("bd-users", `${localStorage.getItem("bd-users")}|${x}~${y}`);
    }
}

function addUser() {
    const container = document.getElementById('usersCont');
    const username = document.getElementById('username');
    const usernameImg = document.getElementById('profileImg');
    if (username.value == "" || username.value.includes("|") || username.value.includes("~")) {
        alert("Please enter a valid username!");
        return;
    } else if (usernameImg.value == "-1") {
        alert("Please choose a profile picture!");
        return;
    }
    if (localStorage.getItem("bd-users") != null) {
        for (let i = 0; i < localStorage.getItem("bd-users").split("|").length; i++) {
            if (localStorage.getItem("bd-users").split("|")[i].split("~")[0] == username.value) {
                alert("This username is already registered... Please enter different username!");
                username.value = "";
                username.focus();
                return;
            }
        }
    }
    addUserWindow();
    localStorage.setItem(`bd-list-${username.value}`, "");
    let usernameText = username.value;
    let usernameImgSrc = "";
    switch (usernameImg.value) {
        case ('0'):
            usernameImgSrc = "pp_ahmadoon.webp";
            break;
        case ('1'):
            usernameImgSrc = "pp_argietaychu.webp";
            break;
        case ('2'):
            usernameImgSrc = "pp_ballman.webp";
            break;
        case ('3'):
            usernameImgSrc = "pp_doonatthehotel.webp";
            break;
        case ('4'):
            usernameImgSrc = "pp_doonthepsychologist.webp";
            break;
        case ('5'):
            usernameImgSrc = "pp_fishythejurnalist.webp";
            break;
        case ('6'):
            usernameImgSrc = "pp_idansun.webp";
            break;
        case ('7'):
            usernameImgSrc = "pp_miwavi.webp";
            break;
        case ('8'):
            usernameImgSrc = "pp_nujitsu.webp";
            break;
        case ('9'):
            usernameImgSrc = "pp_rabiargie.webp";
            break;
        case ('10'):
            usernameImgSrc = "pp_sushi.webp";
            break;
        case ('11'):
            usernameImgSrc = "pp_thecompacty.webp";
            break;
        case ('12'):
            usernameImgSrc = "pp_wavitherapist.webp";
            break;
        case ('13'):
            usernameImgSrc = "pp_wavitheterapist.webp";
            break;
        default:
            alert("You must choose a profile picture!");
            usernameImgSrc = "~canceled";
            break;
    }
    if (usernameImgSrc == "~canceled") {
        return;
    }
    container.innerHTML += `
    <div class="profilesScreenProfileCardBox">
        <div class="profilesScreenProfileCard" onclick="selectUser('${usernameText+"~"+usernameImgSrc}')">
            <img src="src/${usernameImgSrc}" alt="Profile Picture" class="profilesScreenProfileCardImg">
        </div>
        <p class="profilesScreenProfileTitle">${usernameText}</p>
    </div>`;
    username.value = "";
    usernameImg.value = "-1";
    if (document.getElementsByClassName("profilesScreenProfileCardBox").length == 6) {
        document.getElementById("profilesScreenAddProfileCardBox").style.display = "none";
    } else {
        document.getElementById("profilesScreenAddProfileCardBox").style.display = "flex";
    }
    saveUser(usernameText,usernameImgSrc);
}

function addUserStart(usernameInfo) {
    const container = document.getElementById('usersCont');
    let usernameText = usernameInfo.split("~")[0];
    let usernameImgSrc = usernameInfo.split("~")[1];
    container.innerHTML += `
    <div class="profilesScreenProfileCardBox">
        <div class="profilesScreenProfileCard" onclick="selectUser('${usernameText+"~"+usernameImgSrc}')">
            <img src="src/${usernameImgSrc}" alt="Profile Picture" class="profilesScreenProfileCardImg">
        </div>
        <p class="profilesScreenProfileTitle">${usernameText}</p>
    </div>`;
}

const saveBtnR = document.getElementById("saveBtnR");

function markSavedMoviesReg(x) {
    let username = localStorage.getItem("bd-user").split('~')[0];
    let saveCounter = 0;
    if (localStorage.getItem(`bd-list-${username}`) == null || localStorage.getItem(`bd-list-${username}`) == "") {
        localStorage.setItem(`bd-list-${username}`, "");
        return;
    }
    for (let i = 0; i < localStorage.getItem(`bd-list-${username}`).split("|").length; i++) {
        if (localStorage.getItem(`bd-list-${username}`).split("|")[i] == regInfo[x].title) {
            saveBtnR.innerHTML = '<i class="fa-solid fa-bookmark"></i>';
            break;
        }
        saveCounter++;
    }
    if (saveCounter == localStorage.getItem(`bd-list-${username}`).split("|").length) {
        saveBtnR.innerHTML = '<i class="fa-regular fa-bookmark"></i>';
    }
}

function saveVideoReg(x) {
    let username = localStorage.getItem("bd-user").split('~')[0];
    let list = localStorage.getItem(`bd-list-${username}`).split("|");
    let isIn = false;
    for (let i = 0; i < list.length; i++) {
        if (list[i] == x) {
            isIn = true;
        }
    }
    if (isIn == false) {
        if (localStorage.getItem(`bd-list-${username}`) == null || localStorage.getItem(`bd-list-${username}`) == "") {
            localStorage.setItem(`bd-list-${username}`, x);
        } else {
            localStorage.setItem(`bd-list-${username}`, localStorage.getItem(`bd-list-${username}`) + "|" + x);
        }
        saveBtnR.innerHTML = '<i class="fa-solid fa-bookmark"></i>';
    }
    else {
        for (let i = 0; i < list.length; i++) {
            if (list[i] == x) {
                list.splice(i ,1);
            }
        }
        let nList = "";
        for (let i = 0; i < list.length-1; i++) {
            nList += list[i] + "|";
        }
        if (list.length != 0) {
            nList += list[list.length-1];
        }
        localStorage.setItem(`bd-list-${username}`, nList);
        saveBtnR.innerHTML = '<i class="fa-regular fa-bookmark"></i>';
    }
    updateMyList();
}

const saveBtnS = document.getElementById("saveBtnS");

function markSavedMoviesSer(x) {
    let username = localStorage.getItem("bd-user").split('~')[0];
    let saveCounter = 0;
    if (localStorage.getItem(`bd-list-${username}`) == null || localStorage.getItem(`bd-list-${username}`) == "") {
        localStorage.setItem(`bd-list-${username}`, "");
        return;
    }
    for (let i = 0; i < localStorage.getItem(`bd-list-${username}`).split("|").length; i++) {
        if (localStorage.getItem(`bd-list-${username}`).split("|")[i] == serInfo[x].title) {
            saveBtnS.innerHTML = '<i class="fa-solid fa-bookmark"></i>';
            break;
        }
        saveCounter++;
    }
    if (saveCounter == localStorage.getItem(`bd-list-${username}`).split("|").length) {
        saveBtnS.innerHTML = '<i class="fa-regular fa-bookmark"></i>';
    }
}

function saveVideoSer(x) {
    let username = localStorage.getItem("bd-user").split('~')[0];
    let list = localStorage.getItem(`bd-list-${username}`).split("|");
    let isIn = false;
    for (let i = 0; i < list.length; i++) {
        if (list[i] == x) {
            isIn = true;
        }
    }
    if (isIn == false) {
        if (localStorage.getItem(`bd-list-${username}`) == null || localStorage.getItem(`bd-list-${username}`) == "") {
            localStorage.setItem(`bd-list-${username}`, x);
        } else {
            localStorage.setItem(`bd-list-${username}`, localStorage.getItem(`bd-list-${username}`) + "|" + x);
        }
        saveBtnS.innerHTML = '<i class="fa-solid fa-bookmark"></i>';
    }
    else {
        for (let i = 0; i < list.length; i++) {
            if (list[i] == x) {
                list.splice(i ,1);
            }
        }
        let nList = "";
        for (let i = 0; i < list.length-1; i++) {
            nList += list[i] + "|";
        }
        if (list.length != 0) {
            nList += list[list.length-1];
        }
        localStorage.setItem(`bd-list-${username}`, nList);
        saveBtnS.innerHTML = '<i class="fa-regular fa-bookmark"></i>';
    }
    updateMyList();
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
    if (document.getElementsByClassName("profilesScreenProfileCardBox").length == 6) {
        document.getElementById("profilesScreenAddProfileCardBox").style.display = "none";
    } else {
        document.getElementById("profilesScreenAddProfileCardBox").style.display = "flex";
    }
    if (localStorage.getItem("bd-user") != "" && localStorage.getItem("bd-user") != null) {
        setTimeout(function() {
            document.getElementById("appScreen").classList.add("visible-layer");
            document.getElementById("appScreen").classList.remove("hidden-layer");
            document.getElementById("appScreenNavProfileTxt").innerHTML = localStorage.getItem("bd-user").split("~")[0];
            document.getElementById("appScreenNavProfileImg").src = "src/" + localStorage.getItem("bd-user").split("~")[1];
            document.getElementById("appScreenNavLogoBox").style.width = document.getElementById("appScreenNavProfileBox").offsetWidth + "px";
            updateMyList();
        }, 200);
    } else {
        setTimeout(function() {
            document.getElementById("profilesScreen").classList.add("visible-layer");
            document.getElementById("profilesScreen").classList.remove("hidden-layer");
        }, 200);
    }
}
start();

function selectUser(x) {
    localStorage.setItem("bd-user", x);
    document.getElementById("appScreenNavLogoBox").style.width = document.getElementById("appScreenNavProfileBox").offsetWidth + "px";
    document.getElementById("profilesScreen").classList.remove("visible-layer");
    document.getElementById("profilesScreen").classList.add("hidden-layer");
    document.getElementById("appScreen").classList.add("visible-layer");
    document.getElementById("appScreen").classList.remove("hidden-layer");
    document.getElementById("appScreenNavProfileTxt").innerHTML = x.split("~")[0];
    document.getElementById("appScreenNavProfileImg").src = "src/" + x.split("~")[1];
    updateMyList();
}

// ================== \\
// -=- App Screen -=- \\
// ================== \\

const regInfo = [
    {
        title: "Karate Origin",
        subtitle: "Wave of a Soul",
        txt: "A young boy dreams of becoming a world karate champion, but his dream changes when he discovers a force that threatens to destroy the world and the only thing that will stop it is karate.",
        director: 'Wavi, Doon',
        cast: 'Fishy, Wavi, Argie, Doon, Nuji',
        photographer: 'Fishy, Argie',
        editor: 'Argie',
        genre: "Action, Drama, Adventure",
        type: "MOVIE",
        year: "2025",
        age: "13+",
        res: "V",
        sound: "V",
        imax: "V",
        img: "src/karateoriginThumbnail.webp"
    },
    {
        title: "WAVI vs DOON",
        subtitle: "Live Fight",
        txt: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad iusto, culpa nam esse eius numquam, expedita distinctio aut perspiciatis magnam sint consectetur itaque! Odit ut quasi rem expedita consequatur aliquam.",
        director: 'Wavi, Doon',
        cast: 'Fishy, Wavi, Argie, Doon',
        photographer: 'Fishy, Argie',
        editor: 'Argie',
        genre: "Action, Drama, Thriller",
        type: "MOVIE",
        year: "2025",
        age: "16+",
        res: "V",
        sound: "X",
        imax: "X",
        img: "src/wavivsdoonThumbnail.webp"
    },
    {
        title: "Wavi The Therapist",
        subtitle: "None",
        txt: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad iusto, culpa nam esse eius numquam, expedita distinctio aut perspiciatis magnam sint consectetur itaque! Odit ut quasi rem expedita consequatur aliquam.",
        director: 'Wavi, Doon',
        cast: 'Wavi, Doon',
        photographer: 'Argie',
        editor: 'Argie',
        genre: "Horror, Drama",
        type: "SHORT",
        year: "2025",
        age: "30+",
        res: "V",
        sound: "X",
        imax: "X",
        img: "src/wavithetherapistThumbnail.webp",
        src: "https://www.youtube.com/embed/ni_PoWFpNFk?si=JdiXFvVw_xymqPMX"
    },
    {
        title: "One Night With Wavi",
        subtitle: "None",
        txt: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad iusto, culpa nam esse eius numquam, expedita distinctio aut perspiciatis magnam sint consectetur itaque! Odit ut quasi rem expedita consequatur aliquam.",
        director: 'Wavi, Doon',
        cast: 'Wavi, Doon',
        photographer: 'Argie',
        editor: 'Argie',
        genre: "Horror, Drama",
        type: "SHORT",
        year: "2022",
        age: "30+",
        res: "V",
        sound: "X",
        imax: "X",
        img: "src/onenightwithwaviThumbnail.webp"
    },
    {
        title: "Venom - Let the chase begin",
        subtitle: "None",
        txt: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad iusto, culpa nam esse eius numquam, expedita distinctio aut perspiciatis magnam sint consectetur itaque! Odit ut quasi rem expedita consequatur aliquam.",
        director: 'Wavi, Doon',
        cast: 'Wavi, Doon',
        photographer: 'Fishy, Argie, Doon',
        editor: 'Argie',
        genre: "Horror, Drama, Action",
        type: "SHORT",
        year: "2021",
        age: "30+",
        res: "V",
        sound: "X",
        imax: "X",
        img: "src/venomThumbnail.webp"
    },
    {
        title: "Joovin Everywhere",
        subtitle: "None",
        txt: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad iusto, culpa nam esse eius numquam, expedita distinctio aut perspiciatis magnam sint consectetur itaque! Odit ut quasi rem expedita consequatur aliquam.",
        director: 'Wavi, Doon',
        cast: 'Wavi, Doon',
        photographer: 'Argie, Doon',
        editor: 'Argie',
        genre: "Horror, Drama",
        type: "SHORT",
        year: "2021",
        age: "30+",
        res: "V",
        sound: "X",
        imax: "X",
        img: "src/wavivsdoonThumbnail.webp"
    },
    {
        title: "First Day At School",
        subtitle: "None",
        txt: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad iusto, culpa nam esse eius numquam, expedita distinctio aut perspiciatis magnam sint consectetur itaque! Odit ut quasi rem expedita consequatur aliquam.",
        director: 'Wavi, Doon',
        cast: 'Wavi, Doon',
        photographer: 'Fishy, Argie, Doon',
        editor: 'Argie',
        genre: "Horror, Drama",
        type: "SHORT",
        year: "2021",
        age: "30+",
        res: "V",
        sound: "X",
        imax: "X",
        img: "src/wavivsdoonThumbnail.webp"
    }
];

const serInfo = [
    {
        title: "BooDoon News",
        subtitle: "None",
        txt: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad iusto, culpa nam esse eius numquam, expedita distinctio aut perspiciatis magnam sint consectetur itaque! Odit ut quasi rem expedita consequatur aliquam.",
        director: 'Wavi, Doon',
        cast: 'Fishy, Wavi, Argie, Doon, Nuji',
        photographer: 'Fishy, Argie',
        editor: 'Argie',
        genre: "Comedy, Journalism",
        type: "SERIES",
        year: "2025",
        age: "13+",
        res: "V",
        sound: "X",
        imax: "X",
        img: "src/boodoonnewsThumbnail.webp",
        episodes: [["Episode I","25m 34s"],["Episode II","23m 48s"],["Episode III","27m 12s"],["Episode IV","21m 09s"],["Episode V","32m 29s"],["Episode VI","20m 17s","https://www.youtube.com/embed/C9XQAjCXpjo?si=jr4kZju8i6mu5xJc"]]
    },
    {
        title: "The Compacteam",
        subtitle: "Size Doesn't Matter",
        txt: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad iusto, culpa nam esse eius numquam, expedita distinctio aut perspiciatis magnam sint consectetur itaque! Odit ut quasi rem expedita consequatur aliquam.",
        director: 'Wavi, Doon',
        cast: 'The Compacty, Ball Man',
        photographer: 'Fishy, Argie',
        editor: 'Argie',
        genre: "Comedy, Fantasy, Action",
        type: "SERIES",
        year: "2025",
        age: "13+",
        res: "V",
        sound: "X",
        imax: "X",
        img: "src/compacteamThumbnail.webp",
        episodes: [["First Episode","25m 34s"],["Second Episode","23m 48s"],["Third Episode","27m 12s"]]
    }
];

document.getElementById("appScreen").addEventListener("scroll", function() {
    if (document.getElementById("appScreen").scrollTop > 10) {
        document.getElementById("bttBtn").classList.add("active");
    } else {
        document.getElementById("bttBtn").classList.remove("active");
    }
});

document.getElementById("appScreenNavProfileBox").addEventListener("click", function() {
    document.getElementById("appScreenNavProfileBox").classList.toggle("hovering");
    document.getElementById("appScreenNavProfileDropdown").classList.toggle("show");
});

function editUser() {
    let usernameTemp = localStorage.getItem("bd-user").split("~")[0];
    let nUsername = prompt("Enter new username:", usernameTemp);
    if (nUsername === null) {
        document.getElementById("appScreenNavProfileBox").classList.toggle("hovering");
        document.getElementById("appScreenNavProfileDropdown").classList.toggle("show");
        return;
    }
    while (nUsername == "") {
        nUsername = prompt("Enter new username:", usernameTemp);
    }
    const container = document.getElementById('usersCont');
    let users = localStorage.getItem("bd-users");
    if (users == null || users == "") {
        return;
    }
    let usersList = users.split("|");
    for (let i = 0; i < usersList.length; i++) {
        if (usersList[i] == localStorage.getItem("bd-user")) {
            usersList[i] = nUsername + "~" + localStorage.getItem("bd-user").split("~")[1];
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
    localStorage.setItem("bd-user", nUsername + "~" + localStorage.getItem("bd-user").split("~")[1]);
    document.getElementById("appScreenNavProfileBox").classList.toggle("hovering");
    document.getElementById("appScreenNavProfileDropdown").classList.toggle("show");
    localStorage.setItem(`bd-list-${nUsername}`, localStorage.getItem(`bd-list-${usernameTemp}`));
    localStorage.removeItem(`bd-list-${usernameTemp}`);
    container.innerHTML = `
    <div class="profilesScreenAddProfileCardBox" id="profilesScreenAddProfileCardBox">
        <div class="profilesScreenAddProfileCard" onclick="addUserWindow()">
            <i class="fa-solid fa-plus"></i>
        </div>
        <p class="profilesScreenProfileTitle">Add Profile</p>
    </div>`;
    start();
    document.getElementById("appScreenNavProfileTxt").innerHTML = localStorage.getItem("bd-user").split("~")[0];
    document.getElementById("appScreenNavProfileImg").src = "src/" + localStorage.getItem("bd-user").split("~")[1];
    document.getElementById("appScreenNavLogoBox").style.width = document.getElementById("appScreenNavProfileBox").offsetWidth + "px";
}

let editProfilePicWindowCheck = 0;
function editProfilePic() {
    document.getElementById('changeProfilePicCont').classList.toggle("show");
    const usernamePic = document.getElementById('profilePic');
    editProfilePicWindowCheck++;
    if (editProfilePicWindowCheck%2==0) {
        usernamePic.value = "-1";
        document.getElementById("appScreenNavProfileBox").classList.toggle("hovering");
        document.getElementById("appScreenNavProfileDropdown").classList.toggle("show");
    }
}

function saveProfilePic() {
    let newProfilePic = document.getElementById("profilePic");
    let usernameImgSrc = "";
    switch (newProfilePic.value) {
        case ('0'):
            usernameImgSrc = "pp_ahmadoon.webp";
            break;
        case ('1'):
            usernameImgSrc = "pp_argietaychu.webp";
            break;
        case ('2'):
            usernameImgSrc = "pp_ballman.webp";
            break;
        case ('3'):
            usernameImgSrc = "pp_doonatthehotel.webp";
            break;
        case ('4'):
            usernameImgSrc = "pp_doonthepsychologist.webp";
            break;
        case ('5'):
            usernameImgSrc = "pp_fishythejurnalist.webp";
            break;
        case ('6'):
            usernameImgSrc = "pp_idansun.webp";
            break;
        case ('7'):
            usernameImgSrc = "pp_miwavi.webp";
            break;
        case ('8'):
            usernameImgSrc = "pp_nujitsu.webp";
            break;
        case ('9'):
            usernameImgSrc = "pp_rabiargie.webp";
            break;
        case ('10'):
            usernameImgSrc = "pp_sushi.webp";
            break;
        case ('11'):
            usernameImgSrc = "pp_thecompacty.webp";
            break;
        case ('12'):
            usernameImgSrc = "pp_wavitherapist.webp";
            break;
        case ('13'):
            usernameImgSrc = "pp_wavitheterapist.webp";
            break;
        default:
            alert("You must choose a profile picture!");
            usernameImgSrc = "~canceled";
            break;
    }
    const container = document.getElementById('usersCont');
    let users = localStorage.getItem("bd-users");
    if (users == null || users == "" || usernameImgSrc == "~canceled") {
        return;
    }
    let usersList = users.split("|");
    for (let i = 0; i < usersList.length; i++) {
        if (usersList[i] == localStorage.getItem("bd-user")) {
            usersList[i] = localStorage.getItem("bd-user").split("~")[0] + "~" + usernameImgSrc;
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
    localStorage.setItem("bd-user", localStorage.getItem("bd-user").split("~")[0] + "~" + usernameImgSrc);
    container.innerHTML = `
    <div class="profilesScreenAddProfileCardBox" id="profilesScreenAddProfileCardBox">
        <div class="profilesScreenAddProfileCard" onclick="addUserWindow()">
            <i class="fa-solid fa-plus"></i>
        </div>
        <p class="profilesScreenProfileTitle">Add Profile</p>
    </div>`;
    start();
    editProfilePic();
    document.getElementById("appScreenNavProfileTxt").innerHTML = localStorage.getItem("bd-user").split("~")[0];
    document.getElementById("appScreenNavProfileImg").src = "src/" + localStorage.getItem("bd-user").split("~")[1];
    document.getElementById("appScreenNavLogoBox").style.width = document.getElementById("appScreenNavProfileBox").offsetWidth + "px";
}

function deleteUser() {
    let usernameTemp = localStorage.getItem("bd-user").split("~")[0];
    if (confirm(`Are you sure you want to remove the user: ${usernameTemp}`)) {
        const container = document.getElementById('usersCont');
        let users = localStorage.getItem("bd-users");
        if (users == null) {
            return;
        }
        let usersList = users.split("|");
        for (let i = 0; i < usersList.length; i++) {
            if (usersList[i] == localStorage.getItem("bd-user")) {
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
        localStorage.setItem("bd-user", "");
        document.getElementById("profilesScreen").classList.add("visible-layer");
        document.getElementById("profilesScreen").classList.remove("hidden-layer");
        document.getElementById("appScreen").classList.remove("visible-layer");
        document.getElementById("appScreen").classList.add("hidden-layer");
        document.getElementById("appScreenNavProfileBox").classList.toggle("hovering");
        document.getElementById("appScreenNavProfileDropdown").classList.toggle("show");
        localStorage.removeItem(`bd-list-${usernameTemp}`);
        container.innerHTML = `
        <div class="profilesScreenAddProfileCardBox" id="profilesScreenAddProfileCardBox">
            <div class="profilesScreenAddProfileCard" onclick="addUserWindow()">
                <i class="fa-solid fa-plus"></i>
            </div>
            <p class="profilesScreenProfileTitle">Add Profile</p>
        </div>`;
        start();
    } else {
        document.getElementById("appScreenNavProfileBox").classList.toggle("hovering");
        document.getElementById("appScreenNavProfileDropdown").classList.toggle("show");
        return;
    }
}

function logout() {
    localStorage.setItem("bd-user", "");
    document.getElementById("profilesScreen").classList.add("visible-layer");
    document.getElementById("profilesScreen").classList.remove("hidden-layer");
    document.getElementById("appScreen").classList.remove("visible-layer");
    document.getElementById("appScreen").classList.add("hidden-layer");
    document.getElementById("appScreenNavProfileBox").classList.toggle("hovering");
    document.getElementById("appScreenNavProfileDropdown").classList.toggle("show");
}

document.getElementById("moreInfoRegBgPress").addEventListener("click", function() {
    document.getElementById("moreInfoRegCont").classList.toggle("show");
});

let currentX;

function toggleMoreInfoR(x) {
    currentX = x;
    document.getElementById("moreInfoRegCont").classList.toggle("show");
    if (document.getElementById("moreInfoRegCont").classList.contains("show")) {
        document.getElementById("moreInfoRegTitle").innerHTML = regInfo[x].title;
        if (regInfo[x].subtitle == "None") {
            document.getElementById("moreInfoRegSubtitle").style.display = "none";
        } else {
            document.getElementById("moreInfoRegSubtitle").style.display = "block";
            document.getElementById("moreInfoRegSubtitle").innerHTML = regInfo[x].subtitle;
        }
        document.getElementById("moreInfoRegDescription").innerHTML = regInfo[x].txt;
        document.getElementById("moreInfoRegDirector").innerHTML = regInfo[x].director;
        document.getElementById("moreInfoRegCast").innerHTML = regInfo[x].cast;
        document.getElementById("moreInfoRegPhotographer").innerHTML = regInfo[x].photographer;
        document.getElementById("moreInfoRegEditor").innerHTML = regInfo[x].editor;
        document.getElementById("moreInfoRegGenres").innerHTML = regInfo[x].genre;
        document.getElementById("moreInfoRegType").innerHTML = regInfo[x].type;
        document.getElementById("moreInfoRegYear").innerHTML = regInfo[x].year;
        document.getElementById("moreInfoRegAge").innerHTML = regInfo[x].age;
        document.getElementById("moreInfoRegImg").src = regInfo[x].img;
        if (regInfo[x].res == "V") {
            document.getElementById("moreInfoRegRes").style.display = "block";
        } else {
            document.getElementById("moreInfoRegRes").style.display = "none";
        }
        if (regInfo[x].sound == "V") {
            document.getElementById("moreInfoRegSound").style.display = "block";
        } else {
            document.getElementById("moreInfoRegSound").style.display = "none";
        }
        if (regInfo[x].imax == "V") {
            document.getElementById("moreInfoRegImax").style.display = "block";
        } else {
            document.getElementById("moreInfoRegImax").style.display = "none";
        }
        document.getElementById("saveBtnR").addEventListener("click", saveVideoRegFunc);
        markSavedMoviesReg(x);
        document.getElementById("playBtnR").addEventListener("click", toggleVideoBoxMoreR);
    } else {
        document.getElementById("saveBtnR").removeEventListener("click", saveVideoRegFunc);
        document.getElementById("playBtnR").removeEventListener("click", toggleVideoBoxMoreR);
    }
}

let saveVideoRegFunc = () => {
    saveVideoReg(regInfo[currentX].title);
};

document.getElementById("moreInfoSerBgPress").addEventListener("click", function() {
    document.getElementById("moreInfoSerCont").classList.toggle("show");
});

function toggleMoreInfoS(x) {
    currentX = x;
    document.getElementById("moreInfoSerCont").classList.toggle("show");
    if (document.getElementById("moreInfoSerCont").classList.contains("show")) {
        document.getElementById("moreInfoSerTitle").innerHTML = serInfo[x].title;
        if (serInfo[x].subtitle == "None") {
            document.getElementById("moreInfoSerSubtitle").style.display = "none";
        } else {
            document.getElementById("moreInfoSerSubtitle").style.display = "block";
            document.getElementById("moreInfoSerSubtitle").innerHTML = serInfo[x].subtitle;
        }
        document.getElementById("moreInfoSerDescription").innerHTML = serInfo[x].txt;
        document.getElementById("moreInfoSerDirector").innerHTML = serInfo[x].director;
        document.getElementById("moreInfoSerCast").innerHTML = serInfo[x].cast;
        document.getElementById("moreInfoSerPhotographer").innerHTML = serInfo[x].photographer;
        document.getElementById("moreInfoSerEditor").innerHTML = serInfo[x].editor;
        document.getElementById("moreInfoSerGenres").innerHTML = serInfo[x].genre;
        document.getElementById("moreInfoSerType").innerHTML = serInfo[x].type;
        document.getElementById("moreInfoSerYear").innerHTML = serInfo[x].year;
        document.getElementById("moreInfoSerAge").innerHTML = serInfo[x].age;
        document.getElementById("moreInfoSerImg").src = serInfo[x].img;
        if (serInfo[x].res == "V") {
            document.getElementById("moreInfoSerRes").style.display = "block";
        } else {
            document.getElementById("moreInfoSerRes").style.display = "none";
        }
        if (serInfo[x].sound == "V") {
            document.getElementById("moreInfoSerSound").style.display = "block";
        } else {
            document.getElementById("moreInfoSerSound").style.display = "none";
        }
        if (serInfo[x].imax == "V") {
            document.getElementById("moreInfoSerImax").style.display = "block";
        } else {
            document.getElementById("moreInfoSerImax").style.display = "none";
        }
        let seriesEpisodes = serInfo[x].episodes;
        let seriesEpisodesCont = document.getElementById("moreInfoSerEpisodesBox");
        seriesEpisodesCont.innerHTML = '';
        for (let i = 0; i < seriesEpisodes.length; i++) {
            seriesEpisodesCont.innerHTML += `
            <div class="moreInfoSerEpisodeBox" onclick="toggleVideoBoxMoreS(${x}, ${i})">
                <p class="moreInfoSerEpisodeNum">${i+1}</p>
                <img src="${serInfo[x].img}" alt="" class="moreInfoSerEpisodeImg">
                <div class="moreInfoSerEpisodeContentBox">
                    <p class="moreInfoSerEpisodeTitle">${seriesEpisodes[i][0]}</p>
                    <p class="moreInfoSerEpisodeTime">${seriesEpisodes[i][1]}</p>
                </div>
            </div>
            `;
        }
        document.getElementById("saveBtnS").addEventListener("click", saveVideoSerFunc);
        markSavedMoviesSer(x);
    } else {
        document.getElementById("saveBtnS").removeEventListener("click", saveVideoSerFunc);
    }
}

let saveVideoSerFunc = () => {
    saveVideoSer(serInfo[currentX].title);
};

function updateMyList() {
    let username = localStorage.getItem("bd-user").split('~')[0];
    let myList = localStorage.getItem(`bd-list-${username}`).split("|");
    let myListCounter = 0;
    document.getElementById("appScreenMyListEmptyMsg").classList.remove("show");
    for (let i = 0; i < document.querySelectorAll(".savedVideoCard").length; i++) {
        document.querySelectorAll(".savedVideoCard")[i].classList.remove("show");
    }
    for (let i = 0; i < myList.length; i++) {
        switch (myList[i]) {
            case ("Karate Origin"):
                document.getElementById("KarateOrigin").classList.add("show");
                break;
            case ("WAVI vs DOON"):
                document.getElementById("WAVIvsDOON").classList.add("show");
                break;
            case ("Wavi The Therapist"):
                document.getElementById("WaviTheTherapist").classList.add("show");
                break;
            case ("One Night With Wavi"):
                document.getElementById("OneNightWithWavi").classList.add("show");
                break;
            case ("Venom - Let the chase begin"):
                document.getElementById("Venom-LetTheChaseBegin").classList.add("show");
                break;
            case ("BooDoon News"):
                document.getElementById("BooDoonNews").classList.add("show");
                break;
            case ("The Compacteam"):
                document.getElementById("TheCompacteam").classList.add("show");
                break;
            default:
                break;
        }
    }
    for (let i = 0; i < document.querySelectorAll(".savedVideoCard").length; i++) {
        if (!document.querySelectorAll(".savedVideoCard")[i].classList.contains("show")) {
            myListCounter++;
        }
    }
    if (myListCounter == document.querySelectorAll(".savedVideoCard").length) {
        document.getElementById("appScreenMyListEmptyMsg").classList.add("show");
    }
}

function toggleVideoBoxR(xsrcid) {
    document.getElementById("videoBoxSrc").src = regInfo[xsrcid].src;
    setTimeout(function() {
        document.getElementById("videoCont").classList.toggle("show");
    }, 100);
}

function toggleVideoBoxMoreR() {
    if (regInfo[currentX].src == null) {return}
    document.getElementById("videoBoxSrc").src = regInfo[currentX].src;
    setTimeout(function() {
        document.getElementById("videoCont").classList.toggle("show");
    }, 100);
}

function toggleVideoBoxMoreS(xid, xeps) {
    let seriesEpisodes = serInfo[xid].episodes;
    if (seriesEpisodes[xeps][2] == null) {return}
    document.getElementById("videoBoxSrc").src = seriesEpisodes[xeps][2];
    setTimeout(function() {
        document.getElementById("videoCont").classList.toggle("show");
    }, 100);
}

document.getElementById("videoXmark").addEventListener("click", function() {
    document.getElementById("videoCont").classList.toggle("show");
    document.getElementById("videoBoxSrc").src = document.getElementById("videoBoxSrc").src;
});
document.getElementById("videoContBgPress").addEventListener("click", function() {
    document.getElementById("videoCont").classList.toggle("show");
    document.getElementById("videoBoxSrc").src = document.getElementById("videoBoxSrc").src;
});