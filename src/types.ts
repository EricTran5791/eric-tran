export type Link = {
    text?: string;
    url: string;
};

export type Project = {
    name: string;
    url: string;
    description: string;
    imageUrl: string;
    tags: ProjectTags[];
};

export const enum ProjectTags {
    Android = 'Android',
    Vue = 'Vue',
    WordPress = 'WordPress',
    WooCommerce = 'WooCommerce'
}
