<script>
L.geoCsv(null,{
	titles: ['lat', 'lng', 'popup'],
	fieldSeparator: ';',
	lineSeparator: '\n',
	deleteDobleQuotes: true,
	firstLineTitles: false,
	onEachFeature: function (feature, layer) {
	var popup = '';

	for (var clave in feature.properties) {
	var title = geo_csv.getPropertyTitle(clave);
	popup += '<b>'+title+'</b><br />'+feature.properties[clave]+'<br /><br />';
	}
	
	layer.bindPopup(popup);
	}
});```js
(function() {
  'use strict';

  var map = L.map('mapContainer');

  $.get('data.csv', function(csvContents) {
    var geoLayer = L.geoCsv(csvContents, {firstLineTitles: true, fieldSeparator: ','});
    map.addLayer(geoLayer);
  });
});
```