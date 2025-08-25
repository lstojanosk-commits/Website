/* Reset und Basis-Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-color: #4CAF50;
    --secondary-color: #2196F3;
    --accent-color: #FF9800;
    --dark-color: #1a1a1a;
    --light-color: #f8f9fa;
    --text-color: #333;
    --text-light: #666;
    --border-color: #e0e0e0;
    --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-hover: 0 8px 15px rgba(0, 0, 0, 0.2);
    --gradient-primary: linear-gradient(135deg, #4CAF50, #45a049);
    --gradient-secondary: linear-gradient(135deg, #2196F3, #1976D2);
}

body {
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    overflow-x: hidden;
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
    animation: rotate 3s linear infinite;
}

@keyframes rotate {
    from { transform: rotateY(0deg); }
    to { transform: rotateY(360deg); }
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
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary-color);
    transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.active::after {
    width: 100%;
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
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-hover);
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
    background: var(--light-color);
}

.section-title {
    text-align: center;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 60px;
    color: var(--dark-color);
    position: relative;
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
}

.info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}

.info-card {
    background: white;
    padding: 40px 30px;
    border-radius: 20px;
    text-align: center;
    box-shadow: var(--shadow);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
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
    box-shadow: var(--shadow-hover);
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
}

.info-card:hover .info-icon {
    transform: scale(1.1) rotate(360deg);
}

.info-card h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 15px;
    color: var(--dark-color);
}

.info-card p {
    color: var(--text-light);
    margin-bottom: 10px;
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

/* Features Section */
.features {
    padding: 100px 0;
    background: white;
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
    color: var(--dark-color);
}

.feature-item p {
    color: var(--text-light);
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
}

.social-links a:hover {
    transform: translateY(-3px);
    background: var(--accent-color);
}

.footer-bottom {
    text-align: center;
    padding-top: 20px;
    border-top: 1px solid #333;
    color: #ccc;
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
