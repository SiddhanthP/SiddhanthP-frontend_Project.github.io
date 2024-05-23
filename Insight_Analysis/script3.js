// Add this script to your HTML file, preferably at the end of the body or in a separate script file.

document.addEventListener('DOMContentLoaded', function () {
  // Get the toggler checkbox and menu
  var toggler = document.getElementById('toggler');
  var menu = document.querySelector('.menu');

  // Event listener for toggler change
  toggler.addEventListener('change', function () {
      // When the toggler is checked, add a click event listener to the document
      if (toggler.checked) {
          document.addEventListener('click', closeMenuOnClick);
      } else {
          // When the toggler is unchecked, remove the click event listener
          document.removeEventListener('click', closeMenuOnClick);
      }
  });

  // Function to close the menu when clicking outside of it
  function closeMenuOnClick(event) {
      // Check if the clicked element is not part of the menu
      if (!menu.contains(event.target) && event.target !== toggler) {
          // Uncheck the toggler to hide the menu
          toggler.checked = false;
      }
  }
});
