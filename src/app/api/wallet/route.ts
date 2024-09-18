"use server";
import { NextResponse } from 'next/server'
import { AvaCloudSDK} from "@avalabs/avacloud-sdk";
import { Erc721TokenBalance } from '@avalabs/avacloud-sdk/models/components/erc721tokenbalance';
import { Erc1155TokenBalance } from '@avalabs/avacloud-sdk/models/components/erc1155tokenbalance';
import { TransactionDetails } from '@avalabs/avacloud-sdk/models/components/transactiondetails';

const avaCloudSDK = new AvaCloudSDK({
    apiKey: process.env.GLACIER_API_KEY,
    chainId: "43114", // Avalanche Mainnet
    network: "mainnet",
  });
  
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const method = searchParams.get('method')
  let address
  try {
    let result
    switch (method) {
      case 'listERC721Balances':
        address = searchParams.get('address')!
        result = await listERC721Balances(address)
        break
      case 'listERC1155Balances':
        address = searchParams.get('address')!
        result = await listErc1155Balances(address)
        break
      case 'listRecentTransactions':
        address = searchParams.get('address')!
        result = await listRecentTransactions(address)
        break
      default:
        return NextResponse.json({ error: 'Invalid method' }, { status: 400 })
    }
    return NextResponse.json(result)
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

async function getBlockHeight() {
    //
    // TODO: Implement this!
    //
    return
}

const listERC721Balances = async (address: string) => {
    //
    // TODO: Implement this!
    //
    return
}

const listErc1155Balances = async (address: string) => {
    //
    // TODO: Implement this!
    //
    return
}

const listRecentTransactions = async (address: string) => {
    //
    // TODO: Implement this!
    //
    return
}