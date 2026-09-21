# LitSoc Website Design Direction

## 1. Design concept

### The LitSoc Gazette

The website should feel like a vintage literary newspaper, campus journal, and handmade event archive translated into a modern website.

The visual direction combines:

- the editorial structure, bold mastheads, fine rules, columns, and monochrome photography of a classic newspaper;
- the warm cream background, rounded framed cards, and muted retro color blocks of the supplied portfolio reference;
- the oversized typography, generous space, and smooth reveal transitions from the supplied motion reference.

The result should feel intelligent, expressive, youthful, and slightly imperfect—not corporate, overly polished, or artificially antique.

## 2. Core visual thesis

> A student literary journal that is still being printed, annotated, discussed, and passed around campus.

Every section should resemble a composed editorial spread. Large headlines create drama, thin rules organize information, event photos provide human warmth, and a few colored paper panels stop the site from becoming visually flat.

## 3. Design principles

1. **Editorial before decorative** — hierarchy should come from typography, columns, rules, and spacing.
2. **Warm rather than sepia** — use a clean cream paper tone; avoid heavy brown filters.
3. **Mostly monochrome** — black ink and off-white paper dominate, with accent colors used sparingly.
4. **Real club material** — event photographs, posters, poems, and student work are the visual content.
5. **Structured imperfection** — small rotations, stamps, notes, and paper overlaps may appear, but the reading grid stays precise.
6. **Readable at every size** — the vintage atmosphere must never reduce contrast, type size, or navigation clarity.

## 4. Color system

### Core colors

| Token | Value | Use |
| --- | --- | --- |
| Paper | `#F2EBDD` | Main page background |
| Paper Light | `#FAF6ED` | Cards and alternating sections |
| Ink | `#171713` | Main text, borders, buttons |
| Ink Soft | `#4A463E` | Secondary text |
| Newsprint Line | `#A79E8E` | Fine rules and quiet borders |
| Reverse Paper | `#F7F0E4` | Text placed on dark sections |

### Retro accents

| Token | Value | Use |
| --- | --- | --- |
| Brick | `#A9523E` | Primary CTA, featured event, important labels |
| Mustard | `#E5BE3F` | Book sessions and occasional highlights |
| Sage | `#98B9A2` | Poetry and community content |
| Faded Violet | `#A995B8` | Movie screenings or creative-work cards |

### Color rules

- Paper and Ink should make up roughly 80% of the interface.
- Use only one accent color within a single card.
- Never place all four accents side by side except in the “What We Do” activity grid.
- Dark sections use Ink as the background and Reverse Paper for text.
- Accent colors indicate content groups but must always be paired with a written category label.

## 5. Typography

### Type roles

**Display / masthead serif**

- Preferred: `Bodoni Moda`
- Alternative: `DM Serif Display`
- Fallback: `Georgia, "Times New Roman", serif`
- Use for the LitSoc masthead, hero statement, page titles, and major section headings.
- Character: high contrast, literary, confident, newspaper-like.

**Reading serif**

- Preferred: `Source Serif 4`
- Alternative: `Libre Baskerville`
- Fallback: `Georgia, serif`
- Use for descriptions, poems, excerpts, articles, and longer event copy.

**Utility sans serif**

- Preferred: `Archivo Narrow`
- Alternative: `Inter`
- Fallback: `Arial, sans-serif`
- Use for navigation, dates, categories, buttons, captions, and small metadata.

### Type scale

| Role | Desktop | Mobile | Notes |
| --- | --- | --- | --- |
| Masthead | `clamp(3.75rem, 10vw, 8.5rem)` | Fluid | Tight line height, centered |
| Hero headline | `clamp(3rem, 7vw, 6.5rem)` | Fluid | Maximum 8–10 words |
| Page title | `clamp(2.75rem, 6vw, 5rem)` | Fluid | May wrap across two lines |
| Section title | `clamp(2rem, 4vw, 3.5rem)` | Fluid | Serif |
| Card title | `1.4rem–2rem` | `1.35rem–1.6rem` | Serif |
| Body | `1rem–1.125rem` | At least `1rem` | Comfortable line height |
| Labels | `0.75rem–0.875rem` | At least `0.875rem` for controls | Uppercase, tracked |

### Typography rules

- Keep body copy between 55 and 72 characters per line.
- Use justified text only for short editorial excerpts on wide screens; use left alignment on mobile.
- Avoid fake typewriter fonts for paragraphs.
- Uppercase utility text should use generous letter spacing.
- Use drop caps only for a featured poem, article, or society introduction—not everywhere.
- Do not distort, outline, or heavily shadow headline text.

## 6. Grid and spacing

### Desktop grid

- Maximum content width: `1280px`
- Page gutters: `clamp(24px, 5vw, 72px)`
- Twelve-column editorial grid
- Main sections separated by `80px–144px`
- Fine horizontal rules mark major content changes
- Cards use a consistent `1px–1.5px` Ink border

### Mobile grid

- Single reading column with `18px–24px` side gutters
- Selected two-column mini layouts may be used for dates or small category cards
- Sections separated by `56px–88px`
- Decorative overlaps must return to the normal document flow
- Text and images must never require horizontal scrolling

### Shape language

- Small corner radius: `8px–12px`
- Feature panels may be square-cornered like clipped newspaper sections
- Buttons use pill or softly rounded rectangular shapes, depending on prominence
- Borders are thin, dark, and visible
- Avoid glassmorphism, glossy gradients, large soft shadows, and generic floating cards

## 7. Global page frame

### Utility strip

A narrow top line may show:

- “The Literary Society of BMSIT”
- Current academic year or issue number
- A small “Bengaluru” or campus identifier, if accurate

This line uses small uppercase sans-serif text and a bottom rule.

### Header and masthead

- `LITSOC` appears as a large editorial masthead, not a small startup logo.
- `THE LITERARY SOCIETY` or `BMSIT` may appear in small type above or below it.
- Navigation sits on a ruled line beneath the masthead: Events, Works, About, Team.
- The Join action is visually distinct but still belongs to the newspaper system.
- On mobile, keep a compact LitSoc wordmark and a clear Menu button; do not shrink the full masthead into unreadable text.

### Footer

- Use an Ink background with Reverse Paper text.
- Arrange contact details like a newspaper colophon.
- Include LitSoc, BMSIT, email, confirmed social links, and copyright.
- A short closing phrase may appear in large serif type if real copy is provided.

## 8. Homepage art direction

### 8.1 Hero: front page

The first viewport should look like the front page of a literary paper while immediately surfacing the next event.

Structure:

- Issue/date line across the top
- Large centered `LITSOC` masthead
- Thin double rule and navigation
- Main story split into an editorial grid
- Left/main column: short introduction and strong literary headline
- Right/feature column: the next event’s image or poster, date, venue, and action

Suggested headline style:

```text
Stories, screens,
verses & voices.
```

The final wording should be confirmed before launch. The next event must remain visible in or directly below the first viewport.

### 8.2 Activity ribbon

A dark horizontal strip directly below the hero lists:

```text
MOVIE SCREENINGS  •  BOOK SESSIONS  •  POETRY  •  OPEN MICS
```

On desktop it behaves like a newspaper index. On mobile it wraps into two lines or becomes a slow, accessible marquee that stops when motion reduction is enabled.

### 8.3 What We Do

- One cream introductory card styled like an editor’s note
- Four bordered activity cards using Brick, Mustard, Sage, and Faded Violet
- Each card includes a number, title, and one short sentence
- Cards align cleanly, with only one or two allowed to overlap by a few pixels for the cut-paper feeling

Mapping:

- Movie Screenings — Faded Violet
- Book Sessions — Mustard
- Poetry & Open Mics — Sage
- Literary Events — Brick

### 8.4 Upcoming Events

Style this section as “This Month’s Edition.”

- Large section headline with a small issue label
- One primary event presented as the lead story
- Two secondary events presented as smaller columns
- Dates should be prominent and scannable
- Poster or photograph sits in a bordered frame with a small printed caption
- The primary RSVP or details action is Ink or Brick, never a bright modern gradient

If only one event exists, give it the full lead-story treatment instead of showing empty cards.

### 8.5 Featured Works

This should resemble the culture/literature page of a newspaper.

- Featured poem or prose excerpt spans the widest column
- Use a drop cap and comfortable reading measure
- Author name, course/year if approved, and publication date appear as metadata
- Smaller recommendations or reviews sit in adjacent bordered columns
- A thin rule separates each work
- Quotation marks may be oversized but should not become decorative clutter

### 8.6 Recent Moments

Treat club photography like an archive contact sheet.

- Use real event photos only
- Default treatment is black and white or lightly desaturated
- Restore full color on hover only if the original photo has useful color
- Use thin frames, printed captions, event dates, and small archive numbers
- One image may be slightly rotated by no more than `2deg`
- Do not use a generic carousel on desktop; use a deliberate editorial grid

### 8.7 About LitSoc

- Dark Ink section to create a strong pause in the page
- Large serif statement on one side
- Short mission and club description on the other
- Small archival detail such as “Established — [confirmed year]” only when verified
- Team link styled as an underlined editorial reference

### 8.8 Join / Contact

Present this as a classified notice or membership card.

- Cream panel with a double border
- Heading: “Join the next chapter” or approved alternative
- Short, direct invitation
- Primary contact or joining link
- Instagram or other confirmed announcement channel
- No decorative form until a real submission process exists

## 9. Internal page treatment

### Events

- Title: `THE EVENTS DESK`
- Upcoming events read like lead stories
- Past events form a compact dated archive
- Category, date, and venue always appear before the summary
- Event details use an article layout with a wide headline, framed media, and a readable central column

### Works

- Title: `THE READING ROOM` or `WORKS`
- Use newspaper departments for Poems, Prose, Reviews, and Reflections
- Each work opens in a calm, article-like layout
- Long work pages should prioritize reading comfort over decorative composition

### About and Team

- Title: `THE SOCIETY`
- Club story uses a feature-article layout
- Team members appear as a staff masthead, not corporate profile cards
- Use consistent monochrome portraits only if approved images are available

## 10. Image direction

### Preferred material

- Actual LitSoc event photographs
- Event posters
- Books, marked pages, film discussions, microphones, projectors, and campus details captured by the club
- Scans or photographs of member work, with permission

### Treatment

- Use monochrome or restrained color grading
- Preserve natural grain; add only a very light paper/noise overlay if needed
- Use hard rectangular crops and narrow borders
- Captions resemble print captions and always identify the event when known
- Keep faces and text in posters unobstructed

### Avoid

- Generic stock images of books or coffee
- Fake torn-paper PNGs on every section
- Heavy sepia filters
- AI-generated club photographs presented as real events
- Random vintage objects that do not connect to LitSoc

## 11. Buttons and links

### Primary button

- Ink or Brick background
- Light paper text
- Thin dark outline
- Compact uppercase utility label
- Small horizontal movement or underline on hover

### Secondary button

- Transparent Paper background
- Ink border and text
- Fill with Ink and reverse text on hover

### Text links

- Underlined with a thin rule
- Arrow may be used only when it indicates navigation
- Focus state should use a clear `2px` outline with sufficient offset

## 12. Motion and interaction

Motion should feel like pages being composed and revealed, not like an app dashboard.

- Masthead enters with a short upward reveal on first load
- Images may reveal through a rectangular clipping mask
- Section headings may slide by `12px–20px` while fading in
- Cards may lift by `2px–4px` on hover; avoid large floating effects
- Navigation links use a left-to-right underline
- Photo grids may use a restrained horizontal scroll on mobile
- Keep most transitions between `180ms` and `500ms`
- No constant film scratches, aggressive parallax, cursor replacement, or long loading animation
- With `prefers-reduced-motion`, remove translation, marquee movement, and automatic animation

## 13. Texture and decorative details

Permitted details:

- Very subtle paper grain at low opacity
- Edition numbers, archive codes, date stamps, and section labels
- Fine single and double rules
- Small star, diamond, or asterisk dividers
- One handwritten annotation style used sparingly for genuine notes or quotes

Do not use texture behind long body copy if it reduces readability. Decorative marks must never imitate stains, damage, or visual noise so strongly that the site looks dirty.

## 14. Responsive behavior

### Desktop

- Use asymmetric newspaper columns and deliberate empty space
- Masthead occupies one strong horizontal band
- Lead event uses a 7/5 or 8/4 column split
- Editorial sections can use three columns where content is short

### Tablet

- Convert complex spreads to two columns
- Keep headlines large but prevent single-word orphan lines
- Move overlapping paper cards back toward a clean grid

### Mobile

- Use a simple top bar and Menu control
- Preserve the dramatic serif hierarchy without recreating a tiny newspaper page
- Stack story content in reading order: headline, metadata, image, description, action
- Replace multi-column body text with a single column
- Keep event actions and important dates comfortably tappable and visible
- Disable decorative rotation where it causes clipping

## 15. Accessibility requirements

- Ink on Paper is the default high-contrast text combination
- Body text must be at least `16px`
- Regular controls and navigation labels should normally be at least `14px`
- Color-coded categories always include written labels
- All informative images require useful alternative text
- Decorative grain and rules should be ignored by assistive technology
- Maintain logical heading order even when the visual layout is asymmetric
- Avoid justified text on narrow screens and prevent large gaps between words
- Support keyboard navigation, visible focus, zoom to 200%, and reduced motion

## 16. Reusable component style

| Component | Visual treatment |
| --- | --- |
| Masthead | Oversized serif name, issue line, double rule |
| Navigation | Uppercase sans labels on a ruled strip |
| Section heading | Small department label plus large serif title |
| Event card | Bordered paper panel, strong date, image, concise details |
| Work card | Editorial title, author line, excerpt, thin divider |
| Activity card | Muted accent background, black border, number and title |
| Photo frame | Monochrome image, thin border, printed caption |
| Quote | Large serif text with restrained quotation mark |
| CTA panel | Classified-notice layout with double border |
| Dark band | Ink background, cream type, minimal accent color |

## 17. Design guardrails

### Do

- Make the page look composed by an editor
- Use meaningful club content as decoration
- Balance serious literary typography with youthful accent colors
- Let a few strong elements dominate each viewport
- Keep long-form reading areas calm and spacious

### Do not

- Copy either reference layout exactly
- Turn every section into an identical rounded card grid
- Use generic startup gradients or glass effects
- Add faux-vintage clutter to every corner
- Use more than two font families prominently in one view
- Place text over busy photography
- Hide core event information behind animation
- Sacrifice readability to reproduce a printed newspaper literally

## 18. Final design summary

The LitSoc website should look like a collectible campus literary issue: cream newsprint, black ink, strong serif type, fine rules, real monochrome photography, and a small set of muted colored paper cards. Its layout should be expressive and editorial on desktop, then simplify into a clean reading sequence on mobile. Motion should reveal content like a page being assembled while remaining quick, optional, and secondary to the writing and events.

