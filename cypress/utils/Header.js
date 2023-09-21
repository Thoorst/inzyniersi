export class Header {
    //TODO: Selectors should be updated in the future, risk that UI changes may crash test
    homePageLink = `//a[text()='Homepage']`
    cartLink = `//a[text()='Koszyk']`
    myAccountLink = `//a[text()='Moje konto']`
    samplePageLink = `//a[text()='Sample Page']`
    shopLink = `//a[text()='Sklep']`
    orderLink = `//a[text()='Zamówienie']`

    clickHomepage() {
        cy.xpath(this.homePageLink).click()
    }

    clickCart() {
        cy.xpath(this.cartLink).click()
    }

    clickMyAccount() {
        cy.xpath(this.myAccountLink).click()
    }

    clickSamplePage() {
        cy.xpath(this.samplePageLink).click()
    }

    clickShop() {
        cy.xpath(this.shopLink).click()
    }

    clickOrder() {
        cy.xpath(this.orderLink).click
    }
}