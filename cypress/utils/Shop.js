export class Shop {
    testProduct = `a[data-product_id='11']`
    testProduct2 = `a[data-product_id='24']`
    testProduct3 = `a[data-product_id='25']`

    clickAddProduct() {
        cy.get(this.testProduct).click()
    }

    clickAddProduct2() {
        cy.get(this.testProduct2).click()
    }

    clickAddProduct3() {
        cy.get(this.testProduct3).click()
    }
}