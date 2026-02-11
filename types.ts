
export enum NFTType {
  OATH = 'OATH',
  RIGS = 'RIGS',
  AUTH_OF_PRITI = 'AUTH_OF_PRITI'
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
