# zkSNARK_circuit
## AND-NOT-OR logic gates

## Overview

This repository contains a simple AND-NOT-OR gate combination zxSNARK circuit implemented in Circom. The circuit takes two input signals, A and B, performs the AND operation on them, applies the NOT operation on signal B, and finally combines the results using an OR gate to produce the final output Q.

## Prerequisites

- Node.js and npm (Node Package Manager) should be installed on your machine. If you don't have them, download and install Node.js from the official website: https://nodejs.org/

## Getting Started

1. Clone this repository to your local machine.
2. Open the cloned folder in Visual Studio Code.

3. Install the required dependencies:
   - Open a terminal in VS Code
   - Run the following command in the terminal:

```bash
npm install
```

## Circuit Definition
The circuit's definition is provided in the circom-and-not-or-gate.circom file. You can open and modify the circuit in VS Code by navigating to the file.

## Compiling the Circuit
- To compile the Circom code and generate the constraint system:
- Open a terminal in VS Code: Ctrl+Backtick or View -> Terminal.
Run the following command in the terminal:

```bash
npx hardhat compile
```
- to deploy this run the following command in your terminal:

```bash
npx hardhat run scripts/deploy.ts  
```
- after deploying you need to run it on the mumbai testnet and verify by showing the wallet amount
- the following command to run it on the mumbai testnet

```bash
npx hardhat run scripts/deploy.ts --network mumbai  
```
- This will output `true` if the proof is valid;
- otherwise, it will output `false`

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

Feel free to copy and paste this README content into a new file named `README.md` in your VS Code project's root directory. You can then customize it further to match the specific details of your circuit and project.

