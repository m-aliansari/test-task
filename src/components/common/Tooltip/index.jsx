import { useState } from "react";
import styles from "./Tooltip.module.scss";

export default function Tooltip({ children, content }) {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCoords({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const showTooltip = (e) => {
    setVisible(true);
    handleMouseMove(e);
  };

  const hideTooltip = () => setVisible(false);

  return (
    <span
      style={{ position: "relative", width: "100%" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {visible && (
        <div
          className={styles.tooltip}
          style={{
            left: coords.x - 18, // 8px right of cursor
            top: coords.y + 30, // 16px below cursor
            position: "fixed",
            pointerEvents: "none",
            zIndex: 9999,
          }}
        >
          {content}
        </div>
      )}
    </span>
  );
}
