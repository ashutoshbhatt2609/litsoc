import { useEffect, useState } from "react";

const INSTAGRAM_URL = "https://www.instagram.com/literarysociety_bmsit?stkn=MWpmMGM0eDByOHpxdA==";

const teamMembers = [
  { number: "01", role: "President", tone: "mustard" },
  { number: "02", role: "Secretary", tone: "violet" },
  { number: "03", role: "Role to be added", tone: "sage" },
  { number: "04", role: "Role to be added", tone: "brick" },
  { number: "05", role: "Role to be added", tone: "paper" },
  { number: "06", role: "Role to be added", tone: "mustard" },
  { number: "07", role: "Role to be added", tone: "violet" },
  { number: "08", role: "Role to be added", tone: "sage" },
];

function PortraitPlaceholder({ number }) {
  return (
    <div className="wanted-photo" aria-label="Portrait will be added later">
      <span className="wanted-silhouette" aria-hidden="true"><i /><b /></span>
      <small>Photograph forthcoming</small>
      <em aria-hidden="true">File {number}</em>
    </div>
  );
}

function TeamPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="team-page">
      <a className="skip-link" href="#team-main">Skip to content</a>
      <header className="site-header" id="home">
        <div className="issue-line page-shell">
          <span>The Literary Society of BMSIT</span>
          <span>People · Edition 01</span>
          <span>Est. for curious minds</span>
        </div>
        <div className="masthead page-shell team-masthead">
          <a className="wordmark" href="/" aria-label="LitSoc home">
            <span className="wordmark-kicker">The</span>
            <span className="wordmark-main">LITSOC</span>
            <span className="wordmark-kicker">Gazette</span>
          </a>
        </div>
        <div className="nav-wrap page-shell">
          <span className="mobile-menu-label" aria-hidden="true">Menu</span>
          <button className="menu-button" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="team-nav" onClick={() => setMenuOpen((value) => !value)}>
            <span className="menu-mark" aria-hidden="true" />
          </button>
          <nav className={`site-nav${menuOpen ? " is-open" : ""}`} id="team-nav" aria-label="Main navigation">
            <a href="/" onClick={closeMenu}>Home</a>
            <a href="/#upcoming" onClick={closeMenu}>Events</a>
            <a href="/#event-archive" onClick={closeMenu}>Archive</a>
            <a className="is-current" href="/team" aria-current="page" onClick={closeMenu}>Team</a>
            <a className="nav-join" href="/#join">Join LitSoc</a>
          </nav>
        </div>
      </header>

      <main id="team-main">
        <section className="team-hero page-shell" aria-labelledby="team-title">
          <div>
            <p className="eyebrow">The LitSoc files · 2026–27</p>
            <h1 id="team-title">Wanted:<br />people with words.</h1>
          </div>
          <div className="team-hero-note">
            <span>Editorial note</span>
            <p>A literary society is made by the people who keep the room open, pass the microphone, and remember the next page.</p>
          </div>
        </section>

        <section className="wanted-board page-shell" aria-labelledby="roster-title">
          <header className="team-section-heading">
            <p className="eyebrow">Official notice · Literary Society, BMSIT</p>
            <h2 id="roster-title">The people<br />behind the pages.</h2>
            <p>Each member gets an individual newspaper card. Names, portraits, and final roles will be added when the official team details arrive.</p>
          </header>
          <div className="wanted-grid">
            {teamMembers.map((member) => (
              <article className={`wanted-card wanted-${member.tone}`} key={member.number}>
                <header className="wanted-card-header">
                  <span>Wanted</span>
                  <small>Member file · {member.number}</small>
                </header>
                <PortraitPlaceholder number={member.number} />
                <div className="wanted-copy">
                  <p className="wanted-role">{member.role}</p>
                  <h3>Name to be added</h3>
                  <p className="wanted-note">Wanted for keeping stories, screenings, poems, and conversations in circulation.</p>
                </div>
                <footer><span>LitSoc Gazette</span><span>BMSIT · Bengaluru</span></footer>
              </article>
            ))}
          </div>
        </section>

        <section className="team-closing page-shell">
          <p className="eyebrow">A note in the margin</p>
          <blockquote>“No society is a single voice. It is a chorus learning when to speak—and when to listen.”</blockquote>
          <a className="button button-primary" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Follow the team on Instagram</a>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-shell footer-grid">
          <div><span className="footer-mark">LITSOC</span><p>The Literary Society of BMSIT</p></div>
          <div><p className="eyebrow">Directory</p><a href="/">Home</a><a href="/#upcoming">Events</a><a href="/#event-archive">Archive</a><a href="/team">Team</a></div>
          <div><p className="eyebrow">Colophon</p><p>Bengaluru, India</p><p>© 2026 LitSoc, BMSIT</p></div>
        </div>
      </footer>
    </div>
  );
}

export default TeamPage;
