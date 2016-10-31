var control = document.getElementById('inputFile');
control.addEventListener('change', function(event) {
  onChange(event);
}, false);

function onChange(event) {
  var data;
  var file = event.target.files[0];
  var reader = new FileReader();
  reader.onload = function(event) {
    data = event.target.result;
  };

  reader.readAsText(file);
  reader.onloadend = () => {
    makeTag(null, null, data);
  }
}
