create table post(
	id smallint,
	nombre_usuario varchar(50),
	fecha_creacion date,
	contenido varchar(200),
	descripcion varchar(100),
	PRIMARY KEY(id)
);
insert into post(id, nombre_usuario, fecha_creacion, contenido, descripcion) values (1, 'Pamela', '2021-07-07', 'Jambi', 'Rey');
insert into post(id, nombre_usuario, fecha_creacion, contenido, descripcion) values (2, 'Carlos', '2021-06-07', 'Nos vemos en un mes', 'Respuesta');
insert into post(id, nombre_usuario, fecha_creacion, contenido, descripcion) values (3, 'Pamela', '2021-05-07', 'Nos vemos en un mes', 'Saludo');

alter table post add titulo varchar(100);

update post set titulo = 'hola' where id = 1;
update post set titulo = 'como estamos?' where id = 2;
update post set titulo = 'chao' where id = 3;

insert into post(id, nombre_usuario, fecha_creacion, contenido, descripcion, titulo) values (4, 'Pedro', '2021-07-08', 'Hay alguien', 'Saludo', 'vivir es sufrir');
insert into post(id, nombre_usuario, fecha_creacion, contenido, descripcion, titulo) values (5, 'Pedro', '2021-07-09', 'no hay nadie :()', 'Despedida', 'me encanta la vida');

delete from post where nombre_usuario = 'Carlos';

insert into post(id, nombre_usuario, fecha_creacion, contenido, descripcion, titulo) values (6, 'Carlos', '2021-05-07', 'me hecharon', 'he volvido', 'no sé que más escribir');

create table comentarios(
	id smallint,
	hora_creacion varchar(15),
	fecha date,
	contenido varchar(200),
	FOREIGN KEY(id) REFERENCES post(id)
);

insert into comentarios (id, hora_creacion, fecha, contenido) values (1, '17:50:45', '2021-07-08', 'Viva');
insert into comentarios (id, hora_creacion, fecha, contenido) values (1, '18:50:01', '2021-07-08', 'Muera');
insert into comentarios (id, hora_creacion, fecha, contenido) values (6, '18:50:01', '2021-05-08', 'Mes');
insert into comentarios (id, hora_creacion, fecha, contenido) values (6, '18:51:03', '2021-06-08', 'Mes');
insert into comentarios (id, hora_creacion, fecha, contenido) values (6, '18:52:04', '2021-07-08', 'Mes');
insert into comentarios (id, hora_creacion, fecha, contenido) values (6, '18:53:05', '2021-08-08', 'Mes');

insert into post(id, nombre_usuario, fecha_creacion, contenido, descripcion, titulo) values (7, 'Margarita', '2022-04-07', 'jaja xd', 'jajaxd', 'jajaxd');

insert into comentarios (id, hora_creacion, fecha, contenido) values (7, '20:50:01', '2022-05-08', 'Año');
insert into comentarios (id, hora_creacion, fecha, contenido) values (7, '21:51:03', '2023-06-08', 'Año');
insert into comentarios (id, hora_creacion, fecha, contenido) values (7, '22:52:04', '2024-07-08', 'Año');
insert into comentarios (id, hora_creacion, fecha, contenido) values (7, '23:53:05', '2025-08-08', 'Año');
insert into comentarios (id, hora_creacion, fecha, contenido) values (7, '00:53:05', '2026-08-08', 'Añó');