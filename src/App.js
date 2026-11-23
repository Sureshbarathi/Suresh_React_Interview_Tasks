import React, { lazy, Suspense } from 'react';
import './style.css';
import CrudApplication from './Crud/CrudApplication';
import Counter from './Counter/Counter';
import ToggleSwitch from './ToggleSwitch/ToggleSwitch';
import TodoList from './TodoList/TodoList';
import ParentSibilingComponent from './ParentComponent/ParentComponent';
import ChildToParent from './ChildToParent/ParentComponent';
import CountryStateFilter from './CountryStateFilter/CountryStateFilter';
import ApiCrud from './ApiCrud/ApiCrud';
import Accordion from './Accordion/Accordion';
import ParentCounterTimer from './ParentCounterTimer/ParentComponent';
import ProgressBar from './ProgressBar/ProgressBar';
import InputFocus from './InputFocusUseRef/InputFocusButtonClick';
import CustomHooks from './CustomHooks/CustomHooks';
import ReactMemo from './ReactMemo/Parent';
import UseReducerCount from './UseReducer/UseReducerCount';
import WizardForms from './WizardForms/WizardForms';
import MultiStepForm from './MultiStepForm/MultiStepForm';
import Virtualization from './Virtualization/Virtualization';
import ShowHidePassword from './ShowHidePassword/ShowHidePassword';
import DarkModeToggle from './DarkModeToggle/DarkModeToggle';
import TimerWithPause from './TimerWithPause/TimerWithPause';
import ReactDebounceSearch from './ReactDebounceSearch/ReactDebounceSearch';
import ReactThrottleSearch from './ReactThrottleSearch/ReactThrottleSearch';
import UseCallbackExample from './UseCallbackExample/UseCallbackExample';

// const SuspenseComponent = lazy(() =>
//   import('./SuspenseComponent/SuspenseComponent')
// );

const SuspenseComponent = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import('./SuspenseComponent/SuspenseComponent'));
      }, 2000);
    })
);
export default function App() {
  return (
    <div>
      {/* <Accordion /> */}
      {/* <ApiCrud /> */}
      {/* <ChildToParent /> */}
      {/* <Counter /> */}
      {/* <CountryStateFilter /> */}

      {/* <CrudApplication /> */}
      {/* <CustomHooks /> */}
      {/* <InputFocus /> */}
      {/* <ParentSibilingComponent /> */}
      {/* <ParentCounterTimer /> */}

      {/* <ToggleSwitch /> */}
      {/* <TodoList /> */}
      {/* <ProgressBar /> */}
      {/* <ReactMemo /> */}
      {/* <Suspense fallback={<h2>Loading...</h2>}>
        <SuspenseComponent />
      </Suspense> */}

      {/* <UseReducerCount /> */}
      {/* <WizardForms /> */}
      {/* <MultiStepForm /> */}
      {/* <Virtualization /> */}
      {/* <ShowHidePassword /> */}

      {/* <DarkModeToggle /> */}
      {/* <TimerWithPause /> */}
      <ReactDebounceSearch />
      {/* <ReactThrottleSearch /> */}
      {/* <UseCallbackExample /> */}
    </div>
  );
}
