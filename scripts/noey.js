// 1. SELECTEER DE SCROLL CONTAINER
const scrollContainer = document.getElementById('scrollContainer');

// 2. OMSETTEN VAN VERTICAAL MUISWIEL-SCROLLEN NAAR HORIZONTAAL SCROLLEN
scrollContainer.addEventListener('wheel', (evt) => {
    // Voorkom dat de hele pagina naar beneden scrolt
    evt.preventDefault();
    
    // Scroll de container horizontaal door de deltaY (muiswiel) aan te spreken
    scrollContainer.scrollBy({
        left: evt.deltaY * 3, // Vermenigvuldig met 3 voor een vlot tempo
        behavior: 'smooth'   // Zorgt voor de soepele animatie
    });
});