(function($) {
   $(function() {
      $(".parallax").parallax();
      $(".sidenav").sidenav();

      $(".dropdown-trigger").dropdown();

      $(".modal").modal();
      $("#addcontact").openModal();
      $("#modificationlog").openModal();
      $("#reachoutshelp").openModal();
      $("#editcontact").openModal();

      //or by click on trigger
      $('.trigger-modal').modal()

      $(".parallax").parallax();
   }); // end of document ready
})(jQuery); // end of jQuery name space

document.addEventListener("DOMContentLoaded", function() {
   var elems = document.querySelectorAll("select");
   var instances = M.FormSelect.init(elems, options);
});

// Or with jQuery

$(document).ready(function() {
   $("select").formSelect();

   $(".section").fadeIn();

   // Counter
   $(".count").each(function() {
      $(this)
         .prop("Counter", 0)
         .animate(
            {
               Counter: $(this).text()
            },
            {
               duration: 1000,
               easing: "swing",
               step: function(now) {
                  $(this).text(Math.ceil(now));
               }
            }
         );
   });

   // Comments - Approve & Deny
   $(".approve").click(function(e) {
      Materialize.toast("Comment Approved", 3000);
      e.preventDefault();
   });
   $(".deny").click(function(e) {
      Materialize.toast("Comment Denied", 3000);
      e.preventDefault();
   });
});
