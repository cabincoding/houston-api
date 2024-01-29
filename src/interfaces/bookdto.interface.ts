import { AuthorDTO } from "./authordto.interface";
import { BookDetails } from "./book-details.interface";

export interface BookDTO {
    id: string;
    title: string;
    subtitle?: string;
    author: AuthorDTO;
    releaseDate: Date,
    details: BookDetails;
    photoUrl: string;
    progressFeature: boolean;
}