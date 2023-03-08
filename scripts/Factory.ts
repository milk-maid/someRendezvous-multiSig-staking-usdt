import { ethers } from "hardhat";

async function main() {
  const [owner, admin2, admin3] = await ethers.getSigners();
  const admin = [
    owner.address, admin2.address, admin3.address,
    "0xF72E1800c0ef2740B9AeB2Cdae499BDFa6fb9690", ];

//   const CloneMultiSig = await ethers.getContractFactory("cloneMultiSig");
//   const cloneMultiSig = await CloneMultiSig.deploy();
//   await cloneMultiSig.deployed();

  // console.log(`Multisig Address is ${cloneMultiSig.address}`);
  // console.log(owner.address);

//   const newMultisig = await cloneMultiSig.createMultiSig(admin);
//   let event = await newMultisig.wait();ETHERSCAN_API_KEY
//   let newChild = event.events[0].args[0];
//   console.log(newChild);

  //////////////////////////////////////////////////
  console.log(owner.address)
  console.log(admin2.address);
  console.log(admin3.address);

  const childMultisig = await ethers.getContractAt(
    "IMultisig",
    "0xEE1d6Ce8F45704a822c0588AAf58d3FCdC9C3A5F"
  );
  const addresses = await childMultisig.returnAdmins();
  console.log(addresses);

//   await childMultisig.addAdmin("0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC");
  await childMultisig.connect(admin3).addAdmin("0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC");

  const addressesNew = await childMultisig.returnAdmins();
  console.log(addressesNew);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


