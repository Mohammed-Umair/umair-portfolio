import React, { useState, useEffect } from "react";
import ProfileImage from "../../assest/profile.jpeg";
import Expericence from "../../assest/quality.png";

import Education from "../../assest/images.png";

import { Card, Col, Image, Row, Typography } from "antd";

interface Props {}

export const About = (props: Props) => {
  const { Text, Title } = Typography;
  const imageUrl = ProfileImage.src;
  const eduUrl = Education.src;

  const expUrl = Expericence.src;

  const [isMobile, setIsMobile] = useState(false);

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
          Get To Know More
        </Text>
        <Title
          level={2}
          style={{
            margin: 0,
            fontWeight: "700",
          }}
        >
          About Me
        </Title>
      </div>

      <div
        style={{
          marginTop: isMobile ? "0px" : "50px",
        }}
      >
        <Row>
          {!isMobile && <Col flex={1}></Col>}
          <Col
            flex={isMobile ? 1 : 0}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                color: "white",
                width: "300px",
                height: "300px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                width={250}
                height={250}
                src={imageUrl}
                style={{
                  borderRadius: "20px",
                }}
                preview={false}
              />
            </div>
          </Col>
          <Col
            flex={isMobile ? 1 : 4}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              position: "relative",
            }}
          >
            <div
              style={{
                marginBottom: "16px",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <div>
                <Card
                  style={{
                    width: isMobile ? 140 : 300,
                    height: isMobile ? 160 : 120,

                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    alignItems: "center",
                    border: "1px solid black",
                    backgroundColor: "#ECE2D0",
                  }}
                >
                  <Image width={25} height={25} src={expUrl} preview={false} />
                  <Title
                    level={5}
                    style={{
                      margin: 0,
                      fontWeight: "700",
                    }}
                  >
                    Experience
                  </Title>
                  <Text
                    type="secondary"
                    style={{
                      fontSize: "12px",
                      fontWeight: "700",
                    }}
                  >
                    1.6 years Frontend Development

                     {/* 1.6 */}
                  </Text>
                </Card>
              </div>
              <div>
                <Card
                  style={{
                    width: isMobile ? 140 : 300,

                    height: isMobile ? 160 : 120,
                    backgroundColor: "rgb(53, 53, 53)",
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    alignItems: "center",
                    border: "1px solid black",
                  }}
                >
                  <Image width={25} height={25} src={eduUrl} preview={false} />
                  <Title
                    level={5}
                    style={{
                      margin: 0,
                      fontWeight: "700",
                      color: "white",
                    }}
                  >
                    Education
                  </Title>
                  <Text
                    type="secondary"
                    style={{
                      fontSize: "12px",
                      fontWeight: "700",
                      color: "white",
                    }}
                  >
                    B.Sc. Bachelors Degree
                  </Text>
                </Card>
              </div>
            </div>
            <div
              style={{
                textAlign: "left",
                width: isMobile ? 330 : 600,
                marginLeft: isMobile ? "30px" : "80px",
                textIndent: "12px",
                fontSize: "15px",
                fontWeight: "700",
                color: "grey",
              }}
            >
              I'm a dedicated frontend developer with a strong passion for
              crafting user-friendly and visually appealing web applications. My
              journey into the world of development began without a traditional
              IT background. Instead, I've honed my skills through practical
              experience and a relentless curiosity for technology. Over the
              course of my career, which spans over 1.6 years, I've had the
              privilege of working on diverse projects, where I've mastered the
              art of creating responsive and interactive user interfaces.
            </div>
          </Col>
          {!isMobile && <Col flex={1}></Col>}
        </Row>
      </div>
    </>
  );
};
