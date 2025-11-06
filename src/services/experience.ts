import { IExperience } from '@/types/apiData.types';
import { ApiResponse } from './../types/index';

export const getAllExperience = async (): Promise<
  ApiResponse<IExperience[]>
> => {
  const res = await fetch(`http://localhost:5000/experience`);

  return await res.json();
};
