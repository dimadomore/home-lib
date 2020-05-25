import { useContext } from 'react';
import { GlobalStateContext } from '../components/providers/global-state-provider';

export default function useGlobalState() {
  const { globalState, setGlobalState } = useContext(GlobalStateContext);

  return {
    globalState,
    setGlobalState,
  };
}
