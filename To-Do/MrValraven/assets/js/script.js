

$("li").click(function(){
    $(this).toggleClass("completed");
});

$("ul").on("click" , "span", function(event){
    $(this).parent().fadeOut(500,function(){
        this.remove();
    });
    Event.stopPropagation();
});


$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var toDoText = $(this).val();
        $(this).val("");

        $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + toDoText + "</li>")
    }
});