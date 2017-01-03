webpackJsonp([0,4],{

/***/ 1098:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(463);


/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CampaignsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CampaignsService = (function () {
    function CampaignsService(apiService) {
        this.apiService = apiService;
    }
    CampaignsService.prototype.getAllCampaigns = function () {
        return this.apiService.get('api/campaigns/get-all-campaigns');
    };
    CampaignsService.prototype.createCampaign = function (campaign) {
        return this.apiService.post('api/campaigns/create-campaign', campaign);
    };
    CampaignsService.prototype.getById = function (id) {
        return this.apiService.get("api/campaigns/get-by-id/" + id);
    };
    CampaignsService.prototype.editCampaign = function (campaignData) {
        return this.apiService.put('api/campaigns/edit-campaign', campaignData);
    };
    CampaignsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === 'function' && _a) || Object])
    ], CampaignsService);
    return CampaignsService;
    var _a;
}());
;
//# sourceMappingURL=C:/Users/Dimitar Pechev/Desktop/TeamDirective20/src/campaigns.service.js.map

/***/ },

/***/ 250:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Campaign; });
var Campaign = (function () {
    function Campaign(name, description, ownerName, ownerContact, creatorId, neededAmount, currentAmount, iban, image) {
        this.name = name;
        this.description = description;
        this.ownerName = ownerName;
        this.ownerContact = ownerContact;
        this.creatorId = creatorId;
        this.neededAmount = neededAmount;
        this.currentAmount = currentAmount;
        this.iban = iban;
        this.image = image;
    }
    return Campaign;
}());
;
//# sourceMappingURL=C:/Users/Dimitar Pechev/Desktop/TeamDirective20/src/campaign.model.js.map

/***/ },

/***/ 251:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FactsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FactsService = (function () {
    function FactsService(apiService) {
        this.apiService = apiService;
    }
    FactsService.prototype.getAllFacts = function () {
        return this.apiService.get('api/facts/get-all-facts');
    };
    FactsService.prototype.createFact = function (fact) {
        return this.apiService.post('api/facts/create-fact', fact);
    };
    FactsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === 'function' && _a) || Object])
    ], FactsService);
    return FactsService;
    var _a;
}());
;
//# sourceMappingURL=C:/Users/Dimitar Pechev/Desktop/TeamDirective20/src/facts.service.js.map

/***/ },

/***/ 375:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__EmailValidator__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RangeValidator__ = __webpack_require__(592);


/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__EmailValidator__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__RangeValidator__["a"]; });

//# sourceMappingURL=C:/Users/Dimitar Pechev/Desktop/TeamDirective20/src/index.js.map

/***/ },

/***/ 376:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login_component__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__register_register_component__ = __webpack_require__(594);


/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__login_login_component__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__register_register_component__["a"]; });

//# sourceMappingURL=C:/Users/Dimitar Pechev/Desktop/TeamDirective20/src/index.js.map

/***/ },

/***/ 377:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_campaigns_service__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_campaign_model__ = __webpack_require__(250);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CampaignCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DEFAULT_CAMPAIGN_IMG = 'https://i.ytimg.com/vi/JWY1bpbmyS4/maxresdefault.jpg';
var CampaignCreateComponent = (function () {
    function CampaignCreateComponent(campaignsService, router) {
        this.campaignsService = campaignsService;
        this.router = router;
    }
    CampaignCreateComponent.prototype.ngOnInit = function () {
        this.campaign = new __WEBPACK_IMPORTED_MODULE_3__models_campaign_model__["a" /* Campaign */]('', '', '', '', '', 0, 0, '', '');
    };
    CampaignCreateComponent.prototype.createCampaign = function () {
        var _this = this;
        this.campaign.image = this.campaign.image || DEFAULT_CAMPAIGN_IMG;
        var user = JSON.parse(localStorage.getItem('currentUser'));
        this.campaign['addedBy'] = user['username'];
        this.campaignsService.createCampaign(this.campaign).subscribe(function () {
            _this.return();
        });
    };
    CampaignCreateComponent.prototype.return = function () {
        this.router.navigate(['campaign/list']);
    };
    CampaignCreateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            moduleId: 'module.id',
            selector: 'campaign-create',
            template: __webpack_require__(795),
            styles: [__webpack_require__(770)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_campaigns_service__["a" /* CampaignsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_campaigns_service__["a" /* CampaignsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === 'function' && _b) || Object])
    ], CampaignCreateComponent);
    return CampaignCreateComponent;
    var _a, _b;
}());
;
//# sourceMappingURL=C:/Users/Dimitar Pechev/Desktop/TeamDirective20/src/campaign-create.component.js.map

/***/ },

/***/ 378:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_campaigns_service__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_campaign_model__ = __webpack_require__(250);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CampaignListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DEFAULT_CAMPAIGN_IMG = 'https://i.ytimg.com/vi/JWY1bpbmyS4/maxresdefault.jpg';
var CampaignListComponent = (function () {
    function CampaignListComponent(campaignsService, router) {
        this.campaignsService = campaignsService;
        this.router = router;
        this.campaigns = [];
    }
    CampaignListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isUserAdmin = !!localStorage.getItem('currentUser') && JSON.parse(localStorage.getItem('currentUser'))['admin'];
        this.model = new __WEBPACK_IMPORTED_MODULE_3__models_campaign_model__["a" /* Campaign */]('', '', '', '', '', 0, 0, '', '');
        this.campaignsService.getAllCampaigns()
            .subscribe(function (campaigns) {
            _this.campaigns = campaigns.map(function (campaign) {
                return Object.assign({}, campaign, { image: campaign.image || DEFAULT_CAMPAIGN_IMG });
            });
        });
    };
    ;
    CampaignListComponent.prototype.addCampaign = function () {
        this.router.navigate(['campaign/create']);
    };
    CampaignListComponent.prototype.viewDetails = function (campaignId) {
        this.router.navigate([("campaign/preview/" + campaignId)]);
    };
    CampaignListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            moduleId: 'module.id',
            selector: 'campaign-list',
            template: __webpack_require__(796),
            styles: [__webpack_require__(771)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_campaigns_service__["a" /* CampaignsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_campaigns_service__["a" /* CampaignsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === 'function' && _b) || Object])
    ], CampaignListComponent);
    return CampaignListComponent;
    var _a, _b;
}());
;
//# sourceMappingURL=C:/Users/Dimitar Pechev/Desktop/TeamDirective20/src/campaign-list.component.js.map

/***/ },

/***/ 379:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_campaigns_service__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_campaign_model__ = __webpack_require__(250);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CampaignPreviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DEFAULT_CAMPAIGN_IMG = 'https://i.ytimg.com/vi/JWY1bpbmyS4/maxresdefault.jpg';
var CampaignPreviewComponent = (function () {
    function CampaignPreviewComponent(campaignsService, router, activatedRoute) {
        this.campaignsService = campaignsService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.campaign = null;
        this.showEdit = false;
    }
    CampaignPreviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.campaign = new __WEBPACK_IMPORTED_MODULE_3__models_campaign_model__["a" /* Campaign */]('', '', '', '', '', 0, 0, '', '');
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.id = params['id'];
        });
        this.campaignsService.getById(this.id)
            .subscribe(function (campaign) {
            _this.campaign = Object.assign({}, campaign, { image: campaign.image || DEFAULT_CAMPAIGN_IMG });
        });
    };
    ;
    CampaignPreviewComponent.prototype.viewDetails = function (campaignId) {
        this.router.navigate([("campaign/" + campaignId)]);
    };
    CampaignPreviewComponent.prototype.return = function () {
        this.router.navigate(["campaign/list"]);
    };
    CampaignPreviewComponent.prototype.showEditCampaign = function () {
        this.showEdit = true;
    };
    CampaignPreviewComponent.prototype.showAddedDetails = function () {
        this.showEdit = false;
    };
    CampaignPreviewComponent.prototype.editCampaign = function () {
        var _this = this;
        this.campaignsService.editCampaign(this.campaign)
            .subscribe(function (res) {
            _this.showEdit = true;
        });
        this.router.navigate(["campaign/list"]);
    };
    CampaignPreviewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            moduleId: 'module.id',
            selector: 'campaign-preview',
            template: __webpack_require__(797),
            styles: [__webpack_require__(772)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_campaigns_service__["a" /* CampaignsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_campaigns_service__["a" /* CampaignsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], CampaignPreviewComponent);
    return CampaignPreviewComponent;
    var _a, _b, _c;
}());
;
//# sourceMappingURL=C:/Users/Dimitar Pechev/Desktop/TeamDirective20/src/campaign-preview.component.js.map

/***/ },

/***/ 380:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CampaignComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CampaignComponent = (function () {
    function CampaignComponent() {
    }
    CampaignComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            moduleId: 'module.id',
            selector: 'campaigns',
            template: __webpack_require__(798)
        }), 
        __metadata('design:paramtypes', [])
    ], CampaignComponent);
    return CampaignComponent;
}());
;
//# sourceMappingURL=C:/Users/Dimitar Pechev/Desktop/TeamDirective20/src/campaign.component.js.map

/***/ },

/***/ 381:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_facts_service__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_fact_model__ = __webpack_require__(384);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FactFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DEFAULT_FACT_IMG = 'https://2.bp.blogspot.com/-g4uaWVsUD5A/V35HXQ2Gu8I/AAAAAAAAKtw/LUiTD1z6g040Sne7gLQeNyoCG_AetC-awCLcB/s1600/postits.jpg';
var FactFormComponent = (function () {
    function FactFormComponent(factsService, router) {
        this.factsService = factsService;
        this.router = router;
    }
    FactFormComponent.prototype.ngOnInit = function () {
        this.fact = new __WEBPACK_IMPORTED_MODULE_3__models_fact_model__["a" /* Fact */]('', '', '');
    };
    FactFormComponent.prototype.createFact = function () {
        var _this = this;
        this.fact.img = this.fact.img || DEFAULT_FACT_IMG;
        var user = JSON.parse(localStorage.getItem('currentUser'));
        this.fact['addedBy'] = user['username'];
        this.factsService.createFact(this.fact).subscribe(function () {
            _this.router.navigate(['facts']);
        });
    };
    FactFormComponent.prototype.return = function () {
        this.router.navigate(['facts']);
    };
    FactFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            moduleId: 'module.id',
            selector: 'fact-form',
            template: __webpack_require__(799),
            styles: [__webpack_require__(773)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_facts_service__["a" /* FactsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_facts_service__["a" /* FactsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === 'function' && _b) || Object])
    ], FactFormComponent);
    return FactFormComponent;
    var _a, _b;
}());
;
//# sourceMappingURL=C:/Users/Dimitar Pechev/Desktop/TeamDirective20/src/fact-form.component.js.map

/***/ },

/***/ 382:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_facts_service__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_fact_model__ = __webpack_require__(384);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FactsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DEFAULT_FACT_IMG = 'https://2.bp.blogspot.com/-g4uaWVsUD5A/V35HXQ2Gu8I/AAAAAAAAKtw/LUiTD1z6g040Sne7gLQeNyoCG_AetC-awCLcB/s1600/postits.jpg';
var FactsComponent = (function () {
    function FactsComponent(factsService, router) {
        this.factsService = factsService;
        this.router = router;
        this.facts = [];
    }
    FactsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isUserAdmin = !!localStorage.getItem('currentUser') && JSON.parse(localStorage.getItem('currentUser'))['admin'];
        this.model = new __WEBPACK_IMPORTED_MODULE_3__models_fact_model__["a" /* Fact */]('', '', '');
        this.factsService.getAllFacts()
            .subscribe(function (facts) {
            _this.facts = facts.map(function (fact) {
                return Object.assign({}, fact, { img: fact.img || DEFAULT_FACT_IMG });
            });
        });
    };
    ;
    FactsComponent.prototype.addFact = function () {
        this.router.navigate(['fact-form']);
    };
    FactsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            moduleId: 'module.id',
            selector: 'facts',
            template: __webpack_require__(800),
            styles: [__webpack_require__(774)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_facts_service__["a" /* FactsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_facts_service__["a" /* FactsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === 'function' && _b) || Object])
    ], FactsComponent);
    return FactsComponent;
    var _a, _b;
}());
;
//# sourceMappingURL=C:/Users/Dimitar Pechev/Desktop/TeamDirective20/src/facts.component.js.map

/***/ },

/***/ 383:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(newsService, router) {
        this.newsService = newsService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newsData = [];
        this.newsService.getArticlesByPage(1)
            .subscribe(function (articlesObj) {
            var articles = articlesObj.articles;
            articles.sort(function (a, b) {
                if (a.createdOn > b.createdOn) {
                    return -1;
                }
                if (a.createdOn < b.createdOn) {
                    return 1;
                }
                return 0;
            });
            _this.newsData = articles.slice(0, 3);
        }, function (err) {
            console.log(err);
        });
    };
    HomeComponent.prototype.goToDetails = function (article) {
        this.router.navigate(['/news/details', article._id]);
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(801),
            styles: [__webpack_require__(775)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_index__["a" /* NewsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_index__["a" /* NewsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]) === 'function' && _b) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Dimitar Pechev/Desktop/TeamDirective20/src/home.component.js.map

/***/ },

/***/ 384:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Fact; });
var Fact = (function () {
    function Fact(title, description, img) {
        this.title = title;
        this.description = description;
        this.img = img;
    }
    return Fact;
}());
;
//# sourceMappingURL=C:/Users/Dimitar Pechev/Desktop/TeamDirective20/src/fact.model.js.map

/***/ },

/***/ 385:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_index__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NewsAddArticleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewsAddArticleComponent = (function () {
    function NewsAddArticleComponent(newsService, formBuilder, router, notificationsService) {
        this.newsService = newsService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.notificationsService = notificationsService;
        this.notificationOptions = {
            timeOut: 2000,
            showProgressBar: false,
            animate: 'fromRight'
        };
    }
    NewsAddArticleComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            title: [''],
            content: [''],
            imgUrl: ['']
        });
    };
    NewsAddArticleComponent.prototype.addArticle = function (article) {
        var _this = this;
        if (!article.title || article.title.length < 5 || article.title.length > 100) {
            this.notificationsService.error('Възникна грешка!', 'Заглавието трябва да е между 5 е 100 символа.');
            return;
        }
        if (!article.imgUrl) {
            this.notificationsService.error('Възникна грешка!', 'Моля, въведете линк към снимка.');
            return;
        }
        if (!article.content || article.content.length < 5 || article.content.length > 20000) {
            this.notificationsService.error('Възникна грешка!', 'Съдържанието трябва да е между 50 е 20000 символа.');
            return;
        }
        var user = JSON.parse(localStorage.getItem('currentUser'));
        article['author'] = user.username;
        article['isDeleted'] = false;
        this.newsService.addArticle(article)
            .subscribe(function (res) {
            _this.isDisabled = true;
            _this.router.navigate(['/news/page/1']);
            _this.notificationsService.success('Статията създадена!', 'Обратно към всички статии...');
            console.log(res);
        }, function (err) {
            console.log(err);
            _this.isDisabled = true;
            _this.notificationsService.error('Възникна грешка!', 'Моля, опитайте по-късно!');
            setTimeout(function () {
                _this.isDisabled = false;
            }, 2000);
        });
    };
    NewsAddArticleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-news-add-article',
            template: __webpack_require__(804),
            styles: [__webpack_require__(778)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_index__["a" /* NewsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_index__["a" /* NewsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"]) === 'function' && _d) || Object])
    ], NewsAddArticleComponent);
    return NewsAddArticleComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/Dimitar Pechev/Desktop/TeamDirective20/src/news-add-article.component.js.map

/***/ },

/***/ 386:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_index__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NewsDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewsDetailsComponent = (function () {
    function NewsDetailsComponent(newsService, usersService, route, router, notificationsService, formBuilder) {
        this.newsService = newsService;
        this.usersService = usersService;
        this.route = route;
        this.router = router;
        this.notificationsService = notificationsService;
        this.formBuilder = formBuilder;
        this.notificationOptions = {
            timeOut: 2000,
            showProgressBar: false,
            animate: 'fromRight'
        };
        this.form = this.formBuilder.group({
            content: ['']
        });
    }
    NewsDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.article = {
            likes: [],
            comments: []
        };
        if (localStorage.getItem('currentUser')) {
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        }
        var id = this.route.snapshot.params['id'];
        this.newsService.getArticleById(id)
            .subscribe(function (article) {
            _this.article = article[0];
            if (_this.article['likes'].includes(_this.currentUser['username'])) {
                _this.isLiked = true;
            }
            if (_this.currentUser) {
                _this.canDelete = !!_this.currentUser['admin'] || !!_this.currentUser['username'] === _this.article['author'];
            }
            else {
                _this.canDelete = false;
            }
        });
        this.isLoggedIn = !!this.currentUser;
    };
    NewsDetailsComponent.prototype.toggleLike = function () {
        var _this = this;
        var articleId = this.article['_id'], username = this.currentUser['username'];
        this.newsService.toggleLike(articleId, username)
            .subscribe(function (res) {
            if (!_this.article['likes'].includes(username)) {
                _this.article['likes'].push(username);
                _this.isLiked = true;
                _this.notificationsService.success('Харесахте статията!', 'Може да промените гласа си.');
            }
            else {
                var index = _this.article['likes'].indexOf(username);
                _this.article['likes'].splice(index, 1);
                _this.isLiked = false;
                _this.notificationsService.success('Не харесвате статията.', 'Може да промените гласа си.');
            }
        }, function (err) {
            _this.notificationsService.error('Възникна грешка!', 'Моля, опитайте по-късно.');
            console.log(err);
        });
    };
    NewsDetailsComponent.prototype.focusInput = function () {
        this.commentInput.nativeElement.focus();
    };
    NewsDetailsComponent.prototype.goToProfile = function (username) {
        var _this = this;
        this.usersService.getUserByUsername(username)
            .subscribe(function (res) {
            _this.router.navigate(['profile', res._id]);
        }, function (err) {
            console.log(err);
        });
    };
    NewsDetailsComponent.prototype.deleteArticle = function (articleId) {
        var _this = this;
        this.newsService.deleteArticle(articleId)
            .subscribe(function (res) {
            _this.router.navigate(['news/page', 1]);
            _this.notificationsService.success('Статията бе изтрита!', 'Обратно към всички новини...');
        }, function (err) {
            _this.notificationsService.error('Възникна грешка!', 'Моля, опитайте по-късно.');
        });
    };
    NewsDetailsComponent.prototype.restoreArticle = function (articleId) {
        this.newsService.restoreArticle(articleId)
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    NewsDetailsComponent.prototype.editArticle = function (articleId) {
        console.log(articleId);
    };
    NewsDetailsComponent.prototype.submit = function (contentObj) {
        var _this = this;
        if (!contentObj['content'] || contentObj['content'].length < 3 || contentObj['content'].length > 500) {
            this.notificationsService.error('Възникна грешка!', 'Коментарът може да е между 3 и 500 символа.');
            return;
        }
        var author = JSON.parse(localStorage.getItem('currentUser'))['username'];
        this.newsService.postComment(this.article['_id'], author, contentObj['content'])
            .subscribe(function (res) {
            var comment = res.comments[res.comments.length - 1];
            _this.article['comments'].push(comment);
            _this.form.reset();
            _this.notificationsService.success('Коментарът е записан!', 'Продължете напред...');
        }, function (err) {
            console.log(err);
            _this.notificationsService.error('Възникна грешка!', 'Моля, опитайте по-късно.');
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ViewChild */])('commentInput'), 
        __metadata('design:type', Object)
    ], NewsDetailsComponent.prototype, "commentInput", void 0);
    NewsDetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-news-details',
            template: __webpack_require__(805),
            styles: [__webpack_require__(779)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_index__["a" /* NewsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_index__["a" /* NewsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_index__["b" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_index__["b" /* UsersService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]) === 'function' && _f) || Object])
    ], NewsDetailsComponent);
    return NewsDetailsComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=C:/Users/Dimitar Pechev/Desktop/TeamDirective20/src/news-details.component.js.map

/***/ },

/***/ 387:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NewsPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsPageComponent = (function () {
    function NewsPageComponent(router, route, newsService) {
        this.router = router;
        this.route = route;
        this.newsService = newsService;
    }
    NewsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isUserAdmin = !!localStorage.getItem('currentUser') && JSON.parse(localStorage.getItem('currentUser'))['admin'];
        this.route.params
            .switchMap(function (params) { return _this.newsService.getArticlesByPage(+params['page']); })
            .subscribe(function (articlesObj) {
            _this.newsList = articlesObj.articles;
            _this.pagesCount = articlesObj.totalPagesCount;
        });
    };
    NewsPageComponent.prototype.goToDetails = function (article) {
        this.router.navigate(['/news/details', article._id]);
    };
    NewsPageComponent.prototype.goToPage = function (page) {
        this.router.navigate([("/news/page/" + page)]);
    };
    NewsPageComponent.prototype.goToPrev = function () {
        var currentPage = +this.route.snapshot.params['page'];
        if (currentPage - 1 > 0) {
            this.router.navigate(['/news/page/', currentPage - 1]);
        }
    };
    NewsPageComponent.prototype.goToNext = function () {
        var currentPage = +this.route.snapshot.params['page'];
        if (currentPage + 1 <= this.pagesCount) {
            this.router.navigate(['/news/page/', currentPage + 1]);
        }
    };
    NewsPageComponent.prototype.generateRange = function (count) {
        return new Array(count);
    };
    NewsPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-news-page',
            template: __webpack_require__(807),
            styles: [__webpack_require__(781)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* NewsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* NewsService */]) === 'function' && _c) || Object])
    ], NewsPageComponent);
    return NewsPageComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Dimitar Pechev/Desktop/TeamDirective20/src/news-page.component.js.map

/***/ },

/***/ 388:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_index__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AddPetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddPetComponent = (function () {
    function AddPetComponent(formBuilder, notificationsService, petService, router) {
        this.formBuilder = formBuilder;
        this.notificationsService = notificationsService;
        this.petService = petService;
        this.router = router;
    }
    AddPetComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            name: [''],
            age: [''],
            gender: [''],
            breed: [''],
            pictures: [''],
            about: ['']
        });
        this.notificationOptions = {
            timeOut: 2000,
            showProgressBar: false,
            animate: 'fromRight'
        };
    };
    AddPetComponent.prototype.addPet = function (pet) {
        var _this = this;
        if (!pet.name || pet.name.length < 3 || pet.name.length > 20) {
            this.notificationsService.error('Възникна грешка!', 'Името може да бъде от 3 до 20 символа.');
            return;
        }
        if (pet.age === '' || pet.age < 0 || pet.age > 25) {
            this.notificationsService.error('Възникна грешка!', 'Възрастта може да бъде от 0 до 25 години.');
            return;
        }
        if (!pet.breed || pet.breed.length < 3 || pet.breed.length > 20) {
            this.notificationsService.error('Възникна грешка!', 'Породата може да бъде от 3 до 20 символа.');
            return;
        }
        if (!pet.pictures) {
            this.notificationsService.error('Възникна грешка!', 'Въведете линк към снимка.');
            return;
        }
        if (!pet.about || pet.about.length < 50 || pet.about.length > 5000) {
            this.notificationsService.error('Възникна грешка!', 'Описанието може да бъде от 50 до 5000 символа.');
            return;
        }
        var user = JSON.parse(localStorage.getItem('currentUser'));
        pet['addedBy'] = user['username'];
        this.petService.addPet(pet)
            .subscribe(function (res) {
            _this.notificationsService.success('Успешно създадена обява!', 'Обратно към останалите обяви...');
            _this.router.navigate(['pets/page', 1]);
        }, function (err) {
            console.log(err);
            _this.notificationsService.error('Възникна грешка!', 'Моля, опитайте отново.');
        });
    };
    AddPetComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-add-pet',
            template: __webpack_require__(808),
            styles: [__webpack_require__(782)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_index__["c" /* PetService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_index__["c" /* PetService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]) === 'function' && _d) || Object])
    ], AddPetComponent);
    return AddPetComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/Dimitar Pechev/Desktop/TeamDirective20/src/add-pet.component.js.map

/***/ },

/***/ 389:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_notifications__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PetProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PetProfileComponent = (function () {
    function PetProfileComponent(petService, route, router, usersService, notificationsService, requestsService) {
        this.petService = petService;
        this.route = route;
        this.router = router;
        this.usersService = usersService;
        this.notificationsService = notificationsService;
        this.requestsService = requestsService;
        this.notificationOptions = {
            timeOut: 2000,
            showProgressBar: false,
            animate: 'fromRight'
        };
    }
    PetProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pet = {};
        this.image = {};
        var petId = this.route.snapshot.params['id'];
        this.petService.getPetById(petId)
            .subscribe(function (res) {
            _this.pet = res;
            _this.image = {
                title: res.name,
                _id: petId,
                imgUrl: res.pictures[0]
            };
            if (localStorage.getItem('currentUser')) {
                _this.canEdit = (JSON.parse(localStorage.getItem('currentUser'))['username'] === _this.pet['addedBy']) ||
                    JSON.parse(localStorage.getItem('currentUser'))['admin'];
                _this.isLoggedIn = true;
                _this.requestsService.getAllRequests()
                    .subscribe(function (requests) {
                    requests.forEach(function (req) {
                        if (req.username === JSON.parse(localStorage.getItem('currentUser'))['username']) {
                            _this.isRequested = true;
                        }
                    });
                });
            }
        }, function (err) {
            console.log(err);
            _this.router.navigate(['home']);
        });
    };
    PetProfileComponent.prototype.adoptPet = function (pet) {
        var _this = this;
        var username = JSON.parse(localStorage.getItem('currentUser'))['username'], petId = this.pet['_id'], petName = this.pet['name'];
        this.requestsService.makeRequest(username, petId, petName)
            .subscribe(function (res) {
            _this.notificationsService.success('Успешна заявка', 'Администраторите ще се свържат с Вас.');
            _this.isRequested = true;
        }, function (err) {
            _this.notificationsService.error('Възникна грешка!', 'Моля, опитайте по-късно.');
        });
    };
    PetProfileComponent.prototype.addPhoto = function () {
        var _this = this;
        var petId = this.pet['_id'];
        var photoUrl = this.addPhotoInput.nativeElement.value;
        this.petService.addPhotoToPetProfile(petId, photoUrl)
            .subscribe(function (res) {
            _this.notificationsService.success('Успешно добавена снимка!', 'Обратно към профила...');
            _this.pet = res;
        }, function (err) {
            _this.notificationsService.error('Възникна грешка!', 'Моля, опитайте по-късно.');
        });
        this.addPhotoInput.nativeElement.value = '';
    };
    PetProfileComponent.prototype.goToProfile = function (username) {
        var _this = this;
        this.usersService.getUserByUsername(username)
            .subscribe(function (res) {
            _this.router.navigate(['profile', res._id]);
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ViewChild */])('addPhotoInput'), 
        __metadata('design:type', Object)
    ], PetProfileComponent.prototype, "addPhotoInput", void 0);
    PetProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-pet-profile',
            template: __webpack_require__(809),
            styles: [__webpack_require__(783)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* PetService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* PetService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* UsersService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["d" /* RequestsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["d" /* RequestsService */]) === 'function' && _f) || Object])
    ], PetProfileComponent);
    return PetProfileComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=C:/Users/Dimitar Pechev/Desktop/TeamDirective20/src/pet-profile.component.js.map

/***/ },

/***/ 390:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PetsMainPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PetsMainPageComponent = (function () {
    function PetsMainPageComponent(petService, router, route, usersService) {
        this.petService = petService;
        this.router = router;
        this.route = route;
        this.usersService = usersService;
    }
    PetsMainPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoggedIn = !!localStorage.getItem('currentUser');
        this.route.params
            .switchMap(function (params) { return _this.petService.getPetsByPage(+params['page']); })
            .subscribe(function (petsObj) {
            _this.pets = petsObj['pets'];
            _this.pagesCount = petsObj['totalPagesCount'];
        });
    };
    PetsMainPageComponent.prototype.goToProfile = function (username) {
        var _this = this;
        this.usersService.getUserByUsername(username)
            .subscribe(function (res) {
            _this.router.navigate(['profile', res._id]);
        });
    };
    PetsMainPageComponent.prototype.goToDetails = function (petId) {
        this.router.navigate(['pets/profile', petId]);
    };
    PetsMainPageComponent.prototype.goToPage = function (page) {
        this.router.navigate([("/pets/page/" + page)]);
    };
    PetsMainPageComponent.prototype.goToPrev = function () {
        var currentPage = +this.route.snapshot.params['page'];
        if (currentPage - 1 > 0) {
            this.router.navigate(['/pets/page/', currentPage - 1]);
        }
    };
    PetsMainPageComponent.prototype.goToNext = function () {
        var currentPage = +this.route.snapshot.params['page'];
        if (currentPage + 1 <= this.pagesCount) {
            this.router.navigate(['/pets/page/', currentPage + 1]);
        }
    };
    PetsMainPageComponent.prototype.generateRange = function (num) {
        return new Array(num);
    };
    PetsMainPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-pets-main-page',
            template: __webpack_require__(810),
            styles: [__webpack_require__(784)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* PetService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* PetService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* UsersService */]) === 'function' && _d) || Object])
    ], PetsMainPageComponent);
    return PetsMainPageComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/Dimitar Pechev/Desktop/TeamDirective20/src/pets-main-page.component.js.map

/***/ },

/***/ 391:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UsersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersService = (function () {
    function UsersService(api) {
        this.api = api;
    }
    UsersService.prototype.getUserById = function (userId) {
        return this.api.put('api/users/get-user', { id: userId });
    };
    UsersService.prototype.getAllUsers = function () {
        return this.api.put('api/users/get-all-users', {});
    };
    UsersService.prototype.getUserByUsername = function (username) {
        return this.api.put('api/users/get-user-by-username', { username: username });
    };
    UsersService.prototype.makeUserAdmin = function (user) {
        return this.api.put('api/users/make-admin', user);
    };
    UsersService.prototype.toggleBanUser = function (user) {
        return this.api.put('api/users/toggle-ban-user', user);
    };
    UsersService.prototype.editProfile = function (userData) {
        if ((userData['firstName'] && (userData['firstName'].length < 3 || userData['firstName'].length > 20)) ||
            (userData['lastName'] && (userData['lastName'].length < 3 || userData['lastName'].length > 20)) ||
            (userData['age'] && (userData['age'] < 6 || userData['age'] > 100))) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(new Error('Invalid data!'));
        }
        return this.api.put('api/users/edit-profile', userData);
    };
    UsersService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */]) === 'function' && _a) || Object])
    ], UsersService);
    return UsersService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Dimitar Pechev/Desktop/TeamDirective20/src/users.service.js.map

/***/ },

/***/ 392:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_users_service__ = __webpack_require__(391);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminComponent = (function () {
    function AdminComponent(usersService, router, formBuilder, notificationsService) {
        this.usersService = usersService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.notificationsService = notificationsService;
        this.form = this.formBuilder.group({
            username: [''],
            firstName: [''],
            lastName: [''],
            email: [''],
            age: [null],
            gender: [''],
            profilePicture: ['']
        });
        this.notificationOptions = {
            timeOut: 2000,
            showProgressBar: false,
            animate: 'fromRight'
        };
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showEditUser = false;
        this.usersService.getAllUsers()
            .subscribe(function (res) {
            _this.users = res;
        });
    };
    AdminComponent.prototype.showAddedDetails = function () {
        this.showEditUser = false;
        this.isEditedUserAdmin = false;
        this.editedUser = {};
    };
    AdminComponent.prototype.showEdit = function (user) {
        this.showEditUser = true;
        this.editedUser = user;
        this.isEditedUserAdmin = user.admin || false;
    };
    AdminComponent.prototype.toggleBanUser = function (user) {
        var _this = this;
        this.usersService.toggleBanUser(user)
            .subscribe(function (res) {
            var message = res.response.isDeleted ? 'деактивиран' : 'активиран';
            user.isDeleted = res.response.isDeleted;
            _this.notificationsService.success('Успешна редакция!', "\u041F\u0440\u043E\u0444\u0438\u043B\u044A\u0442 \u043D\u0430 " + user.username + " \u0435 " + message + ".");
        }, function (err) {
            console.log(err);
        });
    };
    AdminComponent.prototype.makeAdmin = function () {
        var _this = this;
        this.usersService.makeUserAdmin(this.editedUser)
            .subscribe(function (res) {
            _this.isEditedUserAdmin = true;
            _this.notificationsService.success('Успешна редакция!', 'Потребителят е вече админ.');
        }, function (err) {
            console.log(err);
            _this.notificationsService.error('Възникна грешка!', 'Моля, опитайте по-късно.');
        });
    };
    AdminComponent.prototype.editProfileInfo = function (user) {
        var _this = this;
        var isValid = false, newData = {};
        Object.keys(user)
            .forEach(function (key) {
            if (user[key]) {
                newData[key] = user[key];
                isValid = true;
            }
        });
        if (!isValid) {
            this.notificationsService.error('Възникна грешка!', 'Не сте въвели данни!');
            return;
        }
        newData['username'] = this.editedUser['username'];
        console.log(newData);
        this.usersService.editProfile(newData)
            .subscribe(function (res) {
            _this.form.reset();
            _this.showAddedDetails();
            _this.router.navigate(['/admin']);
            _this.notificationsService.success('Успешна редакция!', 'Обратно към админ панела...');
        }, function (err) {
            _this.notificationsService.error('Възникна грешка!', 'Моля, въведете коректни данни!');
            _this.isSubmitButtonDisabled = true;
            setTimeout(function () {
                _this.isSubmitButtonDisabled = false;
            }, 2000);
        });
    };
    AdminComponent.prototype.goToDetails = function (user) {
        this.router.navigate(['profile', user._id]);
    };
    AdminComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-admin',
            template: __webpack_require__(813),
            styles: [__webpack_require__(787)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_users_service__["a" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_users_service__["a" /* UsersService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"]) === 'function' && _d) || Object])
    ], AdminComponent);
    return AdminComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/Dimitar Pechev/Desktop/TeamDirective20/src/admin.component.js.map

/***/ },

/***/ 393:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_custom_validators_index__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_index__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UserProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserProfileComponent = (function () {
    function UserProfileComponent(formBuilder, usersService, notificationsService, router, route, newsService) {
        this.formBuilder = formBuilder;
        this.usersService = usersService;
        this.notificationsService = notificationsService;
        this.router = router;
        this.route = route;
        this.newsService = newsService;
        this.showEdit = false;
        this.showEditButton = false;
        this.isBtnDisabled = false;
        this.form = this.formBuilder.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].maxLength(20)])],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].maxLength(20)])],
            email: [''],
            age: [null, ([__WEBPACK_IMPORTED_MODULE_4__auth_custom_validators_index__["b" /* RangeValidator */].isInRange])],
            gender: [''],
            profilePicture: ['']
        });
        this.notificationOptions = {
            timeOut: 2000,
            showProgressBar: false,
            animate: 'fromRight'
        };
        this.addedArticles = {
            id: 'added-articles',
            title: 'Добавени статии',
            nothingAddedMessage: 'Този потребител все още не е добавял статии.',
            trHeadTitle: 'Заглавие:',
            trHeadDate: 'Създадена на:',
            list: []
        };
        this.adoptedPets = {
            id: 'adopted-pets',
            title: 'Осиновени животни',
            nothingAddedMessage: 'Този потребител все още не е осиновил никое животно.',
            trHeadTitle: 'Име:',
            trHeadDate: 'Осиновен на:',
            rootLink: '/news/details/',
            list: [{
                    name: 'Силвестър',
                    imgUrl: 'http://d39kbiy71leyho.cloudfront.net/wp-content/uploads/2016/05/09170020/cats-politics-TN.jpg',
                    addedOn: '22/12/2016',
                    id: 'a10901293039039'
                }]
        };
        this.addedAnimals = {
            id: 'added-animals',
            title: 'Добавени обяви',
            nothingAddedMessage: 'Този потребител все още не е добавял обяви.',
            trHeadTitle: 'Име:',
            trHeadDate: 'Добавена на:',
            list: []
        };
        this.addedCampaigns = {
            id: 'added-campaigns',
            title: 'Добавени кампании',
            nothingAddedMessage: 'Този потребител все още не е добавял кампании.',
            trHeadTitle: 'Заглавие:',
            trHeadDate: 'Добавена на:',
            list: []
        };
        this.addedFacts = {
            id: 'added-facts',
            title: 'Добавени любопитни факти',
            nothingAddedMessage: 'Този потребител все още не е добавял факти.',
            trHeadTitle: 'Заглавие:',
            trHeadDate: 'Добавен на:',
            list: []
        };
        this.addedGalleryImages = {
            id: 'added-images',
            title: 'Добавени снимки',
            nothingAddedMessage: 'Този потребител все още не е добавял снимки.',
            trHeadTitle: 'Заглавие:',
            trHeadDate: 'Добавена на:',
            list: []
        };
    }
    UserProfileComponent.prototype.showEditProfile = function () {
        this.showEdit = true;
    };
    UserProfileComponent.prototype.showAddedDetails = function () {
        this.showEdit = false;
    };
    UserProfileComponent.prototype.editProfileInfo = function (user) {
        var _this = this;
        var isValid = false, newData = {};
        Object.keys(user)
            .forEach(function (key) {
            if (user[key] && typeof user[key] === 'string') {
                newData[key] = user[key];
                isValid = true;
            }
            else if (user[key]) {
                newData[key] = user[key];
                isValid = true;
            }
        });
        if (!isValid) {
            this.notificationsService.error('Възникна грешка!', 'Не сте въвели данни!');
            return;
        }
        user['username'] = JSON.parse(localStorage.getItem('currentUser'))['username'];
        this.usersService.editProfile(user)
            .subscribe(function (res) {
            _this.showEdit = false;
            Object.keys(newData)
                .forEach(function (key) {
                _this.user[key] = newData[key];
            });
            localStorage.setItem('currentUser', JSON.stringify(_this.user));
            _this.form.reset();
            _this.router.navigate(['/profile']);
            _this.notificationsService.success('Успешна редакция!', 'Обратно към профила...');
        }, function (err) {
            _this.notificationsService.error('Възникна грешка!', 'Моля, въведете коректни данни!');
            _this.isBtnDisabled = true;
            setTimeout(function () {
                _this.isBtnDisabled = false;
            }, 2000);
        });
    };
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.image = {};
        this.route.params
            .switchMap(function (params) { return _this.user = _this.usersService.getUserById(params['id']); })
            .subscribe(function (user) {
            _this.user = user;
            _this.image = {
                imgUrl: _this.user['profilePicture'],
                title: _this.user['username'],
                _id: _this.user['_id']
            };
            _this.user['addedArticles']
                .forEach(function (article) {
                _this.addedArticles['list'].push(article);
            });
        }, function (err) {
            _this.user = JSON.parse(localStorage.getItem('currentUser'));
            _this.image = {
                imgUrl: _this.user['profilePicture'],
                title: _this.user['username'],
                _id: _this.user['_id']
            };
            _this.showEditButton = true;
            console.log(_this.user);
            _this.user['addedArticles']
                .forEach(function (article) {
                _this.addedArticles['list'].push(article);
            });
        });
    };
    UserProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-user-profile',
            template: __webpack_require__(814),
            styles: [__webpack_require__(788)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_index__["b" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_index__["b" /* UsersService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* ActivatedRoute */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_index__["a" /* NewsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_index__["a" /* NewsService */]) === 'function' && _f) || Object])
    ], UserProfileComponent);
    return UserProfileComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=C:/Users/Dimitar Pechev/Desktop/TeamDirective20/src/user-profile.component.js.map

/***/ },

/***/ 462:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 462;


/***/ },

/***/ 463:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(590);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_40" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Dimitar Pechev/Desktop/TeamDirective20/src/main.js.map

/***/ },

/***/ 48:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__route_guard_service__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_service__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_route_guard_service__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__news_service__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pet_service__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__requests_service__ = __webpack_require__(607);








/* harmony reexport (binding) */ __webpack_require__.d(exports, "d", function() { return __WEBPACK_IMPORTED_MODULE_7__requests_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "g", function() { return __WEBPACK_IMPORTED_MODULE_0__api_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "h", function() { return __WEBPACK_IMPORTED_MODULE_1__auth_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__route_guard_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__admin_route_guard_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__users_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__news_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_6__pet_service__["a"]; });

//# sourceMappingURL=C:/Users/Dimitar Pechev/Desktop/TeamDirective20/src/index.js.map

/***/ },

/***/ 588:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_campaigns_campaign_component__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_campaign_list_campaign_list_component__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_campaign_create_campaign_create_component__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_campaign_preview_campaign_preview_component__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_facts_facts_component__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_fact_form_fact_form_component__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_index__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__users_user_profile_user_profile_component__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__users_admin_admin_component__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__news_news_page_news_page_component__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__news_news_details_news_details_component__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__news_news_add_article_news_add_article_component__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pets_pets_main_page_pets_main_page_component__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pets_add_pet_add_pet_component__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pets_pet_profile_pet_profile_component__ = __webpack_require__(389);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    {
        path: 'campaign', component: __WEBPACK_IMPORTED_MODULE_4__components_campaigns_campaign_component__["a" /* CampaignComponent */], children: [
            { path: '', redirectTo: '/campaign/list', pathMatch: 'full' },
            { path: 'list', component: __WEBPACK_IMPORTED_MODULE_5__components_campaign_list_campaign_list_component__["a" /* CampaignListComponent */] },
            { path: 'create', component: __WEBPACK_IMPORTED_MODULE_6__components_campaign_create_campaign_create_component__["a" /* CampaignCreateComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_index__["e" /* AdminRouteGuardService */]] },
            { path: 'preview/:id', component: __WEBPACK_IMPORTED_MODULE_7__components_campaign_preview_campaign_preview_component__["a" /* CampaignPreviewComponent */] }
        ]
    },
    { path: 'facts', component: __WEBPACK_IMPORTED_MODULE_8__components_facts_facts_component__["a" /* FactsComponent */] },
    { path: 'fact-form', component: __WEBPACK_IMPORTED_MODULE_9__components_fact_form_fact_form_component__["a" /* FactFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_index__["e" /* AdminRouteGuardService */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_10__auth_index__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__auth_index__["b" /* LoginComponent */] },
    { path: 'profile/:id', component: __WEBPACK_IMPORTED_MODULE_11__users_user_profile_user_profile_component__["a" /* UserProfileComponent */] },
    { path: 'my-profile', component: __WEBPACK_IMPORTED_MODULE_11__users_user_profile_user_profile_component__["a" /* UserProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_index__["f" /* RouteGuardService */]] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_12__users_admin_admin_component__["a" /* AdminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_index__["e" /* AdminRouteGuardService */]] },
    { path: 'news/add-article', component: __WEBPACK_IMPORTED_MODULE_15__news_news_add_article_news_add_article_component__["a" /* NewsAddArticleComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_index__["e" /* AdminRouteGuardService */]] },
    { path: 'news/details/:id', component: __WEBPACK_IMPORTED_MODULE_14__news_news_details_news_details_component__["a" /* NewsDetailsComponent */] },
    { path: 'news/page/:page', component: __WEBPACK_IMPORTED_MODULE_13__news_news_page_news_page_component__["a" /* NewsPageComponent */] },
    { path: 'pets/page/:page', component: __WEBPACK_IMPORTED_MODULE_16__pets_pets_main_page_pets_main_page_component__["a" /* PetsMainPageComponent */] },
    { path: 'pets/add', component: __WEBPACK_IMPORTED_MODULE_17__pets_add_pet_add_pet_component__["a" /* AddPetComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_index__["f" /* RouteGuardService */]] },
    { path: 'pets/profile/:id', component: __WEBPACK_IMPORTED_MODULE_18__pets_pet_profile_pet_profile_component__["a" /* PetProfileComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=C:/Users/Dimitar Pechev/Desktop/TeamDirective20/src/app-routing.module.js.map

/***/ },

/***/ 589:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(792),
            styles: [__webpack_require__(767)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/Dimitar Pechev/Desktop/TeamDirective20/src/app.component.js.map

/***/ },

/***/ 590:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_page_scroll__ = __webpack_require__(764);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_index__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_campaigns_service__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_facts_service__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_data_service__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__directives_equality_validator_directive__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pipes_index__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_home_component__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_campaigns_campaign_component__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_campaign_list_campaign_list_component__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_campaign_create_campaign_create_component__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_campaign_preview_campaign_preview_component__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_facts_facts_component__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_fact_form_fact_form_component__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__navigation_index__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__auth_index__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__users_user_profile_user_profile_component__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__users_added_content_added_content_component__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__users_admin_admin_component__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__news_news_page_news_page_component__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__news_news_entry_news_entry_component__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__news_news_details_news_details_component__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__news_news_add_article_news_add_article_component__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__shared_picture_modal_picture_modal_component__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pets_pets_main_page_pets_main_page_component__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pets_add_pet_add_pet_component__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pets_pet_profile_pet_profile_component__ = __webpack_require__(389);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__directives_equality_validator_directive__["a" /* EqualityValidatorDirective */],
                __WEBPACK_IMPORTED_MODULE_13__pipes_index__["a" /* SortByDatePipe */],
                __WEBPACK_IMPORTED_MODULE_13__pipes_index__["b" /* TextTransformPipe */],
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_22__navigation_index__["a" /* MainNavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_22__navigation_index__["b" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_15__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_campaigns_campaign_component__["a" /* CampaignComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_campaign_list_campaign_list_component__["a" /* CampaignListComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_campaign_create_campaign_create_component__["a" /* CampaignCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_campaign_preview_campaign_preview_component__["a" /* CampaignPreviewComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_facts_facts_component__["a" /* FactsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_fact_form_fact_form_component__["a" /* FactFormComponent */],
                __WEBPACK_IMPORTED_MODULE_23__auth_index__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_23__auth_index__["b" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_24__users_user_profile_user_profile_component__["a" /* UserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_25__users_added_content_added_content_component__["a" /* AddedContentComponent */],
                __WEBPACK_IMPORTED_MODULE_26__users_admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_27__news_news_page_news_page_component__["a" /* NewsPageComponent */],
                __WEBPACK_IMPORTED_MODULE_28__news_news_entry_news_entry_component__["a" /* NewsEntryComponent */],
                __WEBPACK_IMPORTED_MODULE_29__news_news_details_news_details_component__["a" /* NewsDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_30__news_news_add_article_news_add_article_component__["a" /* NewsAddArticleComponent */],
                __WEBPACK_IMPORTED_MODULE_31__shared_picture_modal_picture_modal_component__["a" /* PictureModalComponent */],
                __WEBPACK_IMPORTED_MODULE_32__pets_pets_main_page_pets_main_page_component__["a" /* PetsMainPageComponent */],
                __WEBPACK_IMPORTED_MODULE_33__pets_add_pet_add_pet_component__["a" /* AddPetComponent */],
                __WEBPACK_IMPORTED_MODULE_34__pets_pet_profile_pet_profile_component__["a" /* PetProfileComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["f" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["d" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__["SimpleNotificationsModule"],
                __WEBPACK_IMPORTED_MODULE_6_ng2_page_scroll__["a" /* Ng2PageScrollModule */].forRoot()
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* LOCALE_ID */], useValue: 'bg-BG' },
                __WEBPACK_IMPORTED_MODULE_8__services_index__["g" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_8__services_index__["h" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_8__services_index__["f" /* RouteGuardService */],
                __WEBPACK_IMPORTED_MODULE_8__services_index__["e" /* AdminRouteGuardService */],
                __WEBPACK_IMPORTED_MODULE_9__services_campaigns_service__["a" /* CampaignsService */],
                __WEBPACK_IMPORTED_MODULE_10__services_facts_service__["a" /* FactsService */],
                __WEBPACK_IMPORTED_MODULE_11__services_data_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_8__services_index__["b" /* UsersService */],
                __WEBPACK_IMPORTED_MODULE_8__services_index__["a" /* NewsService */],
                __WEBPACK_IMPORTED_MODULE_8__services_index__["c" /* PetService */],
                __WEBPACK_IMPORTED_MODULE_8__services_index__["d" /* RequestsService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/Dimitar Pechev/Desktop/TeamDirective20/src/app.module.js.map

/***/ },

/***/ 591:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return EmailValidator; });
var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.isValidMailFormat = function (control) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (control.value !== '' && (control.value.length <= 4 || !EMAIL_REGEXP.test(control.value))) {
            return { 'invalidEmail': true };
        }
        return null;
    };
    return EmailValidator;
}());
//# sourceMappingURL=C:/Users/Dimitar Pechev/Desktop/TeamDirective20/src/EmailValidator.js.map

/***/ },

/***/ 592:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RangeValidator; });
var RangeValidator = (function () {
    function RangeValidator() {
    }
    RangeValidator.isInRange = function (control) {
        if (control.value < 6 || control.value > 100) {
            return { 'valueOutOfRange': true };
        }
        return null;
    };
    return RangeValidator;
}());
//# sourceMappingURL=C:/Users/Dimitar Pechev/Desktop/TeamDirective20/src/RangeValidator.js.map

/***/ },

/***/ 593:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(97);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(formBuilder, authService, notificationsService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.notificationsService = notificationsService;
        this.router = router;
        this.isDisabled = false;
        this.notificationOptions = {
            timeOut: 2000,
            showProgressBar: false,
            animate: 'fromRight'
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].required]
        });
        if (!!localStorage.getItem('currentUser')) {
            this.router.navigate(['/home']);
        }
    };
    LoginComponent.prototype.submit = function (value) {
        var _this = this;
        this.authService.login(value)
            .subscribe(function (res) {
            _this.isDisabled = true;
            localStorage.setItem('token', res.token);
            localStorage.setItem('currentUser', JSON.stringify(res.user));
            _this.notificationsService.success('Успешен вход!', 'Пренасочване...');
            setTimeout(function () {
                _this.router.navigate(['/my-profile']);
            }, 2000);
        }, function (err) {
            _this.isDisabled = true;
            _this.notificationsService.error('Възникна грешка!', 'Невалидни потребителско име и/или парола.');
            setTimeout(function () {
                _this.isDisabled = false;
            }, 2000);
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__(793),
            styles: [__webpack_require__(768)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]) === 'function' && _d) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/Dimitar Pechev/Desktop/TeamDirective20/src/login.component.js.map

/***/ },

/***/ 594:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__custom_validators_index__ = __webpack_require__(375);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = (function () {
    function RegisterComponent(authService, formBuilder, notificationsService, router) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.notificationsService = notificationsService;
        this.router = router;
        this.notificationOptions = {
            timeOut: 2000,
            showProgressBar: false,
            animate: 'fromRight'
        };
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].maxLength(15)])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].maxLength(15)])],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].required],
            firstName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].maxLength(20)])],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].maxLength(20)])],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__custom_validators_index__["a" /* EmailValidator */].isValidMailFormat])],
            age: ['', ([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__custom_validators_index__["b" /* RangeValidator */].isInRange])],
            gender: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].required]
        });
    };
    RegisterComponent.prototype.submit = function (value) {
        var _this = this;
        this.authService.register(this.form.value)
            .subscribe(function (res) {
            _this.isDisabled = true;
            _this.notificationsService.success('Регистрацията е успешна!', 'Пренасочване...');
            setTimeout(function () {
                _this.router.navigate(['/login']);
            }, 2000);
        }, function (err) {
            _this.isDisabled = true;
            if (err.status === 400) {
                _this.notificationsService.error('Възникна грешка!', 'Моля, въведете коректни данни!');
            }
            else if (err.status === 409) {
                _this.notificationsService.error('Възникна грешка!', 'Потребителското име е вече заето!');
            }
            else {
                _this.notificationsService.error('Възникна грешка!', 'Моля, опитайте опитайте по-късно.');
            }
            setTimeout(function () {
                _this.isDisabled = false;
            }, 2000);
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__(794),
            styles: [__webpack_require__(769)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/Dimitar Pechev/Desktop/TeamDirective20/src/register.component.js.map

/***/ },

/***/ 595:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return EqualityValidatorDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EqualityValidatorDirective = (function () {
    function EqualityValidatorDirective(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    Object.defineProperty(EqualityValidatorDirective.prototype, "isReverse", {
        get: function () {
            if (!this.reverse) {
                return false;
            }
            return this.reverse === 'true' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    EqualityValidatorDirective.prototype.validate = function (controlValue) {
        var value = controlValue.value;
        var e = controlValue.root.get(this.validateEqual);
        if (e && value !== e.value && !this.isReverse) {
            return {
                validateEqual: false
            };
        }
        // needed in order to check by retyping the password
        if (e && value === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length) {
                e.setErrors(null);
            }
        }
        // value not equal and reverse
        if (e && value !== e.value && this.isReverse) {
            e.setErrors({ validateEqual: false });
        }
        return null;
    };
    EqualityValidatorDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Directive */])({
            selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALIDATORS */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* forwardRef */])(function () { return EqualityValidatorDirective; }), multi: true }
            ]
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Attribute */])('validateEqual')),
        __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Attribute */])('reverse')), 
        __metadata('design:paramtypes', [String, String])
    ], EqualityValidatorDirective);
    return EqualityValidatorDirective;
}());
//# sourceMappingURL=C:/Users/Dimitar Pechev/Desktop/TeamDirective20/src/equality-validator.directive.js.map

/***/ },

/***/ 596:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__(802),
            styles: [__webpack_require__(776)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=C:/Users/Dimitar Pechev/Desktop/TeamDirective20/src/footer.component.js.map

/***/ },

/***/ 597:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__footer_footer_component__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_navigation_main_navigation_component__ = __webpack_require__(598);


/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__footer_footer_component__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__main_navigation_main_navigation_component__["a"]; });

//# sourceMappingURL=C:/Users/Dimitar Pechev/Desktop/TeamDirective20/src/index.js.map

/***/ },

/***/ 598:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_notifications__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MainNavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainNavigationComponent = (function () {
    function MainNavigationComponent(authService, router, notificationsService) {
        this.authService = authService;
        this.router = router;
        this.notificationsService = notificationsService;
        this.isLoggedIn = this.authService.isLoggedIn;
        if (!this.isLoggedIn) {
            this.isUserAdmin = false;
        }
        else {
            this.isUserAdmin = !!JSON.parse(localStorage.getItem('currentUser'))['admin'];
        }
        this.notificationOptions = {
            timeOut: 2000,
            showProgressBar: false,
            animate: 'fromRight'
        };
    }
    MainNavigationComponent.prototype.ngDoCheck = function () {
        this.isLoggedIn = !!localStorage.getItem('token');
        if (!this.isLoggedIn) {
            this.isUserAdmin = false;
        }
        else {
            this.isUserAdmin = !!JSON.parse(localStorage.getItem('currentUser'))['admin'];
        }
    };
    MainNavigationComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['./home']);
        this.notificationsService.success('Успешен изход!', 'Към началната страница...');
    };
    MainNavigationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-main-navigation',
            template: __webpack_require__(803),
            styles: [__webpack_require__(777)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"]) === 'function' && _c) || Object])
    ], MainNavigationComponent);
    return MainNavigationComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Dimitar Pechev/Desktop/TeamDirective20/src/main-navigation.component.js.map

/***/ },

/***/ 599:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NewsEntryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewsEntryComponent = (function () {
    function NewsEntryComponent() {
    }
    NewsEntryComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], NewsEntryComponent.prototype, "data", void 0);
    NewsEntryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-news-entry',
            template: __webpack_require__(806),
            styles: [__webpack_require__(780)]
        }), 
        __metadata('design:paramtypes', [])
    ], NewsEntryComponent);
    return NewsEntryComponent;
}());
//# sourceMappingURL=C:/Users/Dimitar Pechev/Desktop/TeamDirective20/src/news-entry.component.js.map

/***/ },

/***/ 600:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__text_transformer_pipe__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sort_by_date_pipe__ = __webpack_require__(601);


/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__text_transformer_pipe__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__sort_by_date_pipe__["a"]; });

//# sourceMappingURL=C:/Users/Dimitar Pechev/Desktop/TeamDirective20/src/index.js.map

/***/ },

/***/ 601:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SortByDatePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SortByDatePipe = (function () {
    function SortByDatePipe() {
    }
    SortByDatePipe.prototype.transform = function (list, dateVariableName, order) {
        if (!list || list.length === 0) {
            return undefined;
        }
        var sorted = list.sort(function (a, b) {
            var comparison = a[dateVariableName].localeCompare(b[dateVariableName]);
            if (order === 'desc') {
                return -comparison;
            }
            return comparison;
        });
        return sorted;
    };
    SortByDatePipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Pipe */])({
            name: 'sortByDate',
            pure: false
        }), 
        __metadata('design:paramtypes', [])
    ], SortByDatePipe);
    return SortByDatePipe;
}());
//# sourceMappingURL=C:/Users/Dimitar Pechev/Desktop/TeamDirective20/src/sort-by-date.pipe.js.map

/***/ },

/***/ 602:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TextTransformPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TextTransformPipe = (function () {
    function TextTransformPipe() {
    }
    TextTransformPipe.prototype.transform = function (gender) {
        if (gender === 'male') {
            return 'Мъж';
        }
        else if (gender === 'female') {
            return 'Жена';
        }
        else {
            return 'Друг';
        }
    };
    TextTransformPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Pipe */])({
            name: 'textTransform'
        }), 
        __metadata('design:paramtypes', [])
    ], TextTransformPipe);
    return TextTransformPipe;
}());
//# sourceMappingURL=C:/Users/Dimitar Pechev/Desktop/TeamDirective20/src/text-transformer.pipe.js.map

/***/ },

/***/ 603:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(97);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AdminRouteGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminRouteGuardService = (function () {
    function AdminRouteGuardService(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AdminRouteGuardService.prototype.canActivate = function () {
        if (!localStorage.getItem('currentUser') || !JSON.parse(localStorage.getItem('currentUser'))['admin']) {
            this.router.navigate(['/home']);
        }
        return this.authService.isUserAdmin();
    };
    AdminRouteGuardService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === 'function' && _b) || Object])
    ], AdminRouteGuardService);
    return AdminRouteGuardService;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Dimitar Pechev/Desktop/TeamDirective20/src/admin-route-guard.service.js.map

/***/ },

/***/ 604:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataService = (function () {
    function DataService() {
    }
    DataService.prototype.getMany = function (klass) {
        var key = this.getKey(klass);
        var itemsStr = localStorage.getItem(key) || '[]';
        return JSON.parse(itemsStr);
    };
    DataService.prototype.add = function (item, klass) {
        var items = this.getMany(klass);
        items.push(item);
        var key = this.getKey(klass);
        var itemsString = JSON.stringify(items);
        localStorage.setItem(key, itemsString);
        return this;
    };
    DataService.prototype.getKey = function (klass) {
        return klass.name;
    };
    DataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], DataService);
    return DataService;
}());
//# sourceMappingURL=C:/Users/Dimitar Pechev/Desktop/TeamDirective20/src/data.service.js.map

/***/ },

/***/ 605:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NewsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsService = (function () {
    function NewsService(api) {
        this.api = api;
    }
    NewsService.prototype.addArticle = function (article) {
        return this.api.post('api/news/add-article', article);
    };
    NewsService.prototype.getAllArticles = function () {
        return this.api.put('api/news/articles', {});
    };
    NewsService.prototype.getArticlesByPage = function (page) {
        return this.api.put("api/news/get-by-page/" + page, {});
    };
    NewsService.prototype.getArticleById = function (articleId) {
        return this.api.put('api/news/get-article', { _id: articleId });
    };
    NewsService.prototype.toggleLike = function (articleId, username) {
        return this.api.put('api/news/toggle-like', { articleId: articleId, username: username });
    };
    NewsService.prototype.postComment = function (articleId, username, content) {
        return this.api.post('api/news/post-comment', { articleId: articleId, username: username, content: content });
    };
    NewsService.prototype.deleteArticle = function (articleId) {
        return this.api.put('api/news/remove-article', { id: articleId });
    };
    NewsService.prototype.restoreArticle = function (articleId) {
        return this.api.put('api/news/restore-article', { id: articleId });
    };
    NewsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === 'function' && _a) || Object])
    ], NewsService);
    return NewsService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Dimitar Pechev/Desktop/TeamDirective20/src/news.service.js.map

/***/ },

/***/ 606:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PetService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PetService = (function () {
    function PetService(api) {
        this.api = api;
    }
    PetService.prototype.getPetsByPage = function (page) {
        return this.api.put("api/pets/get-by-page/" + page, {});
    };
    PetService.prototype.addPet = function (pet) {
        return this.api.post('api/pets/add-pet', { pet: pet });
    };
    PetService.prototype.getPetById = function (petId) {
        return this.api.put('api/pets/get-pet', { id: petId });
    };
    PetService.prototype.addPhotoToPetProfile = function (petId, photoUrl) {
        return this.api.put('api/pets/add-photo', { petId: petId, photoUrl: photoUrl });
    };
    PetService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === 'function' && _a) || Object])
    ], PetService);
    return PetService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Dimitar Pechev/Desktop/TeamDirective20/src/pet.service.js.map

/***/ },

/***/ 607:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RequestsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RequestsService = (function () {
    function RequestsService(api) {
        this.api = api;
    }
    RequestsService.prototype.makeRequest = function (username, petId, petName) {
        return this.api.post('api/requests/make-request', { username: username, petId: petId, petName: petName });
    };
    RequestsService.prototype.getAllRequests = function () {
        return this.api.put('api/requests/get-all', {});
    };
    RequestsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === 'function' && _a) || Object])
    ], RequestsService);
    return RequestsService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Dimitar Pechev/Desktop/TeamDirective20/src/requests.service.js.map

/***/ },

/***/ 608:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(97);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RouteGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RouteGuardService = (function () {
    function RouteGuardService(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    RouteGuardService.prototype.canActivate = function () {
        if (!localStorage.getItem('token')) {
            this.router.navigate(['/login']);
        }
        return this.authService.verifyLogin();
    };
    RouteGuardService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === 'function' && _b) || Object])
    ], RouteGuardService);
    return RouteGuardService;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Dimitar Pechev/Desktop/TeamDirective20/src/route-guard.service.js.map

/***/ },

/***/ 609:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PictureModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PictureModalComponent = (function () {
    function PictureModalComponent() {
    }
    PictureModalComponent.prototype.ngOnInit = function () { };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], PictureModalComponent.prototype, "picture", void 0);
    PictureModalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-picture-modal',
            template: __webpack_require__(811),
            styles: [__webpack_require__(785)]
        }), 
        __metadata('design:paramtypes', [])
    ], PictureModalComponent);
    return PictureModalComponent;
}());
//# sourceMappingURL=C:/Users/Dimitar Pechev/Desktop/TeamDirective20/src/picture-modal.component.js.map

/***/ },

/***/ 610:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AddedContentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddedContentComponent = (function () {
    function AddedContentComponent() {
    }
    AddedContentComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], AddedContentComponent.prototype, "options", void 0);
    AddedContentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-added-content',
            template: __webpack_require__(812),
            styles: [__webpack_require__(786)]
        }), 
        __metadata('design:paramtypes', [])
    ], AddedContentComponent);
    return AddedContentComponent;
}());
//# sourceMappingURL=C:/Users/Dimitar Pechev/Desktop/TeamDirective20/src/added-content.component.js.map

/***/ },

/***/ 611:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/Dimitar Pechev/Desktop/TeamDirective20/src/environment.js.map

/***/ },

/***/ 612:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1097);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/Users/Dimitar Pechev/Desktop/TeamDirective20/src/polyfills.js.map

/***/ },

/***/ 69:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(816);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({
            headers: this.headers
        });
        this.apiUrl = 'http://localhost:3000';
        var token = localStorage.getItem('token');
        if (token) {
            this.options.headers.append('authorization', token);
        }
        ;
    }
    ApiService.prototype.get = function (path) {
        return this.http.get(this.apiUrl + "/" + path, this.options)
            .map(this.getJson);
    };
    ApiService.prototype.post = function (path, body) {
        return this.http.post(this.apiUrl + "/" + path, JSON.stringify(body), this.options)
            .map(this.getJson);
    };
    ApiService.prototype.put = function (path, body) {
        return this.http.put(this.apiUrl + "/" + path, JSON.stringify(body), this.options)
            .map(this.getJson);
    };
    ApiService.prototype.delete = function (path) {
        return this.http.delete(this.apiUrl + "/" + path, this.options)
            .map(this.getJson);
    };
    ApiService.prototype.getJson = function (res) {
        return res.json();
    };
    ApiService.prototype.checkForError = function (res) {
        if (res.status >= 200 && res.status < 300) {
            return res;
        }
        var error = new Error(res.statusText);
        error['response'] = res;
        throw error;
    };
    ApiService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], ApiService);
    return ApiService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Dimitar Pechev/Desktop/TeamDirective20/src/api.service.js.map

/***/ },

/***/ 767:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 768:
/***/ function(module, exports) {

module.exports = "button, button:hover, button:active {\r\n    color: white;\r\n}\r\n\r\n#login-panel {\r\n    padding: 0 20px;\r\n}\r\n\r\n#login-panel h4 {\r\n    color: black;\r\n}\r\n\r\ninput.form-control:focus {\r\n    border-bottom: 1px solid orange;\r\n    box-shadow: 0 1px 0 0 orange;\r\n}\r\n\r\n.input-error {\r\n    box-shadow: 0 0 5px red;\r\n}"

/***/ },

/***/ 769:
/***/ function(module, exports) {

module.exports = "button, button:hover, button:active {\r\n    color: white;\r\n}\r\n\r\n#reg-panel {\r\n    padding: 0 20px;\r\n}\r\n\r\n#reg-panel h4 {\r\n    color: black;\r\n}\r\n\r\ninput.form-control:focus {\r\n    border-bottom: 1px solid orange;\r\n    box-shadow: 0 1px 0 0 orange;\r\n}\r\n\r\n#gender-label {\r\n    color: #9e9e9e;\r\n}\r\n\r\n#gender-select:focus {\r\n    border-color: orange;\r\n    outline: 0;\r\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(255, 152, 0, .6);\r\n}\r\n\r\n.input-error {\r\n    box-shadow: 0 0 5px red;\r\n}"

/***/ },

/***/ 770:
/***/ function(module, exports) {

module.exports = ".campaign-image {\r\n    max-width: 100%;\r\n}\r\n\r\nform {\r\n    background-color: white;\r\n}"

/***/ },

/***/ 771:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 772:
/***/ function(module, exports) {

module.exports = ".campaign-image {\r\n    /*width: 300px;\r\n    height: 300px;*/\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n}"

/***/ },

/***/ 773:
/***/ function(module, exports) {

module.exports = ".fact-image {\r\n    max-width: 100%;\r\n}\r\n\r\nform {\r\n    background-color: white;\r\n}"

/***/ },

/***/ 774:
/***/ function(module, exports) {

module.exports = ".fact-description {\r\n    display: none;\r\n}\r\n\r\n.btn-uncover:hover~.fact-description {\r\n    display: block;\r\n}\r\n\r\n.fact-image {\r\n    max-width: 100%;\r\n}\r\n\r\n.fact-form-container {\r\n    position: relative;\r\n    background: white;\r\n}\r\n\r\n.fact-form {\r\n    position: absolute;\r\n    width: 100%;\r\n    left: 0;\r\n    z-index: 1000;\r\n}"

/***/ },

/***/ 775:
/***/ function(module, exports) {

module.exports = ".container-home {\r\n    top: -100px;\r\n    position: relative;\r\n}\r\n\r\n.container-content {\r\n    margin-top: -100px;\r\n}\r\n\r\n.arrow-home {\r\n    max-width: 75px;\r\n    position: absolute;\r\n    left: 47%;\r\n    top: 77%;\r\n}\r\n\r\n.home-title {\r\n    border-bottom: 2px solid orange;\r\n}\r\n\r\n.thumbnail-content {\r\n    padding-bottom: 4%;\r\n}\r\n\r\n.sub-nav-home {\r\n    margin-bottom: 4%;\r\n    cursor: pointer;\r\n}\r\n\r\n.news-main-title {\r\n    border-bottom: 2px solid orange;\r\n    margin-top: 5%;\r\n}\r\n\r\n.news-entry-title {\r\n    font-weight: bold;\r\n}\r\n\r\n.news-image {\r\n    padding-left: 0;\r\n}\r\n\r\n.news-date {\r\n    font-weight: bold;\r\n    font-style: italic;\r\n}\r\n\r\n.news-content {\r\n    line-height: 1.5em;\r\n    height: 4.5em;\r\n    overflow: hidden;\r\n    text-align: justify;\r\n}"

/***/ },

/***/ 776:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 777:
/***/ function(module, exports) {

module.exports = ".main-nav-link {\r\n    color: black;\r\n}\r\n\r\n#brand {\r\n    font-weight: bold;\r\n    font-size: 1.3rem;\r\n}"

/***/ },

/***/ 778:
/***/ function(module, exports) {

module.exports = "input.form-control:focus {\r\n    border-bottom: 1px solid orange;\r\n    box-shadow: 0 1px 0 0 orange;\r\n}\r\n\r\n#textarea-content:focus {\r\n    border-color: orange;\r\n    outline: 0;\r\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(255, 152, 0, .6);\r\n}\r\n\r\n.article-form {\r\n    padding: 20px;\r\n    margin-top: 20px;\r\n}"

/***/ },

/***/ 779:
/***/ function(module, exports) {

module.exports = ".news-content {\r\n    text-align: justify;\r\n}\r\n\r\n.news-content {\r\n    margin-top: 20px;\r\n}\r\n\r\n.comment {\r\n    margin-top: 20px;\r\n    color: black;\r\n}\r\n\r\n.comment * {\r\n    color: black;\r\n}\r\n\r\n#commentInput:focus {\r\n    border: orange;\r\n    box-shadow: 0 0 15px orange;\r\n}\r\n\r\n#btn-comment, #btn-comment:hover, #btn-comment:active, #btn-comment:visited {\r\n    color: white;\r\n}\r\n\r\n.no-comments {\r\n    margin-top: 25px;\r\n    font-style: italic;\r\n    font-size: 15px;\r\n}\r\n\r\n.news-pic {\r\n    cursor: pointer;\r\n}\r\n\r\n.news-pic:hover {\r\n    box-shadow: 0 0 15px orange;\r\n}"

/***/ },

/***/ 780:
/***/ function(module, exports) {

module.exports = ".news-entry-title {\r\n    font-weight: bold;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.news-image {\r\n    padding-left: 0;\r\n}\r\n\r\n.news-date {\r\n    font-weight: bold;\r\n    font-style: italic;\r\n}\r\n\r\n.news-content {\r\n    line-height: 1.5em;\r\n    height: 4.5em;\r\n    overflow: hidden;\r\n    text-align: justify;\r\n}\r\n\r\n.news-entry {\r\n    margin: 15px 0;\r\n    cursor: pointer;\r\n}"

/***/ },

/***/ 781:
/***/ function(module, exports) {

module.exports = ".news-title {\r\n    border-bottom: 2px solid orange;\r\n}"

/***/ },

/***/ 782:
/***/ function(module, exports) {

module.exports = "input.form-control:focus {\r\n    border-bottom: 1px solid orange;\r\n    box-shadow: 0 1px 0 0 orange;\r\n}\r\n\r\n#textarea-content:focus {\r\n    border-color: orange;\r\n    outline: 0;\r\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(255, 152, 0, .6);\r\n}\r\n\r\n.pet-form {\r\n    padding: 20px;\r\n    margin-top: 20px;\r\n}\r\n\r\n#gender-select {\r\n    margin-bottom: 15px;\r\n} \r\n\r\n#gender-select:focus {\r\n    border-color: orange;\r\n    outline: 0;\r\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(255, 152, 0, .6);\r\n}\r\n\r\n.input-error {\r\n    box-shadow: 0 0 5px red;\r\n}"

/***/ },

/***/ 783:
/***/ function(module, exports) {

module.exports = "#profile-picture {\r\n    cursor: pointer;\r\n    margin: auto;\r\n}\r\n\r\n#profile-picture:hover {\r\n    box-shadow: 0 0 25px orange;\r\n}\r\n\r\n#about-tab, #pictures-tab {\r\n    color: black;\r\n}\r\n\r\n.tabs {\r\n    margin-top: 7px;\r\n}\r\n\r\n#pictures {\r\n    margin-top: 15px;\r\n}\r\n\r\ninput.form-control:focus {\r\n    border-bottom: 1px solid orange;\r\n    box-shadow: 0 1px 0 0 orange;\r\n}\r\n\r\n.img-container {    \r\n    height: 150px;\r\n}"

/***/ },

/***/ 784:
/***/ function(module, exports) {

module.exports = ".less-imp {\r\n    font-size: 1rem;\r\n}\r\n\r\n.image-container {\r\n    height: 300px;\r\n}\r\n\r\n#profile-picture {\r\n    cursor: pointer;\r\n    margin: auto;\r\n}\r\n\r\n#profile-picture:hover {\r\n    box-shadow: 0 0 25px orange;\r\n}"

/***/ },

/***/ 785:
/***/ function(module, exports) {

module.exports = "img {\r\n    width: 100%;\r\n}\r\n\r\n.modal-dialog {\r\n    width: auto;\r\n    max-width: 70%;\r\n} "

/***/ },

/***/ 786:
/***/ function(module, exports) {

module.exports = ".details-container {\r\n    margin-bottom: 10px;\r\n}"

/***/ },

/***/ 787:
/***/ function(module, exports) {

module.exports = ".admin-page-title {\r\n    border-bottom: 2px solid orange;\r\n}\r\n\r\n.back-icon {\r\n    font-size: 70px;\r\n    color: orange;\r\n    cursor: pointer;\r\n}\r\n\r\ninput.form-control:focus {\r\n    border-bottom: 1px solid orange;\r\n    box-shadow: 0 1px 0 0 orange;\r\n}\r\n"

/***/ },

/***/ 788:
/***/ function(module, exports) {

module.exports = ".main-title {\r\n    border-bottom: 2px solid orange;\r\n}\r\n\r\n.back-icon {\r\n    font-size: 70px;\r\n    color: orange;\r\n    cursor: pointer;\r\n}\r\n\r\ninput.form-control:focus {\r\n    border-bottom: 1px solid orange;\r\n    box-shadow: 0 1px 0 0 orange;\r\n}\r\n\r\n.input-error {\r\n    box-shadow: 0 0 5px red;\r\n}\r\n\r\n#profile-picture {\r\n    cursor: pointer;\r\n    margin: auto;\r\n}\r\n\r\n#profile-picture:hover {\r\n    box-shadow: 0 0 25px orange;\r\n}"

/***/ },

/***/ 792:
/***/ function(module, exports) {

module.exports = "<app-main-navigation></app-main-navigation>\r\n\r\n<main class=\"container-fluid\">\r\n    <router-outlet></router-outlet>\r\n</main>\r\n\r\n<app-footer></app-footer>"

/***/ },

/***/ 793:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row zoomInDown\">\n    <div class=\"col-md-6 col-md-offset-3\">\n      <div id=\"login-panel\" class=\"card\">\n        <div class=\"card-title text-center\">\n          <h4>Вход</h4>\n          <hr>\n        </div>\n        <div class=\"card-content\">\n          <form [formGroup]=\"form\" (ngSubmit)=\"submit(form.value)\">\n            <span class=\"text-danger small\" *ngIf=\"!form.controls['username'].valid && form.controls['username'].touched\">Не сте въвели потребителско име.</span>\n            <input class=\"form-control\" [formControl]=\"form.controls['username']\" [class.input-error]=\"!form.controls['username'].valid && form.controls['username'].touched\"\n              type=\"text\" name=\"username\" placeholder=\"Потребителско име\">\n\n            <span class=\"text-danger small\" *ngIf=\"!form.controls['password'].valid && form.controls['password'].touched\">Не сте въвели парола.</span>\n            <input class=\"form-control\" [formControl]=\"form.controls['password']\" [class.input-error]=\"!form.controls['username'].valid && form.controls['username'].touched\"\n              type=\"password\" name=\"password\" placeholder=\"Парола\">\n\n            <hr>\n            <button type=\"submit\" [disabled]=\"isDisabled\" class=\"btn btn-block orange\">Вход</button>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<simple-notifications [options]=\"notificationOptions\"></simple-notifications>"

/***/ },

/***/ 794:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6 col-md-offset-3\">\n      <div id=\"reg-panel\" class=\"card\">\n        <div class=\"card-title text-center\">\n          <h4>Регистрация</h4>\n          <hr>\n        </div>\n        <div class=\"card-content\">\n          <form [formGroup]=\"form\" (ngSubmit)=\"submit(form.value);\">\n            <span class=\"text-danger small\" *ngIf=\"!form.controls['username'].valid && form.controls['username'].touched\">Потребителското име трябва да е между 6 и 15 символа.</span>\n            <input class=\"form-control\" [class.input-error]=\"!form.controls['username'].valid && form.controls['username'].touched\" type=\"text\"\n              name=\"username\" [formControl]=\"form.controls['username']\" placeholder=\"Потребителско име\" required>\n\n            <span class=\"text-danger small\" *ngIf=\"!form.controls['password'].valid && form.controls['password'].touched\">Паролата трябва да е между 6 и 15 символа.</span>\n            <input class=\"form-control\" type=\"password\" name=\"password\" [formControl]=\"form.controls['password']\" placeholder=\"Парола\"\n              [class.input-error]=\"!form.controls['password'].valid && form.controls['password'].touched\" validateEqual=\"confirmPassword\"\n              reverse=\"true\" required>\n\n            <span class=\"text-danger small\" *ngIf=\"!form.controls['confirmPassword'].valid && form.controls['confirmPassword'].touched\">Паролите не съвпадат.</span>\n            <input class=\"form-control\" type=\"password\" name=\"confirmPassword\" [formControl]=\"form.controls['confirmPassword']\" placeholder=\"Потвърди паролата\"\n              [class.input-error]=\"!form.controls['confirmPassword'].valid && form.controls['confirmPassword'].touched\" validateEqual=\"password\"\n              required>\n\n            <span class=\"text-danger small\" *ngIf=\"!form.controls['email'].valid && form.controls['email'].touched\">Въведеният E-Mail не е валиден.</span>\n            <input class=\"form-control\" type=\"email\" name=\"email\" [formControl]=\"form.controls['email']\" placeholder=\"E-Mail\" [class.input-error]=\"!form.controls['email'].valid && form.controls['email'].touched\"\n              required>\n\n            <span class=\"text-danger small\" *ngIf=\"!form.controls['firstName'].valid && form.controls['firstName'].touched\">Името трябва да е между 3 и 20 символа.</span>\n            <input class=\"form-control\" type=\"text\" name=\"firstName\" [formControl]=\"form.controls['firstName']\" placeholder=\"Име\" [class.input-error]=\"!form.controls['firstName'].valid && form.controls['firstName'].touched\"\n              required>\n\n            <span class=\"text-danger small\" *ngIf=\"!form.controls['lastName'].valid && form.controls['lastName'].touched\">Фамилията трябва да е между 3 и 20 символа.</span>\n            <input class=\"form-control\" type=\"text\" name=\"lastName\" [formControl]=\"form.controls['lastName']\" placeholder=\"Фамилия\" [class.input-error]=\"!form.controls['lastName'].valid && form.controls['lastName'].touched\"\n              required>\n\n            <span class=\"text-danger small\" *ngIf=\"!form.controls['age'].valid && form.controls['age'].touched\">Въведете възраст между 6 и 100 години.<br></span>\n            <input class=\"form-control\" type=\"number\" name=\"age\" [formControl]=\"form.controls['age']\" placeholder=\"Възраст\" [class.input-error]=\"!form.controls['age'].valid && form.controls['age'].touched\"\n              required>\n\n            <span class=\"text-danger small\" *ngIf=\"!form.controls['gender'].valid && form.controls['gender'].touched\">Не сте въвели пол.<br></span>\n            <label id=\"gender-label\" for=\"gender\">Пол:</label>\n            <select id=\"gender-select\" class=\"form-control\" [formControl]=\"form.controls['gender']\" name=\"gender\" [class.input-error]=\"!form.controls['gender'].valid && form.controls['gender'].touched\">\n            <option value=\"male\">Мъж</option>\n            <option value=\"female\">Жена</option>\n            <option value=\"unspecified\">Друг</option>    \n          </select>\n            <hr>\n            <button type=\"submit\" [disabled]=\"isDisabled\" class=\"btn btn-block orange\">Регистрирай се</button>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<simple-notifications [options]=\"notificationOptions\"></simple-notifications>"

/***/ },

/***/ 795:
/***/ function(module, exports) {

module.exports = "<form #campaignsForm=\"ngForm\" (ngSubmit)=\"createCampaign(); campaignsForm.reset()\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-offset-1 col-xs-7\">\r\n            <div class=\"form-group\">\r\n                <input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"campaign.name\" #name=\"ngModel\" minlength=\"6\" required placeholder=\"Въведете име на кампанията\"\r\n                />\r\n                <div class=\"text-danger small\" *ngIf=\"name.touched && name.errors?.minlength\">\r\n                    Най-малко 6 символа\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input class=\"form-control\" type=\"text\" name=\"description\" [(ngModel)]=\"campaign.description\" #description=\"ngModel\" minlength=\"20\"\r\n                    placeholder=\"Въведете описание на кампанията\" required />\r\n                <div class=\"text-danger small\" *ngIf=\"description.touched && description.errors?.minlength\">\r\n                    Най-малко 20 символа\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input class=\"form-control\" type=\"text\" name=\"ownerName\" [(ngModel)]=\"campaign.ownerName\" placeholder=\"Въведете име на собственика\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input class=\"form-control\" type=\"text\" name=\"ownerContact\" [(ngModel)]=\"campaign.ownerContact\" #ownerContact=\"ngModel\" minlength=\"6\" placeholder=\"Въведете контакти на собственика\"\r\n                    required />\r\n                <div class=\"text-danger small\" *ngIf=\"ownerContact.touched && ownerContact.errors?.minlength\">\r\n                    Най-малко 6 символа\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input class=\"form-control\" type=\"text\" name=\"neededAmount\" [(ngModel)]=\"campaign.neededAmount\" placeholder=\"Въведете нужната сума за кампанията\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input class=\"form-control\" type=\"text\" name=\"iban\" [(ngModel)]=\"campaign.iban\" placeholder=\"Въведете номер на сметка за дарения\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input class=\"form-control\" type=\"url\" name=\"image\" [(ngModel)]=\"campaign.image\" placeholder=\"Въведете линк със снимка на любимеца\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <button class=\"btn btn-success\">Създаване</button>\r\n                <button (click)=\"return()\" class=\"btn btn-danger\">Назад</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xs-3\">\r\n            <img [src]=\"campaign.image\" class=\"campaign-image\" [hidden]=\"!campaign.image\">\r\n        </div>\r\n    </div>\r\n</form>"

/***/ },

/***/ 796:
/***/ function(module, exports) {

module.exports = "<div *ngIf=\"isUserAdmin\">\r\n    <button (click)=\"addCampaign()\" class=\"btn btn-success\">Добавяне на кампания за любимец</button>\r\n</div>\r\n<ul *ngIf=\"campaigns\" class=\"list\">\r\n    <li *ngFor=\"let campaign of campaigns\">\r\n        <div class=\"sub-nav-home card text-center\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                    <img class=\"img-responsive img-thumbnail\" [src]=\"campaign.image\">\r\n                </div>\r\n                <div class=\"col-md-8\">\r\n                    <h4>{{campaign.name}}</h4>\r\n                    <button (click)=\"viewDetails(campaign._id)\" class=\"btn btn-success\">Вижте повече</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </li>\r\n</ul>\r\n<div *ngIf=\"!campaigns.length\">\r\n    Все още няма добвени капмании!\r\n</div>"

/***/ },

/***/ 797:
/***/ function(module, exports) {

module.exports = "<div *ngIf=\"!showEditButton && !showEdit\">\r\n    <ul *ngIf=\"campaign\">\r\n        <div class=\"sub-nav-home card text-center\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-5\">\r\n                    <img class=\"img-responsive img-thumbnail\" [src]=\"campaign.image\">\r\n                </div>\r\n                <div class=\"col-md-7\">\r\n                    <h1>{{campaign.name}}</h1>\r\n                    <h6>Описание: {{campaign.description}}</h6>\r\n                    <h6>Име на собственика: {{campaign.ownerName}}</h6>\r\n                    <h6 *ngIf=\"!campaign.ownerName.length\">\r\n                        няма информация\r\n                    </h6>\r\n                    <h6>Контакти на собственика: {{campaign.ownerContact}}</h6>\r\n                    <h6>Необходима сума: {{campaign.neededAmount}}</h6>\r\n                    <h6 *ngIf=\"!campaign.neededAmount\">\r\n                        няма информация\r\n                    </h6>\r\n                    <h6>Сметка за дарения: {{campaign.iban}}</h6>\r\n                    <h6 *ngIf=\"!campaign.iban\">\r\n                        няма информация\r\n                    </h6>\r\n                    <h6>Добавено от: {{campaign.addedBy}}</h6>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </ul>\r\n    <button (click)=\"showEditCampaign()\" class=\"btn btn-warning\">Редактиране</button>\r\n    <button (click)=\"return()\" class=\"btn btn-danger\">Назад</button>\r\n</div>\r\n<div *ngIf=\"showEdit\">\r\n    <form #editCampaignForm=\"ngForm\" (ngSubmit)=\"editCampaign(); editCampaignForm.reset()\">\r\n        <input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"campaign.name\" #name=\"ngModel\" minlength=\"6\" placeholder=\"Въведете име на кампанията\"\r\n            required />\r\n        <div class=\"text-danger small\" *ngIf=\"name.touched && name.errors?.minlength\">\r\n            Най-малко 6 символа\r\n        </div>\r\n        <input class=\"form-control\" type=\"text\" name=\"description\" [(ngModel)]=\"campaign.description\" #description=\"ngModel\" minlength=\"20\"\r\n            placeholder=\"Въведете описание\" required />\r\n        <div class=\"text-danger small\" *ngIf=\"description.touched && description.errors?.minlength\">\r\n            Най-малко 20 символа\r\n        </div>\r\n        <input class=\"form-control\" type=\"text\" name=\"ownerName\" [(ngModel)]=\"campaign.ownerName\" #ownerName=\"ngModel\" placeholder=\"Въведете име на собственика\">\r\n        <input class=\"form-control\" type=\"text\" name=\"ownerContact\" [(ngModel)]=\"campaign.ownerContact\" #ownerContact=\"ngModel\" minlength=\"6\"\r\n            placeholder=\"Въведете контакти на собственика\">\r\n        <div class=\"text-danger small\" *ngIf=\"ownerContact.touched && ownerContact.errors?.minlength\">\r\n            Най-малко 6 символа\r\n        </div>\r\n        <input class=\"form-control\" type=\"text\" name=\"neededAmount\" [(ngModel)]=\"campaign.neededAmount\" #neededAmount=\"ngModel\" placeholder=\"Въведете необходимата сума\"\r\n            required />\r\n        <input class=\"form-control\" type=\"text\" name=\"iban\" [(ngModel)]=\"campaign.iban\" #iban=\"ngModel\" placeholder=\"Въведете номер на сметката\">\r\n        <input class=\"form-control\" type=\"text\" name=\"image\" [(ngModel)]=\"campaign.image\" #image=\"ngModel\" placeholder=\"Въведете линк към снимка\">\r\n        <hr>\r\n        <button type=\"submit\" class=\"btn btn-block orange\">Потвърди</button>\r\n    </form>\r\n</div>"

/***/ },

/***/ 798:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ },

/***/ 799:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <form #factsForm=\"ngForm\" (ngSubmit)=\"createFact(); factsForm.reset()\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-offset-1 col-xs-7\">\r\n                <div class=\"form-group\">\r\n                    <input class=\"form-control\" type=\"text\" name=\"title\" [(ngModel)]=\"fact.title\" #title=\"ngModel\" minlength=\"5\" required placeholder=\"Въведете заглавие на факта\"\r\n                    />\r\n                    <div class=\"text-danger small\" *ngIf=\"title.touched && title.errors?.minlength\">\r\n                        Най-малко 5 символа\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <input class=\"form-control\" type=\"text\" name=\"description\" [(ngModel)]=\"fact.description\" #description=\"ngModel\" minlength=\"20\"\r\n                        placeholder=\"Въведете описание на факта\" required />\r\n                    <div class=\"text-danger small\" *ngIf=\"description.touched && description.errors?.minlength\">\r\n                        Най-малко 20 символа\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <input class=\"form-control\" type=\"url\" name=\"img\" [(ngModel)]=\"fact.img\" placeholder=\"Въведете снимка за факта\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <button class=\"btn btn-success\">Създаване</button>\r\n                    <button (click)=\"return()\" class=\"btn btn-danger\">Назад</button>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-xs-3\">\r\n                <img [src]=\"fact.img\" class=\"fact-image\" [hidden]=\"!fact.img\">\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>"

/***/ },

/***/ 800:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div *ngIf=\"isUserAdmin\">\r\n        <button (click)=\"addFact()\" class=\"btn btn-success\">Добавяне на любопитен факт</button>\r\n    </div>\r\n    <ul *ngIf=\"facts\" class=\"list\">\r\n        <li *ngFor=\"let fact of facts\">\r\n            <div class=\"sub-nav-home card text-center\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <img class=\"img-responsive img-thumbnail\" [src]=\"fact.img\">\r\n                    </div>\r\n                    <div class=\"col-md-8\">\r\n                        <h4>{{fact.title}}</h4>\r\n                        <div class=\"thumbnail-content\">{{fact.description}}</div>\r\n                        <div class=\"thumbnail-content\">Добавено от: {{fact.addedBy}}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n    <div *ngIf=\"!facts.length\">\r\n        Все още няма добвени факти!\r\n    </div>\r\n</div>"

/***/ },

/***/ 801:
/***/ function(module, exports) {

module.exports = "<div class=\"container-home row text-center\">\n  <img class=\"img-responsive\" src=\"./assets/images/cute-cat-and-dog-sleep-wallpaper-resized.jpg\" alt=\"cat-dog\">\n  <a pageScroll [pageScrollDuration]=\"500\" href=\"#home-scroll-down\"><img class=\"img-responsive arrow-home\" src=\"./assets/images/down-arrow-circle-hi.png\" alt=\"arrow\"></a>\n</div>\n<div class=\"container-content\">\n  <div id=\"home-scroll-down\" class=\"row text-center\">\n    <h2 class=\"home-title\">Вземи ме вкъщи!</h2>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div routerLink=\"/pets/page/1\" class=\"sub-nav-home card text-center\">\n          <img class=\"img-responsive img-thumbnail\" src=\"./assets/images/oldest-cat-living-guinness-world-records-corduroy-52.jpg\"\n            alt=\"cat\">\n          <h4>Осинови</h4>\n          <div class=\"thumbnail-content\">Приюти някое от прекрасните малки животинчета, които искат в замяна само любов!</div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div routerLink=\"/campaign/list\" class=\"sub-nav-home card text-center\">\n          <img class=\"img-responsive img-thumbnail\" src=\"./assets/images/woman-feeding-dog-snack.jpg\" alt=\"dog\">\n          <h4 class=\"\">Кампании</h4>\n          <div class=\"thumbnail-content\">Помогни ни, като се включиш в някоя от нашите кампании в помощ на малките ни приятели!</div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div routerLink=\"/facts\" class=\"sub-nav-home card text-center\">\n          <img class=\"img-responsive img-thumbnail\" src=\"./assets/images/hd-cats-and-dog-images-wallpaper.jpg\" alt=\"cat-dog\">\n          <h4>Любопитно</h4>\n          <div class=\"thumbnail-content\">Прочети или сподели с нас интересни и забавни факти, свързани с домашните ни любимци!</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row text-left\">\n      <div class=\"row\">\n        <h4 class=\"news-main-title\">Последни новини</h4>\n        <app-news-entry *ngFor=\"let newsEntry of newsData\" [data]=\"newsEntry\" (click)=\"goToDetails(newsEntry)\"></app-news-entry>\n      </div>\n      <div class=\"row\">\n          <div class=\"col-md-2 col-md-offset-10\">\n            <button class=\"btn btn-block btn-success\" routerLink=\"/news/page/1\" type=\"button\">Виж още...</button>\n          </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ },

/***/ 802:
/***/ function(module, exports) {

module.exports = "<footer class=\"page-footer green text-center\">\n  <div class=\"footer-copyright\">\n    © 2017 Copyright: Team Directive 20\n  </div>\n</footer>"

/***/ },

/***/ 803:
/***/ function(module, exports) {

module.exports = "<nav id=\"main-navigation\" class=\"navbar navbar-default navbar-static-top green darken-3\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header\">\r\n      <a routerLink=\"/home\" id=\"brand\" class=\"navbar-brand nav-link waves-effect waves-light orange\">Adopt a Pet</a>\r\n      <button class=\"navbar-toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-main\">\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n          </button>\r\n    </div>\r\n    <div class=\"navbar-collapse collapse\" id=\"navbar-main\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li routerLinkActive=\"active\">\r\n          <a routerLink=\"/news/page/1\" class=\"nav-link waves-effect waves-light\">Новини</a>\r\n        </li>\r\n        <li routerLinkActive=\"active\">\r\n          <a routerLink=\"/campaign/list\" class=\"nav-link waves-effect waves-light\">Кампании</a>\r\n        </li>\r\n        <li routerLinkActive=\"active\">\r\n          <a routerLink=\"/facts\" class=\"nav-link waves-effect waves-light\">Любопитни факти</a>\r\n        </li >\r\n        <li routerLinkActive=\"active\">\r\n          <a routerLink=\"/pets/page/1\" class=\"nav-link waves-effect waves-light\">Осинови</a>\r\n        </li>        \r\n      </ul>\r\n\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li *ngIf=\"isUserAdmin\"><a routerLink=\"/admin\" class=\"nav-link waves-effect waves-light orange\">Админ</a></li>\r\n        <li *ngIf=\"isLoggedIn\"><a routerLink=\"/my-profile\" class=\"nav-link waves-effect waves-light orange\">Профил</a></li>\r\n        <li *ngIf=\"isLoggedIn\"><a routerLink=\"/logout\" (click)=\"logout()\" class=\"nav-link waves-effect waves-light orange\">Изход</a></li>\r\n        <li *ngIf=\"!isLoggedIn\"><a routerLink=\"/login\" class=\"nav-link waves-effect waves-ligh orange\">Вход</a></li>\r\n        <li *ngIf=\"!isLoggedIn\"><a routerLink=\"/register\" class=\"nav-link waves-effect waves-light orange\">Регистрация</a></li>        \r\n      </ul>\r\n\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<simple-notifications [options]=\"notificationOptions\"></simple-notifications>"

/***/ },

/***/ 804:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row text-right title-h4\">\n    <h4>Добави статия</h4>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-8 col-md-offset-2\">\n      <div class=\"card article-form\">\n         <form [formGroup]=\"form\" (ngSubmit)=\"addArticle(form.value)\">            \n            <input class=\"form-control\" [formControl]=\"form.controls['title']\" type=\"text\" name=\"title\" placeholder=\"Заглавие\">\n           \n            <input class=\"form-control\" [formControl]=\"form.controls['imgUrl']\" type=\"url\" name=\"iamgeUrl\" placeholder=\"Снимка (url)\">\n            \n            <textarea id=\"textarea-content\" class=\"form-control\" [formControl]=\"form.controls['content']\" rows=\"15\" cols=\"50\" name=\"content\" placeholder=\"Съдържание...\"></textarea>\n            <hr>\n            <button type=\"submit\" [disabled]=\"isDisabled\" class=\"btn btn-block green\">Добави статия</button>\n          </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<simple-notifications [options]=\"notificationOptions\"></simple-notifications>"

/***/ },

/***/ 805:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row text-right title-h4\">\n    <h4>{{article.title}}</h4>\n  </div>\n  <div class=\"row news-content\">\n    <div class=\"col-md-3 text-center\">\n      <img class=\"news-pic img-thumbnail img-responsive\" data-toggle=\"modal\" [attr.data-target]=\"'#' + article._id\" [src]=\"article.imgUrl\"\n        [alt]=\"article.title\">\n      <p>\n        Автор: <a (click)=\"goToProfile(article.author)\">{{article.author}}</a>\n      </p>\n      <p class=\"small\">Създадена на: {{article.createdOn | date:\"medium\"}}</p>\n      <div>\n        <button *ngIf=\"isLoggedIn\" (click)=\"focusInput()\" pageScroll [pageScrollDuration]=\"500\" href=\"#comment-box\" class=\"btn btn-success btn-xs\"\n          type=\"button\">Коментрай</button>\n        <button [hidden]=\"isLiked || !isLoggedIn\" (click)=\"toggleLike()\" class=\"btn btn-success btn-xs\" type=\"button\">Like! ({{article.likes.length}})</button>\n        <button [hidden]=\"!isLiked || !isLoggedIn\" (click)=\"toggleLike()\" class=\"btn btn-success btn-xs\" type=\"button\">Liked! ({{article.likes.length}})</button>\n        <button *ngIf=\"!isLoggedIn\" class=\"btn btn-success btn-xs\" type=\"button\">Likes ({{article.likes.length}})</button>\n      </div>\n    </div>\n    <div class=\"col-md-9\">\n      <p class=\"news-content\" style=\"font-size: 1rem;\">{{article.content}}\n\n</p>\n<div *ngIf=\"canDelete\" class=\"text-right\">\n  <button class=\"btn btn-danger btn-xs\" (click)=\"deleteArticle(article._id)\" type=\"button\">Изтрий</button>\n</div>\n<div class=\"row\">\n  <div>\n    <div class=\"title-h4 text-center\">\n      <p class=\"bold\">Коментари</p>\n    </div>\n    <div [hidden]=\"article.comments.length\" class=\"text-center no-comments\">\n      Все още няма коментари!\n    </div>\n    <div *ngFor=\"let comment of article.comments\" class=\"comment card\">\n      <div class=\"card-content text-center\">\n        {{comment.content}}\n      </div>\n      <div class=\"card-content small text-right\">\n        <div>Автор:\n          <a (click)=\"goToProfile(comment.author)\" class=\"comment-profile-link\" style=\"color:cornflowerblue\">{{comment.author}}</a>\n</div>\n<div>Написан на: {{comment.createdOn | date:\"medium\"}}</div>\n</div>\n</div>\n<div id=\"comment-box\" *ngIf=\"isLoggedIn\">\n  <div class=\"card comment\">\n    <div class=\"card-content\">\n      <form [formGroup]=\"form\" (ngSubmit)=\"submit(form.value)\">\n        <textarea #commentInput id=\"commentInput\" class=\"form-control\" rows=\"4\" cols=\"40\" [formControl]=\"form.controls['content']\"\n          name=\"content\" placeholder=\"Въведете вашия коментар тук...\"></textarea>\n        <div class=\"col-md-4 col-md-offset-8\">\n          <button type=\"submit\" id=\"btn-comment\" class=\"btn btn-block btn-success\">Добави коментар</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n\n<simple-notifications [options]=\"notificationOptions\"></simple-notifications>\n<app-picture-modal [picture]=\"article\"></app-picture-modal>"

/***/ },

/***/ 806:
/***/ function(module, exports) {

module.exports = "<div class=\"news-entry row card\">\n  <div class=\"news-image col-md-2\">\n    <img class=\"img-thumbnail img-responsive\" [src]=\"data.imgUrl\" [alt]=\"data.title\">\n  </div>\n  <div class=\"col-md-10\">\n    <p class=\"news-entry-title\">{{data.title}}</p>\n    <div class=\"news-date small\">{{data.createdOn | date:\"medium\"}}</div>\n    <p class=\"news-content small\">{{data.content}}</p>\n  </div>\n</div>"

/***/ },

/***/ 807:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row title-h4\">\n    <div class=\"col-md-10\">\n      <h4>Последни новини</h4>\n    </div>\n    <div *ngIf=\"isUserAdmin\" class=\"col-md-2\">\n      <button routerLink=\"/news/add-article\" class=\"btn btn-block green\" type=\"button\">Добави статия</button>\n    </div>\n  </div>\n  <app-news-entry *ngFor=\"let newsEntry of newsList\" [data]=\"newsEntry\" (click)=\"goToDetails(newsEntry)\"></app-news-entry>\n  <div class=\"row text-center\">\n\n    <nav>\n      <ul class=\"pagination\">\n        <li class=\"page-item\">\n          <a class=\"page-link\" (click)=\"goToPrev()\" aria-label=\"Previous\">\n            <span aria-hidden=\"true\">&laquo;</span>\n            <span class=\"sr-only\">Previous</span>\n          </a>\n        </li>\n        <li *ngFor=\"let item of generateRange(pagesCount); let i = index\" class=\"page-item\"><a (click)=\"goToPage(i + 1)\" class=\"page-link\">{{i + 1}}</a></li>\n        <li class=\"page-item\">\n          <a class=\"page-link\" (click)=\"goToNext()\" aria-label=\"Next\">\n            <span aria-hidden=\"true\">&raquo;</span>\n            <span class=\"sr-only\">Next</span>\n          </a>\n        </li>\n      </ul>\n    </nav>\n\n  </div>\n</div>"

/***/ },

/***/ 808:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row text-right title-h4\">\n    <h4>Добави обява</h4>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-8 col-md-offset-2\">\n      <div class=\"card pet-form\">\n        <form [formGroup]=\"form\" (ngSubmit)=\"addPet(form.value)\">\n          <input class=\"form-control\" [formControl]=\"form.controls['name']\" type=\"text\" name=\"name\" placeholder=\"Име\">\n\n          <input class=\"form-control\" [formControl]=\"form.controls['age']\" type=\"number\" min=\"0\" max=\"25\" name=\"age\" placeholder=\"Възраст\">\n\n          <input class=\"form-control\" [formControl]=\"form.controls['breed']\" type=\"text\" name=\"breed\" placeholder=\"Порода\">\n\n          <input class=\"form-control\" [formControl]=\"form.controls['pictures']\" type=\"url\" name=\"pictures\" placeholder=\"Снимка (url)\">\n\n          <select id=\"gender-select\" class=\"form-control\" [formControl]=\"form.controls['gender']\" name=\"gender\">\n            <option class=\"form-control\" value=\"male\">Мъжки</option>\n            <option class=\"form-control\" value=\"female\">Женски</option>\n          </select>\n\n          <textarea id=\"textarea-content\" class=\"form-control\" [formControl]=\"form.controls['about']\" rows=\"15\" cols=\"50\" name=\"about\"\n            placeholder=\"Описание...\"></textarea>\n          <hr>\n          <button type=\"submit\" [disabled]=\"isDisabled\" class=\"btn btn-block green\">Добави обява</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<simple-notifications [options]=\"notificationOptions\"></simple-notifications>"

/***/ },

/***/ 809:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row text-right title-h4\">\n    <h4 class=\"main-title\">\n      {{pet.name}}\n    </h4>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3 text-center\">\n      <div class=\"card-panel\">\n        <div class=\"text-center\">\n          <img id=\"profile-picture\" data-toggle=\"modal\" [attr.data-target]=\"'#' + image._id\" class=\"img-circle img-responsive\" [src]=\"image.imgUrl\"\n            [alt]=\"pet.name\">\n        </div>\n        <hr>\n        <div class=\"card-content text-center\">\n          <p class=\"bold\">{{pet.name}}</p>\n          <p>Пол: {{pet.gender}}</p>\n          <p>Възраст: {{pet.age}}</p>\n          <p class=\"less-imp\">Добавил: <a (click)=\"goToProfile(pet.addedBy)\">{{pet.addedBy}}</a></p>\n          <p>Добавен на: {{pet.addedOn | date:\"medium\"}}</p>\n        </div>\n        <div>\n          <button *ngIf=\"isLoggedIn\" [disabled]=\"isRequested\" data-toggle=\"modal\" data-target=\"#adoptPet\" class=\"btn btn-block green\" type=\"button\">Осинови!</button>\n          <button *ngIf=\"canEdit\" data-toggle=\"modal\" data-target=\"#addPhotos\" class=\"btn btn-block green\" type=\"button\">Добави снимки</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-9\">\n      <div class=\"tabs\" data-example-id=\"togglable-tabs\">\n        <ul class=\"nav nav-tabs\" id=\"myTabs\" role=\"tablist\">\n          <li role=\"presentation\" class=\"active\"><a href=\"#about\" id=\"about-tab\" role=\"tab\" data-toggle=\"tab\" aria-controls=\"about\" aria-expanded=\"true\">За мен</a></li>\n          <li role=\"presentation\" class=\"\"><a href=\"#pictures\" role=\"tab\" id=\"pictures-tab\" data-toggle=\"tab\" aria-controls=\"pictures\" aria-expanded=\"false\">Снимки</a></li>\n        </ul>\n        <div class=\"tab-content\" id=\"myTabContent\">\n          <div class=\"tab-pane fade active in\" role=\"tabpanel\" id=\"about\" aria-labelledby=\"about-tab\">\n            <p class=\"text-justify\">{{pet.about}}</p>\n          </div>\n          <div class=\"tab-pane fade\" role=\"tabpanel\" id=\"pictures\" aria-labelledby=\"profile-tab\">\n            <div *ngFor=\"let picture of pet.pictures; let i = index\" class=\"col-md-4 img-container\">\n              <img class=\"img-responsive img-thumbnail\" data-toggle=\"modal\" [attr.data-target]=\"'#' + i + pet._id\" [src]=\"picture\" alt=\"pic\">\n              <app-picture-modal [picture]=\"{imgUrl: picture, title: pet._id + i, _id: i + pet._id}\"></app-picture-modal>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<simple-notifications [options]=\"notificationOptions\"></simple-notifications>\n<app-picture-modal [picture]=\"image\"></app-picture-modal>\n<div class=\"modal fade\" id=\"addPhotos\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addPhotosLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <div class=\"text-center\">\n          <h4 class=\"modal-title\" id=\"addPhotosLabel\">Добави снимка</h4>\n        </div>\n      </div>\n      <div class=\"modal-body text-center\">\n        <input #addPhotoInput type=\"text\" class=\"form-control\" name=\"photo\" placeholder=\"Снимка (url)\">\n        <button type=\"button\" (click)=\"addPhoto()\" data-dismiss=\"modal\" class=\"btn btn-success\">Потвърди</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"adoptPet\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"adoptPetLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <div class=\"text-center\">\n          <h4 class=\"modal-title\" id=\"adoptPetLabel\">Осиновяване на {{pet.name}}</h4>\n        </div>\n      </div>\n      <div class=\"modal-body text-center\">\n       <p>\n         Заявката Ви ще бъде изпратена до администратор.\n       </p>\n        <button type=\"button\" (click)=\"adoptPet(pet)\" data-dismiss=\"modal\" class=\"btn btn-success\">Потвърди</button>\n        <button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-danger\">Откажи</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ },

/***/ 810:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row title-h4 text-left\">\n    <div class=\"col-md-10\">\n      <h4>Осинови!</h4>\n    </div>\n    <div class=\"col-md-2\">\n      <button *ngIf=\"isLoggedIn\" routerLink=\"/pets/add\" type=\"button\" class=\"btn btn-block green\">Добави обява</button>\n    </div>\n  </div>\n  <div class=\"row\">\n\n    <div *ngFor=\"let pet of pets\" class=\"col-md-4\">\n      <div class=\"card-panel\">\n        <div class=\"image-container text-center\">\n          <img style=\"margin: auto;\" id=\"profile-picture\" data-toggle=\"modal\" [attr.data-target]=\"'#' + pet._id\" class=\"img-circle img-responsive\" [src]=\"pet.pictures[0]\"\n[alt]=\"pet.name\">\n</div>\n<hr>\n<app-picture-modal [picture]=\"{title: pet.name, imgUrl: pet.pictures[0], _id: pet._id}\"></app-picture-modal>\n<div class=\"card-content text-center\">\n  <p>{{pet.name}}</p>\n  <p class=\"less-imp\">Порода: {{pet.breed}}</p>\n  <p class=\"less-imp\">Възраст: {{pet.age}} г.</p>\n  <p class=\"less-imp\">Пол: {{pet.gender}}</p>\n  <p class=\"less-imp\">Добавил: <a (click)=\"goToProfile(pet.addedBy)\">{{pet.addedBy}}</a></p>\n  <button type=\"button\" (click)=\"goToDetails(pet._id)\" class=\"btn btn-success\">Научи повече...</button>\n</div>\n</div>\n</div>\n\n</div>\n\n<div class=\"row text-center\">\n  <nav>\n    <ul class=\"pagination\">\n      <li class=\"page-item\">\n        <a class=\"page-link\" (click)=\"goToPrev()\" aria-label=\"Previous\">\n          <span aria-hidden=\"true\">&laquo;</span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n      </li>\n      <li *ngFor=\"let item of generateRange(pagesCount); let i = index\" class=\"page-item\"><a (click)=\"goToPage(i + 1)\" class=\"page-link\">{{i + 1}}</a></li>\n      <li class=\"page-item\">\n        <a class=\"page-link\" (click)=\"goToNext()\" aria-label=\"Next\">\n          <span aria-hidden=\"true\">&raquo;</span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n      </li>\n    </ul>\n  </nav>\n</div>\n\n</div>"

/***/ },

/***/ 811:
/***/ function(module, exports) {

module.exports = "<!--Button trigger modal - required attributes:\n[' data-toggle']=\"modal\" ['data-target']=\"#picture._id\"-->\n\n<div class=\"modal fade\" [id]=\"picture._id\" tabindex=\"-1\" role=\"dialog\" [attr.aria-labelledby]=\"picture.title\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <img [src]=\"picture.imgUrl\" alt=\"picture.title\">\n      </div>\n    </div>\n  </div>\n</div>"

/***/ },

/***/ 812:
/***/ function(module, exports) {

module.exports = "<div class=\"row details-container\">\n  <div class=\"card\">\n    <div class=\"link-title card-content text-center panel-heading\" data-toggle=\"collapse\" [attr.data-target]=\"'#' + options.id\">\n      <p>{{options.title}}</p>\n    </div>\n    <div id=\"{{options.id}}\" class=\"card-content collapse\">\n      <div *ngIf=\"!options.list.length\" class=\"text-center\">\n        {{options.nothingAddedMessage}}\n      </div>\n      <table *ngIf=\"options.list.length\" class=\"table table-hover table-responsive table-striped\">\n        <thead class=\"table-header\">\n          <th class=\"text-center col-md-2\"><span class=\"glyphicon glyphicon-heart\"></span></th>\n          <th class=\"text-center col-md-5\">{{options.trHeadTitle}}</th>\n          <th class=\"text-center col-md-5\">{{options.trHeadDate}}</th>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of options.list\">\n            <td><img class=\"img-circle img-responsive\" [src]=\"item.imgUrl\"\n                [alt]=\"item.name\"></td>\n            <td class=\"text-center\"><a [routerLink]=\"options.rootLink + item.id\">{{item.name}}</a></td>\n            <td class=\"text-center\">{{item.addedOn}}</td>\n          </tr>          \n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>"

/***/ },

/***/ 813:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row text-right\">\n    <h4 class=\"admin-page-title\">Admin settings</h4>\n  </div>\n  <div *ngIf=\"!showEditUser\" class=\"navigation\">\n    <ul class=\"nav nav-tabs\">\n      <li class=\"active\"><a href=\"#users\" data-toggle=\"tab\" aria-expanded=\"true\">Потребители</a></li>\n    </ul>\n    <div id=\"myTabContent\" class=\"tab-content\">\n      <div class=\"tab-pane fade active in\" id=\"users\">\n        <table class=\"table table-hover table-striped\">\n          <thead class=\"text-center table-header\">\n            <th class=\"text-center\">#</th>\n            <th class=\"text-center\">Потребителско име:</th>\n            <th class=\"text-center\">Регистриран на:</th>\n            <th class=\"text-center\">Опции</th>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let user of (users | sortByDate:'registeredOn':'desc'); let i = index\">\n              <td class=\"col-md-1 text-center\">{{i + 1}}</td>\n              <td class=\"col-md-3 text-center\"><a (click)=\"goToDetails(user)\">{{user.username}}</a></td>\n              <td class=\"col-md-3 text-center\">{{user.registeredOn | date:\"medium\"}}</td>\n              <td class=\"col-md-5 text-center\">\n                <button class=\"btn btn-success\" (click)=\"showEdit(user)\" type=\"button\">Редактирай</button>\n                <button [hidden]=\"user.isDeleted\" (click)=\"toggleBanUser(user)\" class=\"btn btn-danger\" type=\"button\">Деактивирай акаунт</button>\n                <button [hidden]=\"!user.isDeleted\" (click)=\"toggleBanUser(user)\" class=\"btn btn-success\" type=\"button\">Активирай акаунт</button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <!--<div class=\"tab-pane fade\" id=\"......\">-->\n    </div>\n  </div>\n  <div *ngIf=\"showEditUser\" class=\"row\">\n    <div class=\"col-md-2\">\n      <span (click)=\"showAddedDetails()\" class=\"back-icon glyphicon glyphicon-circle-arrow-left\"></span>\n    </div>\n    <div class=\"col-md-6 col-md-offset-1\">\n      <div>\n        <div class=\"row text-center\">\n          <p>Редактиране на профила на {{editedUser.username}}</p>\n          <hr>\n        </div>\n        <form [formGroup]=\"form\" (ngSubmit)=\"editProfileInfo(form.value)\">\n          <input class=\"form-control\" type=\"email\" name=\"email\" [formControl]=\"form.controls['email']\" placeholder=\"E-Mail\">\n\n          <input class=\"form-control\" type=\"text\" name=\"profilePicture\" [formControl]=\"form.controls['profilePicture']\" placeholder=\"Профилна снимка (url)\">\n\n          <input class=\"form-control\" type=\"text\" name=\"firstName\" [formControl]=\"form.controls['firstName']\" placeholder=\"Име\">\n\n          <input class=\"form-control\" type=\"text\" name=\"lastName\" [formControl]=\"form.controls['lastName']\" placeholder=\"Фамилия\">\n\n          <input class=\"form-control\" min=\"6\" max=\"100\" type=\"number\" name=\"age\" [formControl]=\"form.controls['age']\" placeholder=\"Възраст\">\n\n          <label id=\"gender-label\" for=\"gender\">Пол:</label>\n          <select id=\"gender-select\" class=\"form-control\" [formControl]=\"form.controls['gender']\">\n                <option value=\"male\">Мъж</option>\n                <option value=\"female\">Жена</option>\n                <option value=\"unspecified\">Друг</option>    \n              </select>\n          <hr>\n          <button type=\"button\" [disabled]=\"isEditedUserAdmin\" (click)=\"makeAdmin()\" class=\"btn btn-block green\">Направи админ</button>\n          <hr>\n          <button type=\"submit\" [disabled]=\"isSubmitButtonDisabled\" class=\"btn btn-block orange\">Потвърди промените</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<simple-notifications [options]=\"notificationOptions\"></simple-notifications>"

/***/ },

/***/ 814:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row text-right\">\n    <h4 class=\"main-title\">\n      {{user.username}}\n    </h4>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3 text-center\">\n      <div class=\"card-panel\">\n        <div class=\"text-center\">\n          <img id=\"profile-picture\" data-toggle=\"modal\" [attr.data-target]=\"'#' + image._id\" class=\"img-circle img-responsive\" [src]=\"user.profilePicture\" [alt]=\"user.username\">\n        </div>\n        <hr>\n        <div class=\"card-content text-center\">\n          <p class=\"bold\">{{user.firstName}} {{user.lastName}}</p>\n          <p>E-Mail: {{user.email}}</p>\n          <p>Възраст: {{user.age}}</p>\n          <p>Пол: {{user.gender | textTransform }}</p>\n        </div>\n        <div *ngIf=\"showEditButton\">\n          <button class=\"btn btn-block orange\" (click)=\"showEditProfile()\">Редактирай</button>\n        </div>\n      </div>\n    </div>\n    <div [hidden]=\"showEdit\" class=\"col-md-9\">\n      <app-added-content *ngIf=\"user.admin\" [options]=\"addedArticles\"></app-added-content>\n      <app-added-content [options]=\"adoptedPets\"></app-added-content>\n      <app-added-content [options]=\"addedAnimals\"></app-added-content>\n      <app-added-content [options]=\"addedCampaigns\"></app-added-content>\n      <app-added-content [options]=\"addedFacts\"></app-added-content>\n      <app-added-content [options]=\"addedGalleryImages\"></app-added-content>\n    </div>\n    <div [hidden]=\"!showEdit\" class=\"col-md-9\">\n      <div class=\"row\">\n        <div class=\"row\">\n          <div class=\"col-md-2\">\n            <span (click)=\"showAddedDetails()\" class=\"back-icon glyphicon glyphicon-circle-arrow-left\"></span>\n          </div>\n          <div class=\"col-md-8 text-center\">\n            <h4>Редактиране на профила</h4>\n          </div>\n        </div>\n        <hr>\n        <div class=\"row\">\n          <div class=\"col-md-8 col-md-offset-2\">\n            <div>\n              <div class=\"row text-center\">\n                <span class=\"small text-success\">Попълването на всички полета е условно.</span>\n                <hr>\n              </div>\n              <form [formGroup]=\"form\" (ngSubmit)=\"editProfileInfo(form.value);\">\n                <span class=\"text-danger small\" *ngIf=\"!form.controls['email'].valid && form.controls['email'].touched\">Въведеният E-Mail не е валиден.</span>\n                <input class=\"form-control\" type=\"email\" name=\"email\" [formControl]=\"form.controls['email']\" placeholder=\"E-Mail\" [class.input-error]=\"!form.controls['email'].valid && form.controls['email'].touched\">\n\n                <input class=\"form-control\" type=\"text\" name=\"profilePicture\" [formControl]=\"form.controls['profilePicture']\" placeholder=\"Профилна снимка (url)\"\n                  [class.input-error]=\"!form.controls['profilePicture'].valid && form.controls['profilePicture'].touched\">\n\n                <span class=\"text-danger small\" *ngIf=\"!form.controls['firstName'].valid && form.controls['firstName'].touched\">Името трябва да е между 3 и 20 символа.</span>\n                <input class=\"form-control\" type=\"text\" name=\"firstName\" [formControl]=\"form.controls['firstName']\" placeholder=\"Име\" [class.input-error]=\"!form.controls['firstName'].valid && form.controls['firstName'].touched\">\n\n                <span class=\"text-danger small\" *ngIf=\"!form.controls['lastName'].valid && form.controls['lastName'].touched\">Фамилията трябва да е между 3 и 20 символа.</span>\n                <input class=\"form-control\" type=\"text\" name=\"lastName\" [formControl]=\"form.controls['lastName']\" placeholder=\"Фамилия\" [class.input-error]=\"!form.controls['lastName'].valid && form.controls['lastName'].touched\">\n\n                <span class=\"text-danger small\" *ngIf=\"!form.controls['age'].valid && form.controls['age'].touched && form.controls['age'].value\">Въведете възраст между 6 и 100 години.<br></span>\n                <input class=\"form-control\" min=\"6\" max=\"100\" type=\"number\" name=\"age\" [formControl]=\"form.controls['age']\" placeholder=\"Възраст\"\n                  [class.input-error]=\"!form.controls['age'].valid && form.controls['age'].touched && form.controls['age'].value\">\n\n                <label id=\"gender-label\" for=\"gender\">Пол:</label>\n                <select id=\"gender-select\" class=\"form-control\" [formControl]=\"form.controls['gender']\" name=\"gender\" [class.input-error]=\"!form.controls['gender'].valid && form.controls['gender'].touched\">\n                <option value=\"male\">Мъж</option>\n                <option value=\"female\">Жена</option>\n                <option value=\"unspecified\">Друг</option>    \n              </select>\n                <hr>\n                <button type=\"submit\" [disabled]=\"isBtnDisabled\" class=\"btn btn-block orange\">Потвърди</button>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<simple-notifications [options]=\"notificationOptions\"></simple-notifications>\n<app-picture-modal [picture]=\"image\"></app-picture-modal>"

/***/ },

/***/ 97:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(api, http) {
        this.api = api;
        this.http = http;
        this.isLoggedIn = !!localStorage.getItem('token');
    }
    AuthService.prototype.register = function (user) {
        return this.api.post('api/auth/register', user);
    };
    AuthService.prototype.login = function (user) {
        return this.api.post('api/auth/login', user);
    };
    AuthService.prototype.logout = function () {
        localStorage.clear();
        this.api.post('api/auth/logout', null);
    };
    AuthService.prototype.isUserAdmin = function () {
        var token = localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({
            headers: headers
        });
        return this.http.get('api/auth/admin', options)
            .map(function (res) {
            if (res.status === 200) {
                return true;
            }
            return false;
        });
    };
    AuthService.prototype.verifyLogin = function () {
        var token = localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({
            headers: headers
        });
        return this.http.get('api/auth/check-login', options)
            .map(function (res) {
            if (res.status === 200) {
                return true;
            }
            return false;
        });
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _b) || Object])
    ], AuthService);
    return AuthService;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Dimitar Pechev/Desktop/TeamDirective20/src/auth.service.js.map

/***/ }

},[1098]);
//# sourceMappingURL=main.bundle.map