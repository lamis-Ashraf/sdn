const btn = document.getElementById('button');
(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();
   const serviceID = 'default_service';
   const templateID = 'template_oqhsv9o';
   dbip.autoSelectCountry("#my-form-country");
  

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'اشترك الأن';
    }, (err) => {
      btn.value = 'اشترك الأن';
      alert(JSON.stringify(err));
    });
      

});