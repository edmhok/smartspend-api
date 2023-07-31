import { Repository } from 'typeorm';
import { BaseUrl } from './base-url.entity';
export declare class BaseUrlService {
    private baseUrlRepo;
    constructor(baseUrlRepo: Repository<BaseUrl>);
    saveBaseUrl(baseUrl: string): Promise<void>;
}
