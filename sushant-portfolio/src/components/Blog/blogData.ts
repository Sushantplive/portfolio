export interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  excerpt: string;
  paragraphs: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "chart-heavy-dashboards",
    title: "Making chart-heavy dashboards feel fast",
    date: "2026-06-12",
    readTime: "5 min",
    tags: ["React", "Performance", "Data Visualization"],
    excerpt:
      "What actually moved the needle on GPS Insights-style analytics UIs — memoization, controlled re-renders, and fewer chart update paths.",
    paragraphs: [
      "Analytics dashboards fail quietly: the first paint looks fine, then filters fire and the UI stutters. On chart-heavy products, the cost is almost never \"one slow API\" — it is repeated work across cards, trend charts, and tables that all react to the same filter change.",
      "The biggest wins I have seen: isolate chart props so Highcharts / D3 only redraw when series data actually changes; batch filter state so MTD / YTD / region updates land once; and keep large tables on a separate render path from KPI cards.",
      "Measure before and after with the same workflow. \"~4.1s → ~1.5s\" on initial chart load is far more convincing to a hiring manager than claiming the app is \"optimized.\"",
      "If you lead a team, encode these patterns in a shared dashboard kit — otherwise every new chart reintroduces the same jank.",
    ],
  },
  {
    id: "leading-frontend-team",
    title: "Leading an 8-engineer frontend team without losing the craft",
    date: "2026-04-03",
    readTime: "4 min",
    tags: ["Leadership", "Mentoring", "Delivery"],
    excerpt:
      "Hands-on Technology Lead notes: how to stay close to the codebase while unblocking delivery, reviews, and mentoring.",
    paragraphs: [
      "The trap for new leads is becoming a full-time meeting router. The other trap is staying so deep in tickets that nobody else grows. Good Technology Lead work sits in the middle: you still ship critical paths, but you also set the standards others can copy.",
      "What worked for me on GPS Insights: own architecture decisions in writing, keep code review as a teaching loop (not a gate), and pair on the hardest integration points — API orchestration, performance hotspots, release risk.",
      "Delivery stays predictable when the team shares a component system and a clear definition of done. Mentoring shows up in smaller PRs, fewer production surprises, and engineers who can explain trade-offs without you in the room.",
      "If a portfolio only lists tools, leads will skim past it. Show that you can run a team and still write the code that matters.",
    ],
  },
  {
    id: "ai-tools-human-review",
    title: "Using Copilot and Cursor without outsourcing judgment",
    date: "2026-02-18",
    readTime: "3 min",
    tags: ["AI Tools", "Engineering Practice"],
    excerpt:
      "AI coding tools speed boilerplate and exploration — architecture and production review still need a human owner.",
    paragraphs: [
      "Copilot, Cursor, and Windsurf are force multipliers for scaffolding forms, tests, and refactors. They are weak at knowing which GraphQL field will break a teller workflow in production, or whether a chart redraw path will tank a regulated release.",
      "My rule: let tools draft, then review like you would a junior PR. Check data contracts, error states, accessibility, and performance implications. Keep the system design and the merge decision human-led.",
      "Recruiters increasingly ask about AI usage. The strong answer is not \"I generate everything\" — it is \"I ship faster because tools handle the repetitive layer, and I still own the architecture.\"",
    ],
  },
];
