function getIt(){
  $('p').on("click", function() {
    console.log("Hey")
  })  
}

function frameIt(){
  $('img').addClass("tasty")
}

function pressIt(){
  $('input').on("keydown", function(key){
    if(key.which==83){
      alert('G was pressed')
    }
  })
}
  

$(document).ready(function(){

// call functions here
  getIt()
  frameIt()
});
