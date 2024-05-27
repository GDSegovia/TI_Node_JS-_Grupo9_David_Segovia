document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registroForm').addEventListener('submit', function(event) {
        var form = event.target;
        var inputs = form.querySelectorAll('input, select, textarea');
        var isValid = true;
        
        inputs.forEach(function(input) {
            if (input.required && !input.value.trim()) {
                isValid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });
        
        if (!isValid) {
            event.preventDefault();
            alert('Por favor, complete todos los campos obligatorios.');
        }
    });
});
