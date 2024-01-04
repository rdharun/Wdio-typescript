
import * as assert from 'assert';
import { LoginPage } from "../../../pages/loginPage";
import { ProductPage } from "../../../pages/productsPage";
import { AddToCartPage } from "../../../pages/addToCartPage";
import { MyCartPage } from '../../../pages/myCartPage';

let loginPage : LoginPage;
let productPage: ProductPage;
let addToCartPage: AddToCartPage;
let myCartPage: MyCartPage;


describe("Product Price Comparison", () => {
    before(async () => {
        loginPage = new LoginPage();
        productPage = new ProductPage();
        addToCartPage = new AddToCartPage();
        myCartPage = new MyCartPage();
        await loginPage.login("bob@example.com", "10203040");
    });

    it("Assert the prices from both the pages", async() => {
        (await productPage.getBoltTshirtProductEle()).click();
        const boltTshirtPrice = await productPage.getBoltTshirtPrice();
        const cartPagePrice = await addToCartPage.getProductPriceLabel();
        assert.equal(boltTshirtPrice, cartPagePrice, 'Product prices do not match');
        await driver.back();

    })

    it(" Add the product to the item and remove",async () => {
        
        (await productPage.getBoltTshirtProductEle()).click();
        await addToCartPage.increaseQuantity(3);
        await addToCartPage.addToCart();
        await addToCartPage.clickCartIcon();
        await myCartPage.clickRemoveItem();
        const noItemsLabel = await (await myCartPage.getNoItemsLabel()).getText();
        expect(noItemsLabel).toBe('No Items');
        const cartIsEmptyMsg = await (await myCartPage.getCartIsEmptyMessage()).getText();
        expect(cartIsEmptyMsg).toBe('Oh no! Your cart is empty. Fill it up with swag to complete your purchase.');
        (await myCartPage.getGoShoppingButton()).click();

    })
})