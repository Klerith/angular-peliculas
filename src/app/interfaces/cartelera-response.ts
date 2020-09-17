export interface CarteleraResponse {
    results:       Movie[];
    page:          number;
    total_results: number;
    dates:         Dates;
    total_pages:   number;
}

export interface Dates {
    maximum: Date;
    minimum: Date;
}

export interface Movie {
    popularity:        number;
    vote_count:        number;
    video:             boolean;
    poster_path:       string;
    id:                number;
    adult:             boolean;
    backdrop_path:     string;
    original_language: OriginalLanguage;
    original_title:    string;
    genre_ids:         number[];
    title:             string;
    vote_average:      number;
    overview:          string;
    release_date:      Date;
}

export enum OriginalLanguage {
    En = "en",
    Es = "es",
    Ko = "ko",
}
