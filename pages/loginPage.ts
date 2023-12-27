import { $ } from '@wdio/globals'


export class LoginPage {
   
    get burgerIcon() {
        return $("~open menu");
    }

    get loginButtonFromSideMenu() {
        return $("~menu item log in");
    }

    get usernameInputField() {
        return $("~Username input field");
    }

    get passwordInputField() {
        return $('~Password input field');
    }

    get loginButton() {
        return $("~Login button")
    }

    get firstProductEle() {
        return $('(//android.widget.TextView[@content-desc="store item text"])[1]');
    }

    async login(username : string, password : number) {
        await this.burgerIcon.waitForDisplayed();
        (await this.burgerIcon).click();

        await this.loginButtonFromSideMenu.waitForDisplayed();
        await this.loginButtonFromSideMenu.click();

        await this.usernameInputField.waitForDisplayed();
        await this.usernameInputField.setValue(username);

        await this.passwordInputField.waitForDisplayed();
        await this.passwordInputField.click();
        await this.passwordInputField.setValue(password);
        await this.loginButton.click();
    
    }  
}

