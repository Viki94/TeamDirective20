import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Campaign } from './../models/campaign.model';
import { ApiService } from './api.service';

@Injectable()
export class CampaignsService {

    constructor(private apiService: ApiService) {
    }

    getAllCampaigns() {
        return this.apiService.get('api/campaigns/get-all-campaigns');
    }

    createCampaign(campaign: Campaign): Observable<any>{
        return this.apiService.post('api/campaigns/create-campaign', campaign);
    }
};
