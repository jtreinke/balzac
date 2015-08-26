$(function(){
// var map = L.map('map').setView([44.9833, -93.2667], 12);

// L.tileLayer('http://{s}.tiles.mapbox.com/v3/haraldpfifer.k7ck6mbi/{z}/{x}/{y}.png', {
// attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
// maxZoom: 12
// }).addTo(map);
var map = L.map('map', {
				center: [48.854, 2.344],
				zoom: 15,
				layers: [satellite, streets],
				});
							
	L.tileLayer('http://{s}.tiles.mapbox.com/v3/jtreinke.mo6k9ic3/{z}/{x}/{y}.png', {
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
	maxZoom: 18
	}).addTo(map);

$.get('ungrandhommedeprovence_geocode_sheet1.csv', function(csvContents) {
	var geoLayer = L.geoCsv(csvContents, {
		firstLineTitles: true, 
		fieldSeparator: ',',
		onEachFeature: function (feature, layer) {
		  var popup = '';
		  console.log(feature.properties);
		  
		  //popup += feature.properties['compinfo'] + ' @ ' + "<a href=" + feature.properties['link'] + ">Site</a>";
		  popup += '';
		  
		  if (feature.properties['link'] == 'null'){
		     console.log('Null website');
			 popup+=feature.properties['compinfo'];
		  }else{
		    popup+=feature.properties['compinfo'] + ':' + "<a href=" + feature.properties['link'] + ">"+feature.properties['link']+"</a>";
			}
		  
		  layer.bindPopup(popup);
		  }
		
		});
	
	
	map.addLayer(geoLayer);
	});
});