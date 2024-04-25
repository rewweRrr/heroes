export interface PtTableCellInformationModel {
  orderNumber: number;
  sign: string;
  name: string;
  weight: string;
}

export interface PtTablePosition {
  row: number;
  column: number;
}

export interface PtTableCellModel {
  information: PtTableCellInformationModel;
  position: PtTablePosition;
}
