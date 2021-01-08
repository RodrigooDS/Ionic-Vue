<template>
    <ion-page>
        <ion-header class="ion-no-border" mode="ios" translucent>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button defaultHref="/" text="Atrás"></ion-back-button>
                </ion-buttons>
                <ion-title class="ion-text-capitalize">Registro</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content padding fullscreen>

        <ion-grid >

            <ion-row>

            <ion-col></ion-col>

            <ion-col size="12" size-lg="6" size-md="8" size-sm="10" size-xs="12">
                
                <ion-card mode="ios" class="ion-padding-top ion-padding-bottom">

                    <ion-list>

                    <ion-item>
                        <ion-label position="floating">Correo Electrónico
                        <p>(Por ejemplo: pinguapp@mail.com)</p>
                        </ion-label>
                        <ion-input type="mail"></ion-input>
                    </ion-item>
                
                    <ion-item>
                        <ion-label position="floating">Contraseña
                        <p>(Debe contener letras, números y una letra en mayúscula)</p>
                        </ion-label>
                        <ion-input type="password"></ion-input>
                    </ion-item>

                    <!-- Rut del estudiante -->
                    <ion-item  mode="ios">
                        <ion-label position="floating" mode="ios">RUT
                        <p>(Ingrese RUT sin puntos y con guión)</p>
                        </ion-label>
                        <ion-input type="text" mode="ios"></ion-input>
                    </ion-item>
                
                    </ion-list>

                    <div padding class="ion-padding-start ion-padding-end ion-padding-top ion-padding-bottom">
                    <ion-button class="button-border" 
                                expand="block"
                                mode="ios"
                                block 
                                >
                        Guardar
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
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonCard,IonBackButton, IonItem, IonList
} from '@ionic/vue';
// import ExploreContainer from '@/components/ExploreContainer.vue';

export default  {
  name: 'Register',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonGrid, IonCard,IonBackButton, IonItem, IonList
}
}
</script>