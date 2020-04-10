const u="https://covidkashmir.org/api/live";
let c = `<div id="covid-widget-outer" class="outer">
  <div id="covid-widget-title">
    <span><a href="https://covidkashmir.org" target="_blank">CovidKashmir.org</a></span>
  </div>
  <div id="covid-widget-inner" class="inner">
    <div  class="covid-widget-element">
      <p class="covid-widget-title">
      Total
    </p>
    <p id="covid-data-total" class="covid-widget-data">
      
    </p>
    </div>
    <div  class="covid-widget-element">
      <p class="covid-widget-title">
      Active
    </p>
    <p id="covid-data-active" class="covid-widget-data">
    </p>
    </div>
    <div  class="covid-widget-element">
      <p class="covid-widget-title">
      Recovered
    </p>
    <p id="covid-data-recovered" class="covid-widget-data">
    </p>
    </div>
    <div  class="covid-widget-element">
      <p class="covid-widget-title">
      Deceased
    </p>
    <p id="covid-data-deceased" class="covid-widget-data">
      
    </p>
    </div>
  </div>
</div>`

function p(d) {
    document.getElementById("covidkashmir-widget").innerHTML = c;
    document.getElementById("covid-data-total").innerText=d["Total"];
  document.getElementById("covid-data-active").innerText=d["Active"];
  document.getElementById("covid-data-recovered").innerText=d["Recovered"];
  document.getElementById("covid-data-deceased").innerText=d["Deceased"];
}

fetch(u).then(r => r.json()).then((d) => {
    let d1 = {
        "Active": d["Active"],
        "Recovered": d["Recovered"],
        "Deceased": d["Deceased"],
        "Total": d["Total"]
    };
    p(d1)
});