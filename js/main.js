$(document).ready(function() {
  $("button#add").click(function() {
    $(".image").after("<img src='img/unicorn.png'>");
  });
  $("button#remove").click(function() {
    $('img[src$="img/unicorn.png"]').remove();
    });
});
