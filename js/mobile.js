/*
    -- Script For [mobile.html] Page
    -- These Products Are In [mobile-type] ID
    -- [230] Is The Line Number OF HTML
    -- ==> Array Of Data At [dataPages.js] At Line [1108]
*/
let mobileType = document.querySelector("#mobile_type");

mobileTypeArr.map((ele) => {
    mobileType.innerHTML += `
        <a class="bg-white p-5" title="mobile products page" href="mobileDetails.html">
            <img class="mx-auto h-44 hover:opacity-90"
                src="${ele.imgUrl}" loading="${ele.loading}"
                alt="Product Deals">
            <h3 class="my-5 text-xl font-bold text-blue-600 hover:text-red-600 text-center">${ele.title}</h3>
        </a>
    `
});
