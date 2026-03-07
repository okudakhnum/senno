jQuery(function(f){var e=f(".button");e.hide();f(window).scroll(function(){if(f(this).scrollTop()>2300){e.fadeIn()}else{e.fadeOut()}});f('a[href^="#"]').click(function(){var j=200;var i=f(this).attr("href");var k=f(i==="#"||i===""?"html":i);var d=k.offset().top;f("body,html").animate({scrollTop:d},j,"swing");return false});var c=new Date();var h=c.getFullYear();var a=("0"+(c.getMonth()+1)).slice(-2);var g=("0"+(c.getDate()-2)).slice(-2);var b="最新情報 "+h+"年"+a+"月"+g+"日";var nowEl=document.getElementById("now");if(nowEl){nowEl.innerHTML=b}});

document.querySelectorAll('.voice-btn').forEach(button => {
    button.addEventListener('click', () => {
      const voiceText = button.previousElementSibling; // ボタンの直前のvoice-textを取得
  
      if (voiceText.style.display === 'none' || !voiceText.style.display) {
        voiceText.style.display = 'block';
        button.textContent = '閉じる';
        button.classList.add('active'); // 三角形を下向きに
      } else {
        voiceText.style.display = 'none';
        button.textContent = '詳細を確認する';
        button.classList.remove('active'); // 三角形を上向きに
      }
    });
  });
  

$(function() {
    $('.inquiry__lists li').click(function() {
        const $answer = $(this).find('.a');
        $answer.slideToggle();
        $(this).find('.q').toggleClass('active');
        $(this).siblings().find('.a').slideUp();
        $(this).siblings().find('.q').removeClass('active');
        $(this).toggleClass('active');
    });
});
