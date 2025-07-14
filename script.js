document.addEventListener('DOMContentLoaded', () => {
    // Definición de los prerrequisitos explícitos para ENFA205-20
    const prerequisitosENFA205_20 = [
        "ANAT060-20", "BIMI055-20", "CIDI067-20", "DYRE070-14", "ENFA051-20", "ESEN062-20", "QUIM064-20",
        "CIDI081-20", "BIOQ077-20", "ELEC12", // Usamos ELEC12 en lugar de DYRE027-20 para consistencia con la malla actual
        "ENFA070-20", "FISL075-20", "PSIQ080-20", "SALP083-20", "SALP085-20",
        "ENFA092-20", "ENFA096-20", "HIPA093-24", "PRST091-22", "PSIQ097-20",
        "ENFA098-20", "ENFM090-20", "ESTD093-20", "FARM099-20", "SALP095-20",
        "ENFA103-20", "ESEN125-20", "MEDI120-20", "PSIQ105-20", "QFAR108-22",
        "ELECT114", "ENFA175-20", "ENFM170-20", "ESEN180-20", "ESTD172-20", "PEDI173-23", // PEDI173-23 está en tu lista para ENFA205-20
        "ENFA185-20", "ENFA188-20", "SALP190-20", "ENFA192-20", "ENFA194-20", "SALP195-20"
    ];

    // Definición de los prerrequisitos explícitos para ENFA207-20
    const prerequisitosENFA207_20 = [
        "ANAT060-20", "BIMI055-20", "CIDI067-20", "DYRE070-14", "ENFA051-20", "ESEN062-20", "QUIM064-20",
        "CIDI081-20", "BIOQ077-20", "ELEC12", // Usamos ELEC12 en lugar de DYRE027-20 para consistencia con la malla actual
        "ENFA070-20", "FISL075-20", "PSIQ080-20", "SALP083-20", "SALP085-20",
        "ENFA092-20", "ENFA096-20", "HIPA093-24", "PRST091-22", "PSIQ097-20",
        "ENFA098-20", "ENFM090-20", "ESTD093-20", "FARM099-20", "SALP095-20",
        "ENFA103-20", "ESEN125-20", "MEDI120-20", "PSIQ105-20", "QFAR108-22",
        "ELECT114", "ENFA175-20", "ENFM170-20", "ESEN180-20", "ESTD172-20",
        // Aquí no incluiste PEDI173-23 para ENFA207-20 según tu lista, a diferencia de ENFA205-20.
        "ENFA185-20", "ENFA188-20", "SALP190-20", "ENFA192-20", "ENFA194-20", "SALP195-20"
    ];


    // Datos completos de la malla curricular para los 5 años, organizados según tu imagen
    const mallaData = {
      "Primer Año": {
        "Primer Semestre": [
          { "codigo": "ANAT060-20", "nombre": "BASES MORFOLÓGICAS E HISTOLÓGICAS DEL SER HUMANO", "prerequisitos": [] },
          { "codigo": "BIMI055-20", "nombre": "BIOLOGÍA CELULAR", "prerequisitos": [] },
          { "codigo": "CIDI067-20", "nombre": "COMUNICACIÓN EN LENGUA INGLESA NIVEL BÁSICO", "prerequisitos": [] },
          { "codigo": "DYRE070-14", "nombre": "EDUCACIÓN FÍSICA Y SALUD", "prerequisitos": [] },
          { "codigo": "ENFA051-20", "nombre": "BASES CONCEPTUALES DE LA ENFERMERÍA", "prerequisitos": [] },
          { "codigo": "ESEN062-20", "nombre": "INTRODUCCIÓN A LOS ESTUDIOS UNIVERSITARIOS", "prerequisitos": [] },
          { "codigo": "QUIM064-20", "nombre": "BASES DE QUÍMICA GENERAL Y ORGÁNICA", "prerequisitos": [] }
        ],
        "Segundo Semestre": [
          { "codigo": "CIDI081-20", "nombre": "COMUNICACIÓN EN LENGUA INGLESA NIVEL INTERMEDIO", "prerequisitos": ["CIDI067-20"] },
          { "codigo": "BIOQ077-20", "nombre": "BIOQUÍMICA GENERAL", "prerequisitos": ["QUIM064-20"] },
          { "codigo": "ELEC12", "nombre": "OFG 1", "prerequisitos": ["DYRE070-14"] },
          { "codigo": "ENFA070-20", "nombre": "FUNDAMENTOS DISCIPLINARES TEÓRICOS Y PRÁCTICOS DE LA ENFERMERÍA", "prerequisitos": ["ANAT060-20", "ENFA051-20"] },
          { "codigo": "FISL075-20", "nombre": "FISIOLOGÍA HUMANA", "prerequisitos": ["ANAT060-20", "BIMI055-20"] },
          { "codigo": "PSIQ080-20", "nombre": "PSICOLOGÍA ANTROPOLÓGICA", "prerequisitos": [] },
          { "codigo": "SALP083-20", "nombre": "BASES CONCEPTUALES DE LA SALUD PÚBLICA Y COLECTIVA", "prerequisitos": [] },
          { "codigo": "SALP085-20", "nombre": "HABILIDADES INFORMACIONALES", "prerequisitos": [] }
        ]
      },
      "Segundo Año": {
        "Tercer Semestre": [
          { "codigo": "ENFA092-20", "nombre": "CUIDADOS DE ENFERMERÍA DE PERSONAS ADULTAS Y MAYORES CON NECESIDADES DE SALUD", "prerequisitos": ["ENFA070-20", "FISL075-20", "SALP083-20"] },
          { "codigo": "ENFA096-20", "nombre": "BIOÉTICA Y PROFESIÓN", "prerequisitos": ["ENFA070-20"] },
          { "codigo": "HIPA093-24", "nombre": "FISIOPATOLOGÍA HUMANA", "prerequisitos": ["FISL075-20"] },
          { "codigo": "PRST091-22", "nombre": "AGENTES PATÓGENOS EN EL SER HUMANO", "prerequisitos": [] },
          { "codigo": "PSIQ097-20", "nombre": "PSICOLOGÍA DEL DESARROLLO", "prerequisitos": ["PSIQ080-20"] }
        ],
        "Cuarto Semestre": [
          { "codigo": "ENFA098-20", "nombre": "CUIDADOS DE ENFERMERÍA DE LA NIÑA, EL NIÑO Y ADOLESCENTES CON NECESIDADES DE SALUD", "prerequisitos": ["PRST091-22", "ENFA092-20", "FISL075-20"] },
          { "codigo": "ENFM090-20", "nombre": "SALUD SEXUAL Y REPRODUCTIVA EN LA MUJER", "prerequisitos": ["HIPA093-24"] },
          { "codigo": "ESTD093-20", "nombre": "METODOLOGÍA DE LA INVESTIGACIÓN EN SALUD", "prerequisitos": ["SALP085-20"] },
          { "codigo": "FARM099-20", "nombre": "FARMACOLOGÍA Y TOXICOLOGÍA", "prerequisitos": ["BIOQ077-20", "HIPA093-24"] },
          { "codigo": "SALP095-20", "nombre": "EPIDEMIOLOGÍA Y DEMOGRAFÍA", "prerequisitos": ["SALP083-20"] }
        ]
      },
      "Tercer Año": {
        "Quinto Semestre": [
          { "codigo": "ENFA103-20", "nombre": "CUIDADOS DE ENFERMERÍA DE PERSONAS ADULTAS Y MAYORES EN EL PROCESO DE SALUD Y ENFERMEDAD", "prerequisitos": ["ENFA098-20", "FARM099-20"] },
          { "codigo": "ESEN125-20", "nombre": "INTRODUCCIÓN A LA ENFERMERÍA CLÍNICA", "prerequisitos": ["ENFA098-20", "FARM099-20"] },
          { "codigo": "MEDI120-20", "nombre": "ENFERMEDADES PREVALENTES DE PERSONAS ADULTAS Y MAYORES", "prerequisitos": ["ENFA092-20", "HIPA093-24"] },
          { "codigo": "PSIQ105-20", "nombre": "ENFERMERÍA EN SALUD MENTAL Y PSIQUIATRÍA", "prerequisitos": ["ENFA098-20", "FARM099-20"] },
          { "codigo": "QFAR108-22", "nombre": "FARMACOLOGÍA CLÍNICA PARA ENFERMERÍA", "prerequisitos": ["FARM099-20"] }
        ],
        "Sexto Semestre": [
          { "codigo": "ELECT114", "nombre": "OPTATIVO DE ESPECIALIZACIÓN", "prerequisitos": ["ENFA103-20", "MEDI120-20"] },
          { "codigo": "ENFA175-20", "nombre": "CUIDADOS DE ENFERMERÍA DE LA NIÑA, EL NIÑO Y ADOLESCENTES EN EL PROCESO DE SALUD Y ENFERMEDAD", "prerequisitos": ["ENFA103-20", "QFAR108-22"] },
          { "codigo": "ENFM170-20", "nombre": "ALTERACIONES DE SALUD EN EL PROCESO DE GESTACIÓN", "prerequisitos": ["ENFM090-20", "MEDI120-20"] },
          { "codigo": "ESEN180-20", "nombre": "HABILIDADES Y HERRAMIENTAS PARA LA ATENCIÓN DE ENFERMERÍA EN PERSONAS EN SITUACIÓN DE CRISIS", "prerequisitos": ["ENFM090-20", "MEDI120-20"] },
          { "codigo": "ESTD172-20", "nombre": "BIOESTADÍSTICA", "prerequisitos": ["ESTD093-20"] },
          { "codigo": "PEDI173-23", "nombre": "ENFERMEDADES PREVALENTES DE LA NIÑA, EL NIÑO Y ADOLESCENTES", "prerequisitos": ["ENFA103-20"] }
        ]
      },
      "Cuarto Año": {
        "Septimo Semestre": [
          { "codigo": "ENFA185-20", "nombre": "CUIDADOS DE ENFERMERÍA A PERSONAS EN SITUACIONES DE RIESGOS Y URGENCIAS", "prerequisitos": ["ENFA175-20", "PEDI173-23"] },
          { "codigo": "ENFA188-20", "nombre": "INVESTIGACIÓN CUALITATIVA", "prerequisitos": ["ESTD093-20"] },
          { "codigo": "SALP190-20", "nombre": "POLÍTICAS Y SISTEMAS DE SALUD", "prerequisitos": ["ENFA103-20"] }
        ],
        "Octavo Semestre": [
          { "codigo": "ENFA192-20", "nombre": "LIDERAZGO INTEGRADOR EN LA GESTIÓN DEL CUIDADO", "prerequisitos": ["ENFA185-20", "SALP190-20"] },
          { "codigo": "ENFA194-20", "nombre": "PROYECTO DE INVESTIGACIÓN", "prerequisitos": ["ENFA188-20"] },
          { "codigo": "SALP195-20", "nombre": "HERRAMIENTAS DE GESTIÓN E INNOVACIÓN EN SALUD", "prerequisitos": ["SALP190-20"] }
        ]
      },
      "Quinto Año": {
        "Noveno Semestre": [
          { "codigo": "ELECT112", "nombre": "OPTATIVO DE PROFUNDIZACIÓN I", "prerequisitos": [] },
          { "codigo": "ENFA204-20", "nombre": "AVANCE DE INVESTIGACIÓN", "prerequisitos": ["ENFA194-20"] },
          // Prerrequisitos para ENFA205-20, ahora explícitos
          { "codigo": "ENFA205-20", "nombre": "GESTIÓN DEL CUIDADO EN ATENCIÓN AMBULATORIA", "prerequisitos": prerequisitosENFA205_20 }
        ],
        "Décimo Semestre": [
          { "codigo": "ELECT116", "nombre": "OPTATIVO DE PROFUNDIZACIÓN II", "prerequisitos": [] },
          // Prerrequisitos para ENFA207-20, ahora explícitos
          { "codigo": "ENFA207-20", "nombre": "GESTIÓN DEL CUIDADO EN ATENCIÓN HOSPITALARIA", "prerequisitos": prerequisitosENFA207_20 },
          { "codigo": "ESEN298-20", "nombre": "TRABAJO DE INVESTIGACIÓN", "prerequisitos": ["ENFA204-20"] }
        ]
      }
    };

    const mallaContainer = document.getElementById('malla-container');
    let completedCourses = new Set(); // Para almacenar los códigos de cursos completados

    // Función para renderizar la malla
    function renderMalla() {
        mallaContainer.innerHTML = ''; // Limpiar el contenedor antes de renderizar
        for (const year in mallaData) {
            const yearDiv = document.createElement('div');
            yearDiv.classList.add('year-container');
            yearDiv.innerHTML = `<h2>${year}</h2>`;

            const semestersRow = document.createElement('div'); // Contenedor para los semestres en fila
            semestersRow.classList.add('semesters-row');

            for (const semester in mallaData[year]) {
                const semesterDiv = document.createElement('div');
                semesterDiv.classList.add('semester-container');
                semesterDiv.innerHTML = `<h3>${semester}</h3>`;

                const courseListDiv = document.createElement('div');
                courseListDiv.classList.add('course-list');

                mallaData[year][semester].forEach(course => {
                    const courseItem = document.createElement('div');
                    courseItem.classList.add('course-item');
                    courseItem.setAttribute('data-code', course.codigo);
                    courseItem.innerHTML = `<strong>${course.codigo}:</strong> ${course.nombre}`;

                    // Verificar si el curso ya está completado
                    if (completedCourses.has(course.codigo)) {
                        courseItem.classList.add('completed');
                    } else {
                        let isLocked = false;
                        let missingPrereqs = [];

                        course.prerequisitos.forEach(prereq => {
                            if (!completedCourses.has(prereq)) {
                                isLocked = true;
                                // Buscar el nombre del prerrequisito para el tooltip
                                let prereqName = prereq;
                                // Recorrer toda la malla para encontrar el nombre del prerrequisito
                                for (const y in mallaData) {
                                    for (const s in mallaData[y]) {
                                        const found = mallaData[y][s].find(c => c.codigo === prereq);
                                        if (found) {
                                            prereqName = found.nombre;
                                            break;
                                        }
                                    }
                                    if (prereqName !== prereq) break; // Si ya lo encontramos, salir de los loops
                                }
                                missingPrereqs.push(prereqName);
                            }
                        });

                        if (isLocked) {
                            courseItem.classList.add('locked');
                            if (missingPrereqs.length > 0) {
                                courseItem.title = "Requiere: " + missingPrereqs.join(', ');
                            }
                        } else {
                            courseItem.classList.add('unlocked');
                        }
                    }

                    courseItem.addEventListener('click', () => {
                        if (courseItem.classList.contains('completed')) {
                            // Si ya está completado, desmarcarlo
                            completedCourses.delete(course.codigo);
                        } else if (!courseItem.classList.contains('locked')) {
                            // Si no está bloqueado, marcarlo como completado
                            completedCourses.add(course.codigo);
                        }
                        // Al hacer clic, se re-renderiza toda la malla para actualizar el estado de los demás cursos
                        renderMalla();
                    });
                    courseListDiv.appendChild(courseItem);
                });
                semesterDiv.appendChild(courseListDiv);
                semestersRow.appendChild(semesterDiv); // Añadir el semestre a la fila de semestres
            }
            yearDiv.appendChild(semestersRow); // Añadir la fila de semestres al año
            mallaContainer.appendChild(yearDiv);
        }
    }

    renderMalla(); // Renderizar la malla inicialmente al cargar la página
});
