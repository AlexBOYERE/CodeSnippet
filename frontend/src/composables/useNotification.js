import Noty from 'noty';

export function useNotification() {
  const showNotification = (text = 'Ceci est une notification ! 🚀', type = 'info', timeout = 5000) => {
    new Noty({
      text: text,
      type: type, // Type: success, error, warning, info, alert
      layout: 'bottomLeft', // Position: topLeft, topCenter, topRight, bottomLeft, bottomCenter, bottomRight
      timeout: timeout, // Disparaît après 5 secondes
      progressBar: true, // Affiche une barre de progression
    }).show()
  }

  return { showNotification };
}
