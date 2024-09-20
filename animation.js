document.addEventListener('DOMContentLoaded', function() {
    const typingTextElement = document.querySelector('.typing-text');
    const words = ['informática', 'productos', 'videojuegos', 'inversiones'];
    const typingSpeed = 100; // Editable typing speed
    const deletingSpeed = 50; // Editable delete letters
    const delayBetweenWords = 2000; // Delay between each writting in words

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        typingTextElement.textContent = currentWord.substring(0, charIndex);

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, delayBetweenWords);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
        }
    }

    type();
});