'use client';

import { useEffect, useState } from 'react';
import type { Review, ReviewsResponse } from '@/app/api/reviews/route';

const GOOGLE_REVIEW_URL =
  'https://search.google.com/local/writereview?placeid=ChIJrc9T5JvHh0gRibUa0d-AhEg';

const INITIAL_VISIBLE = 8;

// Colour palette for avatar initials when no photo is available
const AVATAR_COLOURS = [
  '#1B2E5E',
  '#D4631D',
  '#2E5E3B',
  '#5E1B4A',
  '#1B4E5E',
  '#5E4A1B',
];

function getAvatarColour(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return AVATAR_COLOURS[Math.abs(hash) % AVATAR_COLOURS.length];
}

function getInitial(name: string): string {
  return name.trim().charAt(0).toUpperCase();
}

// ─── Google 'G' logo SVG ──────────────────────────────────────────────────────
function GoogleGLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="20"
      height="20"
      aria-hidden="true"
    >
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
      <path fill="none" d="M0 0h48v48H0z" />
    </svg>
  );
}

// ─── Star rating display ──────────────────────────────────────────────────────
function Stars({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div className="review-stars" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          width={size}
          height={size}
          aria-hidden="true"
        >
          <path
            fill={i <= Math.round(rating) ? '#F59E0B' : '#E5E7EB'}
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </svg>
      ))}
    </div>
  );
}

// ─── Individual review card ───────────────────────────────────────────────────
function ReviewCard({ review }: { review: Review }) {
  const [expanded, setExpanded] = useState(false);
  const TRUNCATE_AT = 110;
  const needsTruncation = review.text.length > TRUNCATE_AT;
  const displayText =
    !needsTruncation || expanded
      ? review.text
      : review.text.slice(0, TRUNCATE_AT).trimEnd() + '…';

  return (
    <article className="review-card">
      <div className="review-card__header">
        {review.profile_photo_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={review.profile_photo_url}
            alt={review.author_name}
            className="review-avatar review-avatar--photo"
            width={44}
            height={44}
          />
        ) : (
          <div
            className="review-avatar review-avatar--initial"
            style={{ background: getAvatarColour(review.author_name) }}
            aria-hidden="true"
          >
            {getInitial(review.author_name)}
          </div>
        )}
        <div className="review-card__author">
          <span className="review-card__name">{review.author_name}</span>
          <span className="review-card__time">
            {review.relative_time_description}
          </span>
        </div>
      </div>

      <Stars rating={review.rating} />

      <p className="review-card__text">{displayText}</p>

      {needsTruncation && (
        <button
          className="review-card__read-more"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
        >
          {expanded ? 'Show less' : 'Read more'}
        </button>
      )}

      <div className="review-card__footer">
        <GoogleGLogo />
        <span>
          Posted on{' '}
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="review-card__google-link"
          >
            Google
          </a>
        </span>
      </div>
    </article>
  );
}

// ─── Main section component ───────────────────────────────────────────────────
export default function GoogleReviews() {
  const [data, setData] = useState<ReviewsResponse | null>(null);
  const [visible, setVisible] = useState(INITIAL_VISIBLE);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/reviews')
      .then((r) => r.json())
      .then((d: ReviewsResponse) => {
        setData(d);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const reviews = data?.reviews ?? [];
  const rating = data?.rating ?? 4.6;
  const totalRatings = data?.totalRatings ?? 20;
  const shown = reviews.slice(0, visible);
  const hasMore = visible < reviews.length;

  return (
    <section className="reviews-section" id="reviews" aria-labelledby="reviews-heading">
      <div className="container">
        {/* Header row */}
        <div className="reviews-header">
          <div className="reviews-header__left">
            <div className="reviews-google-brand">
              <GoogleGLogo />
              <span className="reviews-google-brand__label">Google Reviews</span>
            </div>
            <div className="reviews-summary">
              <span className="reviews-summary__score">{rating.toFixed(1)}</span>
              <Stars rating={rating} size={20} />
              <span className="reviews-summary__count">({totalRatings})</span>
            </div>
          </div>
          <a
            id="google-review-cta"
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary reviews-cta-btn"
          >
            Review us on Google
          </a>
        </div>

        {/* Cards grid */}
        {loading ? (
          <div className="reviews-loading" aria-live="polite" aria-busy="true">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="review-card review-card--skeleton" aria-hidden="true" />
            ))}
          </div>
        ) : (
          <>
            <div className="reviews-grid" id="reviews-grid">
              {shown.map((review, i) => (
                <ReviewCard key={`${review.author_name}-${i}`} review={review} />
              ))}
            </div>

            {hasMore && (
              <div className="reviews-load-more">
                <button
                  id="reviews-load-more-btn"
                  className="btn btn-outline"
                  onClick={() => setVisible((v) => v + 4)}
                >
                  Load More
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
