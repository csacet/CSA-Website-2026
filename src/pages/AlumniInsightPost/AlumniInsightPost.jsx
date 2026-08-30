import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import alumniStories from "../../components/AlumniInsights/alumni.json";
import "./AlumniInsightPost.css";

const markdownFiles = import.meta.glob("../../components/AlumniInsights/content/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

function getAlumniStory(slug) {
  return alumniStories.find((story) => story.slug === slug);
}

function getMarkdown(markdownFile) {
  return (
    markdownFiles[`../../components/AlumniInsights/content/${markdownFile}`] ?? ""
  );
}

function AlumniInsightPost({ slug }) {
  const story = getAlumniStory(slug);
  const storyIndex = alumniStories.findIndex((item) => item.slug === slug);

  if (!story) {
    return (
      <main className="alumni-post-page csa-earth-section">
        <article className="alumni-post alumni-post-empty">
          <Link className="alumni-post-back" to="/#placements">
            Back to Alumni Insights
          </Link>
          <h1>Insight not found</h1>
          <p>The alumni insight you are looking for is not available.</p>
        </article>
      </main>
    );
  }

  const content = getMarkdown(story.markdown);
  const previousStory =
    alumniStories[(storyIndex - 1 + alumniStories.length) % alumniStories.length];
  const nextStory = alumniStories[(storyIndex + 1) % alumniStories.length];

  return (
    <main className="alumni-post-page csa-earth-section">
      <article className="alumni-post">
        <Link className="alumni-post-back" to="/#placements">
          Back to Alumni Insights
        </Link>

        <p className="alumni-post-kicker">Alumni Insight</p>

        <div className="alumni-markdown">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </div>

        <nav className="alumni-post-nav" aria-label="Alumni insight navigation">
          <Link
            className="alumni-post-nav-link alumni-post-nav-prev"
            to={`/alumni-insights/${previousStory.slug}`}
          >
            <span>Previous</span>
            <strong>{previousStory.name}</strong>
          </Link>
          <Link
            className="alumni-post-nav-link alumni-post-nav-next"
            to={`/alumni-insights/${nextStory.slug}`}
          >
            <span>Next</span>
            <strong>{nextStory.name}</strong>
          </Link>
        </nav>
      </article>
    </main>
  );
}

export default AlumniInsightPost;
