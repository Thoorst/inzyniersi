export class Cart {
    productTableBody = `.shop_table.shop_table_responsive.cart > tbody`
    getTable() {
        return cy.get(this.productTableBody)
    }
}