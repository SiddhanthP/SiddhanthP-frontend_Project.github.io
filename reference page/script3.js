
    // Get the elements with class="column"
    var elements = document.getElementsByClassName("column");
    
    // Declare a loop variable
    var i;
    
    // List View
    function listView() {
      for (i = 0; i < elements.length; i++) {
        elements[i].style.width = "90%";
        elements[i].style.height = "auto";
        elements[i].style.padding = "20px";
        elements[i].style.marginTop = "15px";
        elements[i].style.display = "block";
        elements[i].style.float ="center";
        elements[i].style.borderRadius = "8px";
      }
    }
    
    // Grid View
    function gridView() {
      for (i = 0; i < elements.length; i++) {
        elements[i].style.width = "30%";
      }
    }
    
    /* Optional: Add active class to the current button (highlight it) */
    var container = document.getElementById("btnContainer");
    var btns = container.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }