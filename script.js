const screen = document.getElementById('screen');
const expandOperations = document.getElementById('expand-operations');

// Clear screen
function clearScreen() {
    screen.value = '';
}

// Append value to screen
function append(value) {
    screen.value += value;
}

// Calculate the result
function calculate() {
    try {
        screen.value = eval(screen.value);
    } catch {
        screen.value = 'Error';
    }
}

// Backspace function
function backspace() {
    screen.value = screen.value.slice(0, -1);
}

// Toggle expand operations
function toggleExpand() {
    if (expandOperations.style.display === 'none' || expandOperations.style.display === '') {
        expandOperations.style.display = 'flex';
        document.getElementById("o1").innerHTML = "Collapse";
    } else {
        expandOperations.style.display = 'none';
        document.getElementById("o1").innerHTML = "Expand";
    }
}

// Trigonometric functions
function calculateTrig(operation) {
    const value = parseFloat(screen.value);
    if (isNaN(value)) {
        screen.value = 'Error';
        return;
    }
    switch (operation) {
        case 'sin':
            screen.value = Math.sin(value * Math.PI / 180).toFixed(4);
            break;
        case 'cos':
            screen.value = Math.cos(value * Math.PI / 180).toFixed(4);
            break;
        case 'tan':
            screen.value = Math.tan(value * Math.PI / 180).toFixed(4);
            break;
    }
}

// Calculate square root
function calculateRoot() {
    const value = parseFloat(screen.value);
    if (isNaN(value) || value < 0) {
        screen.value = 'Error';
        return;
    }
    screen.value = Math.sqrt(value).toFixed(4);
}

// Calculate percentage
function calculatePercentage() {
    const value = parseFloat(screen.value);
    if (isNaN(value)) {
        screen.value = 'Error';
        return;
    }
    screen.value = (value / 100).toFixed(4);
}
