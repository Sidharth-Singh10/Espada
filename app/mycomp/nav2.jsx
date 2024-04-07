"use client";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import React, { FC, ReactNode, createContext, useMemo } from "react";
import { useEffect, useState } from "react";
import { BalanceDisplay } from "./balance";
import axios from 'axios'


require("@solana/wallet-adapter-react-ui/styles.css");
import {
  Connection,
  Transaction,
  SystemProgram,
  sendAndConfirmTransaction,
  PublicKey,
} from "@solana/web3.js";


const Nav2 = () => {
  return (
    <Context>
      <Content />
    </Context>
  );
};
export default Nav2;

const Context = ({ children }) => {
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = WalletAdapterNetwork.Devnet;

  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(() => [], [network]);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

const Content = () => {
  const { connection } = useConnection();
const { publicKey } = useWallet();
  const [value, setValue] = useState({
    gold: "0",
    sols: "0",
  });

  const [inputs, setinputs] = useState('');
  const handleInputChange = (event) => {
    setinputs(event.target.value);
  };

  const [balances,setbalance] = useState('1.27');

const apiKeyExchangeRate = 'YOUR_API_KEY'; // Replace with your API key
const baseCurrency = 'USD';
const targetCurrency = 'INR';
// API details for converting USD to Gold
const endpointGold = 'https://api.metalpriceapi.com/v1/latest';
const apiKeyGold = 'bfca23b91354f653036fa053f4e68f3d';
const currencies = 'XAU';
// Amount in INR (Rupees)
// Fetch exchange rate
const exchangeRateEndpoint = `https://api.exchangerate-api.com/v4/latest/${baseCurrency}`;

  const changebalance = () =>
  {
    setbalance('1.33');
  }

const converts = async () => {
  try {
      const amountINR = parseInt(inputs); 
      const response = await axios.get(exchangeRateEndpoint);
      if (response.data && response.data.rates && response.data.rates[targetCurrency]) {
        // Calculate equivalent amount in USD
        const exchangeRate = response.data.rates[targetCurrency];
        const amountUSD = amountINR / exchangeRate;

        // Fetch gold rate
        const goldResponse = await axios.get(`${endpointGold}?api_key=${apiKeyGold}&base=${baseCurrency}&currencies=${currencies}`);
        const goldRatePerOunce = goldResponse.data.rates.XAU;
        const goldRatePerGram = goldRatePerOunce / 0.00000587248;
        const goldPerUSD = 1 / goldRatePerGram;

        const equivalentGold = goldPerUSD * amountUSD;
        const gramgold = equivalentGold.toFixed(2);
        const espvalue = (1 / 0.15) * gramgold;
        setValue({
          gold: equivalentGold.toFixed(2),
          sols: espvalue.toFixed(2),
      });

        console.log(`${amountINR} INR is equivalent to ${equivalentGold.toFixed(2)} grams of gold.`);
      } else {
        console.error('Error: Unable to fetch exchange rate data');
      }
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }

  }


  return (
    <div className="px-12 pt-4 ">
      <div className="navbar bg-white text-black w-11/12 bg-opacity-55 fixed   rounded-3xl shadow-md z-50 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content flex justify-center items-center mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Espada</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu  menu-horizontal  ">
            <li className="pt-4  px-4 ">
              <a>About Us</a>
            </li>
            <li className="pt-4 px-4  ">
              <details>
                <summary>Info</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li className="pt-4 px-8 ">
              <a>Contact us</a>
            </li>
            <li className=" pt-2 pr-8">
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <button className="btn btn-ghost" onClick={() => document.getElementById('my_modal_1').showModal()}>Buy ESP</button>
              <dialog id="my_modal_1" className="modal flex justify-center items-center">
                <div className="modal-box ">
                  <h3 className="font-bold text-lg ">BUY ESP</h3>
                  <div className="mt-2 flex gap-2">
                  <input type="text" value={inputs} onChange={handleInputChange} id="amounts" placeholder="Enter Amount in INR" className="input  input-bordered input-primary w-full max-w-xs" />
                  <button className="btn btn-primary" onClick={converts} >Convert</button>
                  </div>
                  <div className="mt-4">
                    Equivalent Amount:
                  </div>
                  <div className="flex mt-2 gap-4 ">
                    <div className="btn btn-outline btn-md ">
                      {value.gold}g Gold
                    </div>
                    <div className="btn btn-outline">
                      {value.sols}SOL
                    </div>
                  </div>
                  <div className="modal-action">
                    <button className="btn btn-wide btn-success" onClick={changebalance}>
                      Confirm Payment
                    </button>
                    <form method="dialog">
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>



            </li>
            <li className="pt-4 text-md">
              <span>Balance:<span>{balances} </span> </span>
            </li>
            <li className="">
              <WalletMultiButton />
            </li>
          </ul>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="./logo.png"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>{" "}
      </div>
    </div>
  );
};
