import {products} from './product-data.js'
const renderBtn = document.getElementById('render')


function getProductHTML(){
    let productHTML = ''

    products.forEach(function(product) {
    productHTML += `
        <div>
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


//pull through products when specific category is selected