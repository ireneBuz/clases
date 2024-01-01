export const showModal = ref(false);

export const openModal = () => {
    showModal.value = true;
};

export const closeModal = () => {
    showModal.value = false;
};