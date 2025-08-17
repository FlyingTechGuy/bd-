const moviesInfo = [
    {
        title: "Wavi VS Doon - Live Fight",
        txt: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad iusto, culpa nam esse eius numquam, expedita distinctio aut perspiciatis magnam sint consectetur itaque! Odit ut quasi rem expedita consequatur aliquam.",
        type: "Movie",
        year: "2025",
        genre: "Action",
        age: "30+",
        rate: " 9.2"
    },
    {
        title: "Idan San - The Last Fighter",
        txt: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad iusto, culpa nam esse eius numquam, expedita distinctio aut perspiciatis magnam sint consectetur itaque! Odit ut quasi rem expedita consequatur aliquam.",
        type: "Movie",
        year: "2025",
        genre: "Action",
        age: "30+",
        rate: " 9.8"
    },
    {
        title: "The Chase",
        txt: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad iusto, culpa nam esse eius numquam, expedita distinctio aut perspiciatis magnam sint consectetur itaque! Odit ut quasi rem expedita consequatur aliquam.",
        type: "Short",
        year: "2021",
        genre: "Horror",
        age: "30+",
        rate: " 8.9"
    },
    {
        title: "Joovin Everywhere",
        txt: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad iusto, culpa nam esse eius numquam, expedita distinctio aut perspiciatis magnam sint consectetur itaque! Odit ut quasi rem expedita consequatur aliquam.",
        type: "Short",
        year: "2021",
        genre: "Horror",
        age: "30+",
        rate: " 8.5"
    },
    {
        title: "First Day At School",
        txt: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad iusto, culpa nam esse eius numquam, expedita distinctio aut perspiciatis magnam sint consectetur itaque! Odit ut quasi rem expedita consequatur aliquam.",
        type: "Short",
        year: "2021",
        genre: "Horror",
        age: "30+",
        rate: " 8.7"
    },
    {
        title: "A Compulsive Vacation",
        txt: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad iusto, culpa nam esse eius numquam, expedita distinctio aut perspiciatis magnam sint consectetur itaque! Odit ut quasi rem expedita consequatur aliquam.",
        type: "Short",
        year: "2022",
        genre: "Horror",
        age: "30+",
        rate: " 9.0"
    },
    {
        title: "BooDoon News Episode I",
        txt: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad iusto, culpa nam esse eius numquam, expedita distinctio aut perspiciatis magnam sint consectetur itaque! Odit ut quasi rem expedita consequatur aliquam.",
        type: "News",
        year: "2025",
        genre: "Comedy",
        age: "30+",
        rate: " 9.4"
    },
    {
        title: "BooDoon News Episode II",
        txt: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad iusto, culpa nam esse eius numquam, expedita distinctio aut perspiciatis magnam sint consectetur itaque! Odit ut quasi rem expedita consequatur aliquam.",
        type: "News",
        year: "2025",
        genre: "Comedy",
        age: "30+",
        rate: " 9.4"
    },
    {
        title: "BooDoon News Episode III",
        txt: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad iusto, culpa nam esse eius numquam, expedita distinctio aut perspiciatis magnam sint consectetur itaque! Odit ut quasi rem expedita consequatur aliquam.",
        type: "News",
        year: "2025",
        genre: "Comedy",
        age: "30+",
        rate: " 9.4"
    },
    {
        title: "BooDoon News Episode IV",
        txt: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad iusto, culpa nam esse eius numquam, expedita distinctio aut perspiciatis magnam sint consectetur itaque! Odit ut quasi rem expedita consequatur aliquam.",
        type: "News",
        year: "2025",
        genre: "Comedy",
        age: "30+",
        rate: " 9.4"
    },
    {
        title: "BooDoon News Episode V",
        txt: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad iusto, culpa nam esse eius numquam, expedita distinctio aut perspiciatis magnam sint consectetur itaque! Odit ut quasi rem expedita consequatur aliquam.",
        type: "News",
        year: "2025",
        genre: "Comedy",
        age: "30+",
        rate: " 9.4"
    }
];

function logout() {
    localStorage.setItem("bd-user", "");
    window.location.replace("../signin/");
}

function loadSavedMovies() {
    const username = localStorage.getItem("bd-user");
    if (localStorage.getItem(`bd-list-${username}`) == null || localStorage.getItem(`bd-list-${username}`) == "") {
        console.log("show");
        document.getElementById("exploreMessage").classList.add("show");
        return;
    }
    let list = localStorage.getItem(`bd-list-${username}`).split("|");
    let movies = document.getElementsByClassName("movieBox");
    let savedBtns = document.getElementsByClassName("saveBtnR");
    document.getElementById("exploreMessage").classList.remove("show");
    for (let i = 0; i < movies.length; i++) {
        for (let j = 0; j < list.length; j++) {
            if (String(i) == list[j]) {
                movies[i].classList.add("show");
                savedBtns[i].innerHTML = '<i class="fa-solid fa-bookmark"></i>';
            }
        }
    }
}

function start() {
    if (localStorage.getItem("bd-user") == "" || localStorage.getItem("bd-user") == null) {
        window.location.replace("../signin/");
    }
    let user = localStorage.getItem("bd-user");
    let usernameTextList = user.split(" ");
    let usernameLogo = "";
    if (usernameTextList.length == 1) {
        usernameLogo = usernameTextList[0].slice(0,1).toUpperCase();
    } else {
        usernameLogo = usernameTextList[0].slice(0,1).toUpperCase() + usernameTextList[1].slice(0,1).toUpperCase();
    }
    document.getElementById("userBoxIcon").innerHTML = usernameLogo;
    document.getElementById("userBoxTxt").innerHTML = user;
    loadSavedMovies();
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
        document.getElementById("readMoreRate").innerHTML = moviesInfo[x].rate + '<img class="imdbLogo" src="src/IMDB.png">';
    }
}

function toggleSave(id) {
    const username = localStorage.getItem("bd-user");
    if (localStorage.getItem(`bd-list-${username}`) == null || localStorage.getItem(`bd-list-${username}`) == "") {
        localStorage.setItem(`bd-list-${username}`, id);
        savedBtns[id].innerHTML = '<i class="fa-solid fa-bookmark"></i>';
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
    }
    let movies = document.getElementsByClassName("movieBox");
    let savedBtns = document.getElementsByClassName("saveBtnR");
    for (let i = 0; i < movies.length; i++) {
        movies[i].classList.remove("show");
        savedBtns[i].innerHTML = '<i class="fa-regular fa-bookmark"></i>';
    }
    loadSavedMovies();
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