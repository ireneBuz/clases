<script setup>


</script>
<template>
    <div class="contact-title">
        <h3>Contacto</h3>
        <p>Por favor, completa la información requerida para ponerte en contacto</p>
    </div>
    <form action="https://formspree.io/f/xzblydjk" method="POST" class="form-group">
        <div class="contact-name">
            <h4>Nombre*</h4>
            <label>
                <input type="text" name="name" class="form-style" placeholder="Introduce tu nombre">
            </label>
        </div>

        <div class="contact-email-or-phone">
            <div class="contact-email">
                <h4>Email*</h4>
                <label>
                    <input type="email" name="email" class="form-style" placeholder="Introduce tu email">
                </label>
            </div>
            <div class="contact-phone">
                <h4>Teléfono*</h4>
                <label>
                    <input type="phone number" name="phone" class="form-style" placeholder="+34">
                </label>
            </div>
        </div>
        <div class="contact-message">
            <h4>Mensaje*</h4>
            <label>
                <textarea name="message" class="form-style" placeholder="Estoy interesad@ en..."></textarea>
            </label>
        </div>



        <button type="submit" class="contact-btn">Contacto</button>
    </form>
</template>

<style scoped>
.contact-title,
.form-group h4 {
    font-family: 'Founders-Grotesk';
    font-weight: 500;
    font-style: normal;
}

.contact-title {
    text-align: center;

}

.contact-title h3 {
    font-size: 70px;
    background: var(--main-colors-gradient, linear-gradient(60deg, #3D73EB 13.4%, #DE8FFF 86.6%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 100%;
    background-size: 70%;
    margin-top: 20px;
    margin-bottom: 35px;
}

.contact-title p {
    color: #DE8FFF;
    text-align: center;
    font-size: 14px;
    line-height: 100%;

}

.form-group {
    display: flex;
    align-items: center;
    flex-direction: column;

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
    background: #FFF;
    font-family: 'Founders-Grotesk';
    width: 100%;

}

.form-group h4 {
    color: #DE8FFF;
    font-size: 19px;
    line-height: 140%;
    margin-bottom: 15px;
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
}

input::placeholder,
textarea::placeholder {
    padding-left: 10px !important;
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
    padding: 8px 15px;
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
}

@media (max-width:645px) {
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