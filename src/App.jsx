import { useState } from 'react'
import './App.css'

const services = [
{
time: '8:00 AM – 9:00 AM',
title: 'Sunday School',
description:
'A dedicated time for children to learn the Word of God and grow in faith.',
icon: '✦',
},
{
time: '10:00 AM – 12:00 PM',
title: 'Sunday Worship Service',
description:
'Join our church family for worship, prayer, fellowship and the teaching of God’s Word.',
icon: '✝',
},
{
time: 'Saturday · 2:00 PM – 5:00 PM',
title: 'Choir Practice',
description:
'A time of musical preparation, unity and praise through songs.',
icon: '♫',
},
]

const choirVideos = [
  {
    id: '-WdTmYVekS8',
    title: 'OYOE KOSULDA',
    artist: 'Samutet A.I.C Samutet Choir',
  },
  {
    id: 'PCCu4ibIsIw',
    title: 'NGANY ORITAB SOBONDANYUN',
    artist: 'A.I.C Samutet Choir',
  },
  {
    id: 'x0MygeXxDQk',
    title: "KIMI NG'OLIOT",
    artist: 'A.I.C Samutet Choir',
  },
]

function App() {
    const [activeVideo, setActiveVideo] = useState(choirVideos[0])
  const [isPlaying, setIsPlaying] = useState(false)
return (
<> <header className="site-header"> <a className="brand" href="#home" aria-label="Samutet A.I.C Church home"> <span className="brand-mark">✝</span> <span className="brand-name"> <strong>Samutet A.I.C</strong> <small>CHURCH · KERICHO, KENYA</small> </span> </a>

    <nav className="main-nav" aria-label="Main navigation">
      <a href="#home">Home</a>
      <a href="#about">About Us</a>
      <a href="#services">Services</a>
      <a href="#choir">Our Choir</a>
      <a href="#youth">Youth</a>
      <a href="#contact" className="nav-contact">
        Visit Us <span>↗</span>
      </a>
    </nav>
  </header>

  <main>
    <section className="hero-section" id="home">
      <div className="hero-pattern" aria-hidden="true" />

      <div className="hero-content">
        <span className="eyebrow">
          <span className="eyebrow-line" />
          WELCOME TO OUR CHURCH
        </span>

        <h1>
          A place of faith.
          <br />
          A family in <span>Christ.</span>
        </h1>

        <p className="hero-description">
          Welcome to Samutet A.I.C Church, a Christian community in
          Samutet village, Kericho County. Come worship with us, grow in
          faith and experience the joy of fellowship.
        </p>

        <div className="hero-actions">
          <a href="#services" className="button button-gold">
            Join Us for Worship <span>→</span>
          </a>
          <a href="#about" className="button button-outline">
            Discover Our Church
          </a>
        </div>

        <div className="hero-note">
          <span className="note-icon">✦</span>
          <p>
            <strong>All are welcome.</strong>
            <br />
            Come as you are. Worship with us.
          </p>
        </div>
      </div>

      <div className="hero-visual" aria-label="Church welcome illustration">
        <div className="visual-orbit orbit-one" />
        <div className="visual-orbit orbit-two" />

        <div className="cross-emblem">
          <span>✝</span>
        </div>

        <div className="visual-verse">
          <span className="verse-label">OUR HEART VERSE</span>
          <p>
            “But the LORD is in his holy temple: let all the earth keep
            silence before him.”
          </p>
          <strong>HABAKKUK 2:20 · KJV</strong>
        </div>

        <span className="floating-star star-one">✦</span>
        <span className="floating-star star-two">✧</span>
      </div>

      <div className="hero-bottom">
        <span>SAMUTET VILLAGE</span>
        <span className="bottom-divider" />
        <span>SITOTWET LOCATION</span>
        <span className="bottom-divider" />
        <span>KERICHO COUNTY, KENYA</span>
      </div>
    </section>

    <section className="welcome-strip">
      <div>
        <span className="strip-icon">✝</span>
        <p>
          <strong>Faith</strong>
          <span>Rooted in God's Word</span>
        </p>
      </div>
      <div>
        <span className="strip-icon">♡</span>
        <p>
          <strong>Fellowship</strong>
          <span>Growing together in Christ</span>
        </p>
      </div>
      <div>
        <span className="strip-icon">♫</span>
        <p>
          <strong>Worship</strong>
          <span>Giving praise through song</span>
        </p>
      </div>
    </section>

    <section className="section about-section" id="about">
      <div className="section-heading">
        <span className="eyebrow">GET TO KNOW US</span>
        <h2>
          A church family,
          <br />
          <span>united in faith.</span>
        </h2>
      </div>

      <div className="about-copy">
        <p>
          Samutet A.I.C Church is an African Inland Church congregation
          serving the community of Samutet village in Kericho County,
          Kenya.
        </p>
        <p>
          We welcome individuals and families to join us for worship,
          fellowship, prayer and the study of God's Word. Whether you are
          visiting for the first time or looking for a church family, we
          look forward to welcoming you.
        </p>
        <a href="#contact" className="text-link">
          Plan your visit <span>→</span>
        </a>
      </div>
    </section>

    <section className="scripture-section">
      <span className="scripture-cross">✝</span>
      <span className="eyebrow">A VERSE CLOSE TO OUR HEARTS</span>
      <blockquote>
        “But the LORD is in his holy temple: let all the earth keep silence
        before him.”
      </blockquote>
      <p>HABAKKUK 2:20 · KING JAMES VERSION</p>
    </section>

    <section className="section services-section" id="services">
      <div className="section-heading centered-heading">
        <span className="eyebrow">WORSHIP WITH US</span>
        <h2>
          There is a place
          <br />
          <span>for you here.</span>
        </h2>
        <p>
          Make time for worship, learning and fellowship throughout the
          week.
        </p>
      </div>

      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <div className="service-icon">{service.icon}</div>
            <span className="service-time">{service.time}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>

      <p className="schedule-note">
        Please contact the church if you need to confirm a service time.
      </p>
    </section>

    <section className="choir-section choir-showcase" id="choir">
  <div className="choir-decoration" aria-hidden="true">
    <span>♫</span>
    <span>♪</span>
    <span>♫</span>
  </div>

  <div className="choir-intro">
    <span className="eyebrow">PRAISE THROUGH MUSIC</span>

    <h2>
      Songs that lift
      <br />
      <span>the heart.</span>
    </h2>

    <p>
      Experience songs of praise and worship shared through the choir's
      musical performances. Take a moment to listen, reflect and worship
      with us.
    </p>

    <div className="choir-director">
      Choir Director
      <strong>Marry Bett</strong>
    </div>
  </div>

  <div className="choir-gallery">
    <div className="featured-video-card">
      <div className="video-frame">
        {isPlaying ? (
          <iframe
            key={activeVideo.id}
            src={`https://www.youtube-nocookie.com/embed/${activeVideo.id}?autoplay=1&rel=0`}
            title={activeVideo.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            className="video-preview"
            onClick={() => setIsPlaying(true)}
            style={{
              backgroundImage: `url(https://i.ytimg.com/vi/${activeVideo.id}/hqdefault.jpg)`,
            }}
            aria-label={`Play ${activeVideo.title}`}
          >
            <span className="video-preview-shade" />

            <span className="youtube-play-button" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>

            <span className="preview-label">
              <span className="live-dot" />
              PLAY CHOIR PERFORMANCE
            </span>
          </button>
        )}
      </div>

      <div className="featured-video-info">
        <div>
          <span className="video-category">FEATURED PERFORMANCE</span>
          <h3>{activeVideo.title}</h3>
        </div>

        <a
          href={`https://www.youtube.com/watch?v=${activeVideo.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="video-external-link"
          aria-label={`Watch ${activeVideo.title} on YouTube`}
        >
          ↗
        </a>
      </div>
    </div>

    <div className="more-videos">
      <div className="video-list-heading">
        <div>
          <span className="video-category">MORE FROM THE CHOIR</span>
          <h3>Explore our performances</h3>
        </div>

        <span className="video-count">03 VIDEOS</span>
      </div>

      <div className="video-card-list">
        {choirVideos
          .filter((video) => video.id !== activeVideo.id)
          .map((video, index) => (
            <button
              type="button"
              className="choir-video-card"
              key={video.id}
              onClick={() => {
                setActiveVideo(video)
                setIsPlaying(false)
              }}
              aria-label={`Select ${video.title}`}
            >
              <span
                className="video-thumbnail"
                style={{
                  backgroundImage: `url(https://i.ytimg.com/vi/${video.id}/hqdefault.jpg)`,
                }}
              >
                <span className="small-play-button" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </span>

              <span className="video-card-details">
                <span className="video-card-number">
                  PERFORMANCE 0{index + 2}
                </span>

                <strong>{video.title}</strong>

                <span className="video-card-action">
                  Watch performance <span>→</span>
                </span>
              </span>
            </button>
          ))}
      </div>
    </div>
  </div>

  <div className="choir-footer">
    <p>
      <span className="choir-footer-icon">♫</span>
      Let music bring us together in worship.
    </p>

    <a
      href="https://youtube.com/@maurinechepkemoi2792?si=aaQ86HSP644mcs35"
      target="_blank"
      rel="noopener noreferrer"
      className="youtube-channel-button"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
      </svg>

      Explore Our Choir on YouTube

      <span>↗</span>
    </a>
  </div>
</section>

    <section className="section youth-section" id="youth">
      <div className="youth-symbol" aria-hidden="true">
        <span>✦</span>
        <span>✝</span>
        <span>✦</span>
      </div>

      <div className="youth-content">
        <span className="eyebrow">FAITH · FRIENDSHIP · SERVICE</span>
        <h2>
          Young people,
          <br />
          <span>living with purpose.</span>
        </h2>
        <p>
          The young people connected with Samutet are part of the wider
          Sitotwet Christian Youth Association (CYA), creating
          opportunities for Christian fellowship, spiritual growth and
          service within the community.
        </p>
        <a href="#contact" className="text-link">
          Ask about youth activities <span>→</span>
        </a>
      </div>
    </section>

    <section className="visit-section" id="contact">
      <div className="visit-content">
        <span className="eyebrow">WE WOULD LOVE TO WELCOME YOU</span>
        <h2>
          Your next Sunday
          <br />
          <span>starts here.</span>
        </h2>
        <p>
          Come and worship with us at Samutet A.I.C Church. We look forward
          to meeting you and sharing fellowship together.
        </p>

        <div className="contact-details">
          <div className="contact-item">
            <span className="contact-icon">⌖</span>
            <div>
              <strong>Our Location</strong>
              <p>
                Samutet village, Sitotwet Location,
                <br />
                Kapsoit Ward, Kericho County, Kenya.
              </p>
              <small>Near Samutet Primary School and Samutet Dispensary</small>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon">☎</span>
            <div>
              <strong>Church Contact</strong>
              <p>Pastor Isaiah</p>
              <a href="tel:0700000000">0700 000 000</a>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon">◷</span>
            <div>
              <strong>Sunday Worship</strong>
              <p>Sunday · 10:00 AM – 12:00 PM</p>
            </div>
          </div>
        </div>

        <a
          href="https://www.google.com/maps/search/?api=1&query=M5RH%2BPCX%2C+Kaitui%2C+Kenya"
          target="_blank"
          rel="noreferrer"
          className="button button-gold"
        >
          Get Directions <span>↗</span>
        </a>
      </div>

      <div className="map-card">
        <div className="map-grid" aria-hidden="true">
          <span className="map-road road-one" />
          <span className="map-road road-two" />
          <span className="map-road road-three" />
          <span className="map-road road-four" />
          <span className="map-park park-one" />
          <span className="map-park park-two" />
        </div>
        <div className="map-pin">
          <span>✝</span>
        </div>
        <div className="map-label">
          <strong>Samutet A.I.C Church</strong>
          <span>Samutet village, Kericho County</span>
        </div>
        <a
          href="https://www.google.com/maps/search/?api=1&query=M5RH%2BPCX%2C+Kaitui%2C+Kenya"
          target="_blank"
          rel="noreferrer"
          className="map-open"
        >
          Open in Google Maps ↗
        </a>
      </div>
    </section>
  </main>

  <footer className="site-footer">
    <a className="brand footer-brand" href="#home">
      <span className="brand-mark">✝</span>
      <span className="brand-name">
        <strong>Samutet A.I.C</strong>
        <small>CHURCH · KERICHO, KENYA</small>
      </span>
    </a>

    <p>Rooted in faith. United in Christ. Welcoming all.</p>

    <div className="footer-bottom">
      <span>© {new Date().getFullYear()} Samutet A.I.C Church</span>
      <a href="#home">Back to top ↑</a>
    </div>
  </footer>
</>

)
}

export default App

