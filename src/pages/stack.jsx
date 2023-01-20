import redirect from 'nextjs-redirect'
import {makeStaticProps} from "@/lib/getStatic";

const Redirect = redirect('/de/stack')

export default function StackPage() {
  return (
    <Redirect>
      <p>Redirecting...</p>
    </Redirect>
  )
}

export const getStaticProps = makeStaticProps(['common'])