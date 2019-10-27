$(function(){

  $.ajax({
    method: 'GET',
    url:'https://api.github.com/users/ozguryasharfree/repos',
    success: function(value){
        for(var i = 0; i < value.length; i++) {
            $('ul#projects').append(
                '<li><a href="'+ value[i].html_url +'">' + value[i].name + '</a></li>'
            )
        }
    }
  })  

}())