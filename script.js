// FAQ Accordion
const faqCards = document.querySelectorAll('.faq-card');
faqCards.forEach(card => {
  const question = card.querySelector('.faq-question');
  question.addEventListener('click', () => {
    // Sadece bir tane açık kalsın
    faqCards.forEach(c => {
      if (c !== card) c.classList.remove('active');
    });
    card.classList.toggle('active');
  });
});

// Contact Form Modern Submit
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Modern alert
    if (window.Swal) {
      Swal.fire({
        icon: 'success',
        title: 'Teşekkürler!',
        text: 'Mesajınız başarıyla gönderildi.',
        confirmButtonColor: '#d4af37',
        background: 'rgba(20,30,60,0.95)',
        color: '#fff',
      });
    } else {
      alert('Teşekkürler! Mesajınız başarıyla gönderildi.');
    }
    contactForm.reset();
  });
}

// Gallery Lightbox
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('#lightbox-img');
const lightboxCaption = document.querySelector('.lightbox-caption');
const lightboxClose = document.querySelector('.lightbox-close');

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    lightboxImg.src = img.src;
    lightboxCaption.textContent = img.alt;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

lightboxClose.addEventListener('click', () => {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// ESC tuşu ile kapatma
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox.classList.contains('active')) {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// Hero Slider
const heroImages = document.querySelectorAll('.hero-img');
let heroIndex = 0;
if (heroImages.length > 1) {
  setInterval(() => {
    heroImages[heroIndex].classList.remove('active');
    heroIndex = (heroIndex + 1) % heroImages.length;
    heroImages[heroIndex].classList.add('active');
  }, 5000);
}

// Sayfa açıldığında en üste kaydır
window.addEventListener('load', function() {
  window.scrollTo(0, 0);
}); 