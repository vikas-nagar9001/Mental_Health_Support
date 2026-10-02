# MindCare — Student Mental Health Support System

Campus wellness web app for college students. UI screens were designed in **Google Stitch** and organized into a navigable multi-page frontend.

## Quick start

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

Then visit the local URL (landing page loads automatically).

## Project structure

```
Mental_Health_Support/
├── index.html                 # Entry → landing
├── plan.md                    # Product / screen plan
├── design/
│   └── DESIGN.md              # Design tokens from Stitch
├── assets/
│   ├── js/nav.js              # Shared route map (wires data-path)
│   └── images/                # Screen previews + portrait
├── pages/
│   ├── public/                # Landing, logo
│   ├── auth/                  # Login, signup, forgot password, onboarding
│   ├── app/                   # Dashboard, AI Support
│   ├── wellness/              # Assessment, results, mood tracker
│   ├── resources/             # Library, breathing, relaxation, detail
│   ├── counseling/            # Directory, booking, confirmation, appointments
│   └── account/               # Profile, settings, notifications, help, emergency
└── stitch-raw/                # Original Stitch downloads (reference only)
```

## Connected user flows

1. **Landing** → Get Started → **Login** → **Dashboard**
2. **Login** → Signup → **Onboarding** → **Dashboard**
3. **Login** → Forgot password → back to **Login**
4. **Dashboard** sidebar / quick actions → Wellness, AI, Mood, Resources, Counseling, etc.
5. **Counseling directory** → book → **Appointments** (or **Profile booking** → **Confirmation**)
6. Crisis / SOS links → **Emergency support**

Navigation uses `data-path` attributes (from Stitch) resolved by `assets/js/nav.js`.

## Screen map (plan.md)

| Plan screen | File |
|-------------|------|
| Landing | `pages/public/landing.html` |
| Login | `pages/auth/login.html` |
| Signup | `pages/auth/signup.html` |
| Forgot password | `pages/auth/forgot-password.html` |
| Onboarding | `pages/auth/onboarding.html` |
| Dashboard | `pages/app/dashboard.html` |
| Wellness assessment | `pages/wellness/assessment.html` |
| Assessment results | `pages/wellness/assessment-results.html` |
| AI Support | `pages/app/ai-support.html` |
| Mood tracker / history | `pages/wellness/mood-tracker.html` |
| Resources | `pages/resources/index.html` |
| Resource detail | `pages/resources/resource-detail.html` |
| Breathing | `pages/resources/breathing.html` |
| Relaxation | `pages/resources/relaxation.html` |
| Counselor directory | `pages/counseling/directory.html` |
| Counselor profile / booking | `pages/counseling/profile-booking.html` |
| Appointment confirmation | `pages/counseling/confirmation.html` |
| My appointments | `pages/counseling/appointments.html` |
| Notifications | `pages/account/notifications.html` |
| Profile | `pages/account/profile.html` |
| Settings / privacy | `pages/account/settings.html` |
| Help | `pages/account/help.html` |
| Emergency | `pages/account/emergency.html` |

## Notes

- Frontend prototype: Tailwind CDN + static HTML (Stitch export).
- No backend yet — forms navigate with sample success states.
- Language is supportive and non-diagnostic (“Your responses suggest…”).
- Emergency numbers shown are placeholders from the Stitch designs; replace with verified campus/local numbers before production.
