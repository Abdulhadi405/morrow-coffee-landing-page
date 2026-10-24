import { useState } from 'react'
import {
  ArrowDownRight,
  ArrowUpRight,
  ChevronDown,
  Coffee,
  Menu as MenuIcon,
  MoveRight,
  X,
} from 'lucide-react'
import './App.css'

const menuItems = [
  { name: 'Honey Oat Latte', description: 'Espresso, toasted oat milk, wildflower honey', price: 'PKR 680', image: '/images/honey-oat-latte.jpg', alt: 'Honey oat latte with leaf-shaped latte art' },
  { name: 'Brown Sugar Flat White', description: 'Double espresso, brown sugar, silky milk', price: 'PKR 620', image: '/images/brown-sugar-flat-white.jpg', alt: 'Brown sugar flat white served with a spoon on a dark saucer' },
  { name: 'Morrow Cold Brew', description: 'Slow-steeped for a soft, chocolatey finish', price: 'PKR 550', image: '/images/morrow-cold-brew.jpg', alt: 'Iced cold brew on a café table beside a green planter' },
  { name: 'Butter Croissant', description: 'Golden, flaky, baked fresh each morning', price: 'PKR 420', image: '/images/butter-croissant.jpg', alt: 'Fresh butter croissant on a plate beside coffee' },
]

const faqs = [
  ['Do you serve decaf?', 'We do. Ask our barista for the decaf espresso of the day and we will make it just how you like it.'],
  ['Is the menu vegetarian-friendly?', 'Yes. Our food menu is vegetarian, with oat and dairy milk options available for every espresso drink.'],
  ['Can I work from Morrow?', 'Morrow is designed for slow conversations and quiet rituals. We welcome focused work during off-peak hours.'],
  ['Are the hours and prices real?', 'No. Morrow is a fictional portfolio concept. The menu, pricing, location, and opening hours shown here are illustrative.'],
]

function Mark() {
  return <span className="brand-mark" aria-hidden="true"><Coffee size={18} strokeWidth={1.5} /></span>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Morrow Coffee House home">
          <Mark />
          <span>Morrow<small>Coffee House</small></span>
        </a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-nav" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="sr-only">Toggle navigation</span>
          {menuOpen ? <X size={22} /> : <MenuIcon size={22} />}
        </button>
        <nav id="primary-nav" className={menuOpen ? 'primary-nav is-open' : 'primary-nav'} aria-label="Primary navigation">
          {['Menu', 'Our Story', 'Experience', 'Visit'].map((label) => (
            <a href={`#${label.toLowerCase().replace(' ', '-')}`} onClick={closeMenu} key={label}>{label}</a>
          ))}
          <a className="nav-cta" href="#visit" onClick={closeMenu}>Find your way <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-pad" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> A quiet place in the city</p>
            <h1>Make room<br /><em>for the morning.</em></h1>
            <p className="hero-intro">Thoughtful coffee, warm light, and a little more time for the everyday rituals that make a day feel like yours.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#menu">See the menu <ArrowDownRight size={17} /></a>
              <a className="text-link" href="#visit">Plan a visit <MoveRight size={17} /></a>
            </div>
          </div>
          <div className="hero-art">
            <img src="/images/hero-morning-coffee.jpg" alt="A cup of coffee in a pool of morning sunlight" width="1024" height="768" fetchPriority="high" />
            <div className="hero-note">Brewed slowly<br /><span>served warmly</span></div>
            <span className="art-caption">01 — morning ritual</span>
          </div>
        </section>

        <section className="marquee" aria-label="Morrow values">
          <span>Small rituals, made well</span><i>✳</i><span>Espresso &amp; conversation</span><i>✳</i><span>Take your time</span><i>✳</i>
        </section>

        <section className="menu-section section-pad" id="menu">
          <div className="section-heading">
            <div><p className="eyebrow"><span className="eyebrow-line" /> A good place to start</p><h2>Made for<br /><em>your pace.</em></h2></div>
            <p className="section-intro">A small menu of familiar things, considered carefully. Order something you know, or let us surprise you.</p>
          </div>
          <div className="menu-grid">
            {menuItems.map((item, index) => (
              <article className="menu-card" key={item.name}>
                <div className="menu-art"><img src={item.image} alt={item.alt} width="768" height="1024" loading="lazy" /><span className="card-number">0{index + 1}</span></div>
                <div className="menu-card-copy"><div><h3>{item.name}</h3><p>{item.description}</p></div><strong>{item.price}</strong></div>
              </article>
            ))}
          </div>
          <p className="concept-note">* Menu and prices are illustrative concept content.</p>
        </section>

        <section className="story-section section-pad" id="our-story">
          <div className="story-art"><div className="story-art-copy"><span>“</span><p>The best part of a morning is the part you choose to keep.</p></div><span className="art-caption">02 — the details matter</span></div>
          <div className="story-copy"><p className="eyebrow"><span className="eyebrow-line" /> Our story</p><h2>For the days<br />that <em>begin softly.</em></h2><p>We believe a good coffee house is less about rushing through and more about arriving. Morrow is an imagined corner for well-made coffee, familiar faces, and the gentle reset of a morning.</p><p>We keep the menu considered, the room warm, and the door open for wherever your day is headed next.</p><a className="text-link" href="#experience">Discover the feeling <MoveRight size={17} /></a></div>
        </section>

        <section className="experience-section" id="experience">
          <div className="experience-image"><img src="/images/cafe-atmosphere.jpg" alt="" width="768" height="1024" loading="lazy" /><div className="experience-label">Come as you are<br /><em>stay as long as you like.</em></div></div>
          <div className="experience-copy"><p className="eyebrow"><span className="eyebrow-line" /> The Morrow feeling</p><h2>A little<br /><em>off the clock.</em></h2><p>Natural light, honest materials, and a soundtrack that knows when to be quiet. A space for first sips, long talks, and the pause between one thing and the next.</p><a className="button button-outline" href="#visit">Come by sometime <ArrowUpRight size={16} /></a></div>
        </section>

        <section className="visit-section section-pad" id="visit">
          <div><p className="eyebrow"><span className="eyebrow-line" /> Visit us</p><h2>Find a slower<br /><em>kind of morning.</em></h2></div>
          <div className="visit-details"><div><span className="detail-label">A fictional address</span><p>Somewhere between<br />your first thought and<br />the rest of your day.</p></div><div><span className="detail-label">Illustrative hours</span><p>Mon — Fri &nbsp; 7:30 — 18:00<br />Sat — Sun &nbsp; 8:00 — 16:00</p></div><a className="button button-dark" href="#home">Back to the beginning <ArrowUpRight size={17} /></a></div>
          <p className="concept-note">Morrow Coffee House is a fictional portfolio concept. Location and hours are illustrative.</p>
        </section>

        <section className="faq-section section-pad" id="faq"><div className="faq-heading"><p className="eyebrow"><span className="eyebrow-line" /> Good to know</p><h2>Questions,<br /><em>answered.</em></h2></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown size={18} /></summary><p>{answer}</p></details>)}</div></section>

        <section className="closing-section"><p className="eyebrow"><span className="eyebrow-line" /> Until tomorrow</p><h2>There is always<br /><em>time for one more.</em></h2><a className="button button-cream" href="#menu">Choose your coffee <ArrowDownRight size={17} /></a></section>
      </main>

      <footer className="site-footer"><a className="wordmark" href="#home" aria-label="Morrow Coffee House home"><Mark /><span>Morrow<small>Coffee House</small></span></a><p>Made for slow mornings<br />and everything after.</p><div className="footer-links"><a href="#menu">Menu</a><a href="#our-story">Our story</a><a href="#visit">Visit</a></div><span className="footer-note">© 2026 Morrow — fictional portfolio concept</span><a className="portfolio-credit" href="https://abdulhadi.me" target="_blank" rel="noopener noreferrer">Designed &amp; built by Abdulhadi Tahir <ArrowUpRight size={13} aria-hidden="true" /></a></footer>
    </div>
  )
}

export default App
