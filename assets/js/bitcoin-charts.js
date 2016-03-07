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
    var chartData = {
          labels: [],
          datasets: [
            {
              label: 'open',
              data: []
            }
          ]
        },
        exchange,
        ctx = $("#price-chart").get(0).getContext("2d");

    $.getJSON('https://api.kaiko.com/v1/history/exchanges?exchanges=coinbase&fields=o', function(data){
      exchange = Object.keys(data)[0];
      var tmpValues = data[exchange][Object.keys(data[exchange])[0]];

      $.each(tmpValues, function(){
        chartData['labels'].push(new Date(this['timestamp'] * 1000).chartLabel());
        chartData['datasets'][0]['data'].push(this['o']);
      });
    }).done(function(){
      console.log(chartData);
      var priceChart = new Chart(ctx).Line(chartData);
    });
  }
};
