import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { stakingABI } from "./stakingABI";

const nftContractAddress = "0xAB3c186aB572953a76ED8daEE611C2730B86be2c";
const rewardTokenContractAddress = "0xfFbC9EfaAc969C89F1036b52192c224bA56F7Ef5";
const stakingContractAddress = "0xA2dA1b1281CA0486B447b2774a7a4ff80aF2B623";

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
