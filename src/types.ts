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

export const enum TransitionClasses {
    None = '',
    SlideIn = 'slide-in'
}

export const enum OpenSourceContributionType {
    Commit = 'Commit',
    Issue = 'Issue Report'
}

export type OpenSourceContribution = {
    repositoryName: string;
    type: OpenSourceContributionType;
    date: string;
    url: string;
};
