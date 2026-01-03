import { CORE_CONCEPTS } from "./dataSource/data.js";
import CoreConcept from "./components/CoreConcept.jsx";
import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton.jsx";
import "./App.css";

function handleTabClick(selectedTab) {
  console.log(selectedTab);
}

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h3> Core Concepts </h3>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            ></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>

        <section id="examples">
          <div>
            <h2> Example </h2>
            <menu>
              <TabButton onSelect={() => handleTabClick("components")}>
                Components
              </TabButton>
              <TabButton onSelect={() => handleTabClick("jsx")}>
                {" "}
                JSX{" "}
              </TabButton>
              <TabButton onSelect={() => handleTabClick("props")}>
                {" "}
                Props{" "}
              </TabButton>
              <TabButton onSelect={() => handleTabClick("state")}>
                {" "}
                State{" "}
              </TabButton>
            </menu>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
