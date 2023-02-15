import redirect from 'nextjs-redirect'
import {makeStaticProps} from "@/lib/getStatic";

const Redirect = redirect('/de')

export default function IndexPage() {
  return (
    <Redirect>
      <p>Redirecting...</p>
    </Redirect>
  )
}

export const getStaticProps = makeStaticProps(['common'])