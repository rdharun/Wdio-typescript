import {LogoutPage} from '../../../pages/logutPage';
import {LoginPage} from '../../../pages/loginPage';

let loginPage : LoginPage;
let logoutPage : LogoutPage;



describe("Logout to the application", () => {
    before(() => {
        loginPage = new LoginPage();
        logoutPage = new LogoutPage();
    
    });
    
    it("should able to login and logout", async () => {
        await loginPage.login("bob@example.com", "10203040");
        await logoutPage.logout();
    });
})
