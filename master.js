// Creare una Todo-list in cui si possano aggiungere nuovi todo e rimuoverli.
$(document).ready(function () {

    $("#btn-input").click(function (){
        var input = $("#input").val();
        $("#input").val('');

        var template = $("#todo li").clone();

        template.children("span.title").text(input);

        template.children("span.delete").click(function () {
            $(this).parent().remove();
    });

    template.children("span.edit").click(function (){
        var title = $(this).siblings("span.title").text();
        $(this).siblings("span.title").hide();

        $(this).siblings("input").val(title).show();

    });

    template.children("input").keyup(function (e) {
        if (e.which == 13) {
            var title = $(this).val();
            $(this).hide();
            $(this).siblings("span.title").text(title).show();
        }
    });
    $("#todos").append(template);
    });
    
});