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
  document.querySelectorAll('.materia').forEach(materia => {
    materia.classList.remove('aprobada');
  });
  localStorage.removeItem('materiasAprobadas');
  actualizarEstados();
});

// Agregamos el evento click a todas las materias
document.querySelectorAll('.materia').forEach(materia => {
  materia.addEventListener('click', () => {
    if (materia.classList.contains('bloqueada')) return;

    materia.classList.toggle('aprobada');
    guardarMateriasAprobadas();
    actualizarEstados();
  });
});

// Guarda en localStorage las materias aprobadas
function guardarMateriasAprobadas() {
  const aprobadas = Array.from(document.querySelectorAll('.materia.aprobada'))
    .map(m => m.id);
  localStorage.setItem('materiasAprobadas', JSON.stringify(aprobadas));
}

// 🔧 FUNCIÓN CORREGIDA
function actualizarEstados() {
  const semestres = document.querySelectorAll('.semestre');

  let desbloquear = true;

  semestres.forEach((semestre) => {
    const materias = semestre.querySelectorAll('.materia');
    const aprobadas = semestre.querySelectorAll('.materia.aprobada');

    if (desbloquear) {
      semestre.classList.remove('bloqueado', 'semi-transparente');
      desbloquearMaterias(semestre);
    } else {
      semestre.classList.add('bloqueado', 'semi-transparente');
      bloquearMaterias(semestre);
    }

    // Si todas las materias están aprobadas, desbloquear el siguiente
    desbloquear = (aprobadas.length === materias.length);
  });
}

// Bloquea las materias dentro del semestre
function bloquearMaterias(semestre) {
  semestre.querySelectorAll('.materia').forEach(m => {
    m.classList.add('bloqueada');
  });
}

// Desbloquea las materias dentro del semestre
function desbloquearMaterias(semestre) {
  semestre.querySelectorAll('.materia').forEach(m => {
    m.classList.remove('bloqueada');
  });
}
