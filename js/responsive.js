// Responsive Header
document.getElementById("list").onclick = function () {
    document.getElementById("listLinks").classList.toggle("active");
}

document.getElementById("all_aside").onclick = function () {
    document.querySelector(".aside-part").classList.add("active");
    document.querySelector(".overlay").classList.add("active");
}

document.querySelector(".close-aside").onclick = function () {
    document.querySelector(".aside-part").classList.remove("active");
    document.querySelector(".overlay").classList.remove("active");
}

document.querySelector(".overlay").addEventListener("click", function () {
    document.querySelector(".overlay").classList.remove("active");
    document.querySelector(".aside-part").classList.remove("active");
})

// Scroll To Top Script
window.onscroll = function () {
    if (window.scrollY >= 500) {
        document.querySelector("#scrollToTop").style.transform = "scale(1)";
        console.log("done");
    } else {
        document.querySelector("#scrollToTop").style.transform = "scale(0)";
    }
}
document.querySelector("#scrollToTop").onclick = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}
