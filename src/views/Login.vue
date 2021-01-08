<template>
    <ion-page>
        <ion-header class="ion-no-border" mode="ios" translucent>
            <ion-toolbar>
                <ion-title class="ion-text-capitalize">Iniciar sesión</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content padding fullscreen>

        <ion-grid >

            <ion-row>

            <ion-col></ion-col>

            <ion-col size="12" size-lg="6" size-md="8" size-sm="10" size-xs="12">
                
                <!-- <div class="ion-padding-top">
                    <ion-img src="public/asset/icon/icon.png"></ion-img>
                </div> -->

                <ion-card mode="ios" class="ion-padding-top ion-padding-bottom">

                    <ion-list>
                    <ion-item class="ion-padding-start ion-padding-end">
                        <ion-label position="floating">Correo electrónico</ion-label>
                        <ion-input type="mail"></ion-input>
                    </ion-item>
                
                    <ion-item class="ion-padding-start ion-padding-end ion-padding-bottom">
                        <ion-label position="floating">Contraseña</ion-label>
                        <ion-input type="password"></ion-input>
                    </ion-item>
                    </ion-list>

                    <div class="ion-padding-start ion-padding-end">
                    <ion-button class="button-border"
                                mode="ios"
                                expand="block"
                                >
                        Entrar
                    </ion-button>


                    <ion-item class="ion-text-center" lines="none"  detail="false">
                        <ion-label color="primary">¿Has olvidado la contraseña?</ion-label>
                    </ion-item>

                    <ion-button routerLink="/register"
                                class="button-border" 
                                mode="ios"
                                expand="block">
                    Crear Cuenta
                    </ion-button>
                    </div>
                </ion-card>
        
            </ion-col>

            <ion-col></ion-col>

            </ion-row>

        </ion-grid>

        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonCard, IonButton} from '@ionic/vue';
// import ExploreContainer from '@/components/ExploreContainer.vue';

export default  {
  name: 'Login',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonGrid, IonCard, IonButton}
}
</script>