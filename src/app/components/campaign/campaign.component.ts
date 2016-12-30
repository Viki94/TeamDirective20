import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CampaignsService } from './../../services/campaigns.service';
import { Campaign } from '../../models/campaign.model';

const DEFAULT_CAMPAIGN_IMG = 'https://i.ytimg.com/vi/JWY1bpbmyS4/maxresdefault.jpg';

@Component({
    moduleId: 'module.id',
    selector: 'campaign',
    templateUrl: './campaign.component.html',
    styleUrls: [
        './campaign.component.css'
    ]
})
export class CampaignComponent implements OnInit {
    model: Campaign;
    campaigns: Campaign[] = [];

    constructor(
        private campaignsService: CampaignsService,
        private router: Router,
        private activatedRoute: ActivatedRoute) {
    }

    private id: string;

    ngOnInit() {
        this.model = new Campaign('', '', '', '', '', 0, 0, '');

        this.activatedRoute.params
            .subscribe(params => {
                this.id = params['id'];
            })

        this.campaignsService.getById(this.id)
            .subscribe(campaigns => {
                this.campaigns = campaigns.map(campaign => {
                    return Object.assign({}, campaign, { image: campaign.image || DEFAULT_CAMPAIGN_IMG })
                });
            });
    };

    viewDetails(campaignId) {
        this.router.navigate([`campaign/${campaignId}`]);
    }

    return() {
        this.router.navigate([`campaigns`]);
    }
};
