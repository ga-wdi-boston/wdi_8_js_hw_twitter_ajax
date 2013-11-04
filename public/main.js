window.onload = function() {
  var submit_button = document.getElementById('submit-button');

  submit_button.addEventListener(click, function(event) {
    event.preventDefault();
    submitButtonResponse();
  });

  submitButtonResponse = function() {
    var form = document.getElementById('username-field');
    var username = form.value;
    async_load_json(username);
  };
};

