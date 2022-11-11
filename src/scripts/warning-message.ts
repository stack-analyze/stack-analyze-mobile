import { toastController } from '@ionic/vue';

export default async function openToast(message: string, color: string): Promise<void> {
    const toast = await toastController
        .create({
            message,
            color,
            duration: 2000
        });

    toast.present();
}
