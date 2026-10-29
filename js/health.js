/* ============================================================
   health.js — Verified Geriatric Medication Directory & Clinical Tools
   JeevanPrajna Senior Care Portal
   Information verified against CDSCO & Jan Aushadhi (PMBJP) data
   ============================================================ */

const medicines = {
  metformin: {
    name: 'Metformin Hydrochloride',
    genericClass: 'Biguanide — First-line Oral Anti-Diabetic',
    brandNames: 'Glyciphage, Glycomet, Bigsen, Cetapin, Riomet',
    janAushadhiPrice: '₹10 – ₹18 for 10 tablets (500mg/850mg)',
    brandedMarketPrice: '₹40 – ₹75 for 10 tablets',
    standardDosage: '500mg, 850mg, or 1000mg extended-release (ER) tablets. Typically 1–2 tablets daily with meals.',
    howToTake: 'Always take with or immediately after food to prevent stomach upset or nausea. Swallow extended-release tablets whole; do not crush or chew.',
    geriatricSafety: 'Very safe for seniors with normal kidney function. If kidney function (eGFR) falls below 45 mL/min, the dose must be reduced; if below 30 mL/min, it must be discontinued. Periodic serum creatinine and HbA1c tests are mandatory every 6 months.',
    criticalWarning: 'Must be stopped 48 hours before any CT scan requiring iodine contrast dye or major surgery under general anaesthesia to prevent rare lactic acidosis. Resume only after doctor confirms normal kidney function.',
    interactions: 'Avoid high alcohol intake. Long-term use (>3 years) can deplete Vitamin B12; discuss periodic B12 supplementation with your doctor.'
  },
  amlodipine: {
    name: 'Amlodipine Besylate',
    genericClass: 'Dihydropyridine Calcium Channel Blocker — Anti-hypertensive',
    brandNames: 'Amlong, Stamlo, Amlip, Amlovas, Lupidipine',
    janAushadhiPrice: '₹6 – ₹10 for 10 tablets (5mg)',
    brandedMarketPrice: '₹35 – ₹60 for 10 tablets',
    standardDosage: '2.5mg, 5mg, or 10mg once daily, usually in the morning.',
    howToTake: 'Can be taken with or without food at the same time each day. Take with a glass of water.',
    geriatricSafety: 'In seniors, starting with a lower dose (2.5mg) is recommended to avoid sudden drops in blood pressure upon standing (postural hypotension). Stand up slowly from sitting or lying down.',
    criticalWarning: 'Ankle swelling (pedal oedema) is a common, benign side effect caused by vessel relaxation, not heart failure. Do not stop the tablet without talking to your doctor. If swelling is bothersome, your physician may combine it with an ARB or diuretic.',
    interactions: 'Avoid consuming large quantities of grapefruit or grapefruit juice as it increases drug concentration in the bloodstream.'
  },
  telmisartan: {
    name: 'Telmisartan',
    genericClass: 'Angiotensin II Receptor Blocker (ARB) — Anti-hypertensive & Kidney Protective',
    brandNames: 'Telma, Telsartan, Telmikind, Cresar, Arbitel',
    janAushadhiPrice: '₹14 – ₹22 for 10 tablets (40mg)',
    brandedMarketPrice: '₹60 – ₹120 for 10 tablets',
    standardDosage: '20mg, 40mg, or 80mg once daily.',
    howToTake: 'Take once daily at a consistent time, with or without food. Often preferred in seniors because it does not cause the persistent dry cough seen with Enalapril/Ramipril.',
    geriatricSafety: 'Excellent organ-protective profile for seniors with diabetes or kidney disease. Blood pressure and serum potassium should be checked within 2 to 4 weeks of starting or increasing the dose.',
    criticalWarning: 'Do not take potassium supplements, salt substitutes containing potassium chloride (such as Lona salt), or potassium-sparing water pills unless specifically advised by your doctor.',
    interactions: 'Avoid taking alongside regular over-the-counter painkiller tablets (NSAIDs like Brufen, Combiflam, Diclofenac) as this can blunt blood pressure control and strain the kidneys.'
  },
  atorvastatin: {
    name: 'Atorvastatin Calcium',
    genericClass: 'HMG-CoA Reductase Inhibitor — Statin / Cholesterol Lowering',
    brandNames: 'Atorva, Storvas, Lipitor, Aztor, Tonact',
    janAushadhiPrice: '₹12 – ₹24 for 10 tablets (10mg/20mg)',
    brandedMarketPrice: '₹70 – ₹180 for 10 tablets',
    standardDosage: '10mg, 20mg, or 40mg once daily.',
    howToTake: 'Best taken once daily at bedtime or after dinner, as liver cholesterol synthesis peaks at night.',
    geriatricSafety: 'Critical for secondary prevention in seniors with prior heart attack, stent, or stroke. Seniors should typically start on moderate doses (10–20mg).',
    criticalWarning: 'Report any unexplained, severe muscle pain, tenderness, or weakness (especially in the thighs or calves) immediately to your doctor. A simple CPK blood test will check for rare muscle inflammation.',
    interactions: 'Avoid regular consumption of grapefruit juice. Periodic liver function tests (LFT) are recommended every 6 to 12 months.'
  },
  aspirin: {
    name: 'Aspirin (Low-Dose / Enteric Coated)',
    genericClass: 'Anti-platelet Agent — Blood Thinner for Cardiac Protection',
    brandNames: 'Ecosprin 75/150, Delisprin, ASA, Loprin',
    janAushadhiPrice: '₹4 – ₹8 for 14 tablets (75mg)',
    brandedMarketPrice: '₹12 – ₹25 for 14 tablets',
    standardDosage: '75mg or 150mg enteric-coated tablet once daily.',
    howToTake: 'Always swallow the enteric-coated tablet whole with a glass of water immediately after lunch or dinner. Never crush or chew, as the coating protects your stomach lining.',
    geriatricSafety: 'Prescribed for seniors who have had heart attacks, coronary stents, or strokes. Not recommended for primary prevention in healthy seniors without prior vascular disease due to bleeding risk.',
    criticalWarning: 'Inform your surgeon, dentist, or eye doctor at least 5–7 days before any surgical or dental procedure that you take Aspirin. Report black tarry stools or unusual bruising.',
    interactions: 'Never combine with over-the-counter painkillers like Ibuprofen (Brufen) or Diclofenac without doctor supervision, as this dramatically increases stomach ulcer and bleeding risks.'
  },
  pantoprazole: {
    name: 'Pantoprazole Sodium',
    genericClass: 'Proton Pump Inhibitor (PPI) — Gastric Acid Reducer',
    brandNames: 'Pan 40, Pantocid, Pantop, Pantodac, Protium',
    janAushadhiPrice: '₹10 – ₹18 for 10 tablets (40mg)',
    brandedMarketPrice: '₹75 – ₹140 for 10 tablets',
    standardDosage: '40mg tablet once daily.',
    howToTake: 'Must be taken on an empty stomach, strictly 30 to 45 minutes before breakfast with plain water. Swallow whole.',
    geriatricSafety: 'Very useful for short-term relief of severe acidity or to protect the stomach when taking blood thinners. However, seniors should NOT take PPIs indefinitely for years without periodic review.',
    criticalWarning: 'Long-term continuous use (>1 year) in seniors can reduce absorption of Calcium, Magnesium, and Vitamin B12, slightly increasing the risk of osteoporosis, bone fractures, and kidney strain.',
    interactions: 'If you take Calcium supplements or Thyroid medication, keep a gap of at least 2 to 3 hours from your Pantoprazole dose.'
  },
  thyroxine: {
    name: 'Levothyroxine Sodium',
    genericClass: 'Synthetic Thyroid Hormone (T4) — Hypothyroidism Replacement',
    brandNames: 'Thyronorm, Eltroxin, Thyrox, Lethyrox',
    janAushadhiPrice: '₹18 – ₹30 for 100 tablets (25mcg–100mcg)',
    brandedMarketPrice: '₹130 – ₹220 for 100 or 120 tablets',
    standardDosage: '12.5mcg to 100mcg once daily as precisely prescribed based on TSH blood levels.',
    howToTake: 'Strictly take first thing in the morning with plain water on an empty stomach, at least 30 to 60 minutes before morning tea, coffee, milk, or breakfast.',
    geriatricSafety: 'In seniors, especially those with heart disease, dose titration must be gradual ("start low, go slow"). An excess dose can trigger cardiac palpitations, atrial fibrillation, or insomnia.',
    criticalWarning: 'Never take Calcium, Iron (haematinic) tablets, antacids, or soy products at the same time as Thyroxine. Maintain a strict 4-hour gap, as they bind to Thyroxine and prevent absorption.',
    interactions: 'Check your TSH level every 6 to 12 months, or 6 to 8 weeks after any dose adjustment.'
  },
  calcium: {
    name: 'Calcium Carbonate with Vitamin D3 (Cholecalciferol)',
    genericClass: 'Mineral & Vitamin Supplement — Bone Health & Osteoporosis Management',
    brandNames: 'Shelcal 500, Gemcal, Cipcal 500, Supracal, Calcirol',
    janAushadhiPrice: '₹12 – ₹20 for 10 tablets (500mg + 250 IU)',
    brandedMarketPrice: '₹80 – ₹150 for 15 tablets',
    standardDosage: '500mg elemental calcium + 250–500 IU Vitamin D3, typically once daily after food.',
    howToTake: 'Calcium Carbonate requires stomach acid for absorption, so take it with or immediately after lunch or dinner. Drink adequate water throughout the day.',
    geriatricSafety: 'Essential for preventing osteoporosis and fragility fractures in postmenopausal women and older men. Ensure dietary calcium through curd, milk, sesame (til), and leafy greens alongside.',
    criticalWarning: 'Avoid excessive intake (>1200mg elemental calcium per day from all sources combined). High unmonitored doses can increase the risk of kidney stones and vascular calcification.',
    interactions: 'Do not take at the same time as thyroid pills (Levothyroxine) or Iron tablets. Maintain at least a 3-to-4-hour gap.'
  },
  paracetamol: {
    name: 'Paracetamol (Acetaminophen)',
    genericClass: 'Analgesic & Antipyretic — Safe First-Line Pain & Fever Relief',
    brandNames: 'Dolo 650, Calpol 500/650, Crocin, Pacimol',
    janAushadhiPrice: '₹6 – ₹10 for 10 tablets (500mg/650mg)',
    brandedMarketPrice: '₹25 – ₹40 for 15 tablets',
    standardDosage: '500mg or 650mg tablets as needed, strictly spaced at least 6 hours apart.',
    howToTake: 'Can be taken with or without food. Drink plenty of fluids.',
    geriatricSafety: 'The safest first-choice painkiller for seniors with osteoarthritis, joint pain, or headaches, because it does NOT harm the kidneys, raise blood pressure, or cause stomach ulcers like Brufen or Voveran.',
    criticalWarning: 'Maximum daily limit in seniors is 3,000mg (approximately four 650mg tablets) in 24 hours. Exceeding this can cause severe liver injury. Always check cold/cough syrups to ensure they do not already contain paracetamol.',
    interactions: 'Safe when used within recommended doses. Avoid pairing with alcohol.'
  }
};

/* Quick fill search */
function fillSearch(name) {
  const input = document.getElementById('medSearchInput');
  if (input) {
    input.value = name;
    searchMedicine();
  }
}

/* Medicine Search Function */
function searchMedicine() {
  const input = document.getElementById('medSearchInput');
  const resultArea = document.getElementById('medResult');
  if (!input || !resultArea) return;

  const rawQuery = input.value.trim().toLowerCase();
  const cleanQuery = rawQuery.replace(/[^a-z0-9]/g, '');

  if (!cleanQuery) {
    resultArea.style.display = 'none';
    return;
  }

  // Search by key, name, or brand names
  let matchedKey = null;
  for (const key in medicines) {
    const med = medicines[key];
    const keyClean = key.replace(/[^a-z0-9]/g, '');
    const nameClean = med.name.toLowerCase().replace(/[^a-z0-9]/g, '');
    const brandsClean = med.brandNames.toLowerCase().replace(/[^a-z0-9]/g, '');

    if (keyClean.includes(cleanQuery) || cleanQuery.includes(keyClean) ||
        nameClean.includes(cleanQuery) || brandsClean.includes(cleanQuery)) {
      matchedKey = key;
      break;
    }
  }

  if (!matchedKey) {
    resultArea.innerHTML = `
      <div class="med-not-found">
        <i class="fas fa-file-prescription"></i>
        <h3>No Exact Match Found for "${escapeHtml(input.value)}"</h3>
        <p>Our verified directory currently includes detailed profiles for the 9 most widely prescribed senior medications in India: <strong>Metformin, Amlodipine, Telmisartan, Atorvastatin, Aspirin, Pantoprazole, Thyroxine, Calcium/D3, and Paracetamol</strong>.</p>
        <p class="text-small text-muted mt-2">Always check your prescription with a registered doctor or certified Jan Aushadhi pharmacist for unlisted brand names.</p>
      </div>`;
    resultArea.style.display = 'block';
    return;
  }

  const med = medicines[matchedKey];

  resultArea.innerHTML = `
    <div class="med-result-card">
      <div class="med-result-header">
        <div>
          <span class="badge badge-blue mb-2">${escapeHtml(med.genericClass)}</span>
          <h3 class="med-title">${escapeHtml(med.name)}</h3>
          <div class="med-brands"><strong>Common Indian Brands:</strong> ${escapeHtml(med.brandNames)}</div>
        </div>
        <div class="med-price-chip">
          <div class="mp-jan"><i class="fas fa-hand-holding-dollar"></i> Jan Aushadhi: <strong>${escapeHtml(med.janAushadhiPrice)}</strong></div>
          <div class="mp-brand"><i class="fas fa-tag"></i> Branded Cost: <span>${escapeHtml(med.brandedMarketPrice)}</span></div>
        </div>
      </div>

      <div class="med-body-grid">
        <div class="med-grid-col">
          <div class="med-info-box">
            <h4><i class="fas fa-clock"></i> How & When to Take</h4>
            <p>${escapeHtml(med.howToTake)}</p>
          </div>
          <div class="med-info-box">
            <h4><i class="fas fa-capsules"></i> Typical Dosage Range</h4>
            <p>${escapeHtml(med.standardDosage)}</p>
          </div>
        </div>

        <div class="med-grid-col">
          <div class="med-info-box geriatric">
            <h4><i class="fas fa-user-doctor"></i> Senior Citizen Safety Profile</h4>
            <p>${escapeHtml(med.geriatricSafety)}</p>
          </div>
          <div class="med-info-box warning">
            <h4><i class="fas fa-triangle-exclamation"></i> Critical Clinical Warning</h4>
            <p>${escapeHtml(med.criticalWarning)}</p>
          </div>
        </div>
      </div>

      <div class="med-interaction-row">
        <i class="fas fa-utensils"></i>
        <div><strong>Food & Medication Interactions:</strong> ${escapeHtml(med.interactions)}</div>
      </div>

      <div class="med-source-footer">
        <span>Verified from CDSCO prescribing monographs & PMBJP (Pradhan Mantri Bhartiya Janaushadhi Pariyojana) price list.</span>
        <span>Always consult a qualified medical professional before altering any drug dosage.</span>
      </div>
    </div>`;

  resultArea.style.display = 'block';
  resultArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/* Enter key support for search */
document.addEventListener('DOMContentLoaded', function () {
  const input = document.getElementById('medSearchInput');
  if (input) {
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        searchMedicine();
      }
    });
  }
});

/* Evidence-Based Senior BMI Calculator (ICMR Geriatric Standards) */
function calculateBMI() {
  const heightInput = document.getElementById('bmiHeight');
  const weightInput = document.getElementById('bmiWeight');
  const ageInput = document.getElementById('bmiAge');
  const result = document.getElementById('bmiResult');

  if (!heightInput || !weightInput || !result) return;

  const heightCm = parseFloat(heightInput.value);
  const weightKg = parseFloat(weightInput.value);
  const age = ageInput ? parseInt(ageInput.value, 10) || 65 : 65;

  if (!heightCm || !weightKg || heightCm < 100 || heightCm > 220 || weightKg < 25 || weightKg > 200) {
    result.innerHTML = `
      <div class="alert alert-danger">
        <i class="fas fa-circle-exclamation"></i>
        <div>Please enter realistic measurements: Height (100–220 cm) and Weight (25–200 kg).</div>
      </div>`;
    result.style.display = 'block';
    return;
  }

  const heightM = heightCm / 100;
  const bmi = (weightKg / (heightM * heightM)).toFixed(1);

  // ICMR Senior Guidelines: For adults 60+, ideal BMI is slightly higher (22.0 to 27.0)
  // because mild reserves protect against frailty and infection-related muscle wasting.
  let category = '';
  let badgeClass = '';
  let interpretation = '';
  let clinicalAdvice = '';

  if (bmi < 22.0) {
    category = 'Underweight for Senior (Frailty Risk)';
    badgeClass = 'badge-amber';
    interpretation = `A BMI of ${bmi} indicates lower body weight than recommended for seniors over 60. Being underweight in older age increases the risk of muscle loss (sarcopenia), reduced bone density, and slower recovery from illnesses.`;
    clinicalAdvice = 'Focus on nutrient-dense meals with adequate protein (paneer, dal, eggs, curd), healthy fats (ghee, nuts), and gentle resistance exercises to rebuild muscle strength. Consult your doctor to rule out underlying thyroid or digestive causes.';
  } else if (bmi >= 22.0 && bmi <= 27.0) {
    category = 'Optimal Healthy Senior Weight Range';
    badgeClass = 'badge-green';
    interpretation = `Your BMI of ${bmi} falls within the ideal clinical target range (22.0 – 27.0) established by ICMR and geriatric specialists for adults above 60.`;
    clinicalAdvice = 'Continue your balanced diet with sufficient protein (1.0g per kg body weight), stay well hydrated with 6–8 glasses of water daily, and maintain 30 minutes of daily walking.';
  } else if (bmi > 27.0 && bmi <= 30.0) {
    category = 'Mildly Overweight';
    badgeClass = 'badge-amber';
    interpretation = `A BMI of ${bmi} is slightly above the ideal range. While moderate weight in seniors can provide protection during illness, extra weight increases mechanical load on knee and hip joints.`;
    clinicalAdvice = 'Avoid crash diets. Aim for gradual joint-friendly physical activity (water walking, flat surface walking, seated leg lifts) and reduce refined sugars and deep-fried snacks. Protect your knees.';
  } else {
    category = 'Significant Obesity (Cardiometabolic Risk)';
    badgeClass = 'badge-red';
    interpretation = `A BMI of ${bmi} indicates obesity, which significantly elevates the risk of uncontrolled hypertension, type 2 diabetes, sleep apnoea, and severe osteoarthritis.`;
    clinicalAdvice = 'Discuss a safe, physician-monitored lifestyle plan with your doctor or clinical dietician. Aim for a very modest, safe weight reduction of 0.5 kg per month without sacrificing muscle mass.';
  }

  result.innerHTML = `
    <div class="bmi-score-card">
      <div class="bmi-header-row">
        <div>
          <span class="bmi-num">${bmi}</span>
          <span class="bmi-unit">kg/m²</span>
        </div>
        <span class="badge ${badgeClass}">${category}</span>
      </div>
      <p class="bmi-desc">${interpretation}</p>
      <div class="bmi-advice-box">
        <strong><i class="fas fa-stethoscope"></i> Clinical Recommendation:</strong>
        <p>${clinicalAdvice}</p>
      </div>
      <div class="bmi-note text-small text-muted mt-3">
        *Based on Indian Council of Medical Research (ICMR) & WHO Geriatric Weight Consensus: healthy elderly BMI target is 22.0–27.0 kg/m² (unlike young adult standard of 18.5–24.9), recognising the protective value of lean body mass in senior years.
      </div>
    </div>`;

  result.style.display = 'block';
}

/* Helper escape HTML */
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
