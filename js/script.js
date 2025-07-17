// Language toggle functionality
document.addEventListener('DOMContentLoaded', function () {
  const langToggle = document.getElementById('lang-toggle');
  const currentLang = document.getElementById('current-lang');
  let isEnglish = true;

  // Translation content
  const translations = {
    en: {
      gamesTitle: "Our Games",
      gameTitle: "Word Odyssey",
      gameDesc: "Word Odyssey is an engaging Arabic crossword game, where you can play casually to enjoy and sharpen your language skills or challenge friends in competitive matches. Whether you're testing your vocabulary or aiming for the top of the leaderboard, Word Odyssey makes wordplay both fun and rewarding.",
      aboutTitle: "About Alborda",
      aboutDesc: "Designing innovative mobile word games that engage minds and entertain players worldwide.",
      contactTitle: "Contact Us",
      contactEmail: "Email: mohammed.yassir.ouali@alborda-games.com",
      contactSocial: "Follow us on social media",
      langLabel: "EN"
    },
    ar: {
      gamesTitle: "ألعابنا",
      gameTitle: "ملحمة الكلمات",
      gameDesc: "ملحمة الكلمات هي لعبة كلمات متقاطعة عربية ممتعة ومشوقة، حيث يمكنك اللعب بشكل عفوي للاستمتاع وتطوير مهاراتك اللغوية، أو تحدي أصدقائك في مباريات تنافسية. سواء كنت تختبر مفرداتك أو تسعى لتصدر لوحة المتصدرين، فإن ملحمة الكلمات تجعل اللعب بالكلمات تجربة ممتعة.",
      aboutTitle: "عن البردة",
      aboutDesc: "نصمم ألعاب كلمات للهاتف الجوال: إبداعٌ يُثري العقل ويُبهج العالم.",
      contactTitle: "تواصل معنا",
      contactEmail: " البريد الإلكتروني : mohammed.yassir.ouali@alborda-games.com",
      contactSocial: "تابعنا على وسائل التواصل الاجتماعي",
      langLabel: "AR"
    }
  };

  // Toggle language function
  function toggleLanguage() {
    isEnglish = !isEnglish;
    const lang = isEnglish ? 'en' : 'ar';

    // Update text content
    document.getElementById('games-title').textContent = translations[lang].gamesTitle;
    document.getElementById('game-title').textContent = translations[lang].gameTitle;
    document.getElementById('game-desc').textContent = translations[lang].gameDesc;
    document.getElementById('about-title').textContent = translations[lang].aboutTitle;
    document.getElementById('about-desc').textContent = translations[lang].aboutDesc;
    document.getElementById('contact-title').textContent = translations[lang].contactTitle;
    document.getElementById('contact-email').textContent = translations[lang].contactEmail;
    currentLang.textContent = translations[lang].langLabel;

    // Update direction
    document.documentElement.setAttribute('dir', isEnglish ? 'ltr' : 'rtl');

    // Update body font class
    document.body.classList.remove('english-font', 'arabic-font');
    document.body.classList.add(isEnglish ? 'english-font' : 'arabic-font');

    // Swap font classes throughout document
    const fontElements = document.querySelectorAll('.english-font, .arabic-font');
    fontElements.forEach(el => {
      el.classList.remove('english-font', 'arabic-font');
      el.classList.add(isEnglish ? 'english-font' : 'arabic-font');
    });

    // Re-trigger fade-in animation
    document.querySelectorAll('.fade-in').forEach(el => {
      el.classList.remove('fade-in');
      setTimeout(() => {
        el.classList.add('fade-in');
      }, 10);
    });
  }

  // Add event listener to toggle button
  langToggle.addEventListener('click', toggleLanguage);

  // Scroll to section when arrow is clicked
  const scrollDownButton = document.getElementById('scroll-down');
  if (scrollDownButton) {
    scrollDownButton.addEventListener('click', function () {
      const gamesSection = document.getElementById('games');
      if (gamesSection) {
        gamesSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  }

  // Fade-in animation on scroll
  window.addEventListener('scroll', () => {
    document.querySelectorAll('.fade-left, .fade-right').forEach(el => {
      const rect = el.getBoundingClientRect();
      el.classList.remove('show');
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('show');
      }
    });
  });
});
