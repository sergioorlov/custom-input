import {IRouteConfig, IRouteConfigs} from "../interfaces/route.interface";

const reactive: IRouteConfig = {
  name: 'reactive',
  path: 'reactive',
  fullpath: '/reactive',
};

const templateDriven: IRouteConfig = {
  name: 'template-driven',
  path: 'template-driven',
  fullpath: '/template-driven',
};

export const HA_ROUTE_CONFIGS: IRouteConfigs = {
  reactive,
  templateDriven,
};
