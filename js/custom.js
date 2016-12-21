$(document).ready(function(){
  
  $('.slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true
  });
  
  // $('.slider_news').slick({
  //   vertical: true,
  //   infinite: true,
  //   autoplay: true,
  //   autoplaySpeed: 5000,
  //   arrows: true,
  //   slidesToShow: 6,
  //   slidesToScroll: 1
  // });
  // var icons = {
  //   header: "iconClosed",    // custom icon class
  //   activeHeader: "iconOpen" // custom icon class
  // };

  $( ".accordion" ).accordion({
		collapsible: true,
		heightStyle: "content",
    // icons: icons
	});

  $(".fancybox").fancybox({
    openEffect  : 'none',
    closeEffect : 'none',
    width: 1000,
    height: 770,
    'closeBtn': true,
    iframe : {
      preload: false
    }
  });
});

// <script>
// 	 $('#slider').slick({
// 	  	slidesToShow: 3,
//   		slidesToScroll: 1,
//   		centerMode: true,
//   		infinite:false,
//   		arrows: true,
//   		centerPadding: '',
// 	  	autoplay: true,
//   		autoplaySpeed: 3000,
//   		dots: true,
//   		responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 1
//       }
//     },
//       {
//       breakpoint: 850,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         fade: true
//       }
//     }
//   ]
// });
// </script>



//   $(document).ready(function(){
//     $('.slider').slick({
//       setting-name: setting-value
//     });
//   });