SELECT * FROM "kanto" WHERE pokedex > 50;
select * from "kanto" where tipo1 = 'psiquico' or tipo2 = 'psiquico';
SELECT * FROM "kanto" WHERE pokedex <= 22;
select count(nombre) from "kanto" where tipo2 = 'roca';
select count(nombre) from "kanto";
select * from "kanto" order by pokedex desc;
CREATE INDEX index_pokemon_nombre on kanto(nombre);
drop index index_pokemon_nombre;