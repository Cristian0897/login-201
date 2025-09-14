document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma tradicional

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Aquí iría la lógica de autenticación real
    // Por ahora, solo simulamos un inicio de sesión exitoso
    
    // Si los campos no están vacíos
    if (username && password) {
        alert(`¡Hola ${username}! Has iniciado sesión con éxito. 🎉`);
        // Redirige al usuario a la página principal o a su perfil
        // window.location.href = '/dashboard';
    } else {
        alert('Por favor, rellena todos los campos.');
    }
});
