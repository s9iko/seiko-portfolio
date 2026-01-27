import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Line,
  Icon,
  Tag,
} from "@once-ui-system/core";
import { home, about, person, baseURL, social } from "@/resources";
import { Mailchimp, ScrollReveal } from "@/components";
import TypingHeadline from "@/components/TypingHeadline";
import styles from "./page.module.scss";
export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column
      maxWidth="xl"
      gap="56"
      paddingY="32"
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
      <Column fillWidth horizontal="center" gap="32">
        {/* Hero Section with Face and Typing Headline */}
        <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="8" delay={0.15}>
          <Row gap="48" horizontal="center" vertical="center" className={styles.heroRow}>
            {/* Face Avatar */}
            <div className={styles.faceAvatar}>
              <img src="/images/killuaface.svg" alt="Avatar" width="280" height="280" />
            </div>
            {/* Typing Headline */}
            <div className={styles.headlineWrapper}>
              <TypingHeadline greeting={home.headlineGreeting} name={home.headlineName} speed={150} pause={600} />
            </div>
          </Row>
        </RevealFx>
        {/* Buttons Row - Side by Side, Same Size */}
        <RevealFx translateY={10} delay={0.45} horizontal="center" paddingBottom="16">
          <Row gap="32" horizontal="center" vertical="center" className={styles.heroButtonRow}>
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="l"
              weight="default"
              arrowIcon
              className={styles.buttonHover}
              style={{ minWidth: 260 }}
            >
              <Row gap="8" vertical="center" paddingRight="4">
                {about.title}
              </Row>
            </Button>
            <Button
              href="/TorrenoResume-FINAL.pdf"
              variant="primary"
              size="l"
              prefixIcon="download"
              className={styles.buttonHover}
              style={{ minWidth: 260 }}
            >
              Download Resume
            </Button>
          </Row>
        </RevealFx>
      </Column>
      <hr className={styles.heroDivider} />
      <ScrollReveal className={`${styles.scrollRevealSection} ${styles.connectSection}`}>
        <Column fillWidth gap="32" horizontal="center" align="center" paddingTop="xl">
          <Column gap="12" horizontal="center" align="center" maxWidth="s">
            <Heading variant="display-strong-m" className={styles.connectHeading}>Let's Connect</Heading>
            <Text variant="body-default-l" onBackground="neutral-weak" align="center">
              Feel free to reach out — I'm always open to new opportunities and conversations
            </Text>
          </Column>
          <Row gap="16" wrap horizontal="center" className={styles.socialRow}>
            {social.map((link) => (
              <Button
                key={link.name}
                href={link.link}
                variant="secondary"
                size="l"
                prefixIcon={link.icon}
                className={styles.socialButton}
              >
                {link.name}
              </Button>
            ))}
            <Button
              href="https://www.linkedin.com/in/vaughn-torreno-92762b3a4/"
              variant="secondary"
              size="l"
              prefixIcon="linkedin"
              className={styles.socialButton}
            >
              LinkedIn
            </Button>
          </Row>
        </Column>
      </ScrollReveal>
    </Column>
  );
}
