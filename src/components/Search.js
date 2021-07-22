const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <form action="/" method="get">
    <label htmlFor="header-search">
      <span className="visually-hidden">Test</span>
    </label>
    <input
      value={searchQuery}
      onInput={e => setSearchQuery(e.target.value)}
      type="text"
      id="header-search"
      placeholder="Search Codes"
      name="s"
    />
  </form>
);

export default SearchBar;
