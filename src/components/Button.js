import '../style/components/Btn.scss';


//button component med tre olika props
function Button({ text, selector, refresh }) {
  console.log(text, selector,refresh)
  return (
    <button className={selector} onClick={refresh}>
      {text}
    </button>
    
  );
}

export default Button;
