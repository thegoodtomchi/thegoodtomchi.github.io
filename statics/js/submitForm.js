var INTERESTS = ['honing', 'critical', 'technologies'];
var INTEREST_SUBJECTS = {
  honing: '[' + INTERESTS[0] + ']',
  critical: '[' + INTERESTS[1] + ']',
  technologies: '[' + INTERESTS[2] + ']'
};

function ajaxSubmit (subjectLine, message) {
  $.ajax({
    url: "//formspree.io/amos.kyler@gmail.com",
    method: "POST",
    data: {message: message, _subject: subjectLine},
    dataType: "json"
  })
  .always(function () {
      alert('Email Sent!');
  });
}

window.submitForm = function () {
  var checked, subjectLine, messagePayload;

  messagePayload = document.getElementById('textarea-input');
  messagePayload = messagePayload.value;

  checked = INTERESTS.map(function (input) {
    return document.getElementById(input);
  });

  checked = checked.filter(function (input) {
    return input.checked;
  });

  checked = checked.map(function (input) {
    return input.id;
  });

  subjectLine = checked.reduce(function (prev, curr) {
    return prev + ' ' + INTEREST_SUBJECTS[curr];
  }, '');

  if(checked.length < 1 || messagePayload.length < 1) {
    alert('Please Select an area of interest and enter a message.');
  } else {
    ajaxSubmit(subjectLine, messagePayload);
  }

};
