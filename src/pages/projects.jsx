import redirect from 'nextjs-redirect'
import {makeStaticProps} from "@/lib/getStatic";

const Redirect = redirect('/de/projects')

export default function ProjectsPage() {
  return (
    <Redirect>
      <p>Redirecting...</p>
    </Redirect>
  )
}

export const getStaticProps = makeStaticProps(['common'])