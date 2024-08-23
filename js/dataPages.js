/*
    -- Products And slides In [index.html] Page
    -- We Use These Data In [index.js] File TO Handle Data And Draw Them In Browser
 */
// -- [Data For Index Page] Array Data For First Products In [index.html] Page [ We Use It At [7] ==> This Is The Number Of Line IN [index.js]]
let fisrtPartProdusts = [
    {
        title: "Camera & accessories",
        imgUrl: "img/1 (1).jpg",
        alt: "Product One"
    },
    {
        title: "New arrivals | Bags & Wallets",
        imgUrl: "img/2 (1).jpg",
        alt: "Product Two"
    },
    {
        title: "Flash Deals",
        imgUrl: "img/3 (1).jpg",
        alt: "Product Three"
    },
    {
        title: "Deals | Kitchen appliances",
        imgUrl: "img/4 (1).jpg",
        alt: "Product Four"
    },
    {
        title: "Prime deals | Sports wear | Top brands",
        imgUrl: "img/1 (2).jpg",
        alt: "Product Five"
    },
    {
        title: "Prime deals | Travelpags | Free returns",
        imgUrl: "img/2 (2).jpg",
        alt: "Product Sex"
    },
    {
        title: "School & Office supplies | Wide selection",
        imgUrl: "img/3 (2).jpg",
        alt: "Product Seven"
    },
    {
        title: "School & Office supplies | Wide selection",
        imgUrl: "img/4 (2).jpg",
        alt: "Product Eight"
    }
]


// -- ==> [2] Array Data For [First - Seventh] Slide [ We Use It At [30] ==> This Is The Number Of Line IN [index.js]]
let fisrtSlide = [
    {
        id: 1,
        imgUrl: "img/slideIndex/1 (3).jpg",
        alt: "Slide One"
    },
    {
        id: 2,
        imgUrl: "img/slideIndex/1.jpg",
        alt: "Slide Two"
    },
    {
        id: 3,
        imgUrl: "img/slideIndex/10.jpg",
        alt: "Slide Three"
    },
    {
        id: 4,
        imgUrl: "img/slideIndex/2.jpg",
        alt: "Slide Four"
    },
    {
        id: 5,
        imgUrl: "img/slideIndex/3.jpg",
        alt: "Slide Five"
    },
    {
        id: 6,
        imgUrl: "img/slideIndex/4.jpg",
        alt: "Slide Sex"
    },
    {
        id: 7,
        imgUrl: "img/slideIndex/5.jpg",
        alt: "Slide Seven"
    },
    {
        id: 8,
        imgUrl: "img/slideIndex/6.jpg",
        alt: "Slide Eight"
    },
    {
        id: 9,
        imgUrl: "img/slideIndex/7.jpg",
        alt: "Slide 9"
    },
    {
        id: 10,
        imgUrl: "img/slideIndex/8.jpg",
        alt: "Slide Ten"
    },
    {
        id: 11,
        imgUrl: "img/slideIndex/9.jpg",
        alt: "Slide Eleven"
    },
]

// -- ==> [2] Array Data For Second Slide [ We Use It At [49] ==> This Is The Number Of Line IN [index.js]]
let secondSlide = [
    {
        id: 1,
        imgUrl: "img/slideIndex2/1.jpg",
        alt: "Slide One",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 2,
        imgUrl: "img/slideIndex2/10.jpg",
        alt: "Slide Two",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 3,
        imgUrl: "img/slideIndex2/2.jpg",
        alt: "Slide Three",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 4,
        imgUrl: "img/slideIndex2/6.jpg",
        alt: "Slide Four",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 5,
        imgUrl: "img/slideIndex2/10.jpg",
        alt: "Slide Five",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 6,
        imgUrl: "img/slideIndex2/4.jpg",
        alt: "Slide Sex",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 7,
        imgUrl: "img/slideIndex2/5.jpg",
        alt: "Slide Seven",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 8,
        imgUrl: "img/slideIndex2/3.jpg",
        alt: "Slide Eight",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 9,
        imgUrl: "img/slideIndex2/7.jpg",
        alt: "Slide 9",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 10,
        imgUrl: "img/slideIndex2/8.jpg",
        alt: "Slide Ten",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 11,
        imgUrl: "img/slideIndex2/9.jpg",
        alt: "Slide Eleven",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
]

// -- ==> [2] Array Data For Third Slide [ We Use It At [71] ==> This Is The Number Of Line IN [index.js]]
let thirdSlide = [
    {
        id: 1,
        imgUrl: "img/slideIndex3/1.jpg",
        alt: "Slide One",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 2,
        imgUrl: "img/slideIndex3/10.jpg",
        alt: "Slide Two",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 3,
        imgUrl: "img/slideIndex3/2.jpg",
        alt: "Slide Three",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 4,
        imgUrl: "img/slideIndex3/3.jpg",
        alt: "Slide Four",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 5,
        imgUrl: "img/slideIndex3/4.jpg",
        alt: "Slide Five",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 6,
        imgUrl: "img/slideIndex3/5.jpg",
        alt: "Slide Sex",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 7,
        imgUrl: "img/slideIndex3/6.jpg",
        alt: "Slide Seven",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 8,
        imgUrl: "img/slideIndex3/7.jpg",
        alt: "Slide Eight",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 9,
        imgUrl: "img/slideIndex3/8.jpg",
        alt: "Slide 9",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 10,
        imgUrl: "img/slideIndex3/9.jpg",
        alt: "Slide Ten",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
]
// -- ==> [2] Array Data For Third Slide [[93] ==> This Is The Number Of Line IN [index.js]]
let fourthSlide = [
    {
        id: 1,
        imgUrl: "img/slideIndex4/1.jpg",
        alt: "Slide One",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 2,
        imgUrl: "img/slideIndex4/10.jpg",
        alt: "Slide Two",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 3,
        imgUrl: "img/slideIndex4/2.jpg",
        alt: "Slide Three",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 4,
        imgUrl: "img/slideIndex4/3.jpg",
        alt: "Slide Four",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 5,
        imgUrl: "img/slideIndex4/4.jpg",
        alt: "Slide Five",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 6,
        imgUrl: "img/slideIndex4/5.jpg",
        alt: "Slide Sex",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 7,
        imgUrl: "img/slideIndex4/6.jpg",
        alt: "Slide Seven",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 8,
        imgUrl: "img/slideIndex4/7.jpg",
        alt: "Slide Eight",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 9,
        imgUrl: "img/slideIndex4/8.jpg",
        alt: "Slide 9",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 10,
        imgUrl: "img/slideIndex4/9.jpg",
        alt: "Slide Ten",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
]

// -- ==> [2] Array Data For Fifth Slide [[116] ==> This Is The Number Of Line IN [index.js]]
let fifthSlide = [
    {
        id: 1,
        imgUrl: "img/slideIndex5/1.jpg",
        alt: "Slide One",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 2,
        imgUrl: "img/slideIndex5/10.jpg",
        alt: "Slide Two",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 3,
        imgUrl: "img/slideIndex5/2.jpg",
        alt: "Slide Three",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 4,
        imgUrl: "img/slideIndex5/3.jpg",
        alt: "Slide Four",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 5,
        imgUrl: "img/slideIndex5/4.jpg",
        alt: "Slide Five",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 6,
        imgUrl: "img/slideIndex5/5.jpg",
        alt: "Slide Sex",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 7,
        imgUrl: "img/slideIndex5/6.jpg",
        alt: "Slide Seven",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 8,
        imgUrl: "img/slideIndex5/7.jpg",
        alt: "Slide eight",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 9,
        imgUrl: "img/slideIndex5/8.jpg",
        alt: "Slide 9",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 10,
        imgUrl: "img/slideIndex5/9.jpg",
        alt: "Slide Ten",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
]

// -- ==> [2] Array Data For Sixth Slide [[139] ==> This Is The Number Of Line IN [index.js]]
let sixthSlide = [
    {
        id: 1,
        imgUrl: "img/slideIndex6/1.jpg",
        alt: "Slide One",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 2,
        imgUrl: "img/slideIndex6/10.jpg",
        alt: "Slide Two",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 3,
        imgUrl: "img/slideIndex6/2.jpg",
        alt: "Slide Three",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 4,
        imgUrl: "img/slideIndex6/3.jpg",
        alt: "Slide Four",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 5,
        imgUrl: "img/slideIndex6/4.jpg",
        alt: "Slide Five",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 6,
        imgUrl: "img/slideIndex6/5.jpg",
        alt: "Slide Sex",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 7,
        imgUrl: "img/slideIndex6/6.jpg",
        alt: "Slide Seven",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 8,
        imgUrl: "img/slideIndex6/7.jpg",
        alt: "Slide eight",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 9,
        imgUrl: "img/slideIndex6/8.jpg",
        alt: "Slide 9",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 10,
        imgUrl: "img/slideIndex6/9.jpg",
        alt: "Slide Ten",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
]

// -- ==> [2] Array Data For Eightth Slide [[164] ==> This Is The Number Of Line IN [index.js]]
let eightthSlide = [
    {
        id: 1,
        imgUrl: "img/slideIndex7/1.jpg",
        alt: "Slide One",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 2,
        imgUrl: "img/slideIndex7/10.jpg",
        alt: "Slide Two",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 3,
        imgUrl: "img/slideIndex7/2.jpg",
        alt: "Slide Three",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 4,
        imgUrl: "img/slideIndex7/3.jpg",
        alt: "Slide Four",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 5,
        imgUrl: "img/slideIndex7/4.jpg",
        alt: "Slide Five",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 6,
        imgUrl: "img/slideIndex7/5.jpg",
        alt: "Slide Sex",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 7,
        imgUrl: "img/slideIndex7/6.jpg",
        alt: "Slide Seven",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 8,
        imgUrl: "img/slideIndex7/7.jpg",
        alt: "Slide eight",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 9,
        imgUrl: "img/slideIndex7/8.jpg",
        alt: "Slide 9",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
    {
        id: 10,
        imgUrl: "img/slideIndex7/9.jpg",
        alt: "Slide Ten",
        para: "EGP 102.5 and under",
        link: "White Friday Deal",
    },
]

/*
    -- [1] Data For gorcery Page 
    -- [2] That Data Are Related To [gorcery.js] File
*/
let groceryProducts = [
    {
        id: 1,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/grocery/grocery-1.jpg",
        loading: "eager",
        title: "Fine Prestige 3 Ply Facial Tissue Soft",
        price: 62,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 2,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/grocery/grocery-2.jpg",
        loading: "eager",
        title: "El Arosa Egyptian Dust Black Tea 100g",
        price: 17,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 3,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/grocery/grocery-3.jpg",
        loading: "eager",
        title: "Molfix - Baby Diapers - Mega Pack - Xlarge Size 6",
        price: 335,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 4,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/grocery/grocery-4.jpg",
        loading: "eager",
        title: "Mini Ionic Brush Mini Ionic Brush Mini Ionic",
        price: 399,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 5,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/grocery/grocery-7.jpg",
        loading: "lazy",
        title: "elsaa solt elsaa solt elsaa solt elsaa solt",
        price: 5,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 6,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/grocery/grocery-5.jpg",
        loading: "lazy",
        title: "Care & more soft cream with glycerin 75 ml",
        price: 20,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 7,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/grocery/grocery-8.jpg",
        loading: "lazy",
        title: "Feba Salt 1 kg Dish For Automatic Dishwashing Salt",
        price: 39,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 8,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/grocery/grocery-9.jpg",
        loading: "lazy",
        title: "Huggies extra care diaper size 4, 8-14kg, 68pcs",
        price: 275,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 9,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/grocery/grocery-10.jpg",
        loading: "lazy",
        title: "Harpic original toilet cleaner, 100% limescale remover",
        price: 99,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 10,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/grocery/grocery-11.jpg",
        loading: "lazy",
        title: "Huggies extra care size 5, jumbo pack, (12-22 kg)",
        price: 295,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 11,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/grocery/grocery-11.jpg",
        loading: "lazy",
        title: "Papia Tissue - Toilet paper - 3 Ply - 12 Rolls",
        price: 95,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 12,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/grocery/grocery-12.jpg",
        loading: "lazy",
        title: "Fine Prestige 3 Ply Facial Tissue Soft pack, 550 Sheets",
        price: 125,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 13,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/grocery/grocery-7.jpg",
        loading: "lazy",
        title: "elsaa solt elsaa solt elsaa solt elsaa solt",
        price: 165,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 14,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/grocery/grocery-1.jpg",
        loading: "eager",
        title: "Fine Prestige 3 Ply Facial Tissue Soft",
        price: 62,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 15,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/grocery/grocery-2.jpg",
        loading: "eager",
        title: "El Arosa Egyptian Dust Black Tea 100g",
        price: 17,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 16,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/grocery/grocery-3.jpg",
        loading: "eager",
        title: "Molfix - Baby Diapers - Mega Pack - Xlarge Size 6",
        price: 335,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 17,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/grocery/grocery-4.jpg",
        loading: "eager",
        title: "Mini Ionic Brush Mini Ionic Brush Mini Ionic",
        price: 399,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 18,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/grocery/grocery-7.jpg",
        loading: "lazy",
        title: "elsaa solt elsaa solt elsaa solt elsaa solt",
        price: 5,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 19,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/grocery/grocery-5.jpg",
        loading: "lazy",
        title: "Care & more soft cream with glycerin 75 ml",
        price: 20,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 20,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/grocery/grocery-8.jpg",
        loading: "lazy",
        title: "Feba Salt 1 kg Dish For Automatic Dishwashing Salt",
        price: 39,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 21,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/grocery/grocery-9.jpg",
        loading: "lazy",
        title: "Huggies extra care diaper size 4, 8-14kg, 68pcs",
        price: 275,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 22,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/grocery/grocery-10.jpg",
        loading: "lazy",
        title: "Harpic original toilet cleaner, 100% limescale remover",
        price: 99,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 23,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/grocery/grocery-11.jpg",
        loading: "lazy",
        title: "Huggies extra care size 5, jumbo pack, (12-22 kg)",
        price: 295,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 24,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/grocery/grocery-11.jpg",
        loading: "lazy",
        title: "Papia Tissue - Toilet paper - 3 Ply - 12 Rolls",
        price: 95,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 25,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/grocery/grocery-12.jpg",
        loading: "lazy",
        title: "Fine Prestige 3 Ply Facial Tissue Soft pack, 550 Sheets",
        price: 125,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 26,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/grocery/grocery-7.jpg",
        loading: "lazy",
        title: "elsaa solt elsaa solt elsaa solt elsaa solt",
        price: 165,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
]

/*
    -- [1] Data For deals Page
    -- [2] These Data Are Related To deals.js File 
*/
let dealsProducts = [
    {
        id: 1,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/appliances/appliances-1.jpg",
        loading: "eager",
        title: "4 Burners Longlife Kimet Stainless Steel",
        price: 50,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 2,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/home%20decor/decor-2.jpg",
        loading: "eager",
        title: "Jalsa christmas flat leather door mats multicolor size",
        price: 172,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 3,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/home%20decor/decor-3.jpg",
        loading: "eager",
        title: "Jalsa christmas inspired pattern soft abstract shaggy",
        price: 213,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 4,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/home%20decor/decor-4.jpg",
        loading: "eager",
        title: "SUMGAR Black White Geometric Throw Pillow",
        price: 850,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 5,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/home%20decor/decor-7.jpg",
        loading: "eager",
        title: "4 Burners Longlife Kimet Stainless Steel",
        price: 50,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 6,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/home%20decor/decor-6.jpg",
        loading: "lazy",
        title: "TVS Electronics Full HD 2MP Cameras Combo KIT 8CH",
        price: 5779,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 7,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/elctronics/elctronics-7.jpg",
        loading: "lazy",
        title: "CD4001BE CD4001BE CD4001BE",
        price: 5779,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 8,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/elctronics/elctronics-8.jpg",
        loading: "lazy",
        title: "SN74HC10DR SN74HC10DR SN74HC10DR",
        price: 14,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 9,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/elctronics/elctronics-9.jpg",
        loading: "lazy",
        title: "Soundcore By Anker R50i True Wireless Earbuds 10mm",
        price: 814,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 10,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/elctronics/elctronics-10.jpg",
        loading: "lazy",
        title: "Samsung 65 Inch 4K UHD Smart LED TV with Built-in",
        price: 17299,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 11,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/home%20decor/decor-11.jpg",
        loading: "lazy",
        title: "Dear Rose 6 Pack Artificial Plants Small Fake Plants",
        price: 113,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 12,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/home%20decor/decor-12.jpg",
        loading: "lazy",
        title: "Venus 2 Pillow Hotel Cushion Cushion Cushion Soft",
        price: 195,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 13,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/appliances/appliances-1.jpg",
        loading: "lazy",
        title: "Sharp Air Conditioner Dust Cover",
        price: 50,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 14,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/appliances/appliances-2.jpg",
        loading: "lazy",
        title: "Carrier Dust Cover for Air Conditioner",
        price: 53,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 15,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/appliances/appliances-3.jpg",
        loading: "lazy",
        title: "SHARP Air Conditioner Cover 1.5 HP",
        price: 51,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 16,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/appliances/appliances-4.jpg",
        loading: "lazy",
        title: "Fresh washing machine - white",
        price: 1375,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 17,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/appliances/appliances-7.jpg",
        loading: "lazy",
        title: "Adapter for gas heaters replacement",
        price: 56,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 18,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/appliances/appliances-5.jpg",
        loading: "lazy",
        title: "Stretchy waterproof air conditioner",
        price: 3143,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 19,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/appliances/appliances-8.jpg",
        loading: "lazy",
        title: "Sharp Air Conditioner Cover, 2.25 Shape",
        price: 413,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 20,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/appliances/appliances-1.jpg",
        loading: "lazy",
        title: "4 Burners Longlife Kimet Stainless Steel",
        price: 508,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
]

/*
    -- [1] Data For electronic Page 
    -- [2] These Data Are Related To electronic.js File
*/
let electronicProducts = [
    {
        id: 1,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/elctronics/elctronics-1.jpg",
        loading: "eager",
        title: "FINTIE Hybrid Case Compatible with iPad Air",
        price: 435,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 2,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/elctronics/elctronics-2.jpg",
        loading: "eager",
        title: "Samsung Galaxy Watch6 Smartwatch (Silver, 44mm)",
        price: 13599,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 3,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/elctronics/elctronics-3.jpg",
        loading: "eager",
        title: "Samsung Galaxy Watch6 Classic Smartwatch",
        price: 16999,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 4,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/elctronics/elctronics-4.jpg",
        loading: "eager",
        title: "Samsung Galaxy A14 LTE, 128GB Storage",
        price: 6190,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 5,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/elctronics/elctronics-5.jpg",
        loading: "lazy",
        title: "Samsung Galaxy A54 - Dual SIM Mobile Phone Android",
        price: 15888,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 6,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/elctronics/elctronics-6.jpg",
        loading: "lazy",
        title: "TVS Electronics Full HD 2MP Cameras Combo KIT 8CH",
        price: 5779,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 7,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/elctronics/elctronics-7.jpg",
        loading: "lazy",
        title: "CD4001BE CD4001BE CD4001BE",
        price: 90,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 8,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/elctronics/elctronics-8.jpg",
        loading: "lazy",
        title: "SN74HC10DR SN74HC10DR SN74HC10DR",
        price: 14,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 9,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/elctronics/elctronics-9.jpg",
        loading: "lazy",
        title: "Soundcore By Anker R50i True Wireless Earbuds 10mm",
        price: 849,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 10,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/elctronics/elctronics-10.jpg",
        loading: "lazy",
        title: "Samsung 65 Inch 4K UHD Smart LED TV with Built-in",
        price: 17299,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 11,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/elctronics/elctronics-11.jpg",
        loading: "lazy",
        title: "Samsung galaxy a34 dual sim mobile phone android",
        price: 11111,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 12,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/elctronics/elctronics-12.jpg",
        loading: "lazy",
        title: "Oraimo OTW-330 FreePods Lite Havy Bass TWS",
        price: 111,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 13,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/elctronics/elctronics-13.jpg",
        loading: "lazy",
        title: "Samsung 32 Inch Full HD Smart LED TV with Built-in Receiver",
        price: 6469,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 14,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/elctronics/elctronics-14.jpg",
        loading: "lazy",
        title: "Samsung Galaxy A23 Dual SIM, 6GB RAM, 128GB 4G - Blue",
        price: 17559,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 15,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/elctronics/elctronics-15.jpg",
        loading: "lazy",
        title: "Soundcore a3991h11 by anker life p2i true wireless earbuds",
        price: 1118,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 16,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/elctronics/elctronics-16.jpg",
        loading: "lazy",
        title: "LG UHD TV UR78 50 4K Smart TV - 50UR78006LL.AFU earbuds",
        price: 14999,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 17,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/elctronics/elctronics-17.jpg",
        loading: "lazy",
        title: "LG 32 inch Series HD HDR Smart LED TV - 32LM637BPVA -",
        price: 7550,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 18,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/elctronics/elctronics-18.jpg",
        loading: "lazy",
        title: "Nokia G21 4gb ram, 128gb memory, finger print sensor - blue",
        price: 4099,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 19,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/elctronics/elctronics-19.jpg",
        loading: "lazy",
        title: "Lg uhd 4k tv 65 inch uq8000 series, cinema screen design 4k",
        price: 23999,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 20,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/elctronics/elctronics-20.jpg",
        loading: "lazy",
        title: "ST HCF4511BE ST HCF4511BE ST HCF4511BE ST HCF4511BE",
        price: 450,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
]

/*
    -- [1] Data For mobile Page 
    -- [2] These Data Are Related To mobile.js File
*/
let mobileTypeArr = [
    {
        id: 1,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/ProductTypePhones/Honor.jpg",
        loading: "eager",
        title: "Honor"
    },
    {
        id: 2,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/ProductTypePhones/huawei.jpg",
        loading: "eager",
        title: "huawei"
    },
    {
        id: 3,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/ProductTypePhones/iphone.jpg",
        loading: "eager",
        title: "iphone"
    },
    {
        id: 4,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/ProductTypePhones/Nokia.jpg",
        loading: "eager",
        title: "Nokia"
    },
    {
        id: 5,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/ProductTypePhones/Oppo.jpg",
        loading: "eager",
        title: "Oppo"
    },
    {
        id: 6,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/ProductTypePhones/Realme.jpg",
        loading: "eager",
        title: "Realme"
    },
    {
        id: 7,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/ProductTypePhones/samsung.jpg",
        loading: "eager",
        title: "samsung"
    },
    {
        id: 8,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/ProductTypePhones/Xiaomi.jpg",
        loading: "eager",
        title: "Xiaomi"
    },
]

/*
    -- [1] Data For mobileDetails Page 
    -- [2] These Data Are Related To mobileDetails.js File
*/
let mobileArr = [
    {
        id: 1,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/Phones/8.jpg",
        loading: "eager",
        title: "Apple iPhone 13 Pro Max 256GB Blue",
        price: 43000,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 2,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/Phones/3.jpg",
        loading: "eager",
        title: "Apple iPhone 13 Pro Max 256GB Blue",
        price: 36976,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 3,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/Phones/4.jpg",
        loading: "eager",
        title: "Apple iPhone 13 Pro Max 256GB Blue",
        price: 17076,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 4,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/Phones/5.jpg",
        loading: "eager",
        title: "Apple iPhone 13 Pro Max 256GB Blue",
        price: 36286,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 5,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/Phones/6.jpg",
        loading: "lazy",
        title: "Apple iPhone 13 Pro Max 256GB Blue",
        price: 34976,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 6,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/Phones/7.jpg",
        loading: "lazy",
        title: "Apple iPhone 13 Pro Max 256GB Blue",
        price: 29000,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 7,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/Phones/8.jpg",
        loading: "lazy",
        title: "Apple iPhone 13 Pro Max 256GB Blue",
        price: 24000,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 8,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/Phones/9.jpg",
        loading: "lazy",
        title: "Apple iPhone 13 Pro Max 256GB Blue",
        price: 18126,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 9,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/Phones/10.jpg",
        loading: "lazy",
        title: "Apple iPhone 13 Pro Max 256GB Blue",
        price: 13700,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 10,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/Phones/8.jpg",
        loading: "lazy",
        title: "Apple iPhone 13 Pro Max 256GB Blue",
        price: 43000,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 11,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/Phones/3.jpg",
        loading: "lazy",
        title: "Apple iPhone 13 Pro Max 256GB Blue",
        price: 36976,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 12,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/Phones/9.jpg",
        loading: "lazy",
        title: "Apple iPhone 13 Pro Max 256GB Blue",
        price: 18126,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 13,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/Phones/10.jpg",
        loading: "lazy",
        title: "Apple iPhone 13 Pro Max 256GB Blue",
        price: 13700,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 14,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/Phones/8.jpg",
        loading: "lazy",
        title: "Apple iPhone 13 Pro Max 256GB Blue",
        price: 43000,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 15,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/Phones/3.jpg",
        loading: "lazy",
        title: "Apple iPhone 13 Pro Max 256GB Blue",
        price: 36976,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 16,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/Phones/4.jpg",
        loading: "lazy",
        title: "Apple iPhone 13 Pro Max 256GB Blue",
        price: 36976,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 17,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/Phones/8.jpg",
        loading: "lazy",
        title: "Apple iPhone 13 Pro Max 256GB Blue",
        price: 43000,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 18,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/Phones/3.jpg",
        loading: "lazy",
        title: "Apple iPhone 13 Pro Max 256GB Blue",
        price: 36976,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 19,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/Phones/8.jpg",
        loading: "lazy",
        title: "Apple iPhone 13 Pro Max 256GB Blue",
        price: 36976,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 20,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/Phones/8.jpg",
        loading: "lazy",
        title: "Apple iPhone 13 Pro Max 256GB Blue",
        price: 43000,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
    {
        id: 21,
        imgUrl: "https://amazon-delta-sable.vercel.app/Images/Phones/8.jpg",
        loading: "lazy",
        title: "Apple iPhone 13 Pro Max 256GB Blue",
        price: 43000,
        desc: "15% OFF on first app order. Code APPX75 Get it as soon as Thursday, 2 November Fulfilled by Amazon - FREE Shipping",
    },
]