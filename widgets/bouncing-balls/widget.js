const u="https://covidkashmir.org/api/live";
let c = `<a href="https://covidkashmir.org" target="_blank"><div id="covid-widget-outer">
  <div class="covid-widget-element total">
    <p id="covid-data-total"></p>
    <p>Total</p>
  </div>
  <div class="covid-widget-element active">
    <p id="covid-data-active"></p>
    <p>Active</p>
  </div>
  <div class="covid-widget-element recovered">
    <p id="covid-data-recovered"></p>
    <p>Recovered</p>
  </div>
  <div class="covid-widget-element deceased">
    <p id="covid-data-deceased"></p>
    <p>Deceased</p>
  </div>
  <p id="covid-widget-link">covidkashmir.org</p>
</div></a>`

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