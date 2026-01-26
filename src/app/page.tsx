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
import { Mailchimp } from "@/components";
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
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center" className={styles.animatedBackground}>
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
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          {home.featured.display && (
            <RevealFx
              fillWidth
              horizontal="center"
              paddingTop="16"
              paddingBottom="32"
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
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx translateY="8" delay={0.2} horizontal="center" paddingBottom="20">
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
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Row>
            </Button>
          </RevealFx>
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx translateY="12" delay={0.3} fillWidth horizontal="center" paddingBottom="24">
            <Row gap="12" wrap horizontal="center">
              <Tag size="l" prefixIcon="react" className={styles.tag}>React</Tag>
              <Tag size="l" prefixIcon="nodejs" className={styles.tag}>Node.js</Tag>
              <Tag size="l" prefixIcon="mongodb" className={styles.tag}>MongoDB</Tag>
              <Tag size="l" prefixIcon="dotnet" className={styles.tag}>.NET</Tag>
              <Tag size="l" prefixIcon="flutter" className={styles.tag}>Flutter</Tag>
            </Row>
          </RevealFx>
          <RevealFx translateY="12" delay={0.55} fillWidth horizontal="center" paddingBottom="24">
            <Row gap="24" wrap horizontal="center">
              <Column gap="4" align="center" className={styles.statCard}>
                <Text variant="heading-strong-xl" onBackground="brand-strong">4+</Text>
                <Text variant="body-default-s" onBackground="neutral-weak">Years Learning</Text>
              </Column>
              <Column gap="4" align="center" className={styles.statCard}>
                <Text variant="heading-strong-xl" onBackground="brand-strong">3.60</Text>
                <Text variant="body-default-s" onBackground="neutral-weak">Dean's Lister</Text>
              </Column>
            </Row>
          </RevealFx>
          <RevealFx translateY="12" delay={0.6} fillWidth horizontal="center" paddingBottom="16">
            <Row gap="12" wrap horizontal="center">
              <Button
                href="/TorrenoResume-FINAL.pdf"
                variant="primary"
                size="m"
                prefixIcon="download"
                className={styles.buttonHover}
              >
                Download Resume
              </Button>
            </Row>
          </RevealFx>
        </Column>
      </Column>
      <RevealFx translateY="16" delay={0.7}>
        <Column fillWidth gap="24" horizontal="center" align="center" paddingTop="40">
          <Line maxWidth="s" />
          <Column gap="8" horizontal="center" align="center">
            <Heading variant="heading-strong-l">Let's Connect</Heading>
            <Text variant="body-default-m" onBackground="neutral-weak" align="center">
              Feel free to reach out for collaborations or just a friendly chat
            </Text>
          </Column>
          <Row gap="12" wrap horizontal="center">
            {social.map((link) => (
              <Button
                key={link.name}
                href={link.link}
                variant="secondary"
                size="m"
                prefixIcon={link.icon}
                className={styles.buttonHover}
              >
                {link.name}
              </Button>
            ))}
          </Row>
        </Column>
      </RevealFx>
    </Column>
  );
}
