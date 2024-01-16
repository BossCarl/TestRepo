// Import statements
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import React, { useState } from 'react';

// Function to show the next topic
function showNextTopic(topicNumber) {
  // Hide all topics and the iframe
  hideAllTopics();

  // Show the selected topic
  let topicElement = document.getElementById('topic' + topicNumber);
  if (topicElement) {
    topicElement.classList.remove('hidden');
  }
}

// Function to show the quiz
function showQuiz() {
  // Hide all topics
  hideAllTopics();

  // Show the quiz iframe
  let iframeElement = document.getElementById('iframe');
  if (iframeElement) {
    iframeElement.classList.remove('hidden');
  }
}

// Function to hide all topics
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

// Function to show congratulations message using Bootstrap modal
function showCongratulationsMessage() {
  var myModal = new bootstrap.Modal(document.getElementById('congratulationsModal'));
  myModal.show();
}

// Function to enroll and disable the button
function enroll(modalNumber) {
  let enrollButton = document.getElementById(`enrollButton${modalNumber}`);
  if (enrollButton) {
    enrollButton.disabled = true;
    enrollButton.innerText = `You are now enrolled.`;
  }
}

// Function to redirect to Google
function redirectToGoogle() {
  window.location.href = 'https://www.google.com';
}

// Function for quiz validation
function quizValidation() {
  const { handleShowModal, handleCloseModal } = useModal();

  // Example: Redirect to Google after showing modal
  handleShowModal();
  redirectToGoogle();
}

// Custom hook for modal
function useModal() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return { handleShowModal, handleCloseModal };
}

// Exporting all functions and hooks
export { showNextTopic, showQuiz, hideAllTopics, showCongratulationsMessage, enroll, quizValidation, redirectToGoogle, useModal };
