// Localization database for English and French
const translations = {
    en: {
        title: "Solving MarTech Over Coffee",
        desc: "We bridge the gap between engineering and marketing. Specializing in technical integration, complex automation, and global localization for high-growth startups.",
        srv1Title: "MarTech & APIs", 
        srv1Desc: "Connecting core databases to marketing automation platforms (HubSpot, Salesforce) via custom JS scripts.",
        srv2Title: "Data & Tracking", 
        srv2Desc: "Advanced GTM implementation, clean data layers, and privacy compliance (GDPR Consent Mode v2).",
        srv3Title: "Tech Localization", 
        srv3Desc: "Adapting apps and codebase structures for European expansion, ensuring multi-lingual flow integrity.",
        srv4Title: "Front-End Optimization", 
        srv4Desc: "Ultra-fast Vanilla JS solutions that improve performance metrics without bulk frameworks.",
        contactTitle: "Let's talk over coffee", 
        btnSubmit: "Send Message",
        placeholderName: "Your Name",
        placeholderEmail: "Your Email",
        placeholderMsg: "Tell us about your technical challenge..."
    },
    fr: {
        title: "Résoudre le MarTech autour d'un café",
        desc: "Nous comblons le fossé entre l'ingénierie et le marketing. Spécialisés dans l'intégration technique, l'automatisation complexe et la localisation globale pour les startups en forte croissance.",
        srv1Title: "MarTech & APIs", 
        srv1Desc: "Connexion de vos bases de données aux plateformes d'automatisation marketing (HubSpot, Salesforce) via des scripts JS personnalisés.",
        srv2Title: "Données & Tracking", 
        srv2Desc: "Implémentation avancée de GTM, gestion du data layer et conformité RGPD (Consent Mode v2 de Google).",
        srv3Title: "Localisation Technique", 
        srv3Desc: "Adaptation de vos applications et structures de code pour l'expansion européenne, garantissant l'intégrité des flux multilingues.",
        srv4Title: "Optimisation Front-End", 
        srv4Desc: "Solutions d'ingénierie en Vanilla JS ultra-rapides qui boostent vos performances sans frameworks lourds.",
        contactTitle: "Discutons-en autour d'un café", 
        btnSubmit: "Envoyer le message",
        placeholderName: "Votre Nom",
        placeholderEmail: "Votre Adresse Email",
        placeholderMsg: "Parlez-nous de votre défi technique..."
    }
};

let currentLang = 'en';

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'fr' : 'en';
    
    // UI Language Button update
    document.getElementById('langBtn').innerText = currentLang === 'en' ? 'Français' : 'English';
    
    // Dynamic DOM updates for French / English text
    document.getElementById('mainTitle').innerText = translations[currentLang].title;
    document.getElementById('mainDesc').innerText = translations[currentLang].desc;
    document.getElementById('srv1Title').innerText = translations[currentLang].srv1Title;
    document.getElementById('srv1Desc').innerText = translations[currentLang].srv1Desc;
    document.getElementById('srv2Title').innerText = translations[currentLang].srv2Title;
    document.getElementById('srv2Desc').innerText = translations[currentLang].srv2Desc;
    document.getElementById('srv3Title').innerText = translations[currentLang].srv3Title;
    document.getElementById('srv3Desc').innerText = translations[currentLang].srv3Desc;
    document.getElementById('srv4Title').innerText = translations[currentLang].srv4Title;
    document.getElementById('srv4Desc').innerText = translations[currentLang].srv4Desc;
    document.getElementById('contactTitle').innerText = translations[currentLang].contactTitle;
    document.getElementById('btnSubmit').innerText = translations[currentLang].btnSubmit;
    
    // Dynamic placeholders mapping update
    document.getElementById('formName').placeholder = translations[currentLang].placeholderName;
    document.getElementById('formEmail').placeholder = translations[currentLang].placeholderEmail;
    document.getElementById('formMessage').placeholder = translations[currentLang].placeholderMsg;
}

// Handling lead form events
function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('formName').value;
    const email = document.getElementById('formEmail').value;
    
    console.log(`Lead captured in system: ${name} (${email})`);
    
    const feedbackMsg = currentLang === 'en' ? 
        "Success! You've validated the logic. Next step: webhooks!" : 
        "Succès ! Vous avez validé la logique. Prochaine étape : les webhooks !";
        
    alert(feedbackMsg);
}
