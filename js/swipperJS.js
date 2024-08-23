/*
    -- This File Handle The Animation Of Slides
    -- These Slides Are Related To [index.js] File
 */


function createSwiper(selector, options = {}) {
    return new Swiper(selector, {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            500: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 5,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 6,
                spaceBetween: 50,
            },
        },
        ...options
    });
}
// -- ==> [1] Slide Animation For [First- Seventh] Slide At [ We Use It At [29] ==> This Is The Number Of Line IN index.js]
createSwiper(".slideProducts");

// -- ==> [1] Slide Animation For Second Slide At [ We Use It At [48] ==> This Is The Number Of Line IN index.js]
createSwiper(".slideProductsTwo", {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    }
});

// -- ==> [1] Slide AnimationFor For Third Slide At [We Use It At  [70] ==> This Is The Number Of Line IN index.js]
createSwiper(".slideProductsThree", {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 1500,
});

// -- ==> [1] Slide AnimationFor For Fourth Slide At [ We Use It At [92] ==> This Is The Number Of Line IN index.js]
// Slider Products Four
createSwiper(".slideProductsFour", {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    }
});

// -- ==> [1] Slide AnimationFor For Fifth Slide At [ We Use It At [115] ==> This Is The Number Of Line IN index.js]
createSwiper(".slideProductsFive", {
    loop: true,
    autoplay: {
        delay: 1,
        disableOnInteraction: false,
    },
    speed: 10000,
    freeMode: true,
});

// -- ==> [1] Slide AnimationFor For Sixth Slide At [ We Use It At [138] ==> This Is The Number Of Line IN index.js]
createSwiper(".slideProductsSix", {
    loop: true,
});

// -- ==> [1] Slide AnimationFor For Eightth Slide At [ We Use It At [138] ==> This Is The Number Of Line IN index.js]
createSwiper(".slideProductsEight", {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    }
});
