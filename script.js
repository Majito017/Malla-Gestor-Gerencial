// Al cargar el documento, aplicamos el estado guardado en localStorage y bloqueamos/desbloqueamos semestres según corresponda
window.addEventListener('DOMContentLoaded', () => {
  // Recuperamos las materias previamente aprobadas (tachadas) guardadas en localStorage, si no hay, un array vacío
  const materiasGuardadas = JSON.parse(localStorage.getItem('materiasAprobadas')) || [];

  // Por cada id guardado, buscamos la materia y le aplicamos la clase 'aprobada' para marcarla como tachada
  materiasGuardadas.forEach(id => {
    const materia = document.getElementById(id);
    if (materia) {
      materia.classList.add('aprobada');
    }
  });

  // Primero bloqueamos los semestres que no deben estar accesibles (todos menos el primero)
  bloquearSemestres();

  // Luego revisamos si algún semestre está completamente aprobado para desbloquear el siguiente
  revisarSemestres();
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

    // Recalculamos si algún semestre se completó para desbloquear el siguiente
    revisarSemestres();

    // Aplicamos el bloqueo o desbloqueo de semestres según la situación actual
    bloquearSemestres();
  });
});

// Guarda el estado de las materias tachadas en localStorage para mantenerlo entre recargas
function guardarMateriasAprobadas() {
  // Seleccionamos todas las materias que están tachadas y sacamos su id
  const aprobadas = Array.from(document.querySelectorAll('.materia.aprobada'))
    .map(m => m.id);

  // Guardamos el array de ids en localStorage en formato JSON
  localStorage.setItem('materiasAprobadas', JSON.stringify(aprobadas));
}

// Revisa cada semestre para verificar si todas sus materias están tachadas, para entonces desbloquear el siguiente semestre
function revisarSemestres() {
  // Seleccionamos todos los semestres
  const semestres = document.querySelectorAll('.semestre');

  semestres.forEach((semestre, i) => {
    // Obtenemos todas las materias del semestre actual
    const materias = semestre.querySelectorAll('.materia');
    // Y las materias tachadas dentro de ese semestre
    const aprobadas = semestre.querySelectorAll('.materia.aprobada');

    // Si el número de materias tachadas es igual al total de materias (semestre completado)
    if (materias.length > 0 && aprobadas.length === materias.length) {
      // Buscamos el siguiente semestre para desbloquearlo
      const siguiente = semestres[i + 1];
      if (siguiente) {
        // Quitamos clases que indican bloqueo para que sea visible y activo
        siguiente.classList.remove('bloqueado');
        siguiente.classList.remove('semi-transparente');

        // Quitamos la clase 'bloqueada' de las materias para habilitar el clic
        desbloquearMaterias(siguiente);
      }
    }
  });
}

// Controla el bloqueo y desbloqueo de los semestres y sus materias
function bloquearSemestres() {
  const semestres = document.querySelectorAll('.semestre');

  semestres.forEach((semestre, i) => {
    // El primer semestre siempre debe estar desbloqueado para poder tachar materias
    if (i === 0) {
      semestre.classList.remove('bloqueado');
      semestre.classList.remove('semi-transparente');

      // Habilitamos las materias para que se puedan clicar y tachar
      desbloquearMaterias(semestre);
    } else {
      // Para los demás semestres, si aún no están desbloqueados (es decir, bloqueados),
      // les aplicamos clases que los bloquean visualmente y funcionalmente
      if (!semestre.classList.contains('bloqueado') && !semestre.classList.contains('semi-transparente')) {
        semestre.classList.add('bloqueado');
        semestre.classList.add('semi-transparente');

        // Bloqueamos las materias dentro del semestre para que no puedan clicarse
        bloquearMaterias(semestre);
      }
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
