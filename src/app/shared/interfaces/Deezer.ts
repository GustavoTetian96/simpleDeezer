export interface Deezer {
  data:  Datum[];
  total: number;
  next:  string;
}

export interface Datum {
  id:                      string;
  readable:                boolean;
  title:                   string;
  title_short:             string;
  title_version:           TitleVersion;
  link:                    string;
  duration:                number;
  rank:                    string;
  explicit_lyrics:         boolean;
  explicit_content_lyrics: number;
  explicit_content_cover:  number;
  preview:                 string;
  md5_image:               string;
  artist:                  Artist;
  album:                   Album;
  type:                    DatumType;
}

export interface Album {
  id:           string;
  title:        string;
  cover:        string;
  cover_small:  string;
  cover_medium: string;
  cover_big:    string;
  cover_xl:     string;
  md5_image:    string;
  tracklist:    string;
  type:         AlbumType;
}

export enum AlbumType {
  Album = "album",
}

export interface Artist {
  id:             string;
  name:           string;
  link:           string;
  picture:        string;
  picture_small:  string;
  picture_medium: string;
  picture_big:    string;
  picture_xl:     string;
  tracklist:      string;
  type:           ArtistType;
}

export enum ArtistType {
  Artist = "artist",
}
export enum TitleVersion {
  Empty = "",
  Pt2 = "(Pt. 2)",
  The2016 = "(2016)",
}

export enum DatumType {
  Track = "track",
}
