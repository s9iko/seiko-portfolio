import React from "react";
import styles from "./ResumeButton.module.scss";

export default function ResumeButton() {
  return (
    <div className={styles.resumeContainer}>
      <a
        href="/TorrenoResume-FINAL.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.uiverseButton}
        aria-label="Download Resume"
      >
        Download Resume
      </a>
    </div>
  );
}
