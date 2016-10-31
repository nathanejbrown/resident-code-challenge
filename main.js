$('#inputFile').on('change', function(event) {
  onChange(event);
});

function onChange(event) {
  var data;
  var file = event.target.files[0];
  if (file.type != 'application/json') {
    alert('Think you can defeat me with outliers Wesley?!');
    return;
  }
  var reader = new FileReader();
  reader.onload = function(event) {
    data = event.target.result;
  };

  reader.readAsText(file);
  reader.onloadend = () => {
    makeTag(null, null, data);
  }
}

function makeTag(tag, content, data) {
  if (data) {
    data = JSON.parse(data);
    data.forEach((element) => {
      makeTag(element.tag, element.content);
    })
  } else {
    let newTag = `<${tag}>`;
    if (Array.isArray(content)) {
      content.forEach((element) => {
        makeTag(element.tag, element.content)
      })
    }
    if (content.tag) {
      makeTag(content.tag, content.content);
    } else {
      if (typeof content === 'string') {
        newTag += content;
      }
    }
    newTag += `</${tag}>`;
    $('#visualizer').append(newTag);
  }
}
