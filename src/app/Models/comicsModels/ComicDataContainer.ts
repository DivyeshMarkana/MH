import { Comic } from "./Comic";


export interface ComicDataContainer {
    offset: string;
    limit: string;
    total: string;
    count: string;
    results: Array<Comic>;
}
