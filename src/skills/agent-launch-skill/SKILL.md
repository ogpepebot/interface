# SKILL.md - AI Agent Token Launch Skill

## Overview

This skill enables AI agents to autonomously launch their own tradable tokens on PepeX using a bonding curve mechanism. When the agent "graduates" from the bonding curve, the LP is burned and fees are used to buy & burn PEPE.

## Core Functionality

### 1. Agent Token Creation
- Agents can deploy their own ERC20 token with custom name, symbol, and supply
- Token is created via the AgentFactory smart contract
- Agent controls the token supply and can mint/burn as needed

### 2. Bonding Curve Mechanism
- Initial token sales happen via bonding curve (constant product or linear)
- Users can buy agent tokens with ETH
- Price starts low and increases as more is sold
- Creates fair initial distribution

### 3. Graduation Event
- Agent can trigger graduation when ready
- Bonding curve is exited (all remaining tokens converted to ETH-LP)
- LP is burned (permanently locked)
- Small fee (e.g., 2-3%) goes to protocol
- Fee is used to buy PEPE and burn in same transaction

### 4. PEPE Buy & Burn
- Protocol fee buys PEPE from DEX
- PEPE is burned (sent to dead address or burned function)
- Creates deflationary pressure

---

## Technical Specification

### Bonding Curve Formula

```solidity
// Linear bonding curve: price = initialPrice + (sold * slope)
// Or constant product: x * y = k

// For simplicity, linear curve:
price = initialPrice + (totalSold / totalSupply) * maxPrice
```

### Graduation Flow

```
1. Agent triggers graduation
2. Calculate remaining tokens in curve
3. Swap all tokens for ETH via curve
4. Create ETH-USDC/ETH-pepe LP
5. Burn LP (send to dead address)
6. Take protocol fee (e.g., 2%)
7. Use fee to buy PEPE
8. Burn PEPE
9. All in one atomic transaction
```

---

## Configuration

### Required Environment Variables
- `AGENT_FACTORY_ADDRESS` - Smart contract address
- `BONDING_CURVE_ADDRESS` - Bonding curve contract
- `PEPE_TOKEN_ADDRESS` - PEPE token for buyback
- `ROUTER_ADDRESS` - DEX router for swaps
- `WALLET_PRIVATE_KEY` - Agent's deployer wallet (optional, for signing)

### Smart Contract Addresses (Will be provided by user)

---

## Usage

### 1. Check Agent Status
```python
# Check if agent already has a token
status = await get_agent_status(agent_address)
```

### 2. Launch Token
```python
# Launch agent's own token
tx = await launch_agent_token(
    name="AgentName Token",
    symbol="AGNT",
    initial_supply=1000000,
    bonding_curve_params={
        "initial_price": 0.0001,  # ETH
        "max_price": 0.01,       # ETH
        "slope": 0.00001
    }
)
```

### 3. Get Token Info
```python
info = await get_token_info(token_address)
# Returns: name, symbol, totalSupply, bondingCurveState, agentAddress
```

### 4. Buy Agent Token (for users)
```python
# Buy agent tokens with ETH
tx = await buy_agent_token(
    token_address,
    eth_amount=0.1  # ETH to spend
)
```

### 5. Graduate (Exit Curve)
```python
# Agent graduates - burns LP, buys & burns PEPE
tx = await graduate_agent(
    token_address,
    fee_bps=250  # 2.5% fee
)
```

---

## Methods

| Method | Description |
|--------|-------------|
| `launch_token()` | Deploy new agent token with bonding curve |
| `get_status()` | Check if agent has token, bonding curve state |
| `get_price()` | Current price from bonding curve |
| `buy_token()` | Buy agent tokens with ETH |
| `sell_token()` | Sell agent tokens for ETH |
| `graduate()` | Exit bonding curve, burn LP, buy & burn PEPE |
| `get_balance()` | Check agent's token holdings |
| `get_lp_balance()` | Check bonding curve LP position |

---

## Error Handling

- `INSUFFICIENT_ETH` - Not enough ETH for purchase
- `CURVE_NOT_READY` - Cannot graduate yet (min duration not met)
- `ALREADY_LAUNCHED` - Agent already has a token
- `TRANSFER_FAILED` - Token transfer reverted

---

## Safety

- Always validate contract addresses before interacting
- Use estimated gas limits for bonding curve operations
- Graduation is irreversible - ensure agent is ready
- Test on testnet before mainnet

---

## Example: Complete Agent Launch

```python
# 1. Check if ready to launch
status = await get_agent_status(AGENT_WALLET)
if status.has_token:
    print("Agent already launched:", status.token_address)
else:
    # 2. Launch token
    print("Launching agent token...")
    tx = await launch_agent_token(
        name="OG Pepe AI Agent",
        symbol="OGPAI",
        initial_supply=1000000000  # 1B tokens
    )
    print("Token deployed:", tx.token_address)
    
    # 3. Wait for community to buy
    # (this happens over time)
    
    # 4. Graduate when ready
    print("Graduating agent...")
    graduate_tx = await graduate_agent(tx.token_address)
    print("LP burned, PEPE bought & burned!")
```

---

## Integration with PepeX

- Agent tokens trade on PepeX DEX after graduation
- Liquidity is permanently locked (LP burned)
- Trading fees benefit PEPE holders
- Protocol fee buys and burns PEPE

This creates a self-sustaining ecosystem where agents launch, trade, and contribute to PEPE buybacks! 🐸🚀