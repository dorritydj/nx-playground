import { PrismaClient } from '@prisma/client';
import * as path from 'path';
import * as fs from 'fs';
import neatCsv from 'neat-csv';

const db = new PrismaClient();

async function getWeapons() {
  const fullstatlist = './data/fullstatlist.csv';

  const csv = fs.readFileSync(path.join(__dirname, fullstatlist), {
    encoding: 'utf8',
    flag: 'r',
  });

  return await neatCsv(csv);
}

async function seed() {
  const weapons = await getWeapons();

  return Promise.all(
    weapons.map((weapon: any) => {
      return db.weapon.create({
        data: {
          name: weapon['Weapon'],

          type: weapon['Type'],
          archetypeName: weapon['Archetype/Exotic'],
          archetypeDesc: weapon['Archetype Description'],

          energy: weapon['Energy'],

          craftable: weapon['Craftable'],
          sunset: weapon['Sunset'],
          exotic: weapon['Exotic'],

          ammo: weapon['Ammo'],
          fireRate: weapon['RoF / Draw Time / Charge (ms)'],
          crit: weapon['Crit'],
          body: weapon['Body'],
          critMultiplier: weapon['Crit X'],

          blastRadius: weapon['Impact / Blast Radius'],
          range: weapon['Range / Accuracy / Velocity'],
          stability: weapon['Stability / Shield Duration (Glaive)'],
          handling: weapon['Handling'],
          reloadSpeed: weapon['Reload Speed / Charge Rate'],
          aimAssist: weapon['Aim Assist'],
          recoilDirection:
            weapon['Recoil Direction / Defense / Charge (Glaives)'],
          magSize: weapon['Mag Size'],
          airborneEfficacy: weapon['Airborne Efficacy'],
          baseZoom: weapon['Base Zoom / Swimg Speed'],
        },
      });
    })
  );
}

seed();
