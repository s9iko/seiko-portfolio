"use client";

import { useState } from "react";
import { Heading } from "@once-ui-system/core";
import styles from "@/app/page.module.scss";

interface AnimatedHeadlineProps {
  text: string;
}

export default function AnimatedHeadline({ text }: AnimatedHeadlineProps) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <Heading wrap="balance" variant="display-strong-xl" className={`${styles.headline} ${styles.superComicFont}`}>
      {text.split('').map((char, i) => {
        let letterClass = styles.headlineLetter;
        if (hovered === i) letterClass += " " + styles.headlineLetterHover;
        if (hovered !== null && (hovered === i - 1 || hovered === i + 1)) letterClass += " " + styles.headlineLetterNeighbor;
        return (
          <span
            key={i}
            className={letterClass}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        );
      })}
    </Heading>
  );
}
