
export interface IGitRepo {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    description: string;
    html_url: string;
    url: string;
    owner:IGitRepoOwner;
}

export interface IGitRepoOwner {
    login:string;
    avatar_url:string;
    type:string;
    site_admin:boolean;
}
