//para que funciones los comandos de cypress
/// <reference types="Cypress" />
//para poder usar xpath
require('cypress-xpath');


describe('ciclos', () => {
    it('for 1', () => {
        
        for(let i=1; i<=10; i++){
            cy.log(i)
        }
        
    })

    it('for 1', () => {
        
        for(let i=1; i<=10; i++){
            let tabla=5;
            cy.log(tabla +" x " + i + " =" + (tabla*i))
        }
        
    })

    it('foreach ', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.title().should("eq","nombretitle")
        //realizar foreach
        //tomamos el elemento q se repite
        cy.get("").each(($el,index,$list) => {
            let nameDress= $el.text()
            cy.log(nameDress)
        })
        
    })
    //ahora con el siguiente codigo vamos buscar un elemento damos click dentro de foreach
    it('foreach dar click', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.title().should("eq","nombretitle")
        //realizar foreach
        //tomamos el elemento q se repite
        cy.get("").each(($el,index,$list) => {
            let vestido= $el.text()

            if(vestido.includes("nombreDelVestido")){
                //se usa wrap porq el elemento se encuentra dentro den ciclo
                cy.wrap($el).click()
            }
           
        })
        
    })


    it('reto for', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.title().should("eq","nombretitle")

        for(let i=0; i<=3; i++){
            cy.get("#center_column .product-name").eq(x).click({force:true})
            //dentro de la pagina cambiamos por 4 la cantidad
            cy.get("#quantity_wanted").should("be.visible").clear().type("4")
            //cambimos el valor del select
            cy.get("#group_1").select("M").should("have.value","2")
            //damos click en agregar al carrito
            cy.get(".exclusive > span").should("be.visible").click({force:true})
            //damos click al elemento de la modal
            cy.xpath("//span[contains(.,'Proceed to checkout')]").click({force:true})
            //damos click para volver a la pantala home volver repetir todo
            cy.get(".icon-home").should("be.visible").click({force:true})
        }
        
    })

    it('reto par2 for', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.title().should("eq","My store")
        const datos = [];

        cy.get("#center_column .product-name").each(($el,index,$lista)=>{
            datos[index] = $el.text()
        }).then(() => {
            for(let i=0; i<=datos.length; i++){
                cy.get("#center_column .product-name").eq(x).click({force:true})
                //dentro de la pagina cambiamos por 4 la cantidad
                cy.get("#quantity_wanted").should("be.visible").clear().type("4")
                //cambimos el valor del select
                cy.get("#group_1").select("M").should("have.value","2")
                //damos click en agregar al carrito
                cy.get(".exclusive > span").should("be.visible").click({force:true})
                //damos click al elemento de la modal
                cy.xpath("//span[contains(.,'Proceed to checkout')]").click({force:true})
                //damos click para volver a la pantala home volver repetir todo
                cy.get(".icon-home").should("be.visible").click({force:true})
            }
        })
    })
})