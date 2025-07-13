<!DOCTYPE html><html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Malla GIG Interactiva</title>
  <link rel="stylesheet" href="estilos.css" />
</head>
<body>
  <h1>Malla Interactiva - GIG 2024</h1>
  <div class="malla">
    <!-- Semestre 1 -->
    <div class="semestre">
      <h2>Semestre 1</h2>
      <div class="materia" id="GIG-101" data-prerequisitos="">Sociedad de la Información y el Conocimiento</div>
      <div class="materia" id="GIG-102" data-prerequisitos="">Introducción a los Sistemas de Información</div>
      <div class="materia" id="GIG-104" data-prerequisitos="">Ofimática</div>
      <div class="materia" id="GIG-204" data-prerequisitos="">Ética y Responsabilidad Social en la Información</div>
    </div>
    <!-- Semestre 2 -->
    <div class="semestre">
      <h2>Semestre 2</h2>
      <div class="materia bloqueada" id="GIG-201" data-prerequisitos="GIG-101">Gestión Organizacional</div>
      <div class="materia bloqueada" id="GIG-202" data-prerequisitos="GIG-101">Marco Constitucional y Derecho Administrativo</div>
      <div class="materia bloqueada" id="GIG-205" data-prerequisitos="GIG-204">Cátedra Alfaro</div>
    </div>
    <!-- Semestre 3 -->
    <div class="semestre">
      <h2>Semestre 3</h2>
      <div class="materia bloqueada" id="GIG-302" data-prerequisitos="GIG-201">Estadística Descriptiva</div>
      <div class="materia bloqueada" id="GIG-305" data-prerequisitos="GIG-104">Metodología de Investigación</div>
      <div class="materia bloqueada" id="GIG-307" data-prerequisitos="GIG-102">Memoria, Patrimonio y Uso de la Información</div>
      <div class="materia bloqueada" id="GIG-308" data-prerequisitos="GIG-102">Gestión de la Información</div>
      <div class="materia bloqueada" id="ESB-5202" data-prerequisitos="">(Materia indefinida)</div>
    </div>
    <!-- Semestre 4 -->
    <div class="semestre">
      <h2>Semestre 4</h2>
      <div class="materia bloqueada" id="GIG-401" data-prerequisitos="GIG-308">Sistemas de Información y Gestión Documental</div>
      <div class="materia bloqueada" id="GIG-405" data-prerequisitos="GIG-302">Estadística Inferencial</div>
      <div class="materia bloqueada" id="GIG-406" data-prerequisitos="GIG-201">Gestión de Procesos</div>
      <div class="materia bloqueada" id="GIG-407" data-prerequisitos="GIG-305">Evaluación de Programas Informacionales</div>
    </div>
    <!-- Semestre 5 -->
    <div class="semestre">
      <h2>Semestre 5</h2>
      <div class="materia bloqueada" id="GIG-501" data-prerequisitos="GIG-202">Gobierno Electrónico y Administración Pública</div>
      <div class="materia bloqueada" id="GIG-502" data-prerequisitos="GIG-401">Gestión Documental y Archivística</div>
      <div class="materia bloqueada" id="GIG-505" data-prerequisitos="GIG-407">Prácticas Preprofesionales I</div>
      <div class="materia bloqueada" id="GIG-506" data-prerequisitos="GIG-104">Herramientas Digitales Avanzadas</div>
    </div>
    <!-- Semestre 6 -->
    <div class="semestre">
      <h2>Semestre 6</h2>
      <div class="materia bloqueada" id="GIG-601" data-prerequisitos="GIG-502">Sistemas de Información Digital</div>
      <div class="materia bloqueada" id="GIG-803" data-prerequisitos="GIG-308">Modelos de Gestión de Información</div>
      <div class="materia bloqueada" id="GIG-704" data-prerequisitos="GIG-407">Alfabetización y Competencias Informacionales</div>
      <div class="materia bloqueada" id="GIG-605" data-prerequisitos="GIG-405">Análisis Cuantitativo de la Información</div>
      <div class="materia bloqueada" id="GIG-604" data-prerequisitos="GIG-406">Planificación Estratégica</div>
    </div>
    <!-- Semestre 7 -->
    <div class="semestre">
      <h2>Semestre 7</h2>
      <div class="materia bloqueada" id="GIG-706" data-prerequisitos="GIG-605">Análisis Cualitativo de la Información</div>
      <div class="materia bloqueada" id="GIG-707" data-prerequisitos="">English for Specific Purpose I</div>
      <div class="materia bloqueada" id="GIG-901" data-prerequisitos="GIG-406">Gestión de Proyectos</div>
      <div class="materia bloqueada" id="ESP-1501.1" data-prerequisitos="GIG-706">Decision Making in Management</div>
    </div>
    <!-- Semestre 8 -->
    <div class="semestre">
      <h2>Semestre 8</h2>
      <div class="materia bloqueada" id="GIG-902" data-prerequisitos="ESP-1501.1">Business Intelligence</div>
      <div class="materia bloqueada" id="GIG-903" data-prerequisitos="GIG-803">Gestión del Conocimiento</div>
      <div class="materia bloqueada" id="GIG-804" data-prerequisitos="GIG-704">Evaluación de Modelos de Gestión de Información</div>
      <div class="materia bloqueada" id="GIG-805" data-prerequisitos="GIG-505">Trabajo de Integración Curricular - Informe</div>
      <div class="materia bloqueada" id="FIP-6302-2" data-prerequisitos="GIG-707">English for Specific Purpose II</div>
      <div class="materia bloqueada" id="FIP-6302-1" data-prerequisitos="GIG-805">Trabajo de Integración Curricular - Diseño</div>
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>
