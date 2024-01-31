import React, { useEffect, useState } from "react";
import { Button, Typography } from "antd";

import { MailFilled, LinkedinFilled } from "@ant-design/icons";

interface Props {}
const { Text, Title } = Typography;

export const Contact = (props: Props) => {
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


  const email = "umair03355@gmail.com"; // Replace with your email address


  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        marginTop: isMobile ? "320px" : "10px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >



        <Text
          type="secondary"
          style={{
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          Get In Touch
        </Text>
        <Title
          level={2}
          style={{
            margin: 0,
            fontWeight: "700",
          }}
        >
          Contact Me
        </Title>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 320,
            height: "60px",
            backgroundColor: "rgb(163, 163, 163)",
            background: "rgb(250, 250, 250)",
            borderRadius: "20px",
            border: "1px solid darkGrey",
            display: "flex ", // Make the Card's contents flex
            justifyContent: "space-between", // Space between the inner divs
            alignItems: "center",
            padding: "0 10px", // Center items vertically
            marginTop:"10px"
          }}
        >
          <div
            style={{
              display: "flex ", // Make the Card's contents flex
              justifyContent: "space-between", // Space between the inner divs
              alignItems: "center",
            }}
          >
            <MailFilled
              style={{
                color: "black",
              }}
            />
            <div style={{
                marginLeft:"5px"
            }}>
            <a
              href={`mailto:${email}`}
              style={{
                textDecoration: "none", // Remove underline
                color: "black", // Set text color
              }}
            >
              {email}
            </a>
          </div>


          </div>
          <div
            style={{
              display: "flex ", // Make the Card's contents flex
              justifyContent: "space-between", // Space between the inner divs
              alignItems: "center",
              marginLeft:"10px"
            }}
          >
            <LinkedinFilled
              style={{
                color: "black",
              }}
            />
              <div style={{
                marginLeft:"5px"
            }}>
            <a
            href="https://www.linkedin.com/in/umair-mohammed-dev3355"
            target="_blank"

              style={{
                textDecoration: "none", // Remove underline
                color: "black", // Set text color
              }}
            >
            Linkdien
            </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
