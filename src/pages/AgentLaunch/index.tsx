import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
`

const Title = styled.h1`
  font-size: 36px;
  color: #3AD160;
  margin-bottom: 16px;
  
  span {
    background: linear-gradient(135deg, #3AD160, #00D9FF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

const Subtitle = styled.p`
  font-size: 18px;
  color: #8a8a9a;
  max-width: 600px;
  margin: 0 auto;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 40px;
`

const Card = styled.div`
  background: #12121a;
  border: 1px solid rgba(58, 209, 96, 0.2);
  border-radius: 20px;
  padding: 24px;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #3AD160;
    transform: translateY(-4px);
  }
`

const CardTitle = styled.h3`
  font-size: 20px;
  color: #00D9FF;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
`

const CardText = styled.p`
  color: #8a8a9a;
  font-size: 14px;
  line-height: 1.6;
`

const Form = styled.div`
  background: #12121a;
  border: 1px solid rgba(58, 209, 96, 0.2);
  border-radius: 20px;
  padding: 32px;
  margin-top: 40px;
`

const FormTitle = styled.h2`
  font-size: 24px;
  color: #3AD160;
  margin-bottom: 24px;
`

const InputGroup = styled.div`
  margin-bottom: 20px;
`

const Label = styled.label`
  display: block;
  color: #8a8a9a;
  font-size: 14px;
  margin-bottom: 8px;
`

const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  background: #0a0a0f;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: #fff;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: #3AD160;
  }
  
  &::placeholder {
    color: #4a4a5a;
  }
`

const TextArea = styled.textarea`
  width: 100%;
  padding: 14px 16px;
  background: #0a0a0f;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: #fff;
  font-size: 16px;
  min-height: 120px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #3AD160;
  }
`

const Select = styled.select`
  width: 100%;
  padding: 14px 16px;
  background: #0a0a0f;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: #fff;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: #3AD160;
  }
`

const Button = styled.button`
  width: 100%;
  padding: 16px;
  background: linear-gradient(135deg, #3AD160, #2ab54e);
  border: none;
  border-radius: 12px;
  color: #000;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 24px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(58, 209, 96, 0.3);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: rgba(58, 209, 96, 0.1);
  border-radius: 12px;
  margin-top: 12px;
`

const InfoLabel = styled.span`
  color: #8a8a9a;
  font-size: 14px;
`

const InfoValue = styled.span`
  color: #3AD160;
  font-weight: 700;
`

const Badge = styled.span`
  display: inline-block;
  padding: 4px 12px;
  background: rgba(58, 209, 96, 0.2);
  color: #3AD160;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
`

export default function AgentLaunchPage() {
  const [formData, setFormData] = useState({
    agentName: '',
    tokenName: '',
    tokenSymbol: '',
    description: '',
    tokenomics: '1000000000',
    curveType: 'linear',
    graduationFee: '250' // 2.5%
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // This would connect to the smart contract
    alert('Agent token launch coming soon! Smart contracts are being deployed.')
  }

  return (
    <Container>
      <Header>
        <Title>🤖 <span>AI Agent Launchpad</span></Title>
        <Subtitle>
          Launch your AI agent as a tradable token on PepeX. 
          Use bonding curves for fair distribution, then graduate to burn LP and buy PEPE!
        </Subtitle>
      </Header>

      <Grid>
        <Card>
          <CardTitle>🚀 Bonding Curve</CardTitle>
          <CardText>
            Agents start with a bonding curve for fair price discovery. 
            No pre-mined tokens, no VC allocations - everyone buys at the same price.
          </CardText>
        </Card>

        <Card>
          <CardTitle>🎓 Graduation</CardTitle>
          <CardText>
            When ready, agents "graduate" from the curve. LP is burned permanently. 
            A small fee buys and burns PEPE in the same transaction.
          </CardText>
        </Card>

        <Card>
          <CardTitle>🔥 PEPE Buy & Burn</CardTitle>
          <CardText>
            Every graduation triggers PEPE buy & burn. 
            As more agents launch and graduate, more PEPE gets burned - benefiting all holders.
          </CardText>
        </Card>

        <Card>
          <CardTitle>🔗 Tokenized AI Agents</CardTitle>
          <CardText>
            Your AI agent becomes a tradable ERC20 token. 
            The community can invest in your agent and benefit from its success.
          </CardText>
        </Card>
      </Grid>

      <Form onSubmit={handleSubmit}>
        <FormTitle>🚀 Launch Your AI Agent</FormTitle>
        
        <InputGroup>
          <Label>AI Agent Name</Label>
          <Input 
            type="text" 
            placeholder="e.g., OG Pepe Trading Bot"
            value={formData.agentName}
            onChange={(e) => setFormData({...formData, agentName: e.target.value})}
          />
        </InputGroup>

        <InputGroup>
          <Label>Token Name</Label>
          <Input 
            type="text" 
            placeholder="e.g., OG Pepe Agent Token"
            value={formData.tokenName}
            onChange={(e) => setFormData({...formData, tokenName: e.target.value})}
          />
        </InputGroup>

        <InputGroup>
          <Label>Token Symbol</Label>
          <Input 
            type="text" 
            placeholder="e.g., OGPAI"
            value={formData.tokenSymbol}
            onChange={(e) => setFormData({...formData, tokenSymbol: e.target.value})}
          />
        </InputGroup>

        <InputGroup>
          <Label>Agent Description</Label>
          <TextArea 
            placeholder="Describe what your AI agent does..."
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
          />
        </InputGroup>

        <InputGroup>
          <Label>Total Token Supply</Label>
          <Input 
            type="number" 
            placeholder="1000000000"
            value={formData.tokenomics}
            onChange={(e) => setFormData({...formData, tokenomics: e.target.value})}
          />
        </InputGroup>

        <InputGroup>
          <Label>Bonding Curve Type</Label>
          <Select 
            value={formData.curveType}
            onChange={(e) => setFormData({...formData, curveType: e.target.value})}
          >
            <option value="linear">Linear (price increases steadily)</option>
            <option value="exponential">Exponential (faster price increase)</option>
            <option value="sigmoid">Sigmoid (slow start, fast middle, slow end)</option>
          </Select>
        </InputGroup>

        <InputGroup>
          <Label>Graduation Fee (basis points)</Label>
          <Select 
            value={formData.graduationFee}
            onChange={(e) => setFormData({...formData, graduationFee: e.target.value})}
          >
            <option value="150">1.5% - Low fee</option>
            <option value="250">2.5% - Standard</option>
            <option value="350">3.5% - Premium</option>
          </Select>
          <Info>
            <InfoLabel>Fee breakdown:</InfoLabel>
            <InfoValue>{(parseInt(formData.graduationFee) / 100)}% buys & burns PEPE</InfoValue>
          </Info>
        </InputGroup>

        <Info>
          <InfoLabel>What happens on graduation:</InfoLabel>
          <InfoValue>LP burned + PEPE bought & burned! 🔥</InfoValue>
        </Info>

        <Button type="submit" disabled={!formData.agentName || !formData.tokenName}>
          🚀 Launch Agent Token
        </Button>
      </Form>
    </Container>
  )
}