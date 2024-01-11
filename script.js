// script.js
document.getElementById('showDiv1').addEventListener('click', function() {
    showDiv('div1');
  });
  
  document.getElementById('showDiv2').addEventListener('click', function() {
    showDiv('div2');
  });
  
  document.getElementById('showDiv3').addEventListener('click', function() {
    showDiv('div3');
  });
  
  function showDiv(divId) {
    // Hide all divs
    var allDivs = document.querySelectorAll('.container');
    allDivs.forEach(function(div) {
      div.style.display = 'none';
    });
  
    // Show the selected div
    var selectedDiv = document.getElementById(divId);
    selectedDiv.style.display = 'block';
  
    // Add event listeners for edit and save buttons
    var editButton = document.getElementById('edit' + divId.charAt(0).toUpperCase() + divId.slice(1));
    var saveButton = document.getElementById('save' + divId.charAt(0).toUpperCase() + divId.slice(1));
    var descriptionElement = document.getElementById(divId + 'Description');
  
    editButton.addEventListener('click', function() {
      // Enable editing
      descriptionElement.contentEditable = true;
      descriptionElement.style.border = '1px solid #ccc';
      editButton.style.display = 'none';
      saveButton.style.display = 'block';
    });
  
    saveButton.addEventListener('click', function() {
      // Save changes and disable editing
      descriptionElement.contentEditable = false;
      descriptionElement.style.border = 'none';
      editButton.style.display = 'block';
      saveButton.style.display = 'none';
  
      // Save the description to localStorage or your backend
      var editedDescription = descriptionElement.textContent;
      console.log('Saved description:', editedDescription);
    });
  }
  