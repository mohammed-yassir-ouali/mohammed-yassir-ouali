// Language toggle functionality
    document.addEventListener('DOMContentLoaded', function() {
      const langToggle = document.getElementById('lang-toggle');
      const currentLang = document.getElementById('current-lang');
      let isEnglish = true;
      
      // Translation content
      const translations = {
        en: {
          gamesTitle: "Our Games",
          gameTitle: "Word Odyssey",
          gameDesc: "An entertaining word game that enhances intelligence and thinking. Enjoy solving words with your friends and challenge yourself at every new level.",
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
          gameDesc: "لعبة كلمات ممتعة تنمي الذكاء والتفكير. استمتع بحل الكلمات مع أصدقائك وتحدى نفسك في كل مستوى جديد.",
          aboutTitle: "عن البردة",
          aboutDesc: "نصمم ألعاب كلمات للهاتف الجوال: إبداعٌ يُثري العقل ويُبهج العالم.",
          contactTitle: "تواصل معنا",
          contactEmail: " mohammed.yassir.ouali@alborda-games.com  : البريد الإلكتروني",
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
        
        // Apply animation to all elements with fade-in class
        document.querySelectorAll('.fade-in').forEach(el => {
          el.classList.remove('fade-in');
          setTimeout(() => {
            el.classList.add('fade-in');
          }, 10);
        });
      }
      
      // Add event listener
      langToggle.addEventListener('click', toggleLanguage);
      
      // Scroll to section when arrow is clicked
      const scrollDownButton = document.getElementById('scroll-down');
      if (scrollDownButton) {
        scrollDownButton.addEventListener('click', function() {
          const aboutSection = document.getElementById('games');
          if (aboutSection) {
            aboutSection.scrollIntoView({ 
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