// const Title = props => <h1 className="tc">{props.title}</h1>

// const Banner = props => (
//    <h1 className="tc f1 yellow pa3">Hello
//       {props.firstName}
//       {props.surname}
//    </h1>
// );

const Highlight = ({ children, type }) => (
  <span className={`relative highlight highlight-${type}`}>
    <span className="relative z-2">{children}</span>
  </span>
);

const Attraction = ({title, description, className, image}) => (
  <div
    className={`ph4 ph5-ns ph0-l mb4 mb5-ns w-100 overflow-hidden pointer attraction ${className}`}
  >
    <div className="relative">
      <div className="absolute w-100 h-100 flex items-center pa3 pa4-ns bg-aqua overlay">
        <div>
          <h1 className="f4 f3-ns mt0 mb2 regular black normal lh-title">{title}</h1>
          <p className="lh-title lh-copy-ns mv0 black f6 measure-l">{description}</p>
        </div>
      </div>
      <img src={`../images/${image}`} className="db" />
    </div>
  </div>
)

const NavItem = ({ className, href, logo, children }) => (
  <li className={`mh2-ns f6 f4-l tc ${className}`}>
    <a className="white no-underline" href={href}>
      {logo ? <img src="../images/logo.svg" className="db center logo" /> :
      children}
    </a>
  </li>
);

const Nav = () => (
  <nav className="pt3 pt4-ns mb4 mb0-ns">
    <ul className="list flex flex-wrap flex-nowrap-ns justify-between items-center pa0 ma0">
      {menu.map(item => (
        <NavItem {...item} />
      ))}
    </ul>
  </nav>
);

const Intro = () => (
  <div className="m-auto-ns f5 f3-m f2-l tc w-80-l normal">
    <div className="mb3 mb4-ns">
      <Highlight type="aqua">Lost in Tokyo</Highlight> is a directory of fun places to see, play in
      and <Highlight type="yellow">explore</Highlight>, in <Highlight type="blue">Tokyo</Highlight>,
      Japan.
    </div>
    <div>
      From <Highlight type="blue">museums</Highlight> and{' '}
      <Highlight type="yellow">galleries</Highlight>, to{' '}
      <Highlight type="pink">restaurantsx</Highlight> and{' '}
      <Highlight type="pink">kitten cafes</Highlight>, Tokyo is the gift that keeps on giving.
      {` `}
      <Highlight type="yellow">Dattebayo!</Highlight>
    </div>
  </div>
);

const App = () => (
  <div>
    <div className="min-vh-100 ph4 flex flex-column">
      <Nav />
      <Intro />
    </div>
    <div className="flex flex-wrap container">
      { attractions.map(attraction => <Attraction {...attraction} /> )}
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
