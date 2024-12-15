// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SimpleDEXX is Ownable {
    ERC20 public tokenA;
    ERC20 public tokenB;

    uint256 public reserveA;
    uint256 public reserveB;

    event LiquidityAdded(uint256 amountA, uint256 amountB);
    event LiquidityRemoved(uint256 amountA, uint256 amountB);
    event Swapped(
        address indexed user,
        uint256 amountIn,
        uint256 amountOut,
        bool indexed isSwapAforB
    );

    constructor(address _tokenA, address _tokenB) Ownable(msg.sender) {
        tokenA = ERC20(_tokenA);
        tokenB = ERC20(_tokenB);
    }

    function addLiquidity(uint256 amountA, uint256 amountB) external onlyOwner {
        // Check
        require(
            tokenA.transferFrom(msg.sender, address(this), amountA),
            "Transfer of TokenA failed"
        );
        require(
            tokenB.transferFrom(msg.sender, address(this), amountB),
            "Transfer of TokenB failed"
        );

        // Effect
        reserveA += amountA;
        reserveB += amountB;

        // Emit
        emit LiquidityAdded(amountA, amountB);
    }

    function removeLiquidity(
        uint256 amountA,
        uint256 amountB
    ) external onlyOwner {
        // Check
        require(
            reserveA >= amountA && reserveB >= amountB,
            "Insufficient liquidity"
        );

        // Effect
        reserveA -= amountA;
        reserveB -= amountB;

        // Interaction
        require(
            tokenA.transfer(msg.sender, amountA),
            "Transfer of TokenA failed"
        );
        require(
            tokenB.transfer(msg.sender, amountB),
            "Transfer of TokenB failed"
        );

        emit LiquidityRemoved(amountA, amountB);
    }

    function swapAforB(uint256 amountAIn) external {
        // Check
        uint256 amountBOut = getAmountOut(amountAIn, reserveA, reserveB);
        require(
            tokenA.transferFrom(msg.sender, address(this), amountAIn),
            "Transfer of TokenA failed"
        );
        require(
            tokenB.transfer(msg.sender, amountBOut),
            "Transfer of TokenB failed"
        );

        // Effect
        reserveA += amountAIn;
        reserveB -= amountBOut;

        emit Swapped(msg.sender, amountAIn, amountBOut, true);
    }

    function swapBforA(uint256 amountBIn) external {
        // Check
        uint256 amountAOut = getAmountOut(amountBIn, reserveB, reserveA);
        require(
            tokenB.transferFrom(msg.sender, address(this), amountBIn),
            "Transfer of TokenB failed"
        );
        require(
            tokenA.transfer(msg.sender, amountAOut),
            "Transfer of TokenA failed"
        );

        // Effect
        reserveB += amountBIn;
        reserveA -= amountAOut;

        emit Swapped(msg.sender, amountBIn, amountAOut, false);
    }

    function getAmountOut(
        uint256 amountIn,
        uint256 reserveIn,
        uint256 reserveOut
    ) public pure returns (uint256) {
        require(amountIn > 0, "Amount in must be greater than 0");
        require(
            reserveIn > 0 && reserveOut > 0,
            "Reserves must be greater than 0"
        );

        return (amountIn * reserveOut) / (reserveIn + amountIn);
    }

    /*

    function getPrice(address _token) public view returns (uint256) {
        require(
            _token == address(tokenA) || _token == address(tokenB),
            "Invalid token"
        );


        uint256 price;
        if (_token == address(tokenA)) {
            // Precio escalado de 1 token a en relacion tokenb
            price = (reserveB * 1e18) / reserveA;
        } else {
            //  Precio escalado de 1 token b en relacion tokenb
            price = (reserveA * 1e18) / reserveB;
        }


  
        return price;
    }
*/

    function getPrice(address _token) external view returns (uint256) {
        require(
            _token == address(tokenA) || _token == address(tokenB),
            "Invalid token"
        );

        return
            _token == address(tokenA)
                ? (tokenB.balanceOf(address(this)) * 1e18) /
                    tokenA.balanceOf(address(this))
                : (tokenA.balanceOf(address(this)) * 1e18) /
                    tokenB.balanceOf(address(this));
    }
}
