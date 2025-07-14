document.addEventListener('DOMContentLoaded', function() {
    const mallaEnfermeriaUACh = {
        "Primero": {
            "Semestre I": [
                { id: "ENFA051-20", nombre: "BASES CONCEPTUALES DE LA ENFERMERÍA", prerequisitos: [] },
                { id: "QUIMD064-20", nombre: "BASES DE QUÍMICA GENERAL Y ORGÁNICA", prerequisitos: [] },
                { id: "ANAT060-20", nombre: "BASES MORFOLÓGICAS E HISTOLÓGICAS DEL SER HUMANO", prerequisitos: [] },
                { id: "BIOL057-20", nombre: "BIOLOGÍA CELULAR Y MOLECULAR", prerequisitos: [] },
                { id: "HISP003-20", nombre: "HISTORIA POLÍTICA Y SOCIAL DE CHILE", prerequisitos: [] },
                { id: "ENFA052-20", nombre: "EDUCACIÓN PARA EL AUTOCUIDADO", prerequisitos: [] }
            ],
            "Semestre II": [
                { id: "FISA053-20", nombre: "FISIOPATOLOGÍA BÁSICA", prerequisitos: ["ANAT060-20", "BIOL057-20"] },
                { id: "ENFA054-20", nombre: "PROCESOS DE ENFERMERÍA Y FUNDAMENTOS DEL CUIDADO", prerequisitos: ["ENFA051-20"] },
                { id: "PSIC083-20", nombre: "PSICOLOGÍA DEL DESARROLLO", prerequisitos: ["HISP003-20"] },
                { id: "SOCI005-20", nombre: "SOCIOLOGÍA", prerequisitos: [] },
                { id: "ENFA055-20", nombre: "SALUD PÚBLICA Y SALUD COMUNITARIA", prerequisitos: ["ENFA051-20"] },
                { id: "FORM006-20", nombre: "FORMACIÓN DE PERSONAS", prerequisitos: [] }
            ]
        },
        "Segundo": {
            "Semestre III": [
                { id: "ENFA056-20", nombre: "CUIDADO DE ENFERMERÍA EN SALUD FAMILIAR Y COMUNITARIA", prerequisitos: ["ENFA054-20", "ENFA055-20"] },
                { id: "FARMD058-20", nombre: "FARMACOLOGÍA BÁSICA", prerequisitos: ["FISA053-20", "QUIMD064-20"] },
                { id: "ENFA057-20", nombre: "EPIDEMIOLOGÍA Y DEMOGRAFÍA", prerequisitos: ["SOCI005-20"] },
                { id: "ENFA058-20", nombre: "MICROBIOLOGÍA Y PARASITOLOGÍA", prerequisitos: ["BIOL057-20"] },
                { id: "ENFA059-20", nombre: "NUTRICIÓN Y DIETÉTICA", prerequisitos: ["FISA053-20"] },
                { id: "ENFA060-20", nombre: "INVESTIGACIÓN EN CIENCIAS DE LA SALUD", prerequisitos: ["HISP003-20"] }
            ],
            "Semestre IV": [
                { id: "ENFA061-20", nombre: "CUIDADO DE ENFERMERÍA DEL NIÑO, LA NIÑA Y ADOLESCENTES CON NECESIDADES DE SALUD", prerequisitos: ["ENFA056-20"] },
                { id: "ENFA062-20", nombre: "CUIDADO DE ENFERMERÍA EN SALUD MENTAL Y PSIQUIATRÍA", prerequisitos: ["PSIC083-20", "ENFA056-20"] },
                { id: "ENFA063-20", nombre: "FARMACOLOGÍA CLÍNICA PARA ENFERMERÍA", prerequisitos: ["FARMD058-20"] },
                { id: "ENFA064-20", nombre: "INTRODUCCIÓN A LA ENFERMERÍA CLÍNICA", prerequisitos: ["ENFA054-20", "FISA053-20"] },
                { id: "ENFA065-20", nombre: "BIOESTADÍSTICA", prerequisitos: ["ENFA057-20"] },
                { id: "ENFA066-20", nombre: "SALUD SEXUAL Y REPRODUCTIVA DE LA MUJER", prerequisitos: ["ENFA056-20"] }
            ]
        },
        "Tercero": {
            "Semestre V": [
                { id: "ENFA067-20", nombre: "CUIDADOS DE ENFERMERÍA DE PERSONAS ADULTAS Y MAYORES EN EL PROCESO DE SALUD Y ENFERMEDAD", prerequisitos: ["ENFA061-20", "ENFA064-20"] },
                { id: "ENFA068-20", nombre: "ENFERMEDADES PREVALENTES DE PERSONAS ADULTAS Y MAYORES", prerequisitos: ["ENFA063-20"] },
                { id: "ENFA069-20", nombre: "SALUD LABORAL Y AMBIENTAL", prerequisitos: ["ENFA055-20"] },
                { id: "ENFA070-20", nombre: "MÉTODOS DE INVESTIGACIÓN EN SALUD", prerequisitos: ["ENFA060-20", "ENFA065-20"] },
                { id: "ENFA071-20", nombre: "OPTATIVO DE FORMACIÓN GENERAL I", prerequisitos: [] }
            ],
            "Semestre VI": [
                { id: "ENFA072-20", nombre: "GESTIÓN DEL CUIDADO EN ATENCIÓN HOSPITALARIA DEL ADULTO Y ADULTO MAYOR", prerequisitos: ["ENFA067-20"] },
                { id: "ENFA073-20", nombre: "CUIDADOS DE ENFERMERÍA EN LA NIÑA, EL NIÑO Y ADOLESCENTE CON ALTERACIONES DE SALUD", prerequisitos: ["ENFA061-20"] },
                { id: "ENFA074-20", nombre: "ATENCIÓN DE ENFERMERÍA EN SITUACIÓN DE URGENCIAS Y EMERGENCIAS", prerequisitos: ["ENFA064-20"] },
                { id: "ENFA075-20", nombre: "INTERVENCIONES PREVENTIVAS DE LA ENFERMEDAD EN SALUD", prerequisitos: ["ENFA055-20"] },
                { id: "ENFA076-20", nombre: "OPTATIVO DE FORMACIÓN GENERAL II", prerequisitos: [] }
            ]
        },
        "Cuarto": {
            "Semestre VII": [
                { id: "ENFA077-20", nombre: "CUIDADOS DE ENFERMERÍA DE LA MUJER Y NEONATO", prerequisitos: ["ENFA066-20"] },
                { id: "ENFA078-20", nombre: "GESTIÓN DEL CUIDADO EN ATENCIÓN PRIMARIA DE SALUD", prerequisitos: ["ENFA056-20"] },
                { id: "ENFA079-20", nombre: "ENFERMERÍA EN SALUD MENTAL COMUNITARIA", prerequisitos: ["ENFA062-20"] },
                { id: "ENFA080-20", nombre: "TALLER DE INVESTIGACIÓN", prerequisitos: ["ENFA070-20"] },
                { id: "ENFA081-20", nombre: "ÉTICA EN SALUD", prerequisitos: [] }
            ],
            "Semestre VIII": [
                { id: "ENFA082-20", nombre: "INTERVENCIONES TERAPÉUTICAS EN ENFERMERÍA", prerequisitos: ["ENFA072-20", "ENFA073-20"] },
                { id: "ENFA083-20", nombre: "SALUD EN POBLACIONES VULNERABLES", prerequisitos: ["ENFA075-20"] },
                { id: "ENFA084-20", nombre: "CUIDADO EN ENFERMEDADES CRÓNICAS", prerequisitos: ["ENFA067-20"] },
                { id: "ENFA085-20", nombre: "GESTIÓN DE LA CALIDAD EN SALUD", prerequisitos: ["ENFA072-20"] },
                { id: "ENFA086-20", nombre: "OPTATIVO DE FORMACIÓN GENERAL III", prerequisitos: [] }
            ]
        },
        "Quinto": {
            "Semestre IX": [
                { id: "ENFA087-20", nombre: "INTERNADO DE ENFERMERÍA EN ATENCIÓN PRIMARIA DE SALUD", prerequisitos: ["ENFA078-20"] },
                { id: "ENFA088-20", nombre: "INTERNADO DE ENFERMERÍA EN ATENCIÓN ABIERTA Y CERRADA", prerequisitos: ["ENFA082-20"] },
                { id: "ENFA089-20", nombre: "TRABAJO DE INVESTIGACIÓN I", prerequisitos: ["ENFA080-20"] },
                { id: "ELECT112", nombre: "OPTATIVO DE PROFUNDIZACIÓN I", prerequisitos: [] }
            ],
            "Semestre X": [
                { id: "ENFA090-20", nombre: "INTERNADO DE ENFERMERÍA EN ÁREA CRÍTICA Y URGENCIAS", prerequisitos: ["ENFA074-20", "ENFA082-20"] },
                { id: "ENFA091-20", nombre: "SEMINARIO DE INVESTIGACIÓN", prerequisitos: ["ENFA089-20"] },
                { id: "ENFA092-20", nombre: "FORMACIÓN DE LIDERAZGO", prerequisitos: ["ENFA085-20"] },
                { id: "ELECT116", nombre: "OPTATIVO DE PROFUNDIZACIÓN II", prerequisitos: [] }
            ]
        }
    };

    // Cargar estados guardados o inicializar
    let courseStates = loadCourseStates();

    const mallaGrid = document.getElementById('malla-grid');

    function createCourseElement(curso, estado) {
        const cursoDiv = document.createElement('div');
        cursoDiv.classList.add('curso');
        cursoDiv.classList.add(estado); // Add initial state class

        const h4 = document.createElement('h4');
        h4.textContent = curso.nombre; // Only course name

        const pId = document.createElement('p');
        pId.classList.add('curso-id');
        pId.textContent = `(${curso.id})`; // Only course code in parenthesis

        cursoDiv.appendChild(h4);
        cursoDiv.appendChild(pId);

        // Add note if it exists and is 'locked'
        if (curso.note && estado === 'locked') {
            const noteP = document.createElement('p');
            noteP.classList.add('curso-note');
            noteP.textContent = `Nota: ${curso.note}`;
            cursoDiv.appendChild(noteP);
        }

        // Add click listener only for 'available' or 'completed' courses
        if (estado === 'available' || estado === 'completed') {
            cursoDiv.addEventListener('click', () => {
                toggleCourseState(curso.id);
            });
        }

        return cursoDiv;
    }

    function renderMalla() {
        mallaGrid.innerHTML = ''; // Clear previous content

        for (const anoKey in mallaEnfermeriaUACh) {
            const anoData = mallaEnfermeriaUACh[anoKey];
            const anoContainer = document.createElement('div');
            anoContainer.classList.add('ano-container');

            const anoTitle = document.createElement('h2');
            anoTitle.textContent = `${anoKey} Año`;
            anoContainer.appendChild(anoTitle);

            const semestresAnoDiv = document.createElement('div');
            semestresAnoDiv.classList.add('semestres-ano');

            for (const semestreKey in anoData) {
                const cursosSemestre = anoData[semestreKey];
                const semestreColumna = document.createElement('div');
                semestreColumna.classList.add('semestre-columna');

                const semestreTitle = document.createElement('h3');
                semestreTitle.textContent = semestreKey;
                semestreColumna.appendChild(semestreTitle);

                cursosSemestre.forEach(curso => {
                    // Get the current state from courseStates or default to locked if not found
                    const estado = courseStates[curso.id] || 'locked';
                    const cursoElement = createCourseElement(curso, estado);
                    semestreColumna.appendChild(cursoElement);
                });
                semestresAnoDiv.appendChild(semestreColumna);
            }
            anoContainer.appendChild(semestresAnoDiv);
            mallaGrid.appendChild(anoContainer);
        }
        updateAllCourseStates(); // Ensure all states are correctly updated after rendering
    }

    function updateAllCourseStates() {
        let changed = false;
        // First, check for courses with no prerequisites or those initially 'available'
        for (const anoKey in mallaEnfermeriaUACh) {
            for (const semestreKey in mallaEnfermeriaUACh[anoKey]) {
                mallaEnfermeriaUACh[anoKey][semestreKey].forEach(curso => {
                    if (!courseStates[curso.id]) { // Initialize if not set
                        courseStates[curso.id] = 'locked';
                        changed = true;
                    }
                });
            }
        }

        // Iterate until no more changes are made (to handle chains of prerequisites)
        let anyChangeThisIteration;
        do {
            anyChangeThisIteration = false;
            for (const anoKey in mallaEnfermeriaUACh) {
                for (const semestreKey in mallaEnfermeriaUACh[anoKey]) {
                    mallaEnfermeriaUACh[anoKey][semestreKey].forEach(curso => {
                        if (courseStates[curso.id] !== 'completed') {
                            if (arePrereqsMet(curso)) {
                                if (courseStates[curso.id] !== 'available') {
                                    courseStates[curso.id] = 'available';
                                    anyChangeThisIteration = true;
                                    changed = true;
                                }
                            } else {
                                if (courseStates[curso.id] !== 'locked') {
                                    courseStates[curso.id] = 'locked';
                                    anyChangeThisIteration = true;
                                    changed = true;
                                }
                            }
                        }
                    });
                }
            }
        } while (anyChangeThisIteration);

        if (changed) {
            saveCourseStates(); // Save states only if there was a change
            // Re-render the malla to reflect the state changes and update click listeners
            renderMalla();
        }
    }

    function arePrereqsMet(curso) {
        if (!curso.prerequisitos || curso.prerequisitos.length === 0) {
            return true; // No prerequisites, so they are met
        }
        return curso.prerequisitos.every(prereqId => courseStates[prereqId] === 'completed');
    }

    function toggleCourseState(cursoId) {
        if (courseStates[cursoId] === 'available') {
            courseStates[cursoId] = 'completed';
        } else if (courseStates[cursoId] === 'completed') {
            courseStates[cursoId] = 'available'; // Or 'locked' if you prefer clicking completed to lock it
        }
        saveCourseStates();
        updateAllCourseStates(); // Recalculate states for all courses
    }

    function saveCourseStates() {
        localStorage.setItem('mallaCourseStates', JSON.stringify(courseStates));
    }

    function loadCourseStates() {
        const savedStates = localStorage.getItem('mallaCourseStates');
        return savedStates ? JSON.parse(savedStates) : {};
    }

    // Inicializar y renderizar la malla
    renderMalla(); // Initial render based on loaded states
    updateAllCourseStates(); // First pass to set initial 'available' courses
});
