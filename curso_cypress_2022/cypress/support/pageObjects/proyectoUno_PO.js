class ProyectoUno_PO {

    //nombre del la funcion
    visit_Home(){
        let tiempo=1000
        before(() => {   
            cy.visit("https://demo.seleniumeasy.com/input-form-demo.html") 
            cy.title().should('eq',"Selenium Easy - Input Form Demo with Validations")
            cy.wait(tiempo)
        })
    }

    seccionUno(name,last,email,t){
        let tiempo = t
        cy.get("[name='first_name']").clear().should("be.visible").type(name)
        cy.screenshot("nombre_foto")
        cy.wait(tiempo)
        cy.get("[name='last_name']").clear().should("be.visible").type(last)
        cy.wait(tiempo)
        cy.get("[name='email']").clear().should("be.visible").type(email)
    }


    seccionDos(phone,address,city,t){
        let tiempo = t
        cy.get("[name='phone']").clear().should("be.visible").type(phone)
        cy.wait(tiempo)
        cy.get("[name='address']").clear().should("be.visible").type(address)
        cy.wait(tiempo)
        cy.get("[name='city']").clear().should("be.visible").type(city)
        cy.wait(tiempo)
    }

    seccionTres(zcode,pag,comment,t){
        let tiempo = t
        cy.get("[name='state']").should("be.visible").select("Alabama")
        cy.wait(tiempo)
        cy.get("[name='zip']").clear().should("be.visible").type(zcode)
        cy.wait(tiempo)
        cy.get("[name='website']").clear().should("be.visible").type(pag)
        cy.wait(tiempo)
        cy.get(':nth-child(1) > label > input').check()
        cy.wait(tiempo)
        cy.get("[name='comment']").clear().should("be.visible").type(comment)
        cy.wait(tiempo)
    }


}//final
//para poder exportar la clase

export default ProyectoUno_PO;
