class HomeController

  constructor: () ->

  bindEvents:() ->
    $("#layerOne").on("click", console.log "2layer")

    $(".block-title").on('click',console.log "Aquí")
    $("#home").on('click',console.log "No Da")
    console.log $("#home")
    $( "body" ).on( "click", "#home", ->
        console.log "Holaaaaa")
    $( "body" ).on( "click", "#layerOne", ->
      console.log "layer")
    if $(window).width() < 960 then console.log "Chico"


  size:(e) ->
    if $(window).width() < 600
     $("#layerOne").data("x", 100)
     $("#layerTwo").data("x", 360)
     $("#layerThree").data("x", 640)

    window.onresize = (e) ->
      console.log $(window).width()
      if $(window).width() < 600
       $("#layerOne").data("x", 100)
       $("#layerTwo").data("x", 360)
       $("#layerThree").data("x", 640)



  start: () ->
    @bindEvents()
    @size()


new HomeController().start()

