
import * as assert from 'assert';
import { LoginPage } from "../../pages/loginPage";
import { ProductPage } from "../../pages/productsPage";
import { AddToCartPage } from "../../pages/addToCartPage";

let loginPage : LoginPage;
let productPage: ProductPage;
let addToCartPage: AddToCartPage;


describe("Product Price Comparison", () => {
    before(async () => {
        loginPage = new LoginPage();
        productPage = new ProductPage();
        addToCartPage = new AddToCartPage();
        await loginPage.login("bob@example.com", "10203040");
    });

    it("Assert the prices from both the pages", async() => {
        (await productPage.getBoltTshirtProductEle()).click();
        const boltTshirtPrice = await productPage.getBoltTshirtPrice();
        const cartPagePrice = await addToCartPage.getProductPriceLabel();
        assert.equal(boltTshirtPrice, cartPagePrice, 'Product prices do not match');
    })
})