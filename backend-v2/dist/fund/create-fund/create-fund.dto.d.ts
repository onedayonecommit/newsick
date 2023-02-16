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
    discord_address: string;
    funding_title: string;
    nft_name: string;
}
export declare class createFundLyricsDto {
    lyrics_name: string;
    lyrics_sns_address: string;
    lyrics_info: string;
}
export declare class createFundMusicDto {
    music_name: string;
    music_sns_address: string;
    music_info: string;
}
export declare class createFundSingerDto {
    singer_name: string;
    singer_sns_address: string;
    singer_info: string;
}
export declare class createFundMainDto {
    fund: createFundDto;
    lyrics_maker: createFundLyricsDto;
    music_maker: createFundMusicDto;
    singer: createFundSingerDto;
}
