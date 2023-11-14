import { Input } from '@/components/ui/input'

import { Button } from './components/ui/button'

export function App() {
  return (
    <div style={{ fontFamily: 'roboto' }}>
      Hello
      <Button />
      <Button as={'a'} href={'/link'} name={'link'} variant={'primary'} />
      <Input />
    </div>
  )
}
