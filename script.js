
document.addEventListener('DOMContentLoaded', function() {
    
    const myButton = document.getElementById('myButton');

    
    if (myButton) { 
        myButton.addEventListener('click', function() {
            
            alert('Button clicked! Hello from JavaScript!');
        });
    } else {
        console.error("Button with ID 'myButton' not found.");
    }
});