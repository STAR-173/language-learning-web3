# Web3 Video Calling DApp 🎥🌐

## 🚀 Project Overview

Web3 Video Call is a decentralized video communication application that leverages blockchain technology to create a peer-to-peer video calling experience. By utilizing Ethereum smart contracts and WebRTC, this DApp provides a secure, transparent, and censorship-resistant video communication platform.

## ✨ Key Features

- **Decentralized Communication**: No central server controls your video calls
- **Blockchain-Powered Signaling**: Call creation and participant management via smart contracts
- **Web3 Wallet Integration**: Connect using MetaMask or other Web3 wallets
- **Peer-to-Peer Video Streaming**: Direct video transmission between participants
- **Secure Signaling**: WebRTC signal exchange through Ethereum blockchain

## 🛠 Tech Stack

- **Frontend**: React.js
- **Blockchain Interaction**: Ethers.js
- **Smart Contracts**: Solidity
- **WebRTC**: Simple-Peer
- **Styling**: Tailwind CSS
- **Development**: Hardhat

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or later)
- npm (v6 or later)
- MetaMask Browser Extension
- Hardhat
- Web3 Wallet

## 🔧 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/web3-video-call-dapp.git
cd web3-video-call-dapp
```

### 2. Install Dependencies
```bash
# Install root project dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory with the following variables:
```
SEPOLIA_RPC_URL=your_sepolia_rpc_endpoint
MUMBAI_RPC_URL=your_mumbai_rpc_endpoint
PRIVATE_KEY=your_ethereum_wallet_private_key
ETHERSCAN_API_KEY=your_etherscan_verification_key
```

### 4. Compile Smart Contracts
```bash
npx hardhat compile
```

### 5. Deploy Contracts
Choose a network (Sepolia recommended for testing):
```bash
npx hardhat run scripts/deploy.js --network sepolia
```

### 6. Start Frontend
```bash
npm run frontend
```

## 🌐 Supported Networks

- Ethereum Sepolia Testnet
- Polygon Mumbai Testnet
- Local Hardhat Network

## 🔒 Security Considerations

- Never share your private key
- Use testnets for development and testing
- Implement additional security measures in production

## 💡 How It Works

1. **Wallet Connection**: Connect your Web3 wallet
2. **Create Call**: Generate a unique call ID on the blockchain
3. **Join Call**: Enter a call ID to join an existing call
4. **WebRTC Signaling**: Exchange connection details via smart contract
5. **Peer-to-Peer Video**: Establish direct video communication

## 🚧 Current Limitations

- Limited to two-participant calls
- Requires Web3 wallet
- Depends on blockchain network conditions

## 🔮 Future Roadmap

- Multi-participant video calls
- Enhanced encryption
- STUN/TURN server integration
- Mobile wallet support

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Contact

Your Name - [Your Email/Twitter]

Project Link: [https://github.com/yourusername/web3-video-call-dapp](https://github.com/yourusername/web3-video-call-dapp)

## 🙌 Acknowledgements

- [Hardhat](https://hardhat.org/)
- [Ethers.js](https://docs.ethers.io/)
- [Simple Peer](https://github.com/feross/simple-peer)
- [React](https://reactjs.org/)