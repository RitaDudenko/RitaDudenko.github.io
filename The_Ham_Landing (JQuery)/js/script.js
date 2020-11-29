
/*****
*   Click on tabs
 */


$('.tab_ul').on('click', 'li', function () {
    $('.tab').removeClass('active');
    $('.tab_text_wrapper').removeClass('visible');
    $('.tab_text_wrapper').addClass('hidden');

    $(this).addClass('active');
     $('#'+ $(this).attr('data-tab')).addClass('visible');
     $('#'+ $(this).attr('data-tab')).removeClass('hidden');




});



/*****
 *   Images filter
 *
 *
 */


$(".category_tabs").on("click", "li", function(event){

    $('.all').removeClass('hidden_image');
    $('.category').removeClass('filter');
    $(this).addClass('filter');

    filterImageData(this);


  event.preventDefault();


});


/*****
 *   @desc: show all images with current category
 *   @param: category class
 *
 *
 */

function filterImageData(name) {

    const filterText = $(name).text().toLowerCase();
    const filterWord = filterText.split(' ').join('');

    $('.all').not($('.' + filterWord)).addClass('hidden_image');

}




/*****
 *   Add images (load more btn)
 */

const  newImagesArr = [

    'img class="all graphicdesign" src="images/graphic design/graphic-design11.jpg" alt="pic"',
    'img class="all graphicdesign" src="images/graphic design/graphic-design12.jpg" alt="pic"',
    'img class="all landingpages"   src="images/landing page/landing-page7.jpg" alt="pic"',
    'img class="all webdesign"  src="images/web design/web-design6.jpg" alt="pic"',
    'img class="all landingpages" src="images/landing page/landing-page6.jpg" alt="pic"',
    'img class="all wordpress" src="images/wordpress/wordpress10.jpg" alt="pic"',
    'img class="all webdesign" src="images/web design/web-design4.jpg" alt="pic"',
    'img class="all graphicdesign" src="images/graphic design/graphic-design7.jpg" alt="pic"',
    'img class="all wordpress" src="images/wordpress/wordpress9.jpg" alt="pic"',
    'img class="all wordpress" src="images/wordpress/wordpress8.jpg" alt="pic"',
    'img class="all graphicdesign" src="images/graphic design/graphic-design6.jpg" alt="pic"',
    'img class="all landingpages" src="images/landing page/landing-page5.jpg" alt="pic"'

];

$('.load_more_btn').on( 'click',  function () {

    const innerImageArr  = newImagesArr.map(image => `<div><${image}/></div>`);

      $.each(innerImageArr, function (element, value) {
         $(".filtered_images_wrapper").append(value);
      });


    filterImageData('.filter');


    $('.load_more_btn').remove();


});






/*****
 *   Show clients feedback
 */

const clientArr = [ { id: '#annjohnson',
                      name: 'Ann Johnson',
                      prof: 'UX Designer',
                      comment:'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum ' +
                              'odio nisi quis' + 'massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies ' +
                              'luctus, quam dui laoreet sem,non dictum odio nisi quis massa. Morbi pulvinar odio eget ' +
                              'aliquam facilisis.',
                      photo: 'img src="images/clients_photo/client1.png" height="142" width="143"'
                     },

                     {  id: '#hasanali',
                         name: 'Hasan Ali',
                       prof: 'UX Designer',
                       comment:'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum ' +
                               'odio nisi quis' + 'massa. Morbi pulvinar odio eget aliquam facilisis.' ,
                       photo: 'img src="images/clients_photo/client2.png" height="142" width="143"'
                     },

                      { id: '#davidsmith',
                          name: 'David Smith',
                       prof: 'FrontEnd Developer',
                       comment:'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum ' +
                               'odio nisi quis' + 'massa. Morbi pulvinar odio eget aliquam facilisis.Integer dignissim, ' +
                               'augue tempus ultricies luctus, quam dui laoreet sem, non dictum ' +
                               'odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.' ,
                       photo: 'img src="images/clients_photo/client3.png" height="142" width="143"'
                     },

                      { id:'#martakauffman',
                          name: 'Marta Kauffman',
                       prof: 'Graphic Designer',
                       comment:'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum ' +
                               'odio nisi quis' + 'massa. Morbi pulvinar odio eget.Integer dignissim, ' +
                               'augue tempus ultricies luctus, quam dui laoreet sem, non dictum ' +
                               'odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.' ,
                       photo: 'img src="images/clients_photo/client4.png" height="142" width="143"'
                     },
];




/*****
 *   @desc: show clients data and comment
 *   @param: jq selector
 *
 *
 */

function showClientsComment(element){

    let userId = element.attr("id");

    const feedAuthor = clientArr.find(item => item.id === userId );

    $(".client_comment_wrapper").html(feedAuthor.comment);
    $(".client_name").html(feedAuthor.name.toUpperCase());
    $(".client_prof").html(feedAuthor.prof);
    $(".clients_photo").html('<'+ feedAuthor.photo +'/>');
}



$(".client_comment_wrapper").html(clientArr[0].comment);
$(".client_name").html(clientArr[0].name.toUpperCase());
$(".client_prof").html(clientArr[0].prof);
$(".clients_photo").html('<'+ clientArr[0].photo +'/>');


$(".all_clients_photo").on("click", "li",  function (event) {


    $('.cl_image_active').removeClass('cl_image_active');
    $(this).children().eq(0).addClass('cl_image_active');


    $(this).animate({top: '-20px'}, 500);
    $(this).animate({top: '0px'}, 500);

    showClientsComment($(this));


});



/*****
 *   Carousel
 */


$(".next_btn").click(function () {

  if ($('.cl_image_active').parent().next().length){

         const nextClient = $('.cl_image_active').parent().next().children().eq(0);
         nextClient.addClass('cl_image_active');
         $('.cl_image_active').eq(0).removeClass('cl_image_active');

  } else {  $('.cl_image_active').eq(0).removeClass('cl_image_active');
           $('.cl_image').eq(0).addClass('cl_image_active');
  }

    $('.cl_image_active').parent().animate({top: '-20px'}, 500);
    $('.cl_image_active').parent().animate({top: '0px'}, 500);




    showClientsComment($('.cl_image_active').parent());



});





 $(".prev_btn").click(function () {

     if ($('.cl_image_active').parent().prev().length){

         const prevClient = $('.cl_image_active').parent().prev().children().eq(0);
         prevClient.addClass('cl_image_active');
         $('.cl_image_active').eq(-1).removeClass('cl_image_active');

     } else {

         $('.cl_image_active').eq(-1).removeClass('cl_image_active');
         $('.cl_image').eq(-1).addClass('cl_image_active');
     }

     $('.cl_image_active').parent().animate({top: '-20px'}, 500);
     $('.cl_image_active').parent().animate({top: '0px'}, 500);


     showClientsComment($('.cl_image_active').parent());

 });









