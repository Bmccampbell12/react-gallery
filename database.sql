CREATE TABLE "gallery" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR,
  "title" VARCHAR,
  "description" TEXT,
  "likes" INTEGER DEFAULT 0
);

INSERT INTO "gallery" 
("url", "title", "description")
VALUES
('images/goat_small.jpg', 'Goat!', 'Photo of a goat taken at Glacier National Park.'),
('images/goat_stache.png', 'Goat Stache!', 'Photo of a mustachioed goat taken at Glacier National Park.'),
('images/Family_Photo_1.jpg', 'Family', 'Photo of my family taken a couple of years ago at sunset.'),
('images/Family_Photo_2.jpeg', 'Family!', 'Photo of my family taken on vacation in Malta last year.'),
('images/Camping_Photo.png', 'Family Camping', 'Picture of my son and his grandpa and myself on a weekend camping trip.');
-- ('images/San_Diego_Photo_1.jpeg', 'San Diego', 'Photo taken of my family in San Diego summer of 2019.');
-- ('images/Malta_2023.jpg', '')
-- ('images/Bus_Photo.jpeg', '')