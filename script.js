// Initialize AOS
AOS.init({ 
  duration: 800,
  once: true,
  offset: 100
});

// CTA Popup Data
const ctaData = {
  'service-card': [
    {
      title: '🏠 Kamar Kos Premium',
      subtitle: 'Transformasi Kamar Impian Anda',
      description: 'Layanan pembersihan kamar kos yang komprehensif dengan standar hotel berbintang. Tim profesional kami akan membersihkan setiap sudut kamar Anda.',
      features: [
        '✨ Pembersihan debu menyeluruh pada semua permukaan',
        '🧹 Penyapuan dan pel lantai dengan disinfektan',
        '🛏️ Penataan kasur dan sprei dengan rapi',
        '🪟 Pembersihan kaca dan cermin hingga berkilau',
        '🗂️ Organisasi dan penataan barang pribadi',
        '🌿 Penyemprotan pewangi alami'
      ],
      price: 'Mulai dari Rp 30.000',
      whatsappText: 'Halo Bebesih! Saya tertarik dengan layanan Kamar Kos Premium. Bisakah saya mendapat informasi lebih lanjut?'
    },
    {
      title: '🚿 Kamar Mandi Steril',
      subtitle: 'Kebersihan & Kesehatan Maksimal',
      description: 'Layanan sterilisasi kamar mandi menggunakan teknologi dan produk pembersih premium. Jaminan bebas kuman dan bau tidak sedap.',
      features: [
        '🧽 Pembersihan keramik dan nat dengan sikat khusus',
        '🚽 Sterilisasi toilet dengan disinfektan medis',
        '🚿 Pembersihan shower dan keran anti-karat',
        '🪞 Poles cermin dan aksesoris kamar mandi',
        '🧴 Penggunaan produk antibakteri premium',
        '💨 Eliminasi bau dengan ventilasi dan pewangi'
      ],
      price: 'Mulai dari Rp 25.000',
      whatsappText: 'Halo Bebesih! Saya ingin menggunakan layanan Kamar Mandi Steril. Kapan bisa dijadwalkan?'
    },
    {
      title: '📅 Langganan Fleksibel',
      subtitle: 'Kebersihan Konsisten Sepanjang Waktu',
      description: 'Paket berlangganan dengan jadwal yang dapat disesuaikan. Hemat waktu dan biaya dengan layanan rutin yang terjamin kualitasnya.',
      features: [
        '🗓️ Jadwal mingguan, bi-weekly, atau bulanan',
        '💰 Diskon hingga 20% untuk pelanggan setia',
        '📞 Prioritas booking dan customer service',
        '🔄 Fleksibilitas reschedule tanpa biaya tambahan',
        '🎁 Bonus layanan tambahan setiap bulan',
        '📊 Laporan kebersihan dan maintenance'
      ],
      price: 'Hemat hingga 20%',
      whatsappText: 'Halo Bebesih! Saya tertarik dengan paket langganan. Bisa dijelaskan opsi yang tersedia?'
    }
  ],
  'pricing-card': [
    {
      title: '💚 Paket Hemat',
      subtitle: 'Solusi Ekonomis untuk Kebersihan Dasar',
      description: 'Paket entry-level yang cocok untuk mahasiswa dan pekerja muda. Kualitas terjamin dengan harga terjangkau.',
      features: [
        '⏰ Durasi layanan 30 menit efektif',
        '🏠 Khusus kamar ukuran kecil (< 15m²)',
        '🧹 Pembersihan dasar: sapu, pel, rapikan',
        '🧽 Peralatan dan produk pembersih disediakan',
        '👨‍💼 Tenaga kerja berpengalaman',
        '💯 Garansi kepuasan 100%'
      ],
      price: 'Rp 30.000',
      originalPrice: 'Rp 40.000',
      whatsappText: 'Halo Bebesih! Saya ingin memesan Paket Hemat untuk kamar kos saya.'
    },
    {
      title: '⭐ Paket Lengkap',
      subtitle: 'Pilihan Terpopuler - Nilai Terbaik!',
      description: 'Paket paling diminati dengan kombinasi sempurna antara harga dan kualitas. Cocok untuk kebersihan rutin yang menyeluruh.',
      features: [
        '🏠 Kamar + kamar mandi dalam satu paket',
        '⏰ Durasi layanan 1 jam penuh',
        '🔍 Pembersihan mendalam setiap detail',
        '🦠 Sterilisasi premium anti-bakteri',
        '🌟 Tim profesional bersertifikat',
        '📱 Foto before-after sebagai bukti'
      ],
      price: 'Rp 60.000',
      originalPrice: 'Rp 80.000',
      badge: 'HEMAT 25%',
      whatsappText: 'Halo Bebesih! Saya ingin memesan Paket Lengkap yang terpopuler.'
    },
    {
      title: '👑 Langganan VIP',
      subtitle: 'Layanan Premium untuk Lifestyle Terbaik',
      description: 'Paket eksklusif untuk Anda yang menginginkan kebersihan konsisten tanpa repot. Dilengkapi berbagai privilege khusus.',
      features: [
        '📅 4 sesi layanan premium per bulan',
        '⚡ Prioritas jadwal dan booking',
        '🎁 Bonus kamar mandi gratis setiap sesi',
        '💸 Diskon 15% untuk layanan tambahan',
        '🏆 Dedicated customer service manager',
        '🔄 Fleksibilitas reschedule unlimited'
      ],
      price: 'Rp 200.000/bulan',
      originalPrice: 'Rp 280.000/bulan',
      badge: 'HEMAT 30%',
      whatsappText: 'Halo Bebesih! Saya tertarik dengan paket Langganan VIP. Bisa dijelaskan benefit lengkapnya?'
    }
  ]
};

// Create popup HTML structure
function createPopup() {
  const popupHTML = `
    <div id="ctaPopup" class="cta-popup-overlay">
      <div class="cta-popup-container">
        <div class="cta-popup-header">
          <h2 id="popupTitle"></h2>
          <button class="cta-popup-close">&times;</button>
        </div>
        <div class="cta-popup-content">
          <h3 id="popupSubtitle"></h3>
          <p id="popupDescription"></p>
          <div class="cta-popup-features">
            <h4>Yang Anda Dapatkan:</h4>
            <ul id="popupFeaturesList"></ul>
          </div>
          <div class="cta-popup-pricing">
            <div class="cta-popup-price">
              <span id="popupOriginalPrice" class="original-price"></span>
              <span id="popupPrice" class="current-price"></span>
              <span id="popupBadge" class="price-badge"></span>
            </div>
          </div>
          <div class="cta-popup-actions">
            <button id="popupWhatsappBtn" class="cta-popup-whatsapp">
              <span>📱</span> Pesan Sekarang via WhatsApp
            </button>
            <button class="cta-popup-secondary">
              <span>📞</span> Konsultasi Gratis
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', popupHTML);
}

// Add popup styles
function addPopupStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .cta-popup-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(10px);
      z-index: 10000;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
    }
    
    .cta-popup-overlay.active {
      opacity: 1;
      visibility: visible;
    }
    
    .cta-popup-container {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 20px;
      max-width: 600px;
      width: 90%;
      max-height: 90vh;
      overflow-y: auto;
      position: relative;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      transform: scale(0.8) translateY(50px);
      transition: all 0.3s ease;
    }
    
    .cta-popup-overlay.active .cta-popup-container {
      transform: scale(1) translateY(0);
    }
    
    .cta-popup-header {
      padding: 30px 30px 20px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
    
    .cta-popup-header h2 {
      color: white;
      font-size: 1.8rem;
      font-weight: 700;
      margin: 0;
      flex: 1;
      line-height: 1.2;
    }
    
    .cta-popup-close {
      background: rgba(255, 255, 255, 0.1);
      border: none;
      color: white;
      font-size: 2rem;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      margin-left: 20px;
    }
    
    .cta-popup-close:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: rotate(90deg);
    }
    
    .cta-popup-content {
      padding: 30px;
    }
    
    .cta-popup-content h3 {
      color: rgba(255, 255, 255, 0.9);
      font-size: 1.3rem;
      margin-bottom: 15px;
      font-weight: 600;
    }
    
    .cta-popup-content p {
      color: rgba(255, 255, 255, 0.8);
      font-size: 1.1rem;
      line-height: 1.6;
      margin-bottom: 25px;
    }
    
    .cta-popup-features h4 {
      color: white;
      font-size: 1.2rem;
      margin-bottom: 15px;
      font-weight: 600;
    }
    
    .cta-popup-features ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .cta-popup-features li {
      color: rgba(255, 255, 255, 0.9);
      padding: 8px 0;
      font-size: 1rem;
      display: flex;
      align-items: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .cta-popup-features li:last-child {
      border-bottom: none;
    }
    
    .cta-popup-pricing {
      margin: 30px 0;
      text-align: center;
    }
    
    .cta-popup-price {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 15px;
      flex-wrap: wrap;
    }
    
    .original-price {
      color: rgba(255, 255, 255, 0.6);
      text-decoration: line-through;
      font-size: 1.1rem;
    }
    
    .current-price {
      color: #FFD700;
      font-size: 2rem;
      font-weight: 700;
    }
    
    .price-badge {
      background: #FF6B6B;
      color: white;
      padding: 5px 15px;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: 600;
      animation: pulse 2s infinite;
    }
    
    .cta-popup-actions {
      display: flex;
      gap: 15px;
      flex-direction: column;
      margin-top: 30px;
    }
    
    .cta-popup-whatsapp {
      background: linear-gradient(45deg, #25D366, #128C7E);
      color: white;
      border: none;
      padding: 15px 30px;
      border-radius: 50px;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }
    
    .cta-popup-whatsapp:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(37, 211, 102, 0.3);
    }
    
    .cta-popup-secondary {
      background: rgba(255, 255, 255, 0.1);
      color: white;
      border: 2px solid rgba(255, 255, 255, 0.3);
      padding: 12px 30px;
      border-radius: 50px;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }
    
    .cta-popup-secondary:hover {
      background: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.5);
    }
    
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
    
    @media (max-width: 768px) {
      .cta-popup-container {
        width: 95%;
        margin: 20px;
      }
      
      .cta-popup-header {
        padding: 20px 20px 15px;
      }
      
      .cta-popup-content {
        padding: 20px;
      }
      
      .cta-popup-header h2 {
        font-size: 1.5rem;
      }
      
      .cta-popup-actions {
        gap: 10px;
      }
    }
    
    /* Add cursor pointer to cards */
    .service-card, .pricing-card {
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .service-card:hover, .pricing-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    }
    
    /* Sparkle animation */
    @keyframes sparkle {
      0% {
        opacity: 1;
        transform: scale(0) rotate(0deg);
      }
      50% {
        opacity: 1;
        transform: scale(1) rotate(180deg);
      }
      100% {
        opacity: 0;
        transform: scale(0) rotate(360deg);
      }
    }
  `;
  document.head.appendChild(style);
}

// Show popup function
function showPopup(cardType, index) {
  const popup = document.getElementById('ctaPopup');
  const data = ctaData[cardType][index];
  
  // Populate popup content
  document.getElementById('popupTitle').textContent = data.title;
  document.getElementById('popupSubtitle').textContent = data.subtitle;
  document.getElementById('popupDescription').textContent = data.description;
  
  // Populate features list
  const featuresList = document.getElementById('popupFeaturesList');
  featuresList.innerHTML = '';
  data.features.forEach(feature => {
    const li = document.createElement('li');
    li.textContent = feature;
    featuresList.appendChild(li);
  });
  
  // Populate pricing
  document.getElementById('popupPrice').textContent = data.price;
  
  const originalPriceEl = document.getElementById('popupOriginalPrice');
  const badgeEl = document.getElementById('popupBadge');
  
  if (data.originalPrice) {
    originalPriceEl.textContent = data.originalPrice;
    originalPriceEl.style.display = 'inline';
  } else {
    originalPriceEl.style.display = 'none';
  }
  
  if (data.badge) {
    badgeEl.textContent = data.badge;
    badgeEl.style.display = 'inline-block';
  } else {
    badgeEl.style.display = 'none';
  }
  
  // Set WhatsApp link
  const whatsappBtn = document.getElementById('popupWhatsappBtn');
  whatsappBtn.onclick = () => {
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(data.whatsappText)}`, '_blank');
  };
  
  // Show popup
  popup.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Hide popup function
function hidePopup() {
  const popup = document.getElementById('ctaPopup');
  popup.classList.remove('active');
  document.body.style.overflow = '';
}

// Initialize popup system
function initializePopups() {
  createPopup();
  addPopupStyles();
  
  // Add click listeners to service cards
  document.querySelectorAll('.service-card').forEach((card, index) => {
    card.addEventListener('click', () => {
      showPopup('service-card', index);
    });
  });
  
  // Add click listeners to pricing cards
  document.querySelectorAll('.pricing-card').forEach((card, index) => {
    card.addEventListener('click', () => {
      showPopup('pricing-card', index);
    });
  });
  
  // Add close button listener
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('cta-popup-close') || 
        e.target.classList.contains('cta-popup-overlay')) {
      hidePopup();
    }
  });
  
  // Add ESC key listener
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      hidePopup();
    }
  });
  
  // Secondary button action
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('cta-popup-secondary')) {
      window.open('https://wa.me/6281234567890?text=Halo%20Bebesih!%20Saya%20ingin%20konsultasi%20gratis%20mengenai%20layanan%20yang%20tersedia.', '_blank');
    }
  });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.offsetTop;
      const offsetPosition = elementPosition - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Navbar background on scroll
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    navbar.style.backdropFilter = 'blur(20px)';
    navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.5)';
  } else {
    navbar.style.background = 'rgba(0, 0, 0, 0.8)';
    navbar.style.backdropFilter = 'blur(15px)';
    navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
  }
});

// Scroll animation observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in-up').forEach(el => {
  observer.observe(el);
});

// Enhanced sparkle effects with more frequency
document.addEventListener('mousemove', function(e) {
  if (Math.random() > 0.95) { // Increased frequency
    createSparkle(e.clientX, e.clientY);
  }
});

function createSparkle(x, y) {
  const sparkle = document.createElement('div');
  sparkle.style.position = 'fixed';
  sparkle.style.left = x + 'px';
  sparkle.style.top = y + 'px';
  sparkle.style.width = '6px';
  sparkle.style.height = '6px';
  sparkle.style.background = `hsl(${Math.random() * 360}, 70%, 80%)`;
  sparkle.style.borderRadius = '50%';
  sparkle.style.pointerEvents = 'none';
  sparkle.style.zIndex = '9999';
  sparkle.style.animation = 'sparkle 1.5s ease-out forwards';
  sparkle.style.boxShadow = '0 0 10px currentColor';
  
  document.body.appendChild(sparkle);
  
  setTimeout(() => {
    sparkle.remove();
  }, 1500);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initializePopups();
  
  // Add some random sparkles on page load
  setTimeout(() => {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        createSparkle(
          Math.random() * window.innerWidth,
          Math.random() * window.innerHeight
        );
      }, i * 200);
    }
  }, 1000);
});

// Add card hover effects with particles
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.service-card, .pricing-card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      // Create hover particles
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          const rect = card.getBoundingClientRect();
          createSparkle(
            rect.left + Math.random() * rect.width,
            rect.top + Math.random() * rect.height
          );
        }, i * 100);
      }
    });
  });
});
