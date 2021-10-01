$(function() {
    // classの追加
    $('btn').on('click', function() {
        console.log('hello');


        if($('sw1').hasClass('switch_a')){
            $('sw1').removeClass('switch_a');
            $('sw1').addClass('switch_a_back');
        }else{
            $('sw1').removeClass('switch_a_back');
            $('sw1').addClass('switch_a');
        } 

        if($('sw2').hasClass('switch_b')){
            $('sw2').removeClass('switch_b');
            $('sw2').addClass('switch_b_back');
        }else{
            $('sw2').removeClass('switch_b_back');
            $('sw2').addClass('switch_b');
        } 
    }) 


  
    // ボタンイベントでclassのtoggle
/*     $('button').on('click', function() {
      $('h1, p').toggleClass('new_class');
    }) */
  });