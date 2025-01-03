const dynamicWord = document.getElementById("dynamic-word");
const words = ["DNA", "GENES", "GENOMES", "HEREDITY"];  // Words to cycle through
let currentWordIndex = 0;

setInterval(() => {
    dynamicWord.classList.add("hidden");  // Hide word

    setTimeout(() => {
        dynamicWord.textContent = words[currentWordIndex];
        dynamicWord.classList.remove("hidden");  // Show updated word
        currentWordIndex = (currentWordIndex + 1) % words.length;
    }, 1000);  // Transition delay for each word change
}, 4000);  // Change word every 4 seconds
