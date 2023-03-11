create database kiwitter;

create table posts (
  id serial primary key,
  content varchar(280) not null,
  parentId int,
  createdAt varchar not null,
  foreign key (parentId) references posts(id)
);

create table reaction_types (
  id serial primary key,
  type varchar(100) unique not null
);

insert into
  reaction_types(type)
values
  ('THUMBS_UP'),
  ('THUMBS_DOWN'),
  ('ROCKET'),
  ('HEART');

create table reactions (
  id serial primary key,
  reaction_type int not null,
  foreign key (reaction_type) references reaction_types(id)
);

create table posts_reactions(
  id serial primary key,
  reaction_id int not null,
  post_id int not null,
  foreign key (reaction_id) references reactions(id),
  foreign key (post_id) references posts(id)
);
