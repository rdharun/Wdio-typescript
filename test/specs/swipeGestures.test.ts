
import { ProductPage } from "../../pages/productsPage";
import { BaseActions } from "../../utilities/baseActions";


let productPage: ProductPage;
let baseActions: BaseActions;

describe("Swipe Gestures", () => {

    before(async () => {
        productPage = new ProductPage();
        baseActions = new BaseActions();
    });


    it('Should scroll until an element is visible on a mobile app', async () => {
        const footerEle = await productPage.getFooterEle();
        await baseActions.swipe(footerEle);
    })
})