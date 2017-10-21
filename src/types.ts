export type State = {
    selectedProject: Project | undefined;
};

export type Link = {
    text?: string;
    url: string;
};

export type Project = {
    name: string;
    url: string;
    description: string;
    imageUrl: string;
};