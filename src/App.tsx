type ButtonProps = {
  text?: string;
}

function Button(props: ButtonProps) {
  return <button className="bg-violet-500 p-2 border-2">{props.text ?? `Default`}</button>
}

function App() {
  return (
    <>
      <Button/>
    </>
  )  
}

export default App
