/* ============================================================================
 * SAMPLE CONTENT
 *
 * The API currently returns empty lists for most sections, which leaves every
 * screen sitting on skeletons. These records fill that gap so the site can be
 * demoed and designed against realistic content.
 *
 * Rules this file follows on purpose:
 *   - titles are real Tollywood / Bollywood films, but every other field is
 *     generic placeholder copy. No cast, dates, ratings or box-office numbers
 *     are invented here, because those would be wrong more often than right.
 *   - artwork is licence-free stock photography, not copyrighted film posters.
 *   - `youtubelink` is intentionally empty, so the players stay hidden rather
 *     than embedding an unrelated video.
 *   - every record carries `sample: true`, so it is easy to spot in Redux.
 *
 * This whole layer switches off with one flag in FetchData.js
 * (SHOW_SAMPLE_CONTENT_WHEN_EMPTY) and is bypassed automatically the moment
 * the backend starts returning rows.
 * ========================================================================== */

/* Verified, licence-free cinema photography (Unsplash). Every id below was
 * loaded and eyeballed: theatres, projectors, reels, clapperboards, stages
 * and crowds — nothing that depicts a real film or a real person's likeness. */
const ART = [
    '1489599849927-2ee91cede3ba', // empty theatre, red seats
    '1440404653325-ab127d49abc1', // vintage projector and reels
    '1518676590629-3dcbd9c5a5c9', // film strip
    '1536440136628-849c177e76a1', // neon cinema facade
    '1485846234645-a62644f84728', // clapperboard in hand
    '1517604931442-7e0c8ed2963c', // packed auditorium
    '1594908900066-3f47337549d8', // clapperboard, pastel flat lay
    '1542204165-65bf26472b9b',   // reels on a table
    '1503095396549-807759245b35', // stage silhouettes, red curtain
    '1478720568477-152d9b164e26', // projector beam through smoke
    '1585647347483-22b66260dfff', // popcorn boxes
    '1574267432553-4b4628081c31', // red velvet seating
    '1524712245354-2c4e5e7121c0', // dark screening room
    '1516450360452-9312f5e86fc7', // concert crowd
    '1512149177596-f817c7ef5d4c', // popcorn close-up
    '1571310100246-e0676f359b42', // singer under red light
    '1598899134739-24c46f58b8c0', // clapperboard and popcorn
    '1567095761054-7a02e69e5c43', // smoke and stage light
    '1547153760-18fc86324498',   // dancer mid-move
    '1517457373958-b7bdd4587205', // festival audience
    '1499364615650-ec38552f4f34', // stage lighting rig
    '1493225457124-a3eb161ffa5f', // performer in smoke
    '1514320291840-2e0a9bf2a9ae'  // empty stage set
]


const art = (i, w = 1280) =>
    `https://images.unsplash.com/photo-${ART[((i % ART.length) + ART.length) % ART.length]}?w=${w}&q=80`

const wide = (i) => art(i, 1280)
const portrait = (i) => art(i, 900)

const MOVIES = [
    { title: 'Pushpa 2: The Rule', slug: 'pushpa-2', industry: 'Tollywood', genre: 'Action drama' },
    { title: 'Stree 2', slug: 'stree-2', industry: 'Bollywood', genre: 'Horror comedy' },
    { title: 'Kalki 2898 AD', slug: 'kalki-2898', industry: 'Tollywood', genre: 'Science fiction epic' },
    { title: 'Chhaava', slug: 'chhaava', industry: 'Bollywood', genre: 'Historical drama' },
    { title: 'Devara: Part 1', slug: 'devara', industry: 'Tollywood', genre: 'Action drama' },
    { title: 'Singham Again', slug: 'singham-again', industry: 'Bollywood', genre: 'Cop action' },
    { title: 'Game Changer', slug: 'game-changer', industry: 'Tollywood', genre: 'Political action' },
    { title: 'War 2', slug: 'war-2', industry: 'Bollywood', genre: 'Spy action' },
    { title: 'Sankranthiki Vasthunam', slug: 'sankranthiki', industry: 'Tollywood', genre: 'Family entertainer' },
    { title: 'Saiyaara', slug: 'saiyaara', industry: 'Bollywood', genre: 'Musical romance' },
    { title: 'Kuberaa', slug: 'kuberaa', industry: 'Tollywood', genre: 'Crime drama' },
    { title: 'Raid 2', slug: 'raid-2', industry: 'Bollywood', genre: 'Investigative thriller' },
    { title: 'HIT: The Third Case', slug: 'hit-3', industry: 'Tollywood', genre: 'Investigative thriller' },
    { title: 'Sky Force', slug: 'sky-force', industry: 'Bollywood', genre: 'Aerial action' },
    { title: 'Thandel', slug: 'thandel', industry: 'Tollywood', genre: 'Romantic drama' },
    { title: 'Housefull 5', slug: 'housefull-5', industry: 'Bollywood', genre: 'Ensemble comedy' },
    { title: 'Court: State vs A Nobody', slug: 'court', industry: 'Tollywood', genre: 'Courtroom drama' },
    { title: 'Jolly LLB 3', slug: 'jolly-llb-3', industry: 'Bollywood', genre: 'Courtroom comedy' },
    { title: 'They Call Him OG', slug: 'they-call-him-og', industry: 'Tollywood', genre: 'Gangster action' },
    { title: 'Border 2', slug: 'border-2', industry: 'Bollywood', genre: 'War drama' },
    { title: 'Hari Hara Veera Mallu', slug: 'hari-hara-veera-mallu', industry: 'Tollywood', genre: 'Period action' },
    { title: 'The Raja Saab', slug: 'raja-saab', industry: 'Tollywood', genre: 'Horror comedy' }
]

const take = (count, offset = 0) =>
    Array.from({ length: count }, (_, i) => MOVIES[(i + offset) % MOVIES.length])

const gallery = (slug, offset, count) =>
    Array.from({ length: count }, (_, i) => ({
        _id: `sample-${slug}-img-${i + 1}`,
        imageurl: portrait(offset + i * 3 + 1)
    }))

/* ---------- latest release ---------- */
const teasers = take(8).map((m, i) => ({
    _id: `sample-teaser-${i + 1}`,
    moviename: m.title,
    thumbnail: wide(i),
    youtubelink: '',
    industry: m.industry,
    genre: m.genre,
    sample: true
}))

const trailers = take(8, 8).map((m, i) => ({
    _id: `sample-trailer-${i + 1}`,
    moviename: m.title,
    thumbnail: wide(i + 8),
    youtubeTrailerlink: '',
    industry: m.industry,
    genre: m.genre,
    sample: true
}))

const albums = take(6, 2).map((m, i) => ({
    _id: `sample-album-${i + 1}`,
    moviename: m.title,
    thumbnail: wide(i + 16),
    youtubelinks: [],
    industry: m.industry,
    sample: true
}))

/* ---------- gallery ---------- */
const photos = take(8, 4).map((m, i) => ({
    _id: `sample-photo-${i + 1}`,
    title: `${m.title} — Promotional Shoot`,
    thumbnail: portrait(i + 3),
    images: gallery(`${m.slug}-shoot`, i + 3, 6),
    sample: true
}))

const actors = take(6, 0).map((m, i) => ({
    _id: `sample-actor-${i + 1}`,
    title: `${m.title} — Star Spotlight`,
    thumbnail: portrait(i + 9),
    images: gallery(`${m.slug}-star`, i + 9, 6),
    sample: true
}))

const actresses = take(6, 6).map((m, i) => ({
    _id: `sample-actress-${i + 1}`,
    title: `${m.title} — Lead Spotlight`,
    thumbnail: portrait(i + 15),
    images: gallery(`${m.slug}-lead`, i + 15, 6),
    sample: true
}))

const events = take(6, 10).map((m, i) => ({
    _id: `sample-event-${i + 1}`,
    title: `${m.title} — Pre-Release Event`,
    thumbnail: wide(i + 5),
    images: gallery(`${m.slug}-event`, i + 5, 6),
    youtubelink: '',
    sample: true
}))

const workingStills = take(6, 14).map((m, i) => ({
    _id: `sample-still-${i + 1}`,
    title: `${m.title} — On Set`,
    thumbnail: wide(i + 21),
    images: gallery(`${m.slug}-set`, i + 21, 6),
    youtubelink: '',
    sample: true
}))

/* ---------- editorial ---------- */
const filmNews = take(6, 1).map((m, i) => ({
    _id: `sample-filmnews-${i + 1}`,
    newsTitle: `${m.title}: everything we know about the ${m.genre.toLowerCase()}`,
    thumbnail: wide(i + 12),
    para1: `${m.title} is one of the ${m.industry} titles our desk is following most closely this season.`,
    para2: 'This entry is sample copy that ships with the site so the layout can be reviewed with realistic text in place. Publish a story from the dashboard and it replaces this automatically.',
    youtubelink: '',
    sample: true
}))

const generalNews = take(6, 7).map((m, i) => ({
    _id: `sample-generalnews-${i + 1}`,
    newsTitle: `Industry watch: what ${m.title} means for the season ahead`,
    thumbnail: wide(i + 18),
    para1: `A look at how ${m.title} fits into the wider ${m.industry} release calendar.`,
    para2: 'This entry is sample copy that ships with the site so the layout can be reviewed with realistic text in place. Publish a story from the dashboard and it replaces this automatically.',
    youtubelink: '',
    sample: true
}))

const interviews = take(6, 3).map((m, i) => ({
    _id: `sample-interview-${i + 1}`,
    title: `In conversation: the team behind ${m.title}`,
    thumbnail: wide(i + 6),
    interview_description: `An exclusive Film Nagar Talkies sit-down with the team behind ${m.title}. This is sample copy — publish the real interview from the dashboard and it takes over this slot.`,
    youtubelink: '',
    sample: true
}))

const reviews = take(8, 5).map((m, i) => ({
    _id: `sample-review-${i + 1}`,
    title: `${m.title} — Movie Review`,
    thumbnail: portrait(i + 2),
    review: `${m.title} arrives as one of the ${m.industry} releases our readers have asked about most, and this slot is where our verdict on the ${m.genre.toLowerCase()} will run.\n\n`
        + 'The text you are reading is sample copy bundled with the site so the reading column, drop cap and hero artwork can be judged with realistic length in place. '
        + 'Nothing here is a real assessment of the film.\n\n'
        + 'Publish a review from the dashboard and it replaces this entry automatically — no code change needed.',
    sample: true
}))

export const FALLBACK_CONTENT = {
    teasers,
    trailers,
    albums,
    photos,
    actors,
    actresses,
    events,
    workingStills,
    filmNews,
    generalNews,
    interviews,
    reviews
}

export default FALLBACK_CONTENT
