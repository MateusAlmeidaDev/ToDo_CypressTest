context('TodoMVC', () => {

    // TESTE 1
    it('Adicionar várias tarefas', () => {
        cy.visit('https://todomvc-app-for-testing.surge.sh/')
        cy.get('input.new-todo')
            .type('Estudar automação de testes')
            .type('{enter}')
        
        cy.get('input.new-todo')
            .type('Iniciar automação com Cypress')
            .type('{enter}')

        cy.get('input.new-todo')
            .type('Aprender boas práticas de testes automatizados')
            .type('{enter}')

            // Assertiva do teste            
        cy.get('ul.todo-list li').should('have.length', 3) // Deverá conter 3 tarefas gravadas
    })

    // TESTE 2
    it('Concluir uma tarefa', () => {
        cy.get(':nth-child(3) > .view > .toggle').click()

        // Assertiva do teste
        cy.get('.completed > .view > label').should('have.length', 1) // Deverá conter 1 tarefa na lista de completadas
    })

    
    // TESTE 3
    it('Remover a tarefa concluída', () => {
        cy.get(':nth-child(3) > a').click()
        cy.get('.clear-completed').click()
        cy.get('.selected').click()
        cy.get(':nth-child(1) > a').click()

        // Assertiva do teste
        cy.get('ul.todo-list li').should('have.length', 2) // Deverá conter 2 tarefas gravadas

    })
})
