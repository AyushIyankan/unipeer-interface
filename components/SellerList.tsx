import React, { useState, useEffect } from "react";

import {BigNumber} from "@ethersproject/bignumber";
import { formatEther } from "@ethersproject/units";

import {
  useAccount,
  useContract,
  useProvider,
  useNetwork,
} from "wagmi";

import { addresses } from "../util";
import {type Unipeer } from "../contracts/types";
import UNIPEER_ABI from "../contracts/Unipeer.json";

export default function SellerList() {
  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();
  const provider = useProvider();
  const [sellers, setSellers] = useState<
    { sender: string; paymentId: number; paymentAddress: string; feeRate: BigNumber, amount: BigNumber}[]
  >([]);
  const Dai = addresses.DAI[chain?.id || 10200];

  const Unipeer: Unipeer = useContract({
    addressOrName: addresses.UNIPEER[chain?.id || 10200 ],
    contractInterface: UNIPEER_ABI.abi,
    signerOrProvider: provider,
  })

  const fetchSellerList = async () => {
    const filter = Unipeer.filters.SellerPaymentMethod();
    const result = await Unipeer.queryFilter(filter, 222028);

    const events = await Promise.all(result.map(async log => {
      const bal = await Unipeer.tokenBalance(log.args[0], Dai);
      return { sender: log.args[0], paymentId: log.args[1], paymentAddress: log.args[2], feeRate: log.args[3], amount: bal }
    }));

    setSellers(events)
  };

  useEffect(() => {
    fetchSellerList();
  }, [isConnected]);

  const sellersList =
    sellers.length > 0 &&
    sellers.map((item, i) => {
      return (
        <tr key={i}>
          <td className="tb-border">
            {item!.paymentId}
          </td>
          <td className="tb-border">
            {item!.sender}
          </td>
          <td className="tb-border">
            {item!.paymentAddress}
          </td>
          <td className="tb-border">
            {formatEther(item!.amount)} WXDAI
          </td>
          <td className="tb-border">
            {item!.feeRate.toNumber() / 10000}%
          </td>
        </tr>
      );
    });

  return (
    <table className="table-auto border-separate border-spacing-1 border border-slate-300">
      <tr>
        <th className="tb-border">Payment Id</th>
        <th className="tb-border">Seller</th>
        <th className="tb-border">Payment Address</th>
        <th className="tb-border">Available Balance</th>
        <th className="tb-border">Fee Rate</th>
      </tr>
      {sellersList}
    </table> 
  );
}
