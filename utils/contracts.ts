import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { stakingABI } from "./stakingABI";

const nftContractAddress = "0xb014519e5e9b7FBA10E27e21306f786C7B324952";
const rewardTokenContractAddress = "0xfFbC9EfaAc969C89F1036b52192c224bA56F7Ef5";
const stakingContractAddress = "0x7d244aBb53E3D2b57be75Bc162BB265a84484886";

export const NFT_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: nftContractAddress
});

export const REWARD_TOKEN_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: rewardTokenContractAddress
});

export const STAKING_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: stakingContractAddress,
    abi: stakingABI
});
