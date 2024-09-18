"use server";
import { NextResponse } from 'next/server'
import { AvaCloudSDK} from "@avalabs/avacloud-sdk";
import { NativeTransaction, EvmBlock } from '@avalabs/avacloud-sdk/models/components';

const avaCloudSDK = new AvaCloudSDK({
    apiKey: process.env.AVACLOUD_API_KEY,
    chainId: "43114", // Avalanche Mainnet
    network: "mainnet",
  });
  
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const method = searchParams.get('method')
  try {
    let result
    switch (method) {
      case 'getRecentTransactions':
        result = await getRecentTransactions()
        break
      case 'getRecentBlocks':
        result = await getRecentBlocks()
        break
      default:
        return NextResponse.json({ error: 'Invalid method' }, { status: 400 })
    }
    return NextResponse.json(result)
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}


const getRecentBlocks = async () => {
    //
    // TODO: Implement this!
    //
    return
}

const getRecentTransactions = async () => {
    //
    // TODO: Implement this!
    //
    return
}