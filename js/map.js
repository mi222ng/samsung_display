$("#tabs").tabs();

let submenu = $('#tabs .map_submenu');
let tabMenus = submenu.find('a');

$(window).scroll(function(){
  let sct = $(window).scrollTop();
  if(sct == $(document).height() - $(window).height()){
    submenu.fadeOut();
  } else {submenu.fadeIn();}
})//스크롤 맨밑일때 서브메뉴 fade효과


tabMenus.click(function (e) {
  e.preventDefault();
  tabMenus.removeClass("active");
  $(this).addClass("active");
  //탭메뉴 컬러 변경
  $("html, body").animate(
    {scrollTop: 0,},400
  );
  return false;
  //탭 상단으로 천천히 이동
});

//circle을 클릭했을때
//circle의 data-country값 = maplistitem의 data-country값
//popup에 maplistitem을 복사

let circle = $('.mapwrap svg circle'),
  maplistitem = $('.map_list .map_list_item'),
  popup = $('.mapwrap .popup');

circle.click(function(){
  let circleData = $(this).attr('data-country');
  maplistitem.each(function(){
    let maplistitemData = $(this).attr('data-country');
    if(circleData === maplistitemData){
      //클론에 hide클래스의 유무로 숨기고 보이게
      let popupClone = popup.html($(this).clone());
        popupClone.toggleClass('hide');
      // 윈도우 너비가 768이상일때만 보이게
        if($(window).width() > 768){
          popupClone.find('img').css({display:'block'});
        }
      //외부영역 클릭했을때 hide추가해서 숨기게
      $(document).mouseup(function (e){
        if(popup.has(e.target).length === 0){
          popup.addClass('hide');
        }
      });
    }
  });
});


//헤더
let aside = $("header .aside"),
  button = $("header .toggleBtn");

button.click(function () {
  aside.toggleClass("open");
  $(this).toggleClass("active");
});

// 탑버튼
$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    $(".top_btn").fadeIn();
  } else {
    $(".top_btn").fadeOut();
  }
});

$(".top_btn").click(function (e) {
  e.preventDefault();
  $("html,body").animate({ scrollTop: 0 }, 1000, "easeOutQuint");
});