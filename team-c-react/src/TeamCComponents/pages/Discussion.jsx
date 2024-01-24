import React, { useState, useEffect} from 'react';

import '../css/discussion_detail.css';
// import { useNavigate } from 'react-router-dom';

function TeamC_Discussion(){
        // Call the function to update post time when the page loads
        updatePostTime();
        // Function to update the post time dynamically
        function updatePostTime() {
            var postTimeElement = document.getElementById('post-time');
            var currentDate = new Date();
            var formattedDate = currentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
            var formattedTime = currentDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
            var updatedTime = 'Time - ' + formattedDate + ' ' + formattedTime;
            postTimeElement.innerText = updatedTime;
        }

        // Call the function to update post time when the page loads
        updatePostTime();

        // Retrieve parameters from the URL
        var urlParams = new URLSearchParams(window.location.search);
        var title = urlParams.get('title');
        var content = decodeURIComponent(urlParams.get('content'));

        // Set the discussion details on the webpage
        document.getElementById("discussionTitle").innerText = title;
        document.getElementById("discussionContent").innerText = content;

        // Function to toggle the comment container visibility
    function toggleCommentContainer() {
        var commentContainer = document.getElementById('commentContainer');
        commentContainer.style.display = 'block';
    }

        // Function to edit the post content
        function editPost() {
            // Get the post content
            var postContent = document.getElementById('discussionContent');

            // Create an editable textarea
            var textarea = document.createElement('textarea');
            textarea.className = 'form-control';
            textarea.rows = '3';
            textarea.value = postContent.innerText;

            // Replace post content with the textarea
            postContent.replaceWith(textarea);

            // Add a "Save Changes" button
            var saveButton = document.createElement('button');
            saveButton.className = 'btn btn-primary mt-2';
            saveButton.innerText = 'Save Changes';
            saveButton.onclick = function () {
                // Save the changes and replace the textarea with the new post content
                postContent.innerText = textarea.value;

                // Remove the "Save Changes" button
                saveButton.remove();

                // Replace the textarea with the updated post content
                textarea.replaceWith(postContent);
            };

            // Append the "Save Changes" button
            textarea.insertAdjacentElement('afterend', saveButton);
        }

        // Function to delete the post content
        function deletePost() {
            // Get the post container
            var postContainer = document.querySelector('.card');

            // Create a confirmation prompt
            var confirmation = confirm("Do you want to delete this post?");

            // If the user confirms deletion, remove the post container
            if (confirmation) {
                postContainer.remove();
            }
        }

        // Function to handle like button
        function handleLike(likeButton) {
            var likeCounter = likeButton.querySelector('.like-counter');
            var dislikeButton = likeButton.nextElementSibling;

            if (!likeButton.classList.contains('liked')) {
                likeCounter.innerText = parseInt(likeCounter.innerText) + 1;
                likeButton.classList.add('liked');

                // If the dislike button was previously clicked, reset its counter and remove the 'disliked' class
                if (dislikeButton.classList.contains('disliked')) {
                    dislikeButton.classList.remove('disliked');
                    dislikeButton.querySelector('.dislike-counter').innerText = 0;
                }
            } else {
                likeCounter.innerText = parseInt(likeCounter.innerText) - 1;
                likeButton.classList.remove('liked');
            }
        }

        // Function to handle dislike button
        function handleDislike(dislikeButton) {
            var dislikeCounter = dislikeButton.querySelector('.dislike-counter');
            var likeButton = dislikeButton.previousElementSibling;

            if (!dislikeButton.classList.contains('disliked')) {
                dislikeCounter.innerText = parseInt(dislikeCounter.innerText) + 1;
                dislikeButton.classList.add('disliked');

                // If the like button was previously clicked, reset its counter and remove the 'liked' class
                if (likeButton.classList.contains('liked')) {
                    likeButton.classList.remove('liked');
                    likeButton.querySelector('.like-counter').innerText = 0;
                }
            } else {
                dislikeCounter.innerText = parseInt(dislikeCounter.innerText) - 1;
                dislikeButton.classList.remove('disliked');
            }
        }

        // Default user name
        var defaultUserName = "Default User";

        function postReply() {
    // Get the reply text
    var replyText = document.getElementById('commentTextArea').value;

    // Check if the reply is not empty
    if (replyText.trim() !== '') {
        // Create a new reply container
        var replyContainer = document.createElement('div');
        replyContainer.className = 'reply-container';

        // Create a new reply card
        var replyCard = document.createElement('div');
        replyCard.className = 'reply-card position-relative';

        // Populate reply card with content including the default user name
        replyCard.innerHTML = `
            <div class="d-flex justify-content-between align-items-center mb-2">
                <div>
                    <h6 class="fw-bold text-success mb-1">${defaultUserName}</h6>
                    <p class="text-muted small mb-0">${getCurrentTime()}</p>
                </div>
                <div class="dropdown position-absolute top-0 end-0 three-dots">
                    <a class="link-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class='bx bx-dots-horizontal-rounded'></i>
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#" onclick="editReply(this)">Edit</a></li>
                        <li><a class="dropdown-item" href="#" onclick="deleteReply(this)">Delete</a></li>
                    </ul>
                </div>
            </div>
            <p>${replyText}</p>
            <!-- Like/Dislike buttons -->
            <div class="small d-flex justify-content-start">
                <a href="#!" class="d-flex align-items-center me-3 like-button" onclick="handleLike(this)">
                    <i class="far fa-thumbs-up me-2"></i>
                    <span class="like-counter">0</span>
                </a>
                <a href="#!" class="d-flex align-items-center me-3 dislike-button" onclick="handleDislike(this)">
                    <i class="far fa-thumbs-down me-2"></i>
                    <span class="dislike-counter">0</span>
                </a>
                <a href="#!" class="d-flex align-items-center me-3 reply-button" onclick="toggleAdditionalReplyContainer(this)">
                    <i class="fas fa-reply me-2"></i>
                    Reply
                </a>
            </div>
            
            <!-- Another text area, send button, and a container (initially hidden) -->
            <div class="additional-reply-container" style="display: none;">
                <textarea class="form-control" rows="3" placeholder="Write another reply..."></textarea>
                <button class="btn btn-primary mt-2" onclick="postAdditionalReply(this)">Send</button>
                <div class="additional-replies mt-3">
                    <!-- Additional replies will be appended here -->
                </div>
            </div>
        `;

        // Append the reply card to the reply container
        replyContainer.appendChild(replyCard);

        // Append the reply container to the comments section
        document.getElementById('commentsSection').appendChild(replyContainer);

        // Clear the reply textarea
        document.getElementById('commentTextArea').value = '';

        // Hide the reply textarea and button
        var commentContainer = document.getElementById('commentContainer');
        commentContainer.style.display = 'none';
    }
}

// Function to toggle the visibility of the additional-reply-container
function toggleAdditionalReplyContainer(replyButton) {
    // Find the parent reply container
    var replyContainer = replyButton.closest('.reply-container');

    // Find the additional-reply-container within the reply container
    var additionalReplyContainer = replyContainer.querySelector('.additional-reply-container');

    // Toggle the visibility of the additional-reply-container
    additionalReplyContainer.style.display = additionalReplyContainer.style.display === 'none' ? 'block' : 'none';
}

// Function to post an additional reply inside the additional-reply-container
function postAdditionalReply(sendButton) {
    // Find the parent additional-reply-container
    var additionalReplyContainer = sendButton.closest('.additional-reply-container');

    // Find the text area and button within the additional-reply-container
    var additionalReplyTextarea = additionalReplyContainer.querySelector('textarea');
    var additionalReplySendButton = additionalReplyContainer.querySelector('button');

    // Get the additional reply text
    var additionalReplyText = additionalReplyTextarea.value;

    // Check if the additional reply is not empty
    if (additionalReplyText.trim() !== '') {
        // Determine the nesting level based on the number of parent reply-containers
        var nestingLevel = getNestingLevel(additionalReplyContainer);

        // Create a new additional reply container
        var additionalReplyItem = document.createElement('div');
        additionalReplyItem.className = 'reply-container'; // Use the same class as the existing reply container

        // Set alternating background colors for the additional reply container
        if (nestingLevel % 2 === 0) {
            additionalReplyItem.style.backgroundColor = '#cfe2ff'; // Light blue
        } else {
            additionalReplyItem.style.backgroundColor = '#ffcfcf'; // Light red
        }

        // Populate additional reply container with content including the default user name
        additionalReplyItem.innerHTML = `
            <div class="d-flex justify-content-between align-items-center mb-2">
                <div>
                    <h6 class="fw-bold text-success mb-1">${defaultUserName}</h6>
                    <p class="text-muted small mb-0">${getCurrentTime()}</p>
                </div>
                <div class="dropdown position-absolute top-0 end-0 three-dots">
                    <a class="link-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class='bx bx-dots-horizontal-rounded'></i>
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#" onclick="editAdditionalReply(this)">Edit</a></li>
                        <li><a class="dropdown-item" href="#" onclick="deleteAdditionalReply(this)">Delete</a></li>
                    </ul>
                </div>
            </div>
            <p>${additionalReplyText}</p>
            <!-- Like/Dislike buttons for additional reply -->
            <div class="small d-flex justify-content-start">
                <a href="#!" class="d-flex align-items-center me-3 like-button" onclick="handleLike(this)">
                    <i class="far fa-thumbs-up me-2"></i>
                    <span class="like-counter">0</span>
                </a>
                <a href="#!" class="d-flex align-items-center me-3 dislike-button" onclick="handleDislike(this)">
                    <i class="far fa-thumbs-down me-2"></i>
                    <span class="dislike-counter">0</span>
                </a>
                <a href="#!" class="d-flex align-items-center me-3 reply-button" onclick="toggleAdditionalReplyContainer(this)">
                    <i class="fas fa-reply me-2"></i>
                    Reply
                </a>
            </div>
            <!-- Another text area, send button, and a container (initially hidden) -->
            <div class="additional-reply-container" style="display: none;">
                <textarea class="form-control" rows="3" placeholder="Write another reply..."></textarea>
                <button class="btn btn-primary mt-2" onclick="postAdditionalReply(this)">Send</button>
                <div class="additional-replies mt-3">
                    <!-- Additional replies will be appended here -->
                </div>
            </div>
        `;

        // Append the new additional reply container to the additional-replies container
        additionalReplyContainer.querySelector('.additional-replies').appendChild(additionalReplyItem);

        // Clear the additional reply textarea
        additionalReplyTextarea.value = '';

        // Hide the text area and button after posting the additional reply
        additionalReplyTextarea.style.display = 'none';
        additionalReplySendButton.style.display = 'none';
    }
}

// Function to get the nesting level of the current additional-reply-container
function getNestingLevel(container) {
    var nestingLevel = 0;
    var currentContainer = container;

    // Traverse up the DOM hierarchy and count the nesting level
    while (currentContainer.parentElement) {
        if (currentContainer.classList.contains('additional-reply-container')) {
            nestingLevel++;
        }
        currentContainer = currentContainer.parentElement;
    }

    return nestingLevel;
}

// Function to edit a reply
function editReply(editButton) {
    // Find the parent reply container
    var replyContainer = editButton.closest('.reply-container');

    // Find the second <p> tag within the container
    var secondParagraph = replyContainer.querySelector('.reply-card > p:nth-child(2)');

    // Create an editable textarea
    var textarea = document.createElement('textarea');
    textarea.className = 'form-control';
    textarea.rows = '3';
    textarea.value = secondParagraph.innerText;

    // Replace the second <p> tag with the textarea
    secondParagraph.replaceWith(textarea);

    // Add a "Save Changes" button
    var saveButton = document.createElement('button');
    saveButton.className = 'btn btn-primary mt-2';
    saveButton.innerText = 'Save Changes';
    saveButton.onclick = function () {
        // Save the changes and replace the textarea with the updated text
        secondParagraph.innerText = textarea.value;

        // Remove the "Save Changes" button
        saveButton.remove();

        // Replace the textarea with the updated text
        textarea.replaceWith(secondParagraph);
    };

    // Append the "Save Changes" button
    textarea.insertAdjacentElement('afterend', saveButton);
}

// Function to delete a reply
function deleteReply(deleteButton) {
    // Create a confirmation prompt
    var confirmation = confirm("Do you want to delete this reply?");

    // If the user confirms deletion, remove the reply container
    if (confirmation) {
        // Find the parent reply container
        var replyContainer = deleteButton.closest('.reply-container');

        // Remove the reply container from the DOM
        replyContainer.remove();
    }
}
        // Function to get the current time in a formatted way
        function getCurrentTime() {
            var currentDate = new Date();
            return currentDate.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true });
        }

        
  return (
    <div className="container">
      <a href="FrontInterfaceForum.html" id="returnButton" className="btn btn-secondary">
        <i className="bx bx-arrow-back" style={{ color: 'white' }}></i>
      </a>
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <div>
              <h6 className="fw-bold text-success mb-1">{defaultUserName}</h6>
              <p id="post-time" className="text-muted small mb-0"></p>
            </div>
            <div className="dropdown position-absolute top-0 end-0 three-dots">
              <a className="link-muted" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                <i className='bx bx-dots-horizontal-rounded'></i>
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><a className="dropdown-item" href="#" onClick={editPost}>Edit</a></li>
                <li><a className="dropdown-item" href="#" onClick={deletePost}>Delete</a></li>
              </ul>
            </div>
          </div>

          <h2 id="discussionTitle" className="mt-3 mb-3 pb-2"></h2>

          <p id="discussionContent" className="mb-4 pb-2"></p>

          <div className="d-flex justify-content-between align-items-center mb-2">
            {/* User info and dropdown menu */}
          </div>
          <p>{/* Reply content */}</p>

          <div className="small d-flex justify-content-start">
            <a href="#!" className="d-flex align-items-center me-3 like-button" onClick={(e) => handleLike(e)}>
              <i className="far fa-thumbs-up me-2"></i>
              <span className="like-counter">0</span>
            </a>
            <a href="#!" className="d-flex align-items-center me-3 dislike-button" onClick={(e) => handleDislike(e)}>
              <i className="far fa-thumbs-down me-2"></i>
              <span className="dislike-counter">0</span>
            </a>
            <a href="#!" className="d-flex align-items-center me-3 reply-button" onClick={toggleCommentContainer}>
              <i className="fas fa-reply me-2"></i>
              Reply
            </a>
          </div>

          <div id="commentContainer" className="mt-3">
            <textarea id="commentTextArea" className="form-control" rows="3" placeholder="Write your comment..." value={commentText} onChange={(e) => setCommentText(e.target.value)}></textarea>
            <button className="btn btn-primary mt-2" onClick={postReply}>Reply</button>
          </div>

          <div id="commentsSection" className="mt-3">
            {/* Existing or future comments and replies will be appended here */}
          </div>
        </div>
      </div>
    </div>
  );
  }
export default TeamC_Discussion;
