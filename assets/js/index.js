document.addEventListener('DOMContentLoaded', function() {
        let submitSearchForm = document.querySelector('#banner-submit-form input');
        let submitSearchFormDiv = document.querySelector('#banner-submit-form div div');
        let submitSearchIcon = document.querySelector('#banner-submit-form div i');
        let searchsubmit = document.getElementById('searchsubmit');
 
    if (submitSearchFormDiv) {
        submitSearchFormDiv.style.display = 'block';
        submitSearchIcon.style.display = 'block';
        submitSearchForm.classList.add("form-control");
        submitSearchForm.classList.add("w-100");
        submitSearchFormDiv.classList.add("w-100");
        submitSearchForm.classList.add("border-0");
        submitSearchForm.classList.add("rounded-pill");
        submitSearchForm.setAttribute("type", "search");
        submitSearchForm.setAttribute("placeholder", "");
        searchsubmit.style.display = 'none';
        submitSearchForm.setAttribute("id", "inputField");
    }
  });
	
  

document.addEventListener('DOMContentLoaded', function() {
  // Animated Placeholder Code Start
  const inputField = document.getElementById('inputField');
  const placeholderTexts = ["Popular Articles", "Release Notes", "FAQs", "Release Notes"]; // Array of placeholder texts
  let index = 0;
  let charIndex = 0;
  let direction = 1; // 1 for typing forward, -1 for erasing backward
  let typingInterval;

  if (inputField) {
  function typePlaceholder() {
    const text = placeholderTexts[index];
    if (direction === 1) {
      inputField.setAttribute('placeholder', "Enter Printer Model Eg: " + text.slice(0, charIndex++));
      if (charIndex > text.length) {
        direction = -1;
        setTimeout(() => {
          direction = 1;
          charIndex = 0;
          index = (index + 1) % placeholderTexts.length;
        }, 2000); // Delay before moving to the next placeholder text (adjust as needed)
      }
    } else {
      inputField.setAttribute('placeholder', "Enter Printer Model Eg: " + text.slice(0, charIndex--));
      if (charIndex < 0) {
        direction = 1;
      }
    }
  }

  function startTyping() {
    typingInterval = setInterval(typePlaceholder, 200);
  }

  function stopTyping() {
    clearInterval(typingInterval);
    inputField.setAttribute('placeholder', '');
  }

  inputField.addEventListener('focus', stopTyping);
  inputField.addEventListener('blur', startTyping);

  // Start the typing animation initially
  startTyping();
  // Animated Placeholder Code End// 	Animated Placeholder Code End
  }
});