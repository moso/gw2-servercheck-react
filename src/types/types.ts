export enum ColorScheme {
    Light = 'light',
    Dark = 'dark',
}

export type Gw2Match = {
    id: number;
    red: number;
    blue: number;
    green: number;
};

export type Gw2Matchup = {
    id: number;
    worlds: Gw2Match;
    all_worlds: {
        red?: Array<number>;
        blue?: Array<number>;
        green?: Array<number>;
    };
    start_time: string;
    end_time: string;
    kills: {
        red?: number;
        blue?: number;
        green?: number;
    };
    deaths: {
        red?: number;
        blue?: number;
        green?: number;
    };
    victory_points: {
        red?: number;
        blue?: number;
        green?: number;
    };
};

export enum ServerPopulation {
    Low = 1,
    Medium = 2,
    High = 3,
    VeryHigh = 4,
    Full = 5,
}

export type Gw2Server = {
    id: number;
    name: string;
    population: string;
};

export type Gw2ServerArray = {
    server: number[] | undefined;
};
