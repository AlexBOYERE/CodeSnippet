import { ref } from "vue";

export function useModal() {
  const isModalOpen = ref(false);

  // Modèle de données pour le formulaire
  const formData = ref({
    title: "",
    description: "",
    tags: [],
    code: "",
    isPrivate: false,
  });

  const resetForm = () => {
    formData.value = {
      title: "",
      description: "",
      tags: [],
      code: "",
      isPrivate: false,
    };
  };

  const openModal = () => {
    isModalOpen.value = true;
  };

  const closeModal = () => {
    isModalOpen.value = false;
    resetForm();
  };


  return { isModalOpen, openModal, closeModal, formData };
}
