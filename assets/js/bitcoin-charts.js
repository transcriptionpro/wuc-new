Chart.defaults.global.responsive = true;

Date.prototype.chartLabel = function() {
var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
 var yyyy = this.getFullYear().toString();
 var dd  = this.getDate().toString();
 return (dd[1]?dd:"0"+dd[0]) + ' ' + monthNames[this.getMonth()] + ' ' + yyyy;
};

var BitcoinCharts = {
  /**
   * This function initializes a bitcoin chart, takes a type of chart as parameter.
   * It is used for easier, automatic intialization.
   */
  initChart: function(chart){
    switch(chart){
      case 'price':
        this.createPriceChart();
        break;
      default:
        console.error('Chart type does not exist: ' + chart);
        break;
    }
  },
  createPriceChart: function(){
    var chartOptions = {
          scaleShowHorizontalLines: false,
          scaleShowVerticalLines: false,
          multiTooltipTemplate: "<%if (datasetLabel){%><%=datasetLabel%>: <%}%>$<%= value %>",
        },
        chartData = {
          labels: [],
          datasets: [
            {
              label: 'Low',
              fillColor: "rgba(220,220,220,0.2)",
              strokeColor: "rgba(220,220,220,1)",
              pointColor: "rgba(220,220,220,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(220,220,220,1)",
              data: []
            },
            {
              label: 'High',
              fillColor: "rgba(220,220,220,0.2)",
              strokeColor: "rgba(220,220,220,1)",
              pointColor: "rgba(220,220,220,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(220,220,220,1)",
              data: []
            }
          ]
        },
        exchange,
        ctx = $("#price-chart").get(0).getContext("2d");

    $.getJSON('https://api.kaiko.com/v1/history/exchanges?exchanges=coinbase', function(data){
      exchange = Object.keys(data)[0];
      var tmpValues = data[exchange][Object.keys(data[exchange])[0]].reverse();

      $.each(tmpValues, function(){
        chartData['labels'].push(new Date(this['timestamp'] * 1000).chartLabel());
        chartData['datasets'][0]['data'].push(this['l']);
        chartData['datasets'][1]['data'].push(this['h']);
      });
    }).done(function(){
      var priceChart = new Chart(ctx).Line(chartData, chartOptions);
    });
  }
};
