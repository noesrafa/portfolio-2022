import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./projectPreview.css";

export default function ProjectPreview(Props) {
  const [icons, setIcons] = useState([]);
  let dirs = [];

  for (let i = 0; i < Props.icons.length; i++) {
    dirs.push(`${Props.icons[i]}`);
    //    dirs.push(`/icons/${Props.icons[i]}.svg`)
  }

  useEffect(() => {
    setIcons(dirs);
  }, []);

  return (
    <div className="preview">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          default: { duration: 0.5 },
        }}
        className="preview-header width-md"
      >
        <div className="preview-header__left">
          <p className="text-sm">{Props.name}</p>
          <h3>{Props.description}</h3>
        </div>
        <div className="preview-header__right">
          <p className="text-sm">{Props.category}</p>

          <div className="preview__icons">
            {icons.map((item) => (
              <div className="preview__icon" key={crypto.randomUUID()}>
                <img src={`/icons/${item}.svg`} alt="console" />
                <div className="tooltip-container">
                  <p className="tooltip">{item}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="preview-header__button">
            <a className="button-container">
              view process
              <img src="/icons/arrow-link.svg" alt="link" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* IMAGES */}
      <motion.div className="preview-images width-full">
        {Props.imgs.map((item) => (
          <motion.div
          
            key={crypto.randomUUID()}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              default: { duration: 1 },
              delay: 0.1,
            }}
          >
            <img src={`${item}`} alt="" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
