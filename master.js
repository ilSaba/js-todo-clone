// Creare una Todo-list in cui si possano aggiungere nuovi todo e rimuoverli.
$(document).ready(function () {
     var template = $("#todo li").clone();
     $("#todos").append(template);

     $('#todos span').click(function (){
        $(this).parent().remove();
     })

     $("#btn-input").click(function (){
        var input = $("#input").val();
        $("#todos").append(input);
     })
});