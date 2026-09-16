# Squad page FDND

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving

We hebben in een team en squad page gemaakt dat onze 'squad' hoort te representeren. Het verwijst naar het visitekaartje van eenieder die deel is van onze squad (studenten en docenten), met ook informatie over de amstelcapus.

Wat vind je op de pagina?

- Persoonlijke Visitekaartjes & Portretten: Elk squad-lid heeft een eigen, uniek visitekaartje ontworpen. De portretfoto’s op de squad page zijn gekoppeld aan de persoonlijke webpagina’s van ieder squad-lid. Door op een portret te klikken of naar een profiel te navigeren, krijg je direct toegang tot het bijbehorende visitekaartje en ontdek je meer over de persoon achter het portret.
- De Amstelcampus Gids: Naast onze persoonlijke profielen vind je op de pagina relevante en handige informatie over de Amstelcampus. Hiermee verbinden we onze persoonlijke identiteit als studenten direct aan de fysieke omgeving waarin we samenwerken en studeren.

Live link naar onze webpage: https://edu.nl/e8nq8

## Gebruik

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

<img width="1023" height="778" alt="brave_00LTpzjev5" src="https://github.com/user-attachments/assets/db95327b-2fec-4e2f-9e04-f69d308afd21" />

#### Fonts

#### Animaties

#### @Keyframes

#### CSS-Carousel

#### Scroll-bar Styling

#### :hover

#### :focus-visible

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
- - :target pseudo class https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:target
- prefers-reduced-motion CSS property https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion
- transition CSS property https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/transition
- @keyframes CSS at-rule https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@keyframes
- scroll-behaviour CSS property https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/scroll-behavior
- scroll-snap-type CSS property https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/scroll-snap-type
- scroll-behavior CSS property https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/scroll-behavior
- scroll-snap-align CSS property https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/scroll-snap-align
- filter CSS property https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/filter
- box-shadow CSS property https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/box-shadow
- grid-area https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/grid-area
- grid-template https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/grid-template

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
