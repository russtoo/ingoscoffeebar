// JavaScript
document.getElementById("disclaimer").addEventListener("click", function() {
    this.style.opacity = 0;
  });
  
  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      document.getElementById("disclaimer").style.opacity = 0;
    }
  });
  
  // jQuery
  $("#disclaimer").click(function() {
    $(this).css("opacity", 0);
  });
  
  $(document).keydown(function(event) {
    if (event.key === "Escape") {
      $("#disclaimer").css("opacity", 0);
    }
  });
  