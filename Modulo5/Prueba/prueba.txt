--crear db--
create database biblioteca;

--crear tablas--

CREATE TABLE IF NOT EXISTS Libros (
  ISBN VARCHAR(15) NOT NULL,
  Título VARCHAR(45) NOT NULL,
  Páginas INT NOT NULL,
  Dias_Prestamo INT NOT NULL,
  PRIMARY KEY (ISBN));

CREATE TABLE IF NOT EXISTS Socios (
  Rut VARCHAR(12) NOT NULL,
  Nombre VARCHAR(45) NOT NULL,
  Apellido VARCHAR(45) NOT NULL,
  Dirección VARCHAR(45) NOT NULL,
  Telefono VARCHAR(15) NOT NULL,
  PRIMARY KEY (Rut));

CREATE TABLE IF NOT EXISTS Autores (
  Id INT NOT NULL,
  Nombre VARCHAR(45) NOT NULL,
  Apellido VARCHAR(45) NOT NULL,
  Año_nacimiento SMALLINT NOT NULL,
  Año_muerte SMALLINT NULL,
  PRIMARY KEY (Id));

CREATE TABLE IF NOT EXISTS AutorLibro (
  Libros_ISBN VARCHAR(15) NOT NULL,
  Autores_Id INT NOT NULL,
  Tipo_Autor VARCHAR(15) NOT NULL,
  PRIMARY KEY (Libros_ISBN, Autores_Id),
  CONSTRAINT fk_Libros_has_Autores_Libros
    FOREIGN KEY (Libros_ISBN)
    REFERENCES Libros (ISBN)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_Libros_has_Autores_Autores1
    FOREIGN KEY (Autores_Id)
    REFERENCES Autores (Id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE IF NOT EXISTS Historial_prestamo (
  Libros_ISBN VARCHAR(15) NOT NULL,
  Socios_Rut VARCHAR(12) NOT NULL,
  Fecha_prestamo DATE NULL,
  Fecha_devolucion DATE NULL,
  PRIMARY KEY (Libros_ISBN, Socios_Rut),
  CONSTRAINT fk_Libros_has_Socios_Libros1
    FOREIGN KEY (Libros_ISBN)
    REFERENCES Libros (ISBN)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_Libros_has_Socios_Socios1
    FOREIGN KEY (Socios_Rut)
    REFERENCES Socios (Rut)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

--insertar campos--

INSERT INTO autores (id, nombre, apellido, año_nacimiento) VALUES (1, 'Andrés', 'Ullua', 1982);
INSERT INTO autores (id, nombre, apellido, año_nacimiento, año_muerte) VALUES (2, 'Sergio', 'Mardones', 1950, 2012);
INSERT INTO autores (id, nombre, apellido, año_nacimiento, año_muerte) VALUES (3, 'Jose', 'Salgado', 1968, 2020);
INSERT INTO autores (id, nombre, apellido, año_nacimiento) VALUES (4, 'Ana', 'Salgado', 1972);
INSERT INTO autores (id, nombre, apellido, año_nacimiento) VALUES (5, 'Martin', 'Porta', 1976);



INSERT INTO socios (rut, nombre, apellido, dirección, telefono) VALUES ('1111111-1', 'Juan', 'Soto', 'Avenida 1, Santiago', '911111111');
INSERT INTO socios (rut, nombre, apellido, dirección, telefono) VALUES ('2222222-2', 'Ana', 'Pérez', 'Pasaje 2, Santiago', '922222222');
INSERT INTO socios (rut, nombre, apellido, dirección, telefono) VALUES ('3333333-3', 'Sandra', 'Aguilar', 'Avenida 3, Santiago', '933333333');
INSERT INTO socios (rut, nombre, apellido, dirección, telefono) VALUES ('4444444-4', 'Esteban', 'Jerez', 'Avenida 3, Santiago', '944444444');
INSERT INTO socios (rut, nombre, apellido, dirección, telefono) VALUES ('5555555-5', 'Silvana', 'Muñoz', 'Pasaje 3, Santiago', '955555555');



INSERT INTO libros (isbn, título, páginas, dias_prestamo) VALUES ('111-1111111-111', 'Cuentos de Terror', 344, 7);
INSERT INTO libros (isbn, título, páginas, dias_prestamo) VALUES ('222-2222222-222', 'Poesías Contemporaneas', 167, 7);
INSERT INTO libros (isbn, título, páginas, dias_prestamo) VALUES ('333-3333333-333', 'Historia de Asia', 511, 14);
INSERT INTO libros (isbn, título, páginas, dias_prestamo) VALUES ('444-4444444-444', 'Manual de Mecánica', 298, 14);



INSERT INTO autorlibro (libros_isbn, autores_id, tipo_autor) VALUES ('111-1111111-111', 3, 'Principal');
INSERT INTO autorlibro (libros_isbn, autores_id, tipo_autor) VALUES ('111-1111111-111', 4, 'Coautor');
INSERT INTO autorlibro (libros_isbn, autores_id, tipo_autor) VALUES ('222-2222222-222', 1, 'Principal');
INSERT INTO autorlibro (libros_isbn, autores_id, tipo_autor) VALUES ('333-3333333-333', 2, 'Principal');
INSERT INTO autorlibro (libros_isbn, autores_id, tipo_autor) VALUES ('444-4444444-444', 5, 'Principal');



INSERT INTO historial_prestamo (libros_isbn, socios_rut, fecha_prestamo, fecha_devolucion) VALUES ('111-1111111-111', '1111111-1', '2020-01-20', '2020-01-27');
INSERT INTO historial_prestamo (libros_isbn, socios_rut, fecha_prestamo, fecha_devolucion) VALUES ('222-2222222-222', '5555555-5', '2020-01-20', '2020-01-30');
INSERT INTO historial_prestamo (libros_isbn, socios_rut, fecha_prestamo, fecha_devolucion) VALUES ('333-3333333-333', '3333333-3', '2020-01-22', '2020-01-30');
INSERT INTO historial_prestamo (libros_isbn, socios_rut, fecha_prestamo, fecha_devolucion) VALUES ('444-4444444-444', '4444444-4', '2020-01-23', '2020-01-30');
INSERT INTO historial_prestamo (libros_isbn, socios_rut, fecha_prestamo, fecha_devolucion) VALUES ('111-1111111-111', '2222222-2', '2020-01-27', '2020-02-04');
INSERT INTO historial_prestamo (libros_isbn, socios_rut, fecha_prestamo, fecha_devolucion) VALUES ('444-4444444-444', '1111111-1', '2020-01-31', '2020-02-12');
INSERT INTO historial_prestamo (libros_isbn, socios_rut, fecha_prestamo, fecha_devolucion) VALUES ('222-2222222-222', '3333333-3', '2020-01-31', '2020-02-12');

--querys--

--1--
select * from libros where páginas >= 300;

--2--
select * from autores where año_nacimiento >= 1970;

--3--
select título, count(libros_isbn) from historial_prestamo h join libros l on h.libros_isbn = l.isbn  
group by l.título
having count(libros_isbn) = (select count(libros_isbn) maximo from historial_prestamo group by libros_isbn order by maximo desc limit 1);

--4--
select concat(s.nombre,' ', s.apellido) as nombre_completo, (l.dias_prestamo - (h.fecha_devolucion - h.fecha_prestamo)) * 100 as total_debido
from socios s join historial_prestamo h on s.rut = h.socios_rut
join libros l on l.isbn = h.libros_isbn 
where (l.dias_prestamo - (h.fecha_devolucion - h.fecha_prestamo)) > 0;