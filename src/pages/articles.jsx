import redirect from 'nextjs-redirect'
import {makeStaticProps} from "@/lib/getStatic";

const Redirect = redirect('/de/articles')

export default function ArticlesPage() {
  return (
    <Redirect>
      <p>Redirecting...</p>
    </Redirect>
  )
}

export const getStaticProps = makeStaticProps(['common'])