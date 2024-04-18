export interface HeroModel {
  id: string;
  name: string;
  description?: string;
}

export type HeroCreationFormModel = Omit<HeroModel, "id">;
