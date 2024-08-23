/**
    -- Script For [gorcery.html] Page
    -- Drawen The Products In [parent_grocery_products] ID
    -- [231] Is The Line In Html Page
    -- ==> Array Of Data At [dataPages.js] At Line [559]
 */
let parentGroceryProducts = document.querySelector("#parent_grocery_products");

groceryProducts.map((ele) => {
    parentGroceryProducts.innerHTML += `
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
})