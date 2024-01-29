export interface BookDetails {
    parentBookId: string;
    series: string | null;
    serialNumber: number;
    written: number;
    rawEdit: number;
    finalEdit: number;
}