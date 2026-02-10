
export enum NFTType {
  OATH = 'OATH',
  RIGS = 'RIGS'
}

export interface NFTDetails {
  id: string;
  type: NFTType;
  name: string;
  subtitle: string;
  description: string;
  price: string;
  total: number;
  minted: number;
  benefits: string[];
  specs: string[];
}

export interface BenefitItemProps {
  text: string;
  index: number;
}
