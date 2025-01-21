console.log(resources) // Logger ut resources.js i konsollen slik at vi kan bruke innholdet i koden.

const navMenu = document.getElementById("nav-menu") // Lager en variabel for navigasjonsmenyen og linker den til id-en som er laget i HTML-filen.
const resourcesSection = document.getElementById("resources") // Lager en variabel for ressursseksjonen og linker den til id-en som er laget i HTML-filen.

/*
    Lager en funksjon for å vise navigasjonsmenyen som er linket til de ulike kategoriene i resources. 

*/

//navMenu inneholder en liste over kategoriene i resources.js

const categories = [...new Set(resources.map(item => item.category))]
categories.forEach(category => {
    const menuItem = document.createElement("li")
    const menuLink = document.createElement("a")
    menuLink.textContent = category
    menuLink.href = "#"

    menuLink.addEventListener("click", () => {
        showCategory(category)
    })

    menuItem.appendChild(menuLink)
    navMenu.appendChild(menuItem)
})


/*
    Neste steg vil være å lage en funksjon som viser ressursene som er linket til de ulike kategoriene.

    Funksjonen skal gjøre følgende:
    - Tømme tidligere innhold.
    - Legge til en tittel, beskrivelse og en liste med lenker for ressursene.
*/

