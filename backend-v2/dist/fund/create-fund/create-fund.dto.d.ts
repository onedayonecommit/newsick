export declare class createFundDto {
    id: number;
    creator_id: string;
    category?: string;
    funding_info: string;
    funding_start_date: Date;
    funding_finish_date: Date;
    funding_production_date: Date;
    funding_nft_image: string;
    funding_metadata: string;
}
export declare class createFundLyricsDto {
    lyrics_name: string;
    lyrics_info: string;
    lyrics_sex: number;
}
export declare class createFundMusicDto {
    music_name: string;
    music_info: string;
    music_sex: number;
}
export declare class createFundSingerDto {
    singer_name: string;
    singer_info: string;
    singer_sex: number;
}
export declare class createFundMainDto {
    fund: createFundDto;
    lyrics_maker: createFundLyricsDto;
    music_maker: createFundMusicDto;
    singer: createFundSingerDto;
}
