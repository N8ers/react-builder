import { Builder } from "../comonents/FormBuilder"

export default function Index() {
  const formBuilder = new Builder()
  const form = formBuilder
    .addHeader("hi hi")
    .addTextInput("First Name: ")
    .addHeader("i am the second header!")
    .buildForm()

  return (
    <div>
      <h1>The Builder Pattern with React!</h1>

      {form}
    </div>
  )
}
