import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"

const endpoint = "https://ceramic-clay.3boxlabs.com"

type FormValues = {
  name: string
}

interface DidFormProps {
  updateProfile: () => void
}

const DidForm = ({ updateProfile }: DidFormProps) => {
  const { register, handleSubmit } = useForm<FormValues>()
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const name = data.name
    updateProfile(name)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} />
      <input type="submit" />
    </form>
  )
}

export default DidForm
