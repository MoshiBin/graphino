

$(function() {
  var graph = $("#graph");
  var graphUrl = "https://www.hostedgraphite.com/32297e36/graphite/render/";
  var fromTime = -10;
  var untilTime = 0;
  var bgcolor = null;
  var fgcolor = null;
  var tickSize = 3; // The amount of minutes to move using the arrows

  var target = getParameterByName("target");
  var width = getParameterByName("width");
  var height = getParameterByName("height");
  var title = getParameterByName("title");

  function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#/]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  graph.load(function(e) {
    $(this).next(".toolbox").children(".loader").hide();
  });

  function redrawGraph() {
    graph.next(".toolbox").children(".loader").show();
    var fromTimeString = fromTime != 0 ? fromTime.toString() + "minutes" : "now";
    var untilTimeString = untilTime != 0 ? untilTime.toString() + "minutes" : "now";
    url = graphUrl + "?lineMode=connected&lineWidth=4&target=" + target + "&from=" + fromTimeString + "&until=" + untilTimeString;
    console.log(url);
    if (title != "") { url = url + "&title=" + title; }
    if (width != "") { url = url + "&width=" + width; }
    if (height != "") { url = url + "&height=" + height; }
    if (bgcolor != null) { url = url + "&bgcolor=" + bgcolor; }
    if (fgcolor != null) { url = url + "&fgcolor=" + fgcolor; }

    var now = new Date();
    url = url + "&cacheBuster=" + now.getTime();

    graph.attr("src", url);
  }

  $("#back").click(function(e) {
    e.preventDefault();
    fromTime = fromTime - tickSize;
    untilTime = untilTime - tickSize;
    redrawGraph();
  });

  $("#forward").click(function(e) {
    e.preventDefault();
    fromTime = fromTime + tickSize;
    untilTime = untilTime + tickSize;
    redrawGraph();
  });

  $("#zoomOut").click(function(e) {
    e.preventDefault();
    fromTime = fromTime - 10;
    redrawGraph();
  });

  $("#zoomIn").click(function(e) {
    e.preventDefault();
    fromTime = fromTime + 10;
    redrawGraph();
  });

  $("#fastForward").click(function(e) {
    e.preventDefault();
    fromTime = -10;
    untilTime = 0;
    redrawGraph();
  });

  redrawGraph();
});
