const main = async ()=>{
    const [deployer] = await hre.ethers.getSigners();
    console.log('Deploying contracts with account: ', deployer.address);

    const accountBalance = await deployer.getBalance();
    console.log('Account balance: ', accountBalance.toString());

    const Token = await hre.ethers.getContractFactory('WavePortal');
    const portal = await Token.deploy({
        value: hre.ethers.utils.parseEther('0.001'),
    });

    await portal.deployed();

    console.log('WavePortal address: ', portal.address);
};

const runMain = async()=>{
    try{
        await main();
        process.exit(0);
    }catch (e){
        console.error(`this error was dectated ${e}`);
        process.exit(1);
    }
};

runMain();