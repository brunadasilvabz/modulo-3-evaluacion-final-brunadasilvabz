const FilterByName = (props) => {
  const handleChangeName = (ev) => {
    props.handleFilterName(ev.target.value);
  };
  return (
    <input
      type="text"
      name="search"
      id="search"
      placeholder="Morty Smith"
      value={props.FilterByName}
      onChange={handleChangeName}
    />
  );
};

export default FilterByName;