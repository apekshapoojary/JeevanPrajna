/* welfare.js — Scheme Category Filter */
function filterSchemes(category) {
  // Update active tab
  document.querySelectorAll('.scheme-tab').forEach(function (tab) {
    tab.classList.remove('active');
    if (tab.getAttribute('onclick').includes(`'${category}'`)) {
      tab.classList.add('active');
    }
  });

  // Filter cards
  document.querySelectorAll('.scheme-detail-card').forEach(function (card) {
    if (category === 'all') {
      card.style.display = 'block';
    } else {
      if (card.getAttribute('data-category') === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    }
  });
}
