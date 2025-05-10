
document.querySelector('input[type="file"]').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        alert("Storm prediction logic would run here.");
    }
});
