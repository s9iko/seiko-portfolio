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


export default function TypingHeadline({ greeting, name, speed = 275, pause = 600 }: TypingHeadlineProps) {
  const safeGreeting = typeof greeting === 'string' ? greeting : '';
  const safeName = typeof name === 'string' ? name : '';

  const fullText = safeGreeting + '\n' + safeName;
  const chars = Array.from(fullText);
  const [typedLength, setTypedLength] = useState(0);
  // Always show the cursor after the last character
  const [showCursor, setShowCursor] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setTypedLength(0);
    setShowCursor(true);
    if (intervalRef.current) clearInterval(intervalRef.current);
    let i = 0;
    intervalRef.current = setInterval(() => {
      i++;
      setTypedLength(i);
      if (i >= chars.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setShowCursor(true); // Always show cursor after typing
      }
    }, speed);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setShowCursor(true);
    };
  }, [greeting, name, speed]);

  if (!safeGreeting || !safeName) {
    return (
      <Heading wrap="balance" variant="display-strong-xl" className={`${styles.headline} ${styles.superComicFont} ${styles.typingHeadline}`}> 
        <span style={{color: 'red'}}>TYPING ERROR: Check greeting and name in content file.</span>
      </Heading>
    );
  }

  const typed = chars.slice(0, typedLength).join('');
  const [typedGreeting, ...rest] = typed.split('\n');
  const typedName = rest.join('\n');

  // Render invisible full headline to reserve space, then the typing animation
  // Estimate the minHeight by rendering the full headline offscreen and measuring, or set a reasonable value
  // Here, we set a minHeight to guarantee space for two lines of large text
  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '6.5em' }}>
      {/* Invisible full headline to reserve space */}
      <Heading
        wrap="balance"
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
      <Heading wrap="balance" variant="display-strong-xl" className={`${styles.headline} ${styles.superComicFont} ${styles.typingHeadline}`}> 
        <span>
          {typedGreeting}
          {typedLength <= greeting.length && showCursor && <span className={styles.typingCursor}>|</span>}
        </span>
        <br />
        <span className={styles.typingName}>
          {typedName}
          {typedLength > greeting.length && showCursor && <span className={styles.typingCursor}>|</span>}
        </span>
      </Heading>
    </div>
  );
}
