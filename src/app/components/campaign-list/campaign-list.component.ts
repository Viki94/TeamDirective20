import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CampaignsService } from './../../services/campaigns.service';
import { Campaign } from '../../models/campaign.model';

const DEFAULT_CAMPAIGN_IMG = 'https://i.ytimg.com/vi/JWY1bpbmyS4/maxresdefault.jpg';

@Component({
    moduleId: 'module.id',
    selector: 'campaign-list',
    templateUrl: './campaign-list.component.html',
    styleUrls: [
        './campaign-list.component.css'
    ]
})
export class CampaignListComponent implements OnInit {
    model: Campaign;
    campaigns: Campaign[] = [];

    constructor(private campaignsService: CampaignsService, private router: Router) { }

    ngOnInit() {
        this.model = new Campaign('', '', '', '', '', 0, 0, '');
        this.campaignsService.getAllCampaigns()
            .subscribe(campaigns => {
                this.campaigns = campaigns.map(campaign => {
                    return Object.assign({}, campaign, { image: campaign.image || DEFAULT_CAMPAIGN_IMG })
                });
            });
    };

    addCampaign() {
        this.router.navigate(['campaign/create']);
    }

    viewDetails(campaignId) {
        this.router.navigate([`campaign/preview/${campaignId}`]);
    }
};
