import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CampaignsService } from '../../services/campaigns.service';
import { Campaign } from '../../models/campaign.model';

const DEFAULT_CAMPAIGN_IMG = 'https://i.ytimg.com/vi/JWY1bpbmyS4/maxresdefault.jpg';

@Component({
    moduleId: 'module.id',
    selector: 'campaign-create',
    templateUrl: './campaign-create.component.html',
    styleUrls: [
        './campaign-create.component.css'
    ]
})
export class CampaignCreateComponent implements OnInit {
    campaign: Campaign;

    constructor(private campaignsService: CampaignsService, private router: Router) { }

    ngOnInit() {
        this.campaign = new Campaign('', '', '', '', '', 0, 0, '', '');
    }

    createCampaign() {
        this.campaign.image = this.campaign.image || DEFAULT_CAMPAIGN_IMG;

        this.campaignsService.createCampaign(this.campaign).subscribe(() => {
            this.return();
        });
    }

    return() {
        this.router.navigate(['campaign/list'])
    }

};
