/* ============================================================
   community.js — Community Programmes Filter, Search & Modal
   JeevanPrajna Senior Care Portal
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('communitySearchInput');
  const tabs = document.querySelectorAll('.comm-tab');
  const groupCards = document.querySelectorAll('.group-card');
  const noGroupsMsg = document.getElementById('noGroupsMessage');

  let currentCategory = 'all';
  let searchQuery = '';

  function filterGroups() {
    let visibleCount = 0;

    groupCards.forEach(function (card) {
      const category = card.getAttribute('data-category') || '';
      const text = card.textContent.toLowerCase();

      const matchesCategory = currentCategory === 'all' || category === currentCategory;
      const matchesSearch = searchQuery === '' || text.includes(searchQuery);

      if (matchesCategory && matchesSearch) {
        card.style.display = 'block';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (noGroupsMsg) {
      noGroupsMsg.style.display = visibleCount === 0 ? 'flex' : 'none';
    }
  }

  // Handle Tab Click
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      currentCategory = this.getAttribute('data-filter') || 'all';
      filterGroups();
    });
  });

  // Handle Search Input
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      searchQuery = this.value.trim().toLowerCase();
      filterGroups();
    });
  }

  // Make Helpline numbers copyable on click
  const mhCards = document.querySelectorAll('.mh-card');
  mhCards.forEach(function (card) {
    const numEl = card.querySelector('.mh-num');
    if (numEl) {
      numEl.style.cursor = 'pointer';
      numEl.title = 'Click to copy number';
      numEl.addEventListener('click', function () {
        const text = this.textContent.trim();
        if (navigator.clipboard) {
          navigator.clipboard.writeText(text).then(function () {
            showToast(`Copied ${text} to clipboard!`);
          }).catch(function () {
            showToast(`Helpline: ${text}`);
          });
        } else {
          showToast(`Helpline: ${text}`);
        }
      });
    }
  });
});

/* Modal Handling */
function openJoinModal(groupName) {
  const backdrop = document.getElementById('joinModalBackdrop');
  const title = document.getElementById('modalGroupName');
  if (title) {
    title.textContent = `Inquire / Join: ${groupName}`;
  }
  if (backdrop) {
    backdrop.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
  const nameInput = document.getElementById('joinName');
  if (nameInput) setTimeout(() => nameInput.focus(), 100);
}

function closeJoinModal(e) {
  const backdrop = document.getElementById('joinModalBackdrop');
  if (backdrop) {
    backdrop.style.display = 'none';
    document.body.style.overflow = '';
  }
}

function handleJoinSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('joinName').value.trim();
  const phone = document.getElementById('joinPhone').value.trim();
  const city = document.getElementById('joinCity').value.trim();

  if (!name || !phone || !city) {
    alert('Please fill out all required fields.');
    return;
  }

  closeJoinModal();
  document.getElementById('joinGroupForm').reset();
  showToast(`Thank you, ${name}! Your inquiry has been noted. A local coordinator will reach out at ${phone}.`);
}

/* Toast Notification Utility */
function showToast(message) {
  const toast = document.getElementById('communityToast');
  if (!toast) return;

  toast.innerHTML = `<i class="fas fa-check-circle" style="color:#22c55e;"></i> <span>${message}</span>`;
  toast.style.display = 'flex';

  setTimeout(function () {
    toast.style.display = 'none';
  }, 4000);
}
