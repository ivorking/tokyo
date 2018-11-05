// const Title = props => <h1 className="tc">{props.title}</h1>

// const Banner = props => (
//    <h1 className="tc f1 yellow pa3">Hello
//       {props.firstName}
//       {props.surname}
//    </h1>
// );

const Highlight = ({ color, children }) => (
   <span className={`relative highlight highlight-${props.color}`}>
      <span className="relative z-2">{children}</span>
   </span>
);

const NavItem = ({ className, href, children }) => (
   <li className={`m2-ns f6 f4-1 tc ${className}`}>
      <a className="white no-underline" href={href}>
         {children}
      </a>
   </li>
)

const Nav = () => (
   <nav className = 'pt3 pt4-ns mb4 mb0-ns'>
      <ul className='list flex flex-wrap flex-nowrap-ns justify-between items-center pa0 ma0'>
         {menu.map(item => <NavItem {...item} />)}
      </ul>
   </nav>
);

const Intro = () => (
   <div className="m-auto-ns f4 f3-m f2-l tc w-80-l normal">
      <div className="mb3 mb4-ns">
         <div>
         <Highlight color="aqua">Lost in Tokyo</Highlight>
         is a directory of fun places to see, play in and <Highlight color="yellow">explore</Highlight>, in <Highlight color="blue">Tokyo</Highlight>, Japan.
         </div>
         <div>
         From <Highlight color="yellow">museums</Highlight> and galleries, to Robot Restaurants and kitten cafes, Tokyo is the gift that keeps on giving. Dattebayo!
         </div>
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
      </div>
   </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
