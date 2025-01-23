
import Homepage from './components/Homepage';
import GlobalContextsProvider from './components/plasmic/tutorial_app_in_5_minutes/PlasmicGlobalContextsProvider'

function App() {
  return (<GlobalContextsProvider><Homepage /></GlobalContextsProvider>);
}

export default App;
  