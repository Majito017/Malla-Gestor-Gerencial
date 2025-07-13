// Aplicar estado guardado y bloquear semestres al cargar
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

// Manejar clic en materias
document.querySelectorAll('.materia').forEach(materia => {
  materia.addEventListener('click', () => {
    if (materia.classList.contains('bloqueada')) return; // no hace nada si está bloqueada

    materia.classList.toggle('aprobada');
    guardarMateriasAprobadas();
    revisarSemestres();
    bloquearSemestres();
  });
});

// Guarda materias tachadas en localStorage
function guardarMateriasAprobadas() {
  const aprobadas = Array.from(document.querySelectorAll('.materia.aprobada'))
    .map(m => m.id);
  localStorage.setItem('materiasAprobadas', JSON.stringify(aprobadas));
}

// Revisar y desbloquear semestres según materias aprobadas
function revisarSemestres() {
  const semestres = document.querySelectorAll('.semestre');

  semestres.forEach((semestre, i) => {
    const materias = semestre.querySelectorAll('.materia');
    const aprobadas = semestre.querySelectorAll('.materia.aprobada');

    // Si todas aprobadas, desbloquea siguiente semestre
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

// Bloquea todos los semestres excepto el primero y materias clickeables solo si semestre desbloqueado
function bloquearSemestres() {
  const semestres = document.querySelectorAll('.semestre');

  semestres.forEach((semestre, i) => {
    if (i === 0) {
      semestre.classList.remove('bloqueado');
      semestre.classList.remove('semi-transparente');
      desbloquearMaterias(semestre);
    } else {
      // Si no está desbloqueado, bloquear
      if (!semestre.classList.contains('bloqueado') && !semestre.classList.contains('semi-transparente')) {
        semestre.classList.add('bloqueado');
        semestre.classList.add('semi-transparente');
        bloquearMaterias(semestre);
      }
    }
  });
}

// Bloquear materias dentro de un semestre
function bloquearMaterias(semestre) {
  semestre.querySelectorAll('.materia').forEach(m => {
    m.classList.add('bloqueada');
  });
}

// Desbloquear materias dentro de un semestre
function desbloquearMaterias(semestre) {
  semestre.querySelectorAll('.materia').forEach(m => {
    m.classList.remove('bloqueada');
  });
}
