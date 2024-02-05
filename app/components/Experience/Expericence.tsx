import React, { useEffect, useState } from "react";
import { Avatar, Card, Col, List, Row, Typography } from "antd";

// icons
import { FaReact } from "react-icons/fa";
import { SiMui, SiJest, SiPostman } from "react-icons/si";
import { BiLogoRedux } from "react-icons/bi";
import { BsBootstrap } from "react-icons/bs";
import { BsFiletypeHtml, BsFiletypeCss, BsFiletypeJson } from "react-icons/bs";
import { AiOutlineAntDesign } from "react-icons/ai";
import { FiGitlab } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { LiaBitbucket } from "react-icons/lia";
import { RiJavascriptLine } from "react-icons/ri";
import { LiaJira } from "react-icons/lia";
import { TbBrandTailwind, TbBrandTypescript } from "react-icons/tb";
import { LiaSourcetree } from "react-icons/lia";
// For Word file icon

import ProfileImage from "../../assest/profile.jpeg";
import Expere from "../../assest/quality.png";

import Education from "../../assest/images.png";


import Empoyee from "../../assest/employe.png";

import "./experience.css";

interface Props {
  skillArives: boolean;
}

const skillData = [
  {
    title: <FaReact />,
    per: "0",
  },
  {
    title: <BiLogoRedux />,

    per: "50",
  },
  {
    title: <RiJavascriptLine />,

    per: "100",
  },
  {
    title: <TbBrandTypescript />,

    per: "50",
  },
  {
    title: <BsFiletypeHtml />,

    per: "0",
  },
  {
    title: <BsFiletypeCss />,

    per: "100",
  },
  {
    title: <BsBootstrap />,

    per: "11",
  },
  {
    title: <SiMui />,

    per: "22",
  },
  {
    title: <AiOutlineAntDesign />,

    per: "70",
  },
  {
    title: <TbBrandTailwind />,

    per: "70",
  },
  {
    title: <BsFiletypeJson />,

    per: "70",
  },
  {
    title: <SiPostman />,

    per: "70",
  },
  {
    title: <LiaJira />,

    per: "70",
  },
  {
    title: <LiaSourcetree />,

    per: "70",
  },
  {
    title: <FiGithub />,

    per: "70",
  },
  {
    title: <FiGitlab />,

    per: "70",
  },
  {
    title: <LiaBitbucket />,

    per: "70",
  },
];

export const Expericence = (props: Props) => {
  const skills = props.skillArives;

  // console.log("skills", skills);
  const { Text, Title } = Typography;

  const empUrl = Empoyee.src;

  const [isMobile, setIsMobile] = useState(false);
  const [conditionMet, setConditionMet] = useState(false);

  useEffect(() => {
    // Simulate a condition being met after 3 seconds
    const timeout = setTimeout(() => {
      setConditionMet(true);
    }, 30000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const data = [
    // {
    //   title: "Futurista Technologies",
    //   dur: "jan 2023 - Present",
    //   desc: `I was responsible for creating a dynamic and user-friendly interface using React.js and Material UI, focusing on responsiveness across various devices. My role involved designing and developing React components, ensuring they were interactive and visually appealing. Additionally, I integrated API services using Axios to fetch and send data, and I managed the overall state of the application using Redux for efficient state management`,
    // },
    {
      title: "Extended Web App Tech",
      dur: "Apr 2022 - Dec 2022",
      desc: `I built a user-friendly and responsive interface using React.js and Material UI. I designed and developed components, made them interactive, and connected to external data using Axios for API communication`,
    },
    {
      title: "Pickup Biz Software",
      dur: "July 2021 - Mar 2022",
      desc: `My role was to make Responsive web pages in React.js.`,
    },
  ];

  return (
    <>
      <div>
        <Text
          type="secondary"
          style={{
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          Explore My
        </Text>
        <Title
          level={2}
          style={{
            margin: 0,
            fontWeight: "700",
          }}
        >
          Experience
        </Title>
      </div>

      <div
        style={{
          marginTop: isMobile ? "20px" : "50px",
        }}
      >
        <Row>
          {!isMobile && <Col flex={1}></Col>}

          <Col flex={isMobile ? 1 : 6} style={{}}>
            <div
              style={{
                marginBottom: "16px",
                display: "flex",

                justifyContent: "space-around",
                flexDirection: isMobile ? "column" : "row",
                marginLeft: isMobile ? "30px" : "0px",
              }}
            >
              <div>
                <Card
                  style={{
                    width: isMobile ? 330 : 500,
                    height: isMobile ? 350 : 400,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    // alignItems: "center",
                    border: "1px solid black",
                    backgroundColor: "#ECE2D0",
                    textAlign: "left",
                    padding: "0px !important",
                  }}
                >
                  <Title
                    level={3}
                    style={{
                      margin: 0,
                      fontWeight: "700",
                      textAlign: "center",
                    }}
                  >
                    Forntend Developer
                  </Title>

                  <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={(item, index) => (
                      <List.Item key={index}>
                        <List.Item.Meta
                          avatar={<Avatar src={empUrl} />}
                          title={
                            <>
                              <a href="">{item.title}</a>{" "}
                              <p
                                style={{
                                  fontSize: "12px",
                                  color: "darkgray",
                                  textDecoration: "underline",
                                  marginTop: "0px",
                                }}
                              >
                                {item.dur}
                              </p>
                            </>
                          }
                          description={item.desc}
                        />
                      </List.Item>
                    )}
                  />
                </Card>
              </div>
              <div>
                <Card
                  style={{
                    width: isMobile ? 330 : 500,

                    backgroundColor: "rgb(53, 53, 53)",
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    alignItems: "center",
                    border: "1px solid black",
                    marginTop: isMobile ? "30px" : "0px",
                    padding: "0px !important",
                  }}
                >
                  <Title
                    level={3}
                    style={{
                      margin: 0,
                      fontWeight: "700",
                      color: "white",
                    }}
                  >
                    Skills
                  </Title>
                  {/* <List
                    grid={{
                      gutter: 6,
                      xs: 3,
                      sm: 3,
                      md: 4,
                      lg: 4,
                      xl: 4,
                      xxl: 4,
                    }}
                    dataSource={skillData}
                    renderItem={(item, index) => (
                      <List.Item>
                        {skills && (
                          <div className="circle-container">
                            <div className="circle"></div>
                            <div className={`wave _${item.per}`}></div>
                            <div className={`wave _${item.per}`}></div>
                            <div className={`wave _${item.per}`}></div>
                            <div className={`wave-below _${item.per}`}></div>
                            <div className="desc">
                              <h2>{item.title}</h2>
                              <p>
                                <b>
                                  {item.per}
                                  <span>%</span>
                                </b>
                              </p>
                            </div>
                          </div>
                        )}

                      </List.Item>
                    )}
                  /> */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignContent: "center",
                      justifyContent: "center",
                    }}
                  >
                    {skillData.map((item, index) => {
                      const cardStyle = {
                        width: "50px",
                        height: "50px",
                        backgroundColor: "#ECE2D0",
                        transform: "rotate(-45deg)",
                        boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                        margin: isMobile ? "10px " : "15px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        ":hover": {
                          width: "85px",
                          height: "85px",
                          backgroundColor: "red",
                        },
                        
                      };
                      return (
                        <Card style={cardStyle}>
                          <span
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%) rotate(45deg)",
                              fontSize: "35px",
                              color: "black",
                              fontWeight: "bold",
                            }}
                          >
                            {item.title}
                          </span>
                        </Card>
                      );
                    })}
                  </div>
                </Card>
              </div>
            </div>
          </Col>
          {!isMobile && <Col flex={1}></Col>}
        </Row>
      </div>
    </>
  );
};
