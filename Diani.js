
document.addEventListener('DOMContentLoaded', function() {
    const natureImages = document.querySelectorAll('#nature-tours img');
    natureImages.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.classList.add('hovered');
        });
        img.addEventListener('mouseout', () => {
            img.classList.remove('hovered');
        });
    });

    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle Diani Beach Info';
    document.body.insertBefore(toggleButton, document.body.firstChild);

    const dianiInfo = document.querySelectorAll('p');
    toggleButton.addEventListener('click', () => {
        dianiInfo.forEach(p => {
            p.style.display = p.style.display === 'none' ? 'block' : 'none';
        });
    });

    let currentIndex = 0;
    function showImage(index) {
        natureImages.forEach((img, i) => {
            img.style.display = i === index ? 'block' : 'none';
        });
    }

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next Image';
    document.querySelector('#nature-tours').appendChild(nextButton);

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % natureImages.length;
        showImage(currentIndex);
    });

    showImage(currentIndex); 
});