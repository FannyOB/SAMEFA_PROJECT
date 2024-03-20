--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.24
-- Dumped by pg_dump version 16.0

-- Started on 2024-03-20 16:21:09 CET

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 28 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO postgres;

--
-- TOC entry 1 (class 3079 OID 18125)
-- Name: plv8; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plv8 WITH SCHEMA pg_catalog;


--
-- TOC entry 3507 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION plv8; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plv8 IS 'PL/JavaScript (v8) trusted procedural language';


--
-- TOC entry 10 (class 3079 OID 17103)
-- Name: btree_gin; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS btree_gin WITH SCHEMA public;


--
-- TOC entry 3508 (class 0 OID 0)
-- Dependencies: 10
-- Name: EXTENSION btree_gin; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION btree_gin IS 'support for indexing common datatypes in GIN';


--
-- TOC entry 6 (class 3079 OID 17552)
-- Name: btree_gist; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS btree_gist WITH SCHEMA public;


--
-- TOC entry 3509 (class 0 OID 0)
-- Dependencies: 6
-- Name: EXTENSION btree_gist; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION btree_gist IS 'support for indexing common datatypes in GiST';


--
-- TOC entry 17 (class 3079 OID 16660)
-- Name: citext; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS citext WITH SCHEMA public;


--
-- TOC entry 3510 (class 0 OID 0)
-- Dependencies: 17
-- Name: EXTENSION citext; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION citext IS 'data type for case-insensitive character strings';


--
-- TOC entry 8 (class 3079 OID 17450)
-- Name: cube; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS cube WITH SCHEMA public;


--
-- TOC entry 3511 (class 0 OID 0)
-- Dependencies: 8
-- Name: EXTENSION cube; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION cube IS 'data type for multidimensional cubes';


--
-- TOC entry 23 (class 3079 OID 16384)
-- Name: dblink; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS dblink WITH SCHEMA public;


--
-- TOC entry 3512 (class 0 OID 0)
-- Dependencies: 23
-- Name: EXTENSION dblink; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION dblink IS 'connect to other PostgreSQL databases from within a database';


--
-- TOC entry 11 (class 3079 OID 17098)
-- Name: dict_int; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS dict_int WITH SCHEMA public;


--
-- TOC entry 3513 (class 0 OID 0)
-- Dependencies: 11
-- Name: EXTENSION dict_int; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION dict_int IS 'text search dictionary template for integers';


--
-- TOC entry 5 (class 3079 OID 18106)
-- Name: dict_xsyn; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS dict_xsyn WITH SCHEMA public;


--
-- TOC entry 3514 (class 0 OID 0)
-- Dependencies: 5
-- Name: EXTENSION dict_xsyn; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION dict_xsyn IS 'text search dictionary template for extended synonym processing';


--
-- TOC entry 7 (class 3079 OID 17537)
-- Name: earthdistance; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS earthdistance WITH SCHEMA public;


--
-- TOC entry 3515 (class 0 OID 0)
-- Dependencies: 7
-- Name: EXTENSION earthdistance; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION earthdistance IS 'calculate great-circle distances on the surface of the Earth';


--
-- TOC entry 18 (class 3079 OID 16649)
-- Name: fuzzystrmatch; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS fuzzystrmatch WITH SCHEMA public;


--
-- TOC entry 3516 (class 0 OID 0)
-- Dependencies: 18
-- Name: EXTENSION fuzzystrmatch; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION fuzzystrmatch IS 'determine similarities and distance between strings';


--
-- TOC entry 12 (class 3079 OID 16975)
-- Name: hstore; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS hstore WITH SCHEMA public;


--
-- TOC entry 3517 (class 0 OID 0)
-- Dependencies: 12
-- Name: EXTENSION hstore; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION hstore IS 'data type for storing sets of (key, value) pairs';


--
-- TOC entry 13 (class 3079 OID 16857)
-- Name: intarray; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS intarray WITH SCHEMA public;


--
-- TOC entry 3518 (class 0 OID 0)
-- Dependencies: 13
-- Name: EXTENSION intarray; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION intarray IS 'functions, operators, and index support for 1-D arrays of integers';


--
-- TOC entry 21 (class 3079 OID 16444)
-- Name: ltree; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS ltree WITH SCHEMA public;


--
-- TOC entry 3519 (class 0 OID 0)
-- Dependencies: 21
-- Name: EXTENSION ltree; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION ltree IS 'data type for hierarchical tree-like structures';


--
-- TOC entry 3 (class 3079 OID 18118)
-- Name: pg_stat_statements; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pg_stat_statements WITH SCHEMA public;


--
-- TOC entry 3520 (class 0 OID 0)
-- Dependencies: 3
-- Name: EXTENSION pg_stat_statements; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pg_stat_statements IS 'track execution statistics of all SQL statements executed';


--
-- TOC entry 14 (class 3079 OID 16792)
-- Name: pg_trgm; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pg_trgm WITH SCHEMA public;


--
-- TOC entry 3521 (class 0 OID 0)
-- Dependencies: 14
-- Name: EXTENSION pg_trgm; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pg_trgm IS 'text similarity measurement and index searching based on trigrams';


--
-- TOC entry 15 (class 3079 OID 16755)
-- Name: pgcrypto; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;


--
-- TOC entry 3522 (class 0 OID 0)
-- Dependencies: 15
-- Name: EXTENSION pgcrypto; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';


--
-- TOC entry 9 (class 3079 OID 17448)
-- Name: pgrowlocks; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pgrowlocks WITH SCHEMA public;


--
-- TOC entry 3523 (class 0 OID 0)
-- Dependencies: 9
-- Name: EXTENSION pgrowlocks; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pgrowlocks IS 'show row-level locking information';


--
-- TOC entry 20 (class 3079 OID 16619)
-- Name: pgstattuple; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pgstattuple WITH SCHEMA public;


--
-- TOC entry 3524 (class 0 OID 0)
-- Dependencies: 20
-- Name: EXTENSION pgstattuple; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pgstattuple IS 'show tuple-level statistics';


--
-- TOC entry 19 (class 3079 OID 16628)
-- Name: tablefunc; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS tablefunc WITH SCHEMA public;


--
-- TOC entry 3525 (class 0 OID 0)
-- Dependencies: 19
-- Name: EXTENSION tablefunc; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION tablefunc IS 'functions that manipulate whole tables, including crosstab';


--
-- TOC entry 4 (class 3079 OID 18111)
-- Name: unaccent; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS unaccent WITH SCHEMA public;


--
-- TOC entry 3526 (class 0 OID 0)
-- Dependencies: 4
-- Name: EXTENSION unaccent; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION unaccent IS 'text search dictionary that removes accents';


--
-- TOC entry 16 (class 3079 OID 16744)
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- TOC entry 3527 (class 0 OID 0)
-- Dependencies: 16
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


--
-- TOC entry 22 (class 3079 OID 16430)
-- Name: xml2; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS xml2 WITH SCHEMA public;


--
-- TOC entry 3528 (class 0 OID 0)
-- Dependencies: 22
-- Name: EXTENSION xml2; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION xml2 IS 'XPath querying and XSLT';


SET default_tablespace = '';

--
-- TOC entry 215 (class 1259 OID 24739667)
-- Name: category; Type: TABLE; Schema: public; Owner: edanwuet
--

CREATE TABLE public.category (
    category_id integer NOT NULL,
    name_category character varying(255)
);


ALTER TABLE public.category OWNER TO edanwuet;

--
-- TOC entry 214 (class 1259 OID 24739665)
-- Name: category_cat_id_seq; Type: SEQUENCE; Schema: public; Owner: edanwuet
--

CREATE SEQUENCE public.category_cat_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.category_cat_id_seq OWNER TO edanwuet;

--
-- TOC entry 3529 (class 0 OID 0)
-- Dependencies: 214
-- Name: category_cat_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: edanwuet
--

ALTER SEQUENCE public.category_cat_id_seq OWNED BY public.category.category_id;


--
-- TOC entry 213 (class 1259 OID 24739540)
-- Name: ngo; Type: TABLE; Schema: public; Owner: edanwuet
--

CREATE TABLE public.ngo (
    ngo_id integer NOT NULL,
    ngo_name character varying(255),
    category character varying(255),
    creation_date integer,
    description_ong text,
    website character varying(255),
    photo_url character varying(255),
    location character varying(512)
);


ALTER TABLE public.ngo OWNER TO edanwuet;

--
-- TOC entry 217 (class 1259 OID 24739729)
-- Name: ngo_category; Type: TABLE; Schema: public; Owner: edanwuet
--

CREATE TABLE public.ngo_category (
    ngo_category_id integer NOT NULL,
    ngo_id integer,
    category_id integer
);


ALTER TABLE public.ngo_category OWNER TO edanwuet;

--
-- TOC entry 216 (class 1259 OID 24739727)
-- Name: ngo_category_ngo_category_id_seq; Type: SEQUENCE; Schema: public; Owner: edanwuet
--

CREATE SEQUENCE public.ngo_category_ngo_category_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.ngo_category_ngo_category_id_seq OWNER TO edanwuet;

--
-- TOC entry 3530 (class 0 OID 0)
-- Dependencies: 216
-- Name: ngo_category_ngo_category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: edanwuet
--

ALTER SEQUENCE public.ngo_category_ngo_category_id_seq OWNED BY public.ngo_category.ngo_category_id;


--
-- TOC entry 212 (class 1259 OID 24739538)
-- Name: ngo_ngo_id_seq; Type: SEQUENCE; Schema: public; Owner: edanwuet
--

CREATE SEQUENCE public.ngo_ngo_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.ngo_ngo_id_seq OWNER TO edanwuet;

--
-- TOC entry 3531 (class 0 OID 0)
-- Dependencies: 212
-- Name: ngo_ngo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: edanwuet
--

ALTER SEQUENCE public.ngo_ngo_id_seq OWNED BY public.ngo.ngo_id;


--
-- TOC entry 219 (class 1259 OID 24976327)
-- Name: user; Type: TABLE; Schema: public; Owner: edanwuet
--

CREATE TABLE public."user" (
    user_id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(100),
    password character varying NOT NULL,
    administrator boolean
);


ALTER TABLE public."user" OWNER TO edanwuet;

--
-- TOC entry 218 (class 1259 OID 24976325)
-- Name: user_user_id_seq; Type: SEQUENCE; Schema: public; Owner: edanwuet
--

CREATE SEQUENCE public.user_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.user_user_id_seq OWNER TO edanwuet;

--
-- TOC entry 3532 (class 0 OID 0)
-- Dependencies: 218
-- Name: user_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: edanwuet
--

ALTER SEQUENCE public.user_user_id_seq OWNED BY public."user".user_id;


--
-- TOC entry 3360 (class 2604 OID 24739670)
-- Name: category category_id; Type: DEFAULT; Schema: public; Owner: edanwuet
--

ALTER TABLE ONLY public.category ALTER COLUMN category_id SET DEFAULT nextval('public.category_cat_id_seq'::regclass);


--
-- TOC entry 3359 (class 2604 OID 24739543)
-- Name: ngo ngo_id; Type: DEFAULT; Schema: public; Owner: edanwuet
--

ALTER TABLE ONLY public.ngo ALTER COLUMN ngo_id SET DEFAULT nextval('public.ngo_ngo_id_seq'::regclass);


--
-- TOC entry 3361 (class 2604 OID 24739732)
-- Name: ngo_category ngo_category_id; Type: DEFAULT; Schema: public; Owner: edanwuet
--

ALTER TABLE ONLY public.ngo_category ALTER COLUMN ngo_category_id SET DEFAULT nextval('public.ngo_category_ngo_category_id_seq'::regclass);


--
-- TOC entry 3362 (class 2604 OID 24976330)
-- Name: user user_id; Type: DEFAULT; Schema: public; Owner: edanwuet
--

ALTER TABLE ONLY public."user" ALTER COLUMN user_id SET DEFAULT nextval('public.user_user_id_seq'::regclass);


--
-- TOC entry 3496 (class 0 OID 24739667)
-- Dependencies: 215
-- Data for Name: category; Type: TABLE DATA; Schema: public; Owner: edanwuet
--

COPY public.category (category_id, name_category) FROM stdin;
1	Activisme
2	Anti-Racisme
3	Handicap
4	Diversité
5	Écologie
6	Éducation
7	Féminisme
8	Genre
9	Sans-Abri
10	Illettrisme
11	Inclusivité
12	Orientation
13	Réfugiés
14	Droits
15	Social
16	Solidarité
17	Étudiant
18	Technologie
19	Durabilité
20	Anti-Gaspillage alimentaire
21	Action communautaire
22	Biodiversité
\.


--
-- TOC entry 3494 (class 0 OID 24739540)
-- Dependencies: 213
-- Data for Name: ngo; Type: TABLE DATA; Schema: public; Owner: edanwuet
--

COPY public.ngo (ngo_id, ngo_name, category, creation_date, description_ong, website, photo_url, location) FROM stdin;
4	Lallab	Féminisme, Antiracisme	2016	Lallab est une association féministe et antiraciste dont le but est de faire entendre les voix et de défendre les droits des femmes musulmanes	https://www.lallab.org/	https://pbs.twimg.com/profile_images/1280913422943760385/StPgXGVe_400x400.jpg	https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d167997.47302502248!2d2.182224950733626!3d48.85896330332676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis!5e0!3m2!1sfr!2sfr!4v1709662118518!5m2!1sfr!2sfr
6	Alba	Education, Orientation, Féminisme	2019	Alba est une association loi 1er juillet 1901 qui propose un programme d’empowerment qui a pour mission d’accompagner les jeunes femmes âgées entre 15 et 25 ans dans leur choix d’orientation aussi bien au niveau scolaire que professionnel. Ces jeunes femmes vivent dans des territoires isolés (principalement QPV (quartiers prioritaires de la ville), péri-urbains, …).	https://www.alba-asso.com	https://media.licdn.com/dms/image/C4E0BAQG0bcU1pWQTQA/company-logo_200_200/0/1630610716816?e=2147483647&v=beta&t=QqDSnDI09At8eBroWKKXi3QgfQcFdyzLyFOnTyV0VJg	https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1348910.9045780497!2d1.1834020579774096!3d48.675052601559656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5e1c403a68c17%3A0x10b82c3688b2570!2s%C3%8Ele-de-France!5e0!3m2!1sfr!2sfr!4v1709673051989!5m2!1sfr!2sfr
7	Midi du mie	Social, Solidarité, Sans-abri	2007	Collectif solidaire avec les Mineurs Isolés Étrangers à Paris	https://www.lesmidisdumie.fr	https://www.migrants-info.eu/wp-content/uploads/2018/10/logo-les-midis.png	https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d167997.47302502248!2d2.182224950733626!3d48.85896330332676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis!5e0!3m2!1sfr!2sfr!4v1709662118518!5m2!1sfr!2sfr
11	Equipage Solidaire	Social, Solidarité, Etudiant	2020	Née du constat de la précarité galopante chez les étudiants, l Équipage Solidaire est une association à but non lucratif créée en 2020 ayant pour principale mission d accompagner et de favoriser le bien être personnel et professionnel des jeunes	https://equipagesolidaire.fr/	https://yt3.googleusercontent.com/b8G08kYM-sy6aOgnZvz1qdkrHsGzjaMjG2z0rXT7JdK0hEyyiYhvpgromFjdG2TLt56WUQ_8UA=s900-c-k-c0x00ffffff-no-rj	https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83990.67546057659!2d2.301405386560894!3d48.863766685063226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d45530eef85%3A0xa3aa7c6db0c45bf0!2s93100%20Montreuil!5e0!3m2!1sfr!2sfr!4v1709674369581!5m2!1sfr!2sfr
1	Moissons Solidaires	Durabilité, Ecologie, Anti-Gaspillage alimentaire, Solidarité	2013	En France, le gaspillage alimentaire représente 260 kg de nourriture par an et par personne! Pour agir contre ces pertes très importantes, Moissons Solidaires a mis en place une solution simple : récupérer en fin de marché des produits trop abîmés pour être vendus mais parfaitement comestibles et les redistribuer.	https://www.moissons-solidaires.fr	https://staging.maisonsduvoyage.com/wordpress/wp-content/uploads/2021/12/MoissonsSolidaires-Logo.jpg	https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d674391.9536521503!2d1.8433101373098602!3d48.679795585874466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5e1c403a68c17%3A0x10b82c3688b2570!2s%C3%8Ele-de-France!5e0!3m2!1sfr!2sfr!4v1709579047039!5m2!1sfr!2sfr
9	Coexister	Anti-racisme, Diversité, Education, Social, Action communautaire	2009	Coexister est un Mouvement interconvictionnel de jeunesse et d’éducation populaire, reconnu d’intérêt général, aconfessionnel et apartisan, permettant à des jeunes de 15 à 35 ans de créer du lien social et de promouvoir un mieux vivre ensemble.	https://www.coexister.fr	https://www.coexister.fr/wp-content/uploads/2023/05/logo-coexister-france-RVB-violet-BD.png	https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11426942.559571177!2d-7.989176703069944!3d45.635137652003166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54a02933785731%3A0x6bfd3f96c747d9f7!2sFrance!5e0!3m2!1sfr!2sfr!4v1709674211518!5m2!1sfr!2sfr
2	Noé	Biodiversité, Ecologie	2001	La vision de Noé est de réinventer un monde vivant et durable, où biodiversité et humanité vivent en harmonie.\r\n\tSa mission est ainsi de sauvegarder et restaurer la biodiversité, pour le bien-être de toutes les espèces vivantes, y compris de l’espèce humaine.	https://noe.org	https://pbs.twimg.com/profile_images/1191290114649001984/0DdrL_t7_400x400.jpg	https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d167997.47302502248!2d2.182224950733626!3d48.85896330332676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis!5e0!3m2!1sfr!2sfr!4v1709662118518!5m2!1sfr!2sfr
3	Acceptess-T	Droits, Genre, Inclusivité	2010	Acceptess-T née de la volonté de créer un groupe d’activités Trans dans Paris qui se focaliserait sur la défense des droits des personnes transgenres les plus précarisées par l’intersectionnalité.	https://www.acceptess-t.com/	https://www.corevih-idfnord.fr/wp-content/uploads/2022/04/acceptesst.jpg	https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d167997.47302502248!2d2.182224950733626!3d48.85896330332676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis!5e0!3m2!1sfr!2sfr!4v1709662118518!5m2!1sfr!2sfr
5	Diversidays	 Diversité, Handicap, Inclusivité, Technologie	2017	Diversidays est une association loi 1901 et reconnue d’intérêt général.\r\n\t\t\tLa mission de Diversidays est de: Faciliter massivement les reconversions professionnelles des talents sous-représentés ou discriminés dans secteur de la Tech ou les métiers du numérique\r\n\t\t\tAccompagner et accélérer les porteurs de projets à impact, originaires des quartiers et zones rurales, en situation de handicap et bien d’autres\r\n\t\t\tAccélérer les politiques de diversité et d’inclusion des entreprises de la Tech.	https://diversidays.com/	https://pbs.twimg.com/profile_images/912562067080728576/J5VrmTiU_400x400.jpg	https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d167997.47302502248!2d2.182224950733626!3d48.85896330332676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis!5e0!3m2!1sfr!2sfr!4v1709662118518!5m2!1sfr!2sfr
8	La Cimade	Social, Droit, Réfugiés	1939	La Cimade est une association de solidarité active et de soutien politique aux migrants, aux réfugiés et aux déplacés, aux demandeurs d asile et aux étrangers en situation irrégulière.	https://www.lacimade.org/nous-connaitre/histoire/	https://centre-ressources-teh.horslarue.org/wp-content/uploads/2023/03/Sans-titre-44.jpg	https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d167997.47302502248!2d2.182224950733626!3d48.85896330332676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis!5e0!3m2!1sfr!2sfr!4v1709662118518!5m2!1sfr!2sfr
10	Utopia56	Social, Inclusion, Solidarité	2015	Utopia 56: venir en aide aux personnes exilées et à toute personne en détresse en France, dans le respect de leurs choix de parcours et de vie, grâce à la mobilisation citoyenne.	https://utopia56.org/	https://upload.wikimedia.org/wikipedia/commons/2/28/Utopia_56_logo.jpg	https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11426942.559571177!2d-7.989176703069944!3d45.635137652003166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54a02933785731%3A0x6bfd3f96c747d9f7!2sFrance!5e0!3m2!1sfr!2sfr!4v1709674211518!5m2!1sfr!2sfr
\.


--
-- TOC entry 3498 (class 0 OID 24739729)
-- Dependencies: 217
-- Data for Name: ngo_category; Type: TABLE DATA; Schema: public; Owner: edanwuet
--

COPY public.ngo_category (ngo_category_id, ngo_id, category_id) FROM stdin;
1	1	20
2	1	19
3	1	5
4	1	16
5	2	22
6	2	5
7	3	14
8	3	8
9	3	11
10	4	7
11	4	2
12	5	4
13	5	3
14	5	11
15	5	18
16	6	6
17	6	12
18	6	7
19	7	15
20	7	16
21	7	9
22	8	15
23	8	14
24	8	13
25	9	2
26	9	4
27	9	6
28	9	15
29	9	21
30	10	15
31	10	11
32	10	16
33	11	15
34	11	16
35	11	17
\.


--
-- TOC entry 3500 (class 0 OID 24976327)
-- Dependencies: 219
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: edanwuet
--

COPY public."user" (user_id, name, email, password, administrator) FROM stdin;
1	Fanny	f.olengabinene@gmail.com	$2b$10$Wta9Pbk1xqV6fkwBKHd08u9RxDs18BY/zxB9cFebZXMvL9BmKxATS	t
2	Melisande	m.malonga@gmail.com	$2b$10$TrTMN07hEEs7hD9mvCkHxeoI1iFf/YFedqL0fPmNiNdSqkkqCKRoS	t
3	Julie	juju@laposte.fr	$2b$10$dIDw0aYWw23mimYqe2rJd.5oaIXAkkkN109Vfs4KIB2AA79jkSlc.	\N
\.


--
-- TOC entry 3533 (class 0 OID 0)
-- Dependencies: 214
-- Name: category_cat_id_seq; Type: SEQUENCE SET; Schema: public; Owner: edanwuet
--

SELECT pg_catalog.setval('public.category_cat_id_seq', 22, true);


--
-- TOC entry 3534 (class 0 OID 0)
-- Dependencies: 216
-- Name: ngo_category_ngo_category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: edanwuet
--

SELECT pg_catalog.setval('public.ngo_category_ngo_category_id_seq', 35, true);


--
-- TOC entry 3535 (class 0 OID 0)
-- Dependencies: 212
-- Name: ngo_ngo_id_seq; Type: SEQUENCE SET; Schema: public; Owner: edanwuet
--

SELECT pg_catalog.setval('public.ngo_ngo_id_seq', 11, true);


--
-- TOC entry 3536 (class 0 OID 0)
-- Dependencies: 218
-- Name: user_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: edanwuet
--

SELECT pg_catalog.setval('public.user_user_id_seq', 3, true);


--
-- TOC entry 3366 (class 2606 OID 24739672)
-- Name: category category_pkey; Type: CONSTRAINT; Schema: public; Owner: edanwuet
--

ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pkey PRIMARY KEY (category_id);


--
-- TOC entry 3368 (class 2606 OID 24739734)
-- Name: ngo_category ngo_category_pkey; Type: CONSTRAINT; Schema: public; Owner: edanwuet
--

ALTER TABLE ONLY public.ngo_category
    ADD CONSTRAINT ngo_category_pkey PRIMARY KEY (ngo_category_id);


--
-- TOC entry 3364 (class 2606 OID 24739548)
-- Name: ngo ngo_pkey; Type: CONSTRAINT; Schema: public; Owner: edanwuet
--

ALTER TABLE ONLY public.ngo
    ADD CONSTRAINT ngo_pkey PRIMARY KEY (ngo_id);


--
-- TOC entry 3370 (class 2606 OID 24976337)
-- Name: user user_email_key; Type: CONSTRAINT; Schema: public; Owner: edanwuet
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_email_key UNIQUE (email);


--
-- TOC entry 3372 (class 2606 OID 24976335)
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: edanwuet
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (user_id);


--
-- TOC entry 3373 (class 2606 OID 24739740)
-- Name: ngo_category ngo_category_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: edanwuet
--

ALTER TABLE ONLY public.ngo_category
    ADD CONSTRAINT ngo_category_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.category(category_id);


--
-- TOC entry 3374 (class 2606 OID 24739735)
-- Name: ngo_category ngo_category_ngo_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: edanwuet
--

ALTER TABLE ONLY public.ngo_category
    ADD CONSTRAINT ngo_category_ngo_id_fkey FOREIGN KEY (ngo_id) REFERENCES public.ngo(ngo_id);


--
-- TOC entry 3506 (class 0 OID 0)
-- Dependencies: 28
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO PUBLIC;


-- Completed on 2024-03-20 16:21:12 CET

--
-- PostgreSQL database dump complete
--

