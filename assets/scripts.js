$(document).ready(function() {
    $('.gallery').mauGallery({
        columns: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3
        },
        lightBox: true,
        lightboxId: 'myAwesomeLightbox',
        showTags: true,
        tagsPosition: 'top'
    });
});

// mise en œuvre de l'Intersection Observer ou chargement paresseux basé sur l'intersection
document.addEventListener("DOMContentLoaded", function() {
    let lazyImages = document.querySelectorAll('.lazy');
  
    let observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let img = entry.target;
          img.src = img.getAttribute('data-src');
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });
  
    lazyImages.forEach(function(img) {
      observer.observe(img);
    });
  });