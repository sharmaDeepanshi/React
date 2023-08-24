import './App.css';
import Messages from './components/messages';

function App() {
 // let lang="React JS";
 // let lab="MCA LAB 1";
 //let info=["React JS","MCA LAB 1"];
 let info=[
  {
  lang: "REACT JS",
  LAB:"MCA LAB 1",
 },
 {
  lang: "DOT NET",
  LAB:"MCA LAB 2",
 },
 {
  lang: "C & java",
  LAB:"g-block G-113",
 },
   ]
  return (
    <div className="App">
       {/*<message lang={lang} lab={lab} />*/}
      {/* <Messages info={info[0]} />
       <Messages info={info[1]} />
  <Messages info={info[2]} />*/}
  {info.map(val) => (
      <Messages info={val} />
    )
  }
    </div>
  );
}

export default App;
