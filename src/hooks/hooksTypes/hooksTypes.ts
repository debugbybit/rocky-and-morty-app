export interface Character {
  name: string;
}

export interface FetchResult {
  results: Character[];
}

export interface UseFetchResult {
  characters: Character[];
  loading: boolean;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
