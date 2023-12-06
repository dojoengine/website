"use client";

import ModalImage from "react-modal-image";

export const ImageModal = ({ small, large, alt }: { small: string; large: string; alt: string }) => {
  return <ModalImage small={small} large={large} alt={alt} />;
};
