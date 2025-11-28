'use server';

import envVars from '@/config/env.config';
import axios from 'axios';
import { revalidateTag } from 'next/cache';

const addExperience = async (formdata: FormData) => {
  try {
    const payload = {
      position: formdata.get('position'),
      companyName: formdata.get('companyName'),
      timeline: formdata.get('timeline'),
      description: formdata.get('description'),
    };

    const res = await axios.post(`${envVars.baseUrl}/experience`, payload);

    revalidateTag('EXPERIENCE', 'max');

    return res.data;
  } catch (error: any) {
    return {
      success: false,
      message: error.response?.data?.message || 'Upload failed',
    };
  }
};

export { addExperience };
