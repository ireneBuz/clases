<script setup>
import axios from 'axios';

const props = defineProps({
    isDarkMode: Boolean,
    closeModal: Function
});

let submittedForm = ref(false);

const formData = {
    name: '',
    email: '',
    phone: '',
    message: '',
};

const submitForm = async () => {
    try {
        await axios.post('https://formspree.io/f/xnqkryva', {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
        });

        submittedForm.value = true

    } catch (error) {
        console.error('Error submitting the form:', error);
    }
};


</script>

<template>
    <div class='modal'>
        <div class='modal-content'>
            <span class='close' @click="closeModal" role="button" aria-label="Close Modal">
                <img src="/images/closeModal.svg" alt="" />
            </span>
            <div :class="{ 'dark-mode': isDarkMode }">
                <div class="contact-title">
                    <h3 data-text="Contacto">Contacto</h3>

                    <p v-if="!submittedForm"><a class="tlf" href="tel:654140710">+34 654 14 07 10</a> / <a class="whatsapp"
                            href="https://api.whatsapp.com/send?phone=+34654140710">WhatsApp</a></p>
                    <p v-if="!submittedForm">Si prefieres puedes contactar mediante este formulario</p>
                </div>
                <form v-if="!submittedForm" @submit.prevent="submitForm" class="form-group">
                    <div class="contact-name">
                        <h4>Nombre*</h4>
                        <label>
                            <input v-model="formData.name" type="text" name="name" class="form-style"
                                placeholder="Introduce tu nombre">
                        </label>
                    </div>

                    <div class="contact-email-or-phone">
                        <div class="contact-email">
                            <h4>Email*</h4>
                            <label>
                                <input v-model="formData.email" type="email" name="email" class="form-style"
                                    placeholder="Introduce tu email">
                            </label>
                        </div>
                        <div class="contact-phone">
                            <h4>Teléfono*</h4>
                            <label>
                                <input v-model="formData.phone" type="phone number" name="phone" class="form-style"
                                    placeholder="+34">
                            </label>
                        </div>
                    </div>
                    <div class="contact-message">
                        <h4>Mensaje*</h4>
                        <label>
                            <textarea v-model="formData.message" name="message" class="form-style"
                                placeholder="Estoy interesad@ en..."></textarea>
                        </label>
                    </div>

                    <button type="submit" class="contact-btn">Contacto</button>
                </form>

                <div v-if="submittedForm" class="contact-submitted-message">
                    <h4>Gracias por tu interés {{ formData.name }} </h4>
                    <p>¡Me pondré en contacto contigo en la mayor brevedad posible!</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.modal {
    display: block;
    position: fixed;
    z-index: 20;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(5px);

}

.modal-content {
    background-color: #eeeeee;
    margin: 3% auto;
    padding: 20px;
    width: 47.25rem;
    height: 43.0625rem;
    border-radius: 20px;
}

.dark-mode .modal-content {
    background-color: #434343;
    color: #e6e6e6;
}

.close {
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
    transform: translateY(15px) translateX(-15px);
}

.contact-title {
    text-align: center;

}

.contact-title h3 {
    font-family: 'Founders-Grotesk-regular';
    font-size: 70px;
    background: linear-gradient(60deg, #3D73EB 13.4%, #DE8FFF 86.6%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 120%;
    background-size: 700px;
    margin-top: 20px;
    margin-bottom: 10px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.4));
}

.contact-title a {
    font-family: 'Founders-Grotesk-medium';
    color: #2d2d2d;
    font-size: 20px;
    cursor: pointer;
    text-decoration: none;
    padding: 11px 9.344px 7px 9px;
}

.dark-mode .contact-title a {
    color: #d0d0d0;
}


.contact-title .whatsapp {
    color: #0aab07;
}

.dark-mode .contact-title .whatsapp {
    color: #21fa1eb1;
}

.contact-title .tlf:hover {
    color: #606060;
}

.dark-mode .contact-title .tlf:hover {
    color: #f7f7f7;
}

.contact-title .whatsapp:hover {
    color: #62ff5f;
}

.contact-title p {
    font-family: 'Founders-Grotesk-medium';
    color: #9f00e2;
    text-align: center;
    font-size: 18px;
    line-height: 100%;
    margin-bottom: 0;
}

.dark-mode .contact-title p {
    color: #f0cdff;
}

.contact-submitted-message {
    margin-top: 80px;

}

.contact-submitted-message h4 {
    font-family: 'Founders-Grotesk-medium';
    color: #9f00e2;
    text-align: center;
    font-size: 24px;
    line-height: 100%;
}

.dark-mode .contact-submitted-message h4 {
    color: #f0cdff;
}

.contact-submitted-message p {
    font-family: 'Founders-Grotesk-regular';
    color: #9f00e2;
    text-align: center;
    font-size: 20px;
    line-height: 100%;
}

.dark-mode .contact-submitted-message p {
    color: #f0cdff;
}

.form-group {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 0 !important;

}

.form-group .contact-email-or-phone {
    display: flex;
    justify-content: space-between;
}

.form-style {
    height: 37.031px;
    padding: 9.258px 12.344px;
    gap: 6.172px;
    border-radius: 7.715px;
    border: 1px solid #697077;
    background: #f3f3f3;
    font-family: 'Founders-Grotesk-light';
    font-size: 16px;
    width: 100%;
}

.dark-mode .form-style {
    background-color: #707070;
    color: white
}

.dark-mode .form-style::placeholder {
    color: rgb(232, 187, 255);
    /* Set the placeholder color for dark mode */
}

.form-group h4 {
    font-family: 'Founders-Grotesk-medium';
    color: #9f00e2;
    font-size: 21px;
    line-height: 140%;
    margin-bottom: 5px;
}

.dark-mode .form-group h4 {
    color: #f0cdff;
}

.contact-name,
.contact-email-or-phone,
.contact-message {
    text-align: start;
    width: 80%;
}

input,
textarea {
    padding-right: 0 !important;
    padding-left: 0 !important;
    text-indent: 10px
}



.contact-email {
    text-align: start;
    width: 57%;
}

.contact-phone {
    text-align: start;
    width: 37%;
}

.contact-message .form-style {
    height: 75px;
    margin-bottom: 30px;
}



.contact-btn {
    font-size: 20px;
    color: #FFFFFF;
    padding: 13px 19px 8px 19px;
    font-family: 'Founders-Grotesk-medium';
    border-radius: 30px;
    border: none;
    cursor: pointer;
    background: var(--main-colors-gradient, linear-gradient(30deg, #3D73EB 13.4%, #DE8FFF 86.6%));
}

.contact-btn:hover {
    background: var(--main-colors-gradient, linear-gradient(30deg, #1f53c3 13.4%, #cd59ff 75.6%));
}



@media (max-width: 900px) {
    .contact-title h3 {
        background-size: 80%;
    }

    .modal-content {
        width: 37.25rem;
    }
}

@media (max-width:645px) {

    .modal-content {
        width: 25.25rem;
    }

    .contact-title h3 {
        background-size: 87%;
    }

    .contact-name,
    .contact-email-or-phone,
    .contact-message {
        width: 90%;
    }
}

@media (max-width: 440px) {
    .modal-content {
        width: 21.5rem;
    }

    .contact-title h3 {
        font-size: 50px;

        margin-top: 20px;
        margin-bottom: 35px;
    }

    .contact-name,
    .contact-email-or-phone,
    .contact-message {
        width: 100%;
    }



}
</style>