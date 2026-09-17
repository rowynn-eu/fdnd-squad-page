# Squad page FDND
<img width="auto" height="600" alt="brave_ll2YJthJqb" src="https://github.com/user-attachments/assets/31711ca4-5927-42f2-b72e-aa762f7ce190" />

  
## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving

We hebben in een team en squad page gemaakt dat onze 'squad' hoort te representeren. Het verwijst naar het visitekaartje van eenieder die deel is van onze squad (studenten en docenten), met ook informatie over de amstelcapus.

Wat vind je op de pagina?

Persoonlijke Visitekaartjes & Portretten: Elk squad-lid heeft een eigen, uniek visitekaartje ontworpen. De portretfoto’s op de squad page zijn gekoppeld aan de persoonlijke webpagina’s van ieder squad-lid. Door op een portret te klikken of naar een profiel te navigeren, krijg je direct toegang tot het bijbehorende visitekaartje en ontdek je meer over de persoon achter het portret.  

De Amstelcampus Gids: Naast onze persoonlijke profielen vind je op de pagina relevante en handige informatie over de Amstelcampus. Hiermee verbinden we onze persoonlijke identiteit als studenten direct aan de fysieke omgeving waarin we samenwerken en studeren.

Live link naar onze webpage: https://edu.nl/e8nq8

## Gebruik

Deze webpagina is opgebouwd rondom twee hoofdonderdelen: het persoonlijke squad-overzicht en de interactieve Amstelcampus-gids. Hieronder zie je hoe de website gebruikt kan worden:

### Meet Your Squad (Persoonlijke Visitekaartjes)
Navigeren naar profielen: Op de hoofdpagina vind je de portretten van alle squad-leden.  
Details bekijken: Door op een portretfoto te klikken (of naar een specifiek profiel te navigeren), opent direct het unieke, persoonlijke visitekaartje van die squad-lid. Hierop vind je meer informatie over de persoon achter het portret.  

<img width="400" height="auto" alt="Screenshot 2026-09-17 at 16 01 08" src="https://github.com/user-attachments/assets/c2b76ac6-e070-4b02-9eb4-98d46dbdbedb" />

### Know Your Campus (De Amstelcampus Gids)
Locaties filteren: Via de categorieknoppen bovenin (Food, Social en Study) kun je eenvoudig schakelen tussen verschillende soorten hotspots en faciliteiten op en rondom de Amstelcampus.  
Informatie ontdekken: Elke locatie is voorzien van een sfeerbeeld, een beschrijving (zoals de unieke vibe van plekken zoals YUSU Coffee) en praktische info. Hiermee koppelen we onze   identiteit als studenten direct aan onze fysieke leeromgeving.  

<img width="400" height="auto" alt="Screenshot 2026-09-17 at 16 01 16" src="https://github.com/user-attachments/assets/658fb95e-6a7a-42ca-82a9-b55b81e0b286" />


## Kenmerken

De website is gebouwd met [HTML](#HTML) en [CSS](#CSS).

### HTML

We hebben hier de basis structuur van het HTML bestand waar stap voor stap wordt uitgelegd wat het doet, hoe en waarom precies.

#### HEAD

In de `<head>` worden zeven CSS files geladen. Het gaat over zeven local CSS files met specifieke styling voor de pagina, opgesplitst op deze manier zodat het makkelijker is om samen te werken in teamsverband.

```html
<link rel="stylesheet" href="./styles/screens.css" />
<link rel="stylesheet" href="./styles/header.css" />
<link rel="stylesheet" href="./styles/main.css" />
<link rel="stylesheet" href="./styles/hero.css" />
<link rel="stylesheet" href="./styles/student.css" />
<link rel="stylesheet" href="./styles/campus.css" />
<link rel="stylesheet" href="./styles/footer.css" />
```

#### BODY

De structuur van de body is [HEADER](#header), [MAIN](#main) en [FOOTER](#footer). Dit is gedaan zodat het beter is voor SEO, dat het gestructueerd is op een logische reden, en ook dat het makkelijker maakt om het te integreren met toegankelijksheid tools, zoals screen-readers maar ook zoekmachines zoals Google of DuckDuckGo.

##### HEADER

In de header zijn er twee `<p>` elementen, die de wordmark FDND en het studiejaar 26/27 toont. Daartussen zijn er twee links `(<a>)` in een `<nav>` element die zorgen voor de navigatie van de twee 'pagina's' op de website. We kiezen voor `<nav>` hier omdat het de navigatie van de website bepaald. Dit is mogelijk vanwege de ``href=#`` HTML attribute, die ervoor zorgen dat ze verwijzen naar twee specifieke `<section>`'s van de hoofd-inhoud van onze pagina. Dit zorgt voor interactie zonder JavaScript (JS) te gebruiken.

```html
<header>
  <p>FDND</p>
  <nav>
    <a href="#squad"> SQUAD </a>
    <a href="#campus"> CAMPUS </a>
  </nav>
  <p>26/27</p>
</header>
```

##### MAIN

In de main staan drie `<sections>`, een section met een "hero" class dat bevat een `<h1>` titel, een `<strong>` element om te benadrukken waarover deze website gaat, en een paragraaf `(p)`. De tweede section bevat informatie over de studenten en docenten in een `<ul>` wat een lijst van linkjes is en verwijst naar de visitekaartjes van eenieder.

De tweede en derde sections hebben ook een ID selector. Dit zorgt ervoor dat de ``href=#`` declaraties weten waar ze naar toe moeten springen. Dit zorgt er ook voor dat de url veranderd naar `/#squad` of `/#campus`.

```html
<section id="squad"> <!-- Verwijst naar een <section> element met de ID id="squad" -->
<section id="campus"> <!-- etc. -->
```

De tweede `<section>` bevat alle visitekaartjes van de studenten en docenten. Ze zijn geformatteerd op een bepaalde manier, en allemaal genested in een `<ul>` element, een 'unsorted list', dat een `class="carousel-student` attribute heeft, dat we gaan gebruiken voor de [CSS-carousel](#CSS-Carousel). Bekijk de comments hieronder.

```html
<ul class="carousel-student"> <!-- Class gekregen zodat we het kunnen stijlen met een cSS-carousel. -->
  ... <!-- Meer personen in een ul'tje... -->
    <!-- Roepnaam van de student/docent -->
    <ul class="card-student"> <!-- Geeft het de class="card-student" zodat we het kunnen stylen met CSS. -->
      <a href="studentennaam.com/your-tribe-profile-card/" target="_blank" title="Naam van de student">
        <img loading="lazy" src="./assets/students/naam.avif" />
        <h3>Volledige naam van de student</h3>
      </a>
    </ul>
  ... <!-- Meer personen in een ul'tje... -->
</ul>
```


Net als de vorige, de derde `<section>`, maakt ook gebruik van ID selectors (`#campus`) zodat we interactie kunnen toevoegen aan onze website samen met CSS zodat we 'tabjes navigatie' hebben, die we mogelijk kunnen maken door deze ID selectors te gebruiken met de css pseudo selector [:target](#:target). We geven deze `<a>` linkjes ook een class, door het te nesten onder een `<ul>` element zodat we ze kunnen vormgeven met CSS.

```html
<h3>KNOW YOUR CAMPUS</h3>
<ul class="button-campus">
  <a href="#food">FOOD</a> <!-- Verwijst naar een section met de ID id="food" -->
  <a href="#social">SOCIAL</a> <!-- etc. etc. -->
  <a href="#study">STUDY</a>
</ul>
```

Dat is omdat `#food`, `#social` en `#study` verwijzen naar een section met een `class=category-campus` CSS class selector, waar we later CSS properties aan kunnen toevoegen om een 'tabjes navigatie' interactie te realiseren.
```html
...
<section class="category-campus" id="food">
...
<section class="category-campus" id="social">
...
<section class="category-campus" id="study">

```

Binnen elke section met de `class=category-campus` attribute is er een `<article>` tag, omdat de content wat erin zit ook op een logische manier bij andere plaatsen kan gebruikt worden, zoals een algemene amstelcampus pagina, een pagina van de HvA, of een pagina in de omgveing van wibautstraat/weesperplein. Dit hebben we niet gedaan met de studenten/docenten `<section>`, omdat en niet logisch is om de visitekaartjes of foto diegene die het heeft gemaakt in een andere context, omdat ze behoren tot de onderwerp 'een squad page'. Elke `<article>` krijgt ook een `class="card-campus"` zodat we het kunnen stylen met CSS.

```html
<article class="card-campus">
  <img loading="lazy" src="./assets/study-hubs/tth.avif" /> <!-- Local Link naar de foto van de locatie. -->
  <h3>Theo Thijssenhuis</h3>  <!-- Titel van de locatie. -->
  <p> <!-- Omschrijving. Bla bla bla... -->
    Op de 3e verdieping vind je de Medialounge van onze zusteropleiding Communication & Multimedia Design
    (CMD). Als FDND'er ben je hier natuurlijk helemaal welkom om samen met deze designers te duiken in je
    projecten.
  </p>
</article>
```

##### FOOTER

In de `<footer>` is er een paragraaf dat aangeeft welke personen deel hebben gemaakt aan het ontwerpen van de website pagina, en ook nog een `<ul>` in kleine letters dat verwijst naar de oude versies van de squad-page zodat de gebruiker kan vergelijken hoe de eerste eruit zag, en wat het eindproduct is geworden.

### CSS

De CSS selectors, properties, en at-rules hebben we gesplitst in zeven documenten. Zoals eerder aangegeven hebben we dit gedaan zodat het makkelijker is te werken in verschillende documenten, en dat we ook notities kunnen schrijven voor andere wat alles precies doet en waar. Dit hebben proberen te doen op een logische manier. `campus.css` bevat alle CSS wat over de amstelcampus betreft, ``footer.css`` bevat alle styling dat toegepast wordt aan de `<footer>`, etc etc. In die bestanden zijn er een aantal leuke ontwerpkeuzes gemaakt die we hier gaan bespreken. 

#### @Media Queries
We maken gebruik van media queries in de `screens.css` bestand, omdat het de one-column/mobile-first ontwerp om tovert naar een desktop-friendly layout, maar ook om aan te geven dat [animaties](#animaties) niet hoeven af te spelen als de gebruiker geen animaties wilt zien. Dit doen we met `@media` breakpoints. De belangrijkste media query is die we gebruiken voor grote schermen, zodat als het een bepaalde breedte heeft, dat als de scherm groter is dan `60em` (ongv. `960px` als de element lettertype `16px` is), de campus-carousel een grid-layout gebruikt waar het plaatje de meeste ruimte gebruikt van de linker kolom, en de koptekst en paragraaf de rechter kolom.

<img width="400" height="auto" alt="brave_00LTpzjev5" src="https://github.com/user-attachments/assets/db95327b-2fec-4e2f-9e04-f69d308afd21" />
  
#### Fonts
<img width="400" height="auto" alt="image" src="https://github.com/user-attachments/assets/d9155055-de94-43ed-bbf7-d28e2e6bf623" />  
  
We hebben gekozen voor de Montserrat `sans serif` lettertype ontworpen door Julieta Ulanovsky, omdat het een geometrische, moderne look geeft. We laden dit in CSS met een `@import` at-rule in onze `main.css` bestand. Zo wordt het extern geladen via Google Fonts, en kunnen we het een variable geven in onze `:root` pseudo-class, zodat als we de lettertype willen veranderen, kunnen wij het met één regel doen.

```css
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

:root {
--font: "Montserrat", sans-serif;
}

body {
font-family: var(--font);
}
```
#### Animaties
In de `hero.css` hebben we een animatie waar we een `@keyframes` at-rule gebruiken om de hero-splash een zwevende gevoel te geven en als een introduce tot onze pagina.  

We maken ook gebruik van een paar hover animaties voor onze website. Afbeeldingen met hun code kan je onder bekijken. Voor de hero-splash maken we ook gebruik van `@prefers-reduced motion: no-preference` om als default geen animatie weer te geven, maar als de gebruiker geen voorkeur heeft om ze dan wel toe te passen.

<img width="400" height="auto" alt="brave_NGaz6QKs03" src="https://github.com/user-attachments/assets/bdfcb911-d5fe-41be-abf1-4887186884f8" />
  
```css
/* hero.css */
@keyframes hero-text {
  0%,
  100% {
    transform: scale(1) rotate(-1deg);
  }
  50% {
    transform: scale(1.05) rotate(1deg);
  }
}

/* screens.css */

.hero {
  h1 {
    @media (prefers-reduced-motion: no-preference) {
      animation: hero-text 5s ease-in-out infinite;
    }
  }
}

```

Hier wordt de :hover pseudo element selector gebruikt zodat we de mogelijkheid van een interactie kunnen weergeven aan de gebruiker. Dit heet feedforward, maar het is ook een 'affordance' dat de gebruiker kan herkennen bij andere websites dat het iets is waarop ze kunnen tikken of klikken.

<img width="400" height="auto" alt="brave_aDn0lZoRVh" src="https://github.com/user-attachments/assets/cbd0e058-8111-4007-994a-c9770f92022c" />

```css
.button-campus {
  a {
    background: var(--primary);
    color: var(--bg);
    font-weight: 700;
    padding: 0.5em 0.5em;
    text-decoration: none;
    border-radius: 0.5em;
    &:visited {
      color: var(--bg);
    }
    &:hover {
      color: var(--color);
      background: var(--bg);
      transition:
        background 0.25s ease-in-out,
        color 0.25s ease-in-out,
        border 0.25s ease-in-out;
    }
  }
}
```

#### CSS-Carousel

De highlight van onze website is het maken en ontwerpen van een CSS-carousel. Dit hebben we gedaan door het in een flexbox te zetten met `display: flex;`, en met `padding: 5em 0em` ervoor zorgen dat er witruimte tussen elke item zit, maar alleen bij de x-axis (horizontaal). We verbergen de scrollbar vam de y-axis (verticaal) met `overflow-y: hidden`, en zorgen ervoor dat elke element met de class naam `card-student` een anchor heeft, zodat `scroll-snape-type: x proximity;` ervoor kan zorgen dat bij elke portret foto het blijft hangen, net zoals met een magneet. 

```css
.carousel-student {
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  anchor-name: --card-student;
  scroll-snap-type: x proximity;
  scroll-behavior: auto;
  padding: 5em 0em;
}
```

#### :Target

Met de `:target` selector kunnen we navigatie met tabjes realiseren zonder JS te gebruiken, onder andere mogelijkheden. We gebruiken het om ervoor te zorgen dat als een html element een class heeft van `category-campus`, dat we het 'verbergen' met `display: none;`. We geven dan ook de parent element een `scroll-margin-top:` van `30svh` (een viewport waarde in de hoogte, dat de kleinste gedeelte van een browser neemt zonder andere elementen mee te nemen). Daarna, met `:target`, zeggen wij dat het weer terug tevoorschijn moet komen, maar de hoogte moet wel passen binnen de content.

<img width="400" height="auto" alt="brave_FRQhx48OT1" src="https://github.com/user-attachments/assets/c984d84e-b828-4d9c-93b9-c79f6fc8661d" />

```css
.category-campus {
  display: none;
  scroll-margin-top: 30svh;

  h3 {
    text-align: left;
  }
  &:target {
    display: block;
    height: fit-content;
  }
}
```

## Bronnen

Typografie
“Montserrat - Google Fonts,” Google Fonts. https://fonts.google.com/specimen/Montserrat

HTML
- Why & When to Use Semantic HTML Elements over Divs https://www.youtube.com/watch?v=bOUhq46fd5g
- [Bronnen vermeld bij de Leertaak Squad Page](https://github.com/fdnd-task/your-tribe-squad-page/wiki)

CSS
- Gridbox cheatsheet https://grid.malven.co/
- Flexbox cheatsheet https://flexbox.malven.co/
- Berry Nieskens WOHW Grid Demo (bevat keyframes & animaties) https://codepen.io/bnieskens/pen/emJOGQy
- Grid VS Flexbox https://zerotomastery.io/blog/css-grid-vs-flexbox/
- Carousels with CSS https://developer.chrome.com/blog/carousels-with-css#carousel_gallery
- Trasnform & Transition met Sanne https://github.com/fdnd-task/css-challenges/blob/main/docs/challenge_transform.md
- Grid Challenge met Sanne https://github.com/fdnd-task/css-challenges/blob/main/docs/challenge_grid.md
- :root CSS pseudo-class https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:root
- Media Query fundamentals https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Media_queries
- @import media query https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@import
- :target pseudo class https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:target
- prefers-reduced-motion CSS property https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion
- transition CSS property https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/transition
- @keyframes CSS at-rule https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@keyframes
- scroll-behaviour CSS property https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/scroll-behavior
- scroll-snap-type CSS property https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/scroll-snap-type
- scroll-behavior CSS property https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/scroll-behavior
- scroll-snap-align CSS property https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/scroll-snap-align
- scroll-margin-top CSS property https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/scroll-margin-top
- filter CSS property https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/filter
- box-shadow CSS property https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/box-shadow
- grid-area CSS property https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/grid-area
- grid-template CSS property https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/grid-template
- z-index CSS property https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/z-index
- min-content https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/min-content
- fit-content https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/fit-content
- max-content https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/fit-content
- default viewport units https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/length#default_viewport_units

Auteursrechten
- Fotos van squadmates: Gekoppelde Visitekaartjes, maar ook die gedeeld zijn via MS Teams.
- Fotos van de Amstelcampus: HvanA, “HvanA tipt: de beste (en minder goede) studieplekken van de HvA,” HvanA, Jan. 20, 2020. [Online]. Available: https://hvana.nl/nieuws/hvana-tipt-de-beste-en-minder-goede-studieplekken-van-de-hva
- Foto van Joost Faber: “Agency Frontend Design & Development | Leerbedrijf voor mbo | HvA.” https://www.hva.nl/nieuws/2026/3/fdnd-agency-leren-werken-alsof-je-al-het-werkveld-zit
- Foto van Sanne 't Hooft: Github profiel https://github.com/shooft
- Overige Fotos: Rowynn Sewkaransing, eigen werk

## Team

- [Rowynn Sewkaransing](https://github.com/rowynn-eu)
- [Noey Oo](https://github.com/Noeyoo26)
- [Emmanuel Asenso-kusi](https://github.com/emmatje)

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
