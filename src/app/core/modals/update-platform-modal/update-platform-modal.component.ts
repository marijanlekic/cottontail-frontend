import {Component, Input} from "@angular/core";
import {ModalService} from "../../../ui/modal/modal.service";
import {DirectiveBase} from "../../../util/directive-base/directive-base";
import {SystemService} from "../../../platform-providers/system.service";

@Component({
    selector: "ct-update-platform-modal",
    styleUrls: ["update-platform-modal.component.scss"],
    template: `
        <div class="body">

            <div class="header">
                
                <div class="logo mb-1">                    
                </div>

                <div class="header-text">                    
                    <ng-container *ngIf="platformIsOutdated; else upToDate">
                        A new version of Rabix Composer is available!
                    </ng-container>

                    <ng-template #upToDate>
                        Rabix Composer is up to date!
                    </ng-template>
                    
                </div>
            </div>

            <div class="dialog-content">

                <ng-container *ngIf="platformIsOutdated; else upToDateSection">
                    What's new:
                    <div [ct-markdown]="description">
                    </div>

                    <div class="version-info">Current version: Rabix Composer ({{currentVersion}})</div>
                    <div class="version-info">New version: Rabix Composer ({{newVersion}})</div>

                    <div class="dialog-centered">
                        <div class="mt-2">
                            <div>
                                <a #downloadLink href="{{linkForDownload}}"
                                   data-test="download-link" class="btn btn-primary btn-lg"
                                   (click)="system.openLink(downloadLink.href); modal.close()">Download</a>
                            </div>

                            <div>
                                <button data-test="dismiss-button" class="btn-link clickable dismissButton"
                                        (click)="skipUpdateVersion()">Skip this version</button>
                            </div>
                        </div>
                    </div>
                </ng-container>

                <ng-template #upToDateSection>
                    <div class="dialog-centered">
                        <div>
                            <div>
                                <button data-test="close-button" class="btn btn-primary btn-lg"
                                        (click)="modal.close()">Close</button>
                            </div>
                        </div>
                    </div>
                </ng-template>
            </div>
        </div>
    `
})
export class UpdatePlatformModalComponent extends DirectiveBase {

    @Input()
    platformIsOutdated = false;

    @Input()
    description: string;

    @Input()
    currentVersion: string;

    @Input()
    newVersion: string;

    @Input()
    linkForDownload: string;

    constructor(public modal: ModalService, public system: SystemService) {
        super();
    }

    skipUpdateVersion() {

    }
}
