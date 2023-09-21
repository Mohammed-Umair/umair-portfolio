import React, { useEffect, useState } from "react";
import "./imageShapesChanger.css";

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



export const ImageShapesChanger = (props: Props) => {
  const [currentShapeIndex, setCurrentShapeIndex] = useState(0);

  const ShapeComponent = ({ shape }: { shape: string }) => {
    let shapeContent;

    switch (shape) {
      case "square":
        shapeContent = <div className="shape-inner image-square-shape" />;
        break;
      case "circle":
        shapeContent = <div className="shape-inner image-circle-shape" />;
        break;
      case "pentagon":
        shapeContent = (
          <svg
            className="shape-inner"
            width="280"
            height="280"
            viewBox="0 0 100 100"
            fill="#FFD500"
            style={{
              borderRadius: "20px",
            }}
          >
            <polygon points="50,5 95,35 85,95 15,95 5,35" />
          </svg>
        );
        break;
      case "octagon":
        shapeContent = <div className="shape-inner image-octagon-shape" />;
        break;
      case "nonagon":
        shapeContent = <div className="shape-inner image-nonagon-shape" />;
        break;
      case "decagon":
        shapeContent = <div className="shape-inner image-decagon-shape" />;
        break;
      case "heart":
        shapeContent = (
          <div className="shape-inner image-heart-shape">
            <div className="image-heart-inner"></div>
          </div>
        );
        break;
      case "rhombus":
        shapeContent = <div className="shape-inner image-rhombus-shape" />;
        break;
      case "trefoil":
        shapeContent = (
          <div className="shape-inner trefoil-container">
            <div className="shape-inner  image-trefoil">
              <div className="shape-inner image-loop1"></div>
              <div className="shape-inner image-loop2"></div>
              <div className="shape-inner image-loop3"></div>
            </div>
          </div>
        );
        break;
      case "quatrefoil":
        shapeContent = (
          <div className="shape-inner image-quatrefoil">
            <div className="shape-inner image-loops1"></div>
            <div className="shape-inner image-loops2"></div>
            <div className="shape-inner image-loops3"></div>
            <div className="shape-inner image-loops4"></div>
          </div>
        );
        break;
      default:
        shapeContent = null;
    }

    return (
      <div
        className={`imageShape ${
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
