import { RenderTags } from "./components/tagRenderer";

const tags = [
  {value:'aggregators', count: 5}, 
  {value:'folksonomy', count: 2, priority: true}, 
  {value:'usability', count: 15}, 
  {value:'joy of use', count: 10}, 
  {value:'social software', count: 2}, 
  {value:'economy', count: 8}, 
  {value:'web 2.0', count: 2, priority: true}, 
  {value:'remixability', count: 9}, 
  {value:'standardization', count: 6}, 
  {value:'microformats', count: 10},
  {value:'datadriven', count: 3},
  {value:'the long tail', count: 10},
  {value:'ajax', count: 10},
  {value:'audio', count: 10},
  {value:'software', count: 2, priority: true},
  {value:'recommendation', count: 6},
  {value:'audio', count: 4},
  {value:'video', count: 1}, 
  {value:'mobility', count: 5}
];


function App() {
  return (
    <div className="App">
      <RenderTags tags={tags} />
    </div>
  );
}

export default App;
