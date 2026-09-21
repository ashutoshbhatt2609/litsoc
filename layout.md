# LitSoc Website Layout

## 1. Website purpose

LitSoc is the Literary Society of BMSIT. The website should help students:

- discover upcoming literary and cultural events;
- understand what LitSoc does;
- explore past screenings, book sessions, poetry events, and member work;
- find clear information about joining or contacting the club.

The experience should feel like a living home for the society rather than a formal college notice board.

## 2. Primary audience

- BMSIT students interested in books, films, poetry, writing, and discussion
- Existing LitSoc members
- Students considering joining the club
- Faculty, alumni, and visitors looking for club information

## 3. Site map

```text
Home
├── Events
│   ├── Upcoming events
│   └── Past events
├── Works
│   ├── Poems
│   ├── Short stories / prose
│   └── Recommendations and reviews
├── About
│   └── Team
└── Contact / Join LitSoc
```

The first version can be built as a single scrolling homepage. The Events, Works, and About sections can later become separate pages when there is enough content.

## 4. Global structure

### Header

- LitSoc logo or wordmark
- Navigation: Home, Events, Works, About
- Primary action: Join LitSoc or Contact Us
- Mobile menu for smaller screens

The header should remain easy to reach while scrolling without covering page content.

### Footer

- LitSoc name and BMSIT affiliation
- Quick navigation links
- Instagram and other confirmed social links
- Contact email
- Copyright line

Only confirmed contact details and social accounts should be published.

## 5. Homepage layout

### Section 1: Opening / Hero

Purpose: introduce LitSoc immediately and lead students to the next event.

Content:

- LitSoc name
- Short identity line, to be written after the tone is decided
- One brief description of the society
- Primary action: View upcoming event
- Secondary action: Explore LitSoc
- One featured visual or club photograph, if the final design uses imagery

The first screen should show both the society identity and a useful path to the next activity. It should not be only a large decorative banner.

### Section 2: Next Event

Purpose: make the most relevant event visible without searching.

Content:

- Event type
- Event title
- Date and time
- Venue
- Short description
- RSVP or Learn more action, if registration is required

If there is no scheduled event, this area should show a friendly “new event coming soon” message and direct visitors to past events or the club’s social page.

### Section 3: What We Do

Purpose: explain the club through its recurring activities.

Activity groups:

1. Movie Screenings — selected films followed by conversation or reflection
2. Book Sessions — monthly discussions, recommendations, or themed readings
3. Poetry and Open Mics — poetry readings, performances, and shared writing
4. Literary Events — writing activities, quizzes, workshops, and other literature-focused events

Each item should have a short explanation and may link to related events.

### Section 4: Upcoming Events

Purpose: let students quickly scan what is happening next.

Display up to three event cards, each containing:

- Event category
- Title
- Date and time
- Venue
- One-line summary
- View details action

Include a View all events link when a separate Events page exists.

### Section 5: Featured Works

Purpose: showcase the creative side of the LitSoc community.

Possible entries:

- Poem of the month
- Short prose or story excerpt
- Book recommendation or review
- Film reflection

Each entry should show its title, author, type, and a short excerpt. Publication requires the author’s permission and should preserve the author’s name exactly as requested.

### Section 6: Recent Moments

Purpose: give visitors a sense of the club’s community and history.

Content:

- Two to four selected photographs from recent events
- Event name and date for each photograph
- Short caption where useful

This section should only be included when real, approved club photos are available. It should not launch with generic stock photography.

### Section 7: About LitSoc

Purpose: briefly explain the society’s role at BMSIT.

Content:

- Short club introduction
- Mission or guiding idea
- What students can expect from the community
- Link to the full About or Team page

### Section 8: Join / Contact

Purpose: give interested students one clear next step.

Content:

- Short invitation to join or collaborate
- Confirmed contact method
- Optional link to a college form or registration form
- Social link for announcements

Do not add a form unless LitSoc has a real process for handling submissions.

## 6. Events page

### Intro

- Page title
- One sentence explaining LitSoc events

### Upcoming events

- Events shown in date order
- Optional category filters only if there are enough events to justify them
- Each event includes title, category, date, time, venue, description, and registration status

### Past events

- Compact event archive
- Event title, date, category, short recap, and approved photos
- Most recent events first

### Event detail view

Use when an event needs more information than a card can hold:

- Event title and category
- Date, time, and venue
- Full description
- Host or facilitator
- Registration details
- Accessibility or attendance notes, when relevant
- Related poster or photograph

## 7. Works page

### Intro

- Page title
- Short note about student creativity and authorship

### Content collection

- Poems
- Short stories and prose
- Book reviews and recommendations
- Film reflections

Every published work should include:

- Title
- Author
- Content type
- Publication date
- Full text or excerpt
- Author-approved credit

If submissions are accepted, the page may later include a submission link and clear publishing guidelines.

## 8. About and Team page

### About LitSoc

- Club story
- Purpose and values
- Relationship to BMSIT
- Main activities

### Team

- Faculty coordinator, if applicable
- Office bearers / core team
- Role and name for each member
- Portraits only when approved and consistently available

### Contact

- Official email
- Confirmed social accounts
- Campus location or meeting details, if useful

## 9. Content model

### Event

```text
title
category
date
start_time
end_time (optional)
venue
summary
full_description
registration_link (optional)
image (optional)
status: upcoming / completed / cancelled
```

### Creative work

```text
title
author
type: poem / prose / review / reflection
excerpt
full_content (optional)
published_date
cover_or_artwork (optional)
```

### Team member

```text
name
role
portrait (optional)
short_bio (optional)
```

## 10. Responsive layout

### Desktop

- Full navigation visible in the header
- Multi-column event and activity sections
- Hero content and visual may sit side by side
- Comfortable maximum content width for readable long-form text

### Tablet

- Two-column cards where space allows
- Reduced spacing without removing important content
- Navigation may collapse depending on the final design

### Mobile

- Single-column reading order
- Collapsible navigation
- Event date, venue, and primary action visible without horizontal scrolling
- Tap targets large enough for comfortable use
- Images cropped without hiding important subjects

## 11. Accessibility and usability requirements

- Use semantic headings in a logical order
- Keep body text at a comfortable reading size
- Maintain strong text/background contrast
- Provide visible keyboard focus states
- Add meaningful alternative text to informative images
- Do not rely on color alone to communicate event status
- Respect reduced-motion preferences if animation is added
- Ensure every interaction works with keyboard and touch input

## 12. Content needed before launch

- Official LitSoc logo or preferred text treatment
- Approved description of LitSoc
- Upcoming event details
- Two to six past event records
- Poems, reviews, or other featured work with author permission
- Approved event photographs
- Team names and roles
- Official email, social links, and joining process

## 13. Design direction

The visual system is defined in `design.md`. The selected direction is a vintage editorial/newspaper experience with a warm paper palette, dramatic literary typography, real club imagery, restrained retro accent colors, and subtle page-reveal motion.
