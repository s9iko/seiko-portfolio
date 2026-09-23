"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import styles from "./ImageCarousel.module.scss";
import Lightbox from "./Lightbox";

interface Item {
  slide: string;
  alt?: string;
}

interface Props {
  items: Item[];
  initial?: number;
}

export const ImageCarousel: React.FC<Props> = ({ items = [], initial = 0 }) => {
  const [index, setIndex] = useState(initial);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const queueRef = useRef<number[]>([]);
  const runningRef = useRef(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const clamp = (v: number) => Math.max(0, Math.min(items.length - 1, v));

  const processQueue = useCallback(() => {
    if (runningRef.current) return;
    const next = queueRef.current.shift();
    if (next === undefined) return;
    runningRef.current = true;
    setIndex((prev) => clamp(next));
    // wait for transition to end
    const t = setTimeout(() => {
      runningRef.current = false;
      clearTimeout(t);
      if (queueRef.current.length > 0) processQueue();
    }, 380);
  }, [items.length]);

  useEffect(() => {
    processQueue();
  }, [processQueue]);

  const push = (n: number) => {
    queueRef.current.push(n);
    processQueue();
  };

  const prev = () => push(index - 1);
  const next = () => push(index + 1);

  return (
    <>
      <div className={styles.frame}>
      <div className={styles.viewport}>
        <div
          ref={trackRef}
          className={styles.track}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((it, i) => (
            <div className={styles.slide} key={i}>
              <img
                src={it.slide}
                alt={it.alt || ""}
                className={styles.img}
                onClick={() => {
                  setLightboxOpen(true);
                  setLightboxIndex(i);
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <button className={`${styles.nav} ${styles.navLeft}`} onClick={prev} aria-label="Previous">
        ‹
      </button>
      <button className={`${styles.nav} ${styles.navRight}`} onClick={next} aria-label="Next">
        ›
      </button>

      <div className={styles.indicators}>
        <div className={styles.dots}>
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
              aria-label={`Go to slide ${i + 1}`}
              aria-pressed={i === index}
              onClick={() => push(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  push(i);
                }
              }}
            />
          ))}
        </div>
      </div>
    </div>
      {lightboxOpen && (
        <Lightbox
          items={items}
          startIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
};

export default ImageCarousel;
