$.getJSON("https://api.bitcoinaverage.com/ticker/global/USD/", function(data) {
  $('.social-button.btc .value').html("$" + data['ask']);
  $('.social-button.btc-volume .value').html(data['volume_btc']);
})
.fail(function(){
  $('.social-button.btc').remove();
  $('.social-button.btc-volume').remove();
});