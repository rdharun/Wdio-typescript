import { $ } from "@wdio/globals"



export class AddToCartPage {

    private selectors = {

        cartBadge: "~cart badge",
        addToCartButton: "~Add To Cart button",
    
    }

    async getAddToCartButtonEle() {
        return await $(this.selectors.addToCartButton);
    }

    async addToCart() {
        const addToCartButton = await this.getAddToCartButtonEle();
        await addToCartButton.waitForDisplayed();
        await addToCartButton.click();
    }

    async clickCartIcon() {
        const cartIconEle = $(this.selectors.cartBadge);
        await cartIconEle.click();
    }





}