import { alertController } from "@ionic/vue";

import { Alert } from "../interfaces/AlertInterface";

export default async function presentAlert({ msg, header, subHeader }: Alert): Promise<void> {
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