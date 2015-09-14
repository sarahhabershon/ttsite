$(document).ready(function () {
  if ($(window).width() > 480){
    $(".tab").hide();
    $("#tab2").show();

    $(".link").on("click", function(event) {
      $(".tabs").find(".active").removeClass("active");
      $(this).addClass("active");
      $(".tab").hide();
      var tab_id = $(this).attr("id");
      $(tab_id).show();
    });
  }
  else {
  $(".tab").show();

  $(".link").on('click', function() {
    var linkid = $(this).attr('id')

    if(linkid == "#tab1")
    {
      window.location.assign('#aboutanchor')
    }
    if(linkid == "#tab2")
    {
      window.location.assign('#galleryanchor')
    }
    if(linkid == "#tab3")
    {
      window.location.assign('#contactanchor')
    }


  })

  }



// $(function(){
//     $('.entry_page_anchor_menu').click(function(e){
//         e.preventDefault();
//         var jump = $(this).attr('href').substring(1);
//         var new_position = $('#'+jump).offset();
//         window.scrollTo(new_position.left,new_position.top);
//     });
// });



window.onscroll = function(){
        if ($("#nav_buffer")[0].getBoundingClientRect().top >= 0){
          $("#nav").addClass("affix-top").removeClass("affix")
        } else $("#nav").addClass("affix").removeClass("affix-top")


    }

});



