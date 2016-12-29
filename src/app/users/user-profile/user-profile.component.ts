import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
    user: Object;
    adoptedPets: Object;
    addedAnimals: Object;
    addedCampaigns: Object;
    addedFacts: Object;
    addedGalleryImages: Object;
    constructor() { }

    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('currentUser'));

        this.adoptedPets = {
            id: 'adopted-pets',
            title: 'Осиновени животни',
            nothingAddedMessage: 'Този потребител все още не е осиновил никое животно.',
            trHeadTitle: 'Име:',
            trHeadDate: 'Осиновен на:',
            list: [{
                name: 'Силвестър',
                imgUrl: 'http://d39kbiy71leyho.cloudfront.net/wp-content/uploads/2016/05/09170020/cats-politics-TN.jpg',
                addedOn: '22/12/2016'
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
}
