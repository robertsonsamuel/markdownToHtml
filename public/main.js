$(document).ready(init);

function init() {
  $('#convertButton').on('click',convert);
}

function convert() {
$markdownText = $('#pad').val();
//console.log($markdownText);

$.post( "http://localhost:3000/endpoint", {string:$markdownText}).done(appendTotheDom);


function appendTotheDom(data) {
  var toHtml = $.parseHTML(data);
  $('#htmlArea').append(toHtml);
  console.log(toHtml);
}

// $.get("http://localhost:3000/endpoint", function(data) {
// });


}
