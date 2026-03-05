

## Plan: Apply All Pending Visual Changes

Consolidating all approved changes from recent conversations: warm LED color, bigger titles, cinematic intro update, white neon methodology cards with minimalist arrows.

### 1. Change LED accent from green to warm golden — `src/index.css`
- Line 27: `--led-accent: 140 20% 55%` → `--led-accent: 30 35% 55%`
- Add new CSS utilities:
  - `.card-neon-white` — white radial gradient background, warm white box-shadow glow, subtle border
  - `.gradient-sweep` — keyframe for a subtle light sweep animation
  - `.stat-number` — large display number styling for stats bar

### 2. Update CinematicIntro — `src/components/CinematicIntro.tsx`
- Change "Intervención temprana · 0–6 años" → "Estimulación · Desarrollo · Bienestar"
- Change "Cada paso cuenta cuando se da a tiempo." → "Centro integral de estimulación y desarrollo"
- Enlarge logo from `h-32 sm:h-40 md:h-56` → `h-48 sm:h-56 md:h-72 lg:h-80`
- Add scale animation (0.85 → 1.0) on the logo for cinematic impact

### 3. Enhance Home page — `src/pages/Index.tsx`

**Section titles** — all `<h2>` increased to `text-5xl md:text-6xl lg:text-7xl` with `led-glow-text` class. Add large faded section numbers (01, 02, etc.) behind titles using absolute positioning.

**Hero** — add animated floating geometric shapes, a stats bar ("Familias atendidas", "Años de experiencia", "Programas activos"), and a gradient sweep effect.

**Methodology section** — replace current plain cards with `.card-neon-white` styled cards (white glow background). Replace `ChevronRight`/`ArrowDown` with styled minimalist neon arrows (thin line + small chevron in LED warm color). Add hover effect that intensifies the neon glow. Increase background image opacity from `0.03` to `0.06`.

### 4. Enlarge titles on other pages — `src/pages/Centro.tsx`, `src/pages/Programas.tsx`, `src/pages/Team.tsx`
- All main `<h2>` headings bumped to `text-5xl md:text-6xl lg:text-7xl`
- Add `led-glow-text` class to key headings
- Add decorative section numbers where appropriate

### 5. Tailwind config — `tailwind.config.ts`
- Add `neon-pulse` keyframe for the white neon card hover intensification

### Files to edit
- `src/index.css` — LED color + new utilities
- `src/components/CinematicIntro.tsx` — text + logo size + scale animation
- `src/pages/Index.tsx` — titles, hero animations, methodology neon cards + arrows
- `src/pages/Centro.tsx` — bigger titles
- `src/pages/Programas.tsx` — bigger titles
- `src/pages/Team.tsx` — bigger titles
- `tailwind.config.ts` — neon-pulse keyframe

