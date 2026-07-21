import ReactMarkdown from "react-markdown";
import alumniStories from "./alumini.json";
import "./AlumniInsightPost.css";

const markdownFiles = import.meta.glob("./content/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

function getAlumniStory(slug) {
  return alumniStories.find((story) => story.slug === slug);
}

function getMarkdown(markdownFile) {
  return markdownFiles[`./content/${markdownFile}`] ?? "";
}

function AlumniInsightPost({ slug }) {
  const story = getAlumniStory(slug);

  if (!story) {
    return (
      <main className="alumni-post-page csa-earth-section">
        <article className="alumni-post alumni-post-empty">
          <a className="alumni-post-back" href="/#placements">
            Back to Alumni Insights
          </a>
          <h1>Insight not found</h1>
          <p>The alumni insight you are looking for is not available.</p>
        </article>
      </main>
    );
  }

  const content = getMarkdown(story.markdown);

  return (
    <main className="alumni-post-page csa-earth-section">
      <article className="alumni-post">
        <a className="alumni-post-back" href="/#placements">
          Back to Alumni Insights
        </a>

        <p className="alumni-post-kicker">Alumni Insight</p>

        <div className="alumni-markdown">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </article>
    </main>
  );
}

export default AlumniInsightPost;
