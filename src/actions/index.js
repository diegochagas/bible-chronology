import { Genesis_Genealogies, Exodus_Genealogies } from '../apis/Genealogies';

export const GENESIS = 'GENESIS';
export const EXODUS = 'EXODUS';

export const getGenesisGenealogies = () => {
  return {
    type: GENESIS,
    payload: Genesis_Genealogies
  }
}

export const getExodusGenealogies = () => {
  return {
    type: EXODUS,
    payload: Exodus_Genealogies
  }
}