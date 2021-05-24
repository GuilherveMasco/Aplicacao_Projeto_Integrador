use meuguiadb;

insert into cidade(nome, uf) values ('Campo Mourão', 'PR');
insert into cidade(nome, uf) values ('Maringá', 'PR');
insert into cidade(nome, uf) values ('Curitiba', 'PR');
insert into cidade(nome, uf) values ('São Paulo', 'SP');
insert into cidade(nome, uf) values ('São Francisco do Sul', 'SC');
insert into cidade(nome, uf) values ('Balneário Camboriú', 'SC');

insert into local(nome, descricao, localizacao, referencia, Cidade_idCidade) values ('Parque do Lago (bosque)', 'Um belo parque em torno de um lago, perfeito para passeios em família, apreciar a natureza, fazer caminhadas, fazer fotos e muito mais.', 'Rua das Andorinhas', 'Próximo ao Jd. Gutierrez', '1');
insert into local(nome, descricao, localizacao, referencia, Cidade_idCidade) values ('Parque do lago azul', 'Caminhada na natureza.', 'Saída da cidade', '', '1');

insert into tag(nome) values ('Passeio');
insert into tag(nome) values ('Parque');
insert into tag(nome) values ('Caminhada');
insert into tag(nome) values ('Lago');
insert into tag(nome) values ('Natureza');
insert into tag(nome) values ('Fotografia');
insert into tag(nome) values ('Fim de Semana');

insert into local_has_tag(Local_idLocal, Tag_idTag) values ('1','1');
insert into local_has_tag(Local_idLocal, Tag_idTag) values ('1','2');
insert into local_has_tag(Local_idLocal, Tag_idTag) values ('1','3');
insert into local_has_tag(Local_idLocal, Tag_idTag) values ('1','4');
insert into local_has_tag(Local_idLocal, Tag_idTag) values ('1','5');
insert into local_has_tag(Local_idLocal, Tag_idTag) values ('1','6');
insert into local_has_tag(Local_idLocal, Tag_idTag) values ('1','7');
insert into local_has_tag(Local_idLocal, Tag_idTag) values ('2','1');
insert into local_has_tag(Local_idLocal, Tag_idTag) values ('2','2');
insert into local_has_tag(Local_idLocal, Tag_idTag) values ('2','3');
insert into local_has_tag(Local_idLocal, Tag_idTag) values ('2','4');
insert into local_has_tag(Local_idLocal, Tag_idTag) values ('2','5');

insert into comentario(autor, conteudo, Local_idLocal) values ('Guilherme Vasco', 'Realmente muito bom para passear com os amigos.', '1');
insert into comentario(autor, conteudo, Local_idLocal) values ('Guilherme Vasco', 'Muito bom ver as capivaras tomando conta.', '1');
insert into comentario(autor, conteudo, Local_idLocal) values ('Guilherme Vasco', 'Ótimo para quem quer fazer ensaios sem ter estúdio.', '1');

