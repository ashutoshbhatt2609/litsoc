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

const marginQuotes = {
  hero: {
    id: "hero",
    number: "01",
    tone: "brick",
    quote: "No matter what anybody tells you, words and ideas can change the world.",
    source: "Dead Poets Society",
  },
  table: {
    id: "table",
    number: "02",
    tone: "violet",
    quote: "I am no bird; and no net ensnares me.",
    source: "Charlotte Brontë · Jane Eyre",
  },
  voices: {
    id: "voices",
    number: "03",
    tone: "mustard",
    quote: "There is nothing like looking, if you want to find something.",
    source: "J. R. R. Tolkien · The Hobbit",
  },
  shelf: {
    id: "shelf",
    number: "04",
    tone: "sage",
    quote: "The books that the world calls immoral are books that show the world its own shame.",
    source: "Oscar Wilde · The Picture of Dorian Gray",
  },
  archive: {
    id: "archive",
    number: "05",
    tone: "violet",
    quote: "So we beat on, boats against the current, borne back ceaselessly into the past.",
    source: "F. Scott Fitzgerald · The Great Gatsby",
  },
  people: {
    id: "people",
    number: "06",
    tone: "mustard",
    quote: "I'd rather take coffee than compliments just now.",
    source: "Louisa May Alcott · Little Women",
  },
};

const vintageCurios = {
  seal: {
    id: "seal",
    type: "seal",
    number: "I",
    title: "A promise sealed for the next gathering.",
    copy: "Bring one line you love, one question you cannot settle, and enough curiosity to stay after the ending.",
    label: "Break the LitSoc wax seal",
  },
  typewriter: {
    id: "typewriter",
    type: "typewriter",
    number: "II",
    title: "The page begins when somebody presses a key.",
    copy: "Drafts are welcome here. So are crossed-out beginnings, unfinished poems, and stories still looking for their final sentence.",
    label: "Press the antique typewriter keys",
  },
  library: {
    id: "library",
    type: "library",
    number: "III",
    title: "This story has no return date.",
    copy: "The best books keep circulating long after they leave our hands—in arguments, memories, and the people we become.",
    label: "Open the hidden library checkout card",
  },
  stamp: {
    id: "stamp",
    type: "stamp",
    number: "IV",
    title: "Postmarked from a future LitSoc evening.",
    copy: "The room is full, the projector is warm, and somebody has just read a line that makes everyone fall quiet.",
    label: "Open the vintage postage stamp",
  },
};

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

function QuoteEgg({ quote, onReveal }) {
  return (
    <div className={`quote-flight-lane quote-flight-${quote.tone}`}>
      <button
        className="quote-egg"
        type="button"
        style={{ "--flight-delay": `-${Number(quote.number) * 1.35}s`, "--flight-duration": `${9 + Number(quote.number) * 0.7}s` }}
        onClick={(event) => onReveal(quote, event)}
        aria-label={`Catch the birds to open hidden quote ${quote.number}`}
        title="Catch the birds to reveal a quote"
      >
        <span className="bird-flock" aria-hidden="true">
          <svg className="bird bird-one" viewBox="0 0 34 18"><path d="M2 13c5-7 10-7 15 0 5-7 10-7 15 0" /></svg>
          <svg className="bird bird-two" viewBox="0 0 34 18"><path d="M2 13c5-7 10-7 15 0 5-7 10-7 15 0" /></svg>
          <svg className="bird bird-three" viewBox="0 0 34 18"><path d="M2 13c5-7 10-7 15 0 5-7 10-7 15 0" /></svg>
        </span>
        <span className="bird-whisper">catch a thought</span>
      </button>
    </div>
  );
}

function QuoteDialog({ quote, foundCount, total, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (quote && !dialog.open) dialog.showModal();
    if (!quote && dialog.open) dialog.close();
  }, [quote]);

  return (
    <dialog
      className="quote-dialog"
      ref={dialogRef}
      aria-labelledby="quote-dialog-title"
      onClose={onClose}
      onClick={(event) => event.target === event.currentTarget && onClose()}
    >
      {quote && (
        <div className={`smoke-scene smoke-scene-${quote.tone}`}>
          <div className="smoke-puffs" aria-hidden="true">
            <span /><span /><span /><span /><span />
          </div>
          <article className={`quote-slip quote-slip-${quote.tone}`}>
            <button className="dialog-close" type="button" onClick={onClose} aria-label="Close hidden quote">×</button>
            <header className="quote-slip-header">
              <span>Carried in on the wind</span>
              <span>{foundCount} / {total} discovered</span>
            </header>
            <blockquote>
              <span className="quote-mark" aria-hidden="true">“</span>
              <p id="quote-dialog-title">{quote.quote}</p>
              <cite>{quote.source}</cite>
            </blockquote>
            <footer className="quote-slip-footer">
              <span>Cloud note no. {quote.number}</span>
              <button type="button" onClick={onClose}>Let it drift away <span aria-hidden="true">→</span></button>
            </footer>
          </article>
        </div>
      )}
    </dialog>
  );
}

function VintageEgg({ curio, onReveal }) {
  return (
    <button
      className={`vintage-egg vintage-egg-${curio.type}`}
      type="button"
      onClick={(event) => onReveal(curio, event)}
      aria-label={curio.label}
      title={curio.label}
    >
      {curio.type === "seal" && <><span className="seal-rim" aria-hidden="true">LS</span><span className="egg-caption">Break seal</span></>}
      {curio.type === "typewriter" && <><span className="typewriter-keys" aria-hidden="true"><i>L</i><i>I</i><i>T</i></span><span className="egg-caption">Press the keys</span></>}
      {curio.type === "library" && <><span className="library-lines" aria-hidden="true"><b>EX LIBRIS</b><i /><i /><i /></span><span className="egg-caption">Check the card</span></>}
      {curio.type === "stamp" && <><span className="stamp-face" aria-hidden="true"><b>3P</b><i>LITSOC</i></span><span className="egg-caption">Open post</span></>}
    </button>
  );
}

function CurioDialog({ curio, foundCount, total, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (curio && !dialog.open) dialog.showModal();
    if (!curio && dialog.open) dialog.close();
  }, [curio]);

  return (
    <dialog
      className="curio-dialog"
      ref={dialogRef}
      aria-labelledby="curio-dialog-title"
      onClose={onClose}
      onClick={(event) => event.target === event.currentTarget && onClose()}
    >
      {curio && (
        <article className={`curio-paper curio-paper-${curio.type}`}>
          <button className="dialog-close" type="button" onClick={onClose} aria-label="Close vintage discovery">×</button>
          <header className="curio-header">
            <span>LitSoc cabinet of curiosities · {curio.number}</span>
            <span>{foundCount} / {total} found</span>
          </header>
          <div className={`curio-emblem curio-emblem-${curio.type}`} aria-hidden="true">
            {curio.type === "seal" && "LS"}
            {curio.type === "typewriter" && "L I T"}
            {curio.type === "library" && "EX LIBRIS"}
            {curio.type === "stamp" && "POST"}
          </div>
          <h2 id="curio-dialog-title">{curio.title}</h2>
          <p>{curio.copy}</p>
          <footer className="curio-footer">
            <span>Object no. {curio.number}</span>
            <button type="button" onClick={onClose}>Return it carefully <span aria-hidden="true">→</span></button>
          </footer>
        </article>
      )}
    </dialog>
  );
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
  const [activeQuote, setActiveQuote] = useState(null);
  const [foundQuotes, setFoundQuotes] = useState([]);
  const [activeCurio, setActiveCurio] = useState(null);
  const [foundCurios, setFoundCurios] = useState([]);
  const lastTrigger = useRef(null);
  const quoteTrigger = useRef(null);
  const curioTrigger = useRef(null);
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

  const revealQuote = (quote, event) => {
    quoteTrigger.current = event?.currentTarget ?? null;
    setFoundQuotes((found) => found.includes(quote.id) ? found : [...found, quote.id]);
    setActiveQuote(quote);
  };

  const closeQuote = () => {
    setActiveQuote(null);
    window.setTimeout(() => quoteTrigger.current?.focus(), 0);
  };

  const revealCurio = (curio, event) => {
    curioTrigger.current = event?.currentTarget ?? null;
    setFoundCurios((found) => found.includes(curio.id) ? found : [...found, curio.id]);
    setActiveCurio(curio);
  };

  const closeCurio = () => {
    setActiveCurio(null);
    window.setTimeout(() => curioTrigger.current?.focus(), 0);
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
            <QuoteEgg quote={marginQuotes.hero} onReveal={revealQuote} />
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
              <QuoteEgg quote={marginQuotes.table} onReveal={revealQuote} />
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
                <span className="stamp">Notice</span><h3>Have an idea for a session?</h3><p>Bring a book, film, theme, poem, or question you think the community should explore.</p><VintageEgg curio={vintageCurios.seal} onReveal={revealCurio} /><a className="text-link" href="#join"><LinkArrow>Write to LitSoc</LinkArrow></a>
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
              <QuoteEgg quote={marginQuotes.voices} onReveal={revealQuote} />
            </article>
            <aside className="departments-list reveal" aria-label="Creative work categories">
              <p className="eyebrow">Inside the section</p>
              <ol>{["Poetry", "Short prose", "Book notes", "Film reflections"].map((item, index) => <li key={item}><span>0{index + 1}</span><strong>{item}</strong></li>)}</ol>
              <VintageEgg curio={vintageCurios.typewriter} onReveal={revealCurio} />
            </aside>
          </div>
          <div className="book-shelf reveal" aria-labelledby="books-title">
            <div className="book-shelf-intro"><p className="eyebrow">Shelf notes · Four places to begin</p><h3 id="books-title">Books worth carrying around.</h3><p>Four very different reads for a future session, a long bus ride, or an argument with a friend.</p><QuoteEgg quote={marginQuotes.shelf} onReveal={revealQuote} /></div>
            {books.map(([tone, number, title, author, note], index) => <article className={`book-card ${tone}`} key={title}><span>{number}</span><h4>{title}</h4><p>{author}</p><small>{note}</small>{index === 2 && <VintageEgg curio={vintageCurios.library} onReveal={revealCurio} />}</article>)}
          </div>
        </section>

        <section className="quote-edition" aria-labelledby="quotes-title">
          <div className="page-shell">
            <div className="quote-heading reveal"><p className="eyebrow">Lines we return to · Books &amp; cinema</p><h2 id="quotes-title">Underlined.</h2></div>
            <div className="quote-grid">{quotes.map(([feature, quote, source]) => <blockquote className={`quote-card ${feature} reveal`} key={source}><p>{quote}</p><cite>{source}</cite></blockquote>)}</div>
          </div>
        </section>

        <section className="archive page-shell" id="moments" aria-labelledby="archive-title">
          <div className="archive-title reveal"><div><p className="eyebrow">The archive · Recent moments</p><QuoteEgg quote={marginQuotes.archive} onReveal={revealQuote} /></div><h2 id="archive-title">To be collected,<br />captioned &amp; remembered.</h2></div>
          <div className="archive-strip" aria-label="Future LitSoc event archive">{archiveCards.map(([tone, frame, title, copy]) => <article className={`archive-card ${tone} reveal`} key={frame}><span>{frame}</span><strong>{title}</strong><p>{copy}</p></article>)}</div>
          <div className="archive-caption-row"><p className="archive-caption">Real LitSoc photographs will replace these typographic archive cards when supplied.</p><VintageEgg curio={vintageCurios.stamp} onReveal={revealCurio} /></div>
        </section>

        <section className="about" id="about" aria-labelledby="about-title">
          <div className="page-shell about-grid">
            <div className="reveal"><p className="eyebrow">About the society</p><h2 id="about-title">Literature lives<br />between people.</h2></div>
            <div className="about-copy reveal"><p>LitSoc is the Literary Society of BMSIT: a student community for books, cinema, poetry, writing, and the conversations they begin.</p><p>We gather to read closely, watch curiously, speak honestly, and make space for new voices across campus.</p><QuoteEgg quote={marginQuotes.people} onReveal={revealQuote} /><a className="text-link light-link" href="#join"><LinkArrow>Meet us in the next issue</LinkArrow></a></div>
          </div>
        </section>

        <section className="join page-shell" id="join" aria-labelledby="join-title">
          <div className="classified reveal">
            <header className="classified-header">
              <div>
                <p className="eyebrow">The membership desk · Open to every curious mind</p>
                <h2 className="classified-title" id="join-title">Come into<br />the circle.</h2>
              </div>
              <p className="classified-intro">Whether you read every week or only remember a line from a film, there is a place for you at LitSoc.</p>
            </header>

            <div className="community-grid">
              <article className="community-card whatsapp-card">
                <div className="community-card-top">
                  <span>01 · Community</span>
                  <span className="channel-label">Join the club</span>
                </div>
                <span className="community-number" aria-hidden="true">01</span>
                <div className="community-card-copy">
                  <p className="eyebrow">Our main noticeboard</p>
                  <h3>Join the WhatsApp community.</h3>
                  <p>Hear about screenings, book sessions, open mics, and ways to help shape the next LitSoc gathering.</p>
                </div>
                <button className="button button-dark" type="button" onClick={(event) => openDialog("join", event)}>View invite &amp; QR</button>
              </article>

              <article className="community-card instagram-card">
                <div className="community-card-top">
                  <span>02 · Dispatches</span>
                  <span className="channel-label">Follow along</span>
                </div>
                <span className="community-number" aria-hidden="true">02</span>
                <div className="community-card-copy">
                  <p className="eyebrow">Posters &amp; moments</p>
                  <h3>Follow LitSoc on Instagram.</h3>
                  <p>Find event posters, reminders, reading recommendations, and glimpses from every gathering.</p>
                </div>
                <button className="button button-dark" type="button" onClick={(event) => openDialog("instagram", event)}>View profile &amp; QR</button>
              </article>
            </div>

            <footer className="classified-footer">
              <span>Membership costs nothing.</span>
              <span>Curiosity is the only requirement.</span>
            </footer>
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
      <QuoteDialog quote={activeQuote} foundCount={foundQuotes.length} total={Object.keys(marginQuotes).length} onClose={closeQuote} />
      <CurioDialog curio={activeCurio} foundCount={foundCurios.length} total={Object.keys(vintageCurios).length} onClose={closeCurio} />
    </>
  );
}

export default App;
