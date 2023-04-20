create achievements table including primary and foreign keys, unique and, not null  and on delete constraints

CREATE TABLE users (
    id uuid PRIMARY KEY NOT NULL,
    name text NOT NULL,
    email text UNIQUE NOT NULL,
    level integer NOT NULL,
    xp integer NOT NULL,
    coins integer NOT NULL,
    created_at timestamp NOT NULL,
    streak integer NOT NULL,
    ranking_id uuid NOT NULL,
    rocket_id uuid NOT NULL,
    avatar_id uuid NOT NULL,
    week_status text[] NOT NULL,
    completed_planets integer NOT NULL,
    did_complete_saturday boolean NOT NULL,
    is_admin boolean NOT NULL,
    weekly_xp integer NOT NULL,
    did_update_ranking boolean NOT NULL,
    last_position integer NOT NULL,
    unlocked_stars integer NOT NULL,
    unlocked_achievements integer NOT NULL,
    acquired_rockets integer NOT NULL,
    study_time text NOT NULL
    FOREIGN KEY (ranking_id) REFERENCES rankings(id) ON DELETE SET DEFAULT,
    FOREIGN KEY (rocket_id) REFERENCES rockets(id) ON DELETE SET DEFAULT,
    FOREIGN KEY (avatar_id) REFERENCES avatars(id) ON DELETE SET DEFAULT
);

CREATE TABLE planets (
    id uuid PRIMARY KEY NOT NULL,
    name text UNIQUE NOT NULL,
    image text UNIQUE NOT NULL,
    icon text UNIQUE NOT NULL,
    position integer UNIQUE NOT NULL,
);

CREATE TABLE stars (
  id uuid PRIMARY KEY NOT NULL,
  name text UNIQUE NOT NULL,
  number integer UNIQUE NOT NULL,
  texts jsonb NOT NULL,
  questions jsonb NOT NULL,
  is_challenge boolean NOT NULL,
  planet_id uuid NOT NULL
  FOREIGN KEY (planet_id) REFERENCES planets(id) ON DELETE CASCADE,
);

CREATE TABLE rockets (
    id uuid PRIMARY KEY NOT NULL,
    name text UNIQUE NOT NULL,
    price integer NOT NULL,
    image text UNIQUE NOT NULL,
);

CREATE TABLE avatars (
    id uuid PRIMARY KEY NOT NULL,
    name text UNIQUE NOT NULL,
    price integer NOT NULL,
    image text UNIQUE NOT NULL,
);

CREATE TABLE rankings (
  id uuid PRIMARY KEY NOT NULL,
  name text UNIQUE NOT NULL,
  image text UNIQUE NOT NULL,
  position integer UNIQUE NOT NULL,
  reward integer UNIQUE NOT NULL,
);

CREATE TABLE achievements (
    id uuid PRIMARY KEY,
    name text UNIQUE NOT NULL,
    icon text UNIQUE NOT NULL,
    description UNIQUE text NOT NULL,
    metric text NOT NULL,
    required_amount UNIQUE integer NOT NULL,
    reward integer UNIQUE NOT NULL,
    position integer NOT NULL,
);

CREATE TABLE winners (
    id uuid PRIMARY KEY NOT NULL,
    user_id uuid NOT NULL,
    ranking_id uuid NOT NULL,
    avatar_id uuid NOT NULL,
    position integer NOT NULL,
    xp integer NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (ranking_id) REFERENCES rankings(id) ON DELETE CASCADE,
    FOREIGN KEY (avatar_id) REFERENCES avatars(id) ON DELETE CASCADE,
);

CREATE TABLE codes (
  id uuid PRIMARY KEY NOT NULL,
  title text NOT NULL,
  code text,
  user_id uuid NOT NULL,
  created_at timestamp NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
);

CREATE TABLE topics (
  id uuid PRIMARY KEY NOT NULL,
  title text UNIQUE NOT NULL,
  texts jsonb NOT NULL,
  position integer UNIQUE NOT NULL,
);

CREATE TYPE difficulty_name AS ENUM('fácil', 'médio' 'difícil',);

CREATE TABLE challenges (
    id uuid PRIMARY KEY NOT NULL,
    title text UNIQUE NOT NULL,
    difficulty difficulty_name NOT NULL,
    created_at timestamp NOT NULL,
    code text NOT NULL,
    texts jsonb NOT NULL,
    function_name text,
    test_cases jsonb NOT NULL,
    star_id uuid UNIQUE,
    topic_id uuid UNIQUE,
    FOREIGN KEY (star_id) REFERENCES stars(id) ON DELETE CASCADE,
    FOREIGN KEY (topic_id) REFERENCES topics(id) ON DELETE CASCADE,
);

CREATE TABLE categories (
  id uuid PRIMARY KEY NOT NULL,
  name text UNIQUE NOT NULL,
);

CREATE TABLE comments (
  id uuid PRIMARY KEY NOT NULL,
  author_id text UNIQUE NOT NULL,
  created_at timestamp NOT NULL,
  likes integer NOT NULL,
  challenge_id uuid UNIQUE NOT NULL,
  content jsonb NOT NULL,
  parent_id uuid UNIQUE,
  FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (challenge_id) REFERENCES challenges(id) ON DELETE CASCADE,
  FOREIGN KEY (parent_id) REFERENCES comments(id) ON DELETE CASCADE
);

CREATE TABLE challenges_categories (
  id uuid PRIMARY KEY NOT NULL,
  challenge_id uuid NOT NULL,
  category_id uuid NOT NULL,
  FOREIGN KEY (challenge_id) REFERENCES challenges(id) ON DELETE CASCADE,
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE,
);

CREATE TABLE users_unlocked_stars (
  id uuid PRIMARY KEY NOT NULL,
  user_id uuid NOT NULL,
  star_id uuid NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (star_id) REFERENCES stars(id) ON DELETE CASCADE,
);

CREATE TABLE users_unlocked_achievements (
  id uuid PRIMARY KEY NOT NULL,
  user_id uuid NOT NULL,
  achievement_id uuid NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (achievement_id) REFERENCES achievements(id) ON DELETE CASCADE,
);

CREATE TABLE users_unlocked_topics (
  id uuid PRIMARY KEY NOT NULL,
  user_id uuid NOT NULL,
  topic_id uuid NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (topic_id) REFERENCES topics(id) ON DELETE CASCADE,
);

CREATE TABLE users_achievements_to_rescue (
  id uuid PRIMARY KEY NOT NULL,
  user_id uuid NOT NULL,
  achievement_id uuid NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (achievement_id) REFERENCES achievements(id) ON DELETE CASCADE,
);

CREATE TABLE users_acquired_rockets (
  id uuid PRIMARY KEY,
  user_id uuid NOT NULL,
  rocket_id uuid NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (rocket_id) REFERENCES rockets(id) ON DELETE CASCADE,
);

CREATE TABLE users_acquired_avatars (
  id uuid PRIMARY KEY,
  user_id uuid NOT NULL,
  avatar_id uuid NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (avatar_id) REFERENCES avatars(id) ON DELETE CASCADE,
);

CREATE TABLE users_completed_challenges (
  id uuid PRIMARY KEY,
  user_id uuid NOT NULL,
  comment_id uuid NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (comment_id) REFERENCES comments(id) ON DELETE CASCADE,
);

CREATE TABLE users_liked_comments (
  id uuid PRIMARY KEY,
  user_id uuid NOT NULL,
  comment_id uuid NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (comment_id) REFERENCES comments(id) ON DELETE CASCADE,
);