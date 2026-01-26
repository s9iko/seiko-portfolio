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
import { Projects } from "@/components/work/Projects";

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
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
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
              <Tag size="l" prefixIcon="react">React</Tag>
              <Tag size="l" prefixIcon="nodejs">Node.js</Tag>
              <Tag size="l" prefixIcon="mongodb">MongoDB</Tag>
              <Tag size="l" prefixIcon="dotnet">.NET</Tag>
              <Tag size="l" prefixIcon="flutter">Flutter</Tag>
            </Row>
          </RevealFx>
          <RevealFx translateY="12" delay={0.35} fillWidth horizontal="center" paddingBottom="24">
            <Row gap="24" wrap horizontal="center">
              <Column gap="4" align="center">
                <Text variant="heading-strong-xl" onBackground="brand-strong">4+</Text>
                <Text variant="body-default-s" onBackground="neutral-weak">Years Learning</Text>
              </Column>
              <Column gap="4" align="center">
                <Text variant="heading-strong-xl" onBackground="brand-strong">3.60</Text>
                <Text variant="body-default-s" onBackground="neutral-weak">Dean's Lister</Text>
              </Column>
            </Row>
          </RevealFx>
          <RevealFx translateY="12" delay={0.4} fillWidth horizontal="center" paddingBottom="16">
            <Row gap="12" wrap horizontal="center">
              <Button
                href="/TorrenoResume-FINAL.pdf"
                variant="primary"
                size="m"
                prefixIcon="download"
              >
                Download Resume
              </Button>
              <Button
                href={social.find(s => s.name === "GitHub")?.link || "https://github.com"}
                variant="secondary"
                size="m"
                prefixIcon="github"
              >
                View GitHub
              </Button>
            </Row>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.5} horizontal="center" paddingLeft="12">
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
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
        </Column>
      </Column>
      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]} />
      </RevealFx>
      <Projects range={[2]} />
    </Column>
  );
}
