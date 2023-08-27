import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row, Typography } from "antd";
import { SendOutlined, GithubOutlined } from "@ant-design/icons";

import Salon from "../../assest/projects/salon.png";
import Books from "../../assest/projects/books.png";
const salonUrl = Salon.src;
const booksUrl = Books.src;

interface Props {}

const { Meta } = Card;

const { Text, Title } = Typography;
export const Project = (props: Props) => {
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

  const cardData = [
    {
      id: 1,
      title: "Salon App",
      option: "Employee",
      description:
        "Tailored salon app development for beauty pros. Streamline operations with appointment scheduling, online booking, and secure payments. Customized efficiency.",
      image: salonUrl,
      appUrl: "https://salonapp-92560.web.app/",
      source: "",
    },
    {
      id: 2,
      title: "Books App",
      option: "Personal",
      description:
        "Crafting Books App: Enhance reading. Intuitive design, personalized suggestions, effortless purchases, and seamless library management. Curated for a bespoke reading journey.",
      image: booksUrl,
      appUrl: "https://mohammed-umair.github.io/app/",
      source: "https://github.com/Mohammed-Umair/app",
    },
    {
      id: 3,
      title: "Card 3",
      option: "Personal",
      description: "Description 2",
      image:
        "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      appUrl: "",
      source: "",
    },
  ];

  const cardsPerRow = isMobile ? 1 : 3;

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
          Browse My Recent
        </Text>
        <Title
          level={2}
          style={{
            margin: 0,
            fontWeight: "700",
          }}
        >
          Projects
        </Title>
      </div>
      <div
        style={{
          marginTop: isMobile ? "20px" : "50px",
          paddingLeft: isMobile ? "40px" : "70px",
          paddingRight: isMobile ? "40px" : "70px",
        }}
      >
        <Row gutter={[16, 16]}>
          {isMobile && <Col xs={1} />}{" "}
          {cardData.map((card, index) => {
            return (
              <>
                {/* Empty column before cards in mobile view */}
                <Col key={card.id} xs={24} sm={12} md={8}>
                  <Card
                    style={{
                      width: 300,
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                      display: "flex", // Use flexbox to center-align buttons
                      flexDirection: "column", // Align buttons vertically
                      alignItems: "center", // Center-align content horizontally
                    }}
                    cover={<img alt="example" src={card.image} />}
                    actions={[
                      <Button
                        key="setting"
                        icon={<GithubOutlined />}
                        type="text"
                        style={{
                          backgroundColor:
                            card.source.length > 0 ? "#ECE2D0" : "gray",
                          borderRadius: "20px",
                          color: "black",
                          width: "90%", // Adjust width if needed
                          height: "40px",
                          marginBottom: "8px", // Add some spacing between buttons
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-around",
                        }}
                        onClick={() => {
                          if (card.source) {
                            window.open(card.source, "_blank");
                          }
                        }}
                      >
                        Source
                      </Button>,
                      <Button
                        key="edit"
                        icon={<SendOutlined />}
                        type="text"
                        style={{
                          backgroundColor:
                            card.appUrl.length > 0 ? "rgb(53, 53, 53)" : "gray",
                          borderRadius: "20px",
                          color: "white",
                          width: "90%", // Adjust width if needed
                          height: "40px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-around",
                          marginLeft:"13px"
                        }}
                        onClick={() => {
                          if (card.appUrl) {
                            window.open(card.appUrl, "_blank");
                          }
                        }}
                        disabled={!card.appUrl}
                      >
                        Live Demo
                      </Button>,
                    ]}
                  >
                    <Meta title={card.title} description={card.description} />
                  </Card>
                </Col>
              </>
            );
          })}
          {isMobile && <Col xs={1} />}{" "}
        </Row>
      </div>
    </>
  );
};
