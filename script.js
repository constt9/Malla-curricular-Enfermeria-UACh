document.addEventListener('DOMContentLoaded', function() {
    const mallaGrid = document.getElementById('malla-grid');

    // **Datos de la Malla Curricular de Enfermería - UACh**
    // Incluye todos los ramos y sus prerrequisitos según lo proporcionaste.
    // Los créditos se establecen en 0 si no se especificaron.
    // Los estados iniciales serán 'locked' (bloqueado), 'available' (disponible), 'completed' (completado).
    const mallaEnfermeriaUACh = [
        // Primer año, Primer semestre
        // Cursos sin prerrequisitos iniciales son "available" por defecto
        { id: "ANAT060-20", nombre: "BASES MORFOLÓGICAS E HISTOLÓGICAS DEL SER HUMANO", semestre: 1, creditos: 0, prerequisitos: [], estado: "available" },
        { id: "BIMI055-20", nombre: "BIOLOGÍA CELULAR", semestre: 1, creditos: 0, prerequisitos: [], estado: "available" },
        { id: "CIDI067-20", nombre: "COMUNICACIÓN EN LENGUA INGLESA NIVEL BÁSICO", semestre: 1, creditos: 0, prerequisitos: [], estado: "available" },
        { id: "DYRE070-14", nombre: "EDUCACIÓN FÍSICA Y SALUD", semestre: 1, creditos: 0, prerequisitos: [], estado: "available" },
        { id: "ENFA051-20", nombre: "BASES CONCEPTUALES DE LA ENFERMERÍA", semestre: 1, creditos: 0, prerequisitos: [], estado: "available" },
        { id: "ESEN062-20", nombre: "INTRODUCCIÓN A LOS ESTUDIOS UNIVERSITARIOS", semestre: 1, creditos: 0, prerequisitos: [], estado: "available" },
        { id: "QUIM064-20", nombre: "BASES DE QUÍMICA GENERAL Y ORGÁNICA", semestre: 1, creditos: 0, prerequisitos: [], estado: "available" },

        // Primer año, Segundo semestre (estos y los siguientes se inicializan como "locked" y se actualizan dinámicamente)
        { id: "CIDI081-20", nombre: "COMUNICACIÓN EN LENGUA INGLESA NIVEL INTERMEDIO", semestre: 2, creditos: 0, prerequisitos: [], estado: "locked" },
        { id: "BIOQ077-20", nombre: "BIOQUÍMICA GENERAL", semestre: 2, creditos: 0, prerequisitos: ["QUIM064-20"], estado: "locked" },
        { id: "DYRE027-20", nombre: "AUTOCUIDADO Y VIDA ACTIVA", semestre: 2, creditos: 0, prerequisitos: [], estado: "locked" },
        { id: "ENFA070-20", nombre: "FUNDAMENTOS DISCIPLINARES TEÓRICOS Y PRÁCTICOS DE LA ENFERMERÍA", semestre: 2, creditos: 0, prerequisitos: ["ANAT060-20", "ENFA051-20"], estado: "locked" },
        { id: "FISL075-20", nombre: "FISIOLOGÍA HUMANA", semestre: 2, creditos: 0, prerequisitos: ["ANAT060-20", "BIMI055-20"], estado: "locked" },
        { id: "PSIQ080-20", nombre: "PSICOLOGÍA ANTROPOLÓGICA", semestre: 2, creditos: 0, prerequisitos: [], estado: "locked" },
        { id: "SALP083-20", nombre: "BASES CONCEPTUALES DE LA SALUD PÚBLICA Y COLECTIVA", semestre: 2, creditos: 0, prerequisitos: [], estado: "locked" },
        { id: "SALP085-20", nombre: "HABILIDADES INFORMACIONALES", semestre: 2, creditos: 0, prerequisitos: [], estado: "locked" },

        // Segundo año, Tercer semestre
        { id: "ENFA092-20", nombre: "CUIDADOS DE ENFERMERÍA DE PERSONAS ADULTAS Y MAYORES CON NECESIDADES DE SALUD", semestre: 3, creditos: 0, prerequisitos: ["ENFA070-20", "FISL075-20", "SALP083-20"], estado: "locked" },
        { id: "ENFA096-20", nombre: "BIOÉTICA Y PROFESIÓN", semestre: 3, creditos: 0, prerequisitos: ["ENFA070-20"], estado: "locked" },
        { id: "HIPA093-24", nombre: "FISIOPATOLOGÍA HUMANA", semestre: 3, creditos: 0, prerequisitos: ["FISL075-20"], estado: "locked" },
        { id: "PRST091-22", nombre: "AGENTES PATÓGENOS EN EL SER HUMANO", semestre: 3, creditos: 0, prerequisitos: [], estado: "locked" },
        { id: "PSIQ097-20", nombre: "PSICOLOGÍA DEL DESARROLLO", semestre: 3, creditos: 0, prerequisitos: ["PSIQ080-20"], estado: "locked" },

        // Segundo año, Cuarto semestre
        { id: "ENFA098-20", nombre: "CUIDADOS DE ENFERMERÍA DE LA NIÑA, EL NIÑO Y ADOLESCENTES CON NECESIDADES DE SALUD", semestre: 4, creditos: 0, prerequisitos: ["PRST091-22", "ENFA092-20", "FISL075-20"], estado: "locked" },
        { id: "ENFM090-20", nombre: "SALUD SEXUAL Y REPRODUCTIVA EN LA MUJER", semestre: 4, creditos: 0, prerequisitos: ["HIPA093-24"], estado: "locked" },
        { id: "ESTD093-20", nombre: "METODOLOGÍA DE LA INVESTIGACIÓN EN SALUD", semestre: 4, creditos: 0, prerequisitos: ["SALP085-20"], estado: "locked" },
        { id: "FARM099-20", nombre: "FARMACOLOGÍA Y TOXICOLOGÍA", semestre: 4, creditos: 0, prerequisitos: ["BIOQ077-20", "HIPA093-24"], estado: "locked" },
        { id: "SALP095-20", nombre: "EPIDEMIOLOGÍA Y DEMOGRAFÍA", semestre: 4, creditos: 0, prerequisitos: ["SALP083-20"], estado: "locked" },

        // Tercer año, Quinto semestre
        { id: "ENFA103-20", nombre: "CUIDADOS DE ENFERMERÍA DE PERSONAS ADULTAS Y MAYORES EN EL PROCESO DE SALUD Y ENFERMEDAD", semestre: 5, creditos: 0, prerequisitos: ["ENFA098-20", "FARM099-20"], estado: "locked" },
        { id: "ESEN125-20", nombre: "INTRODUCCIÓN A LA ENFERMERÍA CLÍNICA", semestre: 5, creditos: 0, prerequisitos: ["ENFA098-20", "FARM099-20"], estado: "locked" },
        { id: "MEDI120-20", nombre: "ENFERMEDADES PREVALENTES DE PERSONAS ADULTAS Y MAYORES", semestre: 5, creditos: 0, prerequisitos: ["ENFA092-20", "HIPA093-24"], estado: "locked" },
        { id: "PSIQ105-20", nombre: "ENFERMERÍA EN SALUD MENTAL Y PSIQUIATRÍA", semestre: 5, creditos: 0, prerequisitos: ["ENFA098-20", "FARM099-20"], estado: "locked" },
        { id: "QFAR108-22", nombre: "FARMACOLOGÍA CLÍNICA PARA ENFERMERÍA", semestre: 5, creditos: 0, prerequisitos: ["FARM099-20"], estado: "locked" },

        // Tercer año, Sexto semestre
        { id: "ELECT114", nombre: "OPTATIVO DE ESPECIALIZACIÓN", semestre: 6, creditos: 0, prerequisitos: ["ENFA103-20", "MEDI120-20"], estado: "locked" },
        { id: "ENFA175-20", nombre: "CUIDADOS DE ENFERMERÍA DE LA NIÑA, EL NIÑO Y ADOLESCENTES EN EL PROCESO DE SALUD Y ENFERMEDAD", semestre: 6, creditos: 0, prerequisitos: ["ENFA103-20", "QFAR108-22"], estado: "locked" },
        { id: "ENFM170-20", nombre: "ALTERACIONES DE SALUD EN EL PROCESO DE GESTACIÓN", semestre: 6, creditos: 0, prerequisitos: ["ENFM090-20", "MEDI120-20"], estado: "locked" },
        { id: "ESEN180-20", nombre: "HABILIDADES Y HERRAMIENTAS PARA LA ATENCIÓN DE ENFERMERÍA EN PERSONAS EN SITUACIÓN DE CRISIS", semestre: 6, creditos: 0, prerequisitos: ["ENFM090-20", "MEDI120-20"], estado: "locked" },
        { id: "ESTD172-20", nombre: "BIOESTADÍSTICA", semestre: 6, creditos: 0, prerequisitos: ["ESTD093-20"], estado: "locked" },
        { id: "PEDI173-23", nombre: "ENFERMEDADES PREVALENTES DE LA NIÑA, EL NIÑO Y ADOLESCENTES", semestre: 6, creditos: 0, prerequisitos: ["ENFA103-20"], estado: "locked" },

        // Cuarto año, Septimo semestre
        { id: "ENFA185-20", nombre: "CUIDADOS DE ENFERMERÍA A PERSONAS EN SITUACIONES DE RIESGOS Y URGENCIAS", semestre: 7, creditos: 0, prerequisitos: ["ENFA175-20", "PEDI173-23"], estado: "locked" },
        { id: "ENFA188-20", nombre: "INVESTIGACIÓN CUALITATIVA", semestre: 7, creditos: 0, prerequisitos: ["ESTD093-20"], estado: "locked" },
        { id: "SALP190-20", nombre: "POLÍTICAS Y SISTEMAS DE SALUD", semestre: 7, creditos: 0, prerequisitos: ["ENFA103-20"], estado: "locked" },

        // Cuarto año, Octavo semestre
        { id: "ENFA192-20", nombre: "LIDERAZGO INTEGRADOR EN LA GESTIÓN DEL CUIDADO", semestre: 8, creditos: 0, prerequisitos: ["ENFA185-20", "SALP190-20"], estado: "locked" },
        { id: "ENFA194-20", nombre: "PROYECTO DE INVESTIGACIÓN", semestre: 8, creditos: 0, prerequisitos: ["ENFA188-20"], estado: "locked" },
        { id: "SALP195-20", nombre: "HERRAMIENTAS DE GESTIÓN E INNOVACIÓN EN SALUD", semestre: 8, creditos: 0, prerequisitos: ["SALP190-20"], estado: "locked" },

        // Quinto año, Noveno semestre
        { id: "ELECT112", nombre: "OPTATIVO DE PROFUNDIZACIÓN I", semestre: 9, creditos: 0, prerequisitos: [], estado: "locked" },
        { id: "ENFA204-20", nombre: "AVANCE DE INVESTIGACIÓN", semestre: 9, creditos: 0, prerequisitos: ["ENFA194-20"], estado: "locked" },
        { id: "ENFA205-20", nombre: "GESTIÓN DEL CUIDADO EN ATENCIÓN AMBULATORIA", semestre: 9, creditos: 0, prerequisitos: [], estado: "locked", note: "Prerrequisito: Aprobación de 42 cursos hasta el 8vo semestre" },

        // Quinto año, Décimo semestre
        { id: "ELECT116", nombre: "OPTATIVO DE PROFUNDIZACIÓN II", semestre: 10, creditos: 0, prerequisitos: [], estado: "locked" },
        { id: "ENFA207-20", nombre: "GESTIÓN DEL CUIDADO EN ATENCIÓN HOSPITALARIA", semestre: 10, creditos: 0, prerequisitos: [], estado: "locked", note: "Prerrequisito: Aprobación de 42 cursos hasta el 8vo semestre" },
        { id: "ESEN298-20", nombre: "TRABAJO DE INVESTIGACIÓN", semestre: 10, creditos: 0, prerequisitos: ["ENFA204-20"], estado: "locked" }
    ];

    // Mapear cursos por ID para fácil acceso
    const cursosMap = new Map(mallaEnfermeriaUACh.map(curso => [curso.id, curso]));

    // Función para verificar si un curso está completado
    function isCursoCompleted(cursoId) {
        const curso = cursosMap.get(cursoId);
        return curso && curso.estado === 'completed';
    }

    // Función para verificar si los prerrequisitos de un curso están satisfechos
    function arePrereqsMet(curso) {
        if (!curso.prerequisitos || curso.prerequisitos.length === 0) {
            return true; // No tiene prerrequisitos
        }
        return curso.prerequisitos.every(prereqId => isCursoCompleted(prereqId));
    }

    // Función para actualizar el estado de todos los cursos (locked, available)
    function updateAllCourseStates() {
        mallaEnfermeriaUACh.forEach(curso => {
            // Solo actualiza el estado si no está ya completado.
            // Si estaba completado, mantenemos ese estado a menos que se "descomplete" manualmente.
            if (curso.estado !== 'completed') { 
                if (arePrereqsMet(curso)) {
                    curso.estado = 'available';
                } else {
                    curso.estado = 'locked';
                }
            }
            
            // Actualizar la clase CSS en el DOM
            const cursoDiv = document.getElementById(curso.id);
            if (cursoDiv) {
                // Eliminar todas las clases de estado antes de añadir la correcta
                cursoDiv.classList.remove('locked', 'available', 'completed', 'strikethrough');
                cursoDiv.classList.add(curso.estado);

                // Controlar clickeabilidad
                cursoDiv.style.pointerEvents = (curso.estado === 'locked') ? 'none' : 'auto';

                // Añadir/quitar tachado visual si es completado
                if (curso.estado === 'completed') {
                    cursoDiv.classList.add('strikethrough');
                }
            }
        });
        saveCourseStates();
    }

    // Función para cambiar el estado de un curso al hacer clic
    function toggleCursoEstado(cursoId) {
        const curso = cursosMap.get(cursoId);
        if (curso) {
            if (curso.estado === 'completed') {
                curso.estado = 'available'; // Lo "descompleta" y lo vuelve disponible (si cumple prerequisitos) o bloqueado
            } else if (curso.estado === 'available') {
                curso.estado = 'completed'; // Lo marca como completado
            }
            updateAllCourseStates(); // Recalcula el estado de todos los cursos
        }
    }

    // Almacenar el estado de los cursos en localStorage para persistencia
    function saveCourseStates() {
        const statesToSave = mallaEnfermeriaUACh.map(c => ({ id: c.id, estado: c.estado }));
        localStorage.setItem('mallaEnfermeriaUAChEstado', JSON.stringify(statesToSave));
    }

    function loadCourseStates() {
        const savedStates = localStorage.getItem('mallaEnfermeriaUAChEstado');
        if (savedStates) {
            const parsedStates = JSON.parse(savedStates);
            parsedStates.forEach(savedCourse => {
                const course = cursosMap.get(savedCourse.id);
                if (course) {
                    course.estado = savedCourse.estado; // Carga el estado guardado
                }
            });
        }
    }

    // **Paso 2: Generar Años, Semestres y Cursos en el DOM**
    const anos = Math.ceil(Math.max(...mallaEnfermeriaUACh.map(curso => curso.semestre)) / 2); // Calcula el número de años

    const romanNumerals = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

    for (let i = 1; i <= anos; i++) {
        const anoContainer = document.createElement('div');
        anoContainer.classList.add('ano-container');
        anoContainer.innerHTML = `<h2>Año ${romanNumerals[i]}</h2>`; // Título del Año

        const semestresAno = document.createElement('div');
        semestresAno.classList.add('semestres-ano'); // Contenedor para los dos semestres del año

        // Primer semestre del año (impar)
        const semestre1Num = (i * 2) - 1;
        const semestre1Columna = document.createElement('div');
        semestre1Columna.classList.add('semestre-columna');
        semestre1Columna.innerHTML = `<h3>Semestre ${romanNumerals[semestre1Num]}</h3>`;
        mallaEnfermeriaUACh.filter(curso => curso.semestre === semestre1Num)
            .sort((a, b) => a.nombre.localeCompare(b.nombre))
            .forEach(curso => {
                const cursoDiv = document.createElement('div');
                cursoDiv.id = curso.id;
                cursoDiv.classList.add('curso'); // Estado inicial se añadirá al final
                cursoDiv.innerHTML = `
                    <h4>${curso.nombre}</h4>
                    <p class="curso-id">(${curso.id})</p>
                    <p class="curso-creditos">Créditos: ${curso.creditos === 0 ? 'N/D' : curso.creditos}</p>
                    ${curso.note ? `<p class="curso-note">${curso.note}</p>` : ''}
                `;
                cursoDiv.addEventListener('click', () => toggleCursoEstado(curso.id));
                semestre1Columna.appendChild(cursoDiv);
            });
        if (mallaEnfermeriaUACh.filter(curso => curso.semestre === semestre1Num).length > 0) {
            semestresAno.appendChild(semestre1Columna);
        }
        

        // Segundo semestre del año (par)
        const semestre2Num = i * 2;
        const semestre2Columna = document.createElement('div');
        semestre2Columna.classList.add('semestre-columna');
        semestre2Columna.innerHTML = `<h3>Semestre ${romanNumerals[semestre2Num]}</h3>`;
        mallaEnfermeriaUACh.filter(curso => curso.semestre === semestre2Num)
            .sort((a, b) => a.nombre.localeCompare(b.nombre))
            .forEach(curso => {
                const cursoDiv = document.createElement('div');
                cursoDiv.id = curso.id;
                cursoDiv.classList.add('curso'); // Estado inicial se añadirá al final
                cursoDiv.innerHTML = `
                    <h4>${curso.nombre}</h4>
                    <p class="curso-id">(${curso.id})</p>
                    <p class="curso-creditos">Créditos: ${curso.creditos === 0 ? 'N/D' : curso.creditos}</p>
                    ${curso.note ? `<p class="curso-note">${curso.note}</p>` : ''}
                `;
                cursoDiv.addEventListener('click', () => toggleCursoEstado(curso.id));
                semestre2Columna.appendChild(cursoDiv);
            });
        if (mallaEnfermeriaUACh.filter(curso => curso.semestre === semestre2Num).length > 0) {
            semestresAno.appendChild(semestre2Columna);
        }

        anoContainer.appendChild(semestresAno);
        mallaGrid.appendChild(anoContainer);
    }

    // Cargar estados guardados, actualizar todos los estados (disponibles/bloqueados) y renderizar
    loadCourseStates();
    updateAllCourseStates(); // Esto establecerá el estado 'available' o 'locked' inicialmente
});
