type NewsSource 

export interface NewsSourcesResponse {
  status: 'ok' | 'error';
  source: NewsSource[];
}  