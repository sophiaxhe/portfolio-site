$(function() {

  // Retrieve DOM elements and store them
  var contactForm     = $('#contact-form');
  var spinArea        = $('#spin-area');
  var formContainer   = $('#form-container');
  var successContainer= $('#success-container');

  contactForm.submit(function(e){
    e.preventDefault();

    spinArea.spin('large'); // Attach the spinner

    // Send a POST AJAX request to the URL of form's action
    $.ajax({
      type: "POST",
      url: contactForm.attr('action'),
      data: contactForm.serialize(),
      dataType: "json"
    })
    .done(function(response) {
      humane.log('Message sent',{ addnCls: 'humane-jackedup-success'});
      successContainer.fadeIn();
      formContainer.slideUp();
    })
    .fail(function () {
      // Sending request to the server has failed
      // We'll show a notification that something went wrong
    })
    .always(function() {
      spinArea.spin(false); // Remove the spinner
    });
  });

});
