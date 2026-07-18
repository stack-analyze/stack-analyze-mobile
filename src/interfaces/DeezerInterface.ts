export interface Welcome {
    data:  Deezer[];
    total: number;
    next:  string;
}

export interface Deezer {
    id:              number;
    title:           string;
    link:            string;
    cover:           string;
    cover_small:     string;
    cover_medium:    string;
    cover_big:       string;
    cover_xl:        string;
    md5_image:       string;
    genre_id:        number;
    nb_tracks:       number;
    record_type:     'album' | 'ep' | 'single';
    tracklist:       string;
    explicit_lyrics: boolean;
    artist:          Artist;
    type:            'album' | 'ep' | 'single';
}

export interface Artist {
    id:             number;
    name:           string;
    link:           string;
    picture:        string;
    picture_small:  string;
    picture_medium: string;
    picture_big:    string;
    picture_xl:     string;
    tracklist:      string;
    type:           'artist';
}
