import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row, Typography } from "antd";
import { SendOutlined, GithubOutlined } from "@ant-design/icons";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Salon from "../../assest/projects/salon.png";
import Books from "../../assest/projects/books.png";
import Car from "../../assest/projects/carParking.png";
import Charts from "../../assest/projects/charts.png";

const salonUrl = Salon.src;
const booksUrl = Books.src;
const carUrl = Car.src;
const chratsUrl = Charts.src;

interface Props {}

const { Meta } = Card;

const { Text, Title } = Typography;
export const Project = (props: Props) => {
  const [isMobile, setIsMobile] = useState(false);
  const [expandedCardId, setExpandedCardId] = useState<number | null>(null);

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

  const handleToggleDescription = (cardId: number) => {
    setExpandedCardId(expandedCardId === cardId ? null : cardId);
  };

  const cardData = [
    // {
    //   id: 1,
    //   title: "Salon App",
    //   option: "Employee",
    //   description:
    //     "Tailored salon app development for beauty pros. Streamline operations with appointment scheduling, online booking, and secure payments. Customized efficiency.",
    //   image: salonUrl,
    //   appUrl: "https://salonapp-92560.web.app/",
    //   source: "",
    // },
    {
      id: 2,
      title: "Books App",
      option: "Personal",
      description:
        " Books App: Enhance reading. Intuitive design,effortless purchases, and seamless library management. Curated for a bespoke reading journey.",
      image: booksUrl,
      appUrl: "https://mohammed-umair.github.io/app/",
      source: "https://github.com/Mohammed-Umair/app",
    },
    {
      id: 3,
      title: "Car Parking App",
      option: "Personal",
      description:
        "Car-Parking-app: its a simple application in which user can generate slot for parking and the charegs for first hr is $10 and for next hrs is 2x as the frist hrs charge. ",
      image: carUrl,
      appUrl: "https://car-parking-app-one.vercel.app/",
      source: "https://github.com/Mohammed-Umair/car-parking-app",
    },

    {
      id: 4,
      title: "Charts App",
      option: "Personal",
      description:
        "Charts-app: Meet 'Charts' app! It makes data exciting by turning it into cool bubble, pyramid, and ratio charts. We use fancy tools like MUI, Ant Design, and ApexCharts to make it look awesome. Just plug in your data, and voila! Easy, fun, and super useful for understanding things.",
      image: chratsUrl,
      appUrl: "https://mohammed-umair.github.io/Charts/",
      source: "https://github.com/Mohammed-Umair/Charts",
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
      {/* <div
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
      </div> */}

      <div
        style={{
          padding: "50px",
          marginTop: isMobile ? "100px" : "0px",
          marginLeft: isMobile ? "0px" : "50px",

        }}
      >
        <Slider
          slidesToShow={cardsPerRow}
          slidesToScroll={1}
          autoplay={false}
          arrows={true}
          dots={true}
          responsive={[
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              },
            },
          ]}
        >
          {cardData.map((card) => (
            <div
              key={card.id}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                style={{
                  width: 300,
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  display: "flex", // Use flexbox to center-align buttons
                  flexDirection: "column", // Align buttons vertically
                  alignItems: "center", // Center-align content horizontally
                  justifyContent: "space-between", // Center-align vertically
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
                      marginLeft: "13px",
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
                <Meta
                  title={card.title}
                  description={
                    expandedCardId === card.id
                      ? card.description
                      : `${card.description.split(" ").slice(0, 15).join(" ")}${
                          card.description.split(" ").length > 15 ? " ..." : ""
                        }`
                  }
                />
                {card.description.split(" ").length > 15 && (
                  <Button
                    type="link"
                    onClick={() => handleToggleDescription(card.id)}
                  >
                    {expandedCardId === card.id ? "Less" : "More"}
                  </Button>
                )}
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
