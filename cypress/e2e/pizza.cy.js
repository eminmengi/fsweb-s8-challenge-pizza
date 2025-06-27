describe('Pizza Formu', () => {
  beforeEach(() => {
    cy.visit('localhost:5173/pizza');
  });

  it('İsim inputu çalışmalı', () => {
    cy.get('input[name="name"]').type('Emin').should('have.value', 'Emin');
  });

  it('Malzeme seçimi yapılabilmeli', () => {
    cy.get("input[type=checkbox]").check(["Ananas", "Sosis", "Biber", "Jalapeno"], { force: true });
  });

  it('Boyut seçimi yapılabilmeli', () => {
    cy.contains('label.size-option', 'L').click();
    cy.get("input[value='Büyük']").should('be.checked');
  });
  
  it('Hamur seçimi yapılabilmeli', () => {
    cy.get('select[name="dough"]').select('İnce').should('have.value', 'İnce');
    cy.get('select[name="dough"]').select('Kalın').should('have.value', 'Kalın');
  });

  it('Not girişi yapılabilmeli', () => {
    cy.get('textarea[name="note"]').type('Notlarınız').should('have.value', 'Notlarınız');
  });

  it('Form gönderilebilmeli', () => {
    cy.get('input[name="name"]').type('Emin');
    cy.contains('label.size-option', 'L').click();
    cy.get("select[name=dough]").select('Kalın');
    cy.get("input[type=checkbox]").check(["Ananas", "Sosis", "Biber", "Jalapeno"], { force: true });
    cy.get('textarea[name="note"]').type('Az pişmiş olsun');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/success');
    cy.contains('SİPARİŞ ALINDI').should('exist');
  });
})