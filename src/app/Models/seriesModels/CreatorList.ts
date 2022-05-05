import { CharacterSummary } from "./CharacterSummary";


export interface CreatorList {
    available: number;
    returned: number;
    collectionURI: string;
    items: CharacterSummary[];
}
