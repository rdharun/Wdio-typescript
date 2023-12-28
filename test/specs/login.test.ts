import {LoginPage} from '../../pages/loginPage';

let loginPage : LoginPage;


before(() => {
    loginPage = new LoginPage();

});


describe("Login to the application", () => {
    it("should able to login with valid credentials", async () => {
        await loginPage.login("bob@example.com", "10203040");
    });
})
