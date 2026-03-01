// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract MusicAccess {

mapping(address => bool)
public premium;

function enablePremium() public {

premium[msg.sender] = true;

}

function hasPremium(address user)
public
view
returns(bool){

return premium[user];

}

}
