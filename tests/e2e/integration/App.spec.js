describe('App', () => {
  const todo = 'Tes';

  beforeEach(() => {
    cy.visit('/');
  });

  it('can rendered', () => {
    cy.get('div.todolist#not-done').find('h1').contains('Todos');
    cy.get('div.todolist#not-done').find('.todo-header').contains('0 todo not completed');
  });

  it('can insert new todo', () => {
    cy.get('div.todolist#not-done').find('input.add-todo').type(todo);
    cy.get('div.todolist#not-done').find('button#add').click();

    cy.get('div.todolist#not-done').find('.todo-header').contains('1 todo not completed');
    cy.get('div.todolist#not-done').find('ul#sortable').find('li').should('have.length', 1);
    cy.get('div.todolist#not-done').find('ul#sortable').find('li').first().contains(todo);
  });

  it('can mark todo as done', () => {
    cy.get('div.todolist#not-done').find('input.add-todo').type(todo);
    cy.get('div.todolist#not-done').find('button#add').click();

    cy.get('div.todolist#not-done').find('ul#sortable').find('li').first().find('button.remove-item').click()

    cy.get('div.todolist#not-done').find('.todo-header').contains('0 todo not completed');
    cy.get('div.todolist#done').find('.todo-header').contains('1 completed');
    cy.get('div.todolist#done').find('ul#done-items').find('li').should('have.length', 1);
    cy.get('div.todolist#done').find('ul#done-items').find('li').first().contains(todo);
  });

  it('can remove todo', () => {
    cy.get('div.todolist#not-done').find('input.add-todo').type(todo);
    cy.get('div.todolist#not-done').find('button#add').click();
    cy.get('div.todolist#not-done').find('ul#sortable').find('li').first().find('button.remove-item').click()

    cy.get('div.todolist#done').find('ul#done-items').find('li').first().find('button.remove-item').click();
    cy.get('div.todolist#done').should('not.be.visible');
  });

});
