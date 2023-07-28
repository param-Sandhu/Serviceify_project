// These get all the necessary objects from the document
const toggleFeedback = document.getElementById("toggleform");
const positiveFeed = document.getElementById("positive");
const negativeFeed = document.getElementById("negative");
const feedbackBtn = document.getElementById("feedbackButtons");
const textArea = document.getElementById("userFeedback");
const submitButton = document.getElementById('submitButton');
const feedbackPrompt = document.getElementById('feedback-prompt');
const displayMessage = document.getElementById('on-submit');
const screenWidth = window.innerWidth;

var formVisibility = false;

// This function checks for screen width
function scrnWidthCheck(){
    if (screenWidth < 800){ // In case of small screens like mobile devices.
        feedbackPrompt.style.width = '85%';
        textArea.style.width = '98%';
        toggleForm();

    } else{ // In case of larger screens like tablets, laptops etc.
        toggleForm();
    }
}

// This hides or shows the form content as necessary
function toggleForm() {
    if (!formVisibility){
        feedbackBtn.style.display = 'flex';
        positiveFeed.style.backgroundColor = 'white';
        negativeFeed.style.backgroundColor = 'white';
        textArea.style.display = 'none';
        submitButton.style.display = 'none';
        
    } else{
        feedbackBtn.style.display = 'none';
        textArea.style.display = 'none';
        submitButton.style.display = 'none';
        displayMessage.style.display = 'none';
        feedbackPrompt.style.removeProperty('width');

    }

    formVisibility = !formVisibility;

}

toggleFeedback.addEventListener('click', scrnWidthCheck);

// The following two functions highlight the respective button clicked
// and displays a respective placeholder message for each button

// This is invoked if the user clicks on 'Thumbs up' button
function toggleTextAreaPos(){
    positiveFeed.style.backgroundColor = '#e1f8fb';
    negativeFeed.style.backgroundColor = 'white';
    positiveFeed.style.width = '25%';
    textArea.style.display = 'flex';
    submitButton.style.display = 'flex';
    textArea.placeholder = 'Tell us what you liked...'
}

// This is invoked if the user clicks on 'Thumbs down' button
function toggleTextAreaNeg(){
    negativeFeed.style.backgroundColor = '#e1f8fb';
    positiveFeed.style.backgroundColor = 'white';
    negativeFeed.style.width = '25%';
    textArea.style.display = 'flex';
    submitButton.style.display = 'flex';
    textArea.placeholder = 'Aww, please let us know how we can improve...'
}

// This is invoked when the user clicks the submit button
// This displays a message on click
function onSubmit(){
    textArea.style.display = 'none';
    submitButton.style.display = 'none';
    displayMessage.style.display = 'flex';

}

positiveFeed.addEventListener('click', toggleTextAreaPos);
negativeFeed.addEventListener('click', toggleTextAreaNeg);
submitButton.addEventListener('click', onSubmit);