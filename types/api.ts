
export interface RequestOptions extends RequestInit {
    headers?: Record<string, string>;
    _retry?: boolean;
}
  
export interface ApiError {
    message: string;
    statusCode?: number;
    error?: string;
}