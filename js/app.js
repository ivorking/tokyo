// const Title = props => <h1 className="tc">{props.title}</h1>

// const Banner = props => (
//    <h1 className="tc f1 yellow pa3">Hello
//       {props.firstName}
//       {props.surname}
//    </h1>
// );

const Highlight = props => (
   <span className={`relative highlight highlight-blue`}>
      <span className="relative z-2">{props.children}</span>
   </span>
)

const Intro = () => (
   <div className="m-auto-ns f4 f3-m f2-l tc w-80-l normal">
      <div className="mb3 mb4-ns">
         <Highlight color="aqua">Lost in Tokyo</Highlight>
         is a directory of fun places to see, play in and explore, in Tokyo, Japan.
         </div>
         <div>
         From museums and galleries, to Robot Restaurants and kitten cafes, Tokyo is the gift that keeps on giving. Dattebayo!
         </div>
   </div>
);

const App = () => (
   <div>
      <div className="min-vh-100 ph4 flex flex-column">
         <Intro />
      </div>
      <div className="flex flex-wrap container">

      </div>
   </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
