import { FormEvent, useState } from "react"
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "./components/ui/alert-dialog";

function App() {

  const [name, setName] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!name) return
    setIsOpen(true);
  }

  return <div>
    <form onSubmit={onSubmit}>
      <Input type="text" value={name} onChange={e => setName(e.currentTarget.value)} placeholder="input your name" />
      <Button type="submit">submit</Button>
    </form>
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Value</AlertDialogTitle>
          <AlertDialogDescription>
            {name}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={() => setIsOpen(false)}>Close</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>

  </div>
}

export default App
