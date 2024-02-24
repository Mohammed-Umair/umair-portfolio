import React, { useEffect, useState } from "react";
import { Button, Card, Col, Modal, Row, Typography } from "antd";
import {
  SendOutlined,
  GithubOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./project.css";

import Salon from "../../assest/projects/salonapp/salon.png";
import Salon2 from "../../assest/projects/salonapp/salon2.png";
import Salon3 from "../../assest/projects/salonapp/salon3.png";

import Books from "../../assest/projects/bookapp/books.png";
import Book2 from "../../assest/projects/bookapp/book2.png";
import Book3 from "../../assest/projects/bookapp/book3.png";

import Car from "../../assest/projects/carparkingapp/carParking.png";
import Car2 from "../../assest/projects/carparkingapp/parking2.png";
import Car3 from "../../assest/projects/carparkingapp/parking3.png";

import Charts from "../../assest/projects/charts/charts.png";
import Chart2 from "../../assest/projects/charts/chart2.png";
import Chart3 from "../../assest/projects/charts/chart3.png";

import Dashboard from "../../assest/projects/dashboard/dashboard.png";
import Dashboard2 from "../../assest/projects/dashboard/dashboard2.png";
import Dashboard3 from "../../assest/projects/dashboard/dashboard3.png";

import Notes from "../../assest/projects/notes/notes1.png";
import Notes2 from "../../assest/projects/notes/notes2.png";
import Notes3 from "../../assest/projects/notes/notes3.png";


import Calender from "../../assest/projects/calender/calender.png";
import Calender2 from "../../assest/projects/calender/calender2.png";
import Calender3 from "../../assest/projects/calender/calender3.png";

import Tower from "../../assest/projects/controlTower/tower.png";
import Tower2 from "../../assest/projects/controlTower/tower2.png";
import Tower3 from "../../assest/projects/controlTower/tower3.png";


const salonUrl = Salon.src;
const salonUrl2 = Salon2.src;
const salonUrl3 = Salon3.src;

const booksUrl = Books.src;
const booksUrl2 = Book2.src;
const booksUrl3 = Book3.src;

const carUrl = Car.src;
const carUrl2 = Car2.src;
const carUrl3= Car3.src;


const chratsUrl = Charts.src;
const chratsUrl2 = Chart2.src;
const chratsUrl3= Chart3.src;

const dashboardUrl = Dashboard.src;
const dashboardUrl2 = Dashboard2.src;
const dashboardUrl3 = Dashboard3.src;

const notesUrl = Notes.src;
const notesUrl2 = Notes2.src;
const notesUrl3 = Notes3.src;

const calenderUrl = Calender.src;
const calenderUrl2= Calender2.src;
const calenderUrl3= Calender3.src;

const towerUrl = Tower.src;
const towerUrl2 = Tower2.src;
const towerUrl3= Tower3.src;


interface Props {}

const { Meta } = Card;

const { Text, Title } = Typography;
export const Project = (props: Props) => {
  const [isMobile, setIsMobile] = useState(false);
  const [expandedCardId, setExpandedCardId] = useState<number | null>(null);
  const [selectedCard, setSelectedCard] = useState<any>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

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

 

  const handleCardClick = (card: any) => {
    setSelectedCard(card); // Set selected card data
    setIsModalVisible(true); // Open the modal
  };

  const handleModalClose = () => {
    setSelectedCard(null); // Clear selected card data
    setIsModalVisible(false); // Close the modal
  };
  

  const cardData = [
    {
      id: 1,
      title: "Responsive Dashboard",
      option: "Personal",
      description:
        "Responsive Dashboard: Built in React with MUI for UI. Utilizes table grids and Apex Charts for dynamic data visualization.",
      image: dashboardUrl,
      images: [dashboardUrl,dashboardUrl2, dashboardUrl3],
      appUrl: "https://responsive-orpin.vercel.app/",
      source: "https://github.com/Mohammed-Umair/responsive",
    },
    {
      id: 2,
      title: "Sticky Notes Clone",
      option: "Personal",
      description:
        "Sticky Notes Clone: Created in React with MUI for UI. A replica of a sticky notes app with added CRUD operations for enhanced functionality.",
      image: notesUrl,
      images: [notesUrl,notesUrl2, notesUrl3],

      appUrl: "https://notes-app-tawny-five.vercel.app/",
      source: "https://github.com/Mohammed-Umair/notes-app",
    },
    {
      id: 3,
      title: "Books App",
      option: "Personal",
      description:
        " Books App: Enhance reading. Intuitive design,effortless purchases, and seamless library management. Curated for a bespoke reading journey.",
      image: booksUrl,
      images: [booksUrl, booksUrl2,booksUrl3],

      appUrl: "https://mohammed-umair.github.io/app/",
      source: "https://github.com/Mohammed-Umair/app",
    },
    {
      id: 4,
      title: "Car Parking App",
      option: "Personal",
      description:
        "Car-Parking-app: its a simple application in which user can generate slot for parking and the charegs for first hr is $10 and for next hrs is 2x as the frist hrs charge. ",
      image: carUrl,
      images: [carUrl, carUrl2, carUrl3],

      appUrl: "https://car-parking-app-one.vercel.app/",
      source: "https://github.com/Mohammed-Umair/car-parking-app",
    },

    {
      id: 5,
      title: "Charts App",
      option: "Client",
      description:
        "Charts-app: Meet 'Charts' app! It makes data exciting by turning it into cool bubble, pyramid, and ratio charts. We use fancy tools like MUI, Ant Design, and ApexCharts to make it look awesome. Just plug in your data, and voila! Easy, fun, and super useful for understanding things.",
      image: chratsUrl,
      images: [chratsUrl, chratsUrl2, chratsUrl3],

      appUrl: "https://mohammed-umair.github.io/Charts/",
      source: "https://github.com/Mohammed-Umair/Charts",
    },
    {
      id: 6,
      title: "Calender App",
      option: "Personal",
      description:
        "Calendar App: Crafted with React for dynamic functionality and MUI for polished UI. Emulates Google Calendar's event management capabilities.",
      image: calenderUrl,
      images: [calenderUrl, calenderUrl2, calenderUrl3],

      appUrl: "https://calendar-app-flame-six.vercel.app/",
      source: "https://github.com/Mohammed-Umair/Calendar-App",
    },
    {
      id: 7,
      title: "Control Tower",
      option: "Client",
      description:
        "Control Tower: Developed in React with MUI for sleek UI. An inventory management app tailored for clients, offering comprehensive product details such as status (active, pending, expired).",
      image: towerUrl,
      images: [towerUrl, towerUrl2,towerUrl3],

      appUrl: "https://control-tower-gray.vercel.app/dashboard",
      source: "",
    },
    {
      id: 8,
      title: "Salon App",
      option: "Client",
      description:
        "Tailored salon app development for beauty pros. Streamline operations with appointment scheduling, online booking, and secure payments. Customized efficiency.",
      image: salonUrl,
      images: [salonUrl, salonUrl2,salonUrl3],

      appUrl: "https://salonapp-92560.web.app/",
      source: "",
    },
  ];

  const renderModalContent = () => {
    if (!selectedCard) return null;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    const PreviousBtn = (props: any) => {
      const { className, onClick } = props;
      return (
        <div
          id="pev"
          className={className}
          style={{
            marginLeft: "21px",
            zIndex: 1,

            backgroundColor: "#3e3e3e",
            width: "25px",
            height: "30px",
            alignItems: "center",
            display: "flex", // center horizontally
            justifyContent: "center", // center vertically
            borderRadius: "10px",
          }}
          onClick={onClick}
        ></div>
      );
    };
    const NextBtn = (props: any) => {
      const { className, onClick } = props;
      return (
        <div
          id="pev"
          className={className}
          style={{
            marginRight: "20px",
            marginLeft: "21px",
            zIndex: 0,
            backgroundColor: "#3e3e3e",
            width: "25px",
            height: "30px",
            alignItems: "center",
            display: "flex", // center horizontally
            justifyContent: "center", // center vertically
            borderRadius: "10px",
          }}
          onClick={onClick}
        ></div>
      );
    };
    return (
      <Card>
        <Slider
          {...settings}
          prevArrow={<PreviousBtn />}
          nextArrow={<NextBtn />}
          dotsClass="slick-dots-custom"
        >
          {selectedCard.images.map(
            (image: string | undefined, index: number) => (
              <div key={index}>
                <img
                  src={image}
                  alt={selectedCard.title}
                  style={{ width: "100%", borderRadius: "20px" }}
                />
              </div>
            )
          )}
        </Slider>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "15px",
          }}
        >
          <Title level={3} style={{ marginRight: "0px" }}>
            {selectedCard.title}
          </Title>
          <Text type="secondary">{selectedCard.option}</Text>
        </div>
        <Text>{selectedCard.description}</Text>
        <Button
          type="primary"
          onClick={handleModalClose}
          style={{
            marginTop: 20,
            backgroundColor: "rgb(53, 53, 53)",
            display: "flex",
            alignItems: "end",
          }}
        >
          Close
        </Button>
      </Card>
    );
  };

  

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
          autoplay={true}
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
              <div style={{ width: 300, height: 420 }}>
                {" "}
                {/* Adjust the height as needed */}
                <Card
                  style={{
                    width: "100%",
                    height: "100%",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
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
                        width: "90%",
                        height: "40px",
                        marginBottom: "8px",
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
                        width: "90%",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                        marginLeft: "13px",
                        cursor:"pointer"
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
                  onClick={() => handleCardClick(card)}
                >
                  <Meta
                    title={card.title}
                    description={card?.description.split(" ").slice(0, 15).join(" ") + "...More"}
                  />

                 
                </Card>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <Modal
        title={selectedCard ? selectedCard.title : ""}
        visible={isModalVisible}
        onCancel={handleModalClose}
        footer={null}
      >
        {renderModalContent()}
      </Modal>
    </>
  );
};
