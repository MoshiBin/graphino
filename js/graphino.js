
$(function() {
  var graph = $("#graph");
  var graphUrl = "https://www.hostedgraphite.com/32297e36/graphite/render/?width=640&height=480&target=test&title=test&lineMode=connected&lineWidth=4";
  var fromTime = -10;
  var untilTime = 0;
  var bgcolor = null;
  var fgcolor = null;
  var tickSize = 3; // The amount of minutes to move using the arrows

  function redrawGraph() {
    var fromTimeString = fromTime != 0 ? fromTime.toString() + "minutes" : "now";
    var untilTimeString = untilTime != 0 ? untilTime.toString() + "minutes" : "now";
    url = graphUrl + "&from=" + fromTimeString + "&until=" + untilTimeString;
    if (bgcolor != null) {
      url = url + "&bgcolor=" + bgcolor;
    }
    if (fgcolor != null) {
      url = url + "&fgcolor=" + fgcolor;
    }

    graph.attr("src", graphUrl + "&from=" + fromTimeString + "&until=" + untilTimeString);
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

  redrawGraph();
});
