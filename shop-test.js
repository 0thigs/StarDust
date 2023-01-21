// import React, { useEffect, useState } from 'react';
// import { LifeBox } from '../../components/LifeBox';
// import { Rocket } from '../../components/Rocket';
// import { useAuth } from '../../hooks/useAuth';
// import api from '../../services/api';
// import * as C from './styles';

// export function Shop() {
//   const { user, setUser } = useAuth();
//   const [rockets, setRockets] = useState([]);

//   async function getRockets() {
//     const rockets = await api.getRockets();
//     setRockets(rockets);
//   }

//   useEffect(() => {
//     getRockets();
//   }, []);

//   return (
//     <C.Container>
//       <C.Title>Foguetes</C.Title>
//       <C.RocketList>
//         {rockets.map(({ id_rocket: id, name, price }) => (
//           <Rocket key={id} id={id} name={name} price={price} user={user} setUser={setUser} />
//         ))}
//       </C.RocketList>
//       <C.Title>Vidas</C.Title>
//       <C.LifeList horizontal showsHorizontalScrollIndicator={false}>
//         <LifeBox lives={1} price={100} user={user} setUser={setUser} />
//         <LifeBox lives={3} price={250} user={user} setUser={setUser} />
//         <LifeBox lives={5} price={500} user={user} setUser={setUser} />
//       </C.LifeList>
//     </C.Container>
//   );
// }
