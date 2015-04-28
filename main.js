$(document).ready(function(){
  var today = new Date().toISOString().substr(0, 10);
  function loadAndPlot(){
    $.ajax({type: "GET",
      url:"./logs/" + today + ".csv",
    dataType: "text",
    success: plotData
    });
    function plotData(data){
      var lines = data.split("\n");
      var values = _.map(lines, function(line){
        var parts = line.split(",");
        if (parts.length === 3 && _.endsWith(line, "OK")) {
          var date = moment(parts[0]).add(2, "hours").toDate();
          var voc = parts[1].split(" ")[2];
          var o = [date, voc];
          return o;
        }
      });
      options = {xaxis: { mode: "time",
        max: moment(values[values.length-2][0]).add(10, "minutes").toDate()
      }
      };
      $.plot("#chart", [values], options);
    }
  }
  loadAndPlot();
  setInterval(loadAndPlot, 1000);
});
