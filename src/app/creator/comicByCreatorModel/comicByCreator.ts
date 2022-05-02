import { DataContainer } from "./DataContainer";

export interface ComicByCreator {
    code:            number;
    status:          string;
    copyright:       string;
    attributionText: string;
    attributionHTML: string;
    data:            DataContainer;
    etag:            string;
}

``
