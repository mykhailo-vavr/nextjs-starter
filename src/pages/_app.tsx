import { App as CustomApp } from '@/components/containers';
import { AppPropsWithLayout } from '@/types';

const App = (props: AppPropsWithLayout) => <CustomApp {...props} />;

export default App;
