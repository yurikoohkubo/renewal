$(function() {
    // classの追加
    $('btn_pc').on('click', function() { 
        if($('#new').hasClass('switch_a')){
            console.log('test1');
            $('#new').removeClass('switch_a');
            $('#new').addClass('switch_a_back');
        }else{
            console.log('test2');
            $('#new').removeClass('switch_a_back');
            $('#new').addClass('switch_a');
        } 
    }) 
  });