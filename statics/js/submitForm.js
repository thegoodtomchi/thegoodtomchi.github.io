var INTERESTS = ['honing', 'critical', 'technologies'];
var INTEREST_SUBJECTS = {
  honing:       '[' + INTERESTS[0] + ']',
  critical:     '[' + INTERESTS[1] + ']',
  technologies: '[' + INTERESTS[2] + ']'
};
var INTEREST_EMAILS = {
  honing:       'honing@tomchi.com',
  critical:     'critical@tomchi.com',
  technologies: 'technologies@tomchi.com'
};

function ajaxSubmit (subjectLine, payload) {
  $.ajax({
    url: "//formspree.io/amos.kyler@gmail.com",
    method: "POST",
    data: {
      _subject: subjectLine,
      body: payload.body,
      email: payload.email ? payload.email : null,
      website: payload.website ? payload.website : null,
      LinkedIn: payload.linkedin ? payload.linkedin : null
    },
    dataType: "json"
    // cc: [subjects[idx] (email) for each subjectLine]
  })
  .always(function () {
      alert('Complete!');
  });
}

window.submitForm = function () {
  // e.stopPropagation();
  // e.preventDefault();

  var interestedIn, subjectLine,
  textInputBody, emailInput,
  websiteInput, linkedinInput,
  bodyPayload;

  textInputBody = document.getElementById('textarea-input').value;
  emailInput = document.getElementById('text-input-email').value;
  websiteInput = document.getElementById('text-input-website').value;
  linkedinInput = document.getElementById('text-input-linkedin').value;

  bodyPayload = {
    email: emailInput,
    linkedin: linkedinInput,
    website: websiteInput,
    body: textInputBody
  };

  interestedIn = INTERESTS.map(function (id) {
    var tmp = document.getElementById(id);
    return tmp.checked ? tmp.id : null;
  });

  interestedIn = interestedIn.filter(function (input) {
    return input;
  });

  subjectLine = interestedIn.reduce(function (prev, curr) {
    return prev + ' ' + INTEREST_SUBJECTS[curr];
  }, '');


  //TODO: Handle pretty form submit (currently just ugly alerts)
  if (!(emailInput || websiteInput || linkedinInput)) {
    alert('Please fill a contact information field out');
  } else if(interestedIn.length < 1 || textInputBody.length < 1) {
    alert('Please Select an area of interest and enter a message.');
  } else {
    ajaxSubmit(subjectLine, bodyPayload);
  }

  return false;
};
