-- Base de datos para Biblioteca Virtual - Gamificación en la Educación
-- Creado para MySQL/MariaDB

-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS biblioteca_virtual_gamificacion;
USE biblioteca_virtual_gamificacion;

-- Tabla de idiomas
CREATE TABLE idiomas (
    id_idioma INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL UNIQUE,
    codigo VARCHAR(5) NOT NULL UNIQUE
);

-- Tabla de tipos de documento
CREATE TABLE tipos_documento (
    id_tipo INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL UNIQUE,
    descripcion TEXT
);

-- Tabla de medios
CREATE TABLE medios (
    id_medio INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL UNIQUE,
    descripcion TEXT
);

-- Tabla de autores
CREATE TABLE autores (
    id_autor INT PRIMARY KEY AUTO_INCREMENT,
    nombre_completo TEXT NOT NULL,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla principal de documentos
CREATE TABLE documentos (
    id_documento INT PRIMARY KEY AUTO_INCREMENT,
    codigo VARCHAR(20) NOT NULL UNIQUE,
    titulo TEXT NOT NULL,
    id_autor INT,
    año INT,
    id_idioma INT,
    id_tipo_documento INT,
    enlace TEXT,
    id_medio INT,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    estado ENUM('disponible', 'no_disponible', 'en_revision') DEFAULT 'disponible',
    descargas INT DEFAULT 0,
    visualizaciones INT DEFAULT 0,
    FOREIGN KEY (id_autor) REFERENCES autores(id_autor),
    FOREIGN KEY (id_idioma) REFERENCES idiomas(id_idioma),
    FOREIGN KEY (id_tipo_documento) REFERENCES tipos_documento(id_tipo),
    FOREIGN KEY (id_medio) REFERENCES medios(id_medio)
);

-- Tabla de palabras clave/tags
CREATE TABLE palabras_clave (
    id_palabra_clave INT PRIMARY KEY AUTO_INCREMENT,
    palabra VARCHAR(100) NOT NULL UNIQUE
);

-- Tabla de relación documento-palabras clave
CREATE TABLE documento_palabras_clave (
    id_documento INT,
    id_palabra_clave INT,
    PRIMARY KEY (id_documento, id_palabra_clave),
    FOREIGN KEY (id_documento) REFERENCES documentos(id_documento) ON DELETE CASCADE,
    FOREIGN KEY (id_palabra_clave) REFERENCES palabras_clave(id_palabra_clave) ON DELETE CASCADE
);

-- Tabla de usuarios de la biblioteca
CREATE TABLE usuarios (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    tipo_usuario ENUM('estudiante', 'docente', 'investigador', 'administrador') DEFAULT 'estudiante',
    institucion VARCHAR(200),
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    estado ENUM('activo', 'inactivo') DEFAULT 'activo'
);

-- Tabla de historial de acceso
CREATE TABLE historial_acceso (
    id_acceso INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT,
    id_documento INT,
    fecha_acceso TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    tipo_acceso ENUM('visualizacion', 'descarga') NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (id_documento) REFERENCES documentos(id_documento)
);

-- Insertar datos de ejemplo

-- Idiomas
INSERT INTO idiomas (nombre, codigo) VALUES
('Español', 'ES'),
('Inglés', 'EN'),
('Portugués', 'PT'),
('Francés', 'FR');

-- Tipos de documento
INSERT INTO tipos_documento (nombre, descripcion) VALUES
('Artículo de investigación', 'Artículos científicos y de investigación'),
('Tesis', 'Trabajos de grado y posgrado'),
('Artículo', 'Artículos generales y de revisión'),
('Artículo de revista', 'Artículos publicados en revistas especializadas'),
('Libro', 'Libros completos y manuales');

-- Medios
INSERT INTO medios (nombre, descripcion) VALUES
('Virtual', 'Recurso disponible en línea'),
('Físico', 'Recurso físico en biblioteca');

-- Autores
INSERT INTO autores (nombre_completo) VALUES
('Ángela Monserrate - Franco Segovia'),
('Salinas Hurtado, Maribel del Carmen'),
('Mg. Gabriela Elizabeth Peñafiel Romero, Mg. Karina Mariela Cedeño Díaz, Mg. Jason Christopher Bravo Criollo, Mg. Ericka Andrea Arévalo Llerena, Ing. Gerardo Efraín Cárdenas Ochoa, Lic. Billy Rafael Rivas Reyes'),
('KMM Álvarez'),
('Grisel Consuelo Medina Medina'),
('Jonathan Javier Castellano Valverde, Luis Patricio Duta Toapanta, Dorys Patricia Andrango Analuisa'),
('Blanca M. Sánchez-Arévalo, Javier Valenciano-Valcárcel, Raquel Fernández-Cézar'),
('David Alejandro Alvarez Flores'),
('Galati University Press');

-- Documentos principales (basados en tus datos)
INSERT INTO documentos (codigo, titulo, id_autor, año, id_idioma, id_tipo_documento, enlace, id_medio) VALUES
('GAM-DV-001', 'Importancia de la gamificación en el proceso de enseñanza-aprendizaje', 1, 2023, 1, 1, 'https://dialnet.unirioja.es/servlet/articulo?codigo=9152386', 1),
('GAM-DV-002', 'Aplicación de la gamificación en el desarrollo de las competencias en estudiantes de la Institución Educativa Daniel Alomía Robles – 2023', 2, 2024, 1, 2, 'https://hdl.handle.net/20.500.12727/14632', 1),
('GAM-DV-003', 'La gamificación en la educación: beneficios, limitaciones y mejores prácticas', 3, 2024, 1, 3, 'https://revista.gnerando.org/revista/index.php/RCMG/article/view/371/369', 1),
('GAM-DV-004', 'Gamificación como estrategia educativa significativa para el aprendizaje', 4, 2024, 1, 3, 'https://dialnet.unirioja.es/descarga/articulo/9769752.pdf', 1),
('GAM-DV-005', 'Beneficios de la gamificacion como opcion estrategica didactica para mejorar el clima del aula universitaria', 5, 2025, 1, 3, 'https://ojs.cepies.umsa.bo/RCV/article/view/179', 1),
('GAM-DV-006', 'Gamificación en el Aula Estrategias para Mejorar el Aprendizaje', 6, 2025, 1, 4, 'https://doi.org/10.61384/r.c.a..v5i1.1074', 1),
('GAM-DV-007', 'Análisis sobre el uso de la gamificación en matemáticas en educación primaria: una revisión de la literatura', 7, 2025, 1, 3, 'https://doi.org/10.17583/redimat.16133', 1),
('GAM-DV-008', 'La Gamificación en la Educación Física: Revisión Sistemática', 8, 2024, 1, 3, 'https://doi.org/10.56200/mried.v3i7.6800', 1),
('GAM-DV-009', 'Gamification – An Innovative Teaching Method', 9, 2021, 2, 5, 'https://ec.europa.eu/programmes/erasmus-plus/project-result-content/63bd8c6a-86c0-4a75-9196-7ac990770101/Gamification_book%20Gamest.pdf', 1);

-- Documentos físicos (estructura para completar)
INSERT INTO documentos (codigo, titulo, id_autor, año, id_idioma, id_tipo_documento, enlace, id_medio) VALUES
('GAM-DF-001', 'Documento Físico 1 - Gamificación', NULL, NULL, NULL, NULL, NULL, 2),
('GAM-DF-002', 'Documento Físico 2 - Gamificación', NULL, NULL, NULL, NULL, NULL, 2),
('GAM-DF-003', 'Documento Físico 3 - Gamificación', NULL, NULL, NULL, NULL, NULL, 2),
('GAM-DF-004', 'Documento Físico 4 - Gamificación', NULL, NULL, NULL, NULL, NULL, 2),
('GAM-DF-005', 'Documento Físico 5 - Gamificación', NULL, NULL, NULL, NULL, NULL, 2),
('GAM-DF-006', 'Documento Físico 6 - Gamificación', NULL, NULL, NULL, NULL, NULL, 2),
('GAM-DF-007', 'Documento Físico 7 - Gamificación', NULL, NULL, NULL, NULL, NULL, 2),
('GAM-DF-008', 'Documento Físico 8 - Gamificación', NULL, NULL, NULL, NULL, NULL, 2),
('GAM-DF-009', 'Documento Físico 9 - Gamificación', NULL, NULL, NULL, NULL, NULL, 2),
('GAM-DF-010', 'Documento Físico 10 - Gamificación', NULL, NULL, NULL, NULL, NULL, 2);

-- Palabras clave relacionadas con gamificación
INSERT INTO palabras_clave (palabra) VALUES
('gamificación'),
('educación'),
('enseñanza-aprendizaje'),
('estrategias educativas'),
('competencias'),
('matemáticas'),
('educación física'),
('educación primaria'),
('aula universitaria'),
('metodología innovadora');

-- Relaciones documento-palabras clave (ejemplo)
INSERT INTO documento_palabras_clave (id_documento, id_palabra_clave) VALUES
(1, 1), (1, 2), (1, 3),
(2, 1), (2, 4), (2, 5),
(3, 1), (3, 2),
(4, 1), (4, 4),
(5, 1), (5, 9),
(6, 1), (6, 4),
(7, 1), (7, 7), (7, 8),
(8, 1), (8, 8),
(9, 1), (9, 10);

-- Usuarios de ejemplo
INSERT INTO usuarios (nombre, apellido, email, tipo_usuario, institucion) VALUES
('María', 'García', 'maria.garcia@universidad.edu', 'docente', 'Universidad Nacional'),
('Carlos', 'López', 'carlos.lopez@estudiante.edu', 'estudiante', 'Universidad Tecnológica'),
('Ana', 'Rodríguez', 'ana.rodriguez@investigacion.org', 'investigador', 'Centro de Investigación Educativa'),
('Admin', 'Sistema', 'admin@biblioteca.edu', 'administrador', 'Biblioteca Virtual');

-- Consultas útiles para la biblioteca virtual

-- Vista de documentos con toda la información
CREATE VIEW vista_documentos_completa AS
SELECT 
    d.codigo,
    d.titulo,
    a.nombre_completo AS autor,
    d.año,
    i.nombre AS idioma,
    td.nombre AS tipo_documento,
    d.enlace,
    m.nombre AS medio,
    d.descargas,
    d.visualizaciones,
    d.fecha_registro
FROM documentos d
LEFT JOIN autores a ON d.id_autor = a.id_autor
LEFT JOIN idiomas i ON d.id_idioma = i.id_idioma
LEFT JOIN tipos_documento td ON d.id_tipo_documento = td.id_tipo
LEFT JOIN medios m ON d.id_medio = m.id_medio
WHERE d.estado = 'disponible';

-- Consulta: Documentos más populares
SELECT 
    codigo,
    titulo,
    descargas,
    visualizaciones,
    (descargas + visualizaciones) AS popularidad_total
FROM vista_documentos_completa
ORDER BY popularidad_total DESC
LIMIT 10;

-- Consulta: Documentos por año
SELECT 
    año,
    COUNT(*) as cantidad_documentos,
    tipo_documento
FROM vista_documentos_completa
WHERE año IS NOT NULL
GROUP BY año, tipo_documento
ORDER BY año DESC;

-- Consulta: Documentos virtuales con enlaces activos
SELECT 
    codigo,
    titulo,
    autor,
    enlace
FROM vista_documentos_completa
WHERE medio = 'Virtual' AND enlace IS NOT NULL;

-- Procedimiento para registrar acceso a documento
DELIMITER //
CREATE PROCEDURE RegistrarAcceso(
    IN p_id_usuario INT,
    IN p_id_documento INT,
    IN p_tipo_acceso ENUM('visualizacion', 'descarga')
)
BEGIN
    -- Insertar en historial
    INSERT INTO historial_acceso (id_usuario, id_documento, tipo_acceso)
    VALUES (p_id_usuario, p_id_documento, p_tipo_acceso);
    
    -- Actualizar contador en documento
    IF p_tipo_acceso = 'descarga' THEN
        UPDATE documentos SET descargas = descargas + 1 WHERE id_documento = p_id_documento;
    ELSE
        UPDATE documentos SET visualizaciones = visualizaciones + 1 WHERE id_documento = p_id_documento;
    END IF;
END //
DELIMITER ;

-- Índices para mejorar rendimiento
CREATE INDEX idx_documentos_codigo ON documentos(codigo);
CREATE INDEX idx_documentos_año ON documentos(año);
CREATE INDEX idx_documentos_titulo ON documentos(titulo(100));
CREATE INDEX idx_historial_fecha ON historial_acceso(fecha_acceso);
CREATE INDEX idx_usuarios_email ON usuarios(email);