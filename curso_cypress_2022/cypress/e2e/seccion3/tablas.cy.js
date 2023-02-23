/// <reference types="Cypress" />
//para que funciones los comandos de cypress
describe('Elementos de una tabla', () => {
    it('Elementos Children', () => {
       cy.visit('https://demo.seleniumeasy.com/table-records-filter-demo.html') 
       cy.title().should("eq","Selenium Easy - Table Data Filter Demo");
       cy.wait(2000)
       cy.get(".btn-group").children(".btn-success").should("contain","Green").click({force:true})
       cy.wait(2000)
       cy.get(".btn-group").children(".btn-danger").should("contain","Red").click()
    })



    it('Elementos EQ', () => {
        cy.visit('https://demo.seleniumeasy.com/table-records-filter-demo.html') 
        cy.title().should("eq","Selenium Easy - Table Data Filter Demo");
        cy.wait(2000)
        cy.get("[type='button']").eq(2).should("contain","Orange").click({force: true})
        cy.get("[type='button']").eq(4).should("contain","All").click({force: true})
        
     })

     it('Filter', () => {
      cy.visit('https://demo.seleniumeasy.com/table-records-filter-demo.html') 
      cy.title().should("eq","Selenium Easy - Table Data Filter Demo")
      cy.wait(2000)
      cy.get("[type='button']").filter(".btn-success").click()
      cy.wait(2000)
      cy.get("[type='button']").filter(".btn-warning").should("contain","Orange").click()
   })

   it('find', () => {
      cy.visit('https://demo.seleniumeasy.com/table-records-filter-demo.html') 
      cy.title().should("eq","Selenium Easy - Table Data Filter Demo")
      cy.wait(2000)
      cy.get(".btn-group").find(".btn-danger").should("contain","Red").click()
      cy.get(".btn-group").find("button")
      cy.get("[type='button']").contains("Orange").click()
   })

   it('first - last', () => {
      cy.visit('https://demo.seleniumeasy.com/table-records-filter-demo.html') 
      cy.title().should("eq","Selenium Easy - Table Data Filter Demo")
      cy.wait(2000)
      cy.get(".btn-group").find("button").first().click()
      cy.wait(2000)
      cy.get(".btn-group").find("button").last().click()
   })

   it('selecionar todo los elementos nextall', () => {
      cy.visit('https://demo.seleniumeasy.com/table-records-filter-demo.html') 
      cy.title().should("eq","Selenium Easy - Table Data Filter Demo")
      cy.wait(2000)
      cy.get("[type='button']").should("contain","Green")
      cy.wait(2000)
      cy.get("[type='button']").should("contain","Green").nextAll().should("have.length",4)
   })

   it('selecionar todo los elementos nextall', () => {
      cy.visit('https://demo.seleniumeasy.com/table-records-filter-demo.html') 
      cy.title().should("eq","Selenium Easy - Table Data Filter Demo")
      cy.wait(2000)
      cy.get("[type='button']").parent().should("have.class","btn-group")
      
   })

   it('reto', () => {
      cy.visit('https://demo.seleniumeasy.com/table-records-filter-demo.html') 
      cy.title().should("eq","Selenium Easy - Table Data Filter Demo")
      cy.wait(2000)
      //checkea todo los checkbox
      cy.get("[type='checkbox']").check({force:true})
      //cy.get("table tr").invoke("addClass","class","selected")
      //cy.get("table tr").invoke("addClass","selected")
   })

   it('reto con for y assert', () => {
      cy.visit('https://demo.seleniumeasy.com/table-records-filter-demo.html') 
      cy.title().should("eq","Selenium Easy - Table Data Filter Demo")
      cy.wait(2000)
      //checkea todo los checkbox
      for(let i=1; i<=4; i++){
         let nombreBoton= ""
         if(i == 1){
            nombreBoton= "Green"
         }
         else if(i == 2){
            nombreBoton= "Orange"
         }
         else if (i == 3){
            nombreBoton= "Red"
         }
         else if(i == 4){
            nombreBoton= "All"
         }
         cy.get("[type='button']").eq(i).should("contain",nombreBoton).click({force:true})
         cy.wait(1500)
         cy.get("[type='checkbox']").check({force:true})
      }
   })


   it('reto tabla', () => {
      cy.visit('https://demo.seleniumeasy.com/table-sort-search-demo.html') 
      cy.title().should("eq","Selenium Easy - Tabel Sort and Search Demo")
      cy.wait(2000)
      let datos = []
      cy.get(".odd td").each(($el,index,$lista) =>{
         datos[index] = $el.text()
         //imprimir
      }).then(() => {
         for(let i=0; i<= datos.length; i++) {
            cy.log(datos[i])
         }
      })
      cy.log(datos);
   })

   it('reto sumatoria tabla', () => {
      cy.visit('https://demo.seleniumeasy.com/table-sort-search-demo.html') 
      cy.title().should("eq","Selenium Easy - Tabel Sort and Search Demo")
      cy.wait(2000)

      let datos = []
      let cantidad =0;
      cy.get("[role='row'] td").each(($el,index,$lista) =>{
         datos[index] = $el.text()
         //imprimir
      }).then(() => {
         for(let i=0; i<= datos.length; i++) {
            cy.log(datos[i])
            if(Number(datos[i])){
               cantidad =  cantidad + Number(datos[i])
            }
         }
         cy.log("La cantidad total es: " + cantidad)
         expect(cantidad).to.eq(394)
      })
   })


   it.only('reto mostrar un dato de la tabla', () => {
      cy.visit('https://demo.seleniumeasy.com/table-sort-search-demo.html') 
      cy.title().should("eq","Selenium Easy - Tabel Sort and Search Demo")
      cy.wait(2000)
      const campo = cy.get("tbody > :nth-child(7) > :nth-child(2)")
      campo.each(($el,index,$lista) => {
         const dato = $el.text()
         if(dato.includes("Javascript Developer")){
            campo.eq(index).next().next().then((age) => {
               const Edad = age.text()
               cy.log(Edad)
               cy.log("La edad de java script Developer es: " + Edad)
               expect(Edad).to.equal("39")
            })
         }
      })
   })

})