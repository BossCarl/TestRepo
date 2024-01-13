function showNextTopic(topicNumber) {
  // Hide all topics and the iframe
  hideAllTopics();
  
  // Show the selected topic
  document.getElementById('topic' + topicNumber).classList.remove('hidden');
}

function showQuiz() {
  // Hide all topics
  hideAllTopics();

  // Show the quiz iframe
  document.getElementById('iframe').classList.remove('hidden');
}

function hideAllTopics() {
  for (let i = 0; i <= 2; i++) {
    let topicElement = document.getElementById('topic' + i);
    if (topicElement) {
      topicElement.classList.add('hidden');
    }
  }

  let iframeElement = document.getElementById('iframe');
  if (iframeElement) {
    iframeElement.classList.add('hidden');
  }
}


// Initial hide all topics on page load
document.addEventListener('DOMContentLoaded', function () {
  hideAllTopics();
});

function showCongratulationsMessage() {
  // Open the Bootstrap modal
  var myModal = new bootstrap.Modal(document.getElementById('congratulationsModal'));
  myModal.show();
}

function enroll(modalNumber) {
  // Disable the button
  document.getElementById(`enrollButton${modalNumber}`).disabled = true;

  // Change the text of the button
  document.getElementById(`enrollButton${modalNumber}`).innerText = `You are now enrolled.`;
}