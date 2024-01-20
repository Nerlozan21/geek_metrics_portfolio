import { useEffect, useState } from "react";

function ProgressBar() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollY = window.scrollY;
      const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100;
      setScrollPercentage(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="progress-container"
      style={{
        height: "0.5px",
        width: "100%",
        backgroundColor: "#000",
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
      }}
    >
      <div
        className="progress-fill"
        style={{
          height: "20%",
          backgroundColor: "#0bb5e0",
          width: `${scrollPercentage}%`,
        }}
      >
        {""}
      </div>
    </div>
  );
}

export default ProgressBar;
