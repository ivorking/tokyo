const Title = props => <h1 className="tc">{props.title}</h1>

const Banner = props => (
   <h1 className="tc f1 yellow pa3">Hello
      {props.firstName}
      {props.surname}
   </h1>
);

const App = () => (
   <div>
      <Title title="welcome to my site"/>
      <Banner firstName="lawrence" surname="gosset"/>
   </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
