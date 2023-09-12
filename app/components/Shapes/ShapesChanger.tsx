import React, { useEffect, useState } from "react";
import "./ShapeChanger.css";

interface Props {}

const shapes = [
  "square",
  "circle",
  "pentagon",
  "octagon",
  "nonagon",
  "decagon",
  "heart",
  "rhombus",
  "trefoil",
  "quatrefoil",
];

export const ShapesChanger = (props: Props) => {
  const [currentShapeIndex, setCurrentShapeIndex] = useState(0);

  const ShapeComponent = ({ shape }: { shape: string }) => {
    let shapeContent;

    switch (shape) {
      case "square":
        shapeContent = <div className="shape-inner square-shape" />;
        break;
      case "circle":
        shapeContent = <div className="shape-inner circle-shape" />;
        break;
      case "pentagon":
        shapeContent = (
          <svg
            className="shape-inner"
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="#ECE2D0"
            style={{
              borderRadius: "20px",
            }}
          >
            <polygon points="50,5 95,35 85,95 15,95 5,35" />
          </svg>
        );
        break;
      case "octagon":
        shapeContent = <div className="shape-inner octagon-shape" />;

        break;
      case "nonagon":
        shapeContent = <div className="shape-inner nonagon-shape" />;
        break;
      case "decagon":
        shapeContent = <div className="shape-inner decagon-shape" />;
        break;
      case "heart":
        shapeContent = (
          <div className="shape-inner heart-shape">
            <div className="heart-inner"></div>
          </div>
        );
        break;
      case "rhombus":
        shapeContent = <div className="shape-inner rhombus-shape" />;
        break;
      case "trefoil":
        shapeContent = (
          <div className="shape-inner trefoil-container">
            <div className="shape-inner trefoil">
              <div className="shape-inner loop1"></div>
              <div className="shape-inner loop2"></div>
              <div className="shape-inner loop3"></div>
            </div>
          </div>
        );
        break;
      case "quatrefoil":
        shapeContent = (
          <div className="shape-inner quatrefoil">
            <div className="shape-inner loops1"></div>
            <div className="shape-inner loops2"></div>
            <div className="shape-inner loops3"></div>
            <div className="shape-inner loops4"></div>
          </div>
        );
        break;
      default:
        shapeContent = null;
    }

    return (
      <div
        className={`shape ${
          shape === shapes[currentShapeIndex] ? "active" : ""
        }`}
      >
        {shapeContent}
      </div>
    );
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentShapeIndex((prevIndex) => (prevIndex + 1) % shapes.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const currentShape = shapes[currentShapeIndex];

  return (
    <div>
      <ShapeComponent shape={currentShape} />
    </div>
  );
};
