import { Component } from '@angular/core';
@Component({
    templateUrl: 'app/home/home.component.html'
})
export class HomeComponent {


    books: any = [
        {"title":"Det tenkende mennesket", "state":"New","price":150,"user":"John 1","userRating":3,"added":"15 Sep, 5:56 AM"},
        {"title":"Kommunikasjon i relasjoner", "state":"New","price":180,"user":"John 2","userRating":5,"added":"15 Sep, 5:56 AM"},
        {"title":"Menneskekroppen", "state":"Normal use","price":350,"user":"John 3","userRating":0,"added":"15 Sep, 5:56 AM"},
        {"title":"Intro til samfunnsvitenskap", "state":"Normal use","price":400,"user":"John 233","userRating":0,"added":"15 Sep, 5:56 AM"},
        {"title":"Matematikk for økonomer", "state":"New","price":199,"user":"John x2","userRating":1,"added":"15 Sep, 5:56 AM"},
        {"title":"Matematikk for informatikkere", "state":"As new","price":149,"user":"John 123","userRating":4,"added":"15 Sep, 5:56 AM"},
        {"title":"Metode- og oppgaveskriving", "state":"New","New":850,"user":"John 1965","userRating":0,"added":"15 Sep, 5:56 AM"},
        {"title":"Metode- og oppgaveskriving", "state":"Readable","price":849,"user":"John 06","userRating":2,"added":"15 Sep, 5:56 AM"},
    ];

    /*
    gameJson: any =
        "name":"",
        "lvl":"",
        "gold":0,
        "job":"advemturer",
        "hp": 5,
        "maxHp": 30,
        "mp": 5,
        "maxMp": 20,
        "exp": 5000,
        "unspentAp": 5,
        "primaryStats": {
            "str": 5,
            "dex": 5,
            "con": 5,
            "int": 5,
            "spi": 5
        },
        "secondaryStats": {
            "physical": 10,
            "ranged": 10,
            "magic": 10,
            "armor": 10,
            "crit": 5,
            "resist": 5,
            "hpRegen": 1,
            "mpRegen": 1,
            "hitChance": 5.0,
            "speed": 10
        }
*/


}
