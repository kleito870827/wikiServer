const $ = require('jquery');


$("#Go").on("click", function(){
  var resul = $("#text").val();
  $.getJSON("http://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts%7Cinfo&generator=search&exlimit=10&exintro=1&inprop=url&callback=?&gsrsearch="+resul).then((rep, text, xhr) => {
    console.log(rep);
    for (var i in rep.query.pages){
      $("#resp").append("<li class='li'><h1>"+rep.query.pages[i].title+"</h1></li>");
      $("#resp").append(rep.query.pages[i].extract);
    }

  });
});
