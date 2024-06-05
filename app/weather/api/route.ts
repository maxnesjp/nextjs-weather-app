import { NextRequest, NextResponse } from 'next/server';
import axios, { AxiosRequestConfig } from 'axios';
import { sampleData } from '@/constants';

const isActive = true;

export async function POST(req: NextRequest) {
  if (!isActive) {
    return NextResponse.json(sampleData);
  }
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
