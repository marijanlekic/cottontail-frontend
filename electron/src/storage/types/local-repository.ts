import {User} from "../../sbg-api-client/interfaces/user";
import {RepositoryType} from "./repository-type";

export interface CredentialsCache {
    id: string;
    user: Partial<User>;
    url: string;
    token: string;
}

export class LocalRepository extends RepositoryType {

    activeCredentials: CredentialsCache = null;

    credentials: CredentialsCache[] = [];

    localFolders: string[] = [];

    publicAppsGrouping: "toolkit" | "category" = "toolkit";

    selectedAppsPanel: "myApps" | "publicApps" = "myApps";

    sidebarHidden = false;

    openTabs = [{
        id: "?welcome",
        label: "Welcome",
        type: "Welcome"
    }];

    ignoredUpdateVersion = null;
}
