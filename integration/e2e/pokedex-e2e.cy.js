/* eslint-disable no-undef */
describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('should navigate to pokemon', function() {
    cy.visit('http://localhost:5000')
    cy.get('[href="/pokemon/raticate"]').click()
    cy.contains('hustle')
  })
})