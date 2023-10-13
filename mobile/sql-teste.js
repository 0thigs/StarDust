drop function get_filtered_challenges(userId text, status text, _difficulty text, cateogories_ids uuid[])


CREATE OR REPLACE FUNCTION get_filtered_challenges(userId TEXT, status TEXT, _difficulty TEXT, categories_ids UUID[]) 
RETURNS SETOF challenges AS
$$
  SELECT C.*
  FROM challenges as C
  LEFt JOIN users_completed_challenges as CC ON C.id = CC.challenge_id AND (userId IS NULL OR CC.user_id = userId)
  LEFT JOIN challenges_categories as CCA on C.id = CCA.challenge_id
  WHERE (
    (_difficulty = 'all' OR C.difficulty = _difficulty)
    AND (
      (status = 'all')
      OR (status = 'completed' AND CC.user_id IS NOT NULL)
      OR (status = 'not-completed' AND CC.user_id IS NULL)
    )
    AND (categories_ids = ARRAY[]::UUID[] OR CCA.category_id = ANY(categories_ids))
  )
 GROUP BY C.id;
$$ LANGUAGE sql;

select * from get_filtered_challenges('56b1f86c-7e54-44fd-967a-58abc49e68a2', 'all', 'all', array[]::uuid[]);

--  select C.* from challenges as C
--   join users_completed_challenges as CC
--   join users as U 
--   on U.id = CC.user_id
--   on CC.challenge_id = C.id
--   where (userId IS NULL OR U.id = userId);
