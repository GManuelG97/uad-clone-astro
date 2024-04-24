export interface IRoute {
    name: string;
    url: string;
    subRoute?: ISubRoute[] ;
} 
export interface ISubRoute {
    name: string;
    url: string;
}

export interface IGlobal {
    nameSite: string;
    logo: string;
    routers: IRoute[];
}