function checkAnswer(answer) {
  if (answer) {
    showOverlay();
  } else {
    alert("🥺");
  }
}

function showOverlay() {
  var overlay = document.getElementById('overlay');
  var messageBox = document.getElementById('messageBox');
  
  overlay.style.display = 'flex';
  messageBox.innerHTML = '<p>Thank you, I knew it!</p><img src="img/ganyu02.png" alt="Image">';
}

function closeOverlay() {
  var overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
}

document.addEventListener('click', function(event) {
  if (event.target.id === 'overlay') {
    closeOverlay();
  }
});

function displayContent(text, imageUrl) {
var container = document.createElement("div");
container.style.border = "1px solid #000";

// Create a paragraph element for the text
var textElement = document.createElement("p");
textElement.textContent = text;
container.appendChild(textElement);

// Create an image element for the picture
var imageElement = document.createElement("img");
imageElement.src = imageUrl;
imageElement.style.width = "100px"; // Adjust width as needed
container.appendChild(imageElement);

// Append the container to the body or a specific element
document.body.appendChild(container);
}

/*function checkAnswer(answer) {
    if (answer) {
      alert("Thank you!");
    } else {
      alert("🥺");
    }
}*/

function hideButton() {
    var buttonNo = document.querySelector('.quiz-button-no');

    buttonNo.style.opacity = '0';
}

function showButton() {
    var buttonNo = document.querySelector('.quiz-button-no');

    buttonNo.style.opacity = '1';
}

/*function moveButton() {
    var buttonNo = document.querySelector('.quiz-button-no');
    
    if (!buttonNo.classList.contains('moved-left')) {
      buttonNo.style.left = '200px';
      buttonNo.classList.add('moved-left');
    } else {
      buttonNo.style.left = '0';
      buttonNo.classList.remove('moved-left');
    }
}*/