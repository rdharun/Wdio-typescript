

import { ProductPage } from "../../../pages/productsPage";
import { LeftSideMenuScreenPage } from "../../../pages/leftSideMenuScreenPage";
import { WebViewPage } from "../../../pages/webViewPage";

let productPage : ProductPage;
let leftSideMenuScreenPage: LeftSideMenuScreenPage;
let webViewPage: WebViewPage;

describe('Switching between native to web views', () => {

    before(async()=> {
        productPage = new ProductPage();
        leftSideMenuScreenPage = new LeftSideMenuScreenPage();
        webViewPage = new WebViewPage();
    })

    it('switching between native to web', async () => {
        const url: string = 'https://www.ultralesson.ai';
        (await productPage.getHamburgerIconEle()).click();
        await leftSideMenuScreenPage.clickMenuItemWebview();
        await webViewPage.enterUrl(url);
        await webViewPage.clickGoToSiteButton();

        await driver.waitUntil(
            async () => {
                return ((await driver.getContexts()).length) > 1;
            },
            { timeout: 50000, }
        );

        const contexts = await driver.getContexts();
        const nativeView = contexts[0];
        const webviewContext = contexts[1];
        await driver.switchContext(webviewContext.toString());
        await driver.switchContext(nativeView.toString());
        // perform any actions in the webview page    
        await driver.back();
    });
})