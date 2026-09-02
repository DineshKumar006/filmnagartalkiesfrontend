/**
 * Normalises whatever the API stores in a "youtube link" field into an
 * embeddable URL. Returns null when the value cannot be embedded — callers
 * must skip the <iframe> in that case, because an empty/relative src makes the
 * browser load the site itself inside the frame.
 */
export const toEmbedUrl = (link) => {
    if (typeof link !== 'string') return null

    const raw = link.trim()
    if (!/^https?:\/\//i.test(raw)) return null

    try {
        const url = new URL(raw)
        const host = url.hostname.replace(/^www\./, '')

        if (host === 'youtu.be') {
            const id = url.pathname.slice(1)
            return id ? `https://www.youtube.com/embed/${id}` : null
        }

        if (host.endsWith('youtube.com')) {
            if (url.pathname === '/watch') {
                const id = url.searchParams.get('v')
                return id ? `https://www.youtube.com/embed/${id}` : null
            }
            if (url.pathname.startsWith('/shorts/')) {
                const id = url.pathname.split('/')[2]
                return id ? `https://www.youtube.com/embed/${id}` : null
            }
            return raw
        }

        return raw
    } catch (error) {
        return null
    }
}
