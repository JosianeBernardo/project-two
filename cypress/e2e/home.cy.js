describe('home', () => {

    beforeEach(() => {
        cy.goLoginPage()
        cy.login('standard_user', 'secret_sauce')
    })

    it('Filtrar listagem de produtos do menor valor para o maior', () => {
        // Seleciona a opção "Price (low to high)" no dropdown
        cy.get('.product_sort_container').select('lohi')

        // Validação opcional: Verificar se os preços estão de fato em ordem crescente
        // Supondo que os preços estejam em elementos com a classe '.inventory_item_price'
        cy.get('.inventory_item_price')
            .then($prices => {
                const valores = [...$prices].map(el => parseFloat(el.innerText.replace('$', '')));
                const ordenado = [...valores].sort((a, b) => a - b)
                expect(valores).to.deep.equal(ordenado)
            })
    })

    it('Filtrar listagem de produtos do maior valor para o menor', () => {
        // Seleciona a opção "Price (high to low)" no dropdown
        cy.get('.product_sort_container').select('hilo')

        // Validação: Verifica se os preços estão em ordem decrescente
        cy.get('.inventory_item_price')
            .then($prices => {
                const valores = [...$prices].map(el => parseFloat(el.innerText.replace('$', '')));
                const ordenado = [...valores].sort((a, b) => b - a); // Ordem decrescente
                expect(valores).to.deep.equal(ordenado)
            })
    })

    it('Filtrar a listagem de produtos por nome de Z a A', () => {
        // Seleciona a opção "Name (Z to A)" no dropdown
        cy.get('.product_sort_container').select('za')

        // Validação: Verifica se os nomes estão em ordem decrescente
        cy.get('.inventory_item_name')
            .then($nomes => {
                const nomes = [...$nomes].map(el => el.innerText.trim())
                const ordenado = [...nomes].sort((a, b) => b.localeCompare(a)) // Ordem Z → A
                expect(nomes).to.deep.equal(ordenado);
            })
    })

    it('Filtrar a listagem de produtos por nome de A a Z', () => {
        // Seleciona a opção "Name (A to Z)" no dropdown
        cy.get('.product_sort_container').select('az')

        // Validação: Verifica se os nomes estão em ordem crescente
        cy.get('.inventory_item_name')
            .then($nomes => {
                const nomes = [...$nomes].map(el => el.innerText.trim())
                const ordenado = [...nomes].sort((a, b) => a.localeCompare(b)) // Ordem A → Z
                expect(nomes).to.deep.equal(ordenado)
            })
    })

})