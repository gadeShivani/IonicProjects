import { Component, NgZone, ElementRef, ViewChild } from '@angular/core';
import {NavController} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {AboutPage} from '../about/about';
import {PassPage} from '../pass/pass';
import { ActionSheetController } from 'ionic-angular';
import {CanvasPage} from '../canvas/canvas';
import { Platform } from 'ionic-angular';
import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation';
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapOptions,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';
import { MyProvider } from '../../providers/my/my';

declare var google: any;

@Component({
    templateUrl: 'home.html',
    providers: [MyProvider]

})
export class HomePage {

    public showingWelcome: boolean;
//public data1 :Array<Object>;
    public data: Array<Object>;
    aboutPage:any;
    PassPage:any;
    CanvasPage:any;
    @ViewChild('map')
  mapElement: ElementRef;
  map:GoogleMap;
  latLng:any;
  markers:Array<Marker>;
  mapOptions:GoogleMapOptions;

  isKM:any=804.672;
  isType:any="";
    public constructor(public navCtrl: NavController,private alertCtrl: AlertController,public actionSheetCtrl: ActionSheetController,private ngZone: NgZone, private geolocation : Geolocation,public myProvider:MyProvider) {
        this.showingWelcome = true;
        this.aboutPage = AboutPage;
        this.PassPage = PassPage;
this.CanvasPage=CanvasPage;
      //  this.productList = [];
        // this.data = [];
    }
    public showDetails(name){


    }
    ionViewDidLoad() {
    this.loadMap();
  }

  loadMap(){

    this.geolocation.getCurrentPosition().then((position) => {

      this.latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      this.mapOptions = {
        center: this.latLng,
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);

    }, (err) => {
      alert('err '+err);
    });

  }

 /*-----------------Find Nearby Place------------------------*/

  nearbyPlace(){
    this.loadMap();
    this.markers = [];
    let service = new google.maps.places.PlacesService(this.map);
    service.nearbySearch({
              location: this.latLng,
              radius: this.isKM,
              types: [this.isType]
            }, (results, status) => {
                this.callback(results, status);
            });
  }

  callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        this.createMarker(results[i]);
      }
    }
  }

  createMarker(place){
    var placeLoc = place;
    console.log('placeLoc',placeLoc)
    this.markers = new google.maps.Marker({
        map: this.map,
        position: place.geometry.location
    });

    let infowindow = new google.maps.InfoWindow();

    google.maps.event.addListener(this.markers, 'click', () => {
      this.ngZone.run(() => {
        infowindow.setContent(place.name);
        infowindow.open(this.map, this.markers);
      });
    });
  }




    public goTo(color,name,age,degree) {
        color = color || 'No Color Entered';
        name = name || 'No name Entered';
        age = age || 'No age Entered';
        degree = degree || 'No degree Entered';
        // this.data.push({
        //   color: color,
        //   name: name,
        //   age:age,
        //   degree:degree
        // });
        this.navCtrl.push(PassPage,{color,name,age,degree});
      }

    public dismissWelcome() {
        this.showingWelcome = false;
    }

    public add() {
        let alert = this.alertCtrl.create({
            title: "Add Product",
            message: "Enter a product and the quantity of that product",
            inputs: [
                {
                    name: "product",
                    placeholder: "Product Name"
                },
                {
                    name: "price",
                    placeholder: "Product Price"
                },
                {
                    name: "quantity",
                    placeholder: "Product Quantity"
                }
            ],
            buttons: [
                {
                    text: "Cancel",
                    role: 'cancel'
                },
                {
                    text: "Save",
                    handler: data => this.myProvider.addProduct(data)
                }
            ]
        });
        alert.present();
        // this.navCtrl.present(alert);
    }
    presentActionSheet(name,price) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'DELETE ??',
      buttons: [
        {
          text: 'YES',
          role: 'destructive',
          handler: () => this.myProvider.deleteProduct(name)
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {

            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
  presentAlert(name,price,quantity) {
    let alert = this.alertCtrl.create({
      title: name,
      subTitle: 'Product Price : '+price+'<br>  Product Price : '+quantity,
      buttons: ['Dismiss']
    });
    alert.present();
  }

}
