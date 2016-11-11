$("ul").on("click", "li", function(){
    $(this).toggleClass("completed")
});

$("ul").on("click", "span", function(todo){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    todo.stopPropagation();
});

$("input").keypress(function(key){
    if (key.which===13) {
        var newTodo=$(this).val();
        $("ul").append("<li><span>X</span> "+newTodo+"</li>");
        $(this).val("");
    } 
});

//need to use on click so i can still check off new items