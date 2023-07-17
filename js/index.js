$(document).ready(()=>{
  let menuTab1 = $('#menuTab1');
  let menuTab2 = $('#menuTab2');
  let main = $('#main');
  let quick = $('#quick');


  menuTab2.click(()=>{
    menuTab2.addClass('on');
    menuTab1.removeClass('on');
    main.css('display','block');
    quick.css('display','none');
  });
  menuTab1.click(()=>{
    menuTab1.addClass('on');
    menuTab2.removeClass('on');
    quick.css('display','block');
    main.css('display','none');
  });

  //footer 패밀리사이트 클릭
  let familyBtn = $('#familyBtn');

  familyBtn.click(()=>{
    $('.site-list').toggle();
    familyBtn.toggleClass('on');
  });

  //스와이퍼 next prev 버튼 클릭 시 클래스 붙이기
  $('.swiper-button-next').click(function(){
    $('.slide01').toggleClass('on');
    $('.slide02').toggleClass('on');
  })
  $('.swiper-button-prev').click(function(){
    $('.slide01').toggleClass('on');
    $('.slide02').toggleClass('on');
  })
})