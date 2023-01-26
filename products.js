import {products} from './product-data.js'

const radiosEl = document.getElementById('radios')


//Listens for what Cateogory button is selected
radiosEl.addEventListener('change', pullSelectedCategory)

//Pull through products when specific category is selected
function pullSelectedCategory(){
    const selected = document.querySelector("input[type='radio']:checked").value
    const selectedCategoryArray = products.filter(function(product){
        if (product.category === selected){
            return product.category.includes(selected)
        }
    })
    
    //Produce HTML to render
    let productHTML = ''

    selectedCategoryArray.forEach(function(product) {
    productHTML += `
        <div class='product-tile ${product.category}'>
            <img src='${product.picture}' alt='image of product'>
            <p>${product.name}<p>
            <p>More Information <a href='${product.link}'>Here</a><p>
        </div>
    `
})

//Render HTML to page
document.getElementById('product-list').innerHTML = productHTML
}




//These load all products on page initially
function getProductHTML(){
    let productHTML = ''

    products.forEach(function(product) {
    productHTML += `
        <div class='product-tile ${product.category}'>
            <img src='${product.picture}' alt='image of product'>
            <p>${product.name}<p>
            <p>More Information <a href='${product.link}'>Here</a><p>
        </div>
    `
})
return productHTML
}


function renderProducts() {
    document.getElementById('product-list').innerHTML = getProductHTML()
}

renderProducts()