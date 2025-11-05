export interface SearchQuery {
  term: string;
  filters?: Record<string, any>;
}

export interface SearchResult<T = any> {
  items: T[];
  total: number;
}
