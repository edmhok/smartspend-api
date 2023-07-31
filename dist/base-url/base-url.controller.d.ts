import { BaseUrlService } from './base-url.service';
export declare class BaseUrlController {
    private baseUrlService;
    constructor(baseUrlService: BaseUrlService);
    getBaseUrl(): Promise<void>;
}
