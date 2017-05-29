class HomeController

  constructor: () ->

  bindEvents:() ->
    $(".block-title").on('click',console.log "Aquí")
    $("#home").on('click',console.log "No Da")
    console.log $("#home")
    $( "body" ).on( "click", "#home", ->
        console.log "Holaaaaa")



  start: () ->
    @bindEvents()
    console.log "hola"

new HomeController().start()

