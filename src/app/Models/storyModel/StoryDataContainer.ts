import { Story } from "./Story";


export interface StoryDataContainer {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Story[];
}
