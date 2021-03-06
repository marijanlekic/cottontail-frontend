import {StatusControlProvider} from "../../layout/status-bar/status-control-provider.interface";

export interface WorkboxTab extends StatusControlProvider {

    onTabActivation(): void;

    registerOnTabLabelChange(update: (label: string) => void, originalLabel: string);
}
