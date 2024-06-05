import { NextRequest, NextResponse } from 'next/server';
import axios, { AxiosRequestConfig } from 'axios';
import { sampleData } from '@/constants';

const isActive = true;

// export async function POST(req: NextRequest) {
//   try {
//     const { city } = await req.json();

//     if (!city) {
//       return NextResponse.json({ error: 'City parameter is required' }, { status: 400 });
//     }

//     const azureEndpoint = process.env.AZURE_FUNCTION_ENDPOINT;
//     // console.log(azureEndpoint);
//     if (!azureEndpoint) {
//       throw new Error('API key is not set in environment variables');
//     }
//     let data;
//     if (isActive) {
//       let config = {
//         method: 'get',
//         maxBodyLength: Infinity,
//         url: `${azureEndpoint}?city=${city}`,
//         headers: { }
//       };
      
//       axios.request(config)
//       .then((response) => {
//         return NextResponse.json(JSON.stringify(response.data));
//       })
//       .catch((error) => {
//         console.error('Error fetching weather data:', error);
//         return NextResponse.json({ error: error }, { status: error.status });
//       });
//     } else {
//       data = sampleData;
//       return NextResponse.json(data);
//     }
  
//   } catch (error) {
//     console.error('Error fetching weather data:', error);
//     return NextResponse.json({ error: error }, { status: 500 });
//   }
// }

export async function POST(req: NextRequest) {
  const { city } = await req.json();
  if (!city) {
    return NextResponse.json({ error: 'City parameter is required' }, { status: 400 });
  }
  const API_KEY = process.env.AZURE_FUNCTION_ENDPOINT;
  if (!API_KEY) {
    return NextResponse.json({ error: 'API_KEY is invalid' }, { status: 500 });
  }
  try {
    const config: AxiosRequestConfig = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${API_KEY}?city=${city}`,
      headers: {}
    };
    const response = await axios.request(config);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error fetching weather data' }, { status: 500 });
  }
}
