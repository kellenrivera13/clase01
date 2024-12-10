document.getElementById('contacForm').addEventListener('submit' , function(event) {
    const name = document.getElementById('name').value.trim();
    const reason = document.getElementById('reason').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!name || !reason || !email) {
        alert('Por favor, complete todos los campos.');
        event.preventDefault();
    } else {
        alert('formulario enviado correctamente.');
    }
});