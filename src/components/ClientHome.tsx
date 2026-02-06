"use client";
import React, { useEffect, useState } from "react";
import {
  Heading,
  Text,
  Button,
  RevealFx,
  Column,
  Row,
  Schema,
} from "@once-ui-system/core";
import { home, about, person, baseURL, social } from "@/resources";
import TextType from "@/components/TextType";
import { Mailchimp, ScrollReveal, ParticlesBackground } from "@/components";
import styles from "@/app/page.module.scss";

export default function ClientHome() {

  return (
    <>
      <ParticlesBackground />
      <Column
        maxWidth="xl"
        gap="0"
        paddingY="0"
        horizontal="center"
        className={styles.animatedBackground}
        style={{ minHeight: "100vh", justifyContent: "center" }}
      >
        <Schema
          as="webPage"
          baseURL={baseURL}
          path={home.path}
          title={home.title}
          description={home.description}
          image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
          author={{
            name: person.name,
            url: `${baseURL}${about.path}`,
            image: `${baseURL}${person.avatar}`,
          }}
        />
        <Column fillWidth horizontal="center" gap="32" className={styles.heroInner} style={{ justifyContent: "center" }}>
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="8" delay={0.15}>
            <Row gap="48" horizontal="center" vertical="center" className={styles.heroRow}>
              <div className={styles.faceAvatar} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img src="/images/killuaface.svg" alt="Avatar" width="280" height="280" />
                <div style={{ marginTop: 16 }}>
                  <TextType
                    text={["Web Developer", "UI/UX Designer", "QA Tester"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor
                    cursorCharacter="_"
                    deletingSpeed={50}
                    cursorBlinkDuration={0.5}
                    className={styles.textTypeCustom}
                  />
                </div>
              </div>
              <div className={styles.headlineWrapper}>
                <Heading wrap="balance" variant="display-strong-xl" className={`${styles.headline} ${styles.superComicFont}`}>
                  {home.headlineGreeting}
                  <br />
                  {home.headlineName}
                </Heading>
              </div>
            </Row>
          </RevealFx>
          <RevealFx translateY={10} delay={0.45} horizontal="center" paddingBottom="16">
            <Row gap="32" horizontal="center" vertical="center" className={styles.heroButtonRow}></Row>
          </RevealFx>
        </Column>
        <hr className={styles.heroDivider} />
        <ScrollReveal className={`${styles.scrollRevealSection} ${styles.connectSection}`}>
          <Column fillWidth gap="32" horizontal="center" align="center" paddingTop="xl">
            <Column gap="12" horizontal="center" align="center" maxWidth="s">
              <Heading variant="display-strong-m" className={styles.connectHeading}>
                Let's Connect
              </Heading>
              <Text variant="body-default-l" onBackground="neutral-weak" align="center">
                Feel free to reach out — I'm always open to new opportunities and conversations
              </Text>
            </Column>
            <Row gap="16" wrap horizontal="center" className={styles.socialRow}>
              {social.map((link) => (
                <Button key={link.name} href={link.link} variant="secondary" size="l" prefixIcon={link.icon} className={styles.socialButton}>
                  {link.name}
                </Button>
              ))}
              <Button href="https://www.linkedin.com/in/vaughn-torreno-92762b3a4/" variant="secondary" size="l" prefixIcon="linkedin" className={styles.socialButton}>
                LinkedIn
              </Button>
            </Row>
          </Column>
        </ScrollReveal>
      </Column>
    </>
  );
}
