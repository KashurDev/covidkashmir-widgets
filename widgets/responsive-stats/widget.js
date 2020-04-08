// Create new link Element 
// var link = document.createElement('link');  
  
// set the attributes for link element 
// link.rel = 'stylesheet';  

// link.type = 'text/css'; 

// link.href = 'widget.css';  

// Get HTML head element to append  
// link element to it  
// document.getElementsByTagName('HEAD')[0].appendChild(link);

let content = `
<div class="rowCovidKashmirOrg">
  <div class="columnCovidKashmirOrg">
    <div class="cardCovidKashmirOrg">
        <div class="title-bar-div-CovidKashmirOrg">
            <span class="title-bar-CovidKashmirOrg">Covid-19 Case Stats (J&K) 
                <span id="blink-text-CovidKashmirOrg">LIVE</span> </span><br/><br/>
            <span id="data-source-text-CovidKashmirOrg">Source: covidkashmir.org</span>
        </div>
        <div class="in-text-containerCovidKashmirOrg in-totalCovidKashmirOrg">
            <span class="countCovidKashmirOrg" id="count-totalCovidKashmirOrg">XXX</span><br/>
            <span class="count-labelCovidKashmirOrg">TOTAL</span>
        </div>
         <div class="in-text-containerCovidKashmirOrg in-activeCovidKashmirOrg">
              <span class="countCovidKashmirOrg" id="count-activeCovidKashmirOrg">XXX</span><br/>
            <span class="count-labelCovidKashmirOrg">Active</span>
                    </div>
        
               <div class="in-text-containerCovidKashmirOrg in-recoveredCovidKashmirOrg">
                 <span class="countCovidKashmirOrg" id="count-recoveredCovidKashmirOrg">XXX</span><br/>
            <span class="count-labelCovidKashmirOrg">Recovered</span>
                    </div>
               <div class="in-text-containerCovidKashmirOrg in-deathCovidKashmirOrg">
             <span class="countCovidKashmirOrg" id="count-deathCovidKashmirOrg">XXX</span><br/>
            <span class="count-labelCovidKashmirOrg">Deceased</span>
        </div>
    </div>
  </div>
    </div>`;

 document.getElementById("covidkashmir-widget").innerHTML = content;

//  Live Blinking Code
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
