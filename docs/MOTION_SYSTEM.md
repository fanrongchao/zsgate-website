# Motion System

## Motion Tokens
- `duration.fast = 140ms`
- `duration.base = 220ms`
- `duration.slow = 320ms`
- `easing.standard = cubic-bezier(0.2, 0.8, 0.2, 1)`
- `easing.emphasis = cubic-bezier(0.2, 0.9, 0.2, 1)`

## Decision Rule
- `low complexity`: CSS transitions only
- `medium complexity`: Motion library preferred
- `high complexity`: Motion; GSAP allowed only for timeline-heavy scenes

## Accessibility
- Always honor `prefers-reduced-motion`
- Replace transforms with opacity-only transitions in reduced mode
- Disable looped decorative animations in reduced mode

## Performance
- Animate `transform` and `opacity` only
- Avoid layout-thrashing properties during scroll animations
- Keep first contentful section animation under 500ms total
