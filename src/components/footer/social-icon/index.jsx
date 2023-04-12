import React from "react";

export default function SocialIcon({ icon, color, link }) {
  return (
    <div
      className="social-icon"
      style={{ backgroundColor: color }}
      onClick={() => {
        window.open(link, "_blank");
      }}
    >
      {icon}
    </div>
  );
}
