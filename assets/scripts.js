// ═══════════════════════════════════════════════════════
// NABORA — Vanilla JavaScript
// Handles: Lucide icons, dropdowns, mobile menu, accordion, form, sticky bar
// ═══════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function () {

  // ─── Initialize Lucide Icons ───
  if (typeof lucide !== 'undefined') {
    lucide.createIcons({
      attrs: {
        "stroke-width": 2,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "fill": "none"
      }
    });
  }

  // ─── Desktop Dropdown Menus ───
  var dropdownContainers = document.querySelectorAll('header .relative');
  var dropdownTimeout = null;

  dropdownContainers.forEach(function (container) {
    var btn = container.querySelector('button');
    var dropdown = container.querySelector('[class*="-dropdown"]');
    if (!btn || !dropdown) return;

    container.addEventListener('mouseenter', function () {
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
        dropdownTimeout = null;
      }
      // Close other dropdowns
      document.querySelectorAll('[class*="-dropdown"]').forEach(function (d) {
        if (d !== dropdown) d.style.display = 'none';
        // Reset other chevrons
        var otherBtn = d.parentElement.querySelector('button');
        if (otherBtn) {
          var otherChevron = otherBtn.querySelector('[data-lucide="chevron-down"]') || otherBtn.querySelector('svg');
          if (otherChevron) otherChevron.style.transform = '';
        }
      });
      dropdown.style.display = 'block';
      btn.classList.add('text-navy', 'bg-gray-50');
      btn.classList.remove('text-gray-600');
      // Rotate chevron (works with both Lucide SVG and <i> elements)
      var chevron = btn.querySelector('[data-lucide="chevron-down"]') || btn.querySelector('svg');
      if (chevron) chevron.style.transform = 'rotate(180deg)';
    });

    container.addEventListener('mouseleave', function () {
      dropdownTimeout = setTimeout(function () {
        dropdown.style.display = 'none';
        btn.classList.remove('text-navy', 'bg-gray-50');
        btn.classList.add('text-gray-600');
        var chevron = btn.querySelector('[data-lucide="chevron-down"]') || btn.querySelector('svg');
        if (chevron) chevron.style.transform = '';
      }, 150);
    });
  });

  // ─── Mobile Menu Toggle ───
  var menuBtn = document.querySelector('button[aria-label="Menu"]');
  var mobileMenu = document.getElementById('mobile-menu');
  var menuOpen = false;

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function () {
      menuOpen = !menuOpen;
      mobileMenu.style.display = menuOpen ? 'block' : 'none';
      // Swap icon (hamburger <-> X) using Lucide
      var menuIcon = menuBtn.querySelector('[data-lucide="menu"]') || menuBtn.querySelector('[data-lucide="x"]');
      if (menuIcon) {
        menuIcon.setAttribute('data-lucide', menuOpen ? 'x' : 'menu');
        // Re-create just this icon
        if (typeof lucide !== 'undefined') {
          lucide.createIcons({
            attrs: {
              "stroke-width": 2,
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "fill": "none"
            },
            nameAttr: 'data-lucide'
          });
        }
      }
    });

    // Close mobile menu on link click
    mobileMenu.querySelectorAll('.mobile-link').forEach(function (link) {
      link.addEventListener('click', function () {
        menuOpen = false;
        mobileMenu.style.display = 'none';
        var menuIcon = menuBtn.querySelector('[data-lucide="x"]') || menuBtn.querySelector('[data-lucide="menu"]');
        if (menuIcon) {
          menuIcon.setAttribute('data-lucide', 'menu');
          if (typeof lucide !== 'undefined') {
            lucide.createIcons({
              attrs: {
                "stroke-width": 2,
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "fill": "none"
              }
            });
          }
        }
      });
    });
  }

  // ─── Mobile Expandable Sections ───
  document.querySelectorAll('.mobile-expand-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var targetId = btn.getAttribute('data-target');
      var target = document.getElementById(targetId);
      if (!target) return;
      var chevron = btn.querySelector('.mobile-chevron') || btn.querySelector('[data-lucide="chevron-down"]');
      var isOpen = target.style.display !== 'none';
      target.style.display = isOpen ? 'none' : 'block';
      if (chevron) chevron.style.transform = isOpen ? '' : 'rotate(180deg)';
    });
  });

  // ─── FAQ Accordion ───
  document.querySelectorAll('[data-faq-accordion]').forEach(function (accordion) {
    accordion.querySelectorAll('[data-faq-trigger]').forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        var isOpen = trigger.getAttribute('data-state') === 'open';
        var content = trigger.nextElementSibling;
        var chevron = trigger.querySelector('[data-lucide="chevron-down"]') || trigger.querySelector('svg');

        function closeItem(item) {
          var itemContent = item.nextElementSibling;
          var itemChevron = item.querySelector('[data-lucide="chevron-down"]') || item.querySelector('svg');
          item.setAttribute('data-state', 'closed');
          item.setAttribute('aria-expanded', 'false');
          if (itemContent) {
            itemContent.style.overflow = 'hidden';
            itemContent.style.height = '0';
          }
          if (itemChevron) itemChevron.style.transform = '';
        }

        if (isOpen) {
          closeItem(trigger);
          return;
        }

        accordion.querySelectorAll('[data-faq-trigger][data-state="open"]').forEach(function (other) {
          if (other !== trigger) closeItem(other);
        });

        trigger.setAttribute('data-state', 'open');
        trigger.setAttribute('aria-expanded', 'true');
        if (content) {
          content.style.overflow = 'visible';
          content.style.height = 'auto';
        }
        if (chevron) chevron.style.transform = 'rotate(180deg)';
      });
    });
  });

  // ─── Contact Form ───
  var form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        var originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '✓ Odesláno!';
        submitBtn.disabled = true;
        submitBtn.classList.remove('bg-gold', 'hover:bg-gold-hover');
        submitBtn.classList.add('bg-green-600');
        
        setTimeout(function () {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
          submitBtn.classList.remove('bg-green-600');
          submitBtn.classList.add('bg-gold', 'hover:bg-gold-hover');
          form.reset();
        }, 3000);
      }
    });
  }

  // ─── Mobile Sticky Bottom Bar ───
  var stickyBar = document.getElementById('mobile-sticky-bar');
  if (stickyBar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 80) {
        stickyBar.classList.remove('translate-y-full');
        stickyBar.classList.add('translate-y-0');
      } else {
        stickyBar.classList.remove('translate-y-0');
        stickyBar.classList.add('translate-y-full');
      }
    }, { passive: true });
  }

  // ─── Smooth scroll for anchor links ───
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
