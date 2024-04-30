import Image from "next/image";
import React from "react";
interface IProps {
  Icon: React.FC;
  title: string;
  description: string;
}
export default function ServiceCard({ Icon, title, description }: IProps) {
  return (
    <div className="service-item">
      <div className="service-icon-box">
        <Icon />
      </div>

      <div className="service-content-box">
        <h4 className="h4 service-item-title">{title}</h4>

        <p className="service-item-text">{description}</p>
      </div>
    </div>
  );
}
