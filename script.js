// Al cargar el documento, aplicamos el estado guardado en localStorage y bloqueamos/desbloqueamos semestres según corresponda
window.addEventListener('DOMContentLoaded', () => {
  const materiasGuardadas = JSON.parse(localStorage.getItem('materiasAprobadas')) || [];

  materiasGuardadas.forEach(id => {
    const materia = document.getElementById(id);
    if (materia) {
      materia.classList.add('aprobada');
    }
  });

  actualizarEstados();
});

// Botón para resetear todo el progreso
const resetBtn = document.getElementById('resetear');
resetBtn.addEventListener('click', () => {
  // Quitar todas las clases aprobadas y desbloqueos
  document.querySelectorAll('.materia').forEach(materia => {
    materia.classList.remove('aprobada');
  });
  // Bloquear todos excepto el primero de nuevo
  actualizarEstados();
  // Guardar estado vacío
  localStorage.removeItem('materiasAprobadas');
});

// Agregamos el evento click a todas las materias para poder tacharlas o destacharlas
document.querySelectorAll('.materia').forEach(materia => {
  materia.addEventListener('click', () => {
    // Si la materia está bloqueada, no permitimos que se tache o destache
    if (materia.classList.contains('bloqueada')) return;

    // Alternamos la clase 'aprobada' para marcar o desmarcar la materia (tacharla o quitar tachado)
    materia.classList.toggle('aprobada');

    // Guardamos en localStorage las materias que actualmente están tachadas, para persistir el estado
    guardarMateriasAprobadas();

    // Actualizamos estados de bloqueos/desbloqueos
    actualizarEstados();
  });
});

// Guarda el estado de las materias tachadas en localStorage para mantenerlo entre recargas
function guardarMateriasAprobadas() {
  const aprobadas = Array.from(document.querySelectorAll('.materia.aprobada'))
    .map(m => m.id);
  localStorage.setItem('materiasAprobadas', JSON.stringify(aprobadas));
}

// Función unificada para bloquear y desbloquear semestres y materias
function actualizarEstados() {
  const semestres = document.querySelectorAll('.semestre');

  semestres.forEach((semestre, i) => {
    const materias = semestre.querySelectorAll('.materia');
    const aprobadas = semestre.querySelectorAll('.materia.aprobada');

    // Desbloquear semestre si es el primero o si todas sus materias están aprobadas
    if (i === 0 || aprobadas.length === materias.length) {
      semestre.classList.remove('bloqueado');
      semestre.classList.remove('semi-transparente');
      desbloquearMaterias(semestre);

      // Si semestre completo, desbloquear siguiente semestre
      if (aprobadas.length === materias.length) {
        const siguiente = semestres[i + 1];
        if (siguiente) {
          siguiente.classList.remove('bloqueado');
          siguiente.classList.remove('semi-transparente');
          desbloquearMaterias(siguiente);
        }
      }
    } else {
      // Bloquear semestre y materias si no está aprobado todo
      semestre.classList.add('bloqueado');
      semestre.classList.add('semi-transparente');
      bloquearMaterias(semestre);
    }
  });
}

// Añade la clase 'bloqueada' a todas las materias dentro de un semestre para que no respondan a clic
function bloquearMaterias(semestre) {
  semestre.querySelectorAll('.materia').forEach(m => {
    m.classList.add('bloqueada');
  });
}

// Quita la clase 'bloqueada' para permitir que las materias puedan ser clicadas
function desbloquearMaterias(semestre) {
  semestre.querySelectorAll('.materia').forEach(m => {
    m.classList.remove('bloqueada');
  });
}
