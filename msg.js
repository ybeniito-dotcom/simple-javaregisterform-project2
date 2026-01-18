// Select DOM elements
const messageInput = document.getElementById('messageInput');
const charCount = document.getElementById('charCount');
const warningMsg = document.getElementById('warningMsg');
const maxChars = 200;
// Add event listener for real-time input tracking
messageInput.addEventListener('input', updateCounter);
function updateCounter() {
    // Get the current length of the text
   const currentLength = messageInput.value.length;
    // Update the counter text
    charCount.textContent = `${currentLength}/${maxChars} characters`;
    // Styling logic based on character count
    if (currentLength >= maxChars) {
        // Limit reached: Change styles
        charCount.classList.remove('text-gray-500');
        charCount.classList.add('text-red-500');
        //warning message
        warningMsg.classList.remove('opacity-0');
    } else {
        //Revert styles
        charCount.classList.remove('text-red-500');
        charCount.classList.add('text-gray-500');    
        // Hide the warning message
        warningMsg.classList.add('opacity-0');
    }
}