document.querySelectorAll('.materia').forEach(materia => {
  materia.addEventListener('click', () => {
    if (materia.classList.contains('bloqueada')) return;

    materia.classList.toggle('aprobada');
    actualizarDisponibilidad();
  });
});

function actualizarDisponibilidad() {
  document.querySelectorAll('.materia').forEach(materia => {
    const requisitos = materia.getAttribute('data-prerequisitos');
    if (!requisitos) return;

    const ids = requisitos.split(',');
    const cumplidos = ids.every(id => {
      const prereq = document.getElementById(id.trim());
      return prereq && prereq.classList.contains('aprobada');
    });

    if (cumplidos) {
      materia.classList.remove('bloqueada');
    } else {
      if (!materia.classList.contains('aprobada')) {
        materia.classList.add('bloqueada');
      }
    }
  });
}

// Inicializar estado bloqueado
actualizarDisponibilidad();
