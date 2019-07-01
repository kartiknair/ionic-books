import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";

import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.page.html",
  styleUrls: ["./modal.page.scss"]
})
export class ModalPage implements OnInit {
  @Input() book: object;

  constructor(
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {}

  async dismissModal() {
    await this.modalCtrl.dismiss();
  }
}
