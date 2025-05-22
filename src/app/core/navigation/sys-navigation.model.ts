export interface SystemNavigationItem {
    name: string;
    route: string;
}

export interface SystemNavigationCategory {
    title: string;
    items: SystemNavigationItem[];
}
