"use client";

import React from "react";
import ImageCarousel from "./ImageCarousel";

interface Props {
  images: string[];
  alt?: string;
}

const ClientImageGallery: React.FC<Props> = ({ images = [], alt = "" }) => {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <ImageCarousel items={images.map((src) => ({ slide: src, alt }))} />
    </div>
  );
};

export default ClientImageGallery;
