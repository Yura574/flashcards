import { Input } from '@/components/ui/input'

import { Button } from './components/ui/button'

export function App() {
  return (
    <div style={{ fontFamily: 'roboto' }}>
      Hello
      <Button disabled>button</Button>
      <Input onClick={() => alert('12')} value={'lololo'} variant={'search'} />
    </div>
  )
}
