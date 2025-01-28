console.log(resources) // Logger ut resources.js i konsollen slik at vi kan bruke innholdet i koden.

let navbarHTML = "" // Lager en tom string som vi skal fylle med HTML for navigasjonsmenyen.

/*
    Lager navigasjonsknapper for hver kategori i resource-arrayet.
*/
resources.map(resource => navbarHTML += 
    `
        <ul id="menu">
            <li>
                <button id="menu" onclick="content('${resource.category}')">${resource.category}</button>
            </li>
        </ul>
    ` 
)

document.getElementById("menu").innerHTML = navbarHTML // Oppdaterer innholdet i navbarHTML.

/*
    Etter at vi har laget navigasjonsknappene skal vi lage en funksjon som viser innholdet til den tilhørende kategorien. 
    Så først vil vi filtrere resource-arrayet for å finne valgt kategori.
    Så skal vi oppdatere innholdet på siden basert på valgt kategori.
    Innholdet skal bestå av en overskrift, en beskrivelse og lenker til ulike ressurser som kan trykkes på.
*/
function content(category) {
    const filteredResources = resources.filter (item => item.category === category) // Filtrer ut ressurser som har samme kategori som den vi trykket på.
    const toggledResource = filteredResources [0]
    const contentHTML = 
    // Lager en template literal som inneholder HTML struktur og nøkler for innholdet vi vil vise.
    `
        <h2>${toggledResource.category}</h2>
        <p id="text">${toggledResource.text}</p>
        <ul>
            ${toggledResource.sources.map(source => `<li><a href="${source.url}">${source.title}</a></li>`
            ).join("")}
        </ul>
    `
// Lager en tom string som vi skal fylle med HTML for innholdet.

document.getElementById("content").innerHTML = contentHTML // Oppdaterer innholdet i contentHTML.
}
content("HTML") // Kjører funksjonen content med kategorien "HTML" som argument.