// Archivo de lógica de la aplicación para la biblioteca virtual

// Base de datos simulada
let currentUser = null;
let documents = [
    {
        id: 1,
        title: "Gamification: How Gamification Motivates People to Do Extraordinary Things",
        author: "Gabe Zichermann, Christopher Cunningham",
        year: 2023,
        type: "virtual",
        status: "Disponile",
        code: "DOC-001",
        summary: "Como la gamificación motiva a las personas a hacer cosas extraordinarias",
        url: "https://ejemplo.com/javascript"
    },
    {
        id: 2,
        title: "The Gamification of Learning and Instruction: Game-based Methods and Strategies for Training and Education",
        author: "Karl M. Kapp",
        year: 2018,
        type: "físico",
        status: "Disponile",
        code: "DOC-002",
        summary: "Libro sobre la gamificación en el aprendizaje",
        url: null
    },
    {
        id: 3,
        title: "Gamify: How Gamification Can Inspire, Motivate, and Engage Employees, Customers, and the Public",
        author: "Brian Burke",
        year: 2022,
        type: "virtual",
        status: "Disponile",
        code: "DOC-003",
        summary: "Descubre como la gamificación puede inspirar y motivar a empleados, clientes y al público ",
        url: "https://ejemplo.com/python"
    },
    {
        id: 4,
        title: "The Gamification of everything",
        author: "Carlos Ruiz",
        year: 2021,
        type: "físico",
        status: "No disponible",
        code: "DOC-004",
        summary: "Una vista general de todo lo que es gamificación",
        url: null
    },
////////////////
    // ...existing code...
    {
        id: 5,
        title: "Gamificación en la Educación",
        author: "María López",
        year: 2020,
        type: "virtual",
        status: "Disponile",
        code: "DOC-005",
        summary: "Estrategias y ejemplos de gamificación en el aula.",
        url: "https://ejemplo.com/gamificacion-educacion"
    },
    {
        id: 6,
        title: "Diseño de Juegos para el Aprendizaje",
        author: "Pedro Sánchez",
        year: 2019,
        type: "físico",
        status: "Disponile",
        code: "DOC-006",
        summary: "Cómo diseñar juegos efectivos para contextos educativos.",
        url: null
    },
    {
        id: 7,
        title: "Gamification: Concepts and Applications",
        author: "Jane Smith",
        year: 2021,
        type: "virtual",
        status: "Disponile",
        code: "DOC-007",
        summary: "A global overview of gamification in different sectors.",
        url: "https://ejemplo.com/gamification-concepts"
    },
    {
        id: 8,
        title: "Gamificación y Motivación",
        author: "Luis Torres",
        year: 2018,
        type: "físico",
        status: "Disponile",
        code: "DOC-008",
        summary: "El impacto de la gamificación en la motivación estudiantil.",
        url: null
    },
    {
        id: 9,
        title: "Juegos Serios en la Enseñanza",
        author: "Ana Martínez",
        year: 2022,
        type: "virtual",
        status: "Disponile",
        code: "DOC-009",
        summary: "Aplicaciones de juegos serios en la educación superior.",
        url: "https://ejemplo.com/juegos-serios"
    },
    {
        id: 10,
        title: "Gamificación en la Formación Docente",
        author: "Carlos Gómez",
        year: 2020,
        type: "físico",
        status: "Disponile",
        code: "DOC-010",
        summary: "Cómo formar docentes en el uso de la gamificación.",
        url: null
    },
    {
        id: 11,
        title: "Game-Based Learning",
        author: "Emily Johnson",
        year: 2021,
        type: "virtual",
        status: "Disponile",
        code: "DOC-011",
        summary: "Principles and practices of game-based learning.",
        url: "https://ejemplo.com/game-based-learning"
    },
    {
        id: 12,
        title: "Gamificación en la Universidad",
        author: "Javier Ramírez",
        year: 2017,
        type: "físico",
        status: "Disponile",
        code: "DOC-012",
        summary: "Experiencias de gamificación en educación superior.",
        url: null
    },
    {
        id: 13,
        title: "Gamification in Business",
        author: "Michael Brown",
        year: 2020,
        type: "virtual",
        status: "Disponile",
        code: "DOC-013",
        summary: "Using gamification to improve business outcomes.",
        url: "https://ejemplo.com/gamification-business"
    },
    {
        id: 14,
        title: "Gamificación y Aprendizaje Colaborativo",
        author: "Lucía Fernández",
        year: 2019,
        type: "físico",
        status: "Disponile",
        code: "DOC-014",
        summary: "El rol de la gamificación en el aprendizaje colaborativo.",
        url: null
    },
    {
        id: 15,
        title: "Gamification in Online Education",
        author: "Robert Wilson",
        year: 2022,
        type: "virtual",
        status: "Disponile",
        code: "DOC-015",
        summary: "Best practices for gamifying online courses.",
        url: "https://ejemplo.com/gamification-online"
    },
    {
        id: 16,
        title: "Gamificación y Evaluación",
        author: "Sofía Castro",
        year: 2018,
        type: "físico",
        status: "Disponile",
        code: "DOC-016",
        summary: "Nuevas formas de evaluar usando gamificación.",
        url: null
    },
    {
        id: 17,
        title: "Gamification for Teachers",
        author: "Laura Green",
        year: 2021,
        type: "virtual",
        status: "Disponile",
        code: "DOC-017",
        summary: "A practical guide for teachers to implement gamification.",
        url: "https://ejemplo.com/gamification-teachers"
    },
    {
        id: 18,
        title: "Gamificación en Matemáticas",
        author: "Miguel Ángel Ruiz",
        year: 2019,
        type: "físico",
        status: "Disponile",
        code: "DOC-018",
        summary: "Ejemplos de gamificación en la enseñanza de matemáticas.",
        url: null
    },
    {
        id: 19,
        title: "Gamification and Student Engagement",
        author: "Patricia White",
        year: 2020,
        type: "virtual",
        status: "Disponile",
        code: "DOC-019",
        summary: "How gamification increases student engagement.",
        url: "https://ejemplo.com/gamification-engagement"
    },
    {
        id: 20,
        title: "Gamificación en Ciencias Sociales",
        author: "Raúl Herrera",
        year: 2018,
        type: "físico",
        status: "Disponile",
        code: "DOC-020",
        summary: "Aplicaciones de la gamificación en ciencias sociales.",
        url: null
    },
    {
        id: 21,
        title: "Gamification in Higher Education",
        author: "Susan Clark",
        year: 2021,
        type: "virtual",
        status: "Disponile",
        code: "DOC-021",
        summary: "Case studies of gamification in universities.",
        url: "https://ejemplo.com/gamification-highered"
    },
    {
        id: 22,
        title: "Gamificación y Creatividad",
        author: "Isabel Morales",
        year: 2017,
        type: "físico",
        status: "Disponile",
        code: "DOC-022",
        summary: "Fomentando la creatividad a través de la gamificación.",
        url: null
    },
    {
        id: 23,
        title: "Gamification for Corporate Training",
        author: "David Lee",
        year: 2020,
        type: "virtual",
        status: "Disponile",
        code: "DOC-023",
        summary: "Gamification strategies for employee training.",
        url: "https://ejemplo.com/gamification-corporate"
    },
    {
        id: 24,
        title: "Gamificación en la Enseñanza de Idiomas",
        author: "Carmen Pérez",
        year: 2019,
        type: "físico",
        status: "Disponile",
        code: "DOC-024",
        summary: "Cómo gamificar el aprendizaje de idiomas.",
        url: null
    },
    {
        id: 25,
        title: "Gamification and Assessment",
        author: "Thomas Miller",
        year: 2021,
        type: "virtual",
        status: "Disponile",
        code: "DOC-025",
        summary: "Innovative assessment methods using gamification.",
        url: "https://ejemplo.com/gamification-assessment"
    },
    {
        id: 26,
        title: "Gamificación en Educación Infantil",
        author: "Beatriz Sánchez",
        year: 2018,
        type: "físico",
        status: "Disponile",
        code: "DOC-026",
        summary: "Gamificación para niños en edad preescolar.",
        url: null
    },
    {
        id: 27,
        title: "Gamification in Science Education",
        author: "Jessica Adams",
        year: 2022,
        type: "virtual",
        status: "Disponile",
        code: "DOC-027",
        summary: "Gamification techniques for science classes.",
        url: "https://ejemplo.com/gamification-science"
    },
    {
        id: 28,
        title: "Gamificación y Tecnología",
        author: "Fernando Díaz",
        year: 2019,
        type: "físico",
        status: "Disponile",
        code: "DOC-028",
        summary: "El papel de la tecnología en la gamificación educativa.",
        url: null
    },
    {
        id: 29,
        title: "Gamification for Adult Learners",
        author: "Nancy Evans",
        year: 2020,
        type: "virtual",
        status: "Disponile",
        code: "DOC-029",
        summary: "Adapting gamification for adult education.",
        url: "https://ejemplo.com/gamification-adults"
    },
    {
        id: 30,
        title: "Gamificación en la Enseñanza de Historia",
        author: "Jorge Castillo",
        year: 2018,
        type: "físico",
        status: "Disponile",
        code: "DOC-030",
        summary: "Cómo gamificar la enseñanza de la historia.",
        url: null
    },
    {
        id: 31,
        title: "Gamification and Digital Badges",
        author: "Olivia Harris",
        year: 2021,
        type: "virtual",
        status: "Disponile",
        code: "DOC-031",
        summary: "Using digital badges as gamification tools.",
        url: "https://ejemplo.com/gamification-badges"
    },
    {
        id: 32,
        title: "Gamificación y Aprendizaje Autónomo",
        author: "Paula Navarro",
        year: 2019,
        type: "físico",
        status: "Disponile",
        code: "DOC-032",
        summary: "Fomentando el aprendizaje autónomo con gamificación.",
        url: null
    },
    {
        id: 33,
        title: "Gamification in Mobile Learning",
        author: "Steven King",
        year: 2022,
        type: "virtual",
        status: "Disponile",
        code: "DOC-033",
        summary: "Mobile apps and gamification for learning.",
        url: "https://ejemplo.com/gamification-mobile"
    },
    {
        id: 34,
        title: "Gamificación en la Enseñanza de Ciencias",
        author: "Andrea Molina",
        year: 2018,
        type: "físico",
        status: "Disponile",
        code: "DOC-034",
        summary: "Ejemplos prácticos de gamificación en ciencias.",
        url: null
    }
// ...existing code...

/////////////////////
];

let users = [
    { id: 1, name: "Administrador", userType: "admin", email: "admin@biblioteca.com", username: "admin", password: "123456" },
    { id: 2, name: "Usuario Regular", userType: "user", email: "user1@biblioteca.com", username: "user1", password: "123456" }
];

let transactions = [];

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        currentUser = user;
        document.getElementById('navbar').style.display = 'block';
        
        if (user.userType === 'admin') {
            document.getElementById('adminBtn').style.display = 'inline-block';
        }
        
        showScreen('searchScreen');
        loadAllDocuments();
    } else {
        alert('❌ Usuario o contraseña incorrectos');
    }
}

function logout() {
    currentUser = null;
    document.getElementById('navbar').style.display = 'none';
    document.getElementById('adminBtn').style.display = 'none';
    showScreen('loginScreen');
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function loadAllDocuments() {
    displayDocuments(documents);
}

function searchDocuments() {
    const title = document.getElementById('searchTitle').value.toLowerCase();
    const author = document.getElementById('searchAuthor').value.toLowerCase();
    const year = document.getElementById('searchYear').value;
    const type = document.getElementById('searchType').value;
    
    let filtered = documents.filter(doc => {
        return (!title || doc.title.toLowerCase().includes(title)) &&
               (!author || doc.author.toLowerCase().includes(author)) &&
               (!year || doc.year.toString() === year) &&
               (!type || doc.type === type);
    });
    
    displayDocuments(filtered);
}

function clearSearch() {
    document.getElementById('searchTitle').value = '';
    document.getElementById('searchAuthor').value = '';
    document.getElementById('searchYear').value = '';
    document.getElementById('searchType').value = '';
    loadAllDocuments();
}

function displayDocuments(docs) {
    const container = document.getElementById('searchResults');
    
    if (docs.length === 0) {
        container.innerHTML = '<div style="text-align: center; padding: 40px; color: #718096;">📭 No se encontraron documentos</div>';
        return;
    }
    
    container.innerHTML = docs.map(doc => `
        <div class="document-card">
            <div class="document-title">${doc.title}</div>
            <div class="document-author">👤 ${doc.author} • 📅 ${doc.year}</div>
            <div class="document-type type-${doc.type}">${doc.type.toUpperCase()}</div>
            <div class="status-${doc.status.toLowerCase().replace(' ', '')}">${doc.status}</div>
            <button class="btn" onclick="showDocumentDetail(${doc.id})" style="margin-top: 10px;">👁️ Ver Detalle</button>
        </div>
    `).join('');
}

function showDocumentDetail(docId) {
    const doc = documents.find(d => d.id === docId);
    let content = `
        <h2>${doc.title}</h2>
        <p><strong>👤 Autor:</strong> ${doc.author}</p>
        <p><strong>📅 Año:</strong> ${doc.year}</p>
        <p><strong>🏷️ Tipo:</strong> ${doc.type}</p>
        <p><strong>📋 Resumen:</strong> ${doc.summary}</p>
    `;
    
    if (doc.type === 'virtual') {
        content += `
            <p><strong>🔗 Estado:</strong> ${doc.status}</p>
            <button class="btn" onclick="openVirtualDocument('${doc.url}')">🔗 Abrir Documento</button>
        `;
    } else {
        content += `
            <p><strong>📍 Estado:</strong> <span class="status-${doc.status.toLowerCase().replace(' ', '')}">${doc.status}</span></p>
            <p><strong>🏷️ Código:</strong> ${doc.code}</p>
        `;
        
        if (doc.status === 'Disponile') {
            content += `<button class="btn" onclick="requestLoan('${doc.code}')">📚 Solicitar Préstamo</button>`;
        } else {
            content += `<p style="color: #742a2a;">❌ Documento no disponible para préstamo</p>`;
        }
    }
    
    document.getElementById('modalContent').innerHTML = content;
    document.getElementById('detailModal').classList.add('active');
}

function openVirtualDocument(url) {
    alert('🔗 Próximamente: Redirección a documento virtual\nURL: ' + url);
}

function requestLoan(code) {
    const doc = documents.find(d => d.code === code);
    
    if (doc.status === 'No disponible') {
        alert('❌ Error: El documento no está disponible para préstamo');
        return;
    }
    
    // Simular préstamo
    doc.status = 'No disponible';
    
    // Registrar transacción
    const newTransaction = {
        id: transactions.length + 1,
        documentCode: code,
        userId: currentUser.id,
        loanDate: new Date().toISOString().split('T')[0],
        returnDate: null,
        status: 'loaned'
    };
    
    transactions.push(newTransaction);
    
    alert('✅ Préstamo realizado exitosamente\n📚 Documento: ' + doc.title + '\n🏷️ Código: ' + code);
    closeModal();
    loadAllDocuments();
}

function returnDocument() {
    const code = document.getElementById('returnCode').value.trim();
    const alertDiv = document.getElementById('returnAlert');
    
    if (!code) {
        alertDiv.innerHTML = '<div class="alert alert-error">❌ Por favor ingrese el código del documento</div>';
        return;
    }
    
    const doc = documents.find(d => d.code === code);
    const transaction = transactions.find(t => t.documentCode === code && t.status === 'loaned');
    
    if (!doc) {
        alertDiv.innerHTML = '<div class="alert alert-error">❌ Código de documento no encontrado</div>';
        return;
    }
    
    if (!transaction) {
        alertDiv.innerHTML = '<div class="alert alert-error">❌ No hay préstamos activos para este documento</div>';
        return;
    }
    
    if (confirm('¿Confirma la devolución del documento "' + doc.title + '"?')) {
        doc.status = 'Disponile';
        transaction.returnDate = new Date().toISOString().split('T')[0];
        transaction.status = 'returned';
        
        alertDiv.innerHTML = '<div class="alert alert-success">✅ Documento devuelto exitosamente</div>';
        document.getElementById('returnCode').value = '';
    }
}

function showTransactions() {
    const content = `
        <h3>📊 Registro de Transacciones</h3>
        <table class="transaction-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Código Doc</th>
                    <th>Usuario</th>
                    <th>Fecha Préstamo</th>
                    <th>Fecha Devolución</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                ${transactions.map(t => {
                    const user = users.find(u => u.id === t.userId);
                    return `
                        <tr>
                            <td>${t.id}</td>
                            <td>${t.documentCode}</td>
                            <td>${user ? user.name : 'N/A'}</td>
                            <td>${t.loanDate}</td>
                            <td>${t.returnDate || 'Pendiente'}</td>
                            <td>${t.status}</td>
                        </tr>
                    `;
                }).join('')}
            </tbody>
        </table>
    `;
    
    document.getElementById('adminContent').innerHTML = content;
}

function closeModal() {
    document.getElementById('detailModal').classList.remove('active');
}

// Inicializar
document.addEventListener('DOMContentLoaded', function() {
    showScreen('loginScreen');
});