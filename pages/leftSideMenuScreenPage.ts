export class LeftSideMenuScreenPage {

    private selectors = {
        loginButtonFromSideMenu: "~menu item log in",
        menuItemLogOut: '~menu item log out',
    }

    public async getLoginButtonFromSideMenu() {
        return await $(this.selectors.loginButtonFromSideMenu);
    }

    public async getMenuItemLogOutEle() {
        return await $(this.selectors.menuItemLogOut);
    }

}