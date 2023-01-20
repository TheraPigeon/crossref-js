export interface RequestConfig {
    rows?: number, // The number of rows per page
    offset?: number, // The number of rows to skip before returning
    mailto?: string, // The email address to identify yourself and be in the “polite pool”
}
