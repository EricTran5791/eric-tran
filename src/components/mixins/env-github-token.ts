declare const process: any;

export const envGitHubToken = {
    data() {
        return {
            envGitHubToken: process.env.GITHUB_TOKEN
        };
    }
};
