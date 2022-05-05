import { CreatorDataContainer } from "./CreatorDataContainer";

export interface CreatorDataWrapper {
    code:            number;
    status:          string;
    copyright:       string;
    attributionText: string;
    attributionHTML: string;
    data:            CreatorDataContainer;
    etag:            string;
}


