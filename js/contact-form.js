document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const successMessage = document.getElementById("success-message");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const response = await fetch("https://formsubmit.co/xelpr@info.com", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      form.reset();
      successMessage.style.display = "block";
    } else {
      alert("There was an error submitting the form. Please try again.");
    }
  });
});
