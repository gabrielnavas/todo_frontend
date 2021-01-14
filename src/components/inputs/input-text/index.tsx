import {
  Container
} from './styles'

export type InputTextProps = {
  type?: 'email' | 'text' | 'password' 
  value?: string | number
  placeholder?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
} 

const InputText = ({ value, placeholder, type, onChange}: InputTextProps) => {
  return (
    <Container 
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

export { InputText }