(function($) {
   $(function() {
      $(".parallax").parallax();
      $(".sidenav").sidenav();

      $(".dropdown-trigger").dropdown();

      
      $('.modal').modal();
      $('#addcontact').openModal();
         

      $(".parallax").parallax();
   }); // end of document ready
})(jQuery); // end of jQuery name space

document.addEventListener('DOMContentLoaded', function() {
   var elems = document.querySelectorAll('select');
   var instances = M.FormSelect.init(elems, options);
 });

 // Or with jQuery

 $(document).ready(function(){
   $('select').formSelect();
 });
     
