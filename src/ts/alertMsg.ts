import { alertController } from "@ionic/vue";

export default async function presentAlert(msg: any, header: string, subHeader: string) {
    const alert = await alertController.create({
      header,
      subHeader,
      backdropDismiss: false,
      message: msg,
      mode: "ios",
      buttons: ["OK"],
    });
    return alert.present();
}