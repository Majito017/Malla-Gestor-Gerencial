document.querySelectorAll('.materia').forEach(materia => {
  materia.addEventListener('click', () => {
    materia.classList.toggle('aprobada');
    revisarSemestres();
  });
});

function revisarSemestres() {
  const semestres = document.querySelectorAll('.semestre');
  semestres.forEach((semestre, i) => {
    const materias = semestre.querySelectorAll('.materia');
    const aprobadas = semestre.querySelectorAll('.materia.aprobada');

    // Si todas las materias están aprobadas y existe un siguiente semestre, lo mostramos
    if (materias.length > 0 && aprobadas.length === materias.length) {
      const siguiente = semestres[i + 1];
      if (siguiente) siguiente.classList.remove('oculto');
    }
  });
}

// Ocultar todos los semestres excepto el primero
document.querySelectorAll('.semestre').forEach((semestre, i) => {
  if (i > 0) semestre.classList.add('oculto');
});
