CREATE TABLE "feedback" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "feedback_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"workedWell" varchar(1000) NOT NULL,
	"improve" varchar(1000) NOT NULL,
	"rating" integer NOT NULL,
	CONSTRAINT "feedback_email_unique" UNIQUE("email")
);
