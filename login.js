// Simple login authentication
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');
    
    // Super simple hardcoded credentials - NOT FOR PRODUCTION USE
    const validCredentials = {
        username: 'admin',
        password: 'axees2025'
    };
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Hide error message initially
        errorMessage.classList.remove('show');
        
        // Simple text matching for credentials
        if (username === validCredentials.username && password === validCredentials.password) {
            // Store login state in sessionStorage
            sessionStorage.setItem('axees_logged_in', 'true');
            sessionStorage.setItem('login_timestamp', new Date().toISOString());
            
            // Redirect to sales page
            window.location.href = 'sales.html';
        } else {
            // Show error message
            errorMessage.classList.add('show');
            
            // Clear password field
            document.getElementById('password').value = '';
            
            // Shake animation for form
            loginForm.style.animation = 'shake 0.5s ease';
            setTimeout(() => {
                loginForm.style.animation = '';
            }, 500);
        }
    });
    
    // Add shake animation keyframes
    if (!document.querySelector('#login-animations')) {
        const style = document.createElement('style');
        style.id = 'login-animations';
        style.textContent = `
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
                20%, 40%, 60%, 80% { transform: translateX(10px); }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Focus on username input
    document.getElementById('username').focus();
});