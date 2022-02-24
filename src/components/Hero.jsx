import { motion, useViewportScroll } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero () {
      // SCROLL //
  const { scrollYProgress } = useViewportScroll();
  const [hookedYPostion, setHookedYPosition] = useState(0);

  useEffect(() => {
    scrollYProgress.onChange((v) => setHookedYPosition(v));
  }, [scrollYProgress]);

  const offset = hookedYPostion * -2000;
  // END SCROLL //

    return (
        <section className="hero">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", default: { duration: 1.2 } }}
            className="hero__name container-sm width-md"
          >
            <h2>rafael alexander.</h2>
          </motion.div>
          <motion.div
            className="hero__title container-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "spring",
              default: { duration: 0.7 },
              delay: 0.9,
            }}
          >
            <motion.p className="width-full" animate={{ x: offset }}>
              full stack <span>dev</span>
            </motion.p>
          </motion.div>
          <div className="hero__mobile mobile">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "spring",
                default: { duration: 0.7 },
                delay: 1.1,
              }}
            >
              <div className="blob-1">
                {" "}
                <img src="/icons/blob.svg" alt="blob" />{" "}
              </div>
              <div className="blob-2">
                {" "}
                <img src="/icons/blob2.svg" alt="blob" />{" "}
              </div>
            </motion.div>

            <motion.div
              className="hero__mobile-buttons"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                default: { duration: 1.2 },
                delay: 0.1,
              }}
            >
              <div className="mobile-buttons__left">
                <a
                  className="nav-item"
                  href="https://github.com/noesrafa"
                  target="_blank"
                >
                  <img src="/icons/console.svg" alt="console" />
                </a>
                <a
                  className="nav-item"
                  href="https://www.instagram.com/noesrafa/"
                  target="_blank"
                >
                  <img src="/icons/instagram.svg" alt="console" />
                </a>
                <a
                  className="nav-item"
                  href="https://www.linkedin.com/in/rafael-alexander-946702219/"
                  target="_blank"
                >
                  <img src="/icons/linkedin.svg" alt="console" />
                </a>
              </div>
              <div className="mobile-buttons__right">
                <a href="#footer" className="mobile-buttons__contactme">
                  contactame
                </a>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "inertia",
              default: { duration: .8 },
              delay: 0.2,
            }}
            className="hero__description container-sm width-md"
          >
            <div className="hero__description-left">
              <ul className="hero__list">
                <p className="text-sm aboutme">Sobre mí</p>
                <li>Soy una persona creativa y autodidacta.</li>
                <li>Trabajo rápido, me encanta lo que hago.</li>
                <li>Tengo una gran pasion por el diseño y la programación.</li>
                <li>
                  Tambien he trabajado en proyectos de motion graphics y
                  marketing.
                </li>
                <li>
                  {" "}
                  Para todo lo demas:{" "}
                  <a
                    href="https://www.linkedin.com/in/rafael-alexander-946702219/"
                    target="_blank"
                  >
                    Linkedin
                  </a>
                  ,{" "}
                  <a href="https://www.instagram.com/noesrafa/" target="_blank">
                    IG
                  </a>
                  ,{" "}
                  <a href="https://github.com/noesrafa" target="_blank">
                    Github.{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div className="hero__description-right nomobile">
              <div className="blob-1">
                {" "}
                <img src="/icons/blob.svg" alt="blob" />{" "}
              </div>
              <div className="blob-2">
                {" "}
                <img src="/icons/blob2.svg" alt="blob" />{" "}
              </div>
            </div>
          </motion.div>
          {/* Buttons */}
          <motion.div
            className="hero__buttons width-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              default: { duration: .4 },
              delay: 0.3,
            }}
          >
            <div>
              <a className="button-green" href='#projects'>
                ¿Tienes algo de tiempo? Vamos
                <img
                  src="/icons/arrow-down.svg"
                  alt="arrow"
                  className="arrow1"
                />
              </a>
            </div>
            <a className="nomobile button-purple" href='#footer'>Contactame</a>
          </motion.div>
        </section>
    )
}