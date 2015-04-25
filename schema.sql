-- h2

create table users (
	usersId uuid primary key,
	email varchar(250) not null,
	name varchar,
	username varchar(50) not null,
	-- TODO: Change after we truly know the hash length - Using SHA(256) for now
	password varchar(128) not null
);

create table users_users (
	usersId uuid references users(usersId),
	friendId uuid references users(usersId)
);

create table coordinates (
	coordinatesId uuid primary key,
	latitude decimal not null,
	longitude decimal not null
);

create table events (
	eventsId uuid primary key,
	title varchar(50) not null,
	description varchar not null,
	author uuid references users(usersId),
	attending int not null,
	initialDate date not null,
	finalDate date,
	coordinatesId uuid references coordinates (coordinatesId)
);

create table comments (
	commentsId uuid primary key,
	eventId uuid references events(eventsId),
	-- ID of parent comment - if it's the same as self, there are no parents
	parentId uuid references comments(commentsId) on delete cascade,
	content varchar not null,
	author uuid references users(usersId),
	positiveVotes int,
	negativeVotes int
);
