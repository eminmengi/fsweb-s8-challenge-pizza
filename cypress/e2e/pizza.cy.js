describe('Pizza Formu', () => {
  beforeEach(() => {
    cy.visit('localhost:5173/pizza');
  });

  it('İsim inputu çalışmalı', () => {
    cy.get('input[name="name"]').type('Emin').should('have.value', 'Emin');
  });

  it('Malzeme seçimi yapılabilmeli', () => {
    cy.get("input[type=checkbox]").check(["Pepperoni", "Sosis", "Sarımsak", "Jalapeno"])
  });

  it('Boyut seçimi yapılabilmeli', () => {
    cy.get("input[type=radio]").check("Büyük");
  });
  
  it('Hamur seçimi yapılabilmeli', () => {
    cy.get('select[name="dough"]').select('İnce').should('have.value', 'İnce');
    cy.get('select[name="dough"]').select('Normal').should('have.value', 'Normal');
    cy.get('select[name="dough"]').select('Kalın').should('have.value', 'Kalın');
  });

  it('Not girişi yapılabilmeli', () => {
    cy.get('textarea[name="note"]').type('Notlarınız').should('have.value', 'Notlarınız');
  });

  it('Form gönderilebilmeli', () => {
    cy.get('input[name="name"]').type('Emin');
    cy.get("input[value=Orta]").click();
    cy.get("select[name=dough]").select('Kalın');
    cy.get("input[type=checkbox]").check(["Pepperoni", "Sosis", "Sarımsak", "Jalapeno"]);
    cy.get('textarea[name="note"]').type('Az pişmiş olsun');
    cy.get('button[type="submit"]').click();
    cy.contains('SİPARİŞİNİZ ALINDI!').should('exist');
  });
})