$(document).ready(function(){

    $('form').on('submit',function(){
        var item = $('form input').val();
        var todo = {item: item};

        $.ajax({
            type: 'POST',
            url: '/',
            data: todo,
            success: function(data){
                location.reload();
            }
        });
        return false;
    });

    $('li').on('click',function(){
        var item = $(this).text().replace(/-/g," ");
        console.log(item);
        $.ajax({
            type: 'DELETE',
            url: '/'+item,
            data: item,
            success: function(data){
                location.reload();
            }
        });
    });

});