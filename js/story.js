document.querySelectorAll(".story-header").forEach(button => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.style.padding = "0 15px";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.padding = "15px";
    }
  });
});
