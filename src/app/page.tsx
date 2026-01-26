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
          <RevealFx fillWidth horizontal="center" paddingTop="16" paddingBottom="24" paddingLeft="12" delay={0}>
            <Row gap="8" horizontal="center" vertical="center">
              <span className={styles.availableDot}></span>
              <Text variant="body-default-m" onBackground="brand-strong">
                Available for opportunities
              </Text>
            </Row>
          </RevealFx>
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="8" delay={0.15}>
            <TypingHeadline greeting={home.headlineGreeting} name={home.headlineName} speed={150} pause={600} />
          </RevealFx>

          <RevealFx translateY={10} delay={0.45} horizontal="center" paddingBottom="16">
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


          <RevealFx translateY="12" delay={0.75} fillWidth horizontal="center" paddingBottom="32">
            <Row gap="16" wrap horizontal="center" vertical="center">
              {/* MongoDB - Green Leaf */}
              <div className={styles.techIcon} style={{ backgroundColor: 'rgba(30, 32, 36, 0.7)', border: '1.5px solid #444', backdropFilter: 'blur(6px)' }} title="MongoDB">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#599636" d="m50.146.273 2.668 5.012c.6.925 1.25 1.744 2.016 2.506a70 70 0 0 1 6.262 7.08c4.521 5.938 7.57 12.531 9.749 19.662 1.306 4.356 2.015 8.824 2.069 13.343.218 13.508-4.413 25.107-13.75 34.747a40 40 0 0 1-4.905 4.194c-.925 0-1.363-.71-1.744-1.363a11.2 11.2 0 0 1-1.362-3.921c-.328-1.635-.544-3.269-.438-4.956v-.763c-.075-.162-.89-75.157-.566-75.541"/>
                  <path fill="#6cac48" d="M50.146.108c-.11-.22-.22-.054-.329.053.053 1.093-.328 2.068-.925 3-.656.924-1.524 1.634-2.396 2.396-4.844 4.194-8.656 9.259-11.709 14.924-4.062 7.624-6.156 15.796-6.75 24.398-.271 3.103.982 14.052 1.96 17.211 2.669 8.387 7.462 15.415 13.67 21.515 1.526 1.468 3.157 2.83 4.844 4.14.49 0 .544-.438.656-.763a15 15 0 0 0 .491-2.124l1.094-8.169z"/>
                  <path fill="#c2bfbf" d="M52.814 90.135c.11-1.25.71-2.287 1.362-3.321-.656-.272-1.143-.813-1.524-1.416-.33-.57-.601-1.173-.813-1.797-.762-2.287-.925-4.687-1.143-7.024V75.16c-.272.22-.329 2.069-.329 2.344a54 54 0 0 1-.98 7.353c-.163.98-.273 1.959-.876 2.83 0 .11 0 .22.053.382.981 2.887 1.25 5.827 1.416 8.824v1.094c0 1.306-.053 1.03 1.031 1.468.438.163.925.22 1.362.544.329 0 .382-.272.382-.49l-.163-1.797V92.7c-.053-.875.11-1.744.219-2.563z"/>
                </svg>
              </div>
              {/* Express - Circle with EX */}
              <div className={styles.techIcon} style={{ backgroundColor: 'rgba(30, 32, 36, 0.7)', border: '1.5px solid #444', backdropFilter: 'blur(6px)' }} title="Express.js">
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" fill="#333"/>
                  <text x="12" y="15" textAnchor="middle" fontSize="9" fontWeight="900" fill="#fff" fontFamily="Arial">ex</text>
                </svg>
              </div>
              {/* React - Official Logo */}
              <div className={styles.techIcon} style={{ backgroundColor: 'rgba(30, 32, 36, 0.7)', border: '1.5px solid #444', backdropFilter: 'blur(6px)' }} title="React">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100">
                  <g clipPath="url(#a)">
                    <path fill="#61dafb" d="M50.307 58.816a8.816 8.816 0 1 0 0-17.632 8.816 8.816 0 0 0 0 17.632"/>
                    <path stroke="#61dafb" strokeWidth="5" d="M50.307 68.063c26.126 0 47.306-8.087 47.306-18.063s-21.18-18.062-47.306-18.062C24.18 31.938 3 40.024 3 50s21.18 18.063 47.307 18.063Z"/>
                    <path stroke="#61dafb" strokeWidth="5" d="M34.664 59.031C47.727 81.658 65.321 95.957 73.96 90.97c8.64-4.988 5.053-27.374-8.01-50C52.885 18.342 35.291 4.043 26.652 9.03s-5.052 27.374 8.011 50Z"/>
                    <path stroke="#61dafb" strokeWidth="5" d="M34.664 40.969c-13.063 22.626-16.65 45.012-8.01 50 8.638 4.988 26.232-9.311 39.295-31.938s16.65-45.012 8.01-50c-8.638-4.988-26.232 9.311-39.295 31.938Z"/>
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h100v100H0z"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              {/* Node.js - Official Logo */}
              <div className={styles.techIcon} style={{ backgroundColor: 'rgba(30, 32, 36, 0.7)', border: '1.5px solid #444', backdropFilter: 'blur(6px)' }} title="Node.js">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100">
                  <path fill="#8cc84b" d="M46.279 1.067c2.479-1.42 5.709-1.426 8.186 0 12.464 7.042 24.931 14.074 37.393 21.12 2.343 1.321 3.911 3.93 3.887 6.63v42.371c.018 2.813-1.705 5.483-4.178 6.774-12.422 7.004-24.838 14.016-37.259 21.02-2.53 1.447-5.825 1.335-8.277-.23-3.724-2.16-7.455-4.308-11.18-6.465-.76-.453-1.619-.815-2.156-1.552.475-.64 1.324-.72 2.015-1 1.554-.495 2.982-1.288 4.41-2.058.361-.247.802-.153 1.148.069 3.185 1.826 6.342 3.705 9.537 5.513.682.394 1.372-.129 1.955-.453 12.19-6.89 24.396-13.754 36.584-20.646a1.21 1.21 0 0 0 .664-1.191c.009-13.977.002-27.957.005-41.934a1.31 1.31 0 0 0-.781-1.308C75.852 20.756 63.479 13.773 51.102 6.8a1.29 1.29 0 0 0-1.458-.002c-12.378 6.975-24.749 13.964-37.126 20.935-.506.23-.845.738-.785 1.302q.002 20.966 0 41.936a1.19 1.19 0 0 0 .673 1.176c3.303 1.873 6.61 3.733 9.916 5.6 1.861 1.002 4.148 1.597 6.199.83 1.81-.65 3.08-2.497 3.045-4.42.017-13.895-.009-27.793.013-41.686-.046-.617.54-1.127 1.14-1.069 1.586-.01 3.175-.021 4.762.005.663-.015 1.119.649 1.037 1.27-.007 13.984.017 27.968-.01 41.952.003 3.726-1.528 7.781-4.975 9.605-4.247 2.2-9.496 1.733-13.691-.376-3.632-1.813-7.098-3.952-10.666-5.894C6.697 76.68 4.983 73.999 5 71.189V28.817c-.026-2.756 1.604-5.412 4.021-6.713Q27.651 11.588 46.28 1.067"/>
                  <path fill="#8cc84b" d="M57.114 30.417c5.417-.348 11.216-.206 16.091 2.462 3.774 2.046 5.867 6.338 5.933 10.53-.105.566-.696.878-1.236.84-1.572-.003-3.144.02-4.716-.011-.667.025-1.054-.59-1.138-1.179-.451-2.006-1.545-3.993-3.434-4.96-2.898-1.452-6.26-1.38-9.42-1.349-2.308.123-4.79.322-6.744 1.68-1.5 1.027-1.957 3.102-1.421 4.773.505 1.2 1.89 1.587 3.023 1.944 6.529 1.708 13.447 1.538 19.85 3.785 2.651.916 5.245 2.697 6.152 5.472 1.187 3.72.667 8.168-1.98 11.154-2.146 2.458-5.273 3.796-8.39 4.522-4.149.925-8.454.949-12.666.538-3.962-.451-8.084-1.492-11.142-4.191-2.614-2.27-3.892-5.808-3.765-9.223.03-.576.605-.978 1.157-.93 1.583-.014 3.165-.018 4.748.001.632-.045 1.101.501 1.133 1.097.292 1.912 1.01 3.918 2.678 5.051 3.216 2.075 7.253 1.933 10.936 1.991 3.052-.135 6.477-.176 8.967-2.193 1.314-1.15 1.703-3.075 1.348-4.73-.384-1.398-1.847-2.05-3.103-2.476-6.444-2.038-13.44-1.299-19.822-3.604-2.59-.916-5.096-2.647-6.092-5.309-1.389-3.767-.752-8.427 2.172-11.313 2.852-2.87 6.968-3.976 10.881-4.372"/>
                </svg>
              </div>
              {/* .NET - Official Logo */}
              <div className={styles.techIcon} style={{ backgroundColor: 'rgba(30, 32, 36, 0.7)', border: '1.5px solid #444', backdropFilter: 'blur(6px)' }} title=".NET">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100">
                  <g clipPath="url(#a)">
                    <path fill="#a179dc" d="M94.74 29.324c-.001-1.677-.36-3.16-1.085-4.431-.713-1.25-1.78-2.3-3.211-3.128-11.815-6.812-23.64-13.603-35.45-20.423-3.185-1.838-6.272-1.77-9.432.094C40.859 4.209 17.316 17.698 10.3 21.76c-2.889 1.673-4.295 4.233-4.295 7.56-.005 13.7 0 27.4-.005 41.1 0 1.64.344 3.093 1.037 4.346.713 1.288 1.795 2.365 3.26 3.213 7.015 4.064 30.562 17.551 35.263 20.325 3.162 1.866 6.25 1.932 9.434.093 11.811-6.82 23.638-13.61 35.454-20.422 1.464-.847 2.546-1.925 3.259-3.213.692-1.252 1.037-2.706 1.037-4.346 0 0 0-27.392-.005-41.092"/>
                    <path fill="#280068" d="M50.508 49.737 7.038 74.766c.712 1.288 1.794 2.365 3.259 3.213 7.016 4.064 30.562 17.551 35.264 20.325 3.161 1.866 6.249 1.932 9.434.093 11.81-6.82 23.637-13.61 35.453-20.422 1.464-.847 2.546-1.925 3.259-3.213z"/>
                    <path fill="#390091" d="M94.74 29.324c-.001-1.677-.36-3.16-1.086-4.431L50.508 49.737l43.199 25.025c.692-1.252 1.036-2.706 1.037-4.346 0 0 0-27.392-.005-41.092"/>
                    <path fill="#fff" d="M76.102 40.38v4.678h4.678V40.38h2.34v4.678h4.677v2.34H83.12v4.678h4.678v2.339H83.12v4.678h-2.34v-4.678h-4.677v4.678h-2.34v-4.678h-4.678v-2.34h4.678v-4.678h-4.678v-2.339h4.678V40.38zm4.678 7.017h-4.678v4.679h4.678z"/>
                    <path fill="#fff" d="M50.603 16.884c12.203 0 22.857 6.627 28.563 16.478l-.056-.095-14.357 8.267c-2.828-4.79-8.014-8.022-13.963-8.088l-.187-.001c-9.071 0-16.426 7.353-16.426 16.425 0 2.966.791 5.747 2.167 8.149 2.83 4.943 8.153 8.277 14.259 8.277 6.143 0 11.496-3.377 14.313-8.372l-.068.12 14.335 8.305C73.54 76.116 63.031 82.722 50.97 82.854l-.367.002c-12.241 0-22.925-6.668-28.618-16.57a32.84 32.84 0 0 1-4.368-16.416c0-18.217 14.768-32.986 32.986-32.986"/>
                  </g>
                  <defs>
                    <clipPath id="a"><path fill="#fff" d="M6 0h88.889v100H6z"/></clipPath>
                  </defs>
                </svg>
              </div>
              {/* Flutter - Official Logo */}
              <div className={styles.techIcon} style={{ backgroundColor: 'rgba(30, 32, 36, 0.7)', border: '1.5px solid #444', backdropFilter: 'blur(6px)' }} title="Flutter">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100">
                  <g clipPath="url(#a)">
                    <path fill="#42a5f5" fillOpacity=".8" d="M25.399 65.395 10 49.996 60 0h30.794zm65.395-19.259H60L48.465 57.671l15.399 15.4"/>
                    <path fill="#0d47a1" d="M48.465 88.465 60 100h30.794l-26.93-26.93"/>
                    <path fill="#42a5f5" d="M33.103 73.078 48.477 57.7l15.375 15.375-15.375 15.379z"/>
                    <path fill="url(#b)" d="m48.477 88.453 15.375-15.375 2.146 2.146L50.623 90.6z"/>
                    <path fill="url(#c)" d="m48.465 88.465 22.848-7.894-7.449-7.505"/>
                  </g>
                  <defs>
                    <linearGradient id="b" x1="56.167" x2="58.314" y1="80.763" y2="82.909" gradientUnits="userSpaceOnUse">
                      <stop offset=".2" stopOpacity=".15"/>
                      <stop offset=".85" stopColor="#616161" stopOpacity=".01"/>
                    </linearGradient>
                    <linearGradient id="c" x1="48.471" x2="71.318" y1="80.766" y2="80.766" gradientUnits="userSpaceOnUse">
                      <stop offset=".2" stopOpacity=".55"/>
                      <stop offset=".85" stopColor="#616161" stopOpacity=".01"/>
                    </linearGradient>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h100v100H0z"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              {/* Dart - Official Logo */}
              <div className={styles.techIcon} style={{ backgroundColor: 'rgba(30, 32, 36, 0.7)', border: '1.5px solid #444', backdropFilter: 'blur(6px)' }} title="Dart">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100">
                  <g clipPath="url(#a)">
                    <g clipPath="url(#b)">
                      <path fill="#00c4b3" d="m26.878 27.058-6.425-6.425v46.335l.09 2.171c0 .996.181 2.172.543 3.349l50.86 17.918 12.67-5.61z"/>
                      <path fill="#22d3c5" d="m84.615 84.796-12.67 5.61-50.769-17.918c.996 3.71 3.077 7.873 5.43 10.226l16.561 16.47 36.923.091z"/>
                      <path fill="#0075c9" d="M20.634 20.633.905 50.497c-1.629 1.72-.814 5.34 1.81 8.054l11.403 11.493 7.149 2.534c-.271-1.176-.543-2.353-.543-3.348l-.09-2.172z"/>
                      <path fill="#0075c9" d="M72.308 21.176a26 26 0 0 0-3.349-.543l-2.262-.09H20.453l64.162 64.162 5.611-12.67z"/>
                      <path fill="#00a8e1" d="M82.534 26.606c-2.353-2.353-6.425-4.525-10.226-5.43l17.918 50.86-5.61 12.67L98.37 80.27V42.533z"/>
                      <path fill="#00c4b3" d="M69.774 14.117 58.28 2.714C55.656.09 52.036-.725 50.226.904L20.362 20.633h46.244l2.263.09c.995 0 2.172.181 3.348.543z"/>
                    </g>
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h100v100H0z"/>
                    </clipPath>
                    <clipPath id="b">
                      <path fill="#fff" d="M0 0h100v100H0z"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              {/* Next.js - Official Logo */}
              <div className={styles.techIcon} style={{ backgroundColor: 'rgba(30, 32, 36, 0.7)', border: '1.5px solid #444', backdropFilter: 'blur(6px)' }} title="Next.js">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                  <circle cx="24" cy="24" r="20" fill="#212121"/>
                  <path fill="#fff" d="M17.5 32V16h2.2l8.8 13.1V16h2.5v16h-2.1l-8.9-13.2V32z"/>
                </svg>
              </div>
            </Row>
          </RevealFx>
          <RevealFx translateY="12" delay={0.9} fillWidth horizontal="center" paddingBottom="0">
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
          </Row>
        </Column>
      </ScrollReveal>
    </Column>
  );
}
