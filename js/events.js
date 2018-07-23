function getIt(){
  $('p').on("click", function() {
    console.log("Hey")
  })  
}

function frameIt(){
  $('img').addClass("tasty")
}

  
  

$(document).ready(function(){

// call functions here
  getIt()
});
