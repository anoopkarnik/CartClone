var products = [
    {name:"camera", headline:"Best Camera ever", price:"1000", image:"https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg"},
    {name:"headphone", headline:"Best Headphone ever", price:"100", image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"},
    {name:"watches", headline:"Best Watch ever", price:"10", image:"https://burst.shopifycdn.com/photos/wrist-watches.jpg?width=1000&format=pjpg&exif=0&iptc=0"},
    {name:"skin care kit", headline:"Best Skin Care ever", price:"50", image:"https://plus.unsplash.com/premium_photo-1661769750859-64b5f1539aa8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"},
]
var popular = [
    {name:"camera", headline:"Best Camera ever", price:"1000", image:"https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg"},
    {name:"headphone", headline:"Best Headphone ever", price:"100", image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"},
]
var cart = []


function addProduct(){
    var clutter = ""
    products.forEach(function(product,index){
        clutter += ` <div class="product w-fit rounded-xl p-2 bg-white">
        <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl"> 
        <img src="${product.image}"/></div>
        <div class="data w-full px-2 py-5">
            <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
            <div class="flex justify-between w-full items-center mt-2">
                <div class="w-1/2">
                    <h3 class="font-semibold opacity-20">${product.headline}</h3>
                    <h4 class="font-semibold mt-2">$${product.price}</h4>
                </div>
                <button data-index="${index}" class="add-button w-10 h-10 rounded-full shader text-yellow-400">
                <i data-index="${index}" class="ri-add-line"></i></button>
                </div>
            </div>
        </div>`
    })
    document.querySelector(".products").innerHTML = clutter
}

function addPopular(){
    var clutter = "";
    popular.forEach(function(pop){
        clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
        <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
            <img class="w-full h-full object-cover"
                src="${pop.image}"
                alt="">
        </div>
        <div class="data py-2 w-full">
            <h1 class="leading-none font-semibold">${pop.name}</h1>
            <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${pop.headline}</h4>
            <h4 class="mt-3 font-semibold text-zinc-500">$${pop.price}</h4>
        </div>
    </div>`
    })
    document.querySelector(".populars").innerHTML = clutter
}

function addToCart(){
    document.querySelector(".products").addEventListener("click", function(details){
        if (details.target.classList.contains("add-button")){
            cart.push(products[details.target.dataset.index])
            console.log(cart)
        }
    })
}

function showCart(){
    document.querySelector(".carticon").addEventListener("click", function(){
        document.querySelector(".cartexpnd").style.display = "block"
        var clutter = ""
        cart.forEach(function(item,index){
            clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg">
            <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
                <img class="w-full h-full object-cover" src="${item.image}" alt=""/>
            </div>
            <div class="data">
                <h3 class="font-semibold">${item.name}</h3>
                <h5 class="text-sm font-semibold opacity-80">$${item.price}</h5>
            </div>
            </div>`
        })
        document.querySelector(".cartexpnd").innerHTML = clutter
    })
}


addProduct()
addPopular()
addToCart()
showCart()