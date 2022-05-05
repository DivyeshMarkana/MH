import { SeriesDataContainer } from "./SeriesDataContainer";

export interface SeriesDataWrapper {
    code:            number;
    status:          string;
    copyright:       string;
    attributionText: string;
    attributionHTML: string;
    data:            SeriesDataContainer;
    etag:            string;
}