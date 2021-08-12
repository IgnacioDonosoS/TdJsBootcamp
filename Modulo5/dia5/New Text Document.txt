//1
create database blog;
//2
create table usuario (usuario_id smallint, email varchar(50)) primary key(usuario_id);
create table post (post_id smallint, usuario_id smallint, titulo varchar(50), fecha date) primary key(post_id) foreign key ;
create table comentario (comentario_id smallint, usuario_id smallint, post_id smallint, texto varchar(50), fecha date) primary key comentario;
//3

insert into usuario(usuario_id, email) values (1,'usuario01@hotmail.com');
insert into usuario(usuario_id, email) values (2,'usuario02@gmail.com');
insert into usuario(usuario_id, email) values (3,'usuario03@gmail.com');
insert into usuario(usuario_id, email) values (4,'usuario04@hotmail.com');
insert into usuario(usuario_id, email) values (5,'usuario05@yahoo.com');
insert into usuario(usuario_id, email) values (6,'usuario06@hotmail.com');
insert into usuario(usuario_id, email) values (7,'usuario07@yahoo.com');
insert into usuario(usuario_id, email) values (8,'usuario08@yahoo.com');
insert into usuario(usuario_id, email) values (9,'usuario09@yahoo.com');



insert into post(post_id, usuario_id , titulo , fecha) values (1,1,'Post 1: Esto es malo','2020-06-29');
insert into post(post_id, usuario_id , titulo , fecha) values (2,5,'Post 2: Esto es malo','2020-06-20');
insert into post(post_id, usuario_id , titulo , fecha) values (3,1,'Post 3: Esto es excelente','2020-05-30');
insert into post(post_id, usuario_id , titulo , fecha) values (4,9,'Post 4: Esto es bueno','2020-05-09');
insert into post(post_id, usuario_id , titulo , fecha) values (5,7,'Post 5: Esto es bueno','2020-07-10');
insert into post(post_id, usuario_id , titulo , fecha) values (6,5,'Post 6: Esto es excelente','2020-07-18');
insert into post(post_id, usuario_id , titulo , fecha) values (7,8,'Post 7: Esto es excelente','2020-07-07');
insert into post(post_id, usuario_id , titulo , fecha) values (8, 5, 'Post 8: Esto es excelente','2020-05-14');
insert into post(post_id, usuario_id , titulo , fecha) values (9, 2, 'Post 9: Esto es bueno','2020-05-08');
insert into post(post_id, usuario_id , titulo , fecha) values (10, 6, 'Post 10: Esto es bueno','2020-06-02');
insert into post(post_id, usuario_id , titulo , fecha) values (11, 4, 'Post 11: Esto es bueno','2020-05-05');
insert into post(post_id, usuario_id , titulo , fecha) values (12, 9, 'Post 12: Esto es malo','2020-07-23');
insert into post(post_id, usuario_id , titulo , fecha) values (13, 5, 'Post 13: Esto es excelente','2020-05-30');
insert into post(post_id, usuario_id , titulo , fecha) values (14, 8, 'Post 14: Esto es excelente','2020-05-01');
insert into post(post_id, usuario_id , titulo , fecha) values (15, 7, 'Post 15: Esto es malo','2020-06-17');



insert into comentario (comentario_id, usuario_id , post_id , texto , fecha) values (1, 3, 6, 'Este es el comentario 1', '2020-07-08');
insert into comentario (comentario_id, usuario_id , post_id , texto , fecha) values (2, 4, 2, 'Este es el comentario 2', '2020-06-07');
insert into comentario (comentario_id, usuario_id , post_id , texto , fecha) values (3, 6, 4, 'Este es el comentario 3', '2020-06-16');
insert into comentario (comentario_id, usuario_id , post_id , texto , fecha) values (4, 2, 13, 'Este es el comentario 4', '2020-06-15');
insert into comentario (comentario_id, usuario_id , post_id , texto , fecha) values (5, 6, 6, 'Este es el comentario 5', '2020-05-14');
insert into comentario (comentario_id, usuario_id , post_id , texto , fecha) values (6, 3, 3, 'Este es el comentario 6', '2020-07-08');
insert into comentario (comentario_id, usuario_id , post_id , texto , fecha) values (7, 6, 1, 'Este es el comentario 7', '2020-05-22');
insert into comentario (comentario_id, usuario_id , post_id , texto , fecha) values (8, 6, 7, 'Este es el comentario 8', '2020-07-09');
insert into comentario (comentario_id, usuario_id , post_id , texto , fecha) values (9, 8, 13, 'Este es el comentario 9', '2020-06-30');
insert into comentario (comentario_id, usuario_id , post_id , texto , fecha) values (10, 8, 6, 'Este es el comentario 10', '2020-06-19');
insert into comentario (comentario_id, usuario_id , post_id , texto , fecha) values (11, 5, 1, 'Este es el comentario 11', '2020-05-09');
insert into comentario (comentario_id, usuario_id , post_id , texto , fecha) values (12, 8, 15, 'Este es el comentario 12', '2020-06-17');
insert into comentario (comentario_id, usuario_id , post_id , texto , fecha) values (13, 1, 9, 'Este es el comentario 13', '2020-05-01');
insert into comentario (comentario_id, usuario_id , post_id , texto , fecha) values (14, 2, 5, 'Este es el comentario 14', '2020-05-31');
insert into comentario (comentario_id, usuario_id , post_id , texto , fecha) values (15, 4, 3, 'Este es el comentario 15', '2020-06-28');

//4

select email, post_id, titulo from usuario join post using(usuario_id) where usuario.usuario_id = 5;

//5

select email, comentario_id, texto from usuario join comentario using(usuario_id) 
where usuario.email <> 'usuario06@hotmail.com';

//6

select usuario_id, email from usuario left join post using(usuario_id) 
where usuario.usuario_id not in (select usuario_id from post);

//7

select * from comentario full outer join post using (post_id)

//8

select distinct(usuario_id), email from usuario join post using(usuario_id)
WHERE post.fecha BETWEEN '06/01/2020' AND '06/30/2020';