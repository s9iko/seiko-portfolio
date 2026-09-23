"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import styles from "./Lightbox.module.scss";

interface Item {
  slide: string;
  alt?: string;
}

interface Props {
  items: Item[];
  startIndex?: number;
  onClose?: () => void;
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = () => setReduced(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

export default function Lightbox({ items, startIndex = 0, onClose }: Props) {
  const [index, setIndex] = useState(startIndex);
  const [isOpen, setIsOpen] = useState(true);
  const [scale, setScale] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const lastTouchRef = useRef<any>(null);
  const draggingRef = useRef(false);
  const startRef = useRef({ x: 0, y: 0 });
  const reduced = usePrefersReducedMotion();
  const restoreFocusRef = useRef<HTMLElement | null>(null);

  // Lock scroll and save focus
  useEffect(() => {
    restoreFocusRef.current = document.activeElement as HTMLElement | null;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
      if (restoreFocusRef.current) restoreFocusRef.current.focus();
    };
  }, []);

  useEffect(() => {
    setIndex(startIndex);
  }, [startIndex]);

  // preload adjacent
  useEffect(() => {
    const next = items[index + 1]?.slide;
    const prev = items[index - 1]?.slide;
    if (next) new Image().src = next;
    if (prev) new Image().src = prev;
  }, [index, items]);

  const close = useCallback(() => {
    if (!isOpen) return;
    setIsOpen(false);
    setTimeout(() => onClose && onClose(), reduced ? 0 : 320);
  }, [isOpen, onClose, reduced]);

  const go = (delta: number) => {
    const next = clamp(index + delta, 0, items.length - 1);
    if (next === index) return;
    setIndex(next);
    setScale(1);
    setPos({ x: 0, y: 0 });
  };

  const onKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    },
    [close, go]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onKey]);

  // Pointer handlers for pan/drag and pinch
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let pointers = new Map<number, PointerEvent>();

    const onPointerDown = (ev: PointerEvent) => {
      (ev.target as Element).setPointerCapture(ev.pointerId);
      pointers.set(ev.pointerId, ev);
      if (pointers.size === 1) {
        draggingRef.current = true;
        startRef.current = { x: ev.clientX - pos.x, y: ev.clientY - pos.y };
      }
      lastTouchRef.current = ev;
    };

    const onPointerMove = (ev: PointerEvent) => {
      if (pointers.size === 0) return;
      pointers.set(ev.pointerId, ev);
      if (pointers.size === 1 && draggingRef.current && scale > 1) {
        const p = pointers.values().next().value as PointerEvent;
        const nx = p.clientX - startRef.current.x;
        const ny = p.clientY - startRef.current.y;
        setPos((prev) => ({ x: nx, y: ny }));
      } else if (pointers.size === 2) {
        // pinch
        const [a, b] = Array.from(pointers.values());
        const dist = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
        if (!lastTouchRef.current.dist) {
          lastTouchRef.current.dist = dist;
        } else {
          const delta = dist / lastTouchRef.current.dist;
          setScale((s) => clamp(s * delta, 1, 4));
          lastTouchRef.current.dist = dist;
        }
      }
    };

    const onPointerUp = (ev: PointerEvent) => {
      pointers.delete(ev.pointerId);
      draggingRef.current = false;
      lastTouchRef.current = null;
      // clamp position so image doesn't go out of view
      setPos((p) => ({ x: clamp(p.x, -2000, 2000), y: clamp(p.y, -2000, 2000) }));
    };

    el.addEventListener("pointerdown", onPointerDown as any);
    window.addEventListener("pointermove", onPointerMove as any);
    window.addEventListener("pointerup", onPointerUp as any);

    return () => {
      el.removeEventListener("pointerdown", onPointerDown as any);
      window.removeEventListener("pointermove", onPointerMove as any);
      window.removeEventListener("pointerup", onPointerUp as any);
    };
  }, [pos.x, pos.y, scale]);

  const wheelZoom = (e: React.WheelEvent) => {
    if (e.ctrlKey || e.metaKey) return; // let browser handle
    e.preventDefault();
    const delta = -e.deltaY / 500;
    setScale((s) => clamp(s + delta, 1, 4));
  };

  const dbl = () => {
    setScale((s) => (s > 1 ? 1 : 2));
    setPos({ x: 0, y: 0 });
  };

  const onBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) close();
  };

  // focus trap simple implementation
  useEffect(() => {
    const focusable = containerRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable?.[0] as HTMLElement | undefined;
    first?.focus();
  }, []);

  const imgStyle: React.CSSProperties = {
    transform: `translate(${pos.x}px, ${pos.y}px) scale(${scale})`,
    transition: reduced ? "none" : "transform 300ms ease",
  };

  return createPortal(
    <div
      className={`${styles.backdrop} ${isOpen ? styles.open : styles.close}`}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
      onClick={onBackdropClick}
      ref={containerRef}
    >
      <div className={styles.header}>
        <div className={styles.counter} aria-hidden>
          {index + 1} / {items.length}
        </div>
        <div className={styles.headerControls}>
          <button
            className={styles.icon}
            onClick={() => setScale((s) => clamp(s - 0.5, 1, 4))}
            aria-label="Zoom out"
          >
            −
          </button>
          <button
            className={styles.icon}
            onClick={() => setScale((s) => clamp(s + 0.5, 1, 4))}
            aria-label="Zoom in"
          >
            +
          </button>
          <button className={styles.icon} onClick={() => setScale(1)} aria-label="Reset zoom">
            ⟳
          </button>
          <button className={styles.icon} onClick={close} aria-label="Close lightbox">
            ✕
          </button>
        </div>
      </div>

      <div className={styles.content} onWheel={wheelZoom} onDoubleClick={dbl}>
        <button
          className={`${styles.nav} ${styles.prev}`}
          onClick={() => go(-1)}
          aria-label="Previous image"
        >
          ‹
        </button>
        <div className={styles.stage}>
          <img
            ref={imgRef}
            src={items[index].slide}
            alt={items[index].alt || ""}
            style={imgStyle}
            draggable={false}
          />
        </div>
        <button
          className={`${styles.nav} ${styles.next}`}
          onClick={() => go(1)}
          aria-label="Next image"
        >
          ›
        </button>
      </div>
    </div>,
    document.body
  );
}
