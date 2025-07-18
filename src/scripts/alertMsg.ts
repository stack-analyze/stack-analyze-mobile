import { type Alert } from "@/interfaces/AlertInterface";
import { alertController } from "@ionic/vue";

export async function presentAlert({ msg, header, subHeader }: Alert) {
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