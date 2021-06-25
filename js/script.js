$('.burger-btn').on('click',function(){ //"burger-btn"をクリックしたら、
  $('.burger-btn').toggleClass('cross'); //ハンバーガーボタンに"cross"というclassをつけたり外したりする
  $('.header-nav').fadeToggle(300); //ヘッダーナビゲーションを300ミリ秒でフェードイン、フェードアウトさせる
  $('body').toggleClass('noscroll') //bodyに対して"noscroll"というclassをつけたり外したりする
  $('.kv').toggleClass('noshow') 
});

 if( $(window).width() <= 768 ){ //デバイスの幅が768以下のとき
  $('.nav-item>a').on('click',function(){ //.nav-item>aをクリックすると
    $('.header-nav').fadeOut(300); //.header-navが0.3秒でフェードアウト(メニューのフェードアウト)
    $('.burger-btn').removeClass('cross'); // .burger-btnのcrossクラスを削除
    $('body').removeClass('noscroll'); //bodyのnoscrollクラスを削除
  });
}