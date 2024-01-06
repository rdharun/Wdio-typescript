import {LoginPage} from '../../../pages/loginPage';
import { LoggerHelper, LOGGER } from '../../../utilities/reporting/loggerHelper';


let loginPage : LoginPage;

const specName = 'Test login scenarios';
describe("Login to the application", () => {
    before(() => {
        loginPage = new LoginPage();
        LoggerHelper.setupLogger(specName);
    });
    
    it("should able to login with valid credentials", async () => {
        try {
            LOGGER.info("Starting the test");
            await loginPage.login("bob@example.com", "10203040");
            LOGGER.info("Ending the test");
        } catch (error) {
            // Log the error using your custom logger
            LOGGER.error(`Error during test execution: ${(error as Error).message}`);
            // Rethrow the error to mark the test as failed
            throw error;
        }
    });
})
