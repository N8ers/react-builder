import { useState } from "react"

import TextInput from "./textInput"
import HeaderComponent from "./HeaderComponent"

function getFormComponents({ componentName, componentProps }) {
  const keyId = Math.floor(Math.random() * 10000)

  if (componentName === HeaderComponent) {
    return (
      <HeaderComponent key={`HeaderComponent-${keyId}`} {...componentProps} />
    )
  }

  if (componentName === TextInput) {
    return <TextInput key={`TextInput-${keyId}`} {...componentProps} />
  }
}

export class Builder {
  constructor() {
    this.formFields = []
  }

  addHeader(headerMessage) {
    const componentProps = {
      headerMessage,
    }
    this.formFields.push({ componentName: HeaderComponent, componentProps })
    return this
  }

  addTextInput() {
    const componentProps = {}
    this.formFields.push({ componentName: TextInput, componentProps })
    return this
  }

  buildForm() {
    return (
      <form>
        {this.formFields.map((formField) => getFormComponents(formField))}
        <button>submit</button>
      </form>
    )
  }
}

export default function FormBuilder() {
  const [formState, setFormState] = useState({})
  // const [form, setForm] = useState({})

  const newForm = new Builder()
  console.log(newForm)
  // const form = (
  //   <>
  //     <TextInput />
  //   </>
  // )

  return { form: newForm.form, formState }
}
