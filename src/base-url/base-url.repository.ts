import { EntityRepository, Repository } from "typeorm";
import { BaseUrl } from "./base-url.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
@EntityRepository(BaseUrl)
export class BaseUrlRepository extends Repository<BaseUrl> {
    async getBaseUrl(): Promise<BaseUrl> {
        // custom method to get the latest base URL 
        return this.findOne({order: {id: "DESC"}}); 
    }
}