const { ethers } = require("ethers");
const contractABI = require("./contract_abi.json"); // Contract ABI from contract_abi.json
const input = require("./input.json"); // Input values from input.json

async function verifyProofOnContract() {
  const provider = new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/polygon_mumbai");
  const privateKey = "7bfd039013915ff8cd6b368aff340c07715fcc75250fec4e1dd59985e89c6201";
  const wallet = new ethers.Wallet(privateKey, provider);

  const verifierContractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // Replace with your deployed contract address

  const verifierContract = new ethers.Contract(verifierContractAddress, contractABI, wallet);

  // Load the proof and public inputs from input.json
  const proof = input.proof;
  const publicInputs = input.publicInputs;

  // Call the verifyProof() method on the contract and get the result
  try {
    const result = await verifierContract.verifyProof(proof, publicInputs);

    // Assert the output is true
    console.log("Is Proof Valid?", result === true);
  } catch (err) {
    console.error("Error during verification:", err);
  }
}

verifyProofOnContract();
