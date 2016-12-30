import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CampaignsService } from './../../services/campaigns.service';
import { Campaign } from '../../models/campaign.model';

const DEFAULT_CAMPAIGN_IMG = 'https://i.ytimg.com/vi/JWY1bpbmyS4/maxresdefault.jpg';

@Component({
    moduleId: 'module.id',
    selector: 'campaign-preview',
    templateUrl: './campaign-preview.component.html',
    styleUrls: [
        './campaign-preview.component.css'
    ]
})
export class CampaignPreviewComponent implements OnInit {
    campaign: Campaign = null;

    constructor(
        private campaignsService: CampaignsService,
        private router: Router,
        private activatedRoute: ActivatedRoute) {
    }

    private id: string;

    ngOnInit() {
        this.campaign = new Campaign('', '', '', '', '', 0, 0, '', '');

        this.activatedRoute.params
            .subscribe(params => {
                this.id = params['id'];
            })

        this.campaignsService.getById(this.id)
            .subscribe(campaign => {
                this.campaign = Object.assign({}, campaign, { image: campaign.image || DEFAULT_CAMPAIGN_IMG });
            });
    };

    viewDetails(campaignId) {
        this.router.navigate([`campaign/${campaignId}`]);
    }

    return() {
        this.router.navigate([`campaign/list`]);
    }
};
