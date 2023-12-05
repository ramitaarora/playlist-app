import Track from './Track';

export default function TrackList() {
    const songs = [
        {
            title: 'Northern Attitude',
            artist: 'Noah Kahan',
            album: 'Stick Season'
        },
        {
            title: 'Stick Season',
            artist: 'Noah Kahan',
            album: 'Stick Season'
        },
        {
            title: 'No Complaints',
            artist: 'Noah Kahan',
            album: 'Stick Season'
        },
        {
            title: 'Dial Drunk',
            artist: 'Noah Kahan',
            album: 'Stick Season'
        }
    ];

    return (
        <div id="tracklist">
            {songs.map(song => (
                <Track song={song} />
            ))}
        </div>
        
    )
}