import { StoryDataContainer } from "./StoryDataContainer";

export interface StoryDataWrapper {
    code: number;
    status: number;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    data: StoryDataContainer;
    etag: string;
}
