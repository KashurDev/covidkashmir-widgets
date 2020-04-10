let widgetData;
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};



fetch("/data/widgets.json").then(response => response.json()).then(data => {
    let $swidget = $("#select-widget select")
    let widgets = Object.values(data)
    for (let widget of widgets) {
        $swidget.append(`<option>${widget.name}</option>`)
    }
    let widget = getUrlParameter('widget')
    let selectedWidget;
    if(widget){
      selectedWidget = data[widget]
    }
    else {
        selectedWidget = widgets[0]
    }
     

    let selClass = getUrlParameter('class')
    if(!selClass && Object.keys(selectedWidget).includes("classes")){
        selClass = selectedWidget.classes[0]
    }
    
    $("#covidkashmir-widget").html("")
    if(selClass){
        $("#covidkashmir-widget").addClass(selClass)
    }
    $(".temp-widget").remove()
    $("#widget-name").html(selectedWidget.name)
    $("#widget-author").html(`<a href="https://github.com/${selectedWidget.contributor.username}" target="_blank">${selectedWidget.contributor.name}</a>`)
    $("#input-html").val(`
    <div id="covidkashmir-widget" ${(selClass)? `class="${selClass}"`:""}></div>
    `)
    $("#input-js").val(`<script src="https://cdn.jsdelivr.net/gh/haideralipunjabi/covidkashmir-widgets/widgets/${selectedWidget.name}/widget.min.js"></script>`)
    if(selectedWidget.css){
        $("#p-css").removeClass("is-hidden")
        $("#input-css").removeClass("is-hidden")
        $("#input-css").val(`<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/haideralipunjabi/covidkashmir-widgets/widgets/${selectedWidget.name}/widget.min.css">`)
    }

    $swidget[0].selectedIndex = widgets.indexOf(selectedWidget)
    if(Object.keys(selectedWidget).includes("classes")){
        $("#select-class").removeClass("is-hidden")
        for(let cl of selectedWidget.classes){
            $("#select-class select").append(`<option>${cl}</option>`)
        }
        $("#select-class select")[0].selectedIndex = selectedWidget.classes.indexOf(selClass)
        $("#select-class select").on('change',e => {
            
            window.location.href = `/index.html?widget=${getUrlParameter('widget')}&class=${$("#select-class select")[0].selectedOptions[0].text}`
        })
    }
    $("body").append(`
     <link  class="temp-widget" rel="stylesheet" href="widgets/${selectedWidget.name}/widget.css">
     <script class="temp-widget" src="widgets/${selectedWidget.name}/widget.js"></script>
  `)
    $swidget.on("change", e => {
        window.location.href = "/index.html?widget=" + widgets[$swidget[0].selectedIndex].name
    })
})