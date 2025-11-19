// Make sure JS runs after page loads
document.addEventListener("DOMContentLoaded", function () {
    // Select the button by ID
    const callButton = document.getElementById("callBtn");

    // Check if the button exists
    if (callButton) {
        callButton.addEventListener("click", function () {
            // Open the phone dialer
            window.location.href = "tel:+27689121480";
        });
    } else {
        console.error("Button not found!");
    }
});


<script>
  const questions = document.querySelectorAll('.faq-question');

  questions.forEach(q => {
    q.addEventListener('click', () => {
      const answer = q.nextElementSibling;
      if (answer.style.display === 'block') {
        answer.style.display = 'none';
      } else {
        answer.style.display = 'block';
      }
    });
  });
</script>
