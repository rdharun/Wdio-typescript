import { $ } from "@wdio/globals";


export class ProductPage {

    private seletorts = {

        hamburgerIcon: "~open menu",
        productTextOnHomeScreen: "//android.widget.TextView[@text='Products']",
        sauceLabsBackPackProduct: "(//android.widget.TextView[@content-desc='store item text'])[1]",
        //"//android.widget.TextView[@text='Sauce Labs Backpack']",
        firstItem: "(//android.view.ViewGroup[@content-desc='store item'])[1]/android.view.ViewGroup[1]/android.widget.ImageView",

    }

    public async getHamburgerIconEle() {
        return await $(this.seletorts.hamburgerIcon);
    }

    public async getProductTextOnHomeScreenEle() {
        return await $(this.seletorts.productTextOnHomeScreen);
    }

    public async getSauceLabsBackPackProductEle() {
        return await $(this.seletorts.sauceLabsBackPackProduct);
    }

    async clickOnProduct() {
        const productElement = await this.getSauceLabsBackPackProductEle();
        await productElement.waitForDisplayed();
        await productElement.click();
    }

   

}