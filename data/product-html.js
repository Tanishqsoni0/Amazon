import {products} from '../data/products.js';
import {cart,addtocart} from '../data/cart.js';
let productsHTML='';

products.forEach((item) => {
    
    productsHTML += `<div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src=${item.image}>
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${item.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${item.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${item.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(item.priceCents/100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary" data-product-name="${item.name}"
          data-product-id="${item.id}">
            Add to Cart
          </button>
        </div>`
})
document.querySelector('.products-grid').innerHTML=productsHTML;


document.querySelectorAll('.add-to-cart-button').forEach((button) =>{
    button.addEventListener('click' , () => {

        const productId = button.dataset.productId;

        addtocart(productId);
        
        let cartquantity = 0;

        cart.forEach((items) => {
            cartquantity += items.Quantity;
            document.querySelector('.cart-quantity').innerHTML = cartquantity
        })
        
        document.querySelector('.cart-quantity').innerHTML = cartquantity
    })
})
