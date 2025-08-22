import HomeSection from "./components/HomeSection";
// import { getServerSession } from 'next-auth'
// import { authOptions } from './api/auth/[...nextauth]/route'

export default async function Home() {
  //const sessionData = await getServerSession(authOptions);
  //console.log(sessionData?.user)
  return (
      <main><HomeSection /></main>
  );
}
