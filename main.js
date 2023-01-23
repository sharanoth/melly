var textmods = document.getElementsByClassName('textMod');

// for each textMod in textmods, add a click event listener that 
// changes the background color to a light gray when clicked, and 
// changes it back to white when clicked again
for (var i = 0; i < textmods.length; i++) {
    textmods[i].addEventListener('click', function() {
        if (this.style.backgroundColor === 'rgba(51, 51, 51, 0.133)') {
            this.style.backgroundColor = 'transparent';
        } else {
            this.style.backgroundColor = 'rgba(51, 51, 51, 0.133)';
        }
    });
}
