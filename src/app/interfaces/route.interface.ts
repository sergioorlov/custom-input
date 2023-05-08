export interface IRouteConfig {
  name: string;
  path: string;
  fullpath?: string;
  param?: string;
}

export interface IRouteConfigs {
  [key: string]: IRouteConfig;
}
