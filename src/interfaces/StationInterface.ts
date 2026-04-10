type Codec = "AAC+" | "AAC" | "MP3"

export interface Station {
  changeuuid: string;
  stationuuid: string;
  serveruuid: null;
  name: string;
  url: string;
  url_resolved: string;
  homepage: string;
  favicon: string;
  tags: string;
  country: string;
  countrycode: string;
  iso_3166_2: string;
  state: string;
  language: string;
  languagecodes: string;
  votes: number;
  lastchangetime: Date;
  lastchangetime_iso8601: Date;
  codec: Codec;
  bitrate: number;
  hls: number;
  lastcheckok: number;
  lastchecktime: Date;
  lastchecktime_iso8601: Date;
  lastcheckoktime: Date;
  lastcheckoktime_iso8601: Date;
  lastlocalchecktime: Date;
  lastlocalchecktime_iso8601: Date;
  clicktimestamp: string;
  clicktimestamp_iso8601: Date | null;
  clickcount: number;
  clicktrend: number;
  ssl_error: number;
  geo_lat: number | null;
  geo_long: number | null;
  geo_distance: null;
  has_extended_info: boolean;
}