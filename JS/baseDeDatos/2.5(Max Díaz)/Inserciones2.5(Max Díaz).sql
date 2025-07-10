USE ejemplo;
-- Poblar tabla tipo_usuarios
INSERT INTO tipo_usuarios (nombre_tipo, descripcion_tipo) VALUES
('Administrador', 'Acceso completo al sistema'),
('Cliente', 'Usuario con acceso restringido'),
('Moderador', 'Puede revisar y aprobar contenido');

-- Poblar tabla usuarios
INSERT INTO usuarios (username, password, email, id_tipo_usuario) VALUES
('admin01', 'pass1234', 'admin01@mail.com', 1),
('jvaldes', 'abc123', 'jvaldes@mail.com', 2),
('cmorales', '123456', 'cmorales@mail.com', 3),
('anavarro', 'pass4321', 'anavarro@mail.com', 2),
('rquezada', 'clave2023', 'rquezada@mail.com', 1),
('pgodoy', 'segura123', 'pgodoy@mail.com', 2),
('mdiaz', 'token456', 'mdiaz@mail.com', 3),
('scarvajal', 'azul789', 'scarvajal@mail.com', 2),
('ltapia', 'lt123', 'ltapia@mail.com', 3),
('afarias', 'afpass', 'afarias@mail.com', 2);

-- Poblar tabla ciudad
INSERT INTO ciudad (nombre_ciudad, region) VALUES
('Santiago', 'Región Metropolitana'),
('Valparaíso', 'Región de Valparaíso'),
('Concepción', 'Región del Biobío'),
('La Serena', 'Región de Coquimbo'),
('Puerto Montt', 'Región de Los Lagos');

-- Poblar tabla personas (relacionadas con usuarios y ciudades)
INSERT INTO personas (rut, nombre_completo, fecha_nac, id_usuario, id_ciudad) VALUES
('11111111-1', 'Juan Valdés', '1990-04-12', 2, 1),
('22222222-2', 'Camila Morales', '1985-09-25', 3, 2),
('33333333-3', 'Andrea Navarro', '1992-11-03', 4, 3),
('44444444-4', 'Rodrigo Quezada', '1980-06-17', 5, 1),
('55555555-5', 'Patricio Godoy', '1998-12-01', 6, 4),
('66666666-6', 'María Díaz', '1987-07-14', 7, 5),
('77777777-7', 'Sebastián Carvajal', '1993-03-22', 8, 2),
('88888888-8', 'Lorena Tapia', '2000-10-10', 9, 3),
('99999999-9', 'Ana Farías', '1995-01-28', 10, 4),
('10101010-0', 'Carlos Soto', '1991-08-08', 1, 1); -- admin01