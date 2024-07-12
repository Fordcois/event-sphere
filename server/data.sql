CREATE DATABASE eventsphere

CREATE TABLE "users" (
    "user_id" VARCHAR(255) PRIMARY KEY,
    "email" VARCHAR(255),
    "first_name" VARCHAR(255),
    "last_name" VARCHAR(255),
    "hashed_password" VARCHAR(255),
);

CREATE TABLE "enquiries" (
    "event_id" uuid NOT NULL,
    "event_name" varchar,
    "event_type" varchar,
    "corporate_event" bool,
    "event_date" date,
    "start_time" varchar,
    "end_time" varchar,
    "flexible" bool,
    "style_casual" bool,
    "style_modern" bool,
    "style_luxury" bool,
    "style_traditional" bool,
    "style_industrial" bool,
    "style_social" bool,
    "style_lively" bool,
    "style_quiet" bool,
    "style_professional" bool,
    "seating_arrangement" varchar,
    "notes" varchar,
    "user_id" varchar,
    "style_formal" bool,
    "expected_guests" int8,
    CONSTRAINT "enquiries_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id"),
    PRIMARY KEY ("event_id")
);

CREATE TABLE "venues" (
    "venue_id" uuid NOT NULL,
    "venue_name" varchar,
    "location" varchar,
    "contact_email" varchar,
    "contact_name" varchar,
    "accepts_meeting" bool,
    "accepts_party" bool,
    "accepts_dining" bool,
    "accepts_wedding" bool,
    "accepts_networking" bool,
    "accepts_conference" bool,
    "max_capacity" int8,
    "style_formal" bool,
    "style_casual" bool,
    "style_modern" bool,
    "style_luxury" bool,
    "style_traditional" bool,
    "style_industrial" bool,
    "style_social" bool,
    "style_lively" bool,
    "style_quiet" bool,
    "style_professional" bool,
    "password" varchar NOT NULL,
    PRIMARY KEY ("venue_id")
);

