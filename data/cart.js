export const cart = [];

export function addtocart(productId){

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
}


