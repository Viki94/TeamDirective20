import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CampaignsService } from '../../services/campaigns.service';
import { Campaign } from '../../models/campaign.model';

const DEFAULT_CAMPAIGN_IMG = 'https://i.ytimg.com/vi/JWY1bpbmyS4/maxresdefault.jpg';

@Component({
    moduleId: 'module.id',
    selector: 'campaign-form',
    templateUrl: './campaign-form.component.html',
    styleUrls: [
        './campaign-form.component.css'
    ]
})
export class CampaignFormComponent implements OnInit {
    campaign: Campaign;

    constructor(private campaignsService: CampaignsService, private router: Router) { }

    ngOnInit() {
        this.campaign = new Campaign('', '', '', '', '', 0, 0, '');
    }

    createCampaign() {
        this.campaign.image = this.campaign.image || DEFAULT_CAMPAIGN_IMG;

        this.campaignsService.createCampaign(this.campaign).subscribe(() => {
            this.router.navigate(['campaigns'])
        });
    }

    return() {
        this.router.navigate(['campaigns'])
    }

};
