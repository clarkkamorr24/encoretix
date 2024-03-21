export type Image = {
  ratio: string;
  url: string;
  width: string;
  height: string;
  fallback: boolean;
};

export type Attraction = {
  name: string;
  type: string;
  id: string;
  test: boolean;
  url: string;
  locale: string;
  images: Image[];
};

export type Attractions = {
  attractions: Attraction[];
};

export type EmbeddedData = {
  _embedded: Attractions;
};
