
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

// Log para verificar que el script se está ejecutando
console.log("Pluravita: Iniciando aplicación...");

const mountApp = () => {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error("Pluravita: No se encontró el elemento root");
    return;
  }

  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("Pluravita: Montaje completado con éxito.");
  } catch (err) {
    console.error("Pluravita: Error crítico al renderizar:", err);
    rootElement.innerHTML = `
      <div style="height: 100vh; display: flex; align-items: center; justify-content: center; text-align: center; font-family: sans-serif; background: #f9f6f2;">
        <div>
          <h2 style="color: #4a3728;">Lo sentimos, hubo un error al cargar la página</h2>
          <p style="color: #9a7b5c;">Por favor, refresca el navegador o revisa la consola para más detalles.</p>
        </div>
      </div>
    `;
  }
};

// Asegurar que el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountApp);
} else {
  mountApp();
}
