//1

primer paso: abrir consola cmd
segundo: cd C:\Program Files\PostgreSQL\13\bin (ingresar en el cmd)
tercero: psql -U postgres desafio3 < c:/Users/Nacho/Desktop/unidad2.sql
(ingresar en el cmd y reemplazar datos correspondientes)

//2

begin;

insert into compra (cliente_id, fecha) values (1, now());
insert into detalle_compra (producto_id, compra_id, cantidad) values(9, (select max(id) from compra), 5);
update producto set stock = (stock - 5) where id = 9;
commit;
select * from producto where id = 9;

//3

begin;

insert into compra (cliente_id, fecha) values (2, now());
insert into detalle_compra (producto_id, compra_id, cantidad) values(1, (select max(id) from compra), 3);
insert into detalle_compra (producto_id, compra_id, cantidad) values(2, (select max(id) from compra), 3);
insert into detalle_compra (producto_id, compra_id, cantidad) values(8, (select max(id) from compra), 3);
update producto set stock = (stock - 3) where id = 1 or id = 2 or id = 8;

commit;

select * from producto where id = 1 or id = 2

//4

begin;
insert into cliente (nombre, email) values ('juanito', 'juanito@juanito.cl');
rollback;
select * from cliente where id = (select max(id) from cliente);

// autocommit en psql = \set autocommit on o off dependiente del caso.