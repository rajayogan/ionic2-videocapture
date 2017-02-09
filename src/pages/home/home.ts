import { Component, ViewChild } from '@angular/core';

import { NavController } from 'ionic-angular';

import { MediaCapture, Camera } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  @ViewChild('myvideo') myVideo: any;
  
  constructor(public navCtrl: NavController) {
    
  }

  startrecording() {
    MediaCapture.captureVideo((videodata) => {
      alert(JSON.stringify(videodata)); 
     })
  }

  selectvideo() {
    let video = this.myVideo.nativeElement;
    var options = {
      sourceType: 2,
      mediaType: 1
    };

    Camera.getPicture(options).then((data) => {
      video.src = data;
      video.play();
    })
  }

}
