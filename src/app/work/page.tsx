import { Column, Heading, Meta, Schema, RevealFx } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { ParticlesBackground } from "@/components";
import { Projects } from "@/components/work/Projects";
import styles from "./page.module.scss";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  return (
    <>
      <ParticlesBackground />
      <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="24">
        <Heading
          marginBottom="l"
          variant="display-strong-l"
          align="center"
          className={`${styles.animatedTitle} ${styles.boldTitle}`}
        >
          {work.title}
        </Heading>
      </RevealFx>
      <RevealFx translateY="8" delay={0.2}>
        <Projects />
      </RevealFx>
    </Column>
    </>
  );
}
