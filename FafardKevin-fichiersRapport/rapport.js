$(document).ready(function(){
  $("#exempleModifHtml").click(function(){
    $("#exempleModifHtml").text("Bravo!");
  });
});

$(document).ready(function(){
  $("#collapseTwo").click(function(){
    $("#collapseTwo").addClass("couleurBleu");
  });
});

$(document).ready(function(){


  $("#premierTexte").click(function(){
    $('#deuxiemeTexte').fadeOut(600, function(){ $(this).remove();});
  });

  $("#premierTexteAfter").click(function(){
      $(this).after("<p>Un deuxième texte</p>");
  });

  //Scroll smooth
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      if(!$(this).parent().parent().hasClass("nav-tabs")){
        e.preventDefault();
        $([document.documentElement, document.body]).animate({
          scrollTop:$(document.querySelector(this.getAttribute('href'))).offset().top - 60
        },1250, 'swing');
      }
    });
  });



  $("#imgFamille").hide();

  $("#clickExempleFamille").click(function(){
    if($("#imgFamille").is(":visible")){
      $("#imgFamille").hide("fast");
    } else {
      $("#imgFamille").show("slow");
    }
  });


  $("#imgDocReady").hide();

  $("#docReadyPopup").click(function(){
    if($("#imgDocReady").is(":visible")){
      $("#imgDocReady").hide("fast");
    } else {
      $("#imgDocReady").show("slow");
    }
  });



  $("#imageVariable").hide();

  $("#clickVariable").click(function(){
    if($("#imageVariable").is(":visible")){
      $("#imageVariable").hide("slow");
    } else {
      $("#imageVariable").show("slow")
    }
  });


  $("#tableMDimensions").hide();

  $("#afficherDimensions").click(function(){

    if($(this).text() == "Afficher toutes les méthodes de manipulations de dimensions"){

      $(this).text("Cacher toutes les méthodes de manipulations de dimensions");
      
      $("#tableMDimensions").show("slow");

    } else {

      $(this).text("Afficher toutes les méthodes de manipulations de dimensions") 
      $("#tableMDimensions").hide(1000);

    }

  });




  $("#tableSelecteurs").hide();

  $("#afficherSelecteur").click(function(){

    if($(this).text() == "Afficher les sélecteurs"){

      $(this).text("Cacher les sélecteurs");
      
      $("#tableSelecteurs").show("slow");

    } else {

      $(this).text("Afficher les sélecteurs") 
      $("#tableSelecteurs").hide(1000);

    }

  });

  $("#tableManipDom").hide();

  $("#afficherManipulationsDom").click(function(){

    if($(this).text() == "Afficher toutes les manipulations possibles"){
;
      $(this).text("Cacher toutes les manipulations possibles");
      
      $("#tableManipDom").show("slow");

    } else {

      $(this).text("Afficher toutes les manipulations possibles") 
      $("#tableManipDom").hide(1000);

    }

  });

  $("#tableTraversing").hide();

  $("#afficherTraversing").click(function(){

    if($(this).text() == "Afficher toutes les méthodes de parcours"){

      $(this).text("Cacher toutes les méthodes de parcours");
      
      $("#tableTraversing").show("slow");

    } else {

      $(this).text("Afficher toutes les méthodes de parcours") 
      $("#tableTraversing").hide(1000);

    }

  });


  $("#tableCSS").hide();

  $("#afficherMethCSS").click(function(){

    if($(this).text() == "Afficher toutes les méthodes CSS"){
;
      $(this).text("Cacher toutes les méthodes CSS");
      
      $("#tableCSS").show("slow");

    } else {

      $(this).text("Afficher toutes les méthodes CSS") 
      $("#tableCSS").hide(1000);

    }

  });


  $("#tableAtt").hide();

  $("#afficherMethAtt").click(function(){

    if($(this).text() == "Afficher toutes les méthodes d'attributs"){

      $(this).text("Cacher toutes les méthodes d'attributs");
      
      $("#tableAtt").show("slow");

    } else {

      $(this).text("Afficher toutes les méthodes d'attributs") 
      $("#tableAtt").hide(1000);

    }

  });

  $("#exempleOn").on("click mouseleave", function(){
    $(this).css("background-color", getRandomColor());
  });


  $('#panimations').click(function(){
    $(this).animate({
      height: 'auto',
      width: getRandomWidth(),
      display: 'inline-block'
    },
    5000, 'swing');
  });
  

  $("#hdtPrev").click(function(){
    $("#lecarousselHDT").carousel('prev')
  });

  $("#hdtNext").click(function(){
    $("#lecarousselHDT").carousel('next');
    
  });

  $("#ldcPrev").click(function(){
    $("#lecarousselLDC").carousel('prev')
  });

  $("#ldcNext").click(function(){
    $("#lecarousselLDC").carousel('next')
  });

  $("#ldiPrev").click(function(){
    $("#lecarousselLDI").carousel('prev')
  });

  $("#ldiNext").click(function(){
    $("#lecarousselLDI").carousel('next')
  });

  $("#hdtPrev, #ldcPrev, #ldiPrev").on("mousedown", function(){
    var monBouton = $(this);
    monBouton.addClass("fa-spin").addClass("reverse");
    setTimeout(function(){
      monBouton.removeClass("fa-spin").removeClass("reverse");
    },750);
  });

  $(" #hdtNext, #ldcNext, #ldiNext").on("mousedown", function(){
    var monBouton = $(this);
    monBouton.addClass("fa-spin");
    setTimeout(function(){
      monBouton.removeClass("fa-spin");
    },750);
  });

  $('#monDiv').children().each(function (index) {
    alert('Index: ' + index + ', html: ' + $(this).html());
  });

  $("button, img").parent("p").css("text-align", "center");

});

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomWidth(){
  var numbers ='123456789';
  var pourcentage = '%';
  var largeur = 0;
  for(var i =0; i<2;i++){
    largeur += numbers[getRandomInt(8)]
  }

  return largeur + pourcentage;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}




