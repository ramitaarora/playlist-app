export default function Track({song}) {
    return (
        <div id="track">
            <div id="song">
                <h2>{song.title}</h2>
                <p>{song.artist} | {song.album}</p>
            </div>
            <div id="add-button">
                <p>+</p>
            </div>
        </div>
    )
}