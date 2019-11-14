(function($) {
   $(function() {
      $(".parallax").parallax();
      $(".sidenav").sidenav();

      // Nav triggers.
      $(".dropdown-trigger").dropdown({ hover: true, coverTrigger: false, constrainWidth: false});

      // Modal triggers.
      $(".modal").modal();
      $("#addcontact").openModal();
      $("#reachoutshelp").openModal();
      $("#followupshelp").openModal();
      $("#teamreachoutshelp").openModal();
      $("#editcontact").openModal();
      // or by click on trigger.
      $(".trigger-modal").modal();

      $(".parallax").parallax();
   }); // End of document ready.
})(jQuery); // End of jQuery name space.

document.addEventListener("DOMContentLoaded", function() {
   var elems = document.querySelectorAll("select");
   var instances = M.FormSelect.init(elems, options);
});

document.addEventListener("DOMContentLoaded", function(){
	$('.preloader-background').delay(1700).fadeOut('slow');
	
	$('.preloader-wrapper')
		.delay(1700)
		.fadeOut();
});

// Or with jQuery.
$(document).ready(function() {
   $("select").formSelect();

   $(".section").fadeIn();
   $(".tabs").tabs();
   $(".datepicker").datepicker();

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

   // Comments - Approve & Deny.
   $(".approve").click(function(e) {
      Materialize.toast("Comment Approved", 3000);
      e.preventDefault();
   });
   $(".deny").click(function(e) {
      Materialize.toast("Comment Denied", 3000);
      e.preventDefault();
   });
});

// For footer.
$(window).on("load resize", function() {
   $("body").css({ paddingBottom: $("footer").outerHeight() + "px" });
});

$(window).on("load resize", function() {
   $("body").css({
      paddingBottom:
         $(window).width() >= 768 && $(window).height() >= 500
            ? $("footer").outerHeight() + "px"
            : "0"
   });
});

