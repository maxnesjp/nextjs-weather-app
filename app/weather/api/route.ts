import { NextRequest, NextResponse } from 'next/server';
import axios, { AxiosRequestConfig } from 'axios';
import { sampleData } from '@/constants';


const isActive = true;
const AZURE_ENDPOINT = process.env.AZURE_FUNCTION_ENDPOINT;
const LOCAL_ENDPOINT = process.env.LOCAL_FUNCTION_ENDPOINT;

export async function GET(req: NextRequest) {
  if (!isActive) {
    return NextResponse.json(sampleData);
  }
  
  const { searchParams } = new URL(req.url);
  const city = searchParams.get('city');
  if (!city) {
    return NextResponse.json({ error: 'City parameter is required' }, { status: 400 });
  }
  if (!AZURE_ENDPOINT) {
    return NextResponse.json({ error: 'Endpoint is invalid' }, { status: 500 });
  }
  try {
    const config: AxiosRequestConfig = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${AZURE_ENDPOINT}/weatherFunction?city=${city}`,
      headers: {}
    };
    const response = await axios.request(config);
    return NextResponse.json(response.data);
   
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error fetching weather data' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const { city, email } = await req.json();
  if (!city || !email) {
    return NextResponse.json({ error: 'City and Email parameters are required' }, { status: 400 });
  }
  if (!AZURE_ENDPOINT) {
    return NextResponse.json({ error: 'Endpoint is invalid' }, { status: 500 });
  }
  try {
    const config: AxiosRequestConfig = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${AZURE_ENDPOINT}/RegisterCustomer?email=${email}&city=${city}`,
      headers: {}
    };
    const response = await axios.request(config);
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json({ error: 'Error registering customer' }, { status: 500 });
  }
}