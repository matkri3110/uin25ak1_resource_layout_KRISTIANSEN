console.log(resources) // Logger ut resources.js i konsollen slik at vi kan bruke innholdet i koden.

/*
    Litt generell informasjon om hjelpemidler. Underveis i løsningen av denne oppgaven har jeg brukt GitHub Co-pilot. 
    Da denne er fin til å brainstorme ideer og gi forslag til mulige løsninger, ettersom den forstår konteksten i koden.
    Den har også kommet med forslag til noen kommentarer. 

    OpenAIs GPT4.0 har blitt brukt et par ganger til å feilsøke koden underveis. 
    URL: https://chatgpt.com/auth/login
/*

let navbarHTML = "" // Lager en tom string som vi skal fylle med HTML for navigasjonsmenyen.

/*
    Lager navigasjonsknapper for hver kategori i resource-arrayet.
    Funnet denne metoden på MDN Web Docs.
    URL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*/
resources.map(resource => navbarHTML += 
    `
        <ul id="nav-menu">
            <li>
                <button id="category" onclick="content('${resource.category}')">${resource.category}</button>
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

/*
    Vi lager en funksjon som skal oppdatere innholdet på siden basert på valgt kategori. 
    .filter brukes for å finne valgt kategori der item.category er lik category. (altså den som er trykket på)
    Funnet denne metoden på MDN Web Docs.
    URL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
*/
function content(category) {
    const filteredResources = resources.filter(function(item) { 
        return item.category === category
    })

    /*
        Siden .filter returnerer en array så henter vi det første elementet, da vi vet at det kun er en ressurs per kategori.
    */
    const toggledResource = filteredResources[0]

    const contentContainer = document.getElementById("content") // Henter content-containeren
    contentContainer.innerHTML = "" // Sørger for at content tømmes før nytt innhold legges til

    /*
        Lager en h2 tag for tittel på katgori som skal vises på siden.
        Deretter oppdaterer vi den med tittelen til den valgte kategorien fra ressurs arrayet.
        
        Funnet denne metoden på MDN Web Docs.
        URL: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
    */
    const heading = document.createElement("h2") 
    heading.textContent = toggledResource.category

    /*
        Lager et p-element for at vi skal ha et sted å legge inn teksten som skal vises på siden.
        Deretter oppdaterer vi det med teksten til den valgte kategorien fra ressurs arrayet.
    */

    const paragraph = document.createElement("p")
    paragraph.id = "text"
    paragraph.textContent = toggledResource.text

    // Lager en ul-liste
    const list = document.createElement("ul")

    /*
        Kode for å genere listen med linker til ressurser.
        Først løper vi gjennom alle kildene i arrayet.
        Deretter lager vi et listeelement for hver kilde.
        Så legger vi til en a-tag.
        Så oppdaterer vi a-taggen med riktig url fra ressurs arrayet.
        Det samme gjør vi også med tittelen. 

        Funnet denne metoden på MDN Web Docs.
        URL: https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
    */

    toggledResource.sources.forEach(function(source) {
        const listItem = document.createElement("li")
        const link = document.createElement("a")
        link.href = source.url
        link.textContent = source.title
        listItem.appendChild(link)
        list.appendChild(listItem)
    })

    // Legger til alle elementer i content-containeren
    contentContainer.appendChild(heading)
    contentContainer.appendChild(paragraph)
    contentContainer.appendChild(list)
}

// Kjører funksjonen.
content("HTML")
