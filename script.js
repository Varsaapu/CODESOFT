const flashlightToggle = document.getElementById('flashlightToggle');
const flashlightStatus = document.getElementById('flashlightStatus');

function toggleFlashlight() {
    if (flashlightToggle.checked) {
        // Turn on the flashlight
        flashlightStatus.textContent = 'Flashlight is ON';
        // You can add additional logic to control the flashlight on state
    } else {
        // Turn off the flashlight
        flashlightStatus.textContent = 'Flashlight is OFF';
        // You can add additional logic to control the flashlight off state
    }
}
