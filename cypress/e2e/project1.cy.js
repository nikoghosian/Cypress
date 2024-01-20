/// <reference types="cypress" />
///=============================================================================HOMEWORK==================================================================================================================
// describe('First Project', () => {
//     it.only('Open the Page and Submit Form', () => {
//         cy.visit('https://demoqa.com/text-box');
//         cy.get('#userName').type('ALL RIGHT');
//         cy.get('#userEmail').type('test@test.ru');
//         cy.get('#currentAddress').type('Nothing');
//         cy.get('#permanentAddress').type('Sevan M4');
//         cy.get('#submit').click();

//         cy.get('#output').should('exist');

//         if (cy.get('#output').should('exist')) {
//             cy.log('Success');
//         } else {
//             cy.log('BAD');
//             throw new Error('Fail');
//         }
//     });

//     it('Open the Page and check the functionality of the buttons', () => {
//         cy.visit('https://demoqa.com/radio-button');
//         cy.get('#yesRadio').click({ force: true });
//         cy.get('#impressiveRadio').click({ force: true });

//         cy.get('.mt-3').should('exist')

//         if (cy.get('.mt-3').should('exist')) {
//             cy.log('success');
//         }
//         else {
//             cy.log('Bad');
//             throw new Error('Fail')
//         }
//     });

//     it('Open the Page  and check the functionality of the buttons', () => {
//         cy.visit('https://demoqa.com/buttons');
//         cy.get('#doubleClickBtn').dblclick();
//         cy.get('#rightClickBtn').rightclick();
//         if (
//             cy.get('#doubleClickMessage').should('exist') &&
//             cy.get('#rightClickMessage').should('exist')
//         ) {
//             cy.log('success')
//         }
//         else {
//             cy.log('Bad');
//             throw new Error('Fail')
//         }
//     });
// });

///====================================================================================================================================================

describe('Last Project', () => {
  it('Open The page ', () => {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

      cy.url().should('include', '/seleniumPractise').then(url => {
          if (!url) {
              cy.log('Error: URL contains errors');
              throw new Error('Something Went Wrong')
          } else {
              cy.log('Success');
          }
      });

      const PlusButton = 'div:nth-child(1) > .stepper-input > a.increment';
      cy.get(PlusButton).click();

      const AddToCartButton = 'div:nth-child(1) > .product-action > button';
      cy.get(AddToCartButton).click();

      const CartInfo = '.cart > .cart-info';
      if (cy.get(CartInfo).should('exist')) {
          cy.log('The Product successfully added to cart');
      } else {
          cy.log('The Product not added to cart')
          throw new Error('Somthing Went Wrong')
      }

      const CartButton = '.cart > .cart-icon > img';
      cy.get(CartButton).click();

      const CartActive = 'div.cart > .cart-preview.active';
      if (cy.get(CartActive).should('exist')) {
          cy.log('The active cart is open')
      } else {
          cy.log('The active cart was not opened')
          throw new Error('Somthing Went Wrong')
      }

      const ProccessToCheckoutButton = ('button:contains("PROCEED TO CHECKOUT")')
      cy.get(ProccessToCheckoutButton).click();
      const PlaceOlderButton = ('button:contains("Place Order")')
      cy.get(PlaceOlderButton).click();

      const SelectInput = ('div > select')
      cy.get(SelectInput).select("Armenia");
      const AgreeButton = ('.chkAgree')
      cy.get(AgreeButton).click();
      const ProceedButton = ('button:contains("Proceed")')
      cy.get(ProceedButton).click();
      const NewPage = ('#root')
      if (cy.get(NewPage).should('exist')) {
          cy.log('Success')
      } else {
          cy.log('Somthing Went Wrong')
      }
  });
});






