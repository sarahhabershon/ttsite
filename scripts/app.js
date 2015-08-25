$(document).ready(function () {
  $(".link").on("click", function(event) {
    $(".tabs").find(".active").removeClass("active");
    $(this).addClass("active");
    $(".tab").hide();
    var tab_id = $(this).attr("id");
    $(tab_id).show();
  });
});




// $(function() {
//   console.log("Loaded");
// });





// var theDataAbout = {
//   title: "About",
//   image_url: "/images/teresq.jpg",
//   rightSide: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"
// };

// var theDataGallery = {


// };

// var theDataContact = {
//   title: "Contact",
//   image_url: "",
//   leftSide: "",
//   rightSide: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"
// };


// var theTemplateScript = $("#content-template").html();
// var theTemplate = Handlebars.compile(theTemplateScript);
// $(document.body).append(theTemplate(theDataAbout));

