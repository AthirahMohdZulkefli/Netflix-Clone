
// -- Landing Page Languange -- //
const translations = {
    en: {
        title: "Unlimited movies, TV shows, and more",
        subtitle: "Starts at RM 18.90. Cancel anytime.",
        prompt: "Ready to watch? Enter your email to create or restart your membership.",
        button: "Get Started"
    },
    ms: {
        title: "Filem tanpa had, rancangan TV dan banyak lagi",
        subtitle: "Bermula dari RM 18.90. Boleh dibatalkan pada bila-bila masa.",
        prompt: "Sedia untuk menonton? Masukkan e-mel anda untuk mencipta atau meneruskan langganan anda.",
        button: "Mula"
    }
};

document.getElementById("language-select").addEventListener("change", function () {
    const lang = this.value;
    document.getElementById("page-title").textContent = translations[lang].title;
    document.getElementById("page-subtitle").textContent = translations[lang].subtitle;
    document.getElementById("page-prompt").textContent = translations[lang].prompt;
    document.getElementById("page-button").textContent = translations[lang].button;
});


// -- Landing Page Sign In/Sign Up (Get Started) -- //
document.addEventListener("DOMContentLoaded", () => {
    // Redirect to Sign In page when clicking the Sign In button
    document.querySelector(".sign-in").addEventListener("click", () => {
        window.location.href = "signin.html"; // Redirect to the Sign In page
    });
});



// -- Sign In -- //
document.addEventListener("DOMContentLoaded", () => {
    // Redirect to Sign In page when clicking the Sign In button
    document.querySelector(".sign-button").addEventListener("click", () => {
        window.location.href = "movies.html"; // Redirect to the Movies page
    });
});

