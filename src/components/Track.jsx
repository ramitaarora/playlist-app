export default function Track({song}) {
    return (
        <div id="track">
            <h2>{song.title}</h2>
            <p>{song.artist} | {song.album}</p>
        </div>
    )
}