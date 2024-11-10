document.addEventListener("DOMContentLoaded", function() {
    const backToTopButton = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {
        // Show button if scrolled down 100px or more, otherwise hide it
        if (window.scrollY > 100) {
            backToTopButton.classList.remove("d-none");
        } else {
            backToTopButton.classList.add("d-none");
        }
    });

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Smooth scroll to top
        });
    });
});

// JavaScript for modal view (optional, if you want to add modals)
document.querySelectorAll(".portfolio-item").forEach((item) => {
    item.addEventListener("click", () => {
      // Code to open a modal or lightbox view can be added here
      // For example, show a modal with project details
    });
  });


// Disable F12 (Developer Tools) and right-click context menu
document.addEventListener('keydown', function(e) {
    if (e.key === 'F12' || e.key === 'I' && e.ctrlKey) {
        e.preventDefault();  // Prevent F12 and Ctrl+Shift+I (inspect)
    }
});
  
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();  // This prevents the right-click context menu
    alert("Right-click is disabled on this page.");
});
