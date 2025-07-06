import Layout from "./components/Layout";
import Home from "./pages/Home";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
