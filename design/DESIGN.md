---
name: MindCare Wellness
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45464d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#006a61'
  on-secondary: '#ffffff'
  secondary-container: '#86f2e4'
  on-secondary-container: '#006f66'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#001d31'
  on-tertiary-container: '#188ace'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#89f5e7'
  secondary-fixed-dim: '#6bd8cb'
  on-secondary-fixed: '#00201d'
  on-secondary-fixed-variant: '#005049'
  tertiary-fixed: '#cce5ff'
  tertiary-fixed-dim: '#93ccff'
  on-tertiary-fixed: '#001d31'
  on-tertiary-fixed-variant: '#004b73'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.02em
  display-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.005em
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.005em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies a calm, dignified, and destigmatizing sanctuary for university students navigating high-pressure academic landscapes. Balancing the architectural rigor of modern premium SaaS with the organic warmth of a mental health sanctuary, it deliberately avoids the sterile, clinical intimidation of traditional healthcare portals and the patronizing visual tropes of juvenile self-care applications. 

The aesthetic is anchored in contemporary soft-minimalism: expansive negative space, deliberate hierarchy, quiet structural borders, and gentle tactile surfaces. The experience evokes immediate reassurance, emotional safety, and agency. Visual complexity is minimized to respect the user's finite cognitive load during moments of acute stress or fatigue.

## Colors

The palette establishes an emotional baseline of clarity and quiet composure. Light mode serves as the primary canvas to project openness and daylight vibrancy.

- **Primary (`#0F172A` / `#1E293B`):** Deep Obsidian Navy provides authoritative ground, crisp text contrast, and anchor UI moments (primary actions, primary navigation nodes).
- **Secondary (`#0D9488` / `#14B8A6`):** Grounded Botanical Teal functions as the restorative hero tone—used for constructive progress markers, positive mental health status trackers, mindfulness callouts, and primary active states.
- **Tertiary (`#0284C7` / `#38BDF8`):** Sky Cerulean acts as an intellectual companion color for peer connection points, counseling schedule confirmations, and informational focus items.
- **Accents & Highlights:** Gentle Violet (`#8B5CF6`) is reserved for reflective moments, journaling prompts, and expressive micro-interactions.
- **Neutral Canvas & Surfaces:** The foundation relies on a layered white-to-slate progression: `#FFFFFF` for interactive cards and floating surfaces, `#F8FAFC` for page backgrounds, and `#F1F5F9` for secondary modular wells and inset fields. Border boundaries utilize subtle slate tones (`#E2E8F0`).

## Typography

Inter serves as the unified typographic engine across all levels. Its tall x-height, neutral geometric architecture, and exceptional hinting maintain supreme legibility even on low-cost student mobile devices or dense resource dashboards.

- **Headlines:** Set with negative letter-spacing and medium-to-semibold weights (`600`) to provide crisp modern structure without aggressive visual weight.
- **Body:** Kept intentionally generous in line-height (`1.6x` ratio on standard body) to prevent reading fatigue during stressful check-ins or self-assessment reviews.
- **Microcopy & Labels:** Set in medium weights (`500` / `600`) to provide immediate readability without resorting to uppercase transformations, which can feel harsh or punitive in therapeutic contexts.

## Layout & Spacing

The layout adopts a unified 12-column responsive fluid grid designed around dynamic containment:
- **Desktop (1024px+):** Max-width canvas of 1280px with a 12-column grid, 24px gutters, and 32px screen margins. Content splits prioritize a 2/3 primary workspace (journaling, assessment forms, therapist logs) and a 1/3 contextual companion rail (crisis hotline quick access, breathing reminders, upcoming sessions).
- **Tablet (768px - 1023px):** 8-column layout, 20px gutters, collapsing secondary rails beneath the primary stream into horizontal action ribbons.
- **Mobile (< 768px):** 4-column layout, 16px gutters, and 16px margins. Navigational hierarchy transitions into a thumb-zone bottom navigation bar with immediate access to rapid crisis relief buttons.

Component spacing strictly follows an 8pt modular rhythm (`space-xs` = 4px, `space-sm` = 8px, `space-md` = 16px, `space-lg` = 24px, `space-xl` = 40px) to ensure breathing room and harmonious structural alignment across high-density symptom logs and open reflective canvases.

## Elevation & Depth

Visual hierarchy relies on ambient layered depth rather than stark artificial shadows, sustaining a calm and breathable atmosphere.

1. **Surface Tiers:**
   - **Base Canvas:** `#F8FAFC` provides the foundational calm backdrop.
   - **Elevated Surfaces:** Pristine `#FFFFFF` cards float above the canvas, bounded by a feather-weight border (`1px solid #E2E8F0`).
   - **Inset/Subdued Wells:** `#F1F5F9` surfaces nest inside white cards for passive inputs, search fields, or non-urgent metric indicators.

2. **Ambient Drop Shadows:**
   - **Resting Layer (Cards/Panels):** `0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 4px 12px -2px rgba(15, 23, 42, 0.03)`. A barely noticeable feather of navy-tinted shadow.
   - **Interactive / Hover Tier:** `0 4px 6px -1px rgba(15, 23, 42, 0.05), 0 10px 24px -4px rgba(13, 148, 136, 0.06)`. Subtle elevation enriched with a trace of secondary teal tint to signal interactivity.
   - **Floating Modals & Flyouts:** `0 20px 32px -8px rgba(15, 23, 42, 0.08), 0 8px 16px -4px rgba(15, 23, 42, 0.04)`.

3. **Subtle Outlines & Focus:**
   - Interactive fields and focus states employ a dual-ring model: an inner `1px` ring in secondary teal (`#0D9488`) backed by a diffuse `3px` ambient halo at 15% opacity (`rgba(13, 148, 136, 0.15)`), guaranteeing accessible focus without harsh contrast breaks.

## Shapes

The design system implements a soft, welcoming, and ergonomically protective shape language centered around roundedness level `2`.

- **Primary Cards & Containers:** Standardized at `rounded-2xl` (1rem / 16px) to eliminate sharp corners that feel clinical, defensive, or rigid.
- **Interactive Controls (Inputs, Dropdowns):** Configured at `rounded-xl` (0.75rem / 12px) to offer balanced clickability and clear boundary definition.
- **Pill Elements (Chips, Status Badges, Quick Filters):** Configured with full boundary radii (`rounded-full`) to deliver friendly, warm, non-threatening micro-interactions.
- **Modals & Overlays:** Set at `rounded-3xl` (1.5rem / 24px) to soften larger canvas interruptions.

## Components

### Buttons
- **Primary:** Deep navy solid (`#0F172A`) with pure white text, `rounded-xl` corners, 12px vertical padding by 20px horizontal padding. Transitions gracefully to `#1E293B` on hover with a micro-scale response (`scale(1.01)`).
- **Secondary (Action):** Calming teal solid (`#0D9488`) or soft teal tint background (`#CCFBF1` with `#0F766E` text) for wellness actions (e.g., "Start Daily Check-in", "Book Session").
- **Ghost/Tertiary:** Slate base (`transparent` background, `#475569` text) with a subtle `#F1F5F9` hover state.
- **Emergency / Urgent Support:** Warm coral-rose tint (`#FFF1F2`, text `#BE123C`, border `#FECDD3`) designed to be immediately distinguishable without inducing panic.

### Cards & Panels
- **Structure:** Pure white `#FFFFFF` surface, `rounded-2xl` border-radius, bounded by a soft `1px` stroke of `#E2E8F0`, and resting ambient drop shadow.
- **Padding:** 24px inner padding across desktop, stepping down to 16px on mobile viewports.
- **Interactive Variants:** Hover initiates a 2px vertical lift (`translateY(-2px)`), an increase in ambient teal shadow, and an outline shift to `#CBD5E1`.

### Chips & Badges
- **Status & Mood Badges:** Pill-shaped (`rounded-full`) with a soft pastel tint fill, matched tone border, and contrasting dark text:
  - *Calm/Mindful:* Teal tint (`#F0FDFA` bg, `#0D9488` text, `#CCFBF1` border).
  - *Academic Focus:* Sky blue tint (`#F0F9FF` bg, `#0284C7` text, `#BAE6FD` border).
  - *Reflection/Journaling:* Lavender tint (`#F5F3FF` bg, `#7C3AED` text, `#DDD6FE` border).
- **Filter Chips:** 32px height, `label-md` typography, containing outline icons from Lucide at 14px size.

### Form Inputs & Checkboxes
- **Input Fields:** Crisp `#F8FAFC` fill, `1px solid #CBD5E1` resting border, `rounded-xl` shape, and 12px 16px padding. Active state transitions to `#FFFFFF` surface with secondary teal border (`#0D9488`) and a 3px soft focus ring.
- **Checkboxes & Radios:** `rounded-md` (checkbox) and `rounded-full` (radio) using teal primary fills (`#0D9488`) when checked, with an inner white glyph, avoiding standard browser styling.

### Specialized Wellness Components
- **Daily Mood Slider / Selector:** Horizontal track featuring rounded organic touch nodes with emotional microcopy ("A bit drained", "Steady", "Energized") instead of diagnostic scales.
- **Breathing & Grounding Orb:** Soft animated focal circle transitioning between Sky Cerulean (`#38BDF8`) and Calming Emerald (`#14B8A6`) using subtle opacity breathing keyframes.
- **Confidential Peer Support Card:** Distinct card variant utilizing a pale lavender gradient border (`from-teal-500/20 via-sky-500/20 to-violet-500/20`) to highlight peer-led group discussions safely.