import { ref } from "vue";

export function useModalCSnippet() {
  const isModalOpen = ref(false);

  // Modèle de données pour le formulaire
  const formData = ref({
    title: "",
    description: "",
    tags: [],
    languages: [],
    code: "",
    isPrivate: false,
  });

  const resetForm = () => {
    formData.value = {
      title: "",
      description: "",
      tags: [],
      languages: [],
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
