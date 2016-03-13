/**
 * Chart types:
 * price, priceUSD, priceEUR, priceCNY - requires div "price-chart-" + currency
 * transactionsPerDay - requires div "transactions-per-day-chart"
 *
 * Charts are added by adding a "charts" array to the front matter of the page and also adding the respective container div.
 */

Chart.defaults.global.responsive = true;
Chart.defaults.Line.scaleShowHorizontalLines = false;
Chart.defaults.Line.scaleShowVerticalLines = false;

// Custom type of chart, which only displays half the x axis labels
Chart.types.Line.extend({
    name: "LineCompact",
    initialize: function (data) {
        Chart.types.Line.prototype.initialize.apply(this, arguments);
        var xLabels = this.scale.xLabels;

        xLabels.forEach(function (label, i) {
          if (i % 3 != 0){
            xLabels[i] = '';
          }
        });
    }
});

/* I'll try to write a month chart here.

Chart.types.Line.extend({
  name: "LineMonth",
  initialize: function(data){
    Chart.types.Line.prototype.initialize.apply(this, arguments);
    var xLabels = this.scale.xLabels;

    xLabels.foreach(function(label, i) {

    });
  }
});*/

// This function formats a date to the desired format for charts.
Date.prototype.chartLabel = function() {
var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
 var yyyy = this.getFullYear().toString();
 var dd  = this.getDate().toString();
 return (dd[1]?dd:"0"+dd[0]) + ' ' + monthNames[this.getMonth()] + ' ' + yyyy;
};

var BitcoinCharts = {
  KAIKO_URL: 'https://api.kaiko.com/v1/stats/',
  colors: null,

  parseAPI: function(data){
    var response = {
          'labels': [],
          'values': []
        };

    $.each(data.dates.reverse(), function(index, value){
      response['labels'].push(new Date(value).chartLabel());
    });

    $.each(data.values.reverse(), function(index, value){
      response['values'].push(value);
    });

    return response;
  },

  /**
   * This function initializes a bitcoin chart, takes a type of chart as parameter.
   * It is used for easier, automatic intialization.
   */
  initChart: function(chart){
    self = this,
    self.colors = {
      'primary': 'rgba(170, 200, 101, 1)',
      'primaryFill': 'rgba(170, 200, 101, 0.2)',
      'secondary': 'rgba(188,150,1,1)',
      'secondaryFill': 'rgba(188,150,1,0.2)'
    },
    defaultChartData = {
      labels: [],
      datasets: [
        {
          label: '',
          fillColor: this.colors['primaryFill'],
          strokeColor: this.colors['primary'],
          pointColor: this.colors['primary'],
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: []
        }
      ]
    },
    lotsOfDataOptions = {
      pointHitDetectionRadius: 1,
      pointDot: false
    },
    chartTypes = {
      'transactionsPerDay': {
        'container': 'transactions-per-day',
        'url': self.KAIKO_URL + 'transactions-per-day?json=true&from=2016-01-01',
        'data': $.extend(true, defaultChartData, { 'datasets': [{ 'label': 'transactions per day' }]}),
        'options': lotsOfDataOptions
      },
      'coinsInCirculation': {
        'container': 'coins-in-circulation',
        'url': self.KAIKO_URL + 'coins-in-circulation?json=true&from=2016-01-01',
        'data': $.extend(true, defaultChartData, { 'datasets': [{ 'label': 'Coins in circulation' }]}),
        'options': lotsOfDataOptions
      },
      'difficulty': {
        'container': 'difficulty',
        'url': self.KAIKO_URL + 'difficulty?json=true&from=2016-01-01',
        'data': $.extend(true, defaultChartData, { 'datasets': [{ 'label': 'Difficulty' }]}),
        'options': lotsOfDataOptions
      }
    };

    switch(chart){
      case 'price':
        self.createPriceChart();
        break;
      case 'priceUSD':
        self.createPriceChart('usd');
        break;
      case 'priceEUR':
        self.createPriceChart('eur');
        break;
      case 'priceCNY':
        self.createPriceChart('cny');
        break;
      default:
        if(chart in chartTypes){
          self.createSimpleChart(chartTypes[chart]);
        }else{
          console.error('Chart type does not exist: ' + chart);
        }
        break;
    }
  },

  createSimpleChart: function(object){
    var self = this,
        url = object.url || null,
        container = ('#' + object.container + '-chart') || null,
        chartData = object.data || null,
        chartOptions = object.options || null;

    if(typeof chartData === 'undefined' || chartData == null){
      console.error('ChartData has to be defined');
      return false;
    }else if(typeof container === 'undefined' || container == null){
      console.error('Container has to be defined');
      return false;
    }

    $.getJSON(url, function(data){
      parsedData = self.parseAPI(data);

      chartData['labels'] = parsedData.labels;
      chartData['datasets'][0]['data'] = parsedData.values;
    }).done(function(){
      new Chart($(container).get(0).getContext("2d")).LineCompact(chartData, chartOptions);
    });
  },

  createPriceChart: function(currency){
    var self = this,
        currency = currency || 'usd',
        currencySign = (currency == 'usd' ? '$' :
                       (currency == 'eur' ? '€' :
                       (currency == 'cny' ? 'CNY' : ''))),
        exchange = (currency === 'cny' ? 'btcchina' : 'coinbase')

        // This is the object passed to the chart for formatting, styling, etc.
        chartOptions = {
          // Set the templates for the axis labels and tooltips.
          scaleLabel: (currency == 'usd' ? currencySign : '' )
                      + '<%= value %>'
                      + (currency == 'cny' || currency == 'eur' ? currencySign : ''),
          multiTooltipTemplate: "<%if (datasetLabel){%><%=datasetLabel%>: <%}%>"
                                + (currency == 'usd' ? currencySign : '')
                                + "<%= value %>"
                                + (currency == 'eur' || currency == 'cny' ? currencySign : ''),
        },

        /*
         * This is the option containing the chart data, we're only initializing
         * the necessary empty objects and a minimum amount of data, as that
         * will be loaded dynamically from our source.
         */
        chartData = {
          labels: [],
          datasets: [
            {
              label: 'High',
              fillColor: this.colors['primaryFill'],
              strokeColor: this.colors['primary'],
              pointColor: this.colors['primary'],
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(220,220,220,1)",
              data: []
            },
            {
              label: 'Low',
              fillColor: this.colors['secondaryFill'],
              strokeColor: this.colors['secondary'],
              pointColor: this.colors['secondary'],
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(220,220,220,1)",
              data: []
            }
          ]
        },
        ctx = $("#price-chart-" + currency).get(0).getContext("2d");

    // Retrieve the JSON data from Kaiko's API and format it for our chart.
    $.getJSON('https://api.kaiko.com/v1/history/exchanges?exchanges=' + exchange, function(data){
      var tmpValues = data[exchange]['btc' + currency].reverse();

      $.each(tmpValues, function(){
        chartData['labels'].push(new Date(this['timestamp'] * 1000).chartLabel());
        chartData['datasets'][0]['data'].push(this['h']);
        chartData['datasets'][1]['data'].push(this['l']);
      });
    }).done(function(){
      // Draw the chart with the data and options.
      var priceChart = new Chart(ctx).LineCompact(chartData, chartOptions);
    });
  }
};
