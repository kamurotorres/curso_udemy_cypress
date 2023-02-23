
Feature: Demo de cocumber dos

    Esto es un demo de como utilizar cocumber

    Scenario Outline: Demo de cocumber dos
    Given Abrir_navegador_principal
    When Cargando el nombre <username>
    When Cargando el email <email>
    When Cargando la direccion <dir1>
    When Cargando la direccion2 <dir2>
    When Click en button
    Then Validar el titulo de la pagina

    Examples:
        | username | email | dir1 | dir2 |
        | kevin1  | kevin1@gmail.com  | direccion_uno1 | direccion_uno2  |
        | kevin2  | kevin2@gmail.com  | direccion_uno3 | direccion_uno4  |
        | kevin3  | kevin3@gmail.com  | direccion_uno5 | direccion_uno6  |


   