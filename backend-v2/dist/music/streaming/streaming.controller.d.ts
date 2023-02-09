import { streamingDto } from './streaming.dto';
import { StreamingService } from './streaming.service';
export declare class StreamingController {
    private readonly streamingService;
    constructor(streamingService: StreamingService);
    musicStreaming(dto: streamingDto): Promise<void>;
}
