import { useEffect, useRef, useState } from "react";

const activities = [
  ["violet", "01 / Screen", "Movie Screenings", "Films chosen to leave us with something worth discussing after the credits."],
  ["mustard", "02 / Read", "Book Sessions", "Monthly conversations around books, ideas, passages, and unexpected favourites."],
  ["sage", "03 / Speak", "Poetry & Open Mics", "A welcoming floor for poems, spoken word, unfinished thoughts, and brave first readings."],
  ["brick", "04 / Make", "Literary Events", "Writing games, workshops, quizzes, and experiments built around language."],
];

const books = [
  ["book-brick", "01 · Wonder", "The Little Prince", "Antoine de Saint-Exupéry", "For its quiet questions about friendship, adulthood, and what we fail to notice."],
  ["book-mustard", "02 · Power", "1984", "George Orwell", "For a conversation about language, truth, surveillance, and who controls memory."],
  ["book-sage", "03 · Beauty", "The Picture of Dorian Gray", "Oscar Wilde", "For wit, vanity, influence, and the uneasy cost of living only for appearances."],
  ["book-violet", "04 · Memory", "The Book Thief", "Markus Zusak", "For its unusual narrator and its belief in the dangerous, consoling power of words."],
];

const quotes = [
  ["quote-feature", "“Carpe diem. Seize the day, boys. Make your lives extraordinary.”", "Dead Poets Society · 1989"],
  ["", "“Not all those who wander are lost.”", "J. R. R. Tolkien · The Fellowship of the Ring"],
  ["", "“Whatever our souls are made of, his and mine are the same.”", "Emily Brontë · Wuthering Heights"],
];

const archiveCards = [
  ["archive-one", "Frame 01", "Screenings", "Posters, projector glow, and the conversation after."],
  ["archive-two", "Frame 02", "Sessions", "Marked pages, shared passages, and changing opinions."],
  ["archive-three", "Frame 03", "Open mics", "A microphone, a room, and someone reading for the first time."],
];

function useRevealOnScroll() {
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px" },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}

function LinkArrow({ children }) {
  return <>{children} <span aria-hidden="true">→</span></>;
}

function SocialDialog({ open, onClose, type }) {
  const dialogRef = useRef(null);
  const isInstagram = type === "instagram";

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      className={`join-dialog${isInstagram ? " instagram-dialog" : ""}`}
      ref={dialogRef}
      aria-labelledby={`${type}-dialog-title`}
      onClose={onClose}
      onClick={(event) => event.target === event.currentTarget && onClose()}
    >
      <div className="dialog-paper">
        <button className="dialog-close" type="button" onClick={onClose} aria-label={`Close ${isInstagram ? "Instagram" : "join"} box`}>×</button>
        <p className="eyebrow">{isInstagram ? "LitSoc updates · Instagram" : "LitSoc membership · WhatsApp community"}</p>
        <h2 id={`${type}-dialog-title`}>{isInstagram ? "Follow LitSoc." : "Join the club."}</h2>
        <div className="dialog-grid">
          <div
            className={`qr-placeholder dialog-qr${isInstagram ? " instagram-qr" : ""}`}
            role="img"
            aria-label={`${isInstagram ? "LitSoc Instagram" : "WhatsApp community"} QR code will be added here`}
          >
            <span>{isInstagram ? "IG" : "QR"}</span>
          </div>
          <div className="dialog-copy">
            <h3>{isInstagram ? "Scan or open the profile." : "Scan or open the invite."}</h3>
            <p>{isInstagram ? "Follow the LitSoc page for event posters, announcements, reminders, and moments from the club." : "Use the QR code on another device, or open the WhatsApp community invitation directly."}</p>
            <div className={`invite-link${isInstagram ? " instagram-link" : ""}`} aria-label={`${isInstagram ? "Instagram profile" : "WhatsApp invitation"} link pending`}>
              <span>{isInstagram ? "Instagram profile link pending" : "WhatsApp invite link pending"}</span>
              <button type="button" disabled>Copy</button>
            </div>
            <p className="dialog-status">Send the official {isInstagram ? "Instagram profile" : "community invite"} URL to activate both the link and QR code.</p>
          </div>
        </div>
      </div>
    </dialog>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dialog, setDialog] = useState(null);
  const lastTrigger = useRef(null);
  useRevealOnScroll();

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    const closeOnDesktop = () => window.innerWidth > 680 && setMenuOpen(false);
    window.addEventListener("resize", closeOnDesktop);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("resize", closeOnDesktop);
    };
  }, [menuOpen]);

  const openDialog = (type, event) => {
    event?.preventDefault();
    lastTrigger.current = event?.currentTarget ?? null;
    setMenuOpen(false);
    setDialog(type);
  };

  const closeDialog = () => {
    setDialog(null);
    window.setTimeout(() => lastTrigger.current?.focus(), 0);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="site-header" id="home">
        <div className="issue-line page-shell">
          <span>The Literary Society of BMSIT</span>
          <span>Vol. 01 · Bengaluru</span>
          <span>Est. for curious minds</span>
        </div>

        <div className="masthead page-shell">
          <a className="wordmark" href="#home" aria-label="LitSoc home">
            <span className="wordmark-kicker">The</span>
            <span className="wordmark-main">LITSOC</span>
            <span className="wordmark-kicker">Gazette</span>
          </a>
        </div>

        <div className="nav-wrap page-shell">
          <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="site-nav" onClick={() => setMenuOpen((value) => !value)}>
            <span>Menu</span><span className="menu-mark" aria-hidden="true" />
          </button>
          <nav className={`site-nav${menuOpen ? " is-open" : ""}`} id="site-nav" aria-label="Main navigation">
            <a href="#events" onClick={closeMenu}>Events</a>
            <a href="#works" onClick={closeMenu}>Works</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#moments" onClick={closeMenu}>Archive</a>
            <a className="nav-join" href="#join" onClick={(event) => openDialog("join", event)}>Join LitSoc</a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero page-shell" aria-labelledby="hero-title">
          <div className="hero-copy reveal">
            <p className="eyebrow">Front page · The society speaks</p>
            <h1 id="hero-title">Stories, screens,<br />verses <em>&amp;</em> voices.</h1>
            <p className="hero-intro">A common room for readers, writers, film lovers, and anyone who has ever underlined a sentence just to return to it later.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#events">See what we do</a>
              <a className="button button-secondary" href="#join" onClick={(event) => openDialog("join", event)}>Join the club</a>
            </div>
          </div>

          <article className="lead-story reveal" aria-label="Next LitSoc gathering">
            <div className="lead-art" aria-hidden="true">
              <span className="lead-art-number">01</span>
              <span className="lead-art-title">THE NEXT<br />GATHERING</span>
              <span className="lead-art-stamp">ANNOUNCING SOON</span>
            </div>
            <div className="lead-meta">
              <p className="eyebrow">Upcoming events</p>
              <h2>A new conversation is being set.</h2>
              <p>Our next screening, reading, or open mic will appear here as soon as the details are confirmed.</p>
              <a className="text-link" href="#join"><LinkArrow>Stay in the loop</LinkArrow></a>
            </div>
          </article>
        </section>

        <div className="index-ribbon" aria-label="LitSoc activities">
          <div className="ribbon-track">
            <span>Movie screenings</span><i aria-hidden="true">✦</i><span>Book sessions</span><i aria-hidden="true">✦</i><span>Poetry</span><i aria-hidden="true">✦</i><span>Open mics</span><i aria-hidden="true">✦</i><span>Writing</span>
          </div>
        </div>

        <section className="department page-shell" id="events" aria-labelledby="department-title">
          <div className="section-heading reveal">
            <p className="eyebrow">Department no. 01 · What we do</p>
            <h2 id="department-title">A society made<br />of many margins.</h2>
            <p>Come for the story. Stay for the conversation after it.</p>
          </div>
          <div className="activity-grid">
            <article className="editor-note reveal">
              <span className="card-number">Editor’s note</span>
              <h3>There is room at the table.</h3>
              <p>LitSoc is for practiced writers and first-time readers alike. No expertise required—only curiosity.</p>
            </article>
            {activities.map(([tone, number, title, copy]) => (
              <article className={`activity-card ${tone} reveal`} key={number}>
                <span className="card-number">{number}</span><h3>{title}</h3><p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="edition" aria-labelledby="edition-title">
          <div className="page-shell">
            <div className="edition-heading reveal">
              <p className="eyebrow">This month’s edition</p><h2 id="edition-title">Upcoming events</h2><p>Fresh event details will be printed here as soon as they are confirmed.</p>
            </div>
            <div className="event-ledger">
              <article className="event-lead reveal">
                <div className="event-date" aria-label="Date to be announced"><span>Date</span><strong>TBA</strong></div>
                <div><p className="eyebrow">Lead story · Upcoming</p><h3>The next LitSoc gathering</h3><p>Screening, session, reading, or open mic—the details will arrive with the next issue.</p></div>
              </article>
              <div className="event-note reveal">
                <span className="stamp">Notice</span><h3>Have an idea for a session?</h3><p>Bring a book, film, theme, poem, or question you think the community should explore.</p><a className="text-link" href="#join"><LinkArrow>Write to LitSoc</LinkArrow></a>
              </div>
            </div>
          </div>
        </section>

        <section className="reading-room page-shell" id="works" aria-labelledby="works-title">
          <div className="section-heading works-heading reveal">
            <p className="eyebrow">Department no. 02 · The reading room</p><h2 id="works-title">Words from<br />the community.</h2>
          </div>
          <div className="works-layout">
            <article className="featured-work reveal">
              <p className="eyebrow">The first page is waiting</p><h3>Poems, prose, reviews, and reflections belong here.</h3><p className="dropcap">LitSoc will use this space to publish student voices with their permission and preferred credit. A poem of the month, a note on a film, a short story, or a book that would not let someone go.</p><a className="text-link" href="#join"><LinkArrow>Share your work</LinkArrow></a>
            </article>
            <aside className="departments-list reveal" aria-label="Creative work categories">
              <p className="eyebrow">Inside the section</p>
              <ol>{["Poetry", "Short prose", "Book notes", "Film reflections"].map((item, index) => <li key={item}><span>0{index + 1}</span><strong>{item}</strong></li>)}</ol>
            </aside>
          </div>
          <div className="book-shelf reveal" aria-labelledby="books-title">
            <div className="book-shelf-intro"><p className="eyebrow">Shelf notes · Four places to begin</p><h3 id="books-title">Books worth carrying around.</h3><p>Four very different reads for a future session, a long bus ride, or an argument with a friend.</p></div>
            {books.map(([tone, number, title, author, note]) => <article className={`book-card ${tone}`} key={title}><span>{number}</span><h4>{title}</h4><p>{author}</p><small>{note}</small></article>)}
          </div>
        </section>

        <section className="quote-edition" aria-labelledby="quotes-title">
          <div className="page-shell">
            <div className="quote-heading reveal"><p className="eyebrow">Lines we return to · Books &amp; cinema</p><h2 id="quotes-title">Underlined.</h2></div>
            <div className="quote-grid">{quotes.map(([feature, quote, source]) => <blockquote className={`quote-card ${feature} reveal`} key={source}><p>{quote}</p><cite>{source}</cite></blockquote>)}</div>
          </div>
        </section>

        <section className="archive page-shell" id="moments" aria-labelledby="archive-title">
          <div className="archive-title reveal"><p className="eyebrow">The archive · Recent moments</p><h2 id="archive-title">To be collected,<br />captioned &amp; remembered.</h2></div>
          <div className="archive-strip" aria-label="Future LitSoc event archive">{archiveCards.map(([tone, frame, title, copy]) => <article className={`archive-card ${tone} reveal`} key={frame}><span>{frame}</span><strong>{title}</strong><p>{copy}</p></article>)}</div>
          <p className="archive-caption">Real LitSoc photographs will replace these typographic archive cards when supplied.</p>
        </section>

        <section className="about" id="about" aria-labelledby="about-title">
          <div className="page-shell about-grid">
            <div className="reveal"><p className="eyebrow">About the society</p><h2 id="about-title">Literature lives<br />between people.</h2></div>
            <div className="about-copy reveal"><p>LitSoc is the Literary Society of BMSIT: a student community for books, cinema, poetry, writing, and the conversations they begin.</p><p>We gather to read closely, watch curiously, speak honestly, and make space for new voices across campus.</p><a className="text-link light-link" href="#join"><LinkArrow>Meet us in the next issue</LinkArrow></a></div>
          </div>
        </section>

        <section className="join page-shell" id="join" aria-labelledby="join-title">
          <div className="classified reveal">
            <p className="eyebrow">Join the club · WhatsApp community</p>
            <div className="classified-grid">
              <div><h2 id="join-title">Join the<br />club.</h2><p className="join-intro">Interested in screenings, book sessions, poetry, or helping make the next event happen? Come into the LitSoc community.</p><button className="button button-primary" type="button" onClick={(event) => openDialog("join", event)}>Open the join box</button></div>
              <div className="join-options"><div className="instagram-note"><p className="eyebrow">For event updates</p><h3>Follow LitSoc on Instagram.</h3><p>Posters, announcements, reminders, and glimpses from every gathering.</p><button className="button button-primary" type="button" onClick={(event) => openDialog("instagram", event)}>Open Instagram box</button></div></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-shell footer-grid">
          <div><span className="footer-mark">LITSOC</span><p>The Literary Society of BMSIT</p></div>
          <div><p className="eyebrow">Departments</p><a href="#events">Events</a><a href="#works">Works</a><a href="#about">About</a></div>
          <div><p className="eyebrow">Colophon</p><p>Bengaluru, India</p><p>© {new Date().getFullYear()} LitSoc, BMSIT</p></div>
        </div>
      </footer>

      <SocialDialog open={dialog === "join"} onClose={closeDialog} type="join" />
      <SocialDialog open={dialog === "instagram"} onClose={closeDialog} type="instagram" />
    </>
  );
}

export default App;
