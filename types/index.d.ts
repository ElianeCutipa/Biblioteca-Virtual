// Este archivo define las interfaces y tipos utilizados en la aplicación.

interface Document {
    id: number;
    titulo: string;
    autor: string;
    año: number;
    tipo: 'virtual' | 'físico';
    estado: 'Disponible' | 'No disponible';
    codigo: string;
    resumen: string;
    url?: string; // Solo para documentos virtuales
}

interface User {
    id: number;
    nombre: string;
    tipo_usuario: 'admin' | 'usuario';
    correo: string;
    username: string;
    password: string;
}

interface Transaction {
    id_transaccion: number;
    codigo_documento: string;
    id_usuario: number;
    fecha_prestamo: string;
    fecha_devolucion?: string;
    estado: 'prestado' | 'devuelto';
}