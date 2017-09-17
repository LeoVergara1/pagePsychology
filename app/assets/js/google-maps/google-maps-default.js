var map;
var x=19.4227664;
var y=-99.1652964;


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

  $("body").on('click',"#contact1", function (e){ x=19.4227664; y=-99.1652964; console.log("presiono"); initialize();  } )
  $("body").on('click',"#contact2", function (e){ x=19.4146859; y=-99.1615852; console.log("presiono"); initialize();  } )
  $("body").on('click',"#contact3", function (e){ x=19.4314748; y=-99.1557485; console.log("presiono"); initialize();  } )
  $("body").on('click',"#contact4", function (e){ x=19.4156885; y=-99.1567104; console.log("presiono"); initialize();  } )
  $("body").on('click',"#contact5", function (e){ x=19.3404632; y=-99.1986913; console.log("presiono"); initialize();  } )

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
