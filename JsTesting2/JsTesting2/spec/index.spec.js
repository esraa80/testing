


const User = require('../main');

const paymentModel = {
    goToVerifyPage: jasmine.createSpy(),
    returnBack: jasmine.createSpy(),
    isVerify: jasmine.createSpy().and.returnValue(true),
};

describe('User class',()=>{
    let user;
   
    beforeEach(()=>{
        user = new User('safynaz Abdelraheem','password');
    });

     // test this function's logic 
     it (`test this function's logic `,()=>{
        let product ={name:'fruit',price:20};
        user. addToCart(product);
        expect(user.cart).toContain(product);
     });


       // test this function's logic 
       it(`test this function's logic `, () => {
        let products = [
            { name: 'fruit', price: 20 },
            { name: 'vegatables', price: 30 },
        ];
        products.forEach((product) => user.addToCart(product));
        let totalPrice = user.calculateTotalCartPrice();
        expect(totalPrice).toBe(50);
    });


    //Creates order with products in cart and does the payment process
    it('Creates order with products in cart and does the payment process', () => {
        const result = user.checkout(paymentModel);
        expect(paymentModel.goToVerifyPage).toHaveBeenCalled();
        expect(paymentModel.returnBack).toHaveBeenCalled();
        expect(paymentModel.isVerify).toHaveBeenCalled();
        expect(result).toBe(true);
    });


});