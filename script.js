const moviesInfo = [
    {
        title: "Wavi VS Doon - Live Fight",
        txt: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad iusto, culpa nam esse eius numquam, expedita distinctio aut perspiciatis magnam sint consectetur itaque! Odit ut quasi rem expedita consequatur aliquam.",
        type: "Movie",
        year: "2025",
        genre: "Action",
        age: "30+",
        rate: " 9.2 IMDb"
    },
    {
        title: "Idan San - The Last Fighter",
        txt: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad iusto, culpa nam esse eius numquam, expedita distinctio aut perspiciatis magnam sint consectetur itaque! Odit ut quasi rem expedita consequatur aliquam.",
        type: "Movie",
        year: "2025",
        genre: "Action",
        age: "30+",
        rate: " 9.8 IMDb"
    },
    {
        title: "The Chase",
        txt: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad iusto, culpa nam esse eius numquam, expedita distinctio aut perspiciatis magnam sint consectetur itaque! Odit ut quasi rem expedita consequatur aliquam.",
        type: "Short",
        year: "2021",
        genre: "Horror",
        age: "30+",
        rate: " 8.9 IMDb"
    },
    {
        title: "Joovin Everywhere",
        txt: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad iusto, culpa nam esse eius numquam, expedita distinctio aut perspiciatis magnam sint consectetur itaque! Odit ut quasi rem expedita consequatur aliquam.",
        type: "Short",
        year: "2021",
        genre: "Horror",
        age: "30+",
        rate: " 8.5 IMDb"
    },
    {
        title: "First Day At School",
        txt: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad iusto, culpa nam esse eius numquam, expedita distinctio aut perspiciatis magnam sint consectetur itaque! Odit ut quasi rem expedita consequatur aliquam.",
        type: "Short",
        year: "2021",
        genre: "Horror",
        age: "30+",
        rate: " 8.7 IMDb"
    },
    {
        title: "A Compulsive Vacation",
        txt: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad iusto, culpa nam esse eius numquam, expedita distinctio aut perspiciatis magnam sint consectetur itaque! Odit ut quasi rem expedita consequatur aliquam.",
        type: "Short",
        year: "2022",
        genre: "Horror",
        age: "30+",
        rate: " 9.0 IMDb"
    },
    {
        title: "BooDoon News Episode I",
        txt: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad iusto, culpa nam esse eius numquam, expedita distinctio aut perspiciatis magnam sint consectetur itaque! Odit ut quasi rem expedita consequatur aliquam.",
        type: "News",
        year: "2025",
        genre: "Journalism",
        age: "30+",
        rate: " 9.4 IMDb"
    },
    {
        title: "BooDoon News Episode II",
        txt: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad iusto, culpa nam esse eius numquam, expedita distinctio aut perspiciatis magnam sint consectetur itaque! Odit ut quasi rem expedita consequatur aliquam.",
        type: "News",
        year: "2025",
        genre: "Journalism",
        age: "30+",
        rate: " 9.4 IMDb"
    },
    {
        title: "BooDoon News Episode III",
        txt: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad iusto, culpa nam esse eius numquam, expedita distinctio aut perspiciatis magnam sint consectetur itaque! Odit ut quasi rem expedita consequatur aliquam.",
        type: "News",
        year: "2025",
        genre: "Journalism",
        age: "30+",
        rate: " 9.4 IMDb"
    },
    {
        title: "BooDoon News Episode IV",
        txt: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad iusto, culpa nam esse eius numquam, expedita distinctio aut perspiciatis magnam sint consectetur itaque! Odit ut quasi rem expedita consequatur aliquam.",
        type: "News",
        year: "2025",
        genre: "Journalism",
        age: "30+",
        rate: " 9.4 IMDb"
    },
    {
        title: "BooDoon News Episode V",
        txt: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad iusto, culpa nam esse eius numquam, expedita distinctio aut perspiciatis magnam sint consectetur itaque! Odit ut quasi rem expedita consequatur aliquam.",
        type: "News",
        year: "2025",
        genre: "Journalism",
        age: "30+",
        rate: " 9.4 IMDb"
    }
];

function logout() {
    localStorage.setItem("bd-user", "");
    window.location.replace("signin/");
}

function markSavedMovies() {
    const username = localStorage.getItem("bd-user");
    if (localStorage.getItem(`bd-list-${username}`) == null || localStorage.getItem(`bd-list-${username}`) == "") {
        return;
    }
    let list = localStorage.getItem(`bd-list-${username}`).split("|");
    let movies = document.getElementsByClassName("movieBox");
    let savedBtns = document.getElementsByClassName("saveBtnR");
    for (let i = 0; i < movies.length; i++) {
        for (let j = 0; j < list.length; j++) {
            if (String(i) == list[j]) {
                savedBtns[i].innerHTML = '<i class="fa-solid fa-bookmark"></i>';
                if (String(i) == "1") {
                    document.getElementById("saveBtn").innerHTML = '<i class="fa-solid fa-bookmark" style="margin-right: 10px;"></i> Save To My List';
                }
            }
        }
    }
}

function start() {
    if (localStorage.getItem("bd-user") == "" || localStorage.getItem("bd-user") == null) {
        window.location.replace("signin/");
    }
    let usernameTextList = localStorage.getItem("bd-user").split(" ");
    let usernameLogo = "";
    if (usernameTextList.length == 1) {
        usernameLogo = usernameTextList[0].slice(0,1).toUpperCase();
    } else {
        usernameLogo = usernameTextList[0].slice(0,1).toUpperCase() + usernameTextList[1].slice(0,1).toUpperCase();
    }
    document.getElementById("userBoxIcon").innerHTML = usernameLogo;
    document.getElementById("userBoxTxt").innerHTML = localStorage.getItem("bd-user");
    markSavedMovies();
}
start();

function readMore(x) {
    document.getElementById("readMoreCont").classList.toggle("show");
    if (document.getElementById("readMoreCont").classList.contains("show")) {
        document.getElementById("readMoreTitle").innerHTML = moviesInfo[x].title;
        document.getElementById("readMoreTxt").innerHTML = moviesInfo[x].txt;
        document.getElementById("readMoreType").innerHTML = moviesInfo[x].type;
        document.getElementById("readMoreYear").innerHTML = moviesInfo[x].year;
        document.getElementById("readMoreGenre").innerHTML = moviesInfo[x].genre;
        document.getElementById("readMoreAge").innerHTML = moviesInfo[x].age;
        document.getElementById("readMoreRate").innerHTML = '<i class="fa-solid fa-star" style="color: #ffcc00;"></i>' + moviesInfo[x].rate;
    }
}

const username = localStorage.getItem("bd-user");

function toggleSave(id) {
    let savedBtns = document.getElementsByClassName("saveBtnR");
    if (localStorage.getItem(`bd-list-${username}`) == null || localStorage.getItem(`bd-list-${username}`) == "") {
        localStorage.setItem(`bd-list-${username}`, id);
        savedBtns[id].innerHTML = '<i class="fa-solid fa-bookmark"></i>';
        if (String(id) == "1") {
            document.getElementById("saveBtn").innerHTML = '<i class="fa-solid fa-bookmark" style="margin-right: 10px;"></i> Save To My List';
        }
        return;
    }
    let list = localStorage.getItem(`bd-list-${username}`).split("|");
    let isIn = false;
    for (let i = 0; i < list.length; i++) {
        if (list[i] == String(id)) {
            isIn = true;
        }
    }
    if (isIn == false) {
        localStorage.setItem(`bd-list-${username}`, localStorage.getItem(`bd-list-${username}`) + "|" + id);
        savedBtns[id].innerHTML = '<i class="fa-solid fa-bookmark"></i>';
        if (String(id) == "1") {
            document.getElementById("saveBtn").innerHTML = '<i class="fa-solid fa-bookmark" style="margin-right: 10px;"></i> Save To My List';
        }
    }
    else {
        for (let i = 0; i < list.length; i++) {
            if (list[i] == String(id)) {
                list.splice(i ,1)
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
        savedBtns[id].innerHTML = '<i class="fa-regular fa-bookmark"></i>';
        if (String(id) == "1") {
            document.getElementById("saveBtn").innerHTML = '<i class="fa-regular fa-bookmark" style="margin-right: 10px;"></i> Save To My List';
        }
    }
}

let isMenu = false;
let isMenuClicked = false;
function toggleMenu() {
    const hamburger = document.getElementById('hamburgerBar');
    const dropDownBar = document.getElementById('dropDownBar');
    hamburger.classList.toggle("active");
    dropDownBar.classList.toggle("active");
    if (isMenu) {
        document.body.style.overflow = "";
    } else {
        document.body.style.overflow = "hidden";
    } isMenu = !isMenu;
}
document.getElementById('hamburgerBar').addEventListener('click', function() {
    if (isMenuClicked == false) {
        toggleMenu();
        isMenuClicked = true;
        setTimeout(function() {isMenuClicked = false;}, 500);
    }
});