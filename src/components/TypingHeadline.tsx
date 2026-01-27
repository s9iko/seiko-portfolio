"use client";

import { useEffect, useState, useRef } from "react";
import { Heading } from "@once-ui-system/core";
import styles from "@/app/page.module.scss";

interface TypingHeadlineProps {
  greeting: string;
  name: string;
  speed?: number; // ms per character
  pause?: number; // ms pause between greeting and name
}
export default function TypingHeadline({ greeting, name, speed = 600, pause = 600, startDelay = 600 }: TypingHeadlineProps) {
  const safeGreeting = typeof greeting === 'string' ? greeting : '';
  const safeName = typeof name === 'string' ? name : '';

  if (!safeGreeting || !safeName) {
    return (
      <Heading wrap="balance" variant="display-strong-xl" className={`${styles.headline} ${styles.superComicFont} ${styles.typingHeadline}`}>
        <span style={{color: 'red'}}>TYPING ERROR: Check greeting and name in content file.</span>
      </Heading>
    );
  }

  const fullText = safeGreeting + '\n' + safeName;
  const chars = Array.from(fullText);
  const [typedLength, setTypedLength] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [startTyping, setStartTyping] = useState(false);

  // Observe visibility to coordinate with fade-in wrappers
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry && entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.6 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Delay start after visible
  useEffect(() => {
    if (!isVisible) return;
    if (startTimeoutRef.current) clearTimeout(startTimeoutRef.current);
    startTimeoutRef.current = setTimeout(() => setStartTyping(true), startDelay);
    return () => { if (startTimeoutRef.current) clearTimeout(startTimeoutRef.current); };
  }, [isVisible, startDelay]);

  // Typing effect
  useEffect(() => {
    if (!startTyping) return;
    setTypedLength(0);
    setShowCursor(true);
    if (intervalRef.current) clearInterval(intervalRef.current);
    let i = 0;
    intervalRef.current = setInterval(() => {
      i++;
      setTypedLength(i);
      if (i >= chars.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setShowCursor(true);
      }
    }, speed);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setShowCursor(true);
    };
  }, [startTyping, speed, fullText]);

  const typed = chars.slice(0, typedLength).join('');
  const [typedGreeting, ...rest] = typed.split('\n');
  const typedName = rest.join('\n');

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%', minHeight: '6.5em' }}>
      {/* Invisible full headline to reserve space */}
      <Heading
        wrap="nowrap"
        variant="display-strong-xl"
        className={`${styles.headline} ${styles.superComicFont} ${styles.typingHeadline}`}
        style={{ visibility: 'hidden', position: 'absolute', pointerEvents: 'none', userSelect: 'none', width: '100%' }}
        aria-hidden="true"
      >
        <span>{safeGreeting}</span>
        <br />
        <span className={styles.typingName}>{safeName}</span>
      </Heading>
      {/* Actual typing animation */}
      <Heading wrap="nowrap" variant="display-strong-xl" className={`${styles.headline} ${styles.superComicFont} ${styles.typingHeadline}`}>
        <span>
          {typedGreeting}
          {typedLength <= safeGreeting.length && showCursor && <span className={styles.typingCursor}>|</span>}
        </span>
        <br />
        <span className={styles.typingName}>
          {typedName}
          {typedLength > safeGreeting.length && showCursor && <span className={styles.typingCursor}>|</span>}
        </span>
      </Heading>
    </div>
  );
}
