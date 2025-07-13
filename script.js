// Al cargar el documento, aplicamos el estado guardado en localStorage y bloqueamos/desbloqueamos semestres según corresponda
window.addEventListener('DOMContentLoaded', () => {
  const materiasGuardadas = JSON.parse(localStorage.getItem('materiasAprobadas')) || [];

  materiasGuardadas.forEach(id => {
    const materia = document.getElementById(id);
    if (materia) {
      materia.classList.add('aprobada');
    }
  });

  bloquearSemestres();
  revisarSemestres();
});

// Botón para resetear todo el progreso
const resetBtn = document.getElementById('resetear');
resetBtn.addEventListener('click', () => {
  document.querySelectorAll('.materia').forEach(materia => {
    materia.classList.remove('aprobada');
  });

  localStorage.removeItem('materiasAprobadas');
  bloquearSemestres();
});

// Agregar evento clic a cada materia
document.querySelectorAll('.materia').forEach(materia => {
  materia.addEventListener('click', () => {
    if (materia.classList.contains('bloqueada')) return;

    materia.classList.toggle('aprobada');
    guardarMateriasAprobadas();
    revisarSemestres();
    bloquearSemestres();
  });
});

// Guardar materias tachadas en localStorage
function guardarMateriasAprobadas() {
  const aprobadas = Array.from(document.querySelectorAll('.materia.aprobada'))
    .map(m => m.id);
  localStorage.setItem('materiasAprobadas', JSON.stringify(aprobadas));
}

// Revisar y desbloquear siguiente semestre si el actual está completamente aprobado
function revisarSemestres() {
  const semestres = document.querySelectorAll('.semestre');

  semestres.forEach((semestre, i) => {
    const materias = semestre.querySelectorAll('.materia');
    const aprobadas = semestre.querySelectorAll('.materia.aprobada');

    if (materias.length > 0 && aprobadas.length === materias.length) {
      const siguiente = semestres[i + 1];
      if (siguiente) {
        siguiente.classList.remove('bloqueado');
        siguiente.classList.remove('semi-transparente');
        desbloquearMaterias(siguiente);
      }
    }
  });
}

// Bloquear o desbloquear semestres según progreso
function bloquearSemestres() {
  const semestres = document.querySelectorAll('.semestre');

  semestres.forEach((semestre, i) => {
    const materias = semestre.querySelectorAll('.materia');
    const aprobadas = semestre.querySelectorAll('.materia.aprobada');

    if (i === 0 || aprobadas.length === materias.length || !semestre.classList.contains('bloqueado')) {
      semestre.classList.remove('bloqueado');
      semestre.classList.remove('semi-transparente');
      desbloquearMaterias(semestre);
    } else {
      semestre.classList.add('bloqueado');
      semestre.classList.add('semi-transparente');
      bloquearMaterias(semestre);
    }
  });
}

// Bloquear todas las materias de un semestre
function bloquearMaterias(semestre) {
  semestre.querySelectorAll('.materia').forEach(m => {
    m.classList.add('bloqueada');
  });
}

// Desbloquear todas las materias de un semestre
function desbloquearMaterias(semestre) {
  semestre.querySelectorAll('.materia').forEach(m => {
    m.classList.remove('bloqueada');
  });
}
