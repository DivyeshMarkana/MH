import { CreatorSummary } from "./CreatorSummary";


export interface CreatorList {
    available: string;
    returned: string;
    collectionURI: string;
    items: CreatorSummary[];
}
