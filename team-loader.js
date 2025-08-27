// Team Loader für BlitzSMP
// Direkte Team-Daten ohne YAML-Laden

class TeamLoader {
    constructor() {
        this.teamData = this.getTeamData();
    }

    // Direkte Team-Daten (kann hier bearbeitet werden)
    getTeamData() {
        return {
            owner: [
                "Gibril",
            ],
            coowner: [
                "1111",
            ],
            manager: [
                "Croxy",
                "brokenrace"
            ],
            admin: [
                "Danny",
                "M of Lukas"
            ],
            dev: [
                "zNeioo"
            ],
            mod: [
                "Cornelius",
                "CS_D"
            ],
            helper: [
                "henri",
                "Pluzzly"
            ],
            builder: [
                "Kein Mitglied des Servers hat die @🔥 Builder Rolle."
            ]
        };
    }

    // Generiert die Team-Tabelle
    generateTeamTable() {
        const container = document.querySelector('.team-table');
        if (!container) {
            console.error('Team-Table Container nicht gefunden');
            return;
        }

        container.innerHTML = '';

        // Kategorien in der gewünschten Reihenfolge
        const categories = ['owner', 'coowner', 'manager', 'admin', 'dev', 'mod', 'helper', 'builder'];
        const categoryNames = {
            'owner': '👑 Owner',
            'coowner': '👑 Co-Owner',
            'manager': '⭐ Manager', 
            'admin': '🛡️ Admin',
            'dev': '💻 Developer',
            'mod': '⚖️ Moderator',
            'helper': '🤝 Helper',
            'builder': '🔨 Builder'
        };

        const categoryColors = {
            'owner': '#FFD700', // Gold
            'coowner': '#FFD700', // Gold
            'manager': '#FF6B6B', // Rot
            'admin': '#4ECDC4', // Türkis
            'dev': '#45B7D1', // Blau
            'mod': '#96CEB4', // Grün
            'helper': '#FFEAA7', // Gelb
            'builder': '#DDA0DD' // Lila
        };

        const categoryGradients = {
            'owner': 'linear-gradient(135deg, #FFD700, #FFA500)',
            'coowner': 'linear-gradient(135deg, #FFD700, #FFA500)',
            'manager': 'linear-gradient(135deg, #FF6B6B, #FF8E8E)',
            'admin': 'linear-gradient(135deg, #4ECDC4, #44A08D)',
            'dev': 'linear-gradient(135deg, #45B7D1, #96C93D)',
            'mod': 'linear-gradient(135deg, #96CEB4, #FFEAA7)',
            'helper': 'linear-gradient(135deg, #FFEAA7, #DDA0DD)',
            'builder': 'linear-gradient(135deg, #DDA0DD, #98D8C8)'
        };

        const icons = {
            'owner': 'fas fa-crown',
            'coowner': 'fas fa-crown',
            'manager': 'fas fa-star',
            'admin': 'fas fa-shield-alt',
            'dev': 'fas fa-code',
            'mod': 'fas fa-gavel',
            'helper': 'fas fa-hands-helping',
            'builder': 'fas fa-hammer'
        };

        categories.forEach(category => {
            if (this.teamData[category] && this.teamData[category].length > 0) {
                const categoryDiv = this.createCategoryElement(
                    categoryNames[category],
                    icons[category],
                    this.teamData[category],
                    category,
                    categoryColors[category],
                    categoryGradients[category]
                );
                container.appendChild(categoryDiv);
            }
        });
    }

    // Erstellt ein Kategorie-Element
    createCategoryElement(title, icon, members, category, color, gradient) {
        const div = document.createElement('div');
        div.style.cssText = `
            background: linear-gradient(145deg, #2a2a2a, #333333);
            padding: 30px 25px;
            border-radius: 20px;
            text-align: center;
            transition: all 0.4s ease;
            border: 2px solid #444;
            position: relative;
            overflow: hidden;
            animation: gentlePulse 8s ease-in-out infinite;
        `;
        
        // Hover-Effekte
        div.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
            this.style.boxShadow = `0 25px 50px ${color}33`;
            this.style.borderColor = color;
        });
        
        div.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 10px 25px rgba(0,0,0,0.3)';
            this.style.borderColor = '#444';
        });
        
        // Icon Container
        const iconContainer = document.createElement('div');
        iconContainer.style.cssText = `
            width: 80px;
            height: 80px;
            background: ${gradient};
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
            font-size: 2rem;
            color: white;
            transition: all 0.4s ease;
            animation: gentleFloat 4s ease-in-out infinite;
            box-shadow: 0 8px 25px ${color}40;
        `;
        
        const iconElement = document.createElement('i');
        iconElement.className = icon;
        iconContainer.appendChild(iconElement);
        
        // Titel
        const titleElement = document.createElement('h3');
        titleElement.textContent = title;
        titleElement.style.cssText = `
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 25px;
            color: #ffffff;
            text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        `;
        
        // Mitglieder Liste
        const membersList = document.createElement('div');
        membersList.style.cssText = `
            display: flex;
            flex-direction: column;
            gap: 12px;
        `;
        
        members.forEach(member => {
            const memberDiv = document.createElement('div');
            memberDiv.style.cssText = `
                padding: 12px 15px;
                background: rgba(255,255,255,0.05);
                border-radius: 10px;
                border-left: 4px solid ${color};
                transition: all 0.3s ease;
                font-weight: 500;
                color: #cccccc;
                font-size: 0.95rem;
            `;
            
            // Hover-Effekt für Mitglieder
            memberDiv.addEventListener('mouseover', function() {
                this.style.transform = 'translateX(5px)';
                this.style.background = 'rgba(255,255,255,0.1)';
                this.style.color = '#ffffff';
            });
            
            memberDiv.addEventListener('mouseout', function() {
                this.style.transform = 'translateX(0)';
                this.style.background = 'rgba(255,255,255,0.05)';
                this.style.color = '#cccccc';
            });
            
            // Spezielle Styling für Builder-Kategorie
            if (category === 'builder') {
                memberDiv.style.color = '#999999';
                memberDiv.style.fontStyle = 'italic';
                memberDiv.style.borderLeftColor = '#666666';
            } else {
                memberDiv.innerHTML = `<i class="fas fa-user" style="margin-right: 8px; color: ${color};"></i>@ʙʟɪᴛᴢ | ${member}`;
            }
            
            membersList.appendChild(memberDiv);
        });
        
        div.appendChild(iconContainer);
        div.appendChild(titleElement);
        div.appendChild(membersList);
        
        return div;
    }

    // Initialisiert den Team Loader
    init() {
        this.generateTeamTable();
    }
}

// Auto-Initialisierung wenn das Script geladen wird
document.addEventListener('DOMContentLoaded', () => {
    const teamLoader = new TeamLoader();
    teamLoader.init();
});

// Export für manuelle Verwendung
window.TeamLoader = TeamLoader;
