/* Optimize page loading speed */

// Defer non-critical CSS
function loadDeferredStyles() {
  const addStylesNode = document.getElementById("deferred-styles");
  const replacement = document.createElement("div");
  replacement.innerHTML = addStylesNode.textContent;
  document.body.appendChild(replacement);
  addStylesNode.parentElement.removeChild(addStylesNode);
}

// Lazy load images
document.addEventListener("DOMContentLoaded", function() {
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Fallback for browsers without IntersectionObserver support
    let active = false;

    const lazyLoad = function() {
      if (active === false) {
        active = true;

        setTimeout(function() {
          lazyImages.forEach(function(lazyImage) {
            if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
              lazyImage.src = lazyImage.dataset.src;
              lazyImage.classList.remove("lazy");

              lazyImages = lazyImages.filter(function(image) {
                return image !== lazyImage;
              });

              if (lazyImages.length === 0) {
                document.removeEventListener("scroll", lazyLoad);
                window.removeEventListener("resize", lazyLoad);
                window.removeEventListener("orientationchange", lazyLoad);
              }
            }
          });

          active = false;
        }, 200);
      }
    };

    document.addEventListener("scroll", lazyLoad);
    window.addEventListener("resize", lazyLoad);
    window.addEventListener("orientationchange", lazyLoad);
  }
});

// Add image alt text attributes via JavaScript
function addAltText() {
  // Logo
  const logo = document.querySelector('.logo img');
  if (logo && !logo.alt) {
    logo.alt = "Global Legacy Team Logo";
  }
  
  // Testimonial images
  const testimonialImages = document.querySelectorAll('.testimonial img');
  testimonialImages.forEach((img, index) => {
    if (!img.alt) {
      img.alt = `Testimonial ${index + 1} - Customer Success Story`;
    }
  });
  
  // Feature icons
  const featureIcons = document.querySelectorAll('.feature-icon img');
  featureIcons.forEach((img, index) => {
    if (!img.alt) {
      img.alt = `Feature ${index + 1} Icon`;
    }
  });
  
  // Team member photos
  const teamPhotos = document.querySelectorAll('.team-member img');
  teamPhotos.forEach((img) => {
    if (!img.alt && img.parentElement.querySelector('h3')) {
      const name = img.parentElement.querySelector('h3').textContent;
      img.alt = `${name} - Team Member`;
    } else if (!img.alt) {
      img.alt = "Team Member";
    }
  });
  
  // All other images without alt text
  const allImages = document.querySelectorAll('img:not([alt])');
  allImages.forEach((img) => {
    img.alt = "Anti-aging product image";
  });
}

// Execute when DOM is fully loaded
window.addEventListener('load', function() {
  if (document.getElementById("deferred-styles")) {
    loadDeferredStyles();
  }
  addAltText();
});
