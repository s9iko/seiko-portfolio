import { getPosts } from "@/utils/utils";
import { Column } from "@once-ui-system/core";
import { ProjectCard, ScrollReveal } from "@/components";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
}

export function Projects({ range, exclude }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  // Exclude by slug (exact match)
  if (exclude && exclude.length > 0) {
    allProjects = allProjects.filter((post) => !exclude.includes(post.slug));
  }

  const sortedProjects = allProjects.sort((a, b) => {
    // Prefer explicit `order` frontmatter if provided, otherwise fall back to publishedAt (newest first)
    const aOrder = a.metadata.order ?? null;
    const bOrder = b.metadata.order ?? null;

    if (aOrder !== null || bOrder !== null) {
      // If one of them is null, treat null as Infinity so defined orders come first
      const aVal = aOrder === null ? Infinity : aOrder;
      const bVal = bOrder === null ? Infinity : bOrder;
      return aVal - bVal;
    }

    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayedProjects.map((post, index) => (
        <ScrollReveal key={post.slug}>
          <ProjectCard
            priority={index < 2}
            href={`/work/${post.slug}`}
            images={post.metadata.images}
            title={post.metadata.title}
            description={post.metadata.summary}
            content={post.content}
            link={post.metadata.link || ""}
          />
        </ScrollReveal>
      ))}
    </Column>
  );
}
