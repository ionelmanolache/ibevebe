import { useCallback, useEffect, useMemo, useReducer } from 'react';
import { appReducer, changeTheme } from './app/reducer';
import Layout from './components/Layout';
import { ApplicationProvider, ThemeProvider } from './contexts';

function App() {

  const [state, dispatch] = useReducer(appReducer, { name: '', theme: 'light', variant: 'variant01' });

  const appContextValue = useMemo(() => {
    return {
      name: state.name, appDispatch: dispatch
    }
  }, [state.name]);

  useEffect(() => {
    switch (state.variant) {
      case 'variant01':
        import('./theme/variant01/theme-variant01.scss').then(() => {
          // setLoaded(true);
        });
        break;
      default:
        import('./theme/theme.scss').then(() => {
          // setLoaded(true);
        });
    }
  }, [state.variant]);

  const toogleTheme = useCallback(() => {
    // console.log("🚀 ~ toogleTheme ~ state.theme:", state.theme)
    dispatch(changeTheme(state.theme === 'light' ? 'dark' : 'light'));
  }, [state.theme]);

  return (
    <ApplicationProvider appContextValue={appContextValue}>
      <ThemeProvider variant={state.variant} theme={state.theme} toggleTheme={toogleTheme}>
        <Layout />
      </ThemeProvider >
    </ApplicationProvider>
  )
}

export default App
