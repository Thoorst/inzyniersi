import { Header } from "../utils/Header"
import { Shop } from "../utils/Shop"
import { Cart } from "../utils/Cart"

describe('Add product to ', () => {
  beforeEach(`Open site`, () => {
    cy.visit('/')
  })

  it('Add product to', () => {
    const header = new Header()
    const shop = new Shop()
    const cart = new Cart()
    header.clickShop()
    shop.clickAddProduct()
    header.clickCart()
    cart.getTable().find('tr').should('have.length', 2)
    cart.getTable().find(`input[type=number]`).should('have.value', 1)
    cy.contains(`Twój koszyk aktualnie jest pusty.`).should(`not.exist`)
  })
})