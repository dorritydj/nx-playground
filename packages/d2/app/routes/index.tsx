import { Weapon } from '@prisma/client';
import { useEffect } from 'react';
import { LoaderFunction, json, useLoaderData } from 'remix';
// import { db } from '../../../../prisma/db.server';

type WeaponData = {
  weapons: Weapon[];
};

// export const loader: LoaderFunction = async () => {
//   const data: WeaponData = {
//     weapons: await db.weapon.findMany(),
//   };
//   return json(data);
// };

export default function Index() {
  // const data = useLoaderData<WeaponData>();

  // useEffect(() => {
  //   console.log(data);
  // }, []);

  return <div>butt</div>;
}
