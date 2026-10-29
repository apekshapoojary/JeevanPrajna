/* ============================================================
   reminders.js — Local Storage Care Schedule & Reminders Manager
   JeevanPrajna Senior Care Portal
   ============================================================ */

const STORAGE_KEY = 'jeevanprajna_reminders';
let currentFilter = 'all';

const typeIcons = {
  medication: 'fas fa-pills',
  appointment: 'fas fa-hospital',
  exercise: 'fas fa-person-walking',
  checkup: 'fas fa-stethoscope',
  other: 'fas fa-bell'
};

const typeLabels = {
  medication: 'Medication',
  appointment: 'Doctor Visit',
  exercise: 'Walking / Exercise',
  checkup: 'Health Check',
  other: 'General Note'
};

const freqLabels = {
  once: 'One-Time',
  daily: 'Daily Routine',
  weekly: 'Weekly',
  monthly: 'Monthly'
};

function loadReminders() {
  try {
    const data = localStorage.getItem(STORAGE_KEY) || localStorage.getItem('silvercare_reminders');
    if (!data) {
      // Default initial practical reminders if empty
      const initial = [
        {
          id: 1,
          type: 'medication',
          title: 'Thyroxine (Thyronorm)',
          date: new Date().toISOString().split('T')[0],
          time: '06:30',
          freq: 'daily',
          notes: 'Take with plain water on empty stomach, 45 minutes before morning tea',
          createdAt: new Date().toISOString()
        },
        {
          id: 2,
          type: 'checkup',
          title: 'Morning Blood Pressure Check',
          date: new Date().toISOString().split('T')[0],
          time: '07:30',
          freq: 'daily',
          notes: 'Rest 5 minutes before checking; record systolic and diastolic in diary',
          createdAt: new Date().toISOString()
        },
        {
          id: 3,
          type: 'exercise',
          title: 'Evening Neighborhood Walk',
          date: new Date().toISOString().split('T')[0],
          time: '17:30',
          freq: 'daily',
          notes: '30 minutes flat surface walk in park with non-skid shoes',
          createdAt: new Date().toISOString()
        }
      ];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
      return initial;
    }
    return JSON.parse(data) || [];
  } catch (e) {
    return [];
  }
}

function saveReminders(reminders) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reminders));
}

function addReminder() {
  const type = document.getElementById('remType').value;
  const title = document.getElementById('remTitle').value.trim();
  const date = document.getElementById('remDate').value;
  const time = document.getElementById('remTime').value;
  const freq = document.getElementById('remFreq').value;
  const notes = document.getElementById('remNotes').value.trim();

  if (!title) {
    alert('Please enter a medicine or appointment title.');
    document.getElementById('remTitle').focus();
    return;
  }
  if (!date || !time) {
    alert('Please select a valid date and time.');
    return;
  }

  const reminder = {
    id: Date.now(),
    type,
    title,
    date,
    time,
    freq,
    notes,
    createdAt: new Date().toISOString()
  };

  const reminders = loadReminders();
  reminders.unshift(reminder);
  saveReminders(reminders);

  // Reset title and notes
  document.getElementById('remTitle').value = '';
  document.getElementById('remNotes').value = '';

  renderReminders();
}

function deleteReminder(id) {
  if (!confirm('Are you sure you want to remove this schedule entry?')) return;
  const reminders = loadReminders().filter(r => r.id !== id);
  saveReminders(reminders);
  renderReminders();
}

function filterReminders(filter) {
  currentFilter = filter;
  document.querySelectorAll('.rem-filter').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(`'${filter}'`)) {
      btn.classList.add('active');
    }
  });
  renderReminders();
}

function applyPreset(title, type, time, freq, notes) {
  const typeEl = document.getElementById('remType');
  const titleEl = document.getElementById('remTitle');
  const timeEl = document.getElementById('remTime');
  const freqEl = document.getElementById('remFreq');
  const notesEl = document.getElementById('remNotes');

  if (typeEl) typeEl.value = type;
  if (titleEl) titleEl.value = title;
  if (timeEl) timeEl.value = time;
  if (freqEl) freqEl.value = freq;
  if (notesEl) notesEl.value = notes;

  titleEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
  titleEl.focus();
}

function formatTime(timeStr) {
  if (!timeStr) return '';
  const parts = timeStr.split(':');
  let hour = parseInt(parts[0], 10);
  const minute = parts[1] || '00';
  const ampm = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12;
  hour = hour ? hour : 12;
  return `${hour}:${minute} ${ampm}`;
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  try {
    const d = new Date(dateStr + 'T00:00:00');
    return d.toLocaleDateString('en-IN', {
      weekday: 'short',
      day: 'numeric',
      month: 'short'
    });
  } catch (e) {
    return dateStr;
  }
}

function renderReminders() {
  const list = document.getElementById('remindersList');
  const empty = document.getElementById('remindersEmpty');
  if (!list) return;

  let reminders = loadReminders();
  if (currentFilter !== 'all') {
    reminders = reminders.filter(r => r.type === currentFilter);
  }

  if (reminders.length === 0) {
    list.innerHTML = '';
    list.style.display = 'none';
    if (empty) empty.style.display = 'block';
    return;
  }

  list.style.display = 'flex';
  if (empty) empty.style.display = 'none';

  list.innerHTML = reminders.map(r => `
    <div class="reminder-card" id="rem-${r.id}">
      <div class="rem-icon ${r.type}">
        <i class="${typeIcons[r.type] || 'fas fa-bell'}"></i>
      </div>
      <div class="rem-details">
        <div class="rem-title-row">
          <strong class="rem-title">${escapeHtml(r.title)}</strong>
          <span class="rem-type-tag">${typeLabels[r.type] || r.type}</span>
        </div>
        <div class="rem-time-row">
          <i class="fas fa-clock"></i> <strong>${formatTime(r.time)}</strong>
          <span class="rem-date-divider">•</span>
          <span>${formatDate(r.date)}</span>
          <span class="rem-badge-freq">${freqLabels[r.freq] || r.freq}</span>
        </div>
        ${r.notes ? `<div class="rem-notes"><i class="fas fa-info-circle"></i> ${escapeHtml(r.notes)}</div>` : ''}
      </div>
      <button type="button" class="rem-delete" onclick="deleteReminder(${r.id})" title="Delete reminder">
        <i class="fas fa-trash-alt"></i>
      </button>
    </div>
  `).join('');
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

document.addEventListener('DOMContentLoaded', function () {
  const dateInput = document.getElementById('remDate');
  if (dateInput) {
    dateInput.value = new Date().toISOString().split('T')[0];
  }
  renderReminders();
});
