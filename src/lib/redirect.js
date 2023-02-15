export function makeRedirect(target) {
  return () => {
    return {
      redirect: {
        destination: target,
        permanent: false,
      }
    }
  }
}