$(function() {
    // classの追加
    $('btn').on('click', function() {
        


        if($('#newsblock').hasClass('switch_a')){
            console.log('test1');
            $('#newsblock').removeClass('switch_a');
            $('#newsblock').addClass('switch_a_back');
        }else{
            console.log('test2');
            $('#newsblock').removeClass('switch_a_back');
            $('#newsblock').addClass('switch_a');
        } 

        if($('#tweet_sh').hasClass('switch_b')){
            console.log('test3');
            $('#tweet_sh').removeClass('switch_b');
            $('#tweet_sh').addClass('switch_b_back');
        }else{
            console.log('test4');
            $('#tweet_sh').removeClass('switch_b_back');
            $('#tweet_sh').addClass('switch_b');
        } 
    }) 


  
    // ボタンイベントでclassのtoggle
/*     $('button').on('click', function() {
      $('h1, p').toggleClass('new_class');
    }) */
  });