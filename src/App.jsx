import {useState, useEffect} from 'react'

import HomeImg from './assets/img/home.jpg'
import LogoImg1 from './assets/img/logo1.png'
import LogoImg2 from './assets/img/logo2.png'
import LogoImg3 from './assets/img/logo3.png'
import LogoImg4 from './assets/img/logo4.png'
import PopularImg1 from './assets/img/popular1.jpg'
import PopularImg2 from './assets/img/popular2.jpg'
import PopularImg3 from './assets/img/popular3.jpg'
import PopularImg4 from './assets/img/popular4.jpg'
import PopularImg5 from './assets/img/popular5.jpg'
import ValueImg from './assets/img/value.jpg'
import ContactImg from './assets/img/contact.png'

import {styled} from '@mui/material/styles'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'

const StyledAccordion = styled(Accordion)(({theme}) => ({
  backgroundColor: '#fff',
  border: '2px solid hsl(228, 99%, 98%)',
  borderRadius: '0.5rem',
  padding: '1rem 0.75rem',
  boxShadow: 'none',
  margin: 0,
  '&::before': {
    height: 0
  },
  '&.Mui-expanded': {
    margin: 0,
    boxShadow: '0 12px 32px hsla(228, 66%, 45%, 0.1)'
  }
}))

const StyledSummary = styled((props) => (
  <AccordionSummary
    expandIcon={<i className="bx bxs-down-arrow"></i>}
    {...props}
  />
))(({theme}) => ({
  margin: 0,
  minHeight: 'initial',
  '&.Mui-expanded': {
    minHeight: 'initial'
  },
  '& .MuiAccordionSummary-expandIconWrapper': {
    color: 'hsl(228, 66%, 53%)'
  },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(-180deg)'
  },
  '& .MuiAccordionSummary-content': {
    margin: 0
  },
  '& .MuiAccordionSummary-content.Mui-expanded': {
    margin: 0
  }
}))

const StyledDetails = styled(AccordionDetails)(({theme}) => ({
  padding: '1.25rem 1.25rem 0.5rem 1.25rem',
  [theme.breakpoints.up('md')]: {
    padding: '1.25rem 2rem 0.5rem 2rem'
  }
}))

const accordions = [
  {
    key: 'interest',
    icon: <i className="bx bxs-shield-x value__accordion-icon"></i>,
    title: 'Best interest rates on the market',
    description: 'Price we provide is the best for you, we guarantee no price changes on your property due to various unexpected costs that may come.'
  },
  {
    key: 'unstable',
    icon: <i className="bx bxs-x-square value__accordion-icon"></i>,
    title: 'Prevent unstable prices',
    description: 'Price we provide is the best for you, we guarantee no price changes on your property due to various unexpected costs that may come.'
  },
  {
    key: 'prices',
    icon: <i className="bx bxs-bar-chart-square value__accordion-icon"></i>,
    title: 'Best prices on the market ',
    description: 'Price we provide is the best for you, we guarantee no price changes on your property due to various unexpected costs that may come.'
  },
  {
    key: 'security',
    icon: <i className="bx bxs-check-square value__accordion-icon"></i>,
    title: 'Security of your data',
    description: 'Price we provide is the best for you, we guarantee no price changes on your property due to various unexpected costs that may come.'
  }
]

function App() {
  const [scrollHeader, setScrollHeader] = useState(false)
  const [expanded, setExpanded] = useState('panel1')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset
      if (scrollY >= 54) {
        setScrollHeader(true)
      } else {
        setScrollHeader(false)
      }
    }
    window.addEventListener("scroll", updateScrollDirection) // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection) // clean up
    }
  }, [scrollHeader])

  const swiper = new Swiper(".popular__container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlices: true,
    slidesPerView: 'auto',
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  })

  return (
    <div className="App">
      {/*==================== HEADER ====================*/}
      <header className={`${scrollHeader ? 'header scroll-header' : 'header'}`} id="header">
        <nav className="nav container">
          <a className="nav__logo" href="#home">
            REstate <i className="bx bxs-home-alt-2"></i>
          </a>

          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  <i className="bx bx-home-alt-2"></i>
                  <span>Home</span>
                </a>
              </li>
              <li className="nav__item">
                <a href="#popular" className="nav__link">
                  <i className="bx bx-building-house"></i>
                  <span>Residences</span>
                </a>
              </li>
              <li className="nav__item">
                <a href="#value" className="nav__link">
                  <i className="bx bx-award"></i>
                  <span>Value</span>
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i className="bx bx-phone"></i>
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>

          <a href="#" className="nav__button button">Subscribe</a>
        </nav>
      </header>

      {/*==================== MAIN ====================*/}
      <main className="main">
        {/*==================== HOME ====================*/}
        <section className="home section" id="home">
          <div className="home__container container grid">
            <div className="home__data">
              <h1 className="home__title">
                Discover <br/> Most Suitable <br/> Property
              </h1>

              <p className="home__description">
                Find a variety of properties that suit you very easily,
                forget all difficulties in finding a residence for you
              </p>

              <form action="" className="home__search">
                <i className='bx bxs-map'></i>
                <input type="search" placeholder="Search by location" className="home__search-input"/>
                <button className="button">Search</button>
              </form>

              <div className="home__value">
                <div>
                  <h1 className="home__value-number">
                    9K <span>+</span>
                  </h1>
                  <span className="home__value-description">
                    Premium <br/> Product
                  </span>
                </div>

                <div>
                  <h1 className="home__value-number">
                    2K <span>+</span>
                  </h1>
                  <span className="home__value-description">
                    Happy <br/> Customer
                  </span>
                </div>

                <div>
                  <h1 className="home__value-number">
                    28K <span>+</span>
                  </h1>
                  <span className="home__value-description">
                    Awards <br/> Winning
                  </span>
                </div>
              </div>
            </div>

            <div className="home__images">
              <div className="home__orbe"></div>
              <div className="home__img">
                <img src={HomeImg} alt=""/>
              </div>
            </div>
          </div>
        </section>

        {/*==================== LOGOS ====================*/}
        <section className="logos section">
          <div className="logos__container container grid">
            <div className="logos__img">
              <img src={LogoImg1} alt=""/>
            </div>
            <div className="logos__img">
              <img src={LogoImg2} alt=""/>
            </div>
            <div className="logos__img">
              <img src={LogoImg3} alt=""/>
            </div>
            <div className="logos__img">
              <img src={LogoImg4} alt=""/>
            </div>
          </div>
        </section>

        {/*==================== POPULAR ====================*/}
        <section className="section" id="popular">
          <div className="container">
            <span className="section__subtitle">Best Choice</span>
            <h2 className="section__title">
              Popular Residences<span>.</span>
            </h2>

            <div className="popular__container swiper">
              <div className="swiper-wrapper">
                <article className="popular__card swiper-slide">
                  <img className="popular__img" src={PopularImg1} alt=""/>

                  <div className="popular__data">
                    <h2 className="popular__price">
                      <span>$</span>66,356
                    </h2>
                    <h3 className="popular__title">
                      Garden City Assat
                    </h3>
                    <p className="popular__description">
                      Street The Garden City Of Miraflores, Lima - Perú Av. Sol #9876
                    </p>
                  </div>
                </article>

                <article className="popular__card swiper-slide">
                  <img className="popular__img" src={PopularImg2} alt=""/>

                  <div className="popular__data">
                    <h2 className="popular__price">
                      <span>$</span>35,159
                    </h2>
                    <h3 className="popular__title">
                      Gables Luxurious House
                    </h3>
                    <p className="popular__description">
                      Street The Garden City Of Miraflores, Lima - Perú Av. Sol #9876
                    </p>
                  </div>
                </article>

                <article className="popular__card swiper-slide">
                  <img className="popular__img" src={PopularImg3} alt=""/>

                  <div className="popular__data">
                    <h2 className="popular__price">
                      <span>$</span>75,043
                    </h2>
                    <h3 className="popular__title">
                      Garden Orchard City
                    </h3>
                    <p className="popular__description">
                      Street The Garden City Of Miraflores, Lima - Perú Av. Sol #9876
                    </p>
                  </div>
                </article>

                <article className="popular__card swiper-slide">
                  <img className="popular__img" src={PopularImg4} alt=""/>

                  <div className="popular__data">
                    <h2 className="popular__price">
                      <span>$</span>62,024
                    </h2>
                    <h3 className="popular__title">
                      Luxurious City Garden
                    </h3>
                    <p className="popular__description">
                      Street The Garden City Of Miraflores, Lima - Perú Av. Sol #9876
                    </p>
                  </div>
                </article>

                <article className="popular__card swiper-slide">
                  <img className="popular__img" src={PopularImg5} alt=""/>

                  <div className="popular__data">
                    <h2 className="popular__price">
                      <span>$</span>47,043
                    </h2>
                    <h3 className="popular__title">
                      Aliva Private Garden
                    </h3>
                    <p className="popular__description">
                      Street The Garden City Of Miraflores, Lima - Perú Av. Sol #9876
                    </p>
                  </div>
                </article>
              </div>
              <div className="swiper-button-next">
                <i className="bx bx-chevron-right"></i>
              </div>
              <div className="swiper-button-prev">
                <i className="bx bx-chevron-left"></i>
              </div>
            </div>
          </div>
        </section>

        {/*<==================== VALUE ====================*/}
        <section className="value section" id="value">
          <div className="value__container container grid">
            <div className="value__images">
              <div className="value__orbe"></div>
              <div className="value__img">
                <img src={ValueImg} alt=""/>
              </div>
            </div>

            <div className="value__content">
              <div className="value__data">
                <span className="section__subtitle">Our Value</span>
                <h2 className="section__title">Value We Give To You<span>.</span></h2>
                <p className="value__description">
                  We always ready to help by providing the best service for you.
                  We believe a good place to live can make your life better.
                </p>
              </div>

              <div className="value__accordion">
                {accordions.map((accordion, index) => (
                  <StyledAccordion
                    key={accordion.key}
                    expanded={expanded === `panel${index+1}`}
                    onChange={handleChange(`panel${index+1}`)}
                  >
                    <StyledSummary>
                      <div className="value__accordion-header">
                        {accordion.icon}
                        <h3 className="value__accordion-title">
                          {accordion.title}
                        </h3>
                      </div>
                    </StyledSummary>
                    <StyledDetails>
                      <p className="value__accordion-description">
                        {accordion.description}
                      </p>
                    </StyledDetails>
                  </StyledAccordion>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/*<==================== CONTACT ====================*/}
        <section className="contact section" id="contact">
          <div className="contact__container container grid">
            <div className="contact__images">
              <div className="contact__orbe"></div>
              <div className="contact__img">
                <img src={ContactImg} alt="" />
              </div>
            </div>

            <div className="contact__content">
              <div className="contact__data">
                <span className="section__subtitle">Contact Us</span>
                <h2 className="contact__title">
                  Easy to Contact us<span>.</span>
                </h2>
                <p className="contact__description">
                  Is there a problem finding your dream home? Need a
                  guide in buying first home? or need a consultation
                  on residential issues? just contact us.
                </p>
              </div>

              <div className="contact__card">
                <div className="contact__card-box">
                  <div className="contact__card-info">
                    <i className='bx bxs-phone-call'></i>
                    <div>
                      <h3 className="contact__card-title">
                        Call
                      </h3>
                      <p className="contact__card-description">
                        022.321.165.19
                      </p>
                    </div>
                  </div>
                  <a className="button contact__card-button" href="tel:02232116519">Call Now</a>
                </div>

                <div className="contact__card-box">
                  <div className="contact__card-info">
                    <i className='bx bxs-message-rounded-dots'></i>
                    <div>
                      <h3 className="contact__card-title">
                        Chat
                      </h3>
                      <p className="contact__card-description">
                        example@gmail.com
                      </p>
                    </div>
                  </div>
                  <a className="button contact__card-button" href="mailto:example@gmail.com">Chat Now</a>
                </div>

                <div className="contact__card-box">
                  <div className="contact__card-info">
                    <i className='bx bxs-video'></i>
                    <div>
                      <h3 className="contact__card-title">
                        Video Call
                      </h3>
                      <p className="contact__card-description">
                        022.321.165.19
                      </p>
                    </div>
                  </div>
                  <a className="button contact__card-button" href="#">Video Call Now</a>
                </div>

                <div className="contact__card-box">
                  <div className="contact__card-info">
                    <i className='bx bxs-envelope'></i>
                    <div>
                      <h3 className="contact__card-title">
                        Message
                      </h3>
                      <p className="contact__card-description">
                        022.321.165.19
                      </p>
                    </div>
                  </div>
                  <a className="button contact__card-button" href="mailto:some@gmail.com">Message Now</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*<==================== SUBSCRIBE ====================*/}
        <section className="subscribe section">
          <div className="subscribe__container container">
            <h1 className="subscribe__title">Get Started with REstate</h1>
            <p className="subscribe__description">
              Subscribe and find super attractive price
              quotes from us, Find your residence soon
            </p>
            <a className="button subscribe__button" href="#">Get Started</a>
          </div>
        </section>
      </main>

      {/*<==================== FOOTER ====================*/}
      <footer className="footer section">
        <div className="footer__container container grid">
          <div>
            <a className="footer__logo" href="#home">
              REstate <i className="bx bxs-home-alt-2"></i>
            </a>
            <p className="footer__description">
              Our vision is to make all people <br />
              the best place to live for them.
            </p>
          </div>

          <div className="footer__content">
            <div>
              <h3 className="footer__title">
                About
              </h3>
              <ul className="footer__links">
                <li>
                  <a className="footer__link" href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="footer__link" href="#">
                    Features
                  </a>
                </li>
                <li>
                  <a className="footer__link" href="#">
                    News & Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="footer__title">
                Company
              </h3>
              <ul className="footer__links">
                <li>
                  <a className="footer__link" href="#">
                    How We Work?
                  </a>
                </li>
                <li>
                  <a className="footer__link" href="#">
                    Capital
                  </a>
                </li>
                <li>
                  <a className="footer__link" href="#">
                    Security
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="footer__title">
                Support
              </h3>
              <ul className="footer__links">
                <li>
                  <a className="footer__link" href="#">
                    FAQs
                  </a>
                </li>
                <li>
                  <a className="footer__link" href="#">
                    Support center
                  </a>
                </li>
                <li>
                  <a className="footer__link" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="footer__title">
                Follow us
              </h3>
              <ul className="footer__social">
                <a className="footer__social-link" href="https://www.facebook.com/" target="_blank">
                  <i className='bx bxl-facebook-circle'></i>
                </a>
                <a className="footer__social-link" href="https://www.instagram.com/" target="_blank">
                  <i className='bx bxl-instagram-alt'></i>
                </a>
                <a className="footer__social-link" href="https://www.pinterest.com/" target="_blank">
                  <i className='bx bxl-pinterest'></i>
                </a>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__info container">
          <span className="footer__copy">
            &#169; REstate. All rigths reserved
          </span>

          <div className="footer__privacy">
            <a href="#">Terms & Agreements</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
