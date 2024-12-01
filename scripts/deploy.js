const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const VideoChatContract = await hre.ethers.getContractFactory("VideoChatContract");
  const videoChatContract = await VideoChatContract.deploy();

  await videoChatContract.deployed();

  console.log("VideoChatContract deployed to:", videoChatContract.address);

  // Save contract address and ABI for frontend
  const fs = require('fs');
  const contractAddress = videoChatContract.address;
  const contractABI = JSON.parse(videoChatContract.interface.format('json'));

  fs.writeFileSync(
    './frontend/src/contracts/VideoChatContract.json', 
    JSON.stringify({
      address: contractAddress,
      abi: contractABI
    }, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });