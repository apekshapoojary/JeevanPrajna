# JeevanPrajna (जीवनप्रज्ञा)

> **National Elderly Care & Senior Citizens Information Portal**  
> *Dedicated to wisdom, health, and dignity in elder life.*

JeevanPrajna is a human-curated, non-profit public service web platform providing verified healthcare guidance, government pension schemes, emergency helplines, medication tracking, and social welfare directories for Indian senior citizens and their family caregivers.

---

## 🌟 Key Features

### 1. Geriatric Health & Medicines Handbook (`health.html`)
- **Verified Medication Guidance**: Dosage, precautions, and generic alternatives for chronic elderly conditions (Hypertension, Diabetes, Thyroid, Arthritis, Cholesterol).
- **Pradhan Mantri Jan Aushadhi Pricing**: Price comparison between expensive branded medicines and Jan Aushadhi generic equivalents with up to 85% savings.
- **Drug-Food Interaction Checker**: Warning table for dangerous interactions (e.g., Warfarin + Vitamin K, Statins + Grapefruit, ACE inhibitors + Potassium).
- **ICMR Senior BMI & Nutritional Calculator**: Tailored BMI categories and daily protein/hydration recommendations formulated specifically for adults aged 60+.
- **Printable Doctor Consultation Sheet**: Fillable form for seniors to record symptoms, blood pressure logs, and questions before clinic appointments.

### 2. Emergency Helplines & First Aid Protocol (`emergency.html`)
- **24/7 Verified Helplines**: 
  - `112` — National Unified Emergency (Police, Fire, Ambulance)
  - `14567` — National Elder Line (Ministry of Social Justice & Empowerment)
  - `108` — Free Emergency Medical Ambulance
  - `1930` — National Cyber & Financial Fraud Reporting
  - `14416` — Tele-MANAS Mental Health Support
- **Clinical First Aid Guides**: Step-by-step emergency instructions for Heart Attack (MONA protocol), Stroke (FAST assessment), and Senior Fall management.

### 3. Pensions & Welfare Schemes Directory (`welfare.html`)
- **Central & State Pension Schemes**: Complete eligibility, documentation checklist, and application workflows for:
  - Indira Gandhi National Old Age Pension Scheme (IGNOAPS)
  - Senior Citizens Savings Scheme (SCSS) at 8.2% p.a.
  - Ayushman Bharat PM-JAY (Universal ₹5 Lakh cover for all seniors aged 70+)
  - Rashtriya Vayoshri Yojana (Free assistive living devices)
  - Reverse Mortgage Scheme for senior homeowners
- **Section 80D & 80TTB Tax Benefits**: Complete tax deduction guide for elderly medical expenses and interest income.
- **Maintenance and Welfare of Parents and Senior Citizens Act, 2007**: Legal rights, Maintenance Tribunals, and eviction protections.

### 4. Senior Community & NGO Network (`community.html`)
- **Verified NGO Registry**: Direct contacts for HelpAge India, Dignity Foundation, ARDSI (Alzheimer's and Dementia Society), and Agewell Foundation.
- **Cyber & Pension Fraud Shield**: Practical defense rules against digital arrest scams, pension KYC SMS fraud, and utility disconnection frauds.
- **Active Ageing & Senior Activity Clubs**: Walking groups, volunteer mentorship programs, and local RWA senior citizen circles.

### 5. Private Care Schedule & Medication Tracker (`reminders.html`)
- **100% Client-Side Privacy**: Runs locally in the browser with `localStorage` (zero cloud transmission, DPDP Act 2023 compliant).
- **Customizable Daily Reminders**: Schedule daily/weekly medications, doctor visits, walks, and blood sugar checks with alarm chime sounds.
- **Wall / Bedside Print Mode**: One-click printable daily schedule for elderly bedside tables or refrigerators.

---

## 🛠️ Technology Stack

- **Frontend**: Pure HTML5, Modern CSS3 (CSS Variables, Flexbox, CSS Grid), Vanilla ES6+ JavaScript.
- **Typography & Icons**: Inter, Merriweather, Font Awesome 6.5.
- **Local Server**: Native Node.js HTTP static server (`server.js`) with zero external runtime dependencies.
- **Design Tokens**: Standardized accessibility contrast ratios, minimum 16px body typography for readability, and 44px+ touch targets for senior hands.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16.0.0 or later)

### Installation & Local Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/apekshapoojary/JeevanPrajna.git
   cd JeevanPrajna
   ```

2. **Start the local server:**
   ```bash
   node server.js
   ```

3. **Open the portal:**
   Visit [http://localhost:8080](http://localhost:8080) in your web browser.

---

## 📄 Compliance & Data Source References

Information in this portal is compiled from official Indian regulatory notifications:
- [Ministry of Social Justice and Empowerment (MoSJE)](https://socialjustice.gov.in)
- [Ministry of Health and Family Welfare (MoHFW)](https://mohfw.gov.in)
- [Pradhan Mantri Bhartiya Janaushadhi Pariyojana](https://janaushadhi.gov.in)
- [National Health Authority (Ayushman Bharat PM-JAY 70+)](https://beneficiary.nha.gov.in)
- [Indian Council of Medical Research (ICMR)](https://main.icmr.nic.in)

---

## ⚖️ License & Disclaimer

Information provided is for educational and public assistance purposes only and does not constitute formal medical diagnosis or legal counsel. Always consult a registered medical practitioner for clinical emergencies.
