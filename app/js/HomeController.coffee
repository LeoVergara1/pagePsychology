class HomeController

  constructor: () ->

  bindEvents:() ->


  size:(e) ->
    if $(window).width() < 600
     $("#layerOne").data("x", 100)
     $("#layerTwo").data("x", 360)
     $("#layerThree").data("x", 640)

    window.onresize = (e) ->
      if $(window).width() < 600
       $("#layerOne").data("x", 100)
       $("#layerTwo").data("x", 360)
       $("#layerThree").data("x", 640)



  start: () ->
    @bindEvents()
    @size()


new HomeController().start()

