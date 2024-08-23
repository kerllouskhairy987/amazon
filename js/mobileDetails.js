/*
    -- [1] Drawing Products In [parent_mobiles] ID in [mobileDetails.html] 
    -- ==> Array Of Data At [dataPages.js] At Line [1163]
*/ 
let parentMobiles = document.querySelector("#parent_mobiles");

mobileArr.map((ele) => {
    parentMobiles.innerHTML += `
        <div class="bg-white p-5">
            <img class="mx-auto h-44 hover:opacity-90"
                src="${ele.imgUrl}" loading="${ele.loading}"
                alt="Product Deals">
            <div class="bg-gray-50 p-2 my-5">
                <h3 class="my-3 text-xl font-bold">${ele.title}</h3>
                <p>⭐⭐⭐⭐</p>
                <div class="my-5 flex gap-2 ">
                    <span class="block relative -top-2 text-xs">EGP</span>
                    <span class="font-bold">${ele.price}</span>
                    <span class="block relative -top-2 text-xs">00</span>
                </div>
                <p class="text-sm mb-3">${ele.desc}</p>
                <button class="bg-yellow-400 rounded py-2 px-5 active:scale-90">Add to cart</button>
            </div>
        </div>
    `
});
