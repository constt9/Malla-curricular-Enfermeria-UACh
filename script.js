document.addEventListener('DOMContentLoaded', () => {
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
          // CAMBIO REALIZADO AQUÍ: ENFA205-20 con nuevo prerrequisito
          { "codigo": "ENFA205-20", "nombre": "GESTIÓN DEL CUIDADO EN ATENCIÓN AMBULATORIA", "prerequisitos": ["TODOS_HASTA_OCTAVO"] }
        ],
        "Décimo Semestre": [
          { "codigo": "ELECT116", "nombre": "OPTATIVO DE PROFUNDIZACIÓN II", "prerequisitos": [] },
          // CAMBIO REALIZADO AQUÍ: ENFA207-20 con nuevo prerrequisito
          { "codigo": "ENFA207-20", "nombre": "GESTIÓN DEL CUIDADO EN ATENCIÓN HOSPITALARIA", "prerequisitos": ["TODOS_HASTA_OCTAVO"] },
          { "codigo": "ESEN298-20", "nombre": "TRABAJO DE INVESTIGACIÓN", "prerequisitos": ["ENFA204-20"] }
        ]
      }
    };

    const mallaContainer = document.getElementById('malla-container');
    let completedCourses = new Set(); // Para almacenar los códigos de cursos completados

    // Función auxiliar para obtener todos los códigos de cursos hasta el 8vo semestre
    function getAllCoursesUpToEighthSemester() {
        const courses = new Set();
        const years = ["Primer Año", "Segundo Año", "Tercer Año", "Cuarto Año"];
        const semestersInOrder = {
            "Primer Año": ["Primer Semestre", "Segundo Semestre"],
            "Segundo Año": ["Tercer Semestre", "Cuarto Semestre"],
            "Tercer Año": ["Quinto Semestre", "Sexto Semestre"],
            "Cuarto Año": ["Septimo Semestre", "Octavo Semestre"]
        };

        for (const year of years) {
            for (const semester of semestersInOrder[year]) {
                if (mallaData[year] && mallaData[year][semester]) {
                    mallaData[year][semester].forEach(course => {
                        courses.add(course.codigo);
                    });
                }
            }
        }
        return courses;
    }

    const allCoursesBeforeNinth = getAllCoursesUpToEighthSemester();
    const REQUIRED_COURSES_COUNT = allCoursesBeforeNinth.size; // El número real de cursos hasta octavo semestre

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
                            if (prereq === "TODOS_HASTA_OCTAVO") {
                                const completedBeforeNinthCount = [...completedCourses].filter(code => allCoursesBeforeNinth.has(code)).length;
                                if (completedBeforeNinthCount < REQUIRED_COURSES_COUNT) {
                                    isLocked = true;
                                    missingPrereqs.push(`Aprobación de ${REQUIRED_COURSES_COUNT} cursos hasta el 8vo semestre (${completedBeforeNinthCount} completados)`);
                                }
                            } else if (!completedCourses.has(prereq)) {
                                isLocked = true;
                                // Buscar el nombre del prerrequisito
                                let prereqName = prereq;
                                for (const y in mallaData) {
                                    for (const s in mallaData[y]) {
                                        const found = mallaData[y][s].find(c => c.codigo === prereq);
                                        if (found) {
                                            prereqName = found.nombre;
                                            break;
                                        }
                                    }
                                    if (prereqName !== prereq) break;
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
                        renderMalla(); // Volver a renderizar para actualizar el estado visual
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
