function Plusbutton({ refresh }) {
  return (
    <div className="plusbutton" onClick={() => refresh()}>
      <div className="line-1"></div>
      <div className="line-2"></div>
    </div>
  );
}

export default Plusbutton;
