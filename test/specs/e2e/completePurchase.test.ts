import { ShippingAddressUi } from "../../../customTypes/shippingAddressUi";
import {LoginPage} from '../../../pages/loginPage';
import { ProductPage } from "../../../pages/productsPage";
import { CardDetails } from "../../../customTypes/cardDetails";
import { AddToCartPage } from "../../../pages/addToCartPage";
import { CheckOutPage } from "../../../pages/checkoutPage";
import { MyCartPage } from "../../../pages/myCartPage";

let loginPage : LoginPage;
let productPage: ProductPage;
let addToCartPage: AddToCartPage;
let checkOutPage: CheckOutPage;
let myCartPage: MyCartPage;



describe('Add item to cart', () => {
    before(async () => {
        loginPage = new LoginPage();
        productPage = new ProductPage();
        addToCartPage = new AddToCartPage();
        checkOutPage = new CheckOutPage();
        myCartPage = new MyCartPage();
    });

    it('Add first item to cart', async () => {
        const username: string = 'bob@example.com';
        const password: string = '10203040';
        const shippingAddressDetails: ShippingAddressUi = {
            fullName: 'Rebecca Winter',
            addressLine1: 'Mandorley 112',
            addressLine2: 'Entrance 1',
            city: 'Truro',
            state: 'Cornwall',
            zipCode: 89750,
            country: 'United Kingdom'
        };
        const cardDetails: CardDetails = {
            fullName: 'Rebecca Winter',
            cardNumber: '325812657568789',
            expirationDate: '0325',
            securityCode: 123
        }

        await loginPage.login(username, password);
        await productPage.clickOnFirstProduct();
        await addToCartPage.addToCart();
        await addToCartPage.clickCartIcon();
        await myCartPage.clickProceedToCheckoutButton();
        await checkOutPage.enterShippingAddressDetails(shippingAddressDetails);
        await checkOutPage.clickToPaymentButton();
        await checkOutPage.enterCardDetails(cardDetails);
        await checkOutPage.clickReviewOrderButton();
        await checkOutPage.clickPlaceOrderButton();
        await checkOutPage.clickContinueShoppingButton();
        
    });
});