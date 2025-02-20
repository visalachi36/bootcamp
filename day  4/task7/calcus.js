document.addEventListener("DOMContentLoaded", () => {
    const display = document.querySelector('.value'); // Select the input field
    const buttons = document.querySelectorAll('button'); // Select all buttons

    buttons.forEach((item) => {
        item.addEventListener('click', () => {
            const buttonValue = item.dataset.button; // Get button value

            try {
                if (buttonValue === 'C') {
                    display.value = ''; // Clear display
                } else if (buttonValue === 'CE') {
                    display.value = display.value.slice(0, -1); // Remove last entry
                } else if (buttonValue === '=') {
                    if (display.value !== '') {
                        display.value = eval(display.value); // Calculate result
                    }
                } else {
                    display.value += buttonValue; // Append button value
                }
            } catch (err) {
                display.value = 'Error';
                setTimeout(() => (display.value = ''), 1000); // Reset display
            }
        });
    });
});
