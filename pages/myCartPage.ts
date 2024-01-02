 

export class MyCartPage {

    private selectors = {
        proceedToCheckoutButton: "~Proceed To Checkout button",
    }

    async getProccedTOCheckoutButtonEle() {
        return await $(this.selectors.proceedToCheckoutButton);
    }

    async clickProceedToCheckoutButton() {
        const proceedToCheckoutButtonEle = await $(this.selectors.proceedToCheckoutButton);
        await proceedToCheckoutButtonEle.waitForDisplayed();
        await proceedToCheckoutButtonEle.click();
    }

}