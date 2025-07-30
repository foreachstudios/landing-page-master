// Simple login authentication
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');
    
    // Hardcoded access code
    const validAccessCode = '344456';
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const accessCode = document.getElementById('accessCode').value.trim();
        
        // Hide error message initially
        errorMessage.classList.remove('show');
        
        // Check access code
        if (accessCode === validAccessCode) {
            // Store login state in sessionStorage
            sessionStorage.setItem('axees_logged_in', 'true');
            sessionStorage.setItem('login_timestamp', new Date().toISOString());
            
            // Redirect to slideshow page
            window.location.href = 'slideshow.html';
        } else {
            // Show error message
            errorMessage.classList.add('show');
            
            // Clear access code field
            document.getElementById('accessCode').value = '';
            
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
    
    // Focus on access code input
    document.getElementById('accessCode').focus();
});