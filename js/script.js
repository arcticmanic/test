$(document).ready(function(){
  $(".bxslider").bxSlider({
    slideMargin: 0,
    speed: 250,
    minSlides: 1,
    pager: false
  });
});

$('.gallery-tab-content > div').hide();
$('.gallery-tab-content > div:first-of-type').show();
$('.gallery-tabs a').click(function(e){
  e.preventDefault();
    var $this = $(this),
        tabgroup = '#'+$this.parents('.gallery-tabs'),
        others = $this.closest('li').siblings().children('a'),
        target = $this.attr('href');
    others.removeClass('active');
    $this.addClass('active');
    $('.gallery-tab-content').children('div').hide();
    $(target).show();
});
