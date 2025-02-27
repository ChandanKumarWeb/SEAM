"use client";
import Image from "next/image";

function ServicesBox({ imgs, alternate, serName }) {
  return (
    <div className="card">
      <div className="serIcons">
        <Image 
          className="serIcon"
          src={imgs} 
          width={1080} 
          height={1080} 
          alt={alternate} 
        />
      </div>
      <div className="serPera">
        <h1>{serName}</h1>
      </div>
    </div>
  );
}

export default ServicesBox;
