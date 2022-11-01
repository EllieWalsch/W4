function handleClick(event) {
  if (event.target.matches("button")) {
    console.log("click", event.target.textContent);
  }
}

document.querySelector("main").addEventListener("click", handleClick);
