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
      case 'priceUSD':
        this.createPriceChart('usd');
        break;
      case 'priceEUR':
        this.createPriceChart('eur');
        break;
      case 'priceCNY':
        this.createPriceChart('cny');
        break;
      case 'transactionsPerDay':
        this.createTransationsPerDayChart();
        break;
      default:
        console.error('Chart type does not exist: ' + chart);
        break;
    }
  },

  createTransationsPerDayChart: function(){
    var chartOptions = {
          scaleShowHorizontalLines: false,
          scaleShowVerticalLines: false
        },
        chartData = {
          labels: [],
          datasets: [
            {
              label: 'Transactions per day',
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
        ctx = $("#transactions-per-day-chart").get(0).getContext("2d");

    $.getJSON('https://api.kaiko.com/v1/stats/transactions-per-day?json=true&from=2016-01-01', function(data){
      $.each(data.dates.reverse(), function(index, value){
        chartData['labels'].push(new Date(value).chartLabel());
      });

      $.each(data.values.reverse(), function(index, value){
        chartData['datasets'][0]['data'].push(value);
      });
    }).done(function(){
      var transactionsPerDayChart = new Chart(ctx).Line(chartData, chartOptions);
    });
  },

  createPriceChart: function(currency){
    var currency = currency || 'usd',
        exchange = (currency == 'usd' || currency == 'eur' ? 'coinbase' : 'btcchina')
        chartOptions = {
          scaleShowHorizontalLines: false,
          scaleShowVerticalLines: false,
          multiTooltipTemplate: "<%if (datasetLabel){%><%=datasetLabel%>: <%}%>" + (currency == 'usd' ? '$' : '' ) + "<%= value %>" + (currency == 'eur' ? '€' : (currency == 'cny' ? 'CNY' : '')),
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
        ctx = $("#price-chart-" + currency).get(0).getContext("2d");

    $.getJSON('https://api.kaiko.com/v1/history/exchanges?exchanges=' + exchange, function(data){
      var tmpValues = data[exchange]['btc' + currency].reverse();

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
