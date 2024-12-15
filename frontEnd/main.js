

const tokenABI = 
  [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"allowance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientAllowance","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientBalance","type":"error"},{"inputs":[{"internalType":"address","name":"approver","type":"address"}],"name":"ERC20InvalidApprover","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"ERC20InvalidReceiver","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ERC20InvalidSender","type":"error"},{"inputs":[{"internalType":"address","name":"spender","type":"address"}],"name":"ERC20InvalidSpender","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]
;

const tokenABI_B = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"allowance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientAllowance","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientBalance","type":"error"},{"inputs":[{"internalType":"address","name":"approver","type":"address"}],"name":"ERC20InvalidApprover","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"ERC20InvalidReceiver","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ERC20InvalidSender","type":"error"},{"inputs":[{"internalType":"address","name":"spender","type":"address"}],"name":"ERC20InvalidSpender","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]

const simpleDexABI= [{"inputs":[{"internalType":"address","name":"_tokenA","type":"address"},{"internalType":"address","name":"_tokenB","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amountA","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountB","type":"uint256"}],"name":"LiquidityAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amountA","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountB","type":"uint256"}],"name":"LiquidityRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountIn","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountOut","type":"uint256"},{"indexed":true,"internalType":"bool","name":"isSwapAforB","type":"bool"}],"name":"Swapped","type":"event"},{"inputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"name":"addLiquidity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"getPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"name":"removeLiquidity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reserveA","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"reserveB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountAIn","type":"uint256"}],"name":"swapAforB","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountBIn","type":"uint256"}],"name":"swapBforA","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"tokenA","outputs":[{"internalType":"contract ERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenB","outputs":[{"internalType":"contract ERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]

const tokenAddress = "0x0E70D63bcFc8eD99C20403a8464f82c9dD19e15F"; 

let signer, tokenContract , tokenContractB , simpleDexContract;


const tokenAAddress = "0x0E70D63bcFc8eD99C20403a8464f82c9dD19e15F"; // Replace with the actual Token A address
const tokenBAddress = "0x372D440D197241F692D8f8A520a1e2ef5EC1Ba31";
const simpleDexAddress = "0x3595f83B785C4B69ED60245CC6f6299AC949D0Fc";



const connectButton = document.getElementById('connectButton');
const mintButton = document.getElementById('mintButton');
const walletInfo = document.getElementById('walletInfo');
const toggleButton = document.getElementById('toggleButton');
let isConnected = false;
let balanceTokenA;
let balanceTokenB;
let reserveA;
let reserveB;



function disconnectMetaMask() {
    signer = null;
    tokenContract = null;
    walletInfo.innerHTML = '<p>Disconnected from MetaMask</p>';
    mintButton.disabled = true;
    toggleButton.innerText = 'Connect MetaMask';
    isConnected = false;
  }
  

  async function checkNetwork() {
   
    const provider = new ethers.BrowserProvider(window.ethereum);
    const network = await provider.getNetwork();
    console.log("Connected Network:", network);
  
    if (network.chainId !== 11155111) {
      console.error("Please switch to Ethereum Sepolia (chainId: 11155111)");
    } else {
      console.log("Connected to Ethereum Sepolia!");
    }
  }
  

  async function connectMetaMask() {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const userAddress = accounts[0];
        console.log("user address " + userAddress)
        walletInfo.innerHTML = `<p>Connected Address :${userAddress} </p>`;
       
        isConnected = true;
        toggleButton.innerHTML = 'Disconnect from MetaMask';
  

        const provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();
  
      
        const name = await tokenContract.name();
     
        const balance = await tokenContract.balanceOf(userAddress);
        const balanceB = await  tokenContractB.balanceOf(userAddress);
        
        walletInfo.innerHTML += `<p>Token Balance: ${ethers.utils.formatUnits(balance)} tokens</p>`;
  
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
        walletInfo.innerHTML = '<p style="color:red;">Error connecting to MetaMask</p>';
      }
    } else {
      alert("MetaMask is not installed. Please install MetaMask to use this feature.");
    }
  }
  

  async function autoConnectMetaMask() {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.listAccounts();
      if (accounts.length > 0) {
        const userAddress = accounts[0];
        walletInfo.innerHTML = `<p>Connected Address: ${userAddress.address}</p>`;
        console.log(userAddress)
        isConnected = true;
        toggleButton.innerHTML = 'Disconnect from MetaMask';
  
     
        signer = await provider.getSigner();
  
       
        tokenContract = new ethers.Contract(tokenAddress, tokenABI, signer);
        tokenContractB = new ethers.Contract(tokenBAddress, tokenABI_B, signer);
        simpleDexContract = new ethers.Contract(simpleDexAddress, simpleDexABI, signer);
  
       
        const name = await tokenContract.name();
        console.log("Token Name:", name);
     //   walletInfo.innerHTML += `<p>Token Name: ${name}</p>`;
  
        balanceTokenA = await tokenContract.balanceOf(userAddress);
        balanceTokenB = await tokenContractB.balanceOf(userAddress);
        reserveA = await simpleDexContract.reserveA();
        reserveB = await simpleDexContract.reserveB();
  

      //  walletInfo.innerHTML += `<p>Token Balance: ${ethers.utils.formatUnits(balanceTokenA )} tokens</p>`;
      }
    }
  }




  async function checkBalance() {
   
    const address = document.getElementById('balanceAddress').value;
    
  
    if (address) {
  
        const mockBalance = await tokenContract.balanceOf(address);  
        const formattedBalance = ethers.formatUnits(mockBalance);
        document.getElementById('balanceValue').textContent = formattedBalance;
     
       
    } else {

        document.getElementById('balanceValue').textContent = 'Invalid address';
  
    }
}

async function checkBalanceTokenB() {
  
   
    const address = document.getElementById('balanceAddressB').value;
 
    console.log("toeken b" + address)
    

    if (address) {
     
        
        const mockBalance = await tokenContractB.balanceOf(address); 
        const formattedBalance = ethers.formatUnits(mockBalance);
        document.getElementById('balanceValueB').textContent = formattedBalance;

    } else {
   
        document.getElementById('balanceValueB').textContent = 'Invalid address';
    
    }
}




async function mintTokens() {
    alert("minting tokens")
  
    const mintRecipient = document.getElementById("mintRecipientA").value;
    const mintAmount = document.getElementById("mintAmountA").value;
   

    

   
    if (!mintRecipient || !mintAmount || mintAmount <= 0) {
        alert("Please enter a valid recipient address and amount.");
        return;
    }

    try {
        
      
        const transaction = await tokenContract.mint(mintRecipient, ethers.parseUnits(mintAmount, 18));

        
        await transaction.wait();

     
        alert("Minting successful!");
        console.log("Transaction hash:", transaction.hash);

    } catch (error) {
        console.error("Error minting tokens:", error);
        alert("An error occurred while minting the tokens.");
    }
}







async function mintTokensB() {
    alert("minting tokens")

    const mintRecipient = document.getElementById("mintRecipientB").value;
    const mintAmount = document.getElementById("mintAmountB").value;
   

    

    if (!mintRecipient || !mintAmount || mintAmount <= 0) {
        alert("Please enter a valid recipient address and amount.");
        return;
    }

    try {
        
    
        const transaction = await tokenContractB.mint(mintRecipient, ethers.parseUnits(mintAmount, 18));


        await transaction.wait();

        alert("Minting successful!");
        console.log("Transaction hash:", transaction.hash);

    } catch (error) {
        console.error("Error minting tokens:", error);
        alert("An error occurred while minting the tokens.");
    }
}







document.getElementById("approveButtonA").addEventListener("click", async (event) => {
   
    event.preventDefault();

    const spender = document.getElementById("spender").value;
    const value = document.getElementById("value").value;

    if (spender && value) {
        console.log(`Approve: Spender = ${spender}, Value = ${value}`);

        try {
          
            const transaction = await tokenContract.approve(spender, ethers.parseUnits(value,18));
            console.log("Transaction successful:", transaction);

       
            const receipt = await transaction.wait();
            console.log("Transaction Receipt:", receipt);


            alert(`Transaction successful! Receipt: ${JSON.stringify(receipt, null, 2)}`);
        } catch (error) {
            console.error("Error during approval:", error);

            alert(`Error during approval: ${error.message}`);
        }
    } else {
        console.error("Spender address and value are required.");
        alert("Please provide both the spender address and value.");
    }
});


document.getElementById("approveButtonB").addEventListener("click", async (event) => {
   
    event.preventDefault();

    const spender = document.getElementById("spenderb").value;
    const value = document.getElementById("valueb").value;

    if (spender && value) {
        console.log(`Approve: Spender = ${spender}, Value = ${value}`);

        try {
           
            const transaction = await tokenContractB.approve(spender, ethers.parseUnits(value,18));
            console.log("Transaction successful:", transaction);

            
            const receipt = await transaction.wait();
            console.log("Transaction Receipt:", receipt);

            
            alert(`Transaction successful! Receipt: ${JSON.stringify(receipt, null, 2)}`);
        } catch (error) {
            console.error("Error during approval:", error);

            
            alert(`Error during approval: ${error.message}`);
        }
    } else {
        console.error("Spender address and value are required.");
        alert("Please provide both the spender address and value.");
    }
});



async function transferTokenA(event) {
    event.preventDefault();
    alert("transfering tokens")
   
    const transferRecipient = document.getElementById("transferRecipientA").value;
    const transferAmount = document.getElementById("transferAmountA").value;
   

    console.log(transferRecipient)
    console.log(transferAmount)


 
    if (!transferRecipient || !transferAmount ) {
        alert("Please enter a valid recipient address and amount.");
        return;
    }

    try {
        
      
        const transaction = await tokenContract.transfer(transferRecipient, ethers.parseUnits(transferAmount, 18));

        await transaction.wait();

    
        alert("Transfer successful!");
        console.log("Transaction hash:", transaction.hash);

     
    } catch (error) {
        console.error("Error transfering tokens:", error);
        alert("An error occurred while transfering the tokens.");
    }
}


async function transferTokenB(event) {
    event.preventDefault();
    alert("transfering tokens")
  
    const transferRecipient = document.getElementById("transferRecipientB").value;
    const transferAmount = document.getElementById("transferAmountB").value;
   

    console.log(transferRecipient)
    console.log(transferAmount)


  
    if (!transferRecipient || !transferAmount ) {
        alert("Please enter a valid recipient address and amount.");
        return;
    }

    try {
        
      
        const transaction = await tokenContractB.transfer(transferRecipient, ethers.parseUnits(transferAmount, 18));


        await transaction.wait();

        
        alert("Transfer successful!");
        console.log("Transaction hash:", transaction.hash);


    } catch (error) {
        console.error("Error transfering tokens:", error);
        alert("An error occurred while transfering the tokens.");
    }
}



async function getPrice(event) {
    event.preventDefault();
  

    const priceRecipient = document.getElementById("priceAddress").value;
    
   





    if (!priceRecipient ) {
        alert("Please enter a valid recipient address and amount.");
        return;
    }

    try {
        
      
        const transaction = await simpleDexContract.getPrice(priceRecipient);

     
        alert("Token Price " +   ethers.formatUnits(transaction ,18 ) );
        console.log("Transaction hash:", transaction.hash);

    } catch (error) {
        console.error("Error getting price tokens:", error);
        alert("An error occurred while getting price.");
    }
}



document.getElementById("addLiquidityButton").addEventListener("click", async () => {
    const amountA = document.getElementById("amountA").value;
    const amountB = document.getElementById("amountB").value;

  
    const DECIMALS = 18;

    if (amountA && amountB) {
        try {
            
            const amountAParsed = ethers.parseUnits(amountA, DECIMALS);
            const amountBParsed = ethers.parseUnits(amountB, DECIMALS);

            console.log(`Adding Liquidity: Amount A = ${amountAParsed.toString()}, Amount B = ${amountBParsed.toString()}`);

         

         
            

            const transaction = await simpleDexContract.addLiquidity(amountAParsed, amountBParsed 
            );

            const receipt = await transaction.wait();
            console.log("Liquidity Added. Receipt:", receipt);


            const updatedReserveA = await simpleDexContract.reserveA();
            const updatedReserveB = await simpleDexContract.reserveB();
            document.getElementById("ReserveA").innerText = ethers.formatUnits(updatedReserveA, DECIMALS);
            document.getElementById("ReserveB").innerText = ethers.formatUnits(updatedReserveB, DECIMALS);

            alert("Liquidity added successfully!");
        } catch (error) {
           
            console.error("Error adding liquidity:", error);
            alert(`Error adding liquidity: ${error.message}`);

            if (error.code === "INSUFFICIENT_FUNDS") {
                alert("Insufficient funds to complete the transaction.");
            }
        }
    } else {
        alert("Please enter valid amounts for both tokens.");
    }
});

document.getElementById("allowanceButtonA").addEventListener("click", async function(event) {

    event.preventDefault();


    const ownerAddress = document.getElementById("spenderAllowanceA").value;
    const spenderAddress = document.getElementById("valueAllowanceA").value;
    console.log(ownerAddress )
    console.log(spenderAddress )



    if (!ownerAddress || !spenderAddress) {
        alert("Please fill in all the fields.");
        return;
    }

    try {
       
        const allowanceAmount = await tokenContract.allowance(ownerAddress, spenderAddress);
        console.log("Allowance amount:", allowanceAmount.toString());  

    
        alert(`Allowance: ${allowanceAmount.toString()}`);
    } catch (error) {
        console.error("Error during allowance check:", error);


        alert(`Error during allowance check: ${error.message}`);
    }
});

document.getElementById("allowanceButtonB").addEventListener("click", async function(event) {
 
    event.preventDefault();

 
    const ownerAddress = document.getElementById("spenderAllowanceB").value;
    const spenderAddress = document.getElementById("valueAllowanceB").value;

 
    if (!ownerAddress || !spenderAddress) {
        alert("Please fill in all the fields.");
        return;
    }

    try {
       
        const allowanceAmount = await tokenContractB.allowance(ownerAddress, spenderAddress);
        console.log("Allowance amount:", allowanceAmount.toString());  


        alert(`Allowance: ${allowanceAmount.toString()}`);
    } catch (error) {
        console.error("Error during allowance check:", error);

     
        alert(`Error during allowance check: ${error.message}`);
    }
});



document.getElementById("removeLiquidityButton").addEventListener("click", async () => {
    const amountA = document.getElementById("removeAmountA").value;
    const amountB = document.getElementById("removeAmountB").value;

  
    const DECIMALS = 18;

    if (amountA && amountB) {
        try {
          
            const amountAParsed = ethers.parseUnits(amountA, DECIMALS);
            const amountBParsed = ethers.parseUnits(amountB, DECIMALS);

            console.log(`Remove Liquidity: Amount A = ${amountAParsed.toString()}, Amount B = ${amountBParsed.toString()}`);

            const reserveA = await simpleDexContract.reserveA();
            const reserveB = await simpleDexContract.reserveB();
            console.log("Current Reserves:", 
                ethers.formatUnits(reserveA, DECIMALS), 
                ethers.formatUnits(reserveB, DECIMALS)
            );

          

         
            const transaction = await simpleDexContract.removeLiquidity(amountAParsed, amountBParsed);
          //  const transaction = await simpleDexContract.removeLiquidity(amountA, amountB);

         
            const receipt = await transaction.wait();
            console.log("Liquidity Removed. Receipt:", receipt);

        
            const updatedReserveA = await simpleDexContract.reserveA();
            const updatedReserveB = await simpleDexContract.reserveB();
           
           
            document.getElementById("ReserveA").innerText = Math.floor(Number(ethers.formatUnits(updatedReserveA, DECIMALS)));
            document.getElementById("ReserveB").innerText = Math.floor(ethers.formatUnits(updatedReserveB, DECIMALS));

            alert("Liquidity removed successfully!");
        } catch (error) {
            console.error("Error removing liquidity:", error);
            alert(`Error removing liquidity: ${error.message}`);
        }
    } else {
        alert("Please enter valid amounts for both tokens.");
    }
});



async function swapAforB(event) {
    event.preventDefault();
  
    
   
    const swapAmount = document.getElementById("swapAmountA").value;
    
   
    const swapAmount18=  ethers.parseUnits(swapAmount,18);

    console.log(swapAmount18)




    if (!swapAmount ) {
        alert("Please enter a valid recipient address and amount.");
        return;
    }

    try {
        
      
        const transaction = await simpleDexContract.swapAforB(swapAmount18);


        const receipt = await transaction.wait();
        console.log("Liquidity Added. Receipt:", receipt);
  
        console.log("Transaction hash:", transaction.hash);

   
    } catch (error) {
        console.error("Error getting price tokens:", error);
        alert("An error occurred while getting price.");
    }
}


async function swapBforA(event) {
    event.preventDefault();

   
  
  
   
    const swapAmount = document.getElementById("swapAmountB").value;
    
   
    





    if (!swapAmount ) {
        alert("Please enter a valid recipient address and amount.");
        return;
    }

    const swapAmount18=  ethers.parseUnits(swapAmount,18);

    try {
        
      
        const transaction = await simpleDexContract.swapBforA(swapAmount18);

        const receipt = await transaction.wait();
        alert("Liquidity Added. Receipt:", receipt);

        console.log("Transaction hash:", transaction.hash);

    } catch (error) {
        console.error("Error swaping token B for A:", error);
        alert("An error occurred while getting price.");
    }
}





  
  toggleButton.addEventListener('click', () => {
    if (isConnected) {
      disconnectMetaMask();
    } else {
      connectMetaMask();
    }
  });

  async function checkNetwork() {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const network = await provider.getNetwork();
    console.log("Connected Network:", network);

    if (network.chainId !== 11155111) {
        console.error("Please switch to Ethereum Sepolia (chainId: 11155111)");
    } else {
        console.log("Connected to Ethereum Sepolia!");
    }
}


  document.addEventListener("DOMContentLoaded", async () => {
    
    await autoConnectMetaMask();
    document.getElementById("tokenAAddress").textContent = tokenAAddress;
    document.getElementById("tokenBAddress").textContent = tokenBAddress;
    document.getElementById("tokenABalance").textContent = Math.floor(Number(ethers.formatUnits(String(balanceTokenA),18)));
    document.getElementById("tokenBBalance").textContent = Math.floor(Number(ethers.formatUnits(String(balanceTokenB),18)));
    document.getElementById("ReserveA").textContent = Math.floor(Number(ethers.formatUnits(String(reserveA),18)));
    document.getElementById("ReserveB").textContent = Math.floor(Number(ethers.formatUnits(String(reserveB),18)));
    const mintButtonA = document.getElementById("mintButtonA");
    const  mintButtonB = document.getElementById("mintButtonB");
    document.getElementById('checkBalanceButton').addEventListener('click', checkBalance);
    document.getElementById('checkBalanceButtonB').addEventListener('click', checkBalanceTokenB);
    document.getElementById('checkBalanceButtonB').addEventListener('click', checkBalanceTokenB);
    document.getElementById('transferAmountBtn').addEventListener('click', transferTokenA);
    document.getElementById('transferAmountB_Btn').addEventListener('click', transferTokenB);
    document.getElementById('getPriceButton').addEventListener('click', getPrice);
    
    document.getElementById('swapAforBButton').addEventListener('click', swapAforB);
    document.getElementById('swapBforAButton').addEventListener('click', swapBforA);


   
    mintButtonA.addEventListener("click", mintTokens); 
    mintButtonB.addEventListener("click", mintTokensB); 
    checkNetwork()
   



    

    

  });




