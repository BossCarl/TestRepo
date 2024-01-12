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
  for (let i = 0; i <= 2; i++) { // Assuming you have three topics (adjust as needed)
    document.getElementById('topic' + i).classList.add('hidden');
  }
  document.getElementById('iframe').classList.add('hidden');
}

// Initial hide all topics on page load
document.addEventListener('DOMContentLoaded', function () {
  hideAllTopics();
});