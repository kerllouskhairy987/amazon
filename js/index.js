
let userSigned = document.getElementById("userSigned")
if (localStorage.key(0) !== null) {
    userSigned.innerHTML = "You have an account";
}

/* ******************************************************
    -- These Products Are Drawen With Js In [index.html] Page
    -- From Line [256] TO Line [260]
    -- Contant  
        ==> [2] Drawen Data    ===> The Array Of Data Is IN [dataindex.js] File
*******************************************************  * */
let homeProducts = document.getElementById("homeProducts");

fisrtPartProdusts.map((ele) => {
    homeProducts.innerHTML += `
        <div class="py-5 bg-white rounded">
            <h2 class="title-home">${ele.title}</h2>
            <img class="w-full h-72" src="${ele.imgUrl}" alt="${ele.alt}">
            <a class="read-more-home" href="#">See More</a>
        </div>
    `
})
/* *********************************************************
    -- NOTE [Fisrt Slide === Seventh Slide]
    -- These Products Are Drawen With Js In [index.html] Page
    -- From Line [271] TO Line [281]
    -- Contant  
        ==> [1] Slide Animation ===> This Code IN [swipperJS.js] File
        ==> [2] Drawen Slide    ===> The Array Of Data Is IN [dataindex.js] File
*********************************************************** */
let parentOfFisrtSlide = document.querySelectorAll(".fisrt-slide");

fisrtSlide.map((ele) => {
    for (let i = 0; i < parentOfFisrtSlide.length; i++) {
        parentOfFisrtSlide[i].innerHTML += `
            <div class="swiper-slide">
                <img class="min-w-full" src="${ele.imgUrl}" alt="${ele.alt}">
            </div>
        `
    }
});
/* *********************************************************
    -- Second Slide
    -- These Products Are Drawen With Js In [index.html] Page
    -- From Line [293] TO Line [304]
    -- Contant  
        ==> [1] Slide Animation ===> This Code IN [swipperJS.js] File
        ==> [2] Drawen Slide    ===> The Array Of Data Is IN [dataindex.js] File
*********************************************************** */
let parentOfSecondSlide = document.querySelector(".second-slide");

secondSlide.map((ele) => {
    parentOfSecondSlide.innerHTML += `
        <div class="swiper-slide">
            <img class="h-40 mx-auto" src="${ele.imgUrl}" alt="${ele.alt}">
            <div class="flex mt-2 items-center">
                <p class="bg-red-600 text-white p-2 me-1 rounded text-[8px] flex-nowrap min-w-fit ">${ele.para}</p>
                <a title="White Friday Deal" class="text-xs text-red-600 line-clamp-1 font-bold"
                    href="#">${ele.link}</a>
            </div>
        </div>
    `
})
/* *********************************************************
    -- Third Slide
    -- These Products Are Drawen With Js In [index.html] Page
    -- From Line [294] TO Line [304]
    -- Contant  
        ==> [1] Slide Animation ===> This Code IN [swipperJS.js] File
        ==> [2] Drawen Slide    ===> The Array Of Data Is IN [dataindex.js] File
*********************************************************** */
let parentOfSlideThree = document.querySelector(".third-slide");

thirdSlide.map((ele) => {
    parentOfSlideThree.innerHTML += `
        <div class="swiper-slide">
            <img class="h-40 mx-auto" src="${ele.imgUrl}" alt="${ele.alt}">
            <div class="flex mt-2 items-center">
                <p class="bg-red-600 text-white p-2 me-1 rounded text-[8px] flex-nowrap min-w-fit ">${ele.para}</p>
                <a title="White Friday Deal" class="text-xs text-red-600 line-clamp-1 font-bold"
                    href="#">${ele.link}</a>
            </div>
        </div>
    `
})
/* *********************************************************
    -- Fourth Slide
    -- These Products Are Drawen With Js In [index.html] Page
    -- From Line [370] TO Line [380]
    -- Contant  
        ==> [1] Slide Animation ===> This Code IN [swipperJS.js] File
        ==> [2] Drawen Slide    ===> The Array Of Data Is IN [dataindex.js] File
*********************************************************** */
let parentOfFourthSlide = document.querySelector(".fourth-slide");

fourthSlide.map((ele, index) => {
    parentOfFourthSlide.innerHTML += `
        <div class="swiper-slide">
            <img class="h-40 mx-auto" src="${ele.imgUrl}" alt="${ele.alt}">
            <div class="flex mt-2 items-center">
                <p class="bg-red-600 text-white p-2 me-1 rounded text-[8px] flex-nowrap min-w-fit ">${ele.para}</p>
                <a title="White Friday Deal" class="text-xs text-red-600 line-clamp-1 font-bold"
                    href="#">${ele.link}</a>
            </div>
        </div>
    `
});

/* *********************************************************
    -- Fifth Slide
    -- These Products Are Drawen With Js In [index.html] Page
    -- From Line [370] TO Line [380]
    -- Contant  
        ==> [1] Slide Animation ===> This Code IN [swipperJS.js] File
        ==> [2] Drawen Slide    ===> The Array Of Data Is IN [dataindex.js] File
*********************************************************** */
let parentOfFifthSlide = document.querySelector(".fifth-slide");

fifthSlide.map((ele) => {
    parentOfFifthSlide.innerHTML += `
        <div class="swiper-slide">
            <img class="h-40 mx-auto" src="${ele.imgUrl}" alt="${ele.alt}">
            <div class="flex mt-2 items-center">
                <p class="bg-red-600 text-white p-2 me-1 rounded text-[8px] flex-nowrap min-w-fit ">${ele.para}</p>
                <a title="White Friday Deal" class="text-xs text-red-600 line-clamp-1 font-bold"
                    href="#">${ele.link}</a>
            </div>
        </div>
    `
});

/* *********************************************************
    -- Sixth Slide
    -- These Products Are Drawen With Js In [index.html] Page
    -- From Line [449] TO Line [459]
    -- Contant  
        ==> [1] Slide Animation ===> This Code IN [swipperJS.js] File
        ==> [2] Drawen Slide    ===> The Array Of Data Is IN [dataindex.js] File
*********************************************************** */
let parentOfSixthSlide = document.querySelector(".sixth-slide");

sixthSlide.map((ele) => {
    parentOfSixthSlide.innerHTML += `
        <div class="swiper-slide">
            <img class="h-40 mx-auto" src="${ele.imgUrl}" alt="${ele.alt}">
            <div class="flex mt-2 items-center">
                <p class="bg-red-600 text-white p-2 me-1 rounded text-[8px] flex-nowrap min-w-fit ">${ele.para}</p>
                <a title="White Friday Deal" class="text-xs text-red-600 line-clamp-1 font-bold"
                    href="#">${ele.link}</a>
            </div>
        </div>
    `
})

/* *********************************************************
    -- Eightth Slide
    -- These Products Are Drawen With Js In [index.html] Page
    -- From Line [449] TO Line [459]
    -- Contant  
        ==> [1] Slide Animation ===> This Code IN [swipperJS.js] File
        ==> [2] Drawen Slide    ===> The Array Of Data Is IN [dataindex.js] File
*********************************************************** */
let parentOfEightthSlide = document.querySelector(".eightth-slide");

eightthSlide.map((ele) => {
    parentOfEightthSlide.innerHTML += `
        <div class="swiper-slide">
            <img class="h-40 mx-auto" src="${ele.imgUrl}" alt="${ele.alt}">
            <div class="flex mt-2 items-center">
                <p class="bg-red-600 text-white p-2 me-1 rounded text-[8px] flex-nowrap min-w-fit ">${ele.para}</p>
                <a title="White Friday Deal" class="text-xs text-red-600 line-clamp-1 font-bold"
                    href="#">${ele.link}</a>
            </div>
        </div>
    `
})