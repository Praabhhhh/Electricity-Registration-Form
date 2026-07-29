import Registration from "./pages/Registration";
import { FormProvider } from "./context/FormContext";

const App = () => {
  return (
    <FormProvider>

      <Registration />

    </FormProvider>
  );
};

export default App;