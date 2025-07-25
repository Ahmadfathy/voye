// Toggle dropdown functionality
function toggleDropdown(dropdownId, event) {
  if (event) event.preventDefault();
  const dropdown = document.getElementById(dropdownId);
  const allDropdowns = document.querySelectorAll(".dropdown");

  // On mobile, close all dropdowns except the one being toggled
  if (window.innerWidth <= 768) {
    allDropdowns.forEach((d) => {
      if (d.id !== dropdownId) {
        d.classList.remove("active");
        // Hide dropdown-menu if closing
        const menu = d.querySelector('.dropdown-menu');
        if (menu) menu.style.display = 'none';
      }
    });
    // Toggle current dropdown
    dropdown.classList.toggle("active");
    // Show/hide the dropdown-menu for the toggled dropdown
    const menu = dropdown.querySelector('.dropdown-menu');
    if (menu) {
      menu.style.display = dropdown.classList.contains('active') ? 'block' : 'none';
    }
  } else {
    // Desktop: original behavior
    allDropdowns.forEach((d) => {
      if (d.id !== dropdownId) {
        d.classList.remove("active");
      }
    });
    dropdown.classList.toggle("active");
  }
}

// Select language
function selectLanguage(code, name) {
  document.getElementById("selectedLanguage").textContent = code;

  // Update active state
  const languageItems = document.querySelectorAll(
    "#languageDropdown .dropdown-item"
  );
  languageItems.forEach((item) => item.classList.remove("active"));
  event.target.classList.add("active");

  // Close dropdown
  document.getElementById("languageDropdown").classList.remove("active");

  console.log("Language changed to:", name);
}

// Select currency
function selectCurrency(code, name) {
  document.getElementById("selectedCurrency").textContent = code;

  // Update active state
  const currencyItems = document.querySelectorAll(
    "#currencyDropdown .dropdown-item"
  );
  currencyItems.forEach((item) => item.classList.remove("active"));
  event.target.classList.add("active");

  // Close dropdown
  document.getElementById("currencyDropdown").classList.remove("active");

  console.log("Currency changed to:", name);
}

// Toggle mobile menu
function toggleMobileMenu() {
  const navMenu = document.getElementById("navMenu");
  const mobileToggle = document.getElementById("mobileMenuToggle");

  navMenu.classList.toggle("active");
  mobileToggle.textContent = navMenu.classList.contains("active") ? "\u2715" : "\u2630";

  // On mobile, close all dropdowns when menu opens
  if (window.innerWidth <= 768) {
    document.querySelectorAll('.dropdown').forEach((dropdown) => {
      dropdown.classList.remove('active');
    });
    // Also close all category submenus
    document.querySelectorAll('.category-item').forEach((item) => {
      item.classList.remove('active');
      const submenu = item.querySelector('.submenu');
      const arrow = item.querySelector('.submenu-arrow');
      if (submenu) submenu.style.display = 'none';
      if (arrow) arrow.style.transform = 'rotate(0deg)';
    });
  }
}

// Close dropdowns when clicking outside
document.addEventListener("click", function (event) {
  // If the click is on a dropdown-trigger, do not close dropdowns
  if (event.target.closest('.dropdown-trigger')) {
    return;
  }
  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach((dropdown) => {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove("active");
    }
  });
});

// Close mobile menu when clicking on nav links
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    // Only close the menu if the link is not a dropdown-trigger or inside one
    if (!e.target.closest('.dropdown-trigger')) {
      const navMenu = document.getElementById("navMenu");
      const mobileToggle = document.getElementById("mobileMenuToggle");
      navMenu.classList.remove("active");
      mobileToggle.textContent = "☰";
    }
  });
});

// Desktop language functions
function selectLanguageDesktop(code, name) {
  document.getElementById("selectedLanguageDesktop").textContent = code;

  // Update active state
  const languageItems = document.querySelectorAll(
    "#languageDropdownDesktop .dropdown-item"
  );
  languageItems.forEach((item) => item.classList.remove("active"));
  event.target.classList.add("active");

  // Close dropdown
  document.getElementById("languageDropdownDesktop").classList.remove("active");

  console.log("Desktop Language changed to:", name);
}

// Desktop currency functions
function selectCurrencyDesktop(code, name) {
  document.getElementById("selectedCurrencyDesktop").textContent = code;

  // Update active state
  const currencyItems = document.querySelectorAll(
    "#currencyDropdownDesktop .dropdown-item"
  );
  currencyItems.forEach((item) => item.classList.remove("active"));
  event.target.classList.add("active");

  // Close dropdown
  document.getElementById("currencyDropdownDesktop").classList.remove("active");

  console.log("Desktop Currency changed to:", name);
}

// Toggle submenu for mobile
function toggleSubmenu(element) {
  if (window.innerWidth <= 768) {
    event.preventDefault();
    const categoryItem = element.closest(".category-item");
    const submenu = categoryItem.querySelector(".submenu");
    const arrow = categoryItem.querySelector(".submenu-arrow");

    // Close other submenus
    document.querySelectorAll(".category-item").forEach((item) => {
      if (item !== categoryItem) {
        item.classList.remove("active");
        const otherSubmenu = item.querySelector(".submenu");
        const otherArrow = item.querySelector(".submenu-arrow");
        if (otherSubmenu) otherSubmenu.style.display = "none";
        if (otherArrow) otherArrow.style.transform = "rotate(0deg)";
      }
    });

    // Toggle current submenu
    categoryItem.classList.toggle("active");
    if (submenu) {
      submenu.style.display =
        submenu.style.display === "block" ? "none" : "block";
    }
    if (arrow) {
      arrow.style.transform = categoryItem.classList.contains("active")
        ? "rotate(90deg)"
        : "rotate(0deg)";
    }
  }
}

// Handle window resize
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    const navMenu = document.getElementById("navMenu");
    const mobileToggle = document.getElementById("mobileMenuToggle");
    navMenu.classList.remove("active");
    mobileToggle.textContent = "☰";

    // Reset mobile submenu states
    document.querySelectorAll(".category-item").forEach((item) => {
      item.classList.remove("active");
      const submenu = item.querySelector(".submenu");
      const arrow = item.querySelector(".submenu-arrow");
      if (submenu) submenu.style.display = "";
      if (arrow) arrow.style.transform = "";
    });
  }
});

// FAQ Accordion
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", function () {
      const isActive = item.classList.contains("active");

      // Close all FAQ items
      faqItems.forEach((faqItem) => {
        faqItem.classList.remove("active");
      });

      // Open clicked item if it wasn't active
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
});

// Smooth Scrolling for Navigation Links
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const headerHeight = document.querySelector(".header").offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});

// Newsletter Form
document.addEventListener("DOMContentLoaded", function () {
  const newsletterForm = document.querySelector(".newsletter-form");
  const newsletterInput = document.querySelector(".newsletter-input");
  const newsletterBtn = document.querySelector(".newsletter-btn");

  if (newsletterForm) {
    newsletterBtn.addEventListener("click", function (e) {
      e.preventDefault();

      const email = newsletterInput.value.trim();

      if (email && isValidEmail(email)) {
        // Simulate subscription (replace with actual API call)
        newsletterBtn.textContent = "Subscribed!";
        newsletterBtn.style.background = "#10b981";
        newsletterInput.value = "";

        setTimeout(() => {
          newsletterBtn.textContent = "Subscribe";
          newsletterBtn.style.background = "";
        }, 3000);
      } else {
        // Show error state
        newsletterInput.style.borderColor = "#ef4444";
        setTimeout(() => {
          newsletterInput.style.borderColor = "";
        }, 3000);
      }
    });

    // Enter key support
    newsletterInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        newsletterBtn.click();
      }
    });
  }
});

// Email validation function
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Course Enrollment Buttons
document.addEventListener("DOMContentLoaded", function () {
  const enrollButtons = document.querySelectorAll(".course-btn");

  enrollButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const courseCard = this.closest(".course-card");
      const courseTitle = courseCard.querySelector(".course-title").textContent;

      // Simulate enrollment (replace with actual functionality)
      this.textContent = "Enrolled!";
      this.style.background = "#10b981";

      setTimeout(() => {
        this.textContent = "Enroll Now";
        this.style.background = "";
      }, 3000);

      console.log(`Enrolled in: ${courseTitle}`);
    });
  });
});

// Scroll to Top Button (Optional Enhancement)
document.addEventListener("DOMContentLoaded", function () {
  // Create scroll to top button
  const scrollTopBtn = document.createElement("button");
  scrollTopBtn.innerHTML = "↑";
  scrollTopBtn.className = "scroll-top-btn";
  scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background: var(--primary);
        color: var(--primary-foreground);
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: var(--shadow-button);
    `;

  document.body.appendChild(scrollTopBtn);

  // Show/hide scroll to top button
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      scrollTopBtn.style.opacity = "1";
      scrollTopBtn.style.visibility = "visible";
    } else {
      scrollTopBtn.style.opacity = "0";
      scrollTopBtn.style.visibility = "hidden";
    }
  });

  // Scroll to top functionality
  scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

// Animation on Scroll (Optional Enhancement)
document.addEventListener("DOMContentLoaded", function () {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animatedElements = document.querySelectorAll(
    ".course-card, .review-card, .blog-card, .process-step"
  );

  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
});
