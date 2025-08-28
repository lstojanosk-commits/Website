
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/68b0492b661c3b192cff923a/1j3o9rko0';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>

    
/* Reset und Basis-Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Smooth scrolling for the entire page */
html {
    scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: var(--bg-secondary);
}

::-webkit-scrollbar-thumb {
    background: var(--primary-color);
    border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
    background: var(--accent-color);
}

:root {
    --primary-color: #4CAF50;
    --secondary-color: #2196F3;
    --accent-color: #FF9800;
    --dark-color: #1a1a1a;
    --light-color: #2d2d2d;
    --text-color: #ffffff;
    --text-light: #cccccc;
    --border-color: #444444;
    --shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    --shadow-hover: 0 8px 15px rgba(0, 0, 0, 0.4);
    --gradient-primary: linear-gradient(135deg, #4CAF50, #45a049);
    --gradient-secondary: linear-gradient(135deg, #2196F3, #1976D2);
    
    /* Dark mode variables */
    --bg-primary: #1a1a1a;
    --bg-secondary: #2d2d2d;
    --bg-tertiary: #333333;
    --text-primary: #ffffff;
    --text-secondary: #cccccc;
    --border-primary: #444444;
    --shadow-primary: 0 4px 6px rgba(0, 0, 0, 0.3);
    --shadow-hover-primary: 0 8px 15px rgba(0, 0, 0, 0.4);
}

body {
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--bg-primary);
    overflow-x: hidden;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Navigation */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(26, 26, 26, 0.95);
    backdrop-filter: blur(10px);
    z-index: 1000;
    transition: all 0.3s ease;
}



.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
}

.nav-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color);
}

.nav-logo i {
    font-size: 2rem;
    filter: drop-shadow(0 0 10px var(--primary-color));
    transition: all 0.3s ease;
}



.nav-menu {
    display: flex;
    list-style: none;
    gap: 30px;
}

.nav-link {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    position: relative;
}

.nav-link:hover,
.nav-link.active {
    color: var(--primary-color);
    text-shadow: 0 0 10px var(--primary-color);
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--gradient-primary);
    transition: width 0.3s ease;
    box-shadow: 0 0 10px var(--primary-color);
}

.nav-link:hover::after,
.nav-link.active::after {
    width: 100%;
}

.nav-link::before {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 1px;
    background: var(--accent-color);
    transition: width 0.3s ease 0.1s;
}

.nav-link:hover::before,
.nav-link.active::before {
    width: 60%;
}



.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
}

.bar {
    width: 25px;
    height: 3px;
    background: white;
    margin: 3px 0;
    transition: 0.3s;
}

/* Hero Section */
.hero {
    min-height: 100vh;
    background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
}



.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%23333" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
    opacity: 0.1;
    animation: float 20s ease-in-out infinite;
}

.hero::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 80%, rgba(76, 175, 80, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 152, 0, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(33, 150, 243, 0.1) 0%, transparent 50%);
    animation: pulse 4s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.6; }
}

@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
}

.hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;
    z-index: 2;
}

.hero-text {
    color: white;
}

.hero-title {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 20px;
    line-height: 1.2;
}

.title-line {
    display: block;
    font-size: 1.5rem;
    color: var(--accent-color);
    margin-bottom: 10px;
    opacity: 0;
    animation: slideInLeft 1s ease forwards 0.5s;
}

.title-main {
    display: block;
    background: linear-gradient(45deg, var(--primary-color), var(--accent-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    opacity: 0;
    animation: slideInLeft 1s ease forwards 0.8s;
}

@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.hero-subtitle {
    font-size: 1.2rem;
    color: #ccc;
    margin-bottom: 30px;
    opacity: 0;
    animation: slideInLeft 1s ease forwards 1.1s;
}

.hero-buttons {
    display: flex;
    gap: 20px;
    opacity: 0;
    animation: slideInLeft 1s ease forwards 1.4s;
}

.btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 15px 30px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    border: 2px solid transparent;
    cursor: pointer;
}

.btn-primary {
    background: var(--gradient-primary);
    color: white;
    box-shadow: var(--shadow);
    position: relative;
    overflow: hidden;
}

.btn-primary::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
}

.btn-primary:hover::before {
    left: 100%;
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-hover);
    filter: brightness(1.1);
}

.btn-secondary {
    background: transparent;
    color: white;
    border-color: white;
}

.btn-secondary:hover {
    background: white;
    color: var(--dark-color);
    transform: translateY(-3px);
}

.btn-large {
    padding: 18px 35px;
    font-size: 1.1rem;
}

.btn-outline {
    background: transparent;
    color: var(--primary-color);
    border-color: var(--primary-color);
}

.btn-outline:hover {
    background: var(--primary-color);
    color: white;
}

/* Minecraft World Animation */
.hero-visual {
    display: flex;
    justify-content: center;
    align-items: center;
}

.minecraft-world {
    position: relative;
    width: 300px;
    height: 300px;
    perspective: 1000px;
}

.block {
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 8px;
    animation: float 3s ease-in-out infinite;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
}

.block:hover {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
    filter: brightness(1.2);
}

.block-grass {
    background: linear-gradient(45deg, #7cb342, #8bc34a);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-delay: 0s;
}

.block-dirt {
    background: linear-gradient(45deg, #8d6e63, #a1887f);
    top: 40%;
    left: 30%;
    animation-delay: 0.5s;
}

.block-stone {
    background: linear-gradient(45deg, #757575, #9e9e9e);
    top: 60%;
    left: 70%;
    animation-delay: 1s;
}

.block-wood {
    background: linear-gradient(45deg, #8d6e63, #a1887f);
    top: 30%;
    left: 70%;
    animation-delay: 1.5s;
}

.block-leaves {
    background: linear-gradient(45deg, #4caf50, #66bb6a);
    top: 70%;
    left: 30%;
    animation-delay: 2s;
}

.scroll-indicator {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    animation: bounce 2s infinite;
}

.scroll-arrow {
    width: 30px;
    height: 30px;
    border-right: 3px solid white;
    border-bottom: 3px solid white;
    transform: rotate(45deg);
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
    40% { transform: translateX(-50%) translateY(-10px); }
    60% { transform: translateX(-50%) translateY(-5px); }
}

/* Server Info Section */
.server-info {
    padding: 100px 0;
    background: #1f1f1f;
    position: relative;
    z-index: 1;
}

.section-title {
    text-align: center;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 60px;
    color: var(--text-primary);
    position: relative;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--gradient-primary);
    border-radius: 2px;
    box-shadow: 0 0 10px var(--primary-color);
}

.section-title::before {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 4px;
    background: var(--accent-color);
    border-radius: 2px;
    opacity: 0.7;
}

.info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}

.info-card {
    background: #2a2a2a;
    padding: 40px 30px;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    border: 2px solid #444;
    backdrop-filter: blur(10px);
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.info-card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, transparent 0%, rgba(76, 175, 80, 0.05) 50%, transparent 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.info-card:hover::after {
    opacity: 1;
}

.info-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(76, 175, 80, 0.1), transparent);
    transition: left 0.5s ease;
}

.info-card:hover::before {
    left: 100%;
}

.info-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
    border-color: var(--primary-color);
    background: #333333;
}

.info-icon {
    width: 80px;
    height: 80px;
    background: var(--gradient-primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    font-size: 2rem;
    color: white;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.info-icon::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(from 0deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    animation: rotate 3s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.info-card:hover .info-icon::before {
    opacity: 1;
}

.info-card:hover .info-icon {
    transform: scale(1.1) rotate(360deg);
}

.info-card h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 15px;
    color: #ffffff;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.info-card p {
    color: #cccccc;
    margin-bottom: 10px;
    font-weight: 500;
}

.status.online {
    color: var(--primary-color);
    font-weight: 600;
}

.player-count {
    color: var(--secondary-color);
    font-weight: 600;
    font-size: 1.2rem;
}

.version {
    color: var(--accent-color);
    font-weight: 600;
    font-size: 1.2rem;
}

.server-ip {
    color: var(--primary-color);
    font-weight: 600;
    font-size: 1.2rem;
    font-family: 'Courier New', monospace;
    letter-spacing: 1px;
}

/* Features Section */
.features {
    padding: 100px 0;
    background: var(--bg-primary);
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 40px;
}

.feature-item {
    text-align: center;
    padding: 40px 20px;
    border-radius: 20px;
    transition: all 0.3s ease;
    position: relative;
}

.feature-item:hover {
    transform: translateY(-10px);
}

.feature-icon {
    width: 100px;
    height: 100px;
    background: var(--gradient-secondary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 30px;
    font-size: 2.5rem;
    color: white;
    transition: all 0.3s ease;
}

.feature-item:hover .feature-icon {
    transform: scale(1.1);
}

.feature-item h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 20px;
    color: var(--text-primary);
}

.feature-item p {
    color: var(--text-secondary);
    line-height: 1.8;
}

/* CTA Section */
.cta {
    padding: 100px 0;
    background: var(--gradient-primary);
    color: white;
    text-align: center;
}



.cta-content h2 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 20px;
}

.cta-content p {
    font-size: 1.2rem;
    margin-bottom: 40px;
    opacity: 0.9;
}

.cta-buttons {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
}

/* Footer */
.footer {
    background: var(--dark-color);
    color: white;
    padding: 60px 0 20px;
    position: relative;
    overflow: hidden;
}

.footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--primary-color), var(--accent-color), transparent);
}



.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    margin-bottom: 40px;
}

.footer-section h3,
.footer-section h4 {
    margin-bottom: 20px;
    color: var(--primary-color);
}

.footer-section p {
    color: #ccc;
    margin-bottom: 20px;
}

.footer-section ul {
    list-style: none;
}

.footer-section ul li {
    margin-bottom: 10px;
}

.footer-section ul li a {
    color: #ccc;
    text-decoration: none;
    transition: color 0.3s ease;
}

.footer-section ul li a:hover {
    color: var(--primary-color);
}

.social-links {
    display: flex;
    gap: 15px;
}

.social-links a {
    width: 40px;
    height: 40px;
    background: var(--primary-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-decoration: none;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.social-links a::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s ease;
}

.social-links a:hover::before {
    left: 100%;
}

.social-links a:hover {
    transform: translateY(-3px) scale(1.1);
    background: var(--accent-color);
    box-shadow: 0 0 20px var(--accent-color);
}

.footer-bottom {
    text-align: center;
    padding-top: 20px;
    border-top: 1px solid #333;
    color: #ccc;
    position: relative;
}

.footer-bottom::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--primary-color), transparent);
}

.footer-bottom p {
    font-size: 0.9rem;
    line-height: 1.6;
    position: relative;
    display: inline-block;
}

.footer-bottom .copyright-brand {
    color: var(--primary-color);
    font-weight: 600;
    text-shadow: 0 0 10px rgba(76, 175, 80, 0.3);
}

.footer-bottom .developer-info {
    color: var(--accent-color);
    font-weight: 500;
    font-style: italic;
    margin-top: 5px;
    display: block;
    font-size: 0.85rem;
}

.footer-bottom .discord-tag {
    background: linear-gradient(45deg, #5865F2, #7289DA);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 700;
    text-shadow: none;
}

.footer-bottom:hover .copyright-brand {
    text-shadow: 0 0 15px rgba(76, 175, 80, 0.5);
    transition: text-shadow 0.3s ease;
}

.footer-bottom:hover .developer-info {
    color: var(--primary-color);
    transition: color 0.3s ease;
}

/* Responsive Design */
@media (max-width: 768px) {
    .hamburger {
        display: flex;
    }
    
    .nav-menu {
        position: fixed;
        left: -100%;
        top: 70px;
        flex-direction: column;
        background-color: var(--dark-color);
        width: 100%;
        text-align: center;
        transition: 0.3s;
        padding: 20px 0;
    }
    

    
    .nav-menu.active {
        left: 0;
    }
    
    .hero-content {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 30px;
    }
    
    .hero-title {
        font-size: 2.5rem;
    }
    
    .hero-buttons {
        flex-direction: column;
        align-items: center;
    }
    
    .minecraft-world {
        width: 200px;
        height: 200px;
    }
    
    .block {
        width: 40px;
        height: 40px;
    }
    
    .section-title {
        font-size: 2rem;
    }
    
    .cta-content h2 {
        font-size: 2rem;
    }
    
    .cta-buttons {
        flex-direction: column;
        align-items: center;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 0 15px;
    }
    
    .hero-title {
        font-size: 2rem;
    }
    
    .btn {
        padding: 12px 25px;
        font-size: 0.9rem;
    }
    
    .info-card,
    .feature-item {
        padding: 30px 20px;
    }
}

/* Scroll Animations */
.fade-in {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease;
}

.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}

/* Stagger animation for cards */
.fade-in:nth-child(1) { transition-delay: 0.1s; }
.fade-in:nth-child(2) { transition-delay: 0.2s; }
.fade-in:nth-child(3) { transition-delay: 0.3s; }
.fade-in:nth-child(4) { transition-delay: 0.4s; }
.fade-in:nth-child(5) { transition-delay: 0.5s; }
.fade-in:nth-child(6) { transition-delay: 0.6s; }

/* Bounce animation for buttons */
@keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-10px); }
    60% { transform: translateY(-5px); }
}

.btn:hover {
    animation: bounce 0.6s ease;
}

/* Loading Animation */
.loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--dark-color);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    transition: opacity 0.5s ease;
}

.loading.hidden {
    opacity: 0;
    pointer-events: none;
}

.loading-spinner {
    width: 50px;
    height: 50px;
    border: 3px solid var(--primary-color);
    border-top: 3px solid transparent;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* Enhanced Animations */
@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
}

@keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.05); opacity: 0.8; }
}

@keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
}

@keyframes slideInLeft {
    0% { transform: translateX(-100px); opacity: 0; }
    100% { transform: translateX(0); opacity: 1; }
}

@keyframes slideInRight {
    0% { transform: translateX(100px); opacity: 0; }
    100% { transform: translateX(0); opacity: 1; }
}

@keyframes slideInUp {
    0% { transform: translateY(100px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
}

@keyframes slideInDown {
    0% { transform: translateY(-100px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
}

@keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@keyframes scale {
    0% { transform: scale(0); }
    100% { transform: scale(1); }
}

@keyframes fadeInScale {
    0% { opacity: 0; transform: scale(0.8); }
    100% { opacity: 1; transform: scale(1); }
}

@keyframes glow {
    0%, 100% { box-shadow: 0 0 5px var(--primary-color); }
    50% { box-shadow: 0 0 20px var(--primary-color), 0 0 30px var(--primary-color); }
}

@keyframes typewriter {
    0% { width: 0; }
    100% { width: 100%; }
}

@keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
}

@keyframes wave {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(20deg); }
    75% { transform: rotate(-20deg); }
}

@keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}

@keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
    20%, 40%, 60%, 80% { transform: translateX(5px); }
}

@keyframes rainbow {
    0% { filter: hue-rotate(0deg); }
    100% { filter: hue-rotate(360deg); }
}

@keyframes morphing {
    0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
    50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
}

/* Enhanced Element Animations */
.nav-logo i {
    animation: float 3s ease-in-out infinite;
}

.hero::before {
    animation: morphing 20s ease-in-out infinite;
}

.info-card {
    animation: fadeInScale 0.6s ease-out;
}

.info-card:hover {
    animation: pulse 2s ease-in-out infinite;
}

.feature-item {
    animation: slideInUp 0.8s ease-out;
}

.feature-item:hover {
    animation: heartbeat 1s ease-in-out;
}

.btn-primary {
    background: linear-gradient(45deg, var(--primary-color), var(--accent-color), var(--primary-color));
    background-size: 200% 200%;
    animation: shimmer 3s ease-in-out infinite;
}

.btn-primary:hover {
    animation: glow 1s ease-in-out infinite;
}

.social-links a:hover {
    animation: shake 0.5s ease-in-out;
}

.footer::before {
    animation: rainbow 10s linear infinite;
}

/* Parallax and 3D Effects */
.hero {
    perspective: 1000px;
}

.hero-content {
    transform-style: preserve-3d;
    animation: float 6s ease-in-out infinite;
}

.info-icon {
    animation: rotate 10s linear infinite;
}

.info-icon:hover {
    animation: rotate 2s linear infinite;
}

/* Text Animations */
.section-title {
    background: linear-gradient(45deg, var(--primary-color), var(--accent-color), var(--secondary-color));
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer 4s ease-in-out infinite;
}

/* Enhanced Loading Animation */
.loading-spinner {
    animation: spin 1s linear infinite, glow 2s ease-in-out infinite;
}

/* Scroll-triggered animations */
.scroll-animate {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.scroll-animate.visible {
    opacity: 1;
    transform: translateY(0);
}

/* Stagger animations for grid items */
.scroll-animate:nth-child(1) { transition-delay: 0.1s; }
.scroll-animate:nth-child(2) { transition-delay: 0.2s; }
.scroll-animate:nth-child(3) { transition-delay: 0.3s; }
.scroll-animate:nth-child(4) { transition-delay: 0.4s; }
.scroll-animate:nth-child(5) { transition-delay: 0.5s; }
.scroll-animate:nth-child(6) { transition-delay: 0.6s; }

/* Hover effects with animations */
.nav-link:hover {
    animation: wave 0.5s ease-in-out;
}

.info-card:hover .info-icon {
    animation: bounce 0.6s ease-in-out;
}

.feature-item:hover .feature-icon {
    animation: rotate 1s ease-in-out;
}

/* Cursor animations */
.cursor-blink {
    animation: blink 1s infinite;
}

/* Enhanced button animations */
.btn {
    position: relative;
    overflow: hidden;
}

.btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
}

.btn:hover::before {
    left: 100%;
}

/* Particle effects */
.particle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: var(--primary-color);
    border-radius: 50%;
    animation: float 3s ease-in-out infinite;
}

.particle:nth-child(1) { animation-delay: 0s; }
.particle:nth-child(2) { animation-delay: 0.5s; }
.particle:nth-child(3) { animation-delay: 1s; }
.particle:nth-child(4) { animation-delay: 1.5s; }
.particle:nth-child(5) { animation-delay: 2s; }

/* Enhanced Navigation Animations */
.navbar {
    animation: slideInDown 0.8s ease-out;
}

.nav-logo:hover {
    animation: pulse 0.6s ease-in-out;
}

.nav-link {
    position: relative;
    overflow: hidden;
}

.nav-link::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
    transition: left 0.3s ease;
}

.nav-link:hover::before {
    left: 0;
}

/* Enhanced Footer Animations */
.footer {
    position: relative;
    overflow: hidden;
}

.footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--primary-color), transparent);
    animation: shimmer 3s ease-in-out infinite;
}

.footer-section h3 {
    animation: gentleFloat 5s ease-in-out infinite;
}

.footer-section ul li {
    transition: all 0.3s ease;
}

.footer-section ul li:hover {
    transform: translateX(10px);
    color: var(--primary-color);
}

/* Enhanced Social Links */
.social-links a {
    position: relative;
    overflow: hidden;
}

.social-links a::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255,255,255,0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
}

.social-links a:hover::after {
    width: 100%;
    height: 100%;
}

/* Enhanced Button Animations */
.btn {
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
}

.btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
}

.btn:hover::before {
    left: 100%;
}

.btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.3);
}

/* Enhanced Card Hover Effects */
.info-card:hover,
.feature-item:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0,0,0,0.4);
}

.info-card:hover .info-icon,
.feature-item:hover .feature-icon {
    animation: bounce 0.6s ease-in-out;
}

/* Enhanced Text Animations */
.hero-subtitle {
    animation: slideInUp 1s ease-out 0.5s both;
}

.section-title {
    position: relative;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    width: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
    transform: translateX(-50%);
    animation: expandWidth 2s ease-out 1s forwards;
}

@keyframes expandWidth {
    to { width: 100px; }
}

/* Enhanced Scroll Animations */
.scroll-indicator {
    animation: bounce 2s ease-in-out infinite;
}

/* Enhanced Loading States */
.loading-state {
    opacity: 0.7;
    pointer-events: none;
}

.loading-state::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    border: 2px solid var(--primary-color);
    border-top: 2px solid transparent;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    transform: translate(-50%, -50%);
}

/* Enhanced Focus States */
.nav-link:focus,
.btn:focus,
.social-links a:focus {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
    animation: gentleGlow 0.3s ease-in-out;
}

/* Enhanced Mobile Animations */
@media (max-width: 768px) {
    .nav-menu.active {
        animation: slideInDown 0.3s ease-out;
    }
    
    .hamburger.active .bar:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active .bar:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
}
