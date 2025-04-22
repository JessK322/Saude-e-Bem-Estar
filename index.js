      // Função para atualizar a data e hora atual
      function updateDateTime() {
        const options = {
            timeZone: "America/Sao_Paulo",
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        };
        
        const now = new Date().toLocaleString('pt-BR', options);
        document.getElementById("current-date-time").textContent = now;
    }

    // Atualizar a data e hora a cada segundo
    setInterval(updateDateTime, 1000);

    // Chama a função uma vez para mostrar imediatamente
    updateDateTime();