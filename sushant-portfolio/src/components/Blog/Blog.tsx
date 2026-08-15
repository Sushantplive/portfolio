import React, { useMemo, useState } from "react";
import { blogPosts, type BlogPost } from "./blogData";
import "./blog.css";

function formatDate(isoDate: string): string {
  const date = new Date(`${isoDate}T12:00:00`);
  return date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

const Blog: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedPost = useMemo(
    () => blogPosts.find((post) => post.id === selectedId) ?? null,
    [selectedId],
  );

  const openPost = (post: BlogPost) => {
    setSelectedId(post.id);
  };

  const closePost = () => {
    setSelectedId(null);
  };

  return (
    <section
      id="blog"
      className="blog-section site-section py-12 sm:py-20 text-theme flex flex-col justify-center"
    >
      <div className="w-full max-w-6xl mx-auto px-6">
        <h2 className="blog-title text-4xl md:text-5xl font-bold text-cyan-400 mb-4">
          &lt;Blog /&gt;
        </h2>
        <p className="blog-intro text-lg mb-8 md:mb-10">
          Notes on frontend delivery, dashboard performance, and leading product-facing teams.
        </p>

        {selectedPost ? (
          <article className="blog-article" aria-labelledby="blog-article-title">
            <button type="button" className="blog-back" onClick={closePost}>
              ← All posts
            </button>

            <div className="blog-article__meta">
              <time dateTime={selectedPost.date}>{formatDate(selectedPost.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{selectedPost.readTime} read</span>
            </div>

            <h3 id="blog-article-title" className="blog-article__title">
              {selectedPost.title}
            </h3>

            <div className="blog-tags" aria-label="Topics">
              {selectedPost.tags.map((tag) => (
                <span key={tag} className="blog-tag">
                  {tag}
                </span>
              ))}
            </div>

            <div className="blog-article__body">
              {selectedPost.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </article>
        ) : (
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-card__meta">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="blog-card__title">{post.title}</h3>
                <p className="blog-card__excerpt">{post.excerpt}</p>
                <div className="blog-tags">
                  {post.tags.map((tag) => (
                    <span key={tag} className="blog-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  className="blog-card__read"
                  onClick={() => openPost(post)}
                >
                  Read post
                </button>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
