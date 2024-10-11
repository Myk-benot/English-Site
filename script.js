document
  .querySelector("#contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch(this.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        const responseMessage = document.getElementById("responseMessage");

        if (response.ok) {
          responseMessage.textContent = "Thank you for your message!";
          responseMessage.classList.add("text-green-500");
          responseMessage.classList.remove("text-red-500");
          this.reset();
        } else {
          responseMessage.textContent =
            "There was a problem submitting your form. Please try again.";
          responseMessage.classList.add("text-red-500");
          responseMessage.classList.remove("text-green-500");
        }
        setTimeout(() => {
          responseMessage.textContent = "";
        }, 10000);
      })
      .catch((error) => {
        console.error("Error:", error);
        const responseMessage = document.getElementById("responseMessage");
        responseMessage.textContent = "An error occurred. Please try again.";
        responseMessage.classList.add("text-red-500");
        responseMessage.classList.remove("text-green-500");
      });
  });

document.getElementById("menuBtn").addEventListener("click", function () {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("hidden");
});
