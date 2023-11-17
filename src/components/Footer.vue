<script setup>
import linkedInIcon from '/linkedInIcon.svg'


</script>

<template>
    <header>
        <div class="footer" :class="{ 'dark-mode': isDarkMode }">
            <div class="footer-div">
                <div>
                    <p>
                        <span>© 2023 Irene Buceta</span> All Rights Reserved
                    </p>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/irene-buceta-aloc%C3%A9n/" target="_blank"
                        rel="noopener noreferrer" role="menuitem" aria-label="LinkedIn Profile">
                        <img :src="linkedInIcon" alt="LinkedIn Icon">
                    </a>
                </div>
            </div>
        </div>
    </header>
</template>




<style scoped>
.footer {
    height: 70px;
    font-family: 'Founders-Grotesk-regular';
    width: 100%;
    color: #000;
    font-size: 20px;
    display: flex;
    justify-content: center;
    background: #FFF;
    box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.25);
}

.footer .footer-div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 1240px;

}

.dark-mode .footer .footer-div img {
    filter: invert(100%);
}

.dark-mode .footer {
    background-color: #262626;
    color: #e6e6e6;
}

@media (max-width: 870px) {
    .footer {
        font-size: 14px;
    }

    .footer .footer-div img {
        width: 70%;
    }
}

@media (max-width: 420px) {
    .footer {
        font-size: 12px;
    }


}
</style>
