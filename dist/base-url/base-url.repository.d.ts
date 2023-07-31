import { Repository } from "typeorm";
import { BaseUrl } from "./base-url.entity";
export declare class BaseUrlRepository extends Repository<BaseUrl> {
    getBaseUrl(): Promise<BaseUrl>;
}
