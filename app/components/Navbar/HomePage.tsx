"use client";

import React, { useState, useEffect, useRef } from "react";
import { Anchor, Drawer, Typography } from "antd";
import styles from "./homepage.module.css";
import { MenuOutlined, CloseCircleOutlined } from "@ant-design/icons";
import Intro from "../Intro/Intro";
import { About } from "../About/About";
import { Expericence } from "../Experience/Expericence";
import { Project } from "../Projects/Project";
import { Contact } from "../Contact/Contact";
import { ShapesChanger } from "../Shapes/ShapesChanger";

const { Text, Link, Title } = Typography;

interface MenuItem {
  key: string;
  title: string;
  path: string;
}

const navBarMenu: MenuItem[] = [
  {
    key: "part-1",
    title: "",
    path: "#home",
  },
  {
    key: "part-2",
    title: "About Me",
    path: "#about-me",
  },
  {
    key: "part-3",
    title: "Expericence ",
    path: "#expericence",
  },

  {
    key: "part-4",
    title: "projects",
    path: "#projects",
  },
  {
    key: "part-5",
    title: "contact",
    path: "#contact",
  },
];

const HomePage: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [skillArives, setSkillArives] = useState(false);
  const [contactClick, setContactClick] = useState<boolean>(false);

  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768); // Adjust the breakpoint as needed

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(true);
  };

  const onClose = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const experienceSection = document.getElementById("part-3");
      if (experienceSection) {
        const rect = experienceSection.getBoundingClientRect();
        const isPartiallyVisible =
          rect.top <= window.innerHeight && rect.bottom >= 0;
        setSkillArives(isPartiallyVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const contactRef = useRef(null);
  const handleIntroClick = () => {
    if (contactRef.current) {
      (contactRef.current as HTMLDivElement).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <div className={styles.navContainer}>
        <div
          style={{
            position: "relative",
          }}
        >
          <ShapesChanger />
          <Text
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            className={styles.logo}
          >
            {" "}
            Umair
          </Text>
        </div>

        <div
          onClick={toggleMenu}
          style={{ cursor: "pointer" }}
          className={styles.MenuIcon}
        >
          <MenuOutlined style={{ fontSize: "24px", color: "black" }} />
        </div>

        <div className={styles.anchorContainer}>
          <Anchor
            direction="horizontal"
            className={styles.anchors}
            style={{ color: "black", textDecoration: "none" }}
            items={[
              {
                key: "part-1",
                href: "#home",
                title: "",
              },
              {
                key: "part-2",
                href: "#about-me",
                title: "About me",
              },
              {
                key: "part-3",
                href: "#expericence",
                title: "Experience",
              },
              {
                key: "part-4",
                href: "#projects",
                title: "Projects",
              },
              {
                key: "part-5",
                href: "#contact",
                title: "Contact",
              },
            ]}
          />
        </div>
      </div>

      <Drawer
        placement="left"
        onClose={onClose}
        open={menuOpen}
        className={styles.customDrawer}
        width="70%"
        // style={{ background: "transparent" }}
        headerStyle={{ textAlign: "center" }} // Center the header content
        closeIcon={
          <CloseCircleOutlined
            style={{
              position: "absolute",
              top: "5%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "24px",
              cursor: "pointer",
            }}
            onClick={onClose}
          />
        }
      >
        <div className={styles.NavBarMenus}>
          {navBarMenu.map((menu) => {
            return (
              <a key={menu.key} href={menu.path} onClick={onClose}>
                {menu.title}
              </a>
            );
          })}
        </div>
      </Drawer>

      <div
        style={
          {
            // marginTop: "100px",
          }
        }
      >
        <div
          id="home"
          style={{
            textAlign: "center",
            // background: "lightcyan",
          }}
          className={styles.Intro}
        >
          <Intro onClick={handleIntroClick} />
        </div>
        <div
          id="about-me"
          style={{
            width: "100vw",
            height: "100vh",
            textAlign: "center",
            // background: "lightPink",
          }}
        >
          <About />
        </div>
        <div
          id="expericence"
          style={{
            width: "100vw",
            height: "100vh",
            textAlign: "center",
          }}
          className={styles.Skills}
        >
          <Expericence skillArives={skillArives} />
        </div>
        <div
          id="projects"
          style={{
            width: "100vw",
            height: "100vh",
            textAlign: "center",

            marginTop: isMobileView ? "300px" : "150px",
          }}
        >
          <Project />
        </div>
        <div
          id="contact"
          style={{
            width: "100vw",
            height: "80vh",
            textAlign: "center",
            // background: "#DAE2B6",
          }}
          ref={contactRef}
        >
          <Contact />
        </div>
        {isMobileView && (
          <div
            style={{
              width: "100vw",
              height: "20vh",
              textAlign: "center",
              color: "black",
            }}
          >
            <Anchor
              direction="vertical"
              className={styles.anchors}
              style={{ color: "black", textDecoration: "none" }}
              items={[
                {
                  key: "part-1",
                  href: "#home",
                  title: "",
                },
                {
                  key: "part-2",
                  href: "#about-me",
                  title: "About-Me",
                },
                {
                  key: "part-3",
                  href: "#expericence",
                  title: "Experience",
                },
                {
                  key: "part-4",
                  href: "#projects",
                  title: "Projects",
                },
                {
                  key: "part-5",
                  href: "#contact",
                  title: "Contact",
                },
              ]}
            />
          </div>
        )}
        <div
          style={{
            textAlign: "center",
            color: "black",
          }}
        >
          Copyright © 2023{" "}
          <b
            style={{
              fontWeight: "700",
            }}
          >
            {" "}
            Mohammed Umair{" "}
          </b>{" "}
          . All Rights Reserved
        </div>
      </div>
    </>
  );
};

export default HomePage;
