import { useEffect, useState } from "react";

const INSTAGRAM_URL = "https://www.instagram.com/literarysociety_bmsit?stkn=MWpmMGM0eDByOHpxdA==";

const leadership = [
  { number: "01", role: "President", tone: "mustard" },
  { number: "02", role: "Secretary", tone: "violet" },
];

const openSeats = ["03", "04", "05", "06", "07", "08"];

function PortraitPlaceholder({ number }) {
  return (
    <div className="portrait-placeholder" aria-label="Portrait will be added later">
      <span aria-hidden="true">{number}</span>
      <small>Portrait<br />to be filed</small>
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
            <p className="eyebrow">The masthead · 2026–27</p>
            <h1 id="team-title">The people<br />between the lines.</h1>
          </div>
          <div className="team-hero-note">
            <span>Editorial note</span>
            <p>A literary society is made by the people who keep the room open, pass the microphone, and remember the next page.</p>
          </div>
        </section>

        <section className="leadership page-shell" aria-labelledby="leadership-title">
          <header className="team-section-heading">
            <p className="eyebrow">Office bearers · Volume 01</p>
            <h2 id="leadership-title">At the head<br />of the table.</h2>
            <p>Names and portraits will be added when the official team details are provided.</p>
          </header>
          <div className="leadership-grid">
            {leadership.map((member) => (
              <article className={`leader-card leader-${member.tone}`} key={member.role}>
                <PortraitPlaceholder number={member.number} />
                <div className="leader-copy">
                  <span className="member-number">Member file · {member.number}</span>
                  <p className="member-role">{member.role}</p>
                  <h3>Name to be added</h3>
                  <div className="member-lines" aria-hidden="true"><i /><i /><i /></div>
                  <p className="member-note">Portrait, introduction, and preferred credit awaiting the official team list.</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="team-directory" aria-labelledby="directory-title">
          <div className="page-shell">
            <header className="directory-heading">
              <p className="eyebrow">The rest of the masthead</p>
              <h2 id="directory-title">More voices<br />to be introduced.</h2>
              <p>These spaces are ready for the remaining roles, names, portraits, and short introductions.</p>
            </header>
            <div className="directory-grid">
              {openSeats.map((number) => (
                <article className="directory-card" key={number}>
                  <span>{number}</span>
                  <div><p>Role to be added</p><h3>Team member</h3></div>
                  <small>Awaiting details</small>
                </article>
              ))}
            </div>
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
