const u="https://covidkashmir.org/api/live";let content=`
<div style="width:150px;"><a style="text-decoration:inherit; color:inherit;" href="https://covidkashmir.org/" target="_blank">
<div id="covid-widget-container" style="text-align: center; width:100px; height:100px; border: 1px solid black; border-radius: 20px; background: red; margin:auto;">
  <span style="text-align: center; color: white; height: 30px; line-height:30px; width: 100%; display: block; margin-top:auto;margin-bottom:auto; font-weight:800; font-size:20px;" id="covid-widget-title">Total</span>
  <div style="width:100px; height: 70px; background: white; border-radius: 0 0 20px 20px">
    <span id="covid-widget-text"style="display:block; text-align:center; width:100%; height:100%; font-weight: 800; font-size: 50px"></span>
  </div>
</div>
<span style="display:block; text-align:center; width:100%; height:100%; font-weight: 100; font-size: 20px">covidkashmir.org</span>
</a>
  </div>
`;function f1(e,c){let i=0;let j=setInterval(()=>{e.style.transform=`rotate3d(0,1,0, ${i++}deg)`;if(i===90){clearInterval(j);c()}},10)}function f2(e,c){let i=90;let j=setInterval(()=>{e.style.transform=`rotate3d(0,1,0, ${i--}deg)`;if(i===0){clearInterval(j);c()}},10)}function p(d){document.getElementById("covid-widget").innerHTML=content;let c=document.getElementById("covid-widget-container");let t1=document.getElementById("covid-widget-title");let t2=document.getElementById("covid-widget-text");t2.innerText=d["Total"];let k=Object.keys(d);let v=Object.values(d);let i=0;function h(){f1(c,()=>{t1.innerText=k[i%4];t2.innerText=v[i%4];i+=1;f2(c,()=>{setTimeout(h,1000)})})}h()}fetch(u).then(r=>r.json()).then((d)=>{let d1={"Active":d["Active"],"Recovered":d["Recovered"],"Deceased":d["Deceased"],"Total":d["Total"]};console.log(d1);p(d1)});