import { useState, useEffect } from 'react'
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

function App() {
  const [scrollHeader, setScrollHeader] = useState(false)

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
                Discover <br /> Most Suitable <br /> Property
              </h1>

              <p className="home__description">
                Find a variety of properties that suit you very easily,
                forget all difficulties in finding a residence for you
              </p>

              <form action="" className="home__search">
                <i className='bx bxs-map'></i>
                <input type="search" placeholder="Search by location" className="home__search-input" />
                <button className="button">Search</button>
              </form>

              <div className="home__value">
                <div>
                  <h1 className="home__value-number">
                    9K <span>+</span>
                  </h1>
                  <span className="home__value-description">
                    Premium <br /> Product
                  </span>
                </div>

                <div>
                  <h1 className="home__value-number">
                    2K <span>+</span>
                  </h1>
                  <span className="home__value-description">
                    Happy <br /> Customer
                  </span>
                </div>

                <div>
                  <h1 className="home__value-number">
                    28K <span>+</span>
                  </h1>
                  <span className="home__value-description">
                    Awards <br /> Winning
                  </span>
                </div>
              </div>
            </div>

            <div className="home__images">
              <div className="home__orbe"></div>
              <div className="home__img">
                <img src={HomeImg} alt="" />
              </div>
            </div>
          </div>
        </section>

        {/*==================== LOGOS ====================*/}
        <section className="logos section">
          <div className="logos__container container grid">
            <div className="logos__img">
              <img src={LogoImg1} alt="" />
            </div>
            <div className="logos__img">
              <img src={LogoImg2} alt="" />
            </div>
            <div className="logos__img">
              <img src={LogoImg3} alt="" />
            </div>
            <div className="logos__img">
              <img src={LogoImg4} alt="" />
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
                  <img className="popular__img" src={PopularImg1} alt="" />

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
                  <img className="popular__img" src={PopularImg2} alt="" />

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
                  <img className="popular__img" src={PopularImg3} alt="" />

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
                  <img className="popular__img" src={PopularImg4} alt="" />

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
                  <img className="popular__img" src={PopularImg5} alt="" />

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

        </section>

        {/*<==================== CONTACT ====================*/}
        <section className="contact section" id="contact">

        </section>

        {/*<==================== SUBSCRIBE ====================*/}
        <section className="subscribe section">

        </section>
      </main>

      {/*<==================== FOOTER ====================*/}
      <footer className="footer section">

      </footer>
    </div>
  )
}

export default App
