$(function() {
    // classの追加
    $('btn').on('click', function() {
        
        if($('#newsblock').hasClass('switch_a')){
            $('#newsblock').removeClass('switch_a');
            $('#newsblock').addClass('switch_a_back');
        }else{
            $('#newsblock').removeClass('switch_a_back');
            $('#newsblock').addClass('switch_a');
        } 

        if($('#tweet_sh').hasClass('switch_b')){
            $('#tweet_sh').removeClass('switch_b');
            $('#tweet_sh').addClass('switch_b_back');
        }else{
            $('#tweet_sh').removeClass('switch_b_back');
            $('#tweet_sh').addClass('switch_b');
        } 
    }) 
  });