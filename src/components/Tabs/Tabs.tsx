import { JSX, createSignal, For } from "solid-js";
import { TabsContainer, TabList, TabButton, TabContent } from "./Tabs.styled";

export interface Tab {
  label: string;
  content: JSX.Element;
}

export interface TabsProps {
  tabs: Tab[];
  defaultTab?: number;
}

const Tabs = (props: TabsProps) => {
  const [activeTab, setActiveTab] = createSignal(props.defaultTab || 0);

  return (
    <TabsContainer>
      <TabList>
        <For each={props.tabs}>
          {(tab, index) => (
            <TabButton
              active={activeTab() === index()}
              onClick={() => setActiveTab(index())}
            >
              {tab.label}
            </TabButton>
          )}
        </For>
      </TabList>
      <TabContent>{props.tabs[activeTab()].content}</TabContent>
    </TabsContainer>
  );
};

export default Tabs;
