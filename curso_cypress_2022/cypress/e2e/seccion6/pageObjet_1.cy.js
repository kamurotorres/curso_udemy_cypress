/// <reference types='Cypress' />
//importando la clase
import ProyectoUno_PO from '../../support/pageObjects/proyectoUno_PO'

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('descipcion', () => {

    //creamos nueva instancia de la clase importada
    const master = new ProyectoUno_PO()
    
    master.visit_Home()

    Cypress.on('uncaught:exception',(err, runnanle) => {
        return false
    })
    
    it('test seccion_Uno', () => {
        //Cypress.config("defaultCommandTimeout",15000)
        master.seccionUno("kevin","Torres","kevin@gmail.com",1000)
        
    })

    it.only('test seccion_dos', () => {
        master.seccionDos("555","calle 2e # 14-35","neiva",1000)
        cy.Validar_mensaje_campo2("//small[contains(@data-bv-validator,'phone')]","Please supply a vaild phone number with area code","Telefono")
        
    })

    it.only('test seccion_tres', () => {
        master.seccionTres("41001","www.kevin,cin","come",1000)
        cy.Validar_mensaje_campo2("//small[@class='help-block'][contains(.,'Please enter at least 10 characters and no more than 200')]","Please enter at least 10 characters and no more than 200","Descripcion")
    })
});