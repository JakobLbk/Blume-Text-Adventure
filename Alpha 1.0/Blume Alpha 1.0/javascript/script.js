
var typed = new Typed("#smartBackspace1", {
  // Waits 1000ms after typing "First"
  strings: ["&rsaquo;Hierbei handelt es sich um ein Text-Atventou", "Adventure"],
  smartBackspace: true // Default value
});





  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 65,
  });

 

<script>var textarea = document.getElementById('textarea_id');
textarea.scrollTop = textarea.scrollHeight;</script>


$(function() {
    $("#Nachricht").keypress(function (e) {
        if(e.which == 13) {
            //submit form via ajax, this is not JS but server side scripting so not showing here
            $("#chatbox").append($(this).val() + "<br/>");
            $(this).val("");
            e.preventDefault();
        }
    });
});
