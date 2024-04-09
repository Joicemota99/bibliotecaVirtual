create table autor(
	id SERIAL PRIMARY KEY,
  nome VARCHAR(45) NOT NULL,
  data_de_nascimento DATE,
  sexo VARCHAR(45)
)

create table livros(
	id SERIAL PRIMARY KEY,
  titulo VARCHAR(45) NOT NULL,
  data_publicacao DATE,
  subtitulo VARCHAR(45),
  autor_id INT REFERENCES autor(id)
)

create table livro_autor(
	id SERIAL PRIMARY KEY,
  livro_id INT REFERENCES livros(id),
  autor_id INT REFERENCES autor(id),
  CONSTRAINT fk_livro FOREIGN KEY (livro_id) REFERENCES livros(id),
  CONSTRAINT fk_autor FOREIGN KEY (autor_id) REFERENCES autor(id),
  CONSTRAINT unique_livro_autor UNIQUE (livro_id, autor_id)
)