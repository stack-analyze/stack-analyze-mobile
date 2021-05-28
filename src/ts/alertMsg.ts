import { alertController } from "@ionic/vue";

export default async function presentAlert(msg: string, header: string, subHeader: string): Promise<void> {
    const alert = await alertController.create({
      header,
      subHeader,
      backdropDismiss: false,
      message: msg,
      mode: "ios",
      buttons: ["OK"],
    });
    alert.present();
}