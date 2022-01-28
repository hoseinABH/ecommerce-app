import {
  createContext,
  ReactNode,
  useContext,
  useReducer,
  useMemo,
} from 'react';

export interface StateModifiers {
  openSidebar: () => void;
  closeSidebar: () => void;
}

export interface StateValues {
  isSidebarOpen: boolean;
}

const stateModifiers = {
  openSidebar: () => {},
  closeSidebar: () => {},
};

const initialState = { isSidebarOpen: false };

type State = StateValues & StateModifiers;

const UIContext = createContext<State>({ ...stateModifiers, ...initialState });

type Action = { type: 'OPEN_SIDEBAR' | 'CLOSE_SIDEBAR' };

function uiReducer(state: StateValues, action: Action) {
  switch (action.type) {
    case 'OPEN_SIDEBAR':
      return {
        ...state,
        isSidebarOpen: true,
      };
    case 'CLOSE_SIDEBAR':
      return {
        ...state,
        isSidebarOpen: false,
      };
  }
}
export function UIProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  const openSidebar = () => dispatch({ type: 'OPEN_SIDEBAR' });
  const closeSidebar = () => dispatch({ type: 'CLOSE_SIDEBAR' });

  const value = useMemo(() => {
    return {
      ...state,
      openSidebar,
      closeSidebar,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.isSidebarOpen]);

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export function useUI() {
  const context = useContext(UIContext);

  if (!context) {
    throw new Error('Somthings went wrong!');
  }

  return context;
}
