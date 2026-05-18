import styles from "./Testimonials.module.css";

// PH launch post for agentmemory. The featured.svg badge endpoint
// renders the live upvote count + day-rank server-side, so the
// number on the page stays current without any client refresh.
// Replace the post_id if a future launch shifts to a new post.
const PH_POST_ID = 773058;
const PH_POST_URL = "https://www.producthunt.com/posts/agent-memory-dev";
const PH_DISCUSSION_URL =
  "https://www.producthunt.com/p/agent-memory-dev/how-do-you-found-agentmemory-so-far-happy-to-help";
const PH_BADGE_URL = `https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=${PH_POST_ID}&theme=dark`;

// "Use cases" — quotes that describe how a builder is using
// agentmemory in production. Each one carries an explicit
// `useCase` line so the framing is concrete (not just "I like it").
interface UseCase {
  name: string;
  useCase: string;
  quote: string;
  href: string;
}

const USE_CASES: UseCase[] = [
  {
    name: "Peter Neyra",
    useCase: "Backfilled a month of Cursor transcripts",
    quote:
      "I backfilled agent memory on my past month's Cursor agent transcripts. It was surprisingly accurate. Picked up on things that I moved away from.",
    href: "https://www.producthunt.com/p/agent-memory-dev/how-do-you-found-agentmemory-so-far-happy-to-help?comment=5379518",
  },
  {
    name: "Pranav Prakash",
    useCase: "Two weeks of production use",
    quote:
      "Been using it for 2 weeks, and I definitely see improvements.",
    href: PH_DISCUSSION_URL,
  },
];

// "Endorsements" — shorter quotes that position the product, more
// social-proof than use-case. Kept tight so the grid balances.
interface Endorsement {
  name: string;
  quote: string;
  href: string;
}

const ENDORSEMENTS: Endorsement[] = [
  {
    name: "Alper Tayfur",
    quote:
      "Tackles one of the biggest pain points with coding agents: losing useful project context across sessions without bloating the context window.",
    href: PH_DISCUSSION_URL,
  },
  {
    name: "Mia Taylor",
    quote:
      "The focus on making memory actually useful for agents instead of just storing context endlessly.",
    href: PH_DISCUSSION_URL,
  },
  {
    name: "Thomas Hall",
    quote:
      "Memory often becomes just more noise over time. Agentmemory feels more intentional compared to a lot of tools in this space.",
    href: PH_DISCUSSION_URL,
  },
  {
    name: "Zoe Alexandra",
    quote:
      "Tried it briefly — feels clean and easy to get started with.",
    href: PH_DISCUSSION_URL,
  },
];

export function Testimonials() {
  return (
    <section
      className={styles.wrap}
      aria-labelledby="testimonials-title"
    >
      <div className={styles.inner}>
        <div className={styles.badgeRow}>
          <a
            href={PH_POST_URL}
            target="_blank"
            rel="noopener"
            aria-label="Featured on Product Hunt"
            className={styles.badgeLink}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={PH_BADGE_URL}
              alt="Featured on Product Hunt — live upvote count"
              width={250}
              height={54}
              className={styles.badge}
            />
          </a>
        </div>

        <div id="testimonials-title" className={styles.eyebrow}>
          BUILDERS USING AGENTMEMORY
        </div>
        <h2 className={styles.title}>
          IN THE <span className={styles.accent}>WILD.</span>
        </h2>
        <p className={styles.lede}>
          Verbatim from the Product Hunt launch thread. Each card
          links back to the source comment.
        </p>

        <div className={styles.sectionLabel}>HOW THEY USE IT</div>
        <div className={styles.useCases}>
          {USE_CASES.map((u) => (
            <a
              key={u.name}
              className={styles.useCaseCard}
              href={u.href}
              target="_blank"
              rel="noopener"
              aria-label={`${u.name}'s comment on Product Hunt`}
            >
              <div className={styles.useCaseTag}>{u.useCase}</div>
              <p className={styles.useCaseQuote}>
                <span className={styles.quoteMark} aria-hidden>
                  &ldquo;
                </span>
                {u.quote}
              </p>
              <div className={styles.author}>
                <span className={styles.name}>{u.name}</span>
                <span className={styles.source}>Product Hunt ↗</span>
              </div>
            </a>
          ))}
        </div>

        <div className={styles.sectionLabel}>WHAT THEY SAY</div>
        <div className={styles.grid}>
          {ENDORSEMENTS.map((t) => (
            <a
              key={t.name}
              className={styles.card}
              href={t.href}
              target="_blank"
              rel="noopener"
              aria-label={`${t.name}'s comment on Product Hunt`}
            >
              <p className={styles.quote}>
                <span className={styles.quoteMark} aria-hidden>
                  &ldquo;
                </span>
                {t.quote}
              </p>
              <div className={styles.author}>
                <span className={styles.name}>{t.name}</span>
                <span className={styles.source}>Product Hunt ↗</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
