-- h2

create table users (
	usersId uuid primary key,
	email varchar(250) not null,
	name varchar,
	username varchar(50) not null,
	-- TODO: Change after we truly know the hash length - Using SHA(256) for now
	password varchar(128) not null,
	profileImage blob,
	deleted boolean not null,
	moderator boolean not null
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
	-- TODO: Assign to [deleted] on author deleting his account
	author uuid references users(usersId),
	attending int not null,
	initialDate date not null,
	finalDate date,
	coordinatesId uuid references coordinates (coordinatesId)
	-- TODO: Payments, fee?
);

create table users_events (
	usersId uuid references users(usersId),
	eventsId uuid references events(eventsId)
);

create table comments (
	commentsId uuid primary key,
	-- ID of parent comment - if it's the same as self, there are no parents
	parentId uuid references comments(commentsId) on delete cascade,
	content varchar not null,
	-- TODO: Assign to [deleted] on author deleting his account
	author uuid references users(usersId),
	positiveVotes int,
	negativeVotes int
);

create table events_comments (
	eventId uuid references events(eventsId),
	commentsId uuid references comments(commentsId)
	-- TODO: Deleting all comments once event is deleted?
);

-- TODO: Is this table really necessary?
create table users_comments (
	author uuid references users(usersId),
	commentsId uuid references comments(commentsId)
);

create table reports (
	reportsId uuid primary key,
	author uuid references users(usersId),
	content varchar
);

create table events_reports (
	reportsId uuid references reports(reportsId) on delete cascade,
	eventsId uuid references events(eventsId) on delete cascade
);

create table comments_reports (
	reportsId uuid references reports(reportsId) on delete cascade,
	commentsId uuid references comments(commentsId) on delete cascade
);

create index idxusername on users(username);
create index idxemail on users(email);
