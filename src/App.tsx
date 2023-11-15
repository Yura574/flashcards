import { Input } from '@/components/ui/input'

import { Button } from './components/ui/button'

export function App() {
  return (
    <div style={{ fontFamily: 'roboto' }}>
      Hello
      <Button />
      <Button as={'a'} href={'/link'} onClick={() => alert('asas')} variant={'primary'} />
      <Input onClick={() => alert('12')} value={'lololo'} />
    </div>
  )
}
