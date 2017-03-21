$(document)
  .ready(function () {

    // fix menu when passed
    $('.masthead')
      .visibility({
        once: false,
        onBottomPassed: function () {
          $('.fixed.menu').transition('fade in');
        },
        onBottomPassedReverse: function () {
          $('.fixed.menu').transition('fade out');
        }
      })
    ;

    // create sidebar and attach to menu open
    $('.ui.sidebar')
      .sidebar('attach events', '.toc.item')
    ;

  })
;

// popup wechat qr code
$('#wechat-qr-code-click')
  .popup({
    popup : $('#wechat-qr-code'),
    on    : 'click'
  })
;

// copyright
$('#copyright')
  .html(
   function (){
     var date = new Date();
     return '&copy; 2011-' +  date.getFullYear() + ' Beijing Y-English Education &amp; Technology Co., Ltd.';
   }
  )
;