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
      maxWidth="s"
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
        <Column maxWidth="xs" horizontal="center" align="center" gap="-1">
          <RevealFx fillWidth horizontal="center" paddingTop="16" paddingBottom="24" paddingLeft="12">
            <Row gap="8" horizontal="center" vertical="center">
              <span className={styles.availableDot}></span>
              <Text variant="body-default-m" onBackground="brand-strong">
                Available for opportunities
              </Text>
            </Row>
          </RevealFx>
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="8">
            <TypingHeadline greeting={home.headlineGreeting} name={home.headlineName} speed={150} pause={600} />
          </RevealFx>

          <RevealFx translateY={8} delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx translateY={10} delay={0.25} horizontal="center" paddingBottom="16">
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
              className={styles.buttonHover}
            >
              <Row gap="8" vertical="center" paddingRight="4">
                {/* Avatar removed as requested */}
                {about.title}
              </Row>
            </Button>
          </RevealFx>
          {home.featured.display && (
            <RevealFx
              fillWidth
              horizontal="center"
              paddingTop="8"
              paddingBottom="24"
              paddingLeft="12"
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
                className={styles.badge}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx translateY="12" delay={0.3} fillWidth horizontal="center" paddingBottom="32">
            <Column gap="20" horizontal="center" align="center">
              <Row gap="16" wrap horizontal="center">
                <Tag size="l" prefixIcon="react" className={styles.tag}>React</Tag>
                <Tag size="l" prefixIcon="nodejs" className={styles.tag}>Node.js</Tag>
                <Tag size="l" prefixIcon="mongodb" className={styles.tag}>MongoDB</Tag>
                <Tag size="l" prefixIcon="dotnet" className={styles.tag}>.NET</Tag>
                <Tag size="l" prefixIcon="flutter" className={styles.tag}>Flutter</Tag>
              </Row>
            </Column>
          </RevealFx>
          <RevealFx translateY="12" delay={0.5} fillWidth horizontal="center" paddingBottom="0">
            <Button
              href="/TorrenoResume-FINAL.pdf"
              variant="primary"
              size="l"
              prefixIcon="download"
              className={styles.buttonHover}
            >
              Download Resume
            </Button>
          </RevealFx>
        </Column>
      </Column>
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
          </Row>
        </Column>
      </ScrollReveal>
    </Column>
  );
}
