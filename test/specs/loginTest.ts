import {LoginPage} from '../../pages/loginPage';

let loginPage : LoginPage;


before(() => {
    loginPage = new LoginPage();

});


describe("Login to the application", () => {
    it("should able to login with valid credentials", async () => {
        await loginPage.login("bob@example.com", 10203040);
        await loginPage.firstProductEle.waitForDisplayed();
        const firstProductText = await loginPage.firstProductEle.getText();
        console.log('First product text:', firstProductText);
        expect(firstProductText).toBe('Sauce Labs Backpack');

    });
})
