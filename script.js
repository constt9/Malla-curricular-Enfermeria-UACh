document.addEventListener('DOMContentLoaded', () => {
    // Datos completos de la malla curricular para los 5 años
    const mallaData = {
      "Primer Año": {
        "Primer Semestre": [
          {
            "codigo": "ANAT060-20",
            "nombre": "BASES MORFOLÓGICAS E HISTOLÓGICAS DEL SER HUMANO",
            "prerequisitos": []
          },
          {
            "codigo": "BIMI055-20",
            "nombre": "BIOLOGÍA CELULAR",
            "prerequisitos": []
          },
          {
            "codigo": "CIDI067-20",
            "nombre": "COMUNICACIÓN EN LENGUA INGLESA NIVEL BÁSICO",
            "prerequisitos": []
          },
          {
            "codigo": "DYRE070-14",
            "nombre": "EDUCACIÓN FÍSICA Y SALUD",
            "prerequisitos": []
          },
          {
            "codigo": "ENFA051-20",
            "nombre": "BASES CONCEPTUALES DE LA ENFERMERÍA",
            "prerequisitos": []
          },
          {
            "codigo": "ESEN062-20",
            "nombre": "INTRODUCCIÓN A LOS ESTUDIOS UNIVERSITARIOS",
            "prerequisitos": []
          },
          {
            "codigo": "QUIM064-20",
            "nombre": "BASES DE QUÍMICA GENERAL Y ORGÁNICA",
            "prerequisitos": []
          }
        ],
        "Segundo Semestre": [
          {
            "codigo": "CIDI081-20",
            "nombre": "COMUNICACIÓN EN LENGUA INGLESA NIVEL INTERMEDIO",
            "prerequisitos": ["CIDI067-20"]
          },
          {
            "codigo": "BIOQ077-20",
            "nombre": "BIOQUÍMICA GENERAL",
            "prerequisitos": ["QUIM064-20"]
          },
          {
            "codigo": "DYRE027-20",
            "nombre": "AUTOCUIDADO Y VIDA ACTIVA",
            "prerequisitos": []
          },
          {
            "codigo": "ENFA070-20",
            "nombre": "FUNDAMENTOS DISCIPLINARES TEÓRICOS Y PRÁCTICOS DE LA ENFERMERÍA",
            "prerequisitos": ["ANAT060-20", "ENFA051-20"]
          },
          {
            "codigo": "FISL075-20",
            "nombre": "FISIOLOGÍA HUMANA",
            "prerequisitos": ["ANAT060-20", "BIMI055-20"]
          },
          {
            "codigo": "PSIQ080-20",
            "nombre": "PSICOLOGÍA ANTROPOLÓGICA",
            "prerequisitos": []
          },
          {
            "codigo": "SALP083-20",
            "nombre": "BASES CONCEPTUALES DE LA SALUD PÚBLICA Y COLECTIVA",
            "prerequisitos": []
          },
          {
            "codigo": "SALP085-20",
            "nombre": "HABILIDADES INFORMACIONALES",
            "prerequisitos": []
          }
        ]
      },
      "Segundo Año": {
        "Tercer Semestre": [
          {
            "codigo": "ENFA092-20",
            "nombre": "CUIDADOS DE ENFERMERÍA DE PERSONAS ADULTAS Y MAYORES CON NECESIDADES DE SALUD",
            "prerequisitos": ["ENFA070-20", "FISL075-20", "SALP083-20"]
          },
          {
            "codigo": "ENFA096-20",
            "nombre": "BIOÉTICA Y PROFESIÓN",
            "prerequisitos": ["ENFA070-20"]
          },
          {
            "codigo": "HIPA093-24",
            "nombre": "FISIOPATOLOGÍA HUMANA",
            "prerequisitos": ["FISL075-20"]
          },
          {
            "codigo": "PRST091-22",
            "nombre": "AGENTES PATÓGENOS EN EL SER HUMANO",
            "prerequisitos": []
          },
          {
            "codigo": "PSIQ097-20",
            "nombre": "PSICOLOGÍA DEL DESARROLLO",
            "prerequisitos": ["PSIQ080-20"]
          }
        ],
        "Cuarto Semestre": [
          {
            "codigo": "ENFA098-20",
            "nombre": "CUIDADOS DE ENFERMERÍA DE LA NIÑA, EL NIÑO Y ADOLESCENTES CON NECESIDADES DE SALUD",
            "prerequisitos": ["PRST091-22", "ENFA092-20", "FISL075-20"]
          },
          {
            "codigo": "ENFM090-20",
            "nombre": "SALUD SEXUAL Y REPRODUCTIVA EN LA MUJER",
            "prerequisitos": ["HIPA093-24"]
          },
          {
            "codigo": "ESTD093-20",
            "nombre": "METODOLOGÍA DE LA INVESTIGACIÓN EN SALUD",
            "prerequisitos": ["SALP085-20"]
          },
          {
            "codigo": "FARM099-20",
            "nombre": "FARMACOLOGÍA Y TOXICOLOGÍA",
            "prerequisitos": ["BIOQ077-20", "HIPA093-24"]
          },
          {
            "codigo": "SALP095-20",
            "nombre": "EPIDEMIOLOGÍA Y DEMOGRAFÍA",
            "prerequisitos": ["SALP083-20"]
          }
        ]
      },
      "Tercer Año": {
        "Quinto Semestre": [
          {
            "codigo": "ENFA103-20",
            "nombre": "CUIDADOS DE ENFERMERÍA DE PERSONAS ADULTAS Y MAYORES EN EL PROCESO DE SALUD Y ENFERMEDAD",
            "prerequisitos": ["ENFA098-20", "FARM099-20"]
          },
          {
            "codigo": "ESEN125-20",
            "nombre": "INTRODUCCIÓN A LA ENFERMERÍA CLÍNICA",
            "prerequisitos": ["ENFA098-20", "FARM099-20"]
          },
          {
            "codigo": "MEDI120-20",
            "nombre": "ENFERMEDADES PREVALENTES DE PERSONAS ADULTAS Y MAYORES",
            "prerequisitos": ["ENFA092-20", "HIPA093-24"]
          },
          {
            "codigo": "PSIQ105-20",
            "nombre": "ENFERMERÍA EN SALUD MENTAL Y PSIQUIATRÍA",
            "prerequisitos": ["ENFA098-20", "FARM099-20"]
          },
          {
            "codigo": "QFAR108-22",
            "nombre": "FARMACOLOGÍA CLÍNICA PARA ENFERMERÍA",
            "prerequisitos": ["FARM099-20"]
          }
        ],
        "Sexto Semestre": [
          {
            "codigo": "ELECT114",
            "nombre": "OPTATIVO DE ESPECIALIZACIÓN",
            "prerequisitos": ["ENFA103-20", "MEDI120-20"]
          },
          {
            "codigo": "ENFA175-20",
            "nombre": "CUIDADOS DE ENFERMERÍA DE LA NIÑA, EL NIÑO Y ADOLESCENTES EN EL PROCESO DE SALUD Y ENFERMEDAD",
            "prerequisitos": ["ENFA103-20", "QFAR108-22"]
          },
          {
            "codigo": "ENFM170-20",
            "nombre": "ALTERACIONES DE SALUD EN EL PROCESO DE GESTACIÓN",
            "prerequisitos": ["ENFM090-20", "MEDI120-20"]
          },
          {
            "codigo": "ESEN180-20",
            "nombre": "HABILIDADES Y HERRAMIENTAS PARA LA ATENCIÓN DE ENFERMERÍA EN PERSONAS EN SITUACIÓN DE CRISIS",
            "prerequisitos": ["ENFM090-20", "MEDI120-20"]
          },
          {
            "codigo": "ESTD172-20",
            "nombre": "BIOESTADÍSTICA",
            "prerequisitos": ["ESTD093-20"]
          },
          {
            "codigo": "PEDI173-23",
            "nombre": "ENFERMEDADES PREVALENTES DE LA NIÑA, EL NIÑO Y ADOLESCENTES",
            "prerequisitos": ["ENFA103-20"]
          }
        ]
      },
      "Cuarto Año": {
        "Septimo Semestre": [
          {
            "codigo": "ENFA185-20",
            "nombre": "CUIDADOS DE ENFERMERÍA A PERSONAS EN SITUACIONES DE RIESGOS Y URGENCIAS",
            "prerequisitos": ["ENFA175-20", "PEDI173-23"]
          },
          {
            "codigo": "ENFA188-20",
            "nombre": "INVESTIGACIÓN CUALITATIVA",
            "prerequisitos": ["ESTD093-20"]
          },
          {
            "codigo": "SALP190-20",
            "nombre": "POLÍTICAS Y SISTEMAS DE SALUD",
            "prerequisitos": ["ENFA103-20"]
          }
        ],
        "Octavo Semestre": [
          {
            "codigo": "ENFA192-20",
            "nombre": "LIDERAZGO INTEGRADOR EN LA GESTIÓN DEL CUIDADO",
            "prerequisitos": ["ENFA185-20", "SALP190-20"]
          },
          {
            "codigo": "ENFA194-20",
            "nombre": "PROYECTO DE INVESTIGACIÓN",
            "prerequisitos": ["ENFA188-20"]
          },
          {
            "codigo": "SALP195-20",
            "nombre": "HERRAMIENTAS DE GESTIÓN E INNOVACIÓN EN SALUD",
            "prerequisitos": ["SALP190-20"]
          }
        ]
      },
      "Quinto Año": {
        "Noveno Semestre": [
          {
            "codigo": "ELECT112",
            "nombre": "OPTATIVO DE PROFUNDIZACIÓN I",
            "prerequisitos": []
          },
          {
            "codigo": "ENFA204-20",
            "nombre": "AVANCE DE INVESTIGACIÓN",
            "prerequisitos": ["ENFA194-20"]
          },
          {
            "codigo": "ENFA205-20",
            "nombre": "GESTIÓN DEL CUIDADO EN ATENCIÓN AMBULATORIA",
            "prerequisitos": ["APROBACIÓN DE CURSOS HASTA EL OCTAVO SEMESTRE: 42 CURSOS"]
          }
        ],
        "Décimo Semestre": [
          {
            "codigo": "ELECT116",
            "nombre": "OPTATIVO DE PROFUNDIZACIÓN II",
            "prerequisitos": []
          },
          {
            "codigo": "ENFA207-20",
            "nombre": "GESTIÓN DEL CUIDADO EN ATENCIÓN HOSPITALARIA",
            "prerequisitos": ["APROBACIÓN DE CURSOS HASTA EL OCTAVO SEMESTRE: 42 CURSOS"]
          },
          {
            "codigo": "ESEN298-20",
            "nombre": "TRABAJO DE INVESTIGACIÓN",
            "prerequisitos": ["ENFA204-20"]
          }
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
                        // Verificar si el curso está bloqueado (tiene prerrequisitos no completados)
                        const isLocked = course.prerequisitos.some(prereq => {
                            // Manejo especial para el requisito de "APROBACIÓN DE CURSOS HASTA EL OCTAVO SEMESTRE"
                            // Por ahora, si un curso tiene este texto como prerrequisito, se considerará bloqueado
                            // hasta que se desarrolle una lógica más avanzada para contar los 42 cursos.
                            if (prereq.includes("APROBACIÓN DE CURSOS HASTA EL OCTAVO SEMESTRE")) {
                                return true; // Lo bloquea por defecto si tiene este requisito complejo
                            }
                            return !completedCourses.has(prereq);
                        });

                        if (isLocked) {
                            courseItem.classList.add('locked');
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
                yearDiv.appendChild(semesterDiv);
            }
            mallaContainer.appendChild(yearDiv);
        }
    }

    renderMalla(); // Renderizar la malla inicialmente al cargar la página
});
