<script setup>
import linkedInIcon from '/linkedInIcon.svg'


</script>


<template>
    <header>
        <div class="footer">
            <div class="footer-div">
                <div>
                    <p><span>Irene Buceta</span> ⓒ 2023. All Rights Reserved</p>
                </div>
                <div>
                    <a href='https://www.linkedin.com/in/irene-buceta-aloc%C3%A9n/' target='_blank' role="menuitem">
                        <img :src="linkedInIcon" alt="">
                    </a>

                </div>
            </div>
        </div>
    </header>
</template>






<style scoped>
.footer {

    font-family: 'Founders-Grotesk';
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
}

.footer .footer-div p span {
    font-family: 'Newake';
}




@media (max-width: 745px) {
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
