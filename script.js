
// ===== PRODUCT DATA =====
const allProducts = [
  { id:1, name:'Air Max 270', brand:'Nike', filter:'nike', emoji:'14.avif', badge:'new', badgeLabel:'NEW', price:189, oldPrice:240, rating:'4.9 (312)', colors:['#111','#e63946','#f4a261'], sizes:['7','8','8.5','9','9.5','10','11','12'], desc:'Experience maximum comfort with Air Max technology. Perfect blend of style and performance for everyday wear.' },
  { id:2, name:'Ultraboost 22', brand:'Adidas', filter:'adidas', emoji:'12.webp', badge:'hot', badgeLabel:'HOT', price:220, oldPrice:280, rating:'4.8 (245)', colors:['#fff','#111','#4facfe'], sizes:['6','7','8','9','10','11'], desc:'Responsive Boost cushioning returns energy with every step. The perfect running shoe for serious athletes.' },
  { id:3, name:'Air Jordan 1 Retro', brand:'Jordan', filter:'jordan', emoji:'13.jpg', badge:'limited', badgeLabel:'LIMITED', price:320, oldPrice:null, rating:'5.0 (189)', colors:['#e63946','#111','#fff'], sizes:['7','8','9','10','11','12'], desc:'The shoe that changed basketball. The OG colorway in premium leather. A piece of sneaker history.' },
  { id:4, name:'RS-X³ Puzzle', brand:'Puma', filter:'puma', emoji:'15.avif', badge:'sale', badgeLabel:'SALE', price:120, oldPrice:180, rating:'4.7 (156)', colors:['#9b59b6','#fff','#43e97b'], sizes:['6','7','8','9','10','11'], desc:'Chunky dad-shoe aesthetic meets everyday comfort. Bold color-blocking that turns heads.' },
  { id:5, name:'550 Retro', brand:'New Balance', filter:'newbalance', emoji:'17.webp', badge:'new', badgeLabel:'NEW', price:150, oldPrice:null, rating:'4.9 (203)', colors:['#fff','#e63946','#84fab0'], sizes:['7','8','9','10','11','12'], desc:'Inspired by 90s basketball culture, the 550 is back with clean lines and premium suede uppers.' },
  { id:6, name:'Classic Leather', brand:'Reebok', filter:'', emoji:'18.jpg', badge:'sale', badgeLabel:'SALE', price:95, oldPrice:130, rating:'4.6 (178)', colors:['#fff','#111','#f4a261'], sizes:['6','7','8','9','10','11'], desc:'A timeless silhouette with soft leather upper. Clean, versatile, and endlessly stylish.' },
  { id:7, name:'Chuck 70 Hi', brand:'Converse', filter:'converse', emoji:'19.avif', badge:'hot', badgeLabel:'HOT', price:110, oldPrice:null, rating:'4.8 (420)', colors:['#111','#fff','#e63946'], sizes:['5','6','7','8','9','10','11','12'], desc:'The elevated version of the iconic Chuck Taylor. Upgraded canvas and premium construction.' },
  { id:8, name:'Old Skool Pro', brand:'Vans', filter:'vans', emoji:'21.webp', badge:'new', badgeLabel:'NEW', price:90, oldPrice:115, rating:'4.7 (302)', colors:['#111','#e63946','#4facfe'], sizes:['6','7','8','9','10','11'], desc:'The original side stripe. Canvas and suede upper with waffle outsole for superior board feel.' },
  { id:9, name:'HOVR Phantom 3', brand:'Under Armour', filter:'', emoji:'23.jpg', badge:'hot', badgeLabel:'HOT', price:175, oldPrice:220, rating:'4.8 (134)', colors:['#111','#4facfe','#43e97b'], sizes:['7','8','9','10','11','12'], desc:'UA HOVR technology provides a "zero-gravity feel" to maintain energy return and suppress impact.' },
  { id:10, name:'Gel-Kayano 29', brand:'Asics', filter:'', emoji:'24.webp', badge:'new', badgeLabel:'NEW', price:195, oldPrice:null, rating:'4.9 (167)', colors:['#4facfe','#fff','#f4a261'], sizes:['6','7','8','9','10','11'], desc:'Premium stability running shoe with GEL technology cushioning and Dynamic DuoMax support.' },
  { id:11, name:'Nitro Elite', brand:'Puma', filter:'puma', emoji:'25.avif', badge:'limited', badgeLabel:'LIMITED', price:210, oldPrice:260, rating:'4.8 (89)', colors:['#e63946','#111','#fff'], sizes:['7','8','9','10','11'], desc:'Carbon-infused plate for elite racing performance. Engineered for speed without compromise.' },
  { id:12, name:'NMD_R1 V3', brand:'Adidas', filter:'adidas', emoji:'26.avif', badge:'sale', badgeLabel:'SALE', price:145, oldPrice:200, rating:'4.7 (231)', colors:['#fff','#111','#9b59b6'], sizes:['6','7','8','9','10','11','12'], desc:'Urban explorer meets performance tech. Boost cushioning and Primeknit upper for all-day comfort.' },
  { id:13, name:'Air Force 1 Low', brand:'Nike', filter:'nike', emoji:'27.jpg', badge:'hot', badgeLabel:'HOT', price:115, oldPrice:null, rating:'5.0 (567)', colors:['#fff','#111','#f4a261'], sizes:['5','6','7','8','9','10','11','12'], desc:'The legendary basketball shoe turned street icon. All-white leather upper, Air sole unit.' },
  { id:14, name:'Jordan 4 Retro', brand:'Jordan', filter:'jordan', emoji:'29.jpg', badge:'limited', badgeLabel:'LIMITED', price:380, oldPrice:null, rating:'5.0 (145)', colors:['#111','#e63946','#fff'], sizes:['7','8','9','10','11'], desc:'Original Flight technology. Mesh side panels and visible Air unit. A grail for collectors.' },
  { id:15, name:'Suede Classic', brand:'Puma', filter:'puma', emoji:'30.jpg', badge:'sale', badgeLabel:'SALE', price:80, oldPrice:110, rating:'4.6 (289)', colors:['#9b59b6','#e63946','#111'], sizes:['6','7','8','9','10','11'], desc:'Since 1968, the Suede has been at the center of sport and culture. A timeless classic.' },
  { id:16, name:'574 Core', brand:'New Balance', filter:'newbalance', emoji:'31.webp', badge:'new', badgeLabel:'NEW', price:100, oldPrice:null, rating:'4.7 (334)', colors:['#84fab0','#4facfe','#fff'], sizes:['6','7','8','9','10','11','12'], desc:'The 574 remains a favorite for its comfort and timeless style. ENCAP midsole technology.' },
  { id:17, name:'Dunk Low Retro', brand:'Nike', filter:'nike', emoji:'32.webp', badge:'limited', badgeLabel:'LIMITED', price:115, oldPrice:null, rating:'4.9 (678)', colors:['#43e97b','#fff','#e63946'], sizes:['6','7','8','9','10','11'], desc:'Inspired by the original 1985 college basketball design. Padded, low-cut collar for comfort.' },
  { id:18, name:'Gazelle Bold', brand:'Adidas', filter:'adidas', emoji:'33.avif', badge:'hot', badgeLabel:'HOT', price:110, oldPrice:140, rating:'4.8 (198)', colors:['#9b59b6','#f4a261','#111'], sizes:['5','6','7','8','9','10','11'], desc:'Platform version of the iconic Gazelle. Suede upper with classic trefoil branding.' },
];

let visibleCount = 12;
let activeFilter = 'all';
let cartCount = 3;

// ===== RENDER PRODUCTS =====
function getFilteredProducts() {
  return activeFilter === 'all' 
    ? allProducts 
    : allProducts.filter(p => p.filter === activeFilter);
}

function renderProducts(count) {
  const filtered = getFilteredProducts();
  const toShow = filtered.slice(0, count);
  const $grid = $('#productsGrid');
  $grid.empty();
  
  toShow.forEach((p, i) => {
    const stars = '★★★★★';
    const colors = p.colors.map(c => `<div class="color-dot" style="background:${c}" title="${c}"></div>`).join('');
    const sizes = p.sizes.slice(0,5).map(s => `<button class="size-btn">${s}</button>`).join('');
    const priceOld = p.oldPrice ? `<span class="card-price-old">$${p.oldPrice}</span>` : '';
    const delayClass = i % 4 === 1 ? 'fade-up-delay-1' : i % 4 === 2 ? 'fade-up-delay-2' : i % 4 === 3 ? 'fade-up-delay-3' : '';

    const card = `
      <div class="col-sm-6 col-lg-4 col-xl-3 fade-up ${delayClass}" data-filter="${p.filter}">
        <div class="product-card" onclick="openModal(${p.id})">
          <div class="card-img-wrapper">
            <div class="card-badge ${p.badge}">${p.badgeLabel}</div>
            <img src="${p.emoji}" alt="">
            <div class="card-actions">
              <button class="quick-add" onclick="event.stopPropagation();quickAdd(${p.id})">ADD TO BAG</button>
              <button class="quick-wish" onclick="event.stopPropagation();wishlist()"><i class="far fa-heart"></i></button>
            </div>
          </div>
          <div class="card-body-custom">
            <div class="card-brand">${p.brand}</div>
            <div class="card-name">${p.name}</div>
            <div class="card-sizes">${sizes}</div>
            <div class="card-rating">
              <span class="stars">${stars}</span>
              <span class="rating-count">${p.rating}</span>
            </div>
            <div class="card-footer-custom">
              <div>
                ${priceOld}
                <div class="card-price">$${p.price}</div>
              </div>
              <div class="card-colors">${colors}</div>
            </div>
          </div>
        </div>
      </div>`;
    $grid.append(card);
  });

  // Observe new cards
  observeFadeUps();

  // Show/hide load more
  if (filtered.length <= count) {
    $('#loadMoreBtn').hide();
  } else {
    $('#loadMoreBtn').show();
  }
}

// SIZE BTN toggle
$(document).on('click', '.size-btn', function(e) {
  e.stopPropagation();
  $(this).closest('.card-sizes').find('.size-btn').removeClass('selected');
  $(this).addClass('selected');
});

// ===== FILTER =====
$('#brandFilter').on('click', '.filter-btn', function() {
  $('#brandFilter .filter-btn').removeClass('active');
  $(this).addClass('active');
  activeFilter = $(this).data('filter');
  visibleCount = 12;
  renderProducts(visibleCount);
});

// ===== LOAD MORE =====
$('#loadMoreBtn').on('click', function() {
  visibleCount += 8;
  renderProducts(visibleCount);
});

// ===== QUICK ADD =====
function quickAdd(id) {
  cartCount++;
  $('#cartCount').text(cartCount).addClass('bump');
  setTimeout(() => $('#cartCount').removeClass('bump'), 300);
}

// ===== OPEN MODAL =====
function openModal(id) {
  const p = allProducts.find(x => x.id === id);
  if (!p) return;
  $('#modalShoe').text(p.emoji);
  $('#modalBrand').text(p.brand);
  $('#modalName').text(p.name);
  $('#modalRating').text(p.rating + ' reviews');
  $('#modalPrice').text('$' + p.price);
  $('#modalOldPrice').text(p.oldPrice ? '$' + p.oldPrice : '');
  $('#modalBadge').text(p.badgeLabel);
  $('#modalDesc').text(p.desc);
  const sizes = p.sizes.map(s => `<div class="size-chip" onclick="$(this).toggleClass('active').siblings().removeClass('active')">${s}</div>`).join('');
  $('#modalSizes').html(sizes);
  new bootstrap.Modal(document.getElementById('productModal')).show();
}

function addToCart() {
  cartCount++;
  $('#cartCount').text(cartCount);
  bootstrap.Modal.getInstance(document.getElementById('productModal'))?.hide();
}

function wishlist() {
  // Visual feedback
  const btn = event?.target?.closest('button');
  if (btn) {
    $(btn).find('i').toggleClass('far fas');
  }
}

// ===== NAVBAR SCROLL =====
$(window).on('scroll', function() {
  if ($(this).scrollTop() > 60) {
    $('#mainNav').addClass('scrolled');
    $('#backTop').addClass('visible');
  } else {
    $('#mainNav').removeClass('scrolled');
    $('#backTop').removeClass('visible');
  }
});

// ===== HERO SHOE ROTATOR =====
const heroShoes = ['👟','🏀','🥾','🛹','👠','🏃'];
let shoeIdx = 0;
setInterval(() => {
  shoeIdx = (shoeIdx + 1) % heroShoes.length;
  $('#heroShoe').fadeOut(300, function() { $(this).text(heroShoes[shoeIdx]).fadeIn(300); });
}, 2500);

// ===== COUNTDOWN TIMER =====
function startCountdown() {
  const end = new Date();
  end.setDate(end.getDate() + 2);
  end.setHours(end.getHours() + 14);
  
  function pad(n) { return String(n).padStart(2,'0'); }
  
  setInterval(() => {
    const now = new Date();
    const diff = end - now;
    if (diff <= 0) return;
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    $('#days').text(pad(d));
    $('#hours').text(pad(h));
    $('#minutes').text(pad(m));
    $('#seconds').text(pad(s));
  }, 1000);
}

// ===== FORM VALIDATION =====
function showError(id, show) {
  const $err = $(`#${id}-error`);
  const $input = $(`#${id}`);
  if (show) { $err.addClass('show'); $input.addClass('error'); }
  else { $err.removeClass('show'); $input.removeClass('error').addClass('success'); }
}

function submitForm(e) {
  e.preventDefault();
  let valid = true;

  const fname = $('#fname').val().trim();
  if (!fname) { showError('fname', true); valid = false; } else showError('fname', false);

  const lname = $('#lname').val().trim();
  if (!lname) { showError('lname', true); valid = false; } else showError('lname', false);

  const email = $('#email').val().trim();
  const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailReg.test(email)) { showError('email', true); valid = false; } else showError('email', false);

  const phone = $('#phone').val().trim();
  const phoneReg = /^[\+\d\s\-\(\)]{7,}$/;
  if (!phoneReg.test(phone)) { showError('phone', true); valid = false; } else showError('phone', false);

  const brand = $('#brand').val();
  if (!brand) { showError('brand', true); valid = false; } else showError('brand', false);

  const size = $('#shoeSize').val();
  if (!size) { showError('size', true); valid = false; } else showError('size', false);

  const budget = $('#budget').val();
  if (!budget) { showError('budget', true); valid = false; } else showError('budget', false);

  const interests = $('input[type=checkbox][value]').filter(':checked').length;
  if (interests === 0) { $('#interest-error').addClass('show'); valid = false; } else $('#interest-error').removeClass('show');

  const terms = $('#terms').is(':checked');
  if (!terms) { $('#terms-error').addClass('show'); valid = false; } else $('#terms-error').removeClass('show');

  if (valid) {
    $('#orderForm').hide();
    $('#formSuccess').addClass('show');
  }
}

function resetForm() {
  $('#orderForm')[0].querySelectorAll('input, select, textarea').forEach(el => { el.value = ''; if(el.type === 'checkbox') el.checked = false; });
  $('#orderForm').find('.custom-input').removeClass('error success');
  $('#orderForm').find('.input-error').removeClass('show');
  $('#orderForm').show();
  $('#formSuccess').removeClass('show');
}

// ===== INTERSECTION OBSERVER (fade-up) =====
function observeFadeUps() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-up:not(.visible)').forEach(el => io.observe(el));
}

// ===== INIT =====
$(document).ready(function() {
  renderProducts(visibleCount);
  startCountdown();
  observeFadeUps();

  // Smooth scroll for nav links
  $('a[href^="#"]').on('click', function(e) {
    const target = $(this.getAttribute('href'));
    if (target.length) {
      e.preventDefault();
      $('html, body').stop().animate({ scrollTop: target.offset().top - 80 }, 800);
      $('.navbar-collapse').collapse('hide');
    }
  });

  // Re-observe on load
  setTimeout(observeFadeUps, 200);
});
