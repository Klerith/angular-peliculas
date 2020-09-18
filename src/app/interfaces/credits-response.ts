export interface CreditsReponse {
    id:   number;
    cast: Cast[];
    crew: Crew[];
}

export interface Cast {
    cast_id:      number;
    character:    string;
    credit_id:    string;
    gender:       number;
    id:           number;
    name:         string;
    order:        number;
    profile_path: null | string;
}

export interface Crew {
    credit_id:    string;
    department:   Department;
    gender:       number;
    id:           number;
    job:          string;
    name:         string;
    profile_path: null | string;
}

export enum Department {
    Art = "Art",
    Camera = "Camera",
    CostumeMakeUp = "Costume & Make-Up",
    Crew = "Crew",
    Directing = "Directing",
    Editing = "Editing",
    Lighting = "Lighting",
    Production = "Production",
    Sound = "Sound",
    VisualEffects = "Visual Effects",
    Writing = "Writing",
}
