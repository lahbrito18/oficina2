const hre = require("hardhat");

async function main() {
  const NotaFiscal = await hre.ethers.getContractFactory("NotaFiscal");
  const contrato = await NotaFiscal.deploy();

  // Espera o contrato ser implantado e obtém o endereço
  await contrato.waitForDeployment();
  const endereco = await contrato.getAddress();

  console.log("✅ Contrato implantado em:", endereco);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
