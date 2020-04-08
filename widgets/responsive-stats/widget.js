// Live Blinking Code
// This code makes the span next to J&K stats text blink
var blink = document.getElementById('blink-text-CovidKashmirOrg');
setInterval(function() {
   blink.style.opacity = (blink.style.opacity == 0 ? 1 : 0);
}, 500); 

// Main JS/
// This code inserts the JSON Data Into the HTML Div Tags

fetch('https://covidkashmir.org/api/live')
    .then(res => res.json())
    .then((out) => {
        document.getElementById('count-totalCovidKashmirOrg').innerHTML = out.Total;
        document.getElementById('count-activeCovidKashmirOrg').innerHTML = out.Active;
        document.getElementById('count-recoveredCovidKashmirOrg').innerHTML = out.Recovered;
        document.getElementById('count-deathCovidKashmirOrg').innerHTML = out.Deceased;
        
}).catch(err => console.error(err));