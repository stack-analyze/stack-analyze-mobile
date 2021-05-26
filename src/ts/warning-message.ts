import { toastController } from '@ionic/vue';

const openToast = async ():Promise<any> => {
    const toast = await toastController
        .create({
            message: 'the field is required',
            duration: 2000
        });

    return toast.present();
}

export default openToast;
