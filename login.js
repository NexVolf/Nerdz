// ==================== THEME TOGGLE ====================
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    body.classList.add('light-mode');
}

// Toggle theme
themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const theme = body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
});

// ==================== USER TYPE SELECTION ====================
const userTypeBtns = document.querySelectorAll('.user-type-btn');
let selectedUserType = 'student';

userTypeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        userTypeBtns.forEach(b => b.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Store selected type
        selectedUserType = btn.dataset.type;
    });
});

// ==================== PASSWORD TOGGLE ====================
const togglePasswordBtn = document.querySelector('.toggle-password');
const passwordInput = document.getElementById('password');
const eyeOpen = document.querySelector('.eye-open');
const eyeClosed = document.querySelector('.eye-closed');

if (togglePasswordBtn) {
    togglePasswordBtn.addEventListener('click', () => {
        const type = passwordInput.type === 'password' ? 'text' : 'password';
        passwordInput.type = type;
        
        // Toggle eye icons
        eyeOpen.style.display = type === 'password' ? 'block' : 'none';
        eyeClosed.style.display = type === 'password' ? 'none' : 'block';
    });
}

// ==================== FORM SUBMISSION ====================
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;
    
    // Store user info (in real app, this would be an API call)
    const userData = {
        email,
        userType: selectedUserType,
        remember
    };
    
    // Store in localStorage (for demo purposes)
    localStorage.setItem('userData', JSON.stringify(userData));
    
    // Redirect based on user type
    if (selectedUserType === 'student') {
        window.location.href = 'student-dashboard.html';
    } else {
        window.location.href = 'teacher-dashboard.html';
    }
});

// ==================== SOCIAL LOGIN ====================
const googleBtn = document.querySelector('.google-btn');
const githubBtn = document.querySelector('.github-btn');

googleBtn.addEventListener('click', () => {
    alert('Google login would be implemented here');
});

githubBtn.addEventListener('click', () => {
    alert('GitHub login would be implemented here');
});

console.log('✨ NerdZ Login Page Loaded!');
