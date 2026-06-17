# Global Trek — Design System

## Brand
- **Name:** Global Trek
- **Tagline:** "Real adventures. Real people. The Himalaya, properly done."
- **Voice:** Warm, confident, slightly informal, grounded in specific facts (altitude, distance, village/temple names). Never generic travel-brochure language.
- **Audience:** First-time-to-mid trekkers and pilgrims, age 25–55, mostly booking from Indian metros.

## Fonts
- **Display / Headlines:** Fraunces, 700 weight. Fallback: Playfair Display or any bold serif at 700.
- **Body / UI:** Inter, weights 400 / 500 / 600 / 700. Fallback: "Helvetica Neue", Helvetica, Arial, sans-serif.
- **The serif/sans contrast is core to the brand identity.** Never substitute a sans-serif for headlines.

## Colors
| Token | Hex | Usage |
|---|---|---|
| Deep Green (accent/CTA) | `#004D40` | Primary accent, CTA buttons, nav links, focus outlines |
| Mint | `#DBFAEF` | Difficulty-pill badges, subtle highlights |
| Text Primary | `#202020` | Headlines, body copy on light backgrounds |
| Text Secondary | `#717171` | Meta text, captions, eyebrow labels |
| Text Inverse | `#FFFFFF` | Text on dark/image backgrounds |
| Surface Black | `#000000` | Footer background, final CTA band |
| Surface Strong | `#D9D9D9` | Strong structural surfaces |
| Surface White | `#FFFFFF` | Page background, card backgrounds |
| Border Subtle | `#E5E5E5` | Card borders, dividers |
| Error | `#C0362C` | Form validation errors |
| Success | `#1E7F4F` | Success states |

## Spacing
- **Base scale:** 4, 8, 10, 12, 15, 16, 16.5, 20px (use only these or exact multiples).
- **Section vertical padding:** 80–96px desktop, 48px mobile.
- **Gutters:** 24px desktop, 16px mobile.

## Radius
| Token | Value |
|---|---|
| xs | 4px |
| sm | 5px |
| md | 8px |
| lg | 10px |
| xl | 50px (pill buttons) |

## Shadow
- **Card hover / modals:** `rgba(0,0,0,0.06) 0px 1px 6px 0px, rgba(0,0,0,0.16) 0px 2px 32px 0px`

## Motion
| Duration | Use |
|---|---|
| 150ms ease | Micro-interactions (button press, icon toggle) |
| 200ms ease | Default transitions (hover, focus, color change) |
| 250ms ease | Larger layout shifts (menu open, card lift) |
- **Never exceed 300ms.**

## Layout
- **Max content width:** 1280px, centered.
- **Card grids:** 3 columns desktop → 2 columns tablet → 1 column mobile.
- **Responsive breakpoints:** Mobile < 768px, Tablet 768–1024px, Desktop > 1024px.

## Type Roles
| Role | Font | Weight | Size (desktop / mobile) | Line-height | Color |
|---|---|---|---|---|---|
| Nav link | Sans | 500 | 16px / — | 19px | `rgb(0,77,64)` |
| Hero / H1 | Serif | 700 | 70px / 38px | 77px / 44px | White on photo, or `#202020` on light |
| Card title | Sans | 600 | 24px / 20px | 29px / 25px | `#202020` |
| Body copy | Sans | 400 | 16px / — | 24px | `#202020` on light, `#fff` on dark |
| Small / meta | Sans | 400 | 12–14px / — | — | `#717171` |
| Eyebrow label | Sans | 500 | 12px / — | — | `#717171` or accent green, uppercase, letter-spacing `0.05em` |

## Accessibility
- WCAG 2.2 AA target.
- Every interactive element needs a visible `:focus-visible` state: **2px solid outline in deep-green accent, 2px offset.** Never suppress focus outlines without replacing them.
- All text must hit 4.5:1 contrast minimum.
- Every image needs specific descriptive alt text (name the real trek/location, never generic "image").
- Full keyboard operability: correct tab order, Enter/Space for toggles, focus trapped in modals and returned to trigger on close.
- Color is never the only signal of state: errors need icon + border + text, not color alone.
