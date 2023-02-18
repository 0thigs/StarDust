// import { useEffect, useState } from 'react';
// import { useAuth } from '../../hooks/useAuth';

// import { ProfileStatus } from '../../components/ProfileStatus';
// import { Statistic } from '../../components/Statistic';
// import { Streak } from '../../components/Streak';
// import { Animation } from '../../components/Animation';
// import { Achievement } from '../../components/Achievement';
// import { achievements } from '../../utils/achivements';

// import Missing from '../../assets/GlobalAssets/missing-animation.json';
// import * as C from './styles';
// import api from '../../services/api';

// export function Profile({ isExternalUser }) {
//   const { user } = useAuth();
//   const [userData, setUserData] = useState({});
//   const [unlockedAchievements, setUnlockedAchievements] = useState([]);

//   function getUnlockedAchievements(user) {
//     return achievements.filter(achivement =>
//       user.unlocked_achievements_ids.includes(achivement.id)
//     );
//   }

//   async function getUser() {
//     return api.getUser(id);
//   }

//   useEffect(() => {
//     setUserData(getUser(isExternalUser ? ));
//   }, []);

//   useEffect(() => {
//     setUnlockedAchievements(getUnlockedAchievements(isExternalUser ? externalUser : user));
//   }, [user.unlocked_achievements_ids]);

//   return (
//     <C.Container>
//       <C.Content>
//         <ProfileStatus user={user} />
//         <Statistic user={user} />
//         <Streak user={user} />
//         <C.Title>Conquistas</C.Title>
//         <C.Achievements>
//           {unlockedAchievements.length > 0 ? (
//             unlockedAchievements.map(({ id, title, description, icon, requiredCount, metric }) => (
//               <Achievement
//                 key={id}
//                 title={title}
//                 description={description}
//                 icon={icon}
//                 requiredCount={requiredCount}
//                 currentCount={user[metric]}
//                 isUnlocked={true}
//               />
//             ))
//           ) : (
//             <>
//               <C.NoAchievements>Não há nenhuma conquista desbloqueada ainda 😢</C.NoAchievements>
//               <Animation source={Missing} autoPlay={true} loop={true} size={220} />
//             </>
//           )}
//         </C.Achievements>
//       </C.Content>
//     </C.Container>
//   );
// }
