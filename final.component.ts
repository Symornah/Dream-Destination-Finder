  import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute } from '@angular/router';

  @Component({
    selector: 'app-final',
    templateUrl: './final.component.html',
    styleUrls: ['./final.component.scss']
  })
  export class FinalComponent implements OnInit {
    locations=[
      {name:"khuri",label:"Khuri Hills, Jaisalmer",desc:"Famous for its sand dunes, Khuri is a small village about 50 km south-west of Jaisalmer in Rajasthan. It is the perfect place to enjoy the sunrise, sunset as well as the delicious Rajasthani Cuisine! The camel rides in Kuri are a great attraction as well."},
      {name:"lehLadakh",label:"Leh-Ladakh" ,desc:"A surreal landscape surrounded by the sky-piercing peaks of the snow-capped Himalayan, Zanskar and Karakoram ranges, and adorned with crystal waters of the Shyok, Zanskar and Indus rivers, Leh, in Jammu and Kashmir, is the main city in the Ladakh region, one of the coldest deserts in the world. Perched at a height of over 11,000 ft above sea level, the city of Leh is a haven of adventure sports. Its rugged terrain and gushing rivers provide ripe opportunities for activities like trekking, river rafting, camping, mountain climbing and biking. As the winter months approach, the city is enveloped in a blanket of snow, making it a paradisiacal setting for winter sports. The renowned Chadar Trek starts from the village of Chilling, 66 km away, and mostly covers the frozen area of River Zanskar. Throughout the adventure, trekkers are walking on precarious icy formations, staying in caves filled with stalactites and stalagmites and encountering other snowy landscape."},
      {name:"andamanAndNicobar",label:"Andaman and Nicobar Islands",desc:"With turquoise waters and shimmering white beaches surrounded by a mangrove forest and primitive jungles, the Andaman and Nicobar Islands are a tropical paradise that draw visitors from far-flung places."},
      {name:"lakshadweep",label:"Lakshdweep Islands",desc:"Lakshadweep is one of the worlds most spectacular tropical island systems. Thirty- two sq. km of land spread over 36 islands surrounded by 4200 sq. km of lagoon rich in marine wealth. The precious heritage of ecology and culture is supported by an extremely fragile ecosystem. Committed to the cause of Eco tourism Union Territory of Lakshadweep has consciously followed a middle path between tourism promotion and environmental conservation."},
      {name:"wayanad",label:"Wayanad, Kerala",desc:"This popular town is famous for wildlife and its spice plantations. Wayanad is part of a forest reserve, located on the border of Tamil Nadu and Kerala. Because of it wild green coverage it offers great scenic beauty along with the experience of seeing wildlife. The weather here is mostly constant but October till May are the best months to visit. It is located at a distance of 76 km from the sea shores of Kozhikode. Wayanad hills are contiguous to Mudumalai in Tamil Nadu and Bandipur in Karnataka, thus forming a vast land mass for the wild life to move about in their most natural abode."},
      {name:"sikkim",label:"Sikkim",desc:"Sikkim situated in the Eastern Himalayan region with an area of 7,096 sq km and altitude ranging from 300m to 8,586m above sea level is a wonderland blessed with natural abundance from icy cold deserts, flowering alpine meadows, to lush green forests and emerald mountain lakes. The crowning glory of this wonderland is undoubtedly the magnificent Mt. Khangchendzonga (8,586m), the third highest mountain of the world. The mountain is not merely a physical entity but the abode of guardian deity whose benign watchfulness ensures peace and prosperity of the land."},
      {name:"goa",label:"Goa",desc:"Goa, situated on the west coast of India, is one of the most delightful states of India. Formerly a Portuguese colony, it is endowed with a variety of attractions including palm fringed beaches, miles of golden sands, lush green country-side, an incredible mosaic of cultural heritage, magnificent churches, temples, forts and monuments and a unique cultural synthesis of the east and west. With its tropical climate, Goa is a tourist destination for all seasons. Goa is a treasure trove of culture, music, dances and art forms that can be enjoyed during local festivals and celebrations. Animal lovers can visit the State’s wildlife sanctuaries It is often said that ‘Goa never stops partying’. The city is known for its vibrancy that attains its pinnacle in the annual Goa Carnival festival."},
      {name:"pondicherry",label:"Pondicherry",desc:"A French colony till 1954, Puducherry (earlier Pondicherry) is a small Union territory in India that retains a distinctly French ambience and culture. It has a spiritual ambience, unspoilt stretch of beaches, and backwaters along with a surprising mix of cuisines. Every year, it attracts thousands of tourists who come here to visit the Aurobindo Ashram, meditate and learn yoga. Food, ocean view, coconut trees, clean air, and peaceful shores, this place has a color for everyone and is definitely a great weekend getaway from Chennai or Bangalore."}
    ];
    currentLocation:any;

    constructor(private route:ActivatedRoute) { }

    ngOnInit(): void {
      this.route.params.subscribe(param => {
        if(param['location'])
        this.getCurrentLocation(param['location']);
      })
    }
    getCurrentLocation(param:string){
      const loc= this.locations.filter(loc => loc.name==param) 
      if(loc.length>0)
      this.currentLocation=loc[0];
    }
  }
