import { useUserContext } from '../hooks/UserContext'
import { monkeyClicked } from '../actions/MonkeyActions';

export function TestClicker() {
  const userContext = useUserContext();

  return (
    <>
      <h1>Bananas: {userContext.gameData.bananas}</h1>
      <h1>Current: {userContext.gameData.currentMonkeyClimbHeight}</h1>
      <h1>Max: {userContext.gameData.maxTreeClimbHeight}</h1>

      <button onClick={() => monkeyClicked(userContext)}>Click</button>
    </>
  )
}
