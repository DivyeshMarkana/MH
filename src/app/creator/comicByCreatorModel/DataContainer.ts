import { Comic } from "./Comic";


export interface DataContainer {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Comic[];
}
