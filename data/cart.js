const cart = [];

document.querySelectorAll('.add-to-cart-button').forEach((button) =>{
    button.addEventListener('click' , () => {

        const productId = button.dataset.productId;
        let matchingitem ;

        cart.forEach((items) => {
            if(productId === items.Id){
                matchingitem = items;
            }
        });    
        if(matchingitem){
            matchingitem.Quantity ++;
        }
        else{
            cart.push({
                Id: productId,
                Quantity : 1
            })
        }
        console.log(cart);
    })
})
