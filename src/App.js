import { Flex } from './components/Flex';
import { Title } from './components/Title'
import { Console } from './components/Console'
import { Button } from './components/Button'
import {AppWrapper} from './styles/styles'


function App() {
  return (
    <AppWrapper>
      <Flex justify="center">
        <Title>Console</Title>
      </Flex>
      <Flex direction="column" margin="10px 0">
        <Console/>
        <Button outlined color="green" align="flex-end">Отправить</Button>
      </Flex>
    </AppWrapper>
  );
}

export default App;
