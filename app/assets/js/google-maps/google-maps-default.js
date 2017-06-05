var map;
var x=51.5255069;
var y=-0.1834507;


function initialize() {
  var myLatlng = new google.maps.LatLng(x,  y);
  var mapOptions = {
    zoom: 14,
	  scrollwheel: false,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  map = new google.maps.Map(document.getElementById('mapCanvas'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
	  animation: google.maps.Animation.DROP,
      title: 'Hello World!'
  });

  var contentString = '<div class="info-window-content"><h2>Web Pixels</h2>'+
  					  '<h3>Designing forward</h3>'+
					  '<p>Some more details for directions or company informations...</p></div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });

  console.log("Estoy aaa");
  $("body").on('click',"#contact1", function (e){ x=60; y=0.1; console.log("presiono"); initialize();  } )

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

function reloadMap() {

 $("body").on('click',"#contact1", function (e){ console.log("Como estas");  } )
 $("body").on('click',".col-md-4", function (e){ console.log("Como estas");  } )

}

$('a[data-type="gmap"]').on('shown.bs.tab', function (e) {
  reloadMap();
  initialize();
})
