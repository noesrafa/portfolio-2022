import "./cards.css";
import Card from "./Card";
import { useEffect, useState } from "react";
import { motion, useViewportScroll } from "framer-motion";

export default function Cards() {
  return (
    <div className="cards-container">
      <div className="cards width-md">
        <div className="cards-header">
          <div className="cards-header__blob">
            <div className="blob-1">
              {" "}
              <img src="/icons/blob.svg" alt="blob" />{" "}
            </div>
            <div className="blob-2">
              {" "}
              <img src="/icons/blob2.svg" alt="blob" />{" "}
            </div>
          </div>
          <div className="cards-header__info">
            <motion.h3
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                default: { duration: .6 },
              }}
            >
              Saber de otros temas
              <br /> ayuda, {""} ¿No es así?
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                default: { duration: .6 },
                delay: 0.1,
              }}
            >
              <p>
                He tenido la oportunidad de trabajar en proyectos muy variados,
                desde diseño grafico hasta campañas de retail marketing.
              </p>
              <p>
                Espero con ansías la oportunidad de trabajar en el mundo IT.
              </p>
              <a href="#footer">¿Cuando empezamos?</a>
            </motion.div>
          </div>
        </div>
      </div>
      {/* SWIPER */}
      <motion.div className="slide-wrapper width-full">
        <div className="slide" data-id="1">
          <Card
            active
            icon={"/icons/display.svg"}
            title={"Front End"}
            description={
              "Desde un package.json vacio hasta una pagina con cientos de funcionalidades, lo puedo hacer⚡."
            }
            tools={["figma", "react", "javascript", "sass", "webpack"]}
          />
        </div>
        <div className="slide" data-id="2">
          <Card
            icon={"/icons/db.svg"}
            title={"Back End"}
            description={
              "Tengo solidas bases de html, css y js, ademas de conocimientos avanzados en herramientas de maquetación web"
            }
            tools={["figma", "react", "javascript", "sass", "webpack"]}
          />
        </div>
        <div className="slide" data-id="3">
          <Card
            icon={"/icons/user.svg"}
            title={"UX / UI"}
            description={
              "Tengo solidas bases de html, css y js, ademas de conocimientos avanzados en herramientas de maquetación web"
            }
            tools={["figma", "react", "javascript", "sass", "webpack"]}
          />
        </div>
        <div className="slide" data-id="4">
          <Card
            icon={"/icons/film.svg"}
            title={"Motion Design"}
            description={
              "Tengo solidas bases de html, css y js, ademas de conocimientos avanzados en herramientas de maquetación web"
            }
            tools={["figma", "react", "javascript", "sass", "webpack"]}
          />
        </div>
        <div className="slide" data-id="5">
          <Card
            icon={"/icons/box.svg"}
            title={"3D"}
            description={
              "Tengo solidas bases de html, css y js, ademas de conocimientos avanzados en herramientas de maquetación web"
            }
            tools={["figma", "react", "javascript", "sass", "webpack"]}
          />
        </div>
      </motion.div>
    </div>
  );
}
