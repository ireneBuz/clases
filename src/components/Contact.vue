<script setup>

import { ref } from 'vue';


const formData = ref({
    email: '',
    message: '',
    // Add more form fields here
});

const submitForm = () => {
    // Handle form submission here
    // You can use formData.value to access the form data
    // For example, you can send it to a server or perform validation
    console.log('Form submitted with data:', formData.value);
};

return {
    formData,
    submitForm,
};

</script>


<template>
    <header>
        <div class="contact">
            <div class="title">
                <h3>Contacto</h3>
                <p>Por favor, completa la información requerida para ponerte en contacto</p>
            </div>

            <div>
                <form @submit.prevent="submitForm">
                    <label>
                        Your email:
                        <input type="email" v-model="formData.email">
                    </label>
                    <label>
                        Your message:
                        <textarea v-model="formData.message"></textarea>
                    </label>
                    <!-- your other form fields go here -->
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    </header>
</template>






<style scoped></style>
