document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('.buttons button');
    let input = '';
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');
            if (value === '=') {
                try {
                    input = eval(input).toString();
                } catch (error) {
                    input = 'Error';
                }
            } else if (value === 'del') {
                input = input.slice(0, -1);
            } else {
                input += value;
            }
        display.value = input;
        });
    });
});

function updateWatch() {
  const watchElement = document.getElementById("watch");
  const now = new Date();
  
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  watchElement.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateWatch, 1000);
updateWatch();