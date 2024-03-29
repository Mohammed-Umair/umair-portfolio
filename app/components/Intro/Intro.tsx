import { Button, Col, Image, Row, Typography } from "antd";
import React, { useState } from "react";
import styles from "./intro.module.css";
import { GithubOutlined, LinkedinFilled } from "@ant-design/icons";

import ProfileImage from "../../assest/profile.jpeg";
import newProfileImage from "../../assest/umairFinal.png";
// import newProfileImage from "../../assest/picofme.png";
// 
import newProfileImage2 from "../../assest/prifile2.jpg";



import { ImageShapesChanger } from "./ImageShapeChanger";
interface Props {
  onClick: () => void;
}
const Intro = (props: Props) => {
  // console.log("introprops", props.onClick);

  const { Text, Link, Title } = Typography;

  const [hovered, setHovered] = useState(false);

  const handleImageHover = () => {
    setHovered(!hovered);
  };
  const imageUrl = ProfileImage.src;
  const newImageUrl = newProfileImage.src;
  const newImageUrl2 = newProfileImage2.src;


  // console.log("ProfileImage", imageUrl);

  const downloadResume = () => {
    window.open(
      "https://drive.google.com/file/d/1GPJ3EREFN_sYUN9V3Gmmhb-6Ll6c_7IE/view?usp=drive_link",
      "_blank",
      "noopener,noreferrer"
    );
  };

  // const navigate= useNavigate()
  return (
    <div style={{}}>
      <Row gutter={12}>
        <Col
          xs={{ order: 2, span: 24 }}
          sm={{ order: 1, span: 12 }}
          className={styles.textContainer}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
                width: "320px",
              }}
            >
              <Text
                type="secondary"
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                Hi, I am{" "}
              </Text>
              <Title
                level={2}
                style={{
                  margin: 0,
                }}
              >
                Mohammed Umair!
              </Title>
              <Text type="secondary" className={styles.Role}>
                Frontend developer focused on creating interactive, accessible,
                and responsive websites.
              </Text>
              <div
                style={{
                  height: "80px",
                  width: "300px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                className={styles.buttondiv}
              >
                <Button
                  type="primary"
                  style={{
                    backgroundColor: "#ECE2D0",
                    borderRadius: "20px 20px 20px 20px",
                    color: "black",
                    width: "40%",
                  }}
                  onClick={props.onClick}
                >
                  Contact Me
                </Button>

                <Button
                  type="primary"
                  onClick={downloadResume}
                  style={{
                    backgroundColor: "rgb(53, 53, 53)",
                    borderRadius: "20px 20px 20px 20px",
                    color: "white",
                    width: "40%",
                  }}
                >
                  Resume
                </Button>
              </div>
              <div
                style={{
                  height: "20px",
                  width: "300px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  textAlign: "center",
                  // marginTop:"20px"
                }}
                className={styles.socialdiv}
              >
                <Link
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  href="https://www.linkedin.com/in/umair-mohammed-dev3355"
                  target="_blank"
                >
                  <LinkedinFilled
                    style={{
                      marginRight: "5px",
                      color: "black",
                    }}
                  />
                  <Title
                    level={5}
                    style={{
                      marginTop: "5px",
                    }}
                  >
                    Linkdein
                  </Title>
                </Link>
                <Link
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  href="https://github.com/Mohammed-Umair?tab=repositories"
                  target="_blank"
                >
                  <GithubOutlined
                    style={{
                      marginRight: "5px",
                      color: "black",
                    }}
                  />
                  <Title
                    level={5}
                    style={{
                      marginTop: "5px",
                    }}
                  >
                    Github
                  </Title>
                </Link>
              </div>
            </div>
          </div>
        </Col>
        <Col
          xs={{ order: 1, span: 24 }}
          sm={{ order: 2, span: 12 }}
          className={styles.imageContainer}
        >
          <div className={styles.mobileImage}>

            <div
              style={{
                // backgroundColor: "bisque",
                height: "300px",
                width: "390px",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ImageShapesChanger />
              </div>

              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 999,
                }}
              >
                <Image
                  width={200}
                  height={200}
                  src={newImageUrl}
                  style={{
                    borderRadius: "50%",
                  }}
                  preview={false}
                />
              </div>
            </div>
            </div>
       <div className={styles.desktopImage}>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
              style={{
                // backgroundColor: "bisque",
                height: "300px",
                width: "390px",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ImageShapesChanger />
              </div>

              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 999,
                }}
              >
                <Image
                  width={180}
                  height={180}
                  src={newImageUrl}
                  style={{
                    borderRadius: "50%",
                  }}
                  preview={false}
                />
              </div>
            </div>
            </div>
       </div>
        
        </Col>
      </Row>
    </div>
  );
};

export default Intro;
