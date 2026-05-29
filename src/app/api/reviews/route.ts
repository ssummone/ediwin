// Revalidate once per hour so live reviews stay fresh without hammering the API
export const revalidate = 3600;

export interface Review {
  author_name: string;
  rating: number;
  relative_time_description: string;
  text: string;
  profile_photo_url?: string;
  time?: number;
}

export interface ReviewsResponse {
  reviews: Review[];
  rating: number;
  totalRatings: number;
  fromApi: boolean;
}

// ─── Hardcoded reviews (real reviews from the Google listing) ─────────────────
const HARDCODED_REVIEWS: Review[] = [
  {
    author_name: 'Justyna Giebien',
    rating: 5,
    relative_time_description: '1 month ago',
    text: 'I just had two new windows fitted in the kitchen and bathroom. The team from Edinburgh Windows and Doors were fantastic from start to finish \u2014 professional, tidy and the quality of the work is excellent. Could not be happier with the result.',
  },
  {
    author_name: 'Gorge',
    rating: 5,
    relative_time_description: '3 months ago',
    text: 'Great service from Edinburgh Windows and Doors. The team was professional, knowledgeable and the installation was completed quickly and cleanly. Highly recommend to anyone looking for new windows or doors.',
  },
  {
    author_name: 'Lucy Smith',
    rating: 5,
    relative_time_description: '8 months ago',
    text: 'From start to finish, our experience of Edinburgh Windows and Doors Ltd was excellent. Great communication throughout, quality workmanship and a very tidy finish. Would definitely recommend.',
  },
  {
    author_name: 'Cat Walshe',
    rating: 5,
    relative_time_description: '9 months ago',
    text: 'Thank you so much to both Stevens for transforming my living room windows. The quality of the work and materials is superb, and they were so clean and tidy throughout the whole process.',
  },
  {
    author_name: 'Jonny Thomson',
    rating: 5,
    relative_time_description: '1 year ago',
    text: 'A punctual, considerate, efficient and friendly company. Removed our old windows without any fuss and the new ones look fantastic. Very impressed with the whole service from enquiry to installation.',
  },
  {
    author_name: 'Andrew Higham',
    rating: 5,
    relative_time_description: '1 year ago',
    text: 'We bought a new front door. They responded to questions quickly and the installation team was excellent — neat, professional and a great final result. Really happy with our purchase.',
  },
  {
    author_name: 'Sarah Thomson',
    rating: 5,
    relative_time_description: '1 year ago',
    text: 'Excellent experience with Edinburgh Windows and Doors replacing and restoring our sash and case windows. The workmanship is superb and the team were a pleasure to deal with throughout.',
  },
  {
    author_name: 'Simon Breeze',
    rating: 5,
    relative_time_description: '2 years ago',
    text: 'Fantastic customer service from the team. Friendly and helpful throughout the whole process. Very happy with our new windows and would happily recommend Edinburgh Windows and Doors to anyone.',
  },
];

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  // If env vars aren't set, return hardcoded data immediately
  if (!apiKey || !placeId) {
    return Response.json({
      reviews: HARDCODED_REVIEWS,
      rating: 4.6,
      totalRatings: 20,
      fromApi: false,
    } satisfies ReviewsResponse);
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total,reviews&reviews_sort=most_relevant&key=${apiKey}`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.status === 'OK' && data.result) {
      const { rating, user_ratings_total, reviews } = data.result;

      // Merge: API reviews first (up to 5), then fill from hardcoded avoiding name duplicates
      const apiNames = new Set<string>(
        (reviews ?? []).map((r: Review) => r.author_name.toLowerCase())
      );
      const filler = HARDCODED_REVIEWS.filter(
        (r) => !apiNames.has(r.author_name.toLowerCase())
      );
      const merged = [...(reviews ?? []), ...filler];

      return Response.json({
        reviews: merged,
        rating: rating ?? 4.6,
        totalRatings: user_ratings_total ?? 20,
        fromApi: true,
      } satisfies ReviewsResponse);
    }
  } catch {
    // Network error — fall through to hardcoded
  }

  return Response.json({
    reviews: HARDCODED_REVIEWS,
    rating: 4.6,
    totalRatings: 20,
    fromApi: false,
  } satisfies ReviewsResponse);
}
