// const img = document.querySelector("img");
// const button = document.querySelector("button");

// button.addEventListener("click", function (e) {
//     img.classList.add("img-clicked")
// })


// let container = document.querySelector(".mouse");
// let circle = document.querySelector(".circle");

// container.addEventListener("mousemove", function (e) {
//     e.stopPropagation();
//     circle.setAttribute("style", `top: ${e.pageY - 1}px; left: ${e.pageX + 10}px`);
// });


let sectionClick = document.querySelector("section.click")
let reverse = false;

sectionClick.addEventListener("click", function (e) {
    reverse = !reverse;
    // e.target is the clicked element
    if (reverse && e.target.nodeName == "BUTTON") {
        sectionClick.querySelector("img").style.opacity = "0.7",
            sectionClick.querySelector("img").style.border = "5px double DARKCYAN",
            sectionClick.querySelector("img").style.filter = "invert(80%)";
    } else if (!reverse) {
        sectionClick.querySelector("img").style.opacity = "1.0",
            sectionClick.querySelector("img").style.filter = "invert(0%)",
            sectionClick.querySelector("img").style.border = "none";
    }
});


//+++++++++++++++++++++++++++++++++++++++++++++++++++


let circle = document.querySelector(".circle")

document.addEventListener("mousemove", function (e) {
    circle.style.left = e.pageX + 5 + "px";
    circle.style.top = e.pageY + 5 + "px";
})


//++++++++++++++++++++++++++++++++++++++++++++++++++++


let keys = document.querySelector(".keys")

document.addEventListener("keypress", function (e) {
    console.log(e.code[3]);

    if (e.code[3] == keys.children[0].innerText) {
        keys.children[0].style.backgroundColor = "purple";
    } else if (e.code[3] == keys.children[1].innerText) {
        keys.children[1].style.backgroundColor = "purple";
    }
    else if
        (e.code[3] == keys.children[2].innerText) {
        keys.children[2].style.backgroundColor = "purple";
    }
    else if
        (e.code[3] == keys.children[3].innerText) {
        keys.children[3].style.backgroundColor = "purple";
    }
});



// //W,A,S,D
// let keys = document.querySelector(".keys");
// window.addEventListener("keydown", function () {
//     let key = event.keyCode;
//     switch (key) {
//         case 87 /*W*/:
//             console.log("W is pressed");
//             document.querySelector(
//                 ".keys button:nth-of-type(1)"
//             ).style.backgroundColor = "orange";
//             break;
//         case 65 /*A*/:
//             console.log("A is pressed");
//             document.querySelector(
//                 ".keys button:nth-of-type(2)"
//             ).style.backgroundColor = "orange";
//             break;
//         case 83 /*S*/:
//             console.log("S is pressed");
//             document.querySelector(
//                 ".keys button:nth-of-type(3)"
//             ).style.backgroundColor = "orange";
//             break;
//         case 68 /*D*/:
//             console.log("D is pressed");
//             document.querySelector(
//                 ".keys button:nth-of-type(4)"
//             ).style.backgroundColor = "orange";
//             break;
//     }
// });

